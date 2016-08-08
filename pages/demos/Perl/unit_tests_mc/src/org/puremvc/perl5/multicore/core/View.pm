#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::core::View;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::observer::Observer;

my %_instances = ();

my $new = sub {
  my ( $class, $key ) = @_;
  
  my $self = {};
  bless( $self, $class );
  
  $self->{_multiton_key} = $key;
  $self->{_mediators} = {};
  $self->{_observers} = {};
  
  $self->initializeView();  
  
  return $self;
};

#**********************
#**********************
sub initializeView {
}

#**********************
sub getInstance {
  my ( $class, $key ) = @_;
    
  $_instances{$key} = $new->($class, $key) unless exists $_instances{$key};
  
  return $_instances{$key};
}

#**********************
sub registerObserver {
  my ( $self, $notification_name, $observer ) = @_;
  
  # $self->{_observers}->{$notification_name} is reference on an array of observers for $notification_name
  my $observersRef = $self->{_observers}->{$notification_name};
  
  if ( defined( $observersRef ) ) {
    push( @$observersRef, $observer );
  } else {
    $self->{_observers}->{$notification_name} = [ $observer ];
  }

}

#**********************
sub notifyObservers {
  my ( $self, $notification ) = @_;
    
  # $self->{_observers}->{$notification->getName()} is reference on an array of observers for $notification
  my $observersRef = $self->{_observers}->{$notification->getName()};
  
  return if ! defined $observersRef;
  
  # Copy observers from reference array to working array, 
  # since the reference array may change during the notification loop
  my @observers_array = ( @$observersRef );
  
  foreach my $observer (@observers_array) {
    $observer->notifyObserver( $notification );
  }
  
}

#**********************
sub removeObserver {
  my ( $self, $notification_name, $observer ) = @_;
  
  # $self->{_observers}->{$notification_name} is reference on an array of observers for $notification_name
  my $observersRef = $self->{_observers}->{$notification_name};
  
  return if ! defined $observersRef;
  
  for ( my $i = 0; $i < @$observersRef; ++$i ) {
    my $observerObj = $observersRef->[$i];
    next if ! $observerObj->compareNotifyContext( $observer );
    splice( @$observersRef, $i, 1 );
    # There can only be one Observer for a given $observer
    last;
  }
  
  delete $self->{_observers}->{$notification_name} if @$observersRef == 0;

}

#**********************
sub registerMediator {
  my ( $self, $mediator ) = @_;
  
  my $mediator_name = $mediator->getMediatorName();
  
  return if exists $self->{_mediators}->{$mediator_name}; # mediator already registered
  
  $mediator->initializeNotifier( $self->{_multiton_key} );
  
  $self->{_mediators}->{$mediator_name} = $mediator;

  foreach my $notification_name ( @{ $mediator->listNotificationInterests() } ) {
    $self->registerObserver( $notification_name, org::puremvc::perl5::multicore::patterns::observer::Observer->new( "handleNotification", $mediator ) );
  }
  $mediator->onRegister();

}

#**********************
sub retrieveMediator {
  my ( $self, $mediator_name ) = @_;
  
  return $self->{_mediators}->{$mediator_name};
  
}

#**********************
sub removeMediator {
  my ( $self, $mediator_name ) = @_;
  
  my $mediator = $self->{_mediators}->{$mediator_name};
  
  return undef unless defined $mediator;
  
  foreach my $notification_name ( @{$mediator->listNotificationInterests()} ) {
    $self->removeObserver( $notification_name, $mediator );
  }
  
  delete $self->{_mediators}->{$mediator_name};

  $mediator->onRemove();
  
  return $mediator;
}

#**********************
sub hasMediator {
  my ( $self, $mediator_name ) = @_;
  
  return exists $self->{_mediators}->{$mediator_name};
  
}

#**********************
sub removeView {
  my ( $class, $key ) = @_;
  
  delete $_instances{$key};
  
}

#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::multicore::core::View >>

Multiton responsible for implementing the MVC C<< View >> pattern.

=head1 DESCRIPTION

In PureMVC, the C<< View >> class assumes these responsibilities:

=over 4

=item *

Maintain a cache of L<Mediator|Mediator> instances.

=item *

Provide methods for registering, retrieving, and removing L<mediators|Mediator>.

=item *

Notifiying L<mediators|Mediator> when they are registered or removed.

=item *

Managing the L<observers|Observer> lists for each L<notification|Notification> in the application.

=item *

Providing a method for attaching L<observers|Observer> to a L<notification's|Notification> observer list.

=item *

Providing a method for broadcasting a L<notification|Notification>.

=item *

Notifying the L<observers|Observer> of a given L<notification|Notification> when it broadcast.

=back

=head1 INTERFACE

=head2 Methods

=over 4

=item getInstance

C<< sub getInstance( $key ); >>

Returns the multiton instance of the C<< View >> I<for a given key>.

B<Parameters>

=over 8

=item *

C<< $key - String >>

Unique key identifying the multiton instance to retrieve.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::core::View >> - The multiton instance of the C<< View >> for key C<< $key >>.

=item initializeView

C<< sub initializeView(); >>

Initialize the multiton instance of the C<< View >>.
This method is automatically called during multiton instantiation.

This is where you will achieve your C<< View >> subclass specific initializations if your application actually overrides pureMVC C<< View >> class.

=item registerObserver

C<< sub registerObserver( $notification_name, $observer ); >>

Register an L<observer|Observer> to be notified of L<notifications|Notification> with a given name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notifications|Notification> the registered observer will be notified of.

=item *

C<< $observer - org::puremvc::perl5::multicore::patterns::observer::Observer >>

The registered observer with the C<< View >>. 

=back

=item notifyObservers

C<< sub notifyObservers( $notification ); >>

Notify the L<observer|Observer> for a particular L<notification|Notification>.

All previously attached L<observer|Observer> for this L<notification's|Notification> list are notified and are passed a reference to the L<notification|Notification> in the order in which they were registered.

B<Parameters>

=over 8

=item *

C<< $notification - org::puremvc::perl5::multicore::patterns::observer::Notification >>

Instance of L<Notification|Notification> the observers will receive as a parameter when notified.

=back

=item removeObserver

C<< sub removeObserver( $notification_name, $observer ); >>

Remove the L<observer|Observer> from the observers list for a given L<notification|Notification> name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notifications|Notification> the registered observer will be removed from.

=item *

C<< $observer - org::puremvc::perl5::multicore::patterns::observer::Observer >>

The registered observer with the C<< View >> to be removed. 

=back

=item registerMediator

C<< sub registerMediator( $mediator ); >>

Register a L<Mediator|Mediator> instance with the C<< View >>. During registration L<mediator's|Mediator> C<< getMediatorName >> method is called by C<< View >> multiton to map C<< $mediator >> instance with its name.

Any registered L<mediator|Mediator> is afterwards retrieved, removed or checked by its name.

Registers the L<mediator|Mediator> so that it can be retrieved by name, and further interrogates the L<mediator|Mediator> for its L<notification|Notification> interests.

If the L<mediator|Mediator> returns any L<notification|Notification> name to be notified about, an L<observer|Observer> is created encapsulating the L<mediator|Mediator> instance's C<< handleNotification >> method and registering it as an L<observer|Observer> for all L<notifications|Notification> the L<mediator|Mediator> is interested in.

B<Parameters>

=over 8

=item *

C<< $mediator - org::puremvc::perl5::multicore::patterns::mediator::Mediator >>

A L<Mediator|Mediator> instance to register with the C<< View >>.

=back

=item retrieveMediator

C<< sub retrieveMediator( $mediator_name ); >>

Retrieve from the C<< View >> a L<mediator|Mediator> registered with name C<< $mediator_name >>.

B<Parameters>

=over 8

=item *

C<< $mediator_name - String >>

Name of the L<mediator|Mediator> to retrieve from the C<< View >>.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::mediator::Mediator >> - The L<Mediator|Mediator> instance retrieved from the C<< View >>.

=item removeMediator

C<< sub removeMediator( $mediator_name ); >>

Remove from the C<< View >> a L<mediator|Mediator> registered with name C<< $mediator_name >>.

B<Parameters>

=over 8

=item *

C<< $mediator_name - String >>

Name of the L<mediator|Mediator> to remove from the C<< View >>.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::mediator::Mediator >> - The L<Mediator|Mediator> instance removed from the C<< View >>.

=item hasMediator

C<< sub hasMediator( $mediator_name ); >>

Check whether a L<mediator|Mediator> is registered with name C<< $mediator_name >> or not.

B<Parameters>

=over 8

=item *

C<< $mediator_name - String >>

Name of the L<mediator|Mediator> to check.

=back

B<Returns>

C<< scalar >> - 1 if a L<Mediator|Mediator> instance is registered with the C<< View >> with name C<< $mediator_name >>, "" otherwise.

=item removeView

C<< sub removeView( $key ); >>

Remove a C<< View >> instance from the multiton.

B<Parameters>

=over 8

=item *

C<< $key - String >>

Identifier of the multiton instance to remove.

=back

=back

=head2 Properties

=over 4

=item _multiton_key

Unique I<key> identifying C<< View's >> multiton instance. You should not have to access it and I<must not> update it in normal usage.

=item _mediators

Array reference on registered L<mediators|Mediator> with the C<< View >>. You should not have to access it and I<must not> update it in normal usage.

=back

=over 4

=item _observers

Array reference on registered L<observers|Observer> with the C<< View >>. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::multicore::core::Model|Model>

L<org::puremvc::perl5::multicore::core::Controller|Controller>

L<org::puremvc::perl5::multicore::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::multicore::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::multicore::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::multicore::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::multicore::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::multicore::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::multicore::patterns::observer::Observer|Observer>

=cut