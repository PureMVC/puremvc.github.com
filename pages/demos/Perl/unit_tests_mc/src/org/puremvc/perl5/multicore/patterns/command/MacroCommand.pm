#
#	 PureMVC Perl 5 Multicore by Frederic Sullet <frederic.sullet@puremvc.org>
#
#	 PureMVC - Copyright(c) 2006-2011 Futurescale, Inc., Some rights reserved.
#	 Your reuse is governed by the Creative Commons Attribution 3.0 License
# 
package org::puremvc::perl5::multicore::patterns::command::MacroCommand;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::observer::Notifier;
our @ISA = qw( org::puremvc::perl5::multicore::patterns::observer::Notifier );

#**********************
#**********************
sub new {
  my $class = shift;

  my $self = $class->SUPER::new();
  bless( $self, $class );
  
  $self->{_subcommands} = [];
  $self->initializeMacroCommand();
  
  return $self;
}

#**********************
sub initializeMacroCommand {
  
}

#**********************
sub addSubCommand {
  my ( $self, $command_class_ref ) = @_;
  
  push( @{$self->{_subcommands} }, $command_class_ref );
}

#**********************
sub execute {
  my ( $self, $notification ) = @_;
  
  foreach my $sub_command_class_ref ( @{ $self->{_subcommands} } ) {
    my $command = $sub_command_class_ref->new();
    $command->initializeNotifier( $self->{_multiton_key} );
    $command->execute( $notification );
  }
  
}
  
#**********************
#**********************
1;

__END__

=head1 NAME

C<< org::puremvc::perl5::multicore::patterns::command::MacroCommand >>

B<inherits:>

=over 4

=item *

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

=back

A Base pureMVC C<< Command >> concept implementation that executes other C<< commands >>.

=head1 SYNOPSIS

  package com::me::myapp::commands::AMacroCommand;

  use strict; use warnings;

  use org::puremvc::perl5::multicore::patterns::command::MacroCommand;
  our @ISA = qw( org::puremvc::perl5::multicore::patterns::command::MacroCommand );

  use com::me::myapp::commands::AFirstSubCommand;
  use com::me::myapp::commands::ASecondSubCommand;

  sub initializeMacroCommand {
    my $self = shift;
  
    $self->addSubCommand( "com::me::myapp::commands::AFirstSubCommand" );
    $self->addSubCommand( "com::me::myapp::commands::ASecondSubCommand" );
  
  }

  #**********************
  #**********************
  1;

=head1 DESCRIPTION

A C<< MacroCommand >> maintains a list of L<Commands|SimpleCommand> class names called I<SubCommands>.

When C<< execute >> is called, the C<< MacroCommand >> instantiates and calls C<< execute >> on each of its I<SubCommands> in the order they where registered.

Each I<SubCommand> will be passed a reference to the original L<notification|Notification> that was passed to the C<< MacroCommand >>'s C<< execute >> method.

Unlike L<SimpleCommand|SimpleCommand>, your subclass should not override C<< execute >>, but instead, should override the C<< initializeMacroCommand >> method, calling C<< addSubCommand >> once for each I<SubCommand> to be executed.

A I<SubCommand> can be a L<SimpleCommand|SimpleCommand> or another C<< MacroCommand >>.

=head1 INTERFACE

=head2 Methods

=over 4

=item initializeMacroCommand

C<< sub initializeMacroCommand(); >>

Initialize the C<< MacroCommand >>.

In your subclass, override this method to register the C<< MacroCommand's >> I<SubCommands> like this:

  $self->addSubCommand( "com::me::myapp::commands::ASubCommand" );

=item addSubCommand

C<< sub addSubCommand( $command_class_ref ); >>

Register a I<SubCommand> to the C<< MacroCommand >>'s list.

The I<SubCommands> will be called in First In/First Out (FIFO) order.

B<Parameters>

=over 8

=item *

C<< $command_class_ref - String >>

Name of the I<SubCommand> to register to the C<< MacroCommand >>'s list.

=back

=item execute

C<< sub execute( $notification ); >>

Execute the C<< MacroCommand >>'s I<SubCommands>.

The I<SubCommands> will be called in First In/First Out (FIFO) order.

B<Parameters>

=over 8

=item *

C<< $notification - org::puremvc::perl5::multicore::patterns::observer::Notification >>

The L<notification|Notification> to handle by each C<< MacroCommand >>'s I<SubCommand>.

=back

=back

=head2 Properties

=over 4

=item _subcommands

Array reference on registered I<SubCommands> with the C<< MacroCommand >>. You should not have to access it and I<must not> update it in normal usage.

=back

=head1 SEE ALSO

L<org::puremvc::perl5::multicore::core::Model|Model>

L<org::puremvc::perl5::multicore::core::View|View>

L<org::puremvc::perl5::multicore::core::Controller|Controller>

L<org::puremvc::perl5::multicore::patterns::facade::Facade|Facade>

L<org::puremvc::perl5::multicore::patterns::observer::Notification|Notification>

L<org::puremvc::perl5::multicore::patterns::proxy::Proxy|Proxy>

L<org::puremvc::perl5::multicore::patterns::mediator::Mediator|Mediator>

L<org::puremvc::perl5::multicore::patterns::command::SimpleCommand|SimpleCommand>

L<org::puremvc::perl5::multicore::patterns::observer::Notifier|Notifier>

L<org::puremvc::perl5::multicore::patterns::observer::Observer|Observer>

=cut