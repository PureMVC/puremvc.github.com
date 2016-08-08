#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::patterns::observer::Notifier;

use strict; use warnings;

use org::puremvc::perl5::patterns::facade::Facade;

#**********************
#**********************
sub new {
  my $class = shift;
    
  my $self = {};
  bless( $self, $class );
  
  $self->{_facade} = org::puremvc::perl5::patterns::facade::Facade->getInstance();
  
  return $self;
}

#**********************
sub sendNotification {
  my ( $self, $notification_name, $body, $type ) = @_;
  
  $self->{_facade}->sendNotification( $notification_name, $body, $type ); 
}

#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::patterns::observer::Notifier >>

Implementation of the pureMVC C<< Notifier >> pattern.

=head1 DESCRIPTION

L<commands|SimpleCommand>, L<mediators|Mediator> and L<proxies|Proxy> all have a need to send L<notifications|Notification>.

The C<< Notifier >> interface provides a common method called C<< sendNotification >> that relieves implementation code of the necessity to actually construct L<notifications|Notification>.

The C<< Notifier >> class, which all of the above mentioned classes extend, provides an initialized reference to the L<facade|Facade> singleton, which is convenient for sending L<notifications|Notification>, but also eases implementation as these classes have frequent L<facade|Facade> interactions and usually require access to the L<facade|Facade> anyway.

=head1 INTERFACE

=head2 Methods

=over 4

=item *

C<< sendNotification( $notification_name, $body, $type ) >>

Keeps us from having to construct new L<Notification|Notification> instances in our implementation code.

  # Create and send a notification called "SayHelloWorld" with no body nor type data passed 
  $self->sendNotification("SayHelloWorld");

Parameters:

=over 8

=item *

C<< $notification_name >>: name of the L<notification|Notification>.

=item *

C<< $body >>: body or (business data) of the L<notification|Notification>. Can be any object or scalar. - Optional

=item *

C<< $type >>: type of the L<notification|Notification>. This data can be useful to distinguish several types of the same C<< Notification >>. Usually is a string but could be any other object or scalar. - Optional

=back

=back

=head2 Properties

=over 4

=item *

C<< _facade >>

PureMVC C<< Notifier >> subclasses ( L<Mediator|Mediator>, L<Proxy|Proxy>, L<SimpleCommand|SimpleCommand>, L<MacroCommand|MacroCommand> ) usually do not need to access this property as they will access application L<Facade|Facade> singleton using the following instruction:

  my $facade = com::me::myapp::Facade->getInstance();

You should not have to access it and I<must not> update it in normal usage.

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

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut