#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::core::Model;

use strict; use warnings;

my %_instances = ();

my $new = sub {
  my ( $class, $key ) = @_;
  
  my $self = {};
  bless( $self, $class );

  $self->{_multiton_key} = $key;
  $self->{_proxies} = {};

  $self->initializeModel();
  
  return $self;
};

#**********************
#**********************
sub initializeModel {
}

#**********************
sub getInstance {
  my ( $class, $key ) = @_;
    
  $_instances{$key} = $new->($class, $key) unless exists $_instances{$key};
  
  return $_instances{$key};
}

#**********************
sub registerProxy  {
  my ( $self, $proxy ) = @_;
  
  $self->{_proxies}->{ $proxy->getProxyName() } = $proxy;
  
  $proxy->onRegister();
}

#**********************
sub retrieveProxy {
  my ( $self, $proxy_name ) = @_;

  return $self->{_proxies}->{$proxy_name};
}

#**********************
sub hasProxy {
  my ( $self, $proxy_name ) = @_;

  return exists $self->{_proxies}->{$proxy_name};
}

#**********************
sub removeProxy {
  my ( $self, $proxy_name ) = @_;
  
  my $proxy = $self->{_proxies}->{$proxy_name};
  
  if ( defined $proxy ) {
    delete $self->{_proxies}->{$proxy_name};
    $proxy->onRemove();
  }
  
  return $proxy;

}

#**********************
sub removeModel {
  my ( $class, $key ) = @_;
  
  delete $_instances{$key};
  
}

#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::multicore::core::Model >>

Multiton responsible for implementing the MVC C<< Model >> pattern.

=head1 DESCRIPTION

In PureMVC, the C<< Model >> class assumes these responsibilities:

=over 4

=item *

Maintain a cache of L<Proxy|Proxy> instances.

=item *

Provide methods for registering, retrieving, and removing L<proxies|Proxy>.

=item *

Notifiying L<proxies|Proxy> when they are registered or removed.

=back

Your application must register L<Proxy|Proxy> instances with the C<< Model >>.

Typically, you use a L<command|SimpleCommand> to create and register L<Proxy|Proxy> instances once the C<< Facade >> has initialized the Core actors.

=head1 INTERFACE

=head2 Methods

=over 4

=item getInstance

C<< sub getInstance( $key ); >>

Returns the multiton instance of the C<< Model >>.

B<Parameters>

=over 8

=item *

C<< $key - String >>

Unique key identifying the multiton instance to retrieve.

=back

B<Returns>

C<< org::puremvc::perl5::multicore::core::Model >> - The multiton instance of the C<< Model >> for key C<< $key >>.

=item initializeModel

C<< sub initializeModel(); >>

Initialize the multiton instance of the C<< Model >>.
This method is automatically called during multiton instantiation.
This is where you will achieve your C<< Model >> subclass specific initializations if your application actually overrides pureMVC C<< Model >> class.

=item registerProxy

C<< sub registerProxy( $proxy ); >>

Register a L<Proxy|Proxy> instance with the C<< Model >>. During registration L<proxy's|Proxy> C<< getProxyName >> method is called by C<< Model >> multiton to map C<< $proxy >> instance with its name.

Any registered L<proxy|Proxy> is afterwards retrieved, removed or checked by its name.

B<Parameters>

=over 8

=item *

C<< $proxy - org::puremvc::perl5::multicore::patterns::proxy::Proxy >>

A L<Proxy|Proxy> instance to register with the C<< Model >>.

=back

=item retrieveProxy

C<< sub retrieveProxy( $proxy_name ); >>

Retrieve from the C<< Model >> a L<proxy|Proxy> registered with name C<< $proxy_name >>.

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

Remove from the C<< Model >> a L<proxy|Proxy> registered with name C<< $proxy_name >>.

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

Check whether a L<proxy|Proxy> is registered with name C<< $proxy_name >> or not.

B<Parameters>

=over 8

=item *

C<< $proxy_name - String >>

Name of the L<proxy|Proxy> to check.

=back

B<Returns>

C<< scalar >> - 1 if a L<Proxy|Proxy> instance is registered with the C<< Model >> with name C<< $proxy_name >>, "" otherwise.

=item removeModel

C<< sub removeModel( $key ); >>

Remove a C<< Model >> instance from the multiton.

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

Unique I<key> identifying C<< Model's >> multiton instance. You should not have to access it and I<must not> update it in normal usage.

=item _proxies

Array reference on registered L<Proxies|Proxy> with the C<< Model >>. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::multicore::core::View|View>

L<org::puremvc::perl5::multicore::core::Controller|Controller>

L<org::puremvc::perl5::multicore::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::multicore::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::multicore::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::multicore::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::multicore::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::multicore::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::multicore::patterns::observer::Observer|Observer>

=cut