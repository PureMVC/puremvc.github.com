package org::puremvc::perl5::multicore::unittests::core::ModelTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::multicore::patterns::proxy::Proxy;

use org::puremvc::perl5::multicore::unittests::core::ModelTestProxy;

BEGIN { print "############### Model tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::multicore::core::Model' ); }
require_ok( 'org::puremvc::perl5::multicore::core::Model' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testGetInstance();
  testMethods();
  testRegisterAndRetrieveProxy();
  testRegisterAndRemoveProxy();
  testHasProxy();
  testOnRegisterAndOnRemove();
}

#**********************
sub testGetInstance {

  print "########## testGetInstance\n";

  my $model = org::puremvc::perl5::multicore::core::Model->getInstance("ModelTest1");
  isa_ok($model, "org::puremvc::perl5::multicore::core::Model");
}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $model = org::puremvc::perl5::multicore::core::Model->getInstance("ModelTest2");
  
  can_ok($model, "initializeModel");
  can_ok($model, "registerProxy");
  can_ok($model, "retrieveProxy");
  can_ok($model, "hasProxy");
  can_ok($model, "removeProxy");
}

#**********************
sub testRegisterAndRetrieveProxy {
  
  print "########## testRegisterAndRetrieveProxy\n";

  my $model = org::puremvc::perl5::multicore::core::Model->getInstance("ModelTest3");
  my $proxy = org::puremvc::perl5::multicore::patterns::proxy::Proxy->new('colors', ['red', 'green', 'blue']);
  
  $model->registerProxy($proxy);
  
  my $retrieved_proxy = $model->retrieveProxy("colors");
  my $data = $retrieved_proxy->getData();
  isnt($data, undef, 'Expecting $data NOT to be undef');
  isa_ok($data, "ARRAY");
  is(@$data, 3, 'Expecting data array to have 3 elements');
  is($data->[0], 'red', 'Expecting $data->[0] to be "red"');
  is($data->[1], 'green', 'Expecting $data->[1] to be "green"');
  is($data->[2], 'blue', 'Expecting $data->[2] to be "blue"');

}

#**********************
sub testRegisterAndRemoveProxy {
  
  print "########## testRegisterAndRemoveProxy\n";

  my $model = org::puremvc::perl5::multicore::core::Model->getInstance("ModelTest4");
  my $proxy = org::puremvc::perl5::multicore::patterns::proxy::Proxy->new('sizes', ['7', '13', '21']);
  
  $model->registerProxy($proxy);
  
  my $removed_proxy = $model->removeProxy("sizes");
  is($removed_proxy->getProxyName(), "sizes", 'Expecting $removed_proxy->getProxyName() to be "sizes"');

  my $retrieved_proxy = $model->retrieveProxy("sizes");
  is($retrieved_proxy, undef, 'Expecting $retrieved_proxy to be undef');

}

#**********************
sub testHasProxy {
  
  print "########## testHasProxy\n";

  my $model = org::puremvc::perl5::multicore::core::Model->getInstance("ModelTest5");
  my $proxy = org::puremvc::perl5::multicore::patterns::proxy::Proxy->new('aces', ['clubs', 'spades', 'hearts', 'diamonds']);
  
  $model->registerProxy($proxy);
  is($model->hasProxy("aces"), 1, 'Expecting $model->hasProxy("aces") to be 1');

  my $removed_proxy = $model->removeProxy("aces");
  is($model->hasProxy("aces"), "", 'Expecting $model->hasProxy("aces") to be ""');

}

#**********************
sub testOnRegisterAndOnRemove {
  
  print "########## testOnRegisterAndOnRemove\n";

  my $model = org::puremvc::perl5::multicore::core::Model->getInstance("ModelTest6");
  my $proxy = org::puremvc::perl5::multicore::unittests::core::ModelTestProxy->new();
  
  $model->registerProxy($proxy);
  is($proxy->getData(), org::puremvc::perl5::multicore::unittests::core::ModelTestProxy::ON_REGISTER_CALLED, 'Expecting $proxy->getData() to be ' . org::puremvc::perl5::multicore::unittests::core::ModelTestProxy::ON_REGISTER_CALLED);

  $model->removeProxy(org::puremvc::perl5::multicore::unittests::core::ModelTestProxy::NAME);
  is($proxy->getData(), org::puremvc::perl5::multicore::unittests::core::ModelTestProxy::ON_REMOVE_CALLED, 'Expecting $proxy->getData() to be ' . org::puremvc::perl5::multicore::unittests::core::ModelTestProxy::ON_REMOVE_CALLED);

}

#**********************
#**********************
1;