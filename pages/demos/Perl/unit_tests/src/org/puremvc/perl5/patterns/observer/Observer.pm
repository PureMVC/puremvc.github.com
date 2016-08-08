#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::patterns::observer::Observer;

use strict; use warnings;

#**********************
#**********************
sub new {
  my ( $class, $notify_method, $notify_context ) = @_;
    
  my $self = {};
  bless( $self, $class );
  
  $self->setNotifyMethod( $notify_method );
  $self->setNotifyContext( $notify_context );
  
  return $self;
}

#**********************
sub setNotifyMethod {
  my ( $self, $notify_method ) = @_;
  
  $self->{_notify} = $notify_method;
  
}

#**********************
sub setNotifyContext {
  my ( $self, $notify_context ) = @_;
  
  $self->{_context} = $notify_context;
  
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

C<< org::puremvc::perl5::patterns::observer::Observer >>

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

=item *

C<< new( $notify_method, $notify_context ) >>

Constructor.

C<< $notify_method >> notification method on C<< $notify_context >> interested object should take one parameter of type L<Notification|Notification>.

Parameters:

=over 8

=item *

C<< $notify_method >>: method inside C<< $notify_context >> object which is called when notifying C<< $notify_context >>.

=item *

C<< $notify_context >>: object interested in being notified.

=back

=item *

C<< notifyObserver( $notification ) >>

Notifies the interested object.

Parameters:

=over 8

=item *

C<< $notification >>: the L<notification|Notification> to pass to the interested object's notification method.

=back

=item *

C<< setNotifyMethod( $notify_method ) >>

L<Notification|Notification> method setter.

=item *

C<< getNotifyMethod() >>

L<Notification|Notification> method getter.

=item *

C<< setNotifyContext( $notify_context ) >>

L<Notification|Notification> context setter.

=item *

C<< getNotifyContext() >>

L<Notification|Notification> context getter.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::Model|Model>

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::core::Controller|Controller>

L<org::puremvc::perl5::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

=cut