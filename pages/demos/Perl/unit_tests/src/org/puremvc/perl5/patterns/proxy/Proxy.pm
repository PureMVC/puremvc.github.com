#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::patterns::proxy::Proxy;

use strict; use warnings;

use org::puremvc::perl5::patterns::observer::Notifier;
our @ISA = qw( org::puremvc::perl5::patterns::observer::Notifier );

use base 'Exporter';
use constant NAME => "Proxy";
our @EXPORT_OK = ('NAME');

#**********************
#**********************
sub new {
  my ( $class, $proxy_name, $data ) = @_;
  
  my $self = $class->SUPER::new();
  bless( $self, $class );
  
  $self->{_name} = defined $proxy_name ? $proxy_name : NAME;
  $self->{_data} = $self->setData( $data ) if defined $data;
  
  return $self;
}

#**********************
sub getProxyName {
  my $self = shift;

  return $self->{_name};
}

#**********************
sub setData {
  my ( $self, $data ) = @_;
  
  $self->{_data} = $data;
  
}

#**********************
sub getData {
  my $self = shift;
  
  return $self->{_data};  
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

C<< org::puremvc::perl5::patterns::proxy::Proxy >>

B<ISA> L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

Implementation of the pureMVC C<< Proxy >> pattern.

=head1 SYNOPSIS

  package com::me::myapp::proxies::AProxy;

  use strict; use warnings;

  use org::puremvc::perl5::patterns::proxy::Proxy;
  our @ISA = qw( org::puremvc::perl5::patterns::proxy::Proxy );

  #**********************
  #**********************
  sub onRegister {
    my $self = shift;
  
    $self->sendNotification("ANotification");
  }

  #**********************
  sub onRemove {
    print "AProxy removed\n";
  
  }

  #**********************
  #**********************
  1;

=head1 DESCRIPTION

In PureMVC, C<< Proxy >> implementors assume these responsibilities:

=over 4

=item *

Implement a common method which returns the name of the C<< Proxy >>.

=item *

Provide methods for setting and getting the data object.

=back

Additionally, proxies typically:

=over 4

=item *

Maintain references to one or more pieces of model data.

=item *

Provide methods for manipulating that data.

=item *

Generate L<notification|Notification> when their L<model|Model> data changes.

=item *

Encapsulate interaction with local or remote services used to fetch and persist model data.

=back

=head1 INTERFACE

=head2 Methods

=over 4

=item *

C<< new( $proxy_name, $data ) >>

Constructor. Pass it 2 arguments :

=over 8

=item *

C<< $proxy_name >> : name by which any retrieval, removal, or existence checking will be achieved in your application.

=item *

C<< $data >> : optional object instance representing business data.

=back

A C<< Proxy >> might simply manage a reference to a local data object, in which case interacting with it might involve setting and getting of its data in synchronous fashion.

C<< Proxy >> classes are also used to encapsulate the application's interaction with remote services to save or retrieve data, in which case, we adopt an asyncronous idiom; setting data (or calling a method) on the C<< Proxy >> and listening for a L<notification|Notification> to be sent when the C<< Proxy >> has retrieved the data from the service.

It is common to define a default name for your C<< Proxy >> class implementation by mean of a constant:

  use constant NAME => "com::me::myapp::proxies::AProxy";

To register an instance of your C<< Proxy >> class you can then do as follows:

  use com::me::myapp::proxies::AProxy;
  
  my $facade = org::puremvc::perl5::patterns::facade::Facade->getInstance();

  my $proxy = com::me::myapp::proxies::AProxy->new( com::me::myapp::proxies::AProxy::NAME );
  $facade->registerProxy($proxy);

It is possible to register several instances of the same C<< Proxy >> class. You must then give different names to each instance registration in order to fully qualify them in your application:

  use com::me::myapp::proxies::AProxy;
  
  my $facade = org::puremvc::perl5::patterns::facade::Facade->getInstance();

  my $proxy = com::me::myapp::proxies::AProxy->new( com::me::myapp::proxies::AProxy::NAME );
  $facade->registerProxy($proxy);

  my $other_proxy = com::me::myapp::proxies::AProxy->new( "SOME_OTHER_NAME" );
  $facade->registerProxy($other_proxy);

=item *

C<< getProxyName() >>

Returns the name by which a C<< Proxy >> was registered with the L<model|Model>.

=item *

C<< setData( $data ) >>

C<< Proxy >>'s local data setter.

=item *

C<< getData( $data ) >>

C<< Proxy >>'s local data getter.

=item *

C<< onRegister() >>

Called by the L<model|Model> when the C<< Proxy >> is registered.

=item *

C<< onRemove() >>

Called by the L<model|Model> when the C<< Proxy >> is removed.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::Model|Model>

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::core::Controller|Controller>

L<org::puremvc::perl5::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut
