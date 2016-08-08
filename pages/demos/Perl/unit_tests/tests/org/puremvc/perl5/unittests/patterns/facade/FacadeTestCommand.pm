package org::puremvc::perl5::unittests::patterns::facade::FacadeTestCommand;

use strict; use warnings;

use org::puremvc::perl5::patterns::command::SimpleCommand;
our @ISA = qw( org::puremvc::perl5::patterns::command::SimpleCommand );

#**********************
#**********************
sub execute {
  my ( $self, $notification ) = @_;
  
  my $vo = $notification->getBody();
  
  $vo->{result} = 2 * $vo->{input};  
}

#**********************
#**********************
1;