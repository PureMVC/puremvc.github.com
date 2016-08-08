package org::puremvc::perl5::unittests::patterns::command::MacroCommandTestSub2Command;

use strict; use warnings;

use org::puremvc::perl5::patterns::command::SimpleCommand;
our @ISA = qw( org::puremvc::perl5::patterns::command::SimpleCommand );

#**********************
#**********************
sub execute {
  my ( $self, $notification ) = @_;
  
  my $vo = $notification->getBody();
  
  $vo->{result2} = $vo->{input} * $vo->{input};  
}

#**********************
#**********************
1;