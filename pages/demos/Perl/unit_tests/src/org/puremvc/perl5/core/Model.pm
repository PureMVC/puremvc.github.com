#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::core::Model;

use strict; use warnings;

my $_instance;

my $new = sub {
  my $class = shift;
  
  my $self = {};
  bless( $self, $class );

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
  my $class = shift;
  
  $_instance = $new->($class) if ! defined $_instance;
  
  return $_instance;
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
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::core::Model >>

Singleton responsible for implementing the MVC C<< Model >> pattern.

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

=item *

C<< org::puremvc::perl5::core::Model->getInstance() >>

Returns the singleton instance of the C<< Model >>.

=item *

C<< org::puremvc::perl5::core::Model->initializeModel() >>

Initialize the singleton instance of the C<< Model >>.
This method is automatically called during singleton instantiation.
This is where you will achieve your C<< Model >> subclass specific initializations if your application actually overrides pureMVC C<< Model >> class.

=item *

C<< org::puremvc::perl5::core::Model->registerProxy( $proxy ) >>

Register a L<Proxy|Proxy> instance with the C<< Model >>. During registration L<proxy's|Proxy> C<< getProxyName >> method is called by C<< Model >> singleton to map C<< $proxy >> instance with its name.

Any registered L<proxy|Proxy> is afterwards retrieved, removed or checked by its name.

=item *

C<< org::puremvc::perl5::core::Model->retrieveProxy( $proxy_name ) >>

Retrieve from the C<< Model >> a L<proxy|Proxy> registered with name C<< $proxy_name >>.

=item *

C<< org::puremvc::perl5::core::Model->removeProxy( $proxy_name ) >>

Remove from the C<< Model >> a L<proxy|Proxy> registred with name C<< $proxy_name >>.

=item *

C<< org::puremvc::perl5::core::Model->hasProxy( $proxy_name ) >>

Check whether a L<proxy|Proxy> is registered with name C<< $proxy_name >> or not.

=back

=head2 Properties

=over 4

=item *

C<< _proxies >>

Array reference on registered L<Proxies|Proxy> with the C<< Model >>. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::core::Controller|Controller>

L<org::puremvc::perl5::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut