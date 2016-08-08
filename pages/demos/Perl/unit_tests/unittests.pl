#!/usr/bin/perl

use lib '/home/content/t/r/i/trickyelf/html/puremvc/pages/demos/Perl/unit_tests/src';
use lib '/home/content/t/r/i/trickyelf/html/puremvc/pages/demos/Perl/unit_tests/tests';
use lib '/home/content/t/r/i/trickyelf/html/puremvc/pages/demos/Perl/unit_tests/Test-Simple-0.98/lib';

BEGIN {
  print "Content-type: text/plain; charset=iso-8859-1\n\n";
  print "#################### Tests begin\n";
}

use org::puremvc::perl5::unittests::core::ControllerTest;
use org::puremvc::perl5::unittests::core::ViewTest;
use org::puremvc::perl5::unittests::core::ModelTest;
use org::puremvc::perl5::unittests::patterns::command::SimpleCommandTest;
use org::puremvc::perl5::unittests::patterns::command::MacroCommandTest;
use org::puremvc::perl5::unittests::patterns::facade::FacadeTest;
use org::puremvc::perl5::unittests::patterns::mediator::MediatorTest;
use org::puremvc::perl5::unittests::patterns::observer::ObserverTest;
use org::puremvc::perl5::unittests::patterns::observer::NotificationTest;
use org::puremvc::perl5::unittests::patterns::observer::NotifierTest;
use org::puremvc::perl5::unittests::patterns::proxy::ProxyTest;

use Test::More;

print "#################### Tests done\n";

done_testing();


