package org::puremvc::perl5::unittests::core::ViewTestMediator6;

use strict; use warnings;

use org::puremvc::perl5::patterns::mediator::Mediator;
our @ISA = qw( org::puremvc::perl5::patterns::mediator::Mediator );

#**********************
#**********************
sub listNotificationInterests {
  my $self = shift;
  
  return [$self->viewTest()->NOTE6];
}

#**********************
sub handleNotification {
  my ($self, $notification ) = @_;

  $self->{_facade}->removeMediator($self->getMediatorName());
  
}

#**********************
sub onRemove {
  my $self = shift;
  
  $self->viewTest()->increment_counter();
  
}

#**********************
sub viewTest {
  my $self = shift;
  
  return $self->{_view_component};
  
}

#**********************
#**********************
1;