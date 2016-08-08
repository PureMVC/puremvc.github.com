#
#	 PureMVC Perl 5 port by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::patterns::command::SimpleCommand;

use strict; use warnings;

use org::puremvc::perl5::patterns::observer::Notifier;
our @ISA = qw( org::puremvc::perl5::patterns::observer::Notifier );

#**********************
#**********************
sub new {
  my $class = shift;

  my $self = $class->SUPER::new();
  bless( $self, $class );
  
  return $self;
}

#**********************
sub execute {
}
  
#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::patterns::command::SimpleCommand >>

B<ISA> L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

Base pureMVC C<< Command >> concept implementation.

=head1 SYNOPSIS

  package com::me::myapp::commands::ACommand;

  use strict; use warnings;

  use org::puremvc::perl5::patterns::command::SimpleCommand;
  our @ISA = qw( org::puremvc::perl5::patterns::command::SimpleCommand );

  use com::me::myapp::Facade;
  
  #**********************
  #**********************
  sub execute {
    my ( $self, $notification ) = @_;

    my $data_key = $notification->getBody();
    
    my $facade = com::me::myapp::Facade->getInstance();
    
    my $proxy = $facade->retrieveProxy( "AProxy" );
    my $data = $proxy->some_method( $data_key );
    
    my $mediator = $facade->retrieveMediator( "AMediator" );
    $mediator->do_something( $data );

  }

  #**********************
  #**********************
  1;

=head1 DESCRIPTION

In PureMVC, C<< Command >> implementors assume the business logic of your application.

Your C<< Command >> subclasses should override the C<< execute >> method to implement this business logic.

=head1 INTERFACE

=head2 Methods

=over 4

=item *

C<< org::puremvc::perl5::patterns::command::SimpleCommand->execute( $notification ) >>

Fulfill the use-case initiated by the given L<notification|Notification>.

In the C<< Command >> pattern, an application use-case typically begins with some user action, which results in a L<notification|Notification> being broadcast, which is handled by business logic in the C<< execute >> method of an C<< Command >>.

Inside this method, L<Proxy|Proxy>, L<Mediator|Mediator> registration, retrieval, removal is achieved to insure business logic linked to the L<notification|Notification>.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::core::Model|Model>

L<org::puremvc::perl5::core::View|View>

L<org::puremvc::perl5::core::Controller|Controller>

L<org::puremvc::perl5::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::patterns::command::MacroCommand|MacroCommand>

L<org::puremvc::perl5::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::patterns::observer::Observer|Observer>

=cut