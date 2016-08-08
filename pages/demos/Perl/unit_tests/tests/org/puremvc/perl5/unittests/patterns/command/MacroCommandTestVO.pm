package org::puremvc::perl5::unittests::patterns::command::MacroCommandTestVO;

use strict; use warnings;

#**********************
#**********************
sub new {
  my ( $class, $input ) = @_;
  
  my $self = {};
  bless $self, $class;
  
  $self->{input} = $input;
  $self->{result1} = 0;
  $self->{result2} = 0;
  
  return $self;
}

#**********************
#**********************
1;