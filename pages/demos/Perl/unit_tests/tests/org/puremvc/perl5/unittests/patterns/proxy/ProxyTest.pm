package org::puremvc::perl5::unittests::patterns::proxy::ProxyTest;

use strict; use warnings;

use Test::More;

BEGIN { print "############### Proxy tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::patterns::proxy::Proxy' ); }
require_ok( 'org::puremvc::perl5::patterns::proxy::Proxy' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testConstructor();
  testMethods();
  testNameAccessor();
  testDataAccessors();
}

#**********************
sub testConstructor {

  print "########## testConstructor\n";

  my $proxy = org::puremvc::perl5::patterns::proxy::Proxy->new("ProxyTestName", 5);
  
  is(defined $proxy, 1, 'Expecting $proxy to be defined');
  isa_ok($proxy, 'org::puremvc::perl5::patterns::proxy::Proxy');
  is($proxy->getProxyName(), "ProxyTestName", 'Expecting $proxy->getProxyName() to be "ProxyTestName"');
  is($proxy->getData(), 5, 'Expecting $proxy->getData() to be 5');

}

#**********************
sub testMethods {

  print "########## testMethods\n";

  my $proxy = org::puremvc::perl5::patterns::proxy::Proxy->new("ProxyTestName", 5);
  
  can_ok($proxy, "getProxyName");
  can_ok($proxy, "setData");
  can_ok($proxy, "getData");
  can_ok($proxy, "onRegister");
  can_ok($proxy, "onRemove");
}

#**********************
sub testNameAccessor {
  
  print "########## testNameAccessor\n";

  my $proxy = org::puremvc::perl5::patterns::proxy::Proxy->new("ProxyTestName", 5);
  
  is($proxy->getProxyName(), "ProxyTestName", 'Expecting $proxy->getProxyName() to be "ProxyTestName"');
}

#**********************
sub testDataAccessors {
  
  print "########## testDataAccessors\n";

  my $proxy = org::puremvc::perl5::patterns::proxy::Proxy->new('colors', ['red', 'green', 'blue']);
  $proxy->setData(['red', 'green', 'blue']);
  
  my $data = $proxy->getData();
  isnt($data, undef, 'Expecting $data NOT to be undef');
  isa_ok($data, "ARRAY");
  is(@$data, 3, 'Expecting data array to have 3 elements');
  is($data->[0], 'red', 'Expecting $data->[0] to be "red"');
  is($data->[1], 'green', 'Expecting $data->[1] to be "green"');
  is($data->[2], 'blue', 'Expecting $data->[2] to be "blue"');
}

#**********************
#**********************
1;