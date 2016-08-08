package org::puremvc::perl5::unittests::core::ViewTestMediator2;

use strict; use warnings;

use org::puremvc::perl5::patterns::mediator::Mediator;
our @ISA = qw( org::puremvc::perl5::patterns::mediator::Mediator );

use constant NAME => 'org::puremvc::perl5::unittests::core::ViewTestMediator2::name';

#**********************
#**********************
sub new {
  my ($class, $view_component) = @_;
  
  my $self = $class->SUPER::new(NAME, $view_component);

}

#**********************
sub listNotificationInterests {
  my $self = shift;
  
  return [
           $self->viewTest()->NOTE1,
           $self->viewTest()->NOTE2
         ];
}

#**********************
sub handleNotification {
  my ($self, $notification ) = @_;
  
  $self->viewTest()->lastNotification( $notification->getName() );
  
}

#**********************
sub viewTest {
  my $self = shift;
  
  return $self->{_view_component};
  
}

#**********************
#**********************
1;