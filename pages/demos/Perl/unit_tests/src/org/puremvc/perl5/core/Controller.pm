#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::core::Controller;

use org::puremvc::perl5::core::View;
use org::puremvc::perl5::patterns::observer::Observer;

my $_instance;

my $new = sub {
  my $class = shift;
    
  my $self = {};
  bless( $self, $class );
  $self->{_commands} = {};
  
  $self->initializeController();
  
  return $self;
};

#**********************
#**********************
sub initializeController {
  my $self = shift;
  
  $self->{_view} = org::puremvc::perl5::core::View->getInstance() unless exists $self->{_view};
}
  
#**********************
sub getInstance {
  my $class = shift;
    
  $_instance = $new->($class) if ! defined $_instance;
  
  return $_instance;
}

#**********************
sub executeCommand {
  my ( $self, $notification ) = @_;
  
  my $command_class_ref = $self->{_commands}->{ $notification->getName() };
  
  return unless defined $command_class_ref;

  my $command = $command_class_ref->new();
  $command->execute( $notification );
  
}

#**********************
sub registerCommand {
  my ( $self, $notification_name, $command_class_ref ) = @_;
  
  if ( ! defined $self->{_commands}->{$notification_name} ) {
    $self->{_view}->registerObserver( $notification_name, org::puremvc::perl5::patterns::observer::Observer->new( "executeCommand", $self ) );
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
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::core::Controller >>

Singleton responsible for executing L<commands|SimpleCommand> in response to a L<notification|Notification>.

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

=item *

C<< org::puremvc::perl5::core::Controller->getInstance() >>

Returns the singleton instance of the C<< Controller >>.

=item *

C<< org::puremvc::perl5::core::Controller->initializeController() >>

Initialize the singleton instance of the C<< Controller >>.
This method is automatically called during singleton instantiation.

Note that if you are using a subclass of L<View|View> in your application, you should I<also> subclass C<< Controller >> and override the C<< initializeController >> method in the following way:

  # ensure that the Controller is talking to my View implementation
  sub initializeController {
    my $self = shift;
  
    $self->{_view} = com::me::myapp::MyView->getInstance() unless exists $self->{_view};
  }

=item *

C<< org::puremvc::perl5::core::Controller->registerCommand( $notification_name, $command_class_ref ) >>

Register a particular L<command|SimpleCommand> class as the handler for a particular L<notification|Notification>.

C<< $command_class_ref >> is a string holding the name of the L<command|SimpleCommand> class, e.g. "C<< com::me::myapp::MyCommand >>".

If a L<command|SimpleCommand> has already been registered to handle L<notification|Notification> with this name, it is no longer used, the new L<command|SimpleCommand> is used instead.

The L<observer|Observer> for the new L<command|SimpleCommand> is only created if this the first time a L<command|SimpleCommand> has been registered for this L<notification|Notification> name.

=item *

C<< org::puremvc::perl5::core::Controller->executeCommand( $notification ) >>

If a L<command|SimpleCommand> has previously been registered to handle a given L<notification|Notification>, then it is executed.

=item *

C<< org::puremvc::perl5::core::Controller->removeCommand( $notification_name ) >>

Remove a previously registered L<command|SimpleCommand> for a given L<notification|Notification> name.

=item *

C<< org::puremvc::perl5::core::Controller->hasCommand( $notification_name ) >>

Check if a L<command|SimpleCommand> is registered for a given L<notification|Notification> name.

=back

=head2 Properties

=over 4

=item *

C<< _commands >>

Array reference on registered L<commands|SimpleCommand> with the C<< Controller >>. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::Model|Model>

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut