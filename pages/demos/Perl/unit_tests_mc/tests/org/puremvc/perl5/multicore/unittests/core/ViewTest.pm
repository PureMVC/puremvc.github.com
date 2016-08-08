package org::puremvc::perl5::multicore::unittests::core::ViewTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::multicore::patterns::observer::Observer;
use org::puremvc::perl5::multicore::patterns::mediator::Mediator;
use org::puremvc::perl5::multicore::patterns::observer::Notification;

use org::puremvc::perl5::multicore::unittests::core::ViewTestMediator;
use org::puremvc::perl5::multicore::unittests::core::ViewTestMediator2;
use org::puremvc::perl5::multicore::unittests::core::ViewTestMediator3;
use org::puremvc::perl5::multicore::unittests::core::ViewTestMediator4;
use org::puremvc::perl5::multicore::unittests::core::ViewTestMediator5;
use org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6;

use constant NOTE1 => 'org::puremvc::perl5::multicore::unittests::core::ViewTest::note1';
use constant NOTE2 => 'org::puremvc::perl5::multicore::unittests::core::ViewTest::note2';
use constant NOTE3 => 'org::puremvc::perl5::multicore::unittests::core::ViewTest::note3';
use constant NOTE4 => 'org::puremvc::perl5::multicore::unittests::core::ViewTest::note4';
use constant NOTE5 => 'org::puremvc::perl5::multicore::unittests::core::ViewTest::note5';
use constant NOTE6 => 'org::puremvc::perl5::multicore::unittests::core::ViewTest::note6';

BEGIN { print "############### View tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::multicore::core::View' ); }
require_ok( 'org::puremvc::perl5::multicore::core::View' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testGetInstance();
  testMethods();
  testRegisterAndNotifyObserver();
  testRegisterAndRetrieveMediator();
  testHasMediator();
  testRegisterAndRemoveMediator();
  testOnRegisterAndOnRemove();
  testSuccessiveRegisterAndRemoveMediator();
  testRemoveMediatorAndSubsequentNotify();
  testRemoveOneOfTwoMediatorsAndSubsequentNotify();
  testMediatorReregistration();
  testModifyObserverListDuringNotification();

}

#**********************
sub testGetInstance {

  print "########## testGetInstance\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest1");
  isa_ok($view, "org::puremvc::perl5::multicore::core::View");
}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest2");
  
  can_ok($view, "initializeView");
  can_ok($view, "registerObserver");
  can_ok($view, "notifyObservers");
  can_ok($view, "removeObserver");
  can_ok($view, "registerMediator");
  can_ok($view, "retrieveMediator");
  can_ok($view, "removeMediator");
  can_ok($view, "hasMediator");
  can_ok($view, "removeView");

}

#**********************
# Create an Observer instance with a callback method viewTestMethod in this 
# object instance. Observer is registered with the View to be notified of 
# 'ViewTestNote' notifications.
# such a notification is create with a number as body.
# View is then told to notify observers for a 'ViewTestNote' notification.
#
# viewTestMethod is called and sets this instance's local variable viewTestVar
# to the value held in the body of the notification.
# We finally test that local viewTestVar variable holds the same value as the 
# original notification's body.
my $viewTestVar;
sub testRegisterAndNotifyObserver {
  
  print "########## testRegisterAndNotifyObserver\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest3");
  
  my $observer = org::puremvc::perl5::multicore::patterns::observer::Observer->new("viewTestMethod", __PACKAGE__);
  
  $view->registerObserver("ViewTestNote", $observer);
  
  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("ViewTestNote", 2);

  $view->notifyObservers($notification);
  
  is($viewTestVar, 2, 'Expecting viewTestVar == 2')  
}

sub viewTestMethod {

  my ( $class, $note ) = @_;
  
  $viewTestVar = $note->getBody();
}

