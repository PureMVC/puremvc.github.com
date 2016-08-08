package org::puremvc::perl5::multicore::unittests::patterns::notifier::NotifierTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::multicore::patterns::facade::Facade;

BEGIN { print "############### Notifier tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::multicore::patterns::observer::Notifier' ); }
require_ok( 'org::puremvc::perl5::multicore::patterns::observer::Notifier' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testConstructor();
  testMethods();
  test_initializeNotifier();
  test_getFacade();
}

#**********************
sub testConstructor {

  print "########## testConstructor\n";

  my $notifier = org::puremvc::perl5::multicore::patterns::observer::Notifier->new();

  is(defined $notifier, 1, 'Expecting $notifier to be defined');
  isa_ok($notifier, 'org::puremvc::perl5::multicore::patterns::observer::Notifier');

}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $notifier = org::puremvc::perl5::multicore::patterns::observer::Notifier->new();
  
  can_ok($notifier, "sendNotification");
  can_ok($notifier, "getFacade");
  can_ok($notifier, "initializeNotifier");

}

#**********************
sub test_initializeNotifier {

  print "########## test_initializeNotifier\n";

  my $notifier = org::puremvc::perl5::multicore::patterns::observer::Notifier->new();

  $notifier->initializeNotifier("key");
  is($notifier->{_multiton_key}, "key", 'Expecting $notifier->{_multiton_key} to be "key"');

}

#**********************
sub test_getFacade {

  print "########## test_getFacade\n";

  my $notifier = org::puremvc::perl5::multicore::patterns::observer::Notifier->new();
  $notifier->initializeNotifier("key");
  
  my $facade = $notifier->getFacade();
  is(defined $facade, 1, 'Expecting $facade to be defined');
  isa_ok($facade, 'org::puremvc::perl5::multicore::patterns::facade::Facade');

}

#**********************
#**********************
1;