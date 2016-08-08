#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::patterns::facade::Facade;

use strict; use warnings;

use org::puremvc::perl5::core::Model;
use org::puremvc::perl5::core::View;
use org::puremvc::perl5::core::Controller;
use org::puremvc::perl5::patterns::observer::Notification;

my $_instance;

my $new = sub {
  my $class = shift;
  
  my $self = {};
  bless( $self, $class );
  
  $self->initializeFacade();
  
  return $self;
};

#**********************
#**********************
sub initializeFacade {
  my $self = shift;
  
  $self->initializeModel();
  $self->initializeView();
  $self->initializeController();  
}

#**********************
sub initializeModel {
  my $self = shift;
  
  $self->{_model} = org::puremvc::perl5::core::Model->getInstance() unless exists $self->{_model};
}  

#**********************
sub initializeView {
  my $self = shift;

  $self->{_view} = org::puremvc::perl5::core::View->getInstance() unless exists $self->{_view};
}  

#**********************
sub initializeController {
  my $self = shift;
  
  $self->{_controller} = org::puremvc::perl5::core::Controller->getInstance() unless exists $self->{_controller};
}  

#**********************
sub getInstance {
  my $class = shift;
  
  $_instance = $new->($class) if ! defined $_instance;
  
  return $_instance;
}

#**********************
sub registerCommand {
  my ( $self, $notification_name, $command_class_ref ) = @_;
  
  $self->{_controller}->registerCommand( $notification_name, $command_class_ref );
  
}

#**********************
sub removeCommand {
  my ( $self, $notification_name ) = @_;
  
  $self->{_controller}->removeCommand( $notification_name );
}

#**********************
sub hasCommand {
  my ( $self, $notification_name ) = @_;
  
  return $self->{_controller}->hasCommand( $notification_name );
}

#**********************
sub registerProxy  {
  my ( $self, $proxy ) = @_;

  $self->{_model}->registerProxy( $proxy );
}

#**********************
sub retrieveProxy {
  my ( $self, $proxy_name ) = @_;

  return $self->{_model}->retrieveProxy( $proxy_name );
}

#**********************
sub hasProxy {
  my ( $self, $proxy_name ) = @_;
  
  $self->{_model}->hasProxy( $proxy_name );
}

#**********************
sub removeProxy {
  my ( $self, $proxy_name ) = @_;
  
  $self->{_model}->removeProxy( $proxy_name );
  
}

#**********************
sub registerMediator {
  my ( $self, $mediator ) = @_;

  $self->{_view}->registerMediator( $mediator );
}

#**********************
sub retrieveMediator {
  my ( $self, $mediator_name ) = @_;

  $self->{_view}->retrieveMediator( $mediator_name );
}

#**********************
sub removeMediator {
  my ( $self, $mediator_name ) = @_;

  $self->{_view}->removeMediator( $mediator_name );
}

#**********************
sub hasMediator {
  my ( $self, $mediator_name ) = @_;

  $self->{_view}->hasMediator( $mediator_name );
}

#**********************
sub sendNotification {
  my ( $self, $notification_name, $body, $type ) = @_;
  
  $self->notifyObservers( org::puremvc::perl5::patterns::observer::Notification->new( $notification_name, $body, $type ) ); 
}

#**********************
sub notifyObservers {
  my ( $self, $notification ) = @_;
  
  $self->{_view}->notifyObservers( $notification );
}       
 
#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::patterns::facade::Facade >>

Singleton providing a single entry point for performing MVC pattern actions.

