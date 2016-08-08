package org::puremvc::perl5::unittests::core::ControllerTestCommand2;

use strict; use warnings;

use org::puremvc::perl5::patterns::command::SimpleCommand;;
our @ISA = qw( org::puremvc::perl5::patterns::command::SimpleCommand );

use org::puremvc::perl5::unittests::core::ControllerTestVO;

#**********************
sub execute {
  my ( $self, $notification ) = @_;
  
  my $vo = $notification->getBody();
  
  $vo->{result} += $vo->{input} * 2;
}

#**********************
#**********************
1;