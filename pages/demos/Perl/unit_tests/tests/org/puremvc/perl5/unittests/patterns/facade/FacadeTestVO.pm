package org::puremvc::perl5::unittests::patterns::facade::FacadeTestVO;

use strict; use warnings;

#**********************
#**********************
sub new {
  my ( $class, $input ) = @_;
  
  my $self = {};
  bless $self, $class;
  
  $self->{input} = $input;
  $self->{result} = 0;
  
  return $self;
}

#**********************
#**********************
1;