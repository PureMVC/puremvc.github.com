package org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestCommand;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::command::MacroCommand;
our @ISA = qw( org::puremvc::perl5::multicore::patterns::command::MacroCommand );

use org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestSub1Command;
use org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestSub2Command;

#**********************
#**********************
sub initializeMacroCommand {
  my $self = shift;
  
  $self->addSubCommand( "org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestSub1Command");
  $self->addSubCommand( "org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestSub2Command");
}

#**********************
#**********************
1;