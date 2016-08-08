package org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTest;

use strict; use warnings;

use Test::More;

use org::puremvc::perl5::multicore::patterns::observer::Notification;

use org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestVO;
use org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestCommand;

BEGIN { print "############### MacroCommand tests\n"; }

BEGIN { use_ok( 'org::puremvc::perl5::multicore::patterns::command::MacroCommand' ); }
require_ok( 'org::puremvc::perl5::multicore::patterns::command::MacroCommand' );

#**********************
#**********************
test();

#**********************
sub test {
  
  testMacroCommandExecute();
}

#**********************
#**********************
sub testMacroCommandExecute {

  print "########## testMacroCommandExecute\n";

  my $vo = org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestVO->new(5);
  my $notification = org::puremvc::perl5::multicore::patterns::observer::Notification->new("MacroCommandTestNote", $vo);
  my $command = org::puremvc::perl5::multicore::unittests::patterns::command::MacroCommandTestCommand->new();
  
  $command->execute($notification);
  
  is($vo->{result1}, 10, 'Expecting $vo->{result1} to be 10');  
  is($vo->{result2}, 25, 'Expecting $vo->{result1} to be 25');  
}

#**********************
#**********************
1;