=head1 SYNOPSIS

  package com::me::myapp::Facade;

  use strict; use warnings;

  use org::puremvc::perl5::patterns::facade::Facade;
  our @ISA = qw( org::puremvc::perl5::patterns::facade::Facade );

  use base 'Exporter';

  # Notification constants. The Facade is the ideal location for these constants, since any part
  # of the application participating in PureMVC Observer Notification will know the Facade.
  use constant GO_COMMAND => "com::me::myapp::Facade::go";
  our @EXPORT_OK = ('GO_COMMAND');

  use com::me::myapp::MyModel;
  use com::me::myapp::MyView;
  use com::me::myapp::MyController;
  use com::me::myapp::proxies::CountryListProxy;
  use com::me::myapp::mediators::LoginMediator;
  use com::me::myapp::commands::GoCommand;

  my $_instance;

  # Private constructor called by getInstance class method
  my $new = sub {
    my $class = shift;

    my $self = $class->SUPER::getInstance(); # Calls parent class constructor
    bless( $self, $class ); # $self is now an instance of com::me::myapp::Facade class
    
    return $self;
  };

  #**********************
  #**********************
  # Optional overriding of org::puremvc::perl5::patterns::facade::Facade::initializeFacade() method
  # Overriding is necessary if you need to do extra initialization during construction of your own Facade instance
  sub initializeFacade {
    my $self = shift;

    $self->SUPER::initializeFacade();

    # Add special initialization code here
    # If none, no need to override initializeFacade method
  }

  #**********************
  sub getInstance {
    my $class = shift;

    $_instance = $new->($class) if ! defined $_instance;

    return $_instance;
  }

  #**********************
  # Optional overriding of org::puremvc::perl5::patterns::facade::Facade::initializeController() method
  # This where you can register your Commands and define your own Controller singleton
  sub initializeController {
    my $self = shift;

    # The following must not be executed if you use your own Controller class as
    # it is the case here
    #$self->SUPER::initializeController();

    # Registering personal Controller
    $self->{_controller} = com::me::myapp::MyController->getInstance() unless exists $self->{_controller};

    # Command registration for GO_COMMAND notification
    $self->registerCommand( GO_COMMAND, "com::me::myapp::commands::GoCommand" );
  }

  #**********************
  # Optional overriding of org::puremvc::perl5::patterns::facade::Facade::initializeModel() method
  # This where you can register SOME SPECIAL Proxys and define your own Model singleton
  sub initializeModel {
    my $self = shift;

    # The following must not be executed if you use your own Model class as below
    # it is the case here
    #$self->SUPER::initializeModel();

    # Registering personal Model
    $self->{_model} = com::me::myapp::MyModel->getInstance() unless exists $self->{_model};

    # Proxy registration
    # CAREFUL: as initializeModel method is part of Facade construction process,
    # DO NOT register Proxys needing to send notification here as notification sending
    # by a Proxy requires Facade to be constructed.
    $self->registerProxy( com::me::myapp::proxies::CountryListProxy->new() );
  }

  #**********************
  # Optional overriding of org::puremvc::perl5::patterns::facade::Facade::initializeView() method
  # This where you can register SOME SPECIAL Mediators and define your own View singleton
  sub initializeView {
    my $self = shift;

    # The following must not be executed if you use your own View class as below
    # it is the case here
    #$self->SUPER::initializeView();

    # Registering personal View
    $self->{_view} = com::me::myapp::MyView->getInstance() unless exists $self->{_view};

    # Mediator registration
    # CAREFUL: as initializeView method is part of Facade construction process,
    # DO NOT register Mediator needing to access your Facade instance.
    # Usually Mediators send/receive notifications, and are registered elsewhere in the application
    # for this reason.
    $self->registerMediator( com::me::myapp::mediators::LoginMediator->new() );
  }

  #**********************
  #**********************
  1;

=head1 DESCRIPTION

In PureMVC, the C<< Facade >> class assumes these responsibilities:

=over 4

=item *

Initializing the L<Model|Model>, L<View|View> and L<Controller|Controller> singletons.

=item *

Providing all the methods defined by the L<Model|Model>, L<View|View> & L<Controller|Controller> singletons.

=item *

Providing the ability to override the specific L<Model|Model>, L<View|View> and L<Controller|Controller> singletons created.

=item *

Providing a single point of contact to the application for registering L<Command|SimpleCommand>s and notifying L<Observers|Observer>.

=back

B<Using the C<< Facade >> interface methods should be sufficient for your application to use all the MVC patterns>.

=head1 INTERFACE

=head2 Methods

=over 4

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->getInstance() >>

Returns the singleton instance of the Facade.
During first call, C<< Facade >> instance is created.
Future calls just return already created instance.
Facade creation process includes L<Model|Model>, L<View|View> & L<Controller|Controller> singletons initialization (see C<< initializeFacade >> method).

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->initializeFacade() >>

Automatically called during C<< getInstance >> method first run (C<< Facade >> instance creation).
This is where L<Model|Model>, L<View|View> & L<Controller|Controller> singletons initialization methods are called.
If you use a subclass of C<< Facade >>, make sure to call C<< SUPER::initializeFacade() >> during C<< Facade >> singleton construction. 

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->initializeController() >>

Called by C<< initializeFacade >> method.
Override this method in your subclass of C<< Facade >> if one or both of the following are true:

=over 8

=item *

You wish to initialize your own L<Controller|Controller> class.

=item *

You have L<Commands|SimpleCommand> to register with the L<Controller|Controller> at startup.

=back

If you don't want to initialize a different L<Controller|Controller> call C<< SUPER::initializeController() >> at the beginning of your method, then register L<Commands|SimpleCommand>.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->initializeModel() >>

Called by C<< initializeFacade >> method.
Override this method in your subclass of C<< Facade >> if one or both of the following are true:

=over 8

=item *

You wish to initialize your own L<Model|Model> class.

=item *

You have Proxies to register with the L<Model|Model> that do not retrieve a reference to the C<< Facade >> at construction time.

=back

If you don't want to initialize a different L<Model|Model> call C<< SUPER::initializeModel() >> at the beginning of your method, then register L<Proxies|Proxy>.

