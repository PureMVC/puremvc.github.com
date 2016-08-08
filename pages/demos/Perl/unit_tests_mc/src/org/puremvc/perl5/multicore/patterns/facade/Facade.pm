#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::patterns::facade::Facade;

use strict; use warnings;

use org::puremvc::perl5::multicore::core::Model;
use org::puremvc::perl5::multicore::core::View;
use org::puremvc::perl5::multicore::core::Controller;
use org::puremvc::perl5::multicore::patterns::observer::Notification;

my %_instances = ();

my $new = sub {
  my ( $class, $key ) = @_;
  
  my $self = {};
  bless( $self, $class );

  $self->initializeNotifier( $key );    
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
sub getInstance {
  my ( $class, $key ) = @_;
  
  $_instances{$key} = $new->($class, $key) unless exists $_instances{$key};
  
  return $_instances{$key};
}

#**********************
sub initializeModel {
  my $self = shift;
  
  $self->{_model} = org::puremvc::perl5::multicore::core::Model->getInstance( $self->{_multiton_key} ) unless defined $self->{_model};
}  

#**********************
sub initializeView {
  my $self = shift;

  $self->{_view} = org::puremvc::perl5::multicore::core::View->getInstance( $self->{_multiton_key} ) unless defined $self->{_view};
}  

#**********************
sub initializeController {
  my $self = shift;
  
  $self->{_controller} = org::puremvc::perl5::multicore::core::Controller->getInstance( $self->{_multiton_key} ) unless defined $self->{_controller};
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
  
  $self->notifyObservers( org::puremvc::perl5::multicore::patterns::observer::Notification->new( $notification_name, $body, $type ) ); 
}

#**********************
sub notifyObservers {
  my ( $self, $notification ) = @_;
  
  $self->{_view}->notifyObservers( $notification );
}       

#**********************
sub initializeNotifier {
  my ( $self, $key ) = @_;
  
  $self->{_multiton_key} = $key;
}       
 
#**********************
sub hasCore {
  my ( $class, $key ) = @_;
  
  return exists $_instances{$key};
  
}       
 
#**********************
sub removeCore {
  my ( $class, $key ) = @_;
  
  return unless exists $_instances{$key};
  
  org::puremvc::perl5::multicore::core::Model->removeModel( $key );
  org::puremvc::perl5::multicore::core::View->removeView( $key );
  org::puremvc::perl5::multicore::core::Controller->removeController( $key );
  
  delete $_instances{$key};
}       
 
#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::multicore::patterns::facade::Facade >>

Multiton providing a single entry point for performing MVC pattern actions.

=head1 SYNOPSIS

  package com::me::myapp::Facade;

  use strict; use warnings;

  use org::puremvc::perl5::multicore::patterns::facade::Facade;
  our @ISA = qw( org::puremvc::perl5::multicore::patterns::facade::Facade );

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

  my %_instances = ();

  # Private constructor called by getInstance class method
  my $new = sub {
    my ( $class, $key ) = @_;

    my $self = $class->SUPER::getInstance( $key ); # Calls parent class constructor
    bless( $self, $class ); # $self is now an instance of com::me::myapp::Facade class
    
    return $self;
  };

  #**********************
  #**********************
  # Optional overriding of org::puremvc::perl5::multicore::patterns::facade::Facade::initializeFacade() method
  # Overriding is necessary if you need to do extra initialization during construction of your own Facade instance
  sub initializeFacade {
    my $self = shift;

    $self->SUPER::initializeFacade();

    # Add special initialization code here
    # If none, no need to override initializeFacade method
  }

  #**********************
  sub getInstance {
    my ( $class, $key ) = @_;
  
    $_instances{$key} = $new->($class, $key) unless exists $_instances{$key};
  
    return $_instances{$key};
  }

  #**********************
  # Optional overriding of org::puremvc::perl5::multicore::patterns::facade::Facade::initializeController() method
  # This where you can register your Commands and define your own Controller multiton
  sub initializeController {
    my $self = shift;

    # The following must not be executed if you use your own Controller class as
    # it is the case here
    #$self->SUPER::initializeController();

    # Registering personal Controller
    $self->{_controller} = com::me::myapp::MyController->getInstance( $self->{_multiton_key} ) unless exists $self->{_controller};

    # Command registration for GO_COMMAND notification
    $self->registerCommand( GO_COMMAND, "com::me::myapp::commands::GoCommand" );
  }

  #**********************
  # Optional overriding of org::puremvc::perl5::multicore::patterns::facade::Facade::initializeModel() method
  # This where you can register SOME SPECIAL Proxys and define your own Model multiton
  sub initializeModel {
    my $self = shift;

    # The following must not be executed if you use your own Model class as below
    # it is the case here
    #$self->SUPER::initializeModel();

    # Registering personal Model
    $self->{_model} = com::me::myapp::MyModel->getInstance( $self->{_multiton_key} ) unless exists $self->{_model};

    # Proxy registration
    # CAREFUL: as initializeModel method is part of Facade construction process,
    # DO NOT register Proxys needing to send notification here as notification sending
    # by a Proxy requires Facade to be constructed.
    $self->registerProxy( com::me::myapp::proxies::CountryListProxy->new() );
  }

  #**********************
  # Optional overriding of org::puremvc::perl5::multicore::patterns::facade::Facade::initializeView() method
  # This where you can register SOME SPECIAL Mediators and define your own View multiton
  sub initializeView {
    my $self = shift;

    # The following must not be executed if you use your own View class as below
    # it is the case here
    #$self->SUPER::initializeView();

    # Registering personal View
    $self->{_view} = com::me::myapp::MyView->getInstance( $self->{_multiton_key} ) unless exists $self->{_view};

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

Initializing the L<Model|Model>, L<View|View> and L<Controller|Controller> multitons.

=item *

Providing all the methods defined by the L<Model|Model>, L<View|View> & L<Controller|Controller> multitons.

=item *

Providing the ability to override the specific L<Model|Model>, L<View|View> and L<Controller|Controller> multitons created.

=item *

Providing a single point of contact to the application for registering L<Command|SimpleCommand>s and notifying L<Observers|Observer>.

=back

B<Using the C<< Facade >> interface methods should be sufficient for your application to use all the MVC patterns>.

=head1 INTERFACE

=head2 Methods

=over 4

=item getInstance

C<< sub getInstance( $key ); >>

Returns the multiton instance of the Facade.
During first call, C<< Facade >> instance is created.
Future calls just return already created instance.
Facade creation process includes L<Model|Model>, L<View|View> & L<Controller|Controller> multitons initialization (see C<< initializeFacade >> method).

B<Parameters>

=over 8

=item *

C<< $key - String >>

Unique key identifying the multiton instance to retrieve.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::facade::Facade >> - The multiton instance of the C<< Facade >> for key C<< $key >>.

=item initializeFacade

C<< sub initializeFacade(); >>

Automatically called during C<< getInstance >> method first run (C<< Facade >> instance creation).
This is where L<Model|Model>, L<View|View> & L<Controller|Controller> multitons initialization methods are called.
If you use a subclass of C<< Facade >>, make sure to call C<< SUPER::initializeFacade() >> during C<< Facade >> multiton construction. 

=item initializeController

C<< sub initializeController(); >>

Called by C<< initializeFacade >> method.
Override this method in your subclass of C<< Facade >> if one or both of the following are true:

=over 8

=item *

You wish to initialize your own L<Controller|Controller> class.

=item *

You have L<Commands|SimpleCommand> to register with the L<Controller|Controller> at startup.

=back

If you don't want to initialize a different L<Controller|Controller> call C<< SUPER::initializeController() >> at the beginning of your method, then register L<Commands|SimpleCommand>.

=item initializeModel

C<< sub initializeModel(); >>

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

=item initializeView

C<< sub initializeView(); >>

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

=item registerCommand

C<< sub registerCommand( $notification_name, $command_class_ref ); >>

Register a L<Command|SimpleCommand> with the L<Controller|Controller> by L<notification|Notification> name.

When a L<notifier|Notifier> will send a L<notification|Notification> whose name is C<< $notification_name >>, the L<Controller|Controller> will create an instance of C<< $command_class_ref >> L<Command|SimpleCommand> class and execute its C<< execute >> method.

C<< $command_class_ref >> is a string holding the name of the L<Command|SimpleCommand> class, e.g. "C<< com::me::myapp::MyCommand >>".

Note that there can only be one and only one L<Command|SimpleCommand> registered with the L<Controller|Controller> for a given L<notification|Notification> name. A call to this method will replace any previously registered L<Command|SimpleCommand> for that L<notification|Notification> name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notifications|Notification> the registered C<< Command >> will handle.

=item *

C<< $command_class_ref - String >>

Class name of the C<< Command >> to handle L<notification|Notification> called C<< $notification_name >>. 

=back

=item removeCommand

C<< sub removeCommand( $notification_name ); >>

Remove a previously registered L<Command|SimpleCommand> with the L<Controller|Controller> by L<notification|Notification> name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notification|Notification> for which to remove a registered L<command|SimpleCommand>.

=back

=item hasCommand

C<< sub hasCommand( $notification_name ); >>

Check if a L<Command|SimpleCommand> is registered with the L<Controller|Controller> by L<Notification|Notification> name.

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the L<notification|Notification> for which to check a registered L<command|SimpleCommand>.

=back

B<Returns>

C<< scalar >> - 1 if a L<Command|SimpleCommand> class is registered with the L<Controller|Controller> for L<notifications|Notification> named C<< $notification_name >>, "" otherwise.

=item registerProxy

C<< sub registerProxy( $proxy ); >>

Register a L<Proxy|Proxy> with the L<Model|Model>.

During registration the L<Model|Model> uses C<< Proxy >>'s C<< getProxyName >> method to map the L<Proxy|Proxy> instance to its name. This will serve for retrieval of the L<Proxy|Proxy> instance by its name (see C<< retrieveProxy >> method).

B<Parameters>

=over 8

=item *

C<< $proxy - org::puremvc::perl5::multicore::patterns::proxy::Proxy >>

A L<Proxy|Proxy> instance to register with the C<< Model >>.

=back

=item retrieveProxy

C<< sub retrieveProxy( $proxy_name ); >>

Retrieve a L<Proxy|Proxy> from the L<Model|Model> by name.

B<Parameters>

=over 8

=item *

C<< $proxy_name - String >>

Name of the L<proxy|Proxy> to retrieve from the C<< Model >>.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::proxy::Proxy >> - The L<Proxy|Proxy> instance retrieved from the C<< Model >>.

=item removeProxy

C<< sub removeProxy( $proxy_name ); >>

Remove a L<Proxy|Proxy> from the L<Model|Model> by name.

B<Parameters>

=over 8

=item *

C<< $proxy_name - String >>

Name of the L<proxy|Proxy> to remove from the C<< Model >>.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::proxy::Proxy >> - The L<Proxy|Proxy> instance removed from the C<< Model >>.

=item hasProxy

C<< sub hasProxy( $proxy_name ); >>

Check if a L<Proxy|Proxy> is registered with the L<Model|Model> by name.

B<Parameters>

=over 8

=item *

C<< $proxy_name - String >>

Name of the L<proxy|Proxy> to check.

=back

B<Returns>

C<< scalar >> - 1 if a L<Proxy|Proxy> instance is registered with the C<< Model >> with name C<< $proxy_name >>, "" otherwise.

=item registerMediator

C<< sub registerMediator( $mediator ); >>

Register a L<Mediator|Mediator> with the L<View|View>.

During registration the L<View|View> uses L<Mediator|Mediator>'s C<< getMediatorName >> method to map the L<Mediator|Mediator> instance to its name. This will serve for retrieval of the L<Mediator|Mediator> instance by its name (see C<< retrieveMediator >> method).

B<Parameters>

=over 8

=item *

C<< $mediator - org::puremvc::perl5::multicore::patterns::mediator::Mediator >>

A L<Mediator|Mediator> instance to register with the C<< View >>.

=back

=item retrieveMediator

C<< sub retrieveMediator( $mediator_name ); >>

Retrieve a L<Mediator|Mediator> from the L<View|View> by name.

B<Parameters>

=over 8

=item *

C<< $mediator_name - String >>

Name of the L<mediator|Mediator> to retrieve from the C<< View >>.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::mediator::Mediator >> - The L<Mediator|Mediator> instance retrieved from the C<< View >>.

=item removeMediator

C<< sub removeMediator( $mediator_name ); >>

Remove a L<Mediator|Mediator> from the L<View|View> by name.

B<Parameters>

=over 8

=item *

C<< $mediator_name - String >>

Name of the L<mediator|Mediator> to remove from the C<< View >>.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::patterns::mediator::Mediator >> - The L<Mediator|Mediator> instance removed from the C<< View >>.

=item hasMediator

C<< sub hasMediator( $mediator_name ); >>

Check if a L<Mediator|Mediator> is registered with the L<View|View> by name.

B<Parameters>

=over 8

=item *

C<< $mediator_name - String >>

Name of the L<mediator|Mediator> to check.

=back

B<Returns>

C<< scalar >> - 1 if a L<Mediator|Mediator> instance is registered with the C<< View >> with name C<< $mediator_name >>, "" otherwise.

=item sendNotification

C<< sub sendNotification( $notification_name, $body, $type ); >>

Keeps us from having to construct new L<Notification|Notification> objects in our implementation code.

This method will construct a new L<Notification|Notification> named C<< $notification_name >> with optional C<< $body >> and C<< $type >> parameters. 

B<Parameters>

=over 8

=item *

C<< $notification_name - String >>

Name of the constructed L<Notification|Notification> instance.

=item *

C<< $body - * >>

Body or (business data) of the L<notification|Notification>. Can be any object or scalar. - Optional

=item *

C<< $type - * >>

Type of the L<notification|Notification>. This data can be useful to distinguish several types of the same C<< Notification >>. Usually is a string but could be any other object or scalar. - Optional

=back

=item notifyObservers

C<< sub notifyObservers( $notification ); >>

You should not have to use this method ; instead use C<< sendNotification >> method to notify registered L<observers|Observer> for C<< $notification >>.

B<Parameters>

=over 8

=item *

C<< $notification - org::puremvc::perl5::multicore::patterns::observer::Notification >>

Instance of L<Notification|Notification> the observers will receive as a parameter when notified.

=back

=item hasCore

C<< sub hasCore( $key ); >>

Check whether a C<< Facade >> instance exists in the multiton.

B<Parameters>

=over 8

=item *

C<< $key - String >>

Identifier of the multiton instance to check.

=back

B<Returns>

C<< scalar >> - 1 if a C<< Facade >> instance exists in the multiton for key C<< $key >>.

=item removeCore

C<< sub removeCore( $key ); >>

Remove a C<< Facade >> instance from the multiton.
During method process, L<Model|Model>, L<View|View> and L<Controller|Controller> multiton instances corresponding to C<< $key >> are removed.

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

Unique I<key> identifying C<< Facade's >> multiton instance. You should not have to access it and I<must not> update it in normal usage.

=item _model

Holds the L<Model|Model> multiton instance of the application. You should not have to access it and I<must not> update it in normal usage.

=item _view

Holds the L<View|View> multiton instance of the application. You should not have to access it and I<must not> update it in normal usage.

=item _controller

Holds the L<Controller|Controller> multiton instance of the application. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::multicore::core::Model|Model>

L<org::puremvc::perl5::multicore::core::View|View>

L<org::puremvc::perl5::multicore::core::Controller|Controller>

L<org::puremvc::perl5::multicore::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::multicore::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::multicore::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::multicore::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::multicore::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::multicore::patterns::observer::Observer|Observer>

=cut