#**********************
sub testRegisterAndRetrieveMediator {
  
  print "########## testRegisterAndRetrieveMediator\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest4");
  my $testmediator = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator->new(__PACKAGE__);
  
  $view->registerMediator($testmediator);
  
  my $mediator = $view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME);
  
  is($mediator, $testmediator, 'Expecting $mediator to be $testmediator');
  
}

#**********************
sub testHasMediator {
  
  print "########## testHasMediator\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest5");
  my $hasmediator = org::puremvc::perl5::multicore::patterns::mediator::Mediator->new("HasMediator", __PACKAGE__);
  
  $view->registerMediator($hasmediator);
  is($view->hasMediator("HasMediator"), 1, 'Expecting $view->hasMediator("HasMediator") == 1');
  
  $view->removeMediator("HasMediator");
  is($view->hasMediator("HasMediator"), "", 'Expecting $view->hasMediator("HasMediator") eq ""');
}

#**********************
sub testRegisterAndRemoveMediator {
  
  print "########## testRegisterAndRemoveMediator\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest6");
  my $testmediator = org::puremvc::perl5::multicore::patterns::mediator::Mediator->new("testing", __PACKAGE__);
  
  $view->registerMediator($testmediator);
  
  my $removed_mediator = $view->removeMediator("testing");
  is($removed_mediator->getMediatorName(), "testing", 'Expecting $removed_mediator->getMediatorName() to be "testing"');
  is($view->retrieveMediator("testing"), undef, 'Expecting $view->retrieveMediator("testing") to be undef');
}

#**********************
my $on_register_called = 0;
my $on_remove_called = 0;
sub testOnRegisterAndOnRemove {
  
  print "########## testOnRegisterAndOnRemove\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest7");
  my $testmediator = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator4->new(__PACKAGE__);
  
  $view->registerMediator($testmediator);
  is($on_register_called, 1, 'Expecting $on_register_called to be 1');
  
  $view->removeMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator4::NAME);
  is($on_remove_called, 1, 'Expecting $on_remove_called to be 1');
  
}

#**********************
sub on_register_called {
  
  $on_register_called = 1;
}

#**********************
sub on_remove_called {
  
  $on_remove_called = 1;
}

#**********************
sub testSuccessiveRegisterAndRemoveMediator {
  
  print "########## testSuccessiveRegisterAndRemoveMediator\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest8");
  my $testmediator = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator->new(__PACKAGE__);
  
  $view->registerMediator($testmediator);
  
  my $mediator = $view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME);
  is($mediator, $testmediator, 'Expecting $mediator to be $testmediator');
  
  $view->removeMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME);
  is($view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME), undef, 'Expecting $view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME) to be undef');
  # Testing removeMediator again to see whether it crashes
  is($view->removeMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME), undef, 'Expecting $view->removeMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME) to be undef');

  $view->registerMediator($testmediator);
  is($view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME), $testmediator, 'Expecting $view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME) to be $testmediator');

  $view->removeMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME);
  is($view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME), undef, 'Expecting $view->retrieveMediator(org::puremvc::perl5::multicore::unittests::core::ViewTestMediator::NAME) to be undef');
}

#**********************
my $lastNotification;
sub testRemoveMediatorAndSubsequentNotify {
  
  print "########## testRemoveMediatorAndSubsequentNotify\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest9");
  my $testmediator = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator2->new(__PACKAGE__);
  my $mediator_name = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator2::NAME;
  
  $view->registerMediator($testmediator);
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE1) );
  is($lastNotification, NOTE1, 'Expecting $lastNotification to be NOTE1');
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE2) );
  is($lastNotification, NOTE2, 'Expecting $lastNotification to be NOTE2');
  
  $view->removeMediator($mediator_name);
  is($view->retrieveMediator($mediator_name), undef, 'Expecting $view->retrieveMediator($mediator_name) to be undef');

  $lastNotification = "";  

  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE1) );
  isnt($lastNotification, NOTE1, 'Expecting $lastNotification NOT to be NOTE1');
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE2) );
  isnt($lastNotification, NOTE2, 'Expecting $lastNotification NOT to be NOTE2');
  
}

