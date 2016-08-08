package org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestSub1Command;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::command::SimpleCommand;
our @ISA = qw( org::puremvc::perl5::multicore::patterns::command::SimpleCommand );

#**********************
#**********************
sub execute {
  my ( $self, $notification ) = @_;
  
  my $vo = $notification->getBody();
  
  $vo->{result1} = 2 * $vo->{input};  
}

#**********************
#**********************
1;