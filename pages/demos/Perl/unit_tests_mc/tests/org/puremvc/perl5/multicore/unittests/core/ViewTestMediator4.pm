package org::puremvc::perl5::multicore::unittests::core::ViewTestMediator4;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::mediator::Mediator;
our @ISA = qw( org::puremvc::perl5::multicore::patterns::mediator::Mediator );

use constant NAME => 'org::puremvc::perl5::multicore::unittests::core::ViewTestMediator4::name';

#**********************
#**********************
sub new {
  my ($class, $view_component) = @_;
  
  my $self = $class->SUPER::new(NAME, $view_component);

}

#**********************
sub onRegister {
  my $self = shift;
  
  $self->{_view_component}->on_register_called();
}

#**********************
sub onRemove {
  my $self = shift;
  
  $self->{_view_component}->on_remove_called();
}

#**********************
#**********************
1;