#**********************
sub lastNotification {
  my ( $class, $notification_name ) = @_;
    
  $lastNotification = $notification_name;
}

#**********************
sub testRemoveOneOfTwoMediatorsAndSubsequentNotify {
  
  print "########## testRemoveOneOfTwoMediatorsAndSubsequentNotify\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest10");
  my $testmediator2 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator2->new(__PACKAGE__);
  my $testmediator3 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator3->new(__PACKAGE__);
  my $mediator_name2 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator2::NAME;
  my $mediator_name3 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator3::NAME;
  
  $view->registerMediator($testmediator2);
  $view->registerMediator($testmediator3);
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE1) );
  is($lastNotification, NOTE1, 'Expecting $lastNotification to be NOTE1');
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE2) );
  is($lastNotification, NOTE2, 'Expecting $lastNotification to be NOTE2');
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE3) );
  is($lastNotification, NOTE3, 'Expecting $lastNotification to be NOTE3');

  $view->removeMediator($mediator_name2);
  is($view->retrieveMediator($mediator_name2), undef, 'Expecting $view->retrieveMediator($mediator_name2) to be undef');

  $lastNotification = "";  

  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE1) );
  isnt($lastNotification, NOTE1, 'Expecting $lastNotification NOT to be NOTE1');
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE2) );
  isnt($lastNotification, NOTE2, 'Expecting $lastNotification NOT to be NOTE2');
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE3) );
  is($lastNotification, NOTE3, 'Expecting $lastNotification to be NOTE3');
  
}

#**********************
my $counter = 0;
sub testMediatorReregistration {
  
  print "########## testMediatorReregistration\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest11");
  my $testmediator1 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator5->new(__PACKAGE__);
  my $testmediator2 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator5->new(__PACKAGE__);
  my $mediator_name = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator5::NAME;
  
  $view->registerMediator($testmediator1);
  $view->registerMediator($testmediator2);
  
  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE5) );
  is($counter, 1, 'Expecting $counter to be 1');
  
  $view->removeMediator($mediator_name);
  is($view->retrieveMediator($mediator_name), undef, 'Expecting $view->retrieveMediator($mediator_name) to be undef');

  $counter = 0;  

  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE5) );
  is($counter, 0, 'Expecting $counter to be 0');
}

#**********************
sub increment_counter {
    
  ++$counter;
}

#**********************
sub testModifyObserverListDuringNotification {
  
  print "########## testModifyObserverListDuringNotification\n";

  my $view = org::puremvc::perl5::multicore::core::View->getInstance("ViewTest12");
  my $testmediator1 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator61", __PACKAGE__);
  my $testmediator2 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator62", __PACKAGE__);
  my $testmediator3 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator63", __PACKAGE__);
  my $testmediator4 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator64", __PACKAGE__);
  my $testmediator5 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator65", __PACKAGE__);
  my $testmediator6 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator66", __PACKAGE__);
  my $testmediator7 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator67", __PACKAGE__);
  my $testmediator8 = org::puremvc::perl5::multicore::unittests::core::ViewTestMediator6->new("ViewTestMediator68", __PACKAGE__);
  
  $view->registerMediator($testmediator1);
  $view->registerMediator($testmediator2);
  $view->registerMediator($testmediator3);
  $view->registerMediator($testmediator4);
  $view->registerMediator($testmediator5);
  $view->registerMediator($testmediator6);
  $view->registerMediator($testmediator7);
  $view->registerMediator($testmediator8);
  
  $counter = 0;  

  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE6) );
  is($counter, 8, 'Expecting $counter to be 8');
  
  $counter = 0;  

  $view->notifyObservers(org::puremvc::perl5::multicore::patterns::observer::Notification->new(NOTE6) );
  is($counter, 0, 'Expecting $counter to be 0');
}

#**********************
#**********************
1;