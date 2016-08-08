package org::puremvc::perl5::unittests::patterns::command::MacroCommandTestSub1Command;

use strict; use warnings;

use org::puremvc::perl5::patterns::command::SimpleCommand;
our @ISA = qw( org::puremvc::perl5::patterns::command::SimpleCommand );

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