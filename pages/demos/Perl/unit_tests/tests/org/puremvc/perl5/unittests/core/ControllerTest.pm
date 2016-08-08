package org::puremvc::perl5::unittests::core::ControllerTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::unittests::core::ControllerTestCommand;
use org::puremvc::perl5::unittests::core::ControllerTestCommand2;
use org::puremvc::perl5::unittests::core::ControllerTestVO;
use org::puremvc::perl5::patterns::observer::Notification;
use org::puremvc::perl5::core::View;

BEGIN { print "############### Controller tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::core::Controller' ); }
require_ok( 'org::puremvc::perl5::core::Controller' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testGetInstance();
  testMethods();
  testRegisterAndExecuteCommand();
  testRegisterAndRemoveCommand();
  testHasCommand();
  testReRegisterAndExecuteCommand();
}

#**********************
sub testGetInstance {

  print "########## testGetInstance\n";

  my $controller = org::puremvc::perl5::core::Controller->getInstance();
  isa_ok($controller, "org::puremvc::perl5::core::Controller");
}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $controller = org::puremvc::perl5::core::Controller->getInstance();
  
  can_ok($controller, "initializeController");
  can_ok($controller, "executeCommand");
  can_ok($controller, "registerCommand");
  can_ok($controller, "hasCommand");
  can_ok($controller, "removeCommand");
}

#**********************
sub testRegisterAndExecuteCommand {
  
  print "########## testRegisterAndExecuteCommand\n";

  my $controller = org::puremvc::perl5::core::Controller->getInstance();
  
  $controller->registerCommand("ControllerTest", "org::puremvc::perl5::unittests::core::ControllerTestCommand");

  my $vo = org::puremvc::perl5::unittests::core::ControllerTestVO->new( 12 );
  my $notification = org::puremvc::perl5::patterns::observer::Notification->new("ControllerTest", $vo);

  $controller->executeCommand($notification);
  is($vo->{result}, 24, 'Expecting $vo->{result} == 24');
}

#**********************
sub testRegisterAndRemoveCommand {
  
  print "########## testRegisterAndRemoveCommand\n";

  my $controller = org::puremvc::perl5::core::Controller->getInstance();
  
  $controller->registerCommand("ControllerRemoveTest", "org::puremvc::perl5::unittests::core::ControllerTestCommand");

  my $vo = org::puremvc::perl5::unittests::core::ControllerTestVO->new( 12 );
  my $notification = org::puremvc::perl5::patterns::observer::Notification->new("ControllerRemoveTest", $vo);

  $controller->executeCommand($notification);
  is($vo->{result}, 24, 'Expecting $vo->{result} == 24');
  
  $vo->{result} = 0;  
  $controller->removeCommand("ControllerRemoveTest");
  $controller->executeCommand($notification);  
  is($vo->{result}, 0, 'Expecting $vo->{result} == 0');
  
}

#**********************
sub testHasCommand {
  
  print "########## testHasCommand\n";

  my $controller = org::puremvc::perl5::core::Controller->getInstance();
  
  $controller->registerCommand("hasCommandTest", "org::puremvc::perl5::unittests::core::ControllerTestCommand");
  is( $controller->hasCommand("hasCommandTest"), 1, 'Expecting $controller->hasCommand("hasCommandTest") == 1');
  
  $controller->removeCommand("hasCommandTest");
  is( $controller->hasCommand("hasCommandTest"), "", 'Expecting $controller->hasCommand("hasCommandTest") eq ""');
  
}

#**********************
sub testReRegisterAndExecuteCommand {
  
  print "########## testReRegisterAndExecuteCommand\n";

  my $controller = org::puremvc::perl5::core::Controller->getInstance();
  
  $controller->registerCommand("ControllerTest2", "org::puremvc::perl5::unittests::core::ControllerTestCommand2");
  $controller->removeCommand("ControllerTest2");
  $controller->registerCommand("ControllerTest2", "org::puremvc::perl5::unittests::core::ControllerTestCommand2");

  my $vo = org::puremvc::perl5::unittests::core::ControllerTestVO->new( 12 );
  my $notification = org::puremvc::perl5::patterns::observer::Notification->new("ControllerTest2", $vo);

  my $view = org::puremvc::perl5::core::View->getInstance();
  $view->notifyObservers($notification);
  is($vo->{result}, 24, 'Expecting $vo->{result} == 24');
  
  $view->notifyObservers($notification);
  is($vo->{result}, 48, 'Expecting $vo->{result} == 48');
}

#**********************
#**********************
1;