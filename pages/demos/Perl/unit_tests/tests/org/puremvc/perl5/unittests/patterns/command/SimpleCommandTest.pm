package org::puremvc::perl5::unittests::patterns::command::SimpleCommandTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::patterns::observer::Notification;

use org::puremvc::perl5::unittests::patterns::command::SimpleCommandTestVO;
use org::puremvc::perl5::unittests::patterns::command::SimpleCommandTestCommand;

BEGIN { print "############### SimpleCommand tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::patterns::command::SimpleCommand' ); }
require_ok( 'org::puremvc::perl5::patterns::command::SimpleCommand' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testSimpleCommandExecute();
}

#**********************
#**********************
sub testSimpleCommandExecute {

  print "########## testSimpleCommandExecute\n";

  my $vo = org::puremvc::perl5::unittests::patterns::command::SimpleCommandTestVO->new(5);
  my $notification = org::puremvc::perl5::patterns::observer::Notification->new("SimpleCommandTestNote", $vo);
  my $command = org::puremvc::perl5::unittests::patterns::command::SimpleCommandTestCommand->new();
  
  $command->execute($notification);
  
  is($vo->{result}, 10, 'Expecting $vo->{result} to be 10');  
}

#**********************
#**********************
1;