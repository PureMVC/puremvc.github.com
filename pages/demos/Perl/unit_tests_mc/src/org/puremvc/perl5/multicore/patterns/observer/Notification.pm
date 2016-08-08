#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::patterns::observer::Notification;

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

C<< org::puremvc::perl5::multicore::patterns::observer::Notification >>

Implementation of the pureMVC C<< Notification >> pattern.

=head1 DESCRIPTION

The L<Observer|Observer> pattern as implemented within PureMVC exists to support event-driven communication between the application and the actors of the MVC triad.

Generally, L<Mediator|Mediator> or L<Proxy|Proxy> implementors broadcast C<< Notification >>s to trigger L<commands|SimpleCommand> or to communicate with other L<mediators|Mediator>.

L<Proxy|Proxy> and L<Command|SimpleCommand> instances communicate with each other and L<mediators|Mediator> by broadcasting C<< Notification >>s.

PureMVC C<< Notification >>s follow a 'Publish/Subscribe' pattern. PureMVC classes need not be related to each other in a parent/child relationship in order to communicate with one another using C<< Notification >>s.

=head1 INTERFACE

=head2 Methods

=over 4

=item new

C<< sub new( $notification_name, $body, $type ); >>

Constructor.

You usually do not call C<< Notification >> directly but use L<Facade|Facade> C<< sendNotification >> method to create and send a C<< Notification >>:

  # Code usually found in a Notifier subclass
  
  # Create and send a notification called "SayHelloWorld" with no body nor type data passed 
  $self->sendNotification("SayHelloWorld");

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the constructed C<< Notification >> instance.

=item *

C<< $body - * >>

Body or (business data) of the C<< Notification >>. Can be any object or scalar. - Optional

=item *

C<< $type - * >>

Type of the C<< Notification >>. This data can be useful to distinguish several types of the same C<< Notification >>. Usually is a string but could be any other object or scalar. - Optional

=back

=item getName

C<< sub getName(); >>

C<< Notification >> name getter.

B<Returns>

C<< String >> - The name of the C<< Notification >>.

=item setBody

C<< sub setBody( $body ); >>

C<< Notification >> body setter.

B<Parameters>

=over 8

=item *

C<< $body - * >>

Body or (business data) of the C<< Notification >>. Can be any object or scalar. - Optional

=back

=item getBody

C<< getBody() >>

C<< Notification >> body getter.

B<Returns>

C<< * >> - The body of the C<< Notification >>, scalar or object.

=item setType

C<< sub setType( $type ); >>

C<< Notification >> type setter.

B<Parameters>

=over 8

=item *

C<< $type - * >>

Type of the C<< Notification >>. This data can be useful to distinguish several types of the same C<< Notification >>. Usually is a string but could be any other object or scalar. - Optional

=back

=item getType

C<< sub getType(); >>

C<< Notification >> type getter.

B<Returns>

C<< * >> - The type of the C<< Notification >>, scalar or object.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::multicore::core::Model|Model>

L<org::puremvc::perl5::multicore::core::View|View>

L<org::puremvc::perl5::multicore::core::Controller|Controller>

L<org::puremvc::perl5::multicore::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::multicore::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::multicore::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::multicore::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::multicore::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::multicore::patterns::observer::Observer|Observer>

=cut