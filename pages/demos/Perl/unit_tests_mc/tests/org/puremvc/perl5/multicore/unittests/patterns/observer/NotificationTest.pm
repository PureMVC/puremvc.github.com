package org::puremvc::perl5::multicore::unittests::patterns::observer::NotificationTest;

use strict; use warnings;

use Test::More;

BEGIN { print "############### Notification tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::multicore::patterns::observer::Notification' ); }
require_ok( 'org::puremvc::perl5::multicore::patterns::observer::Notification' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testConstructor();
  testMethods();
  testNameAccessors();
  testBodyAccessors();
  testTypeAccessors();
  testToString();
}

#**********************
sub testConstructor {

  print "########## testConstructor\n";

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("NotificationTestNote", 5, "note_type");
  
  is(defined $notification, 1, 'Expecting $notification to be defined');
  isa_ok($notification, 'org::puremvc::perl5::multicore::patterns::observer::Notification');
  is($notification->getName(), "NotificationTestNote", 'Expecting $notification->getName() to be "NotificationTestNote"');
  is($notification->getBody(), 5, 'Expecting $notification->getBody() to be 5');
  is($notification->getType(), "note_type", 'Expecting $notification->getType() to be "note_type"');

}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("NotificationTestNote", 5, "note_type");
  
  can_ok($notification, "getName");
  can_ok($notification, "setBody");
  can_ok($notification, "getBody");
  can_ok($notification, "setType");
  can_ok($notification, "getType");
  can_ok($notification, "toString");

}

#**********************
sub testNameAccessors {

  print "########## testNameAccessors\n";

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("NotificationTestNote", 5, "note_type");

  is($notification->getName(), "NotificationTestNote", 'Expecting $notification->getName() to be "NotificationTestNote"');

}

#**********************
sub testBodyAccessors {

  print "########## testBodyAccessors\n";

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new();

  $notification->setBody(5);
  is($notification->getBody(), 5, 'Expecting $notification->getBody() to be 5');

}

#**********************
sub testTypeAccessors {

  print "########## testTypeAccessors\n";

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new();

  $notification->setType("note_type");
  is($notification->getType(), "note_type", 'Expecting $notification->getType() to be "note_type"');

}

#**********************
sub testToString {

  print "########## testToString\n";

  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("NotificationTestNote", [1,2,3], "note_type");
  my $dump = '$VAR1 = bless( {\'_name\' => \'NotificationTestNote\',\'_type\' => \'note_type\',\'_body\' => [1,2,3]}, \'org::puremvc::perl5::multicore::patterns::observer::Notification\' );';

  my $string = $notification->toString();
  is($string, $dump, 'Expecting $string to be $dump');

}

#**********************
#**********************
1;