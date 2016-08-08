package org::puremvc::perl5::unittests::patterns::notifier::NotifierTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::patterns::facade::Facade;

BEGIN { print "############### Notifier tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::patterns::observer::Notifier' ); }
require_ok( 'org::puremvc::perl5::patterns::observer::Notifier' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testConstructor();
  testMethods();
}

#**********************
sub testConstructor {

  print "########## testConstructor\n";

  my $notifier = org::puremvc::perl5::patterns::observer::Notifier->new();

  is(defined $notifier, 1, 'Expecting $notifier to be defined');
  isa_ok($notifier, 'org::puremvc::perl5::patterns::observer::Notifier');
  my $facade = $notifier->{_facade};
  is(defined $facade, 1, 'Expecting $facade to be defined');
  isa_ok($facade, 'org::puremvc::perl5::patterns::facade::Facade');

}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $notifier = org::puremvc::perl5::patterns::observer::Notifier->new();
  
  can_ok($notifier, "sendNotification");

}

#**********************
#**********************
1;