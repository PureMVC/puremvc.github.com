package org::puremvc::perl5::unittests::patterns::mediator::MediatorTest;

use strict; use warnings;

use Test::More;

BEGIN { print "############### Mediator tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::patterns::mediator::Mediator' ); }
require_ok( 'org::puremvc::perl5::patterns::mediator::Mediator' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testMethods();
  testNameAccessor();
  testViewAccessor();
  testViewSetter();
}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $mediator = org::puremvc::perl5::patterns::mediator::Mediator->new("mediatorTest", __PACKAGE__);
  
  can_ok($mediator, "getMediatorName");
  can_ok($mediator, "setViewComponent");
  can_ok($mediator, "getViewComponent");
  can_ok($mediator, "listNotificationInterests");
  can_ok($mediator, "handleNotification");
  can_ok($mediator, "onRegister");
  can_ok($mediator, "onRemove");
}

#**********************
sub testNameAccessor {
  
  print "########## testNameAccessor\n";

  my $mediator = org::puremvc::perl5::patterns::mediator::Mediator->new();
  
  is($mediator->getMediatorName(), org::puremvc::perl5::patterns::mediator::Mediator::NAME, 'Expecting $vo->{result} to be ' . org::puremvc::perl5::patterns::mediator::Mediator::NAME);
}

#**********************
sub testViewAccessor {
  
  print "########## testViewAccessor\n";

  my $view = __PACKAGE__;
  my $mediator = org::puremvc::perl5::patterns::mediator::Mediator->new(org::puremvc::perl5::patterns::mediator::Mediator::NAME, $view);
  
  is($mediator->getViewComponent(), $view, 'Expecting $mediator->getViewComponent() to be $view');
}

#**********************
sub testViewSetter {
  
  print "########## testViewSetter\n";

  my $view = __PACKAGE__;
  my $mediator = org::puremvc::perl5::patterns::mediator::Mediator->new(org::puremvc::perl5::patterns::mediator::Mediator::NAME);

  $mediator->setViewComponent($view);  
  is($mediator->getViewComponent(), $view, 'Expecting $mediator->getViewComponent() to be $view');
}

#**********************
#**********************
1;