package org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::multicore::patterns::proxy::Proxy;
use org::puremvc::perl5::multicore::patterns::mediator::Mediator;

use org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTestVO;
use org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTestCommand;

BEGIN { print "############### Facade tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::multicore::patterns::facade::Facade' ); }
require_ok( 'org::puremvc::perl5::multicore::patterns::facade::Facade' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testGetInstance();
  testMethods();
  testRegisterCommandAndSendNotification();
  testRegisterAndRemoveCommandAndSendNotification();
  testHasCommand();
  testRegisterAndRetrieveProxy();
  testRegisterAndRemoveProxy();
  testHasProxy();
  testRegisterRetrieveAndRemoveMediator();
  testHasMediator();
  testHasCoreAndRemoveCore();
}

#**********************
sub testGetInstance {

  print "########## testGetInstance\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest1");
  is(defined $facade, 1, 'Expecting $facade to be defined');
  isa_ok($facade, "org::puremvc::perl5::multicore::patterns::facade::Facade");
}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest2");
  
  can_ok($facade, "initializeFacade");
  can_ok($facade, "initializeModel");
  can_ok($facade, "initializeView");
  can_ok($facade, "initializeController");
  can_ok($facade, "registerCommand");
  can_ok($facade, "removeCommand");
  can_ok($facade, "hasCommand");
  can_ok($facade, "registerProxy");
  can_ok($facade, "retrieveProxy");
  can_ok($facade, "hasProxy");
  can_ok($facade, "removeProxy");
  can_ok($facade, "registerMediator");
  can_ok($facade, "retrieveMediator");
  can_ok($facade, "removeMediator");
  can_ok($facade, "hasMediator");
  can_ok($facade, "sendNotification");
  can_ok($facade, "notifyObservers");
  can_ok($facade, "hasCore");
  can_ok($facade, "removeCore");
}

#**********************
sub testRegisterCommandAndSendNotification {
  
  print "########## testRegisterCommandAndSendNotification\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest3");
  my $vo = org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTestVO->new(32);
  
  $facade->registerCommand("FacadeTestNote", "org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTestCommand");
  $facade->sendNotification("FacadeTestNote", $vo);
  
  is($vo->{result}, 64, 'Expecting $vo->{result} to be 64');  
}

#**********************
sub testRegisterAndRemoveCommandAndSendNotification {
  
  print "########## testRegisterAndRemoveCommandAndSendNotification\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest4");
  my $vo = org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTestVO->new(32);
  
  $facade->registerCommand("FacadeTestNote", "org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTestCommand");
  $facade->removeCommand("FacadeTestNote");
  $facade->sendNotification("FacadeTestNote", $vo);
  
  isnt($vo->{result}, 64, 'Expecting $vo->{result} not to be 64');  
}

#**********************
sub testHasCommand {
  
  print "########## testHasCommand\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest5");
  
  $facade->registerCommand("facadeHasCommandTest", "org::puremvc::perl5::multicore::unittests::patterns::facade::FacadeTestCommand");
  is( $facade->hasCommand("facadeHasCommandTest"), 1, 'Expecting $facade->hasCommand("facadeHasCommandTest") == 1');
  
  $facade->removeCommand("facadeHasCommandTest");
  is( $facade->hasCommand("facadeHasCommandTest"), "", '$facade $controller->hasCommand("facadeHasCommandTest") eq ""');
  
}

#**********************
sub testRegisterAndRetrieveProxy {
  
  print "########## testRegisterAndRetrieveProxy\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest6");
  my $proxy = org::puremvc::perl5::multicore::patterns::proxy::Proxy->new('colors', ['red', 'green', 'blue']);

  $facade->registerProxy($proxy);
  my $retrieved_proxy = $facade->retrieveProxy("colors");
  isa_ok($retrieved_proxy, "org::puremvc::perl5::multicore::patterns::proxy::Proxy");
  
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

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest7");
  my $proxy = org::puremvc::perl5::multicore::patterns::proxy::Proxy->new('sizes', ['7', '13', '21']);
  
  $facade->registerProxy($proxy);
  
  my $removed_proxy = $facade->removeProxy("sizes");
  is($removed_proxy->getProxyName(), "sizes", 'Expecting $removed_proxy->getProxyName() to be "sizes"');

  my $retrieved_proxy = $facade->retrieveProxy("sizes");
  is($retrieved_proxy, undef, 'Expecting $retrieved_proxy to be undef');

}

#**********************
sub testHasProxy {
  
  print "########## testHasProxy\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest8");
  my $proxy = org::puremvc::perl5::multicore::patterns::proxy::Proxy->new('aces', ['clubs', 'spades', 'hearts', 'diamonds']);
  
  $facade->registerProxy($proxy);
  is($facade->hasProxy("aces"), 1, 'Expecting $facade->hasProxy("aces") to be 1');

  my $removed_proxy = $facade->removeProxy("aces");
  is($facade->hasProxy("aces"), "", 'Expecting $facade->hasProxy("aces") to be ""');
}

#**********************
sub testRegisterRetrieveAndRemoveMediator {
  
  print "########## testRegisterRetrieveAndRemoveMediator\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest9");
  my $testmediator = org::puremvc::perl5::multicore::patterns::mediator::Mediator->new("testing", __PACKAGE__);
  
  $facade->registerMediator($testmediator);
  is(defined $facade->retrieveMediator("testing"), 1, 'Expecting $facade->retrieveMediator("testing") to be defined');
  
  my $removed_mediator = $facade->removeMediator("testing");
  is($removed_mediator->getMediatorName(), "testing", 'Expecting $removed_mediator->getMediatorName() to be "testing"');
  is($facade->retrieveMediator("testing"), undef, 'Expecting $facade->retrieveMediator("testing") to be undef');
}

#**********************
sub testHasMediator {
  
  print "########## testHasMediator\n";

  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest10");
  my $hasmediator = org::puremvc::perl5::multicore::patterns::mediator::Mediator->new("HasMediator", __PACKAGE__);
  
  $facade->registerMediator($hasmediator);
  is($facade->hasMediator("HasMediator"), 1, 'Expecting $facade->hasMediator("HasMediator") == 1');
  
  $facade->removeMediator("HasMediator");
  is($facade->hasMediator("HasMediator"), "", 'Expecting $facade->hasMediator("HasMediator") eq ""');
}

#**********************
sub testHasCoreAndRemoveCore {
  
  print "########## testHasCoreAndRemoveCore\n";

  is(org::puremvc::perl5::multicore::patterns::facade::Facade->hasCore("FacadeTest11"), "", 'Expecting Facade->hasCore("FacadeTest11") to be ""');
  
  my $facade = org::puremvc::perl5::multicore::patterns::facade::Facade->getInstance("FacadeTest11");
  is($facade->hasCore("FacadeTest11"), 1, 'Expecting $facade->hasCore("FacadeTest11") to be 1');
  
  org::puremvc::perl5::multicore::patterns::facade::Facade->removeCore("FacadeTest11");
  is(org::puremvc::perl5::multicore::patterns::facade::Facade->hasCore("FacadeTest11"), "", 'Expecting Facade->hasCore("FacadeTest11") to be ""');
}

#**********************
#**********************
1;