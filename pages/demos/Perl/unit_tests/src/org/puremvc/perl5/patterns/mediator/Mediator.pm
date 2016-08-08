#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::patterns::mediator::Mediator;

use strict; use warnings;

use org::puremvc::perl5::patterns::observer::Notifier;
our @ISA = qw( org::puremvc::perl5::patterns::observer::Notifier );

use base 'Exporter';
use constant NAME => "Mediator";
our @EXPORT_OK = ('NAME');

#**********************
#**********************
sub new {
  my ( $class, $mediator_name, $view_component ) = @_;
  
  my $self = $class->SUPER::new();
  bless( $self, $class );
  
  $self->{_name} = defined $mediator_name ? $mediator_name : NAME;
  $self->{_view_component} = $view_component;
  
  return $self;
}

#**********************
sub getMediatorName {
  my $self = shift;

  return $self->{_name};
}

#**********************
sub setViewComponent {
  my ( $self, $view_component ) = @_;
    
  $self->{_view_component} = $view_component;
  
}

#**********************
sub getViewComponent {
  my $self = shift;
  
  return $self->{_view_component};  
}

#**********************
sub listNotificationInterests {
  return [];
}

#**********************
sub handleNotification {
}

#**********************
sub onRegister {
}

#**********************
sub onRemove {
}

#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::patterns::mediator::Mediator >>

B<ISA> L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

Base pureMVC C<< Mediator >> concept implementation.

=head1 SYNOPSIS

A concrete C<< Mediator >> implementor usually looks something like this:

  package com::me::myapp::mediators::AMediator;

  use strict; use warnings;

  use org::puremvc::perl5::patterns::mediator::Mediator;
  our @ISA = qw( org::puremvc::perl5::patterns::mediator::Mediator );

  #**********************
  #**********************
  sub listNotificationInterests {
    return ["ANotification"];
  }

  #**********************
  sub handleNotification {
    my ( $self, $note ) = @_;
  
    my $note_name = $note->getName();
  
    return unless $note_name eq "ANotification";
  
    print "AMediator reacted to notification ANotification\n";
  }

  #**********************
  sub onRegister {
    print "AMediator registered\n";
  }

  #**********************
  sub onRemove {
    print "AMediator removed\n";
  }

  #**********************
  #**********************
  1;

=head1 DESCRIPTION

In PureMVC, C<< Mediator >> implementors assume these responsibilities:

=over 4

=item *

Implement a common method which returns a list of all L<notifications|Notification> the C<< Mediator >> has interest in.

=item *

Implement a L<notification|Notification> callback method.

=item *

Implement methods that are called when the C<< Mediator >> is registered or removed from the View.

=back

Additionally, mediators typically:

=over 4

=item *

Act as an intermediary between one or more view components ( typically server scripts, external to your application).

=item *

In server environments where event concept is implemented, this is often the place where event listeners are added to view components, and their handlers implemented.

=item *

Respond to and generate L<notifications|Notification>, interacting with of the rest of the PureMVC application.

=back

When a C<< Mediator >> is registered with the C<< View >>, the C<< View >> will call the C<< Mediator >>'s C<< listNotificationInterests >> method. The C<< Mediator >> will return an array of L<notification|Notification> names which it wishes to be notified about.

The C<< View >> will then create an L<Observer|Observer> object encapsulating that C<< Mediator >>'s (C<< handleNotification >>) method and register it as an L<observer|Observer> for each L<notification|Notification> name returned by C<< listNotificationInterests >>.

=head1 INTERFACE

=head2 Methods

=over 4

=item *

C<< org::puremvc::perl5::patterns::mediator::Mediator->new( $mediator_name, $view_component ) >>

Constructor. Pass it 2 arguments :

=over 4

=item *

C<< $mediator_name >> : name by which any retrieval, removal, or existence checking will be achieved in your application.

=item *

C<< $view_component >> : optional object instance representing an external component handled by your C<< Mediator >>.

=back

It is common to define a default name for your C<< Mediator >> class implementation by mean of a constant:

  use constant NAME => "com::me::myapp::mediators::AMediator";

To register an instance of your C<< Mediator >> class you can then do so:

  use com::me::myapp::mediators::AMediator;
  
  my $facade = org::puremvc::perl5::patterns::facade::Facade->getInstance();

  my $mediator = com::me::myapp::mediators::AMediator->new( com::me::myapp::mediators::AMediator::NAME );
  $facade->registerMediator($mediator);

It is possible to register several instances of the same C<< Mediator >> class. You must then give different names to each instance registration in order to fully qualify them in your application:

  use com::me::myapp::mediators::AMediator;
  
  my $facade = org::puremvc::perl5::patterns::facade::Facade->getInstance();

  my $mediator = com::me::myapp::mediators::AMediator->new( com::me::myapp::mediators::AMediator::NAME );
  $facade->registerMediator($mediator);

  my $other_mediator = com::me::myapp::mediators::AMediator->new( "SOME_OTHER_NAME" );
  $facade->registerMediator($other_mediator);

=item *

C<< org::puremvc::perl5::patterns::mediator::Mediator->getMediatorName() >>

Returns the name by which a C<< Mediator >> was registered with the C<< View >>.

=item *

C<< org::puremvc::perl5::patterns::mediator::Mediator->setViewComponent( $view_component ) >>

C<< Mediator >> view component setter.

=item *

C<< org::puremvc::perl5::patterns::mediator::Mediator->listNotificationInterests() >>

Returns an array reference holding the L<notification|Notification> names the C<< Mediator >> is interested in being notified of.

When your application will dispatch a L<notification|Notification> whose name matches one of those in the array, the C<< handleNotification >> method of the C<< Mediator >> will be automatically called.

=item *

C<< org::puremvc::perl5::patterns::mediator::Mediator->handleNotification( $notification ) >>

This method is automatically called by the L<view|View> if C<< $notification >>'s name is one of those returned by C<< listNotificationInterests >> method.

=item *

C<< org::puremvc::perl5::patterns::mediator::Mediator->onRegister() >>

Called by the L<view|View> when the C<< Mediator >> is registered.

=item *

C<< org::puremvc::perl5::patterns::mediator::Mediator->onRemove() >>

Called by the L<view|View> when the C<< Mediator >> is removed.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::Model|Model>

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::core::Controller|Controller>

L<org::puremvc::perl5::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut