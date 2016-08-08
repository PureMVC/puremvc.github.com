#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::core::Controller;

use org::puremvc::perl5::multicore::core::View;
use org::puremvc::perl5::multicore::patterns::observer::Observer;

my %_instances = ();

my $new = sub {
  my ( $class, $key ) = @_;
  
  my $self = {};
  bless( $self, $class );
  
  $self->{_multiton_key} = $key;
  $self->{_commands} = {};
    
  $self->initializeController();
  
  return $self;
};

#**********************
#**********************
sub initializeController {
  my $self = shift;
  
  $self->{_view} = org::puremvc::perl5::multicore::core::View->getInstance( $self->{_multiton_key} ) unless exists $self->{_view};
}
  
#**********************
sub getInstance {
  my ( $class, $key ) = @_;
    
  $_instances{$key} = $new->($class, $key) unless exists $_instances{$key};
  
  return $_instances{$key};
}

#**********************
sub executeCommand {
  my ( $self, $notification ) = @_;
  
  my $command_class_ref = $self->{_commands}->{ $notification->getName() };
  
  return unless defined $command_class_ref;

  my $command = $command_class_ref->new();
  $command->initializeNotifier( $self->{_multiton_key} );
  $command->execute( $notification );
  
}

#**********************
sub registerCommand {
  my ( $self, $notification_name, $command_class_ref ) = @_;
  
  if ( ! defined $self->{_commands}->{$notification_name} ) {
    $self->{_view}->registerObserver( $notification_name, org::puremvc::perl5::multicore::patterns::observer::Observer->new( "executeCommand", $self ) );
  }
  
  $self->{_commands}->{$notification_name} = $command_class_ref;
  
}

#**********************
sub hasCommand {
  my ( $self, $notification_name ) = @_;
  
  return exists $self->{_commands}->{$notification_name};
}

#**********************
sub removeCommand {
  my ( $self, $notification_name ) = @_;
  
  return unless $self->hasCommand( $notification_name );

  $self->{_view}->removeObserver( $notification_name, $self );
  
  delete $self->{_commands}->{$notification_name};
  
}

#**********************
sub removeController {
  my ( $class, $key ) = @_;
  
  delete $_instances{$key};
  
}

#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::multicore::core::Controller >>

Multiton responsible for executing L<commands|SimpleCommand> in response to a L<notification|Notification>.

=head1 DESCRIPTION

In PureMVC, the C<< Controller >> class follows the 'Command and Controller' strategy, and assumes these responsibilities:

=over 4

=item *

Remembering which L<commands|SimpleCommand> are intended to handle which L<notification|Notification>.

=item *

Registering itself as an L<observer|Observer> with the L<View|View> for each L<notification|Notification> that it has a L<command|SimpleCommand> mapping for.

=item *

Creating a new instance of the proper L<command|SimpleCommand> to handle a given L<notification|Notification> when notified by the L<View|View>.

=item *

Calling the L<command's|SimpleCommand> C<< execute >> method, passing in the L<notification|Notification>. 

=back

Your application must register L<commands|SimpleCommand> with the C<< Controller >>.

The simplest way is to subclass L<Facade|Facade> class, and use its C<< initializeController >> method to add your registrations.

=head1 INTERFACE

=head2 Methods

=over 4

=item getInstance

C<< sub getInstance( $key ); >>

Returns the multiton instance of the C<< Controller >> I<for a given key>.

B<Parameters>

=over 8

=item *

C<< $key - String >>

Unique key identifying the multiton instance to retrieve.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::core::Controller >> - The multiton instance of the C<< Controller >> for key C<< $key >>.

=item initializeController

C<< sub initializeController(); >>

Initialize the multiton instance of the C<< Controller >>.
This method is automatically called during multiton instantiation.

Note that if you are using a subclass of L<View|View> in your application, you should I<also> subclass C<< Controller >> and override the C<< initializeController >> method in the following way:

  # ensure that the Controller is talking to my View implementation
  sub initializeController {
    my $self = shift;
  
    $self->{_view} = com::me::myapp::MyView->getInstance( $self->{_multiton_key} ) unless exists $self->{_view};
  }

=item registerCommand

C<< sub registerCommand( $notification_name, $command_class_ref ); >>

Register a particular L<command|SimpleCommand> class as the handler for a particular L<notification|Notification>.

C<< $command_class_ref >> is a string holding the name of the L<command|SimpleCommand> class, e.g. "C<< com::me::myapp::MyCommand >>".

If a L<command|SimpleCommand> has already been registered to handle L<notification|Notification> with this name, it is no longer used, the new L<command|SimpleCommand> is used instead.

The L<observer|Observer> for the new L<command|SimpleCommand> is only created if this the first time a L<command|SimpleCommand> has been registered for this L<notification|Notification> name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notifications|Notification> the registered C<< Command >> will handle.

=item *

C<< $command_class_ref - String >>

Class name of the C<< Command >> to handle L<notification|Notification> called C<< $notification_name >>. 

=back

=item executeCommand

C<< sub executeCommand( $notification ); >>

If a L<command|SimpleCommand> has previously been registered to handle a given L<notification|Notification>, then it is executed.

B<Parameters>

=over 8

=item *

C<< $notification - org::puremvc::perl5::multicore::patterns::observer::Notification >>

The L<notification|Notification> to handle.

=back

=item removeCommand

C<< sub removeCommand( $notification_name ); >>

Remove a previously registered L<command|SimpleCommand> for a given L<notification|Notification> name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notification|Notification> for which to remove a registered L<command|SimpleCommand>.

=back

=item hasCommand

C<< sub hasCommand( $notification_name ); >>

Check whether a L<command|SimpleCommand> is registered for a given L<notification|Notification> name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notification|Notification> for which to check a registered L<command|SimpleCommand>.

=back

B<Returns>

C<< scalar >> - 1 if a L<Command|SimpleCommand> class is registered with the C<< Controller >> for L<notifications|Notification> named C<< $notification_name >>, "" otherwise.

=item removeController

C<< sub removeController( $key ); >>

Remove a C<< Controller >> instance from the multiton.

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

Unique I<key> identifying C<< Controller's >> multiton instance. You should not have to access it and I<must not> update it in normal usage.

=item _view

L<View|View> multiton instance attached to the C<< Controller >>. You should not have to access it and I<must not> update it in normal usage.

=item _commands

Array reference on registered L<commands|SimpleCommand> with the C<< Controller >>. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::multicore::core::Model|Model>

L<org::puremvc::perl5::multicore::core::View|View>

L<org::puremvc::perl5::multicore::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::multicore::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::multicore::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::multicore::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::multicore::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::multicore::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::multicore::patterns::observer::Observer|Observer>

=cut