package org::puremvc::perl5::multicore::unittests::core::ViewTestMediator5;

use strict; use warnings;

use org::puremvc::perl5::multicore::patterns::mediator::Mediator;
our @ISA = qw( org::puremvc::perl5::multicore::patterns::mediator::Mediator );

use constant NAME => 'org::puremvc::perl5::multicore::unittests::core::ViewTestMediator5::name';

#**********************
#**********************
sub new {
  my ($class, $view_component) = @_;
  
  my $self = $class->SUPER::new(NAME, $view_component);

}

#**********************
sub listNotificationInterests {
  my $self = shift;
  
  return [$self->viewTest()->NOTE5];
}

#**********************
sub handleNotification {
  my ($self, $notification ) = @_;
  
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