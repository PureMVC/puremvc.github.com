package org::puremvc::perl5::multicore::unittests::core::ControllerTestCommand;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::command::SimpleCommand;;
our @ISA = qw( org::puremvc::perl5::multicore::patterns::command::SimpleCommand );

use org::puremvc::perl5::multicore::unittests::core::ControllerTestVO;

#**********************
sub execute {
  my ( $self, $notification ) = @_;
  
  my $vo = $notification->getBody();
  
  $vo->{result} = $vo->{input} * 2;
}

#**********************
#**********************
1;