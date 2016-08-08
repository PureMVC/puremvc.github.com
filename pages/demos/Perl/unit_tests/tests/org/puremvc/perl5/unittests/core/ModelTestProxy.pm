package org::puremvc::perl5::unittests::core::ModelTestProxy;

use strict; use warnings;

use org::puremvc::perl5::patterns::proxy::Proxy;
our @ISA = qw( org::puremvc::perl5::patterns::proxy::Proxy );

use constant NAME => 'org::puremvc::perl5::unittests::core::ModelTestProxy::name';
use constant ON_REGISTER_CALLED => 'org::puremvc::perl5::unittests::core::ModelTestProxy::on_register_called';
use constant ON_REMOVE_CALLED => 'org::puremvc::perl5::unittests::core::ModelTestProxy::on_remove_called';

#**********************
#**********************
sub new {
  my ($class, $view_component) = @_;
  
  my $self = $class->SUPER::new(NAME, "");

}

#**********************
sub onRegister {
  my $self = shift;
  
  $self->setData(ON_REGISTER_CALLED);

}

#**********************
sub onRemove {
  my $self = shift;
  
  $self->setData(ON_REMOVE_CALLED);

}

#**********************
#**********************
1;