Note: This method is I<rarely> overridden; in practice you are more likely to use a L<Command|SimpleCommand> to create and register L<Proxies|Proxy> with the L<Model|Model>, since L<Proxies|Proxy> with mutable data will likely need to send L<notifications|Notification> and thus will likely want to fetch a reference to the C<< Facade >> during their construction.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->initializeView() >>

Called by C<< initializeFacade >> method.
Override this method in your subclass of C<< Facade >> if one or both of the following are true:

=over 8

=item *

You wish to initialize your own L<View|View> class.

=item *

You have L<Mediators|Mediator> to register with the L<View|View> that do not retrieve a reference to the C<< Facade >> at construction time.

=back

If you don't want to initialize a different L<View|View> call C<< SUPER::initializeView() >> at the beginning of your method, then register L<Mediators|Mediator>.

Note: This method is I<rarely> overridden; in practice you are more likely to use a L<Command|SimpleCommand> to create and register L<Mediators|Mediator> with the L<View|View>, since L<Mediators|Mediator> will likely need to send L<notifications|Notification> and thus will likely want to fetch a reference to the C<< Facade >> during their construction.


=item *

C<< org::puremvc::perl5::patterns::facade::Facade->registerCommand( $notification_name, $command_class_ref ) >>

Register a L<Command|SimpleCommand> with the L<Controller|Controller> by L<notification|Notification> name.

When a L<notifier|Notifier> will send a L<notification|Notification> whose name is C<< $notification_name >>, the L<Controller|Controller> will create an instance of C<< $command_class_ref >> L<Command|SimpleCommand> class and execute its C<< execute >> method.

C<< $command_class_ref >> is a string holding the name of the L<Command|SimpleCommand> class, e.g. "C<< com::me::myapp::MyCommand >>".

Note that there can only be one and only one L<Command|SimpleCommand> registered with the L<Controller|Controller> for a given L<notification|Notification> name. A call to this method will replace any previously registered L<Command|SimpleCommand> for that L<notification|Notification> name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->removeCommand( $notification_name ) >>

Remove a previously registered L<Command|SimpleCommand> with the L<Controller|Controller> by L<notification|Notification> name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->hasCommand( $notification_name ) >>

Check if a L<Command|SimpleCommand> is registered with the L<Controller|Controller> by L<Notification|Notification> name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->registerProxy( $proxy ) >>

Register a L<Proxy|Proxy> with the L<Model|Model>.

During registration the L<Model|Model> uses C<< Proxy >>'s C<< getProxyName >> method to map the L<Proxy|Proxy> instance to its name. This will serve for retrieval of the L<Proxy|Proxy> instance by its name (see C<< retrieveProxy >> method).

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->retrieveProxy( $proxy_name ) >>

Retrieve a L<Proxy|Proxy> from the L<Model|Model> by name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->removeProxy( $proxy_name ) >>

Remove a L<Proxy|Proxy> from the L<Model|Model> by name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->hasProxy( $proxy_name ) >>

Check if a L<Proxy|Proxy> is registered with the L<Model|Model> by name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->registerMediator( $mediator ) >>

Register a L<Mediator|Mediator> with the L<View|View>.

During registration the L<View|View> uses L<Mediator|Mediator>'s C<< getMediatorName >> method to map the L<Mediator|Mediator> instance to its name. This will serve for retrieval of the L<Mediator|Mediator> instance by its name (see C<< retrieveMediator >> method).

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->retrieveMediator( $mediator_name ) >>

Retrieve a L<Mediator|Mediator> from the L<View|View> by name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->removeMediator( $mediator_name ) >>

Remove a L<Mediator|Mediator> from the L<View|View> by name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->hasMediator( $mediator_name ) >>

Check if a L<Mediator|Mediator> is registered with the L<View|View> by name.

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->sendNotification( $notification_name, $body, $type ) >>

Keeps us from having to construct new L<Notification|Notification> objects in our implementation code.

This method will construct a new L<Notification|Notification> named C<< $notification_name >> with optional C<< $body >> and C<< $type >> parameters. 

=item *

C<< org::puremvc::perl5::patterns::facade::Facade->notifyObservers( $notification ) >>

You should not have to use this method ; instead use C<< sendNotification >> method to notify registered L<observers|Observer> for C<< $notification >>.

=back

=head2 Properties

=over 4

=item *

C<< _model >>

Holds the L<Model|Model> singleton instance of the application. You should not have to access it and I<must not> update it in normal usage.

=item *

C<< _view >>

Holds the L<View|View> singleton instance of the application. You should not have to access it and I<must not> update it in normal usage.

=item *

C<< _controller >>

Holds the L<Controller|Controller> singleton instance of the application. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::Model|Model>

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::core::Controller|Controller>

L<org::puremvc::perl5::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut