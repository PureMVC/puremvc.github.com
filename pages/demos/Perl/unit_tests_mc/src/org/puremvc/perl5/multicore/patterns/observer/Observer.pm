#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::patterns::observer::Observer;

use strict; use warnings;

#**********************
#**********************
sub new {
  my ( $class, $notifyMethod, $notifyContext ) = @_;
    
  my $self = {};
  bless( $self, $class );
  
  $self->setNotifyMethod( $notifyMethod );
  $self->setNotifyContext( $notifyContext );
  
  return $self;
}

#**********************
sub setNotifyMethod {
  my ( $self, $notifyMethod ) = @_;
  
  $self->{_notify} = $notifyMethod;
  
}

#**********************
sub setNotifyContext {
  my ( $self, $notifyContext ) = @_;
  
  $self->{_context} = $notifyContext;
  
}

#**********************
sub getNotifyMethod {
  my ( $self ) = @_;
  
  return $self->{_notify};
  
}

#**********************
sub getNotifyContext {
  my ( $self ) = @_;
  
  return $self->{_context};
  
}

#**********************
sub notifyObserver {
  my ( $self, $notification ) = @_;
  
  my $context = $self->{_context};
  my $method = $self->{_notify};
  
  $context->$method( $notification );
}

#**********************
sub compareNotifyContext {
  my ( $self, $object ) = @_;
  
  return $object == $self->{_context};
}  

#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::multicore::patterns::observer::Observer >>

Implementation of the pureMVC C<< Observer >> pattern.

=head1 DESCRIPTION

An C<< Observer >> is an object that encapsulates information about an interested object with a method that should be called when a particular L<notification|Notification> is broadcast.

In PureMVC, the C<< Observer >> class assumes these responsibilities:

=over 4

=item *

Encapsulate the L<notification|Notification> (callback) method of the interested object.

=item *

Encapsulate the L<notification|Notification> context of the interested object.

=item *

Provide methods for setting the L<notification|Notification> method and context.

=item *

Provide a method for notifying the interested object.

=back

=head1 INTERFACE

=head2 Methods

=over 8

=item new

C<< sub new( $notify_method, $notify_context ); >>

Constructor.

C<< $notify_method >> notification method on C<< $notify_context >> interested object should take one parameter of type L<Notification|Notification>.

B<Parameters>

=over 8

=item *

C<< $notify_method - String >>

Method B<name> inside C<< $notify_context >> object which is called when notifying C<< $notify_context >>.

=item *

C<< $notify_context - * >>

Object interested in being notified.

=back

=item notifyObserver

C<< sub notifyObserver( $notification ); >>

Notifies the interested object.

B<Parameters>

=over 8

=item *

C<< $notification - org::puremvc::perl5::multicore::patterns::observer::Notification >>

The L<notification|Notification> to pass to the interested object's notification method.

=back

=item setNotifyMethod

C<< sub setNotifyMethod( $notify_method ); >>

L<Notification|Notification> method setter.

B<Parameters>

=over 8

=item *

C<< $notify_method - String >>

Method B<name> inside C<< context >> object which is called when notifying C<< context >> object.

=back

=item getNotifyMethod

C<< sub getNotifyMethod(); >>

L<Notification|Notification> method getter.

B<Returns>

C<< String >> - Method B<name> inside C<< context >> object which is called when notifying C<< context >> object.

=item setNotifyContext

C<< sub setNotifyContext( $notify_context ); >>

L<Notification|Notification> C<< context >> setter.

B<Parameters>

=over 8

=item *

C<< $notify_context - * >>

Object interested in being notified.

=back

=item getNotifyContext

C<< sub getNotifyContext(); >>

L<Notification|Notification> C<< context >> getter.

B<Returns>

C<< * >> - Object interested in being notified.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::multicore::core::Model|Model>

L<org::puremvc::perl5::multicore::core::View|View>

L<org::puremvc::perl5::multicore::core::Controller|Controller>

L<org::puremvc::perl5::multicore::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::multicore::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::multicore::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::multicore::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::multicore::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::multicore::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

=cut