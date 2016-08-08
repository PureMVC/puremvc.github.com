package org::puremvc::perl5::multicore::unittests::patterns::observer::ObserverTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::multicore::patterns::observer::Notification;

BEGIN { print "############### Observer tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::multicore::patterns::observer::Observer' ); }
require_ok( 'org::puremvc::perl5::multicore::patterns::observer::Observer' );

my $testVar;

#**********************
#**********************
test();

#**********************
sub test {
  
  testConstructor();
  testMethods();
  testObserverAccessors();
  testCompareNotifyContext();
}

#**********************
sub testConstructor {

  print "########## testConstructor\n";

  my $observer = org::puremvc::perl5::multicore::patterns::observer::Observer->new("testMethod", __PACKAGE__);

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("ObserverTestNote", 5);
  
  $observer->notifyObserver($notification);

  is($testVar, 5, 'Expecting $testVar to be 5');

}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $observer = org::puremvc::perl5::multicore::patterns::observer::Observer->new("testMethod", __PACKAGE__);
  
  can_ok($observer, "setNotifyMethod");
  can_ok($observer, "setNotifyContext");
  can_ok($observer, "getNotifyMethod");
  can_ok($observer, "getNotifyContext");
  can_ok($observer, "notifyObserver");
  can_ok($observer, "compareNotifyContext");

}

#**********************
sub testObserverAccessors {

  print "########## testObserverAccessors\n";

  my $observer = org::puremvc::perl5::multicore::patterns::observer::Observer->new(undef, undef);
  $observer->setNotifyMethod("testMethod");
  $observer->setNotifyContext(__PACKAGE__);

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("ObserverTestNote", 10);
  
  $observer->notifyObserver($notification);

  is($testVar, 10, 'Expecting $testVar to be 10');

}

#**********************
sub testCompareNotifyContext {

  print "########## testCompareNotifyContext\n";

  my $context = {};
  my $observer = org::puremvc::perl5::multicore::patterns::observer::Observer->new("testMethod", $context);
  my $object = {};
  
  is($observer->compareNotifyContext($object), "", 'Expecting $observer->compareNotifyContext($object) to be ""');
  is($observer->compareNotifyContext($context), 1, 'Expecting $observer->compareNotifyContext($context) to be 1');

}

#**********************
sub testMethod {
  my ( $class, $notification ) = @_;
  
  $testVar = $notification->getBody();
}

#**********************
#**********************
1;