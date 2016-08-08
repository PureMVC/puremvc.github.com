#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::patterns::observer::Notifier;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::facade::Facade;

#**********************
#**********************
sub new {
  my $class = shift;
  
  my $self = {};
  bless( $self, $class );
  
  return $self;
}

#**********************
sub sendNotification {
  my ( $self, $notification_name, $body, $type ) = @_;
  
  my $facade = $self->getFacade();
  return unless defined $facade;
  
  $facade->sendNotification( $notification_name, $body, $type ); 
}

#**********************
sub initializeNotifier {
  my ( $self, $key ) = @_;
  
  $self->{_multiton_key} = $key;
}       
 
#**********************
sub getFacade {
  my $self = shift;

  die "multiton key not yet initialized for this Notifier\n" unless defined $self->{_multiton_key};
  
  return org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance( $self->{_multiton_key} );
}       
 
#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::multicore::patterns::observer::Notifier >>

Implementation of the pureMVC C<< Notifier >> pattern.

=head1 DESCRIPTION

L<commands|SimpleCommand>, L<mediators|Mediator> and L<proxies|Proxy> all have a need to send L<notifications|Notification>.

The C<< Notifier >> interface provides a common method called C<< sendNotification >> that relieves implementation code of the necessity to actually construct L<notifications|Notification>.

The C<< Notifier >> class, which all of the above mentioned classes extend, provides an initialized reference to the L<facade|Facade> multiton, which is convenient for sending L<notifications|Notification>, but also eases implementation as these classes have frequent L<facade|Facade> interactions and usually require access to the L<facade|Facade> anyway.

=head1 INTERFACE

=head2 Methods

=over 4

=item sendNotification

C<< sub sendNotification( $notification_name, $body, $type ); >>

Keeps us from having to construct new L<Notification|Notification> instances in our implementation code.

  # Create and send a notification called "SayHelloWorld" with no body nor type data passed 
  $self->sendNotification("SayHelloWorld");

B<Parameters>

=over 8

=item *

C<< $notification_name >>: name of the L<notification|Notification>.

=item *

C<< $body >>: body or (business data) of the L<notification|Notification>. Can be any object or scalar. - Optional

=item *

C<< $type >>: type of the L<notification|Notification>. This data can be useful to distinguish several types of the same C<< Notification >>. Usually is a string but could be any other object or scalar. - Optional

=back

=item initializeNotifier

C<< sub initializeNotifier( $key ); >>

This is how a C<< Notifier >> gets its multiton key. Calls to C<< sendNotification >> or to access the L<Facade|Facade> will fail until after this method has been called.

L<Mediators|Mediator>, L<commands|SimpleCommand> or L<proxies|Proxy> may override this method in order to send L<notifications|Notification> or access the multiton L<Facade|Facade> instance as soon as possible. They CANNOT access the L<Facade|Facade> in their constructors, since this method will not yet have been called.

B<Parameters>

=over 8

=item *

C<< $key - String >>

Unique key that will identify L<Facade's|Facade> multiton instance for this C<< Notifier >>.

=back

=item getFacade

C<< sub getFacade(); >>

Returns L<Facade's|Facade> multiton instance the C<< Notifier >> is attached to.

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::facade::Facade >> - The multiton instance of the L<Facade|Facade> corresponding to this C<< Notifier >>.

=back

=head2 Properties

=over 4

=item _multiton_key

Unique I<key> identifying C<< Facade's >> multiton instance the C<< Notifier >> is attached to. You should not have to access it and I<must not> update it in normal usage.

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

L<org::puremvc::perl5::multicore::patterns::observer::Observer|Observer>

=cut