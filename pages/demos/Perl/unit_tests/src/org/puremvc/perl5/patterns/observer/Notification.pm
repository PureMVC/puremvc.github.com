#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::patterns::observer::Notification;

use strict; use warnings;

use Data::Dumper;

#**********************
#**********************
sub new {
  my ( $class, $notification_name, $body, $type ) = @_;

  my $self = {};
  bless( $self, $class );
  
  $self->{_name} = $notification_name;
  $self->{_body} = $body;
  $self->{_type} = $type;
        
  return $self;
}

#**********************
sub getName {
  my $self = shift;
  
  return $self->{_name};
  
}

#**********************
sub setBody {
  my ( $self, $body ) = @_;
  
  $self->{_body} = $body;
  
}

#**********************
sub getBody {
  my $self = shift;
  
  return $self->{_body};
  
}

#**********************
sub setType {
  my ( $self, $type ) = @_;
  
  $self->{_type} = $type;
  
}

#**********************
sub getType {
  my $self = shift;
  
  return $self->{_type};
  
}

#**********************
sub toString {
  my $self = shift;

  $Data::Dumper::Indent = 0;
  return Dumper($self);
  
}

#**********************
#**********************
1;  

__END__

=head1 NAME

C<< org::puremvc::perl5::patterns::observer::Notification >>

Implementation of the pureMVC C<< Notification >> pattern.

=head1 DESCRIPTION

The L<Observer|Observer> pattern as implemented within PureMVC exists to support event-driven communication between the application and the actors of the MVC triad.

Generally, L<Mediator|Mediator> or L<Proxy|Proxy> implementors broadcast C<< Notification >>s to trigger L<commands|SimpleCommand> or to communicate with other L<mediators|Mediator>.

L<Proxy|Proxy> and L<Command|SimpleCommand> instances communicate with each other and L<mediators|Mediator> by broadcasting C<< Notification >>s.

PureMVC C<< Notification >>s follow a 'Publish/Subscribe' pattern. PureMVC classes need not be related to each other in a parent/child relationship in order to communicate with one another using C<< Notification >>s.

=head1 INTERFACE

=head2 Methods

=over 4

=item *

C<< org::puremvc::perl5::patterns::observer::Notification->new( $notification_name, $body, $type ) >>

Constructor.

Parameters:

=over 8

=item *

C<< $notification_name >>: name of the C<< Notification >>.

=item *

C<< $body >>: body or (business data) of the C<< Notification >>. Can be any object or scalar. - Optional

=item *

C<< $type >>: type of the C<< Notification >>. This data can be useful to distinguish several types of the same C<< Notification >>. Usually is a string but could be any other object or scalar. - Optional

=back

You usually do not call C<< Notification >> directly but use L<Facade|Facade> C<< sendNotification >> method to create and send a C<< Notification >>:

  # Code usually found in a Notifier subclass
  
  # Create and send a notification called "SayHelloWorld" with no body nor type data passed 
  $self->sendNotification("SayHelloWorld");

=item *

C<< org::puremvc::perl5::patterns::observer::Notification->getName() >>

C<< Notification >> name getter.

=item *

C<< org::puremvc::perl5::patterns::observer::Notification->setBody( $body ) >>

C<< Notification >> body setter.

=item *

C<< org::puremvc::perl5::patterns::observer::Notification->getBody() >>

C<< Notification >> body getter.

=item *

C<< org::puremvc::perl5::patterns::observer::Notification->setType( $type ) >>

C<< Notification >> type setter.

=item *

C<< org::puremvc::perl5::patterns::observer::Notification->getType() >>

C<< Notification >> type getter.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::Model|Model>

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::core::Controller|Controller>

L<org::puremvc::perl5::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut