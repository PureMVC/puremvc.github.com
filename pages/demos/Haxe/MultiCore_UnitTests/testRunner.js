$estr = function() { return js.Boot.__string_rec(this,''); }
org = {}
org.puremvc = {}
org.puremvc.haxe = {}
org.puremvc.haxe.multicore = {}
org.puremvc.haxe.multicore.interfaces = {}
org.puremvc.haxe.multicore.interfaces.IObserver = function() { }
org.puremvc.haxe.multicore.interfaces.IObserver.__name__ = ["org","puremvc","haxe","multicore","interfaces","IObserver"];
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.compareNotifyContext = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.notifyObserver = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.setNotifyContext = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.setNotifyMethod = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IObserver;
org.puremvc.haxe.multicore.patterns = {}
org.puremvc.haxe.multicore.patterns.observer = {}
org.puremvc.haxe.multicore.patterns.observer.Observer = function(notifyMethod,notifyContext) { if( notifyMethod === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Observer::new");
	var $spos = $s.length;
	this.setNotifyMethod(notifyMethod);
	this.setNotifyContext(notifyContext);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.observer.Observer.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","Observer"];
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.compareNotifyContext = function(object) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Observer::compareNotifyContext");
	var $spos = $s.length;
	{
		var $tmp = object == this.context;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.context = null;
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.getNotifyContext = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Observer::getNotifyContext");
	var $spos = $s.length;
	{
		var $tmp = this.context;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.getNotifyMethod = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Observer::getNotifyMethod");
	var $spos = $s.length;
	{
		var $tmp = $closure(this,"notify");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.notify = null;
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.notifyObserver = function(notification) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Observer::notifyObserver");
	var $spos = $s.length;
	(this.getNotifyMethod())(notification);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.setNotifyContext = function(notifyContext) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Observer::setNotifyContext");
	var $spos = $s.length;
	this.context = notifyContext;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.setNotifyMethod = function(notifyMethod) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Observer::setNotifyMethod");
	var $spos = $s.length;
	this.notify = notifyMethod;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.Observer;
org.puremvc.haxe.multicore.patterns.observer.Observer.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IObserver];
PureMVCMultiCoreTestRunner = function() { }
PureMVCMultiCoreTestRunner.__name__ = ["PureMVCMultiCoreTestRunner"];
PureMVCMultiCoreTestRunner.main = function() {
	$s.push("PureMVCMultiCoreTestRunner::main");
	var $spos = $s.length;
	var tr = new haxe.unit.TestRunner();
	tr.add(new org.puremvc.haxe.multicore.patterns.observer.NotificationTest());
	tr.add(new org.puremvc.haxe.multicore.patterns.observer.ObserverTest());
	tr.add(new org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest());
	tr.add(new org.puremvc.haxe.multicore.patterns.command.MacroCommandTest());
	tr.add(new org.puremvc.haxe.multicore.patterns.proxy.ProxyTest());
	tr.add(new org.puremvc.haxe.multicore.core.ModelTest());
	tr.add(new org.puremvc.haxe.multicore.patterns.mediator.MediatorTest());
	tr.add(new org.puremvc.haxe.multicore.core.ViewTest());
	tr.add(new org.puremvc.haxe.multicore.core.ControllerTest());
	tr.add(new org.puremvc.haxe.multicore.patterns.facade.FacadeTest());
	tr.run();
	$s.pop();
}
PureMVCMultiCoreTestRunner.prototype.__class__ = PureMVCMultiCoreTestRunner;
org.puremvc.haxe.multicore.interfaces.INotifier = function() { }
org.puremvc.haxe.multicore.interfaces.INotifier.__name__ = ["org","puremvc","haxe","multicore","interfaces","INotifier"];
org.puremvc.haxe.multicore.interfaces.INotifier.prototype.initializeNotifier = null;
org.puremvc.haxe.multicore.interfaces.INotifier.prototype.sendNotification = null;
org.puremvc.haxe.multicore.interfaces.INotifier.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.INotifier;
org.puremvc.haxe.multicore.patterns.observer.Notifier = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notifier::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.observer.Notifier.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","Notifier"];
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.facade = null;
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.getFacade = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notifier::getFacade");
	var $spos = $s.length;
	if(this.multitonKey == null) throw "multitonKey for this Notifier not yet initialized!";
	{
		var $tmp = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance(this.multitonKey);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.initializeNotifier = function(key) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notifier::initializeNotifier");
	var $spos = $s.length;
	this.multitonKey = key;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.multitonKey = null;
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.sendNotification = function(notificationName,body,type) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notifier::sendNotification");
	var $spos = $s.length;
	this.getFacade().sendNotification(notificationName,body,type);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
org.puremvc.haxe.multicore.patterns.observer.Notifier.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
org.puremvc.haxe.multicore.interfaces.ICommand = function() { }
org.puremvc.haxe.multicore.interfaces.ICommand.__name__ = ["org","puremvc","haxe","multicore","interfaces","ICommand"];
org.puremvc.haxe.multicore.interfaces.ICommand.prototype.execute = null;
org.puremvc.haxe.multicore.interfaces.ICommand.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.ICommand;
org.puremvc.haxe.multicore.interfaces.ICommand.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
org.puremvc.haxe.multicore.patterns.command = {}
org.puremvc.haxe.multicore.patterns.command.SimpleCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.SimpleCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.__name__ = ["org","puremvc","haxe","multicore","patterns","command","SimpleCommand"];
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype.execute = function(notification) {
	$s.push("org.puremvc.haxe.multicore.patterns.command.SimpleCommand::execute");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.ICommand];
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand.__name__ = ["org","puremvc","haxe","multicore","patterns","command","SimpleCommandTestCommand"];
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand.__super__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand;
haxe = {}
haxe.Public = function() { }
haxe.Public.__name__ = ["haxe","Public"];
haxe.Public.prototype.__class__ = haxe.Public;
haxe.unit = {}
haxe.unit.TestCase = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestCase::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
haxe.unit.TestCase.__name__ = ["haxe","unit","TestCase"];
haxe.unit.TestCase.prototype.assertEquals = function(expected,actual,c) {
	$s.push("haxe.unit.TestCase::assertEquals");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(actual != expected) {
		this.currentTest.success = false;
		this.currentTest.error = "expected '" + expected + "' but was '" + actual + "'";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.assertFalse = function(b,c) {
	$s.push("haxe.unit.TestCase::assertFalse");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(b == true) {
		this.currentTest.success = false;
		this.currentTest.error = "expected false but was true";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.assertTrue = function(b,c) {
	$s.push("haxe.unit.TestCase::assertTrue");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(b == false) {
		this.currentTest.success = false;
		this.currentTest.error = "expected true but was false";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.currentTest = null;
haxe.unit.TestCase.prototype.print = function(v) {
	$s.push("haxe.unit.TestCase::print");
	var $spos = $s.length;
	haxe.unit.TestRunner.print(v);
	$s.pop();
}
haxe.unit.TestCase.prototype.setup = function() {
	$s.push("haxe.unit.TestCase::setup");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.unit.TestCase.prototype.tearDown = function() {
	$s.push("haxe.unit.TestCase::tearDown");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.unit.TestCase.prototype.__class__ = haxe.unit.TestCase;
haxe.unit.TestCase.__interfaces__ = [haxe.Public];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTest.__name__ = ["org","puremvc","haxe","multicore","patterns","command","MacroCommandTest"];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.patterns.command.MacroCommandTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTest.prototype.testMacroCommandExecute = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTest::testMacroCommandExecute");
	var $spos = $s.length;
	var vo = new org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO(5);
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("MacroCommandTest",vo);
	var command = new org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand();
	command.execute(note);
	this.assertEquals(vo.result1,10,{ fileName : "MacroCommandTest.hx", lineNumber : 65, className : "org.puremvc.haxe.multicore.patterns.command.MacroCommandTest", methodName : "testMacroCommandExecute"});
	this.assertEquals(vo.result2,25,{ fileName : "MacroCommandTest.hx", lineNumber : 66, className : "org.puremvc.haxe.multicore.patterns.command.MacroCommandTest", methodName : "testMacroCommandExecute"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTest.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.MacroCommandTest;
List = function(p) { if( p === $_ ) return; {
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.length = 0;
	$s.pop();
}
List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	{
		$s.pop();
		return l2;
	}
	$s.pop();
}
List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null?null:this.h[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	{
		var $tmp = { h : this.h, hasNext : function() {
			$s.push("List::iterator@193");
			var $spos = $s.length;
			{
				var $tmp = (this.h != null);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("List::iterator@196");
			var $spos = $s.length;
			if(this.h == null) {
				$s.pop();
				return null;
			}
			var x = this.h[0];
			this.h = this.h[1];
			{
				$s.pop();
				return x;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b += sep;
		s.b += l[0];
		l = l[1];
	}
	{
		var $tmp = s.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	{
		var $tmp = (this.q == null?null:this.q[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.length = null;
List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		$s.pop();
		return null;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	{
		$s.pop();
		return x;
	}
	$s.pop();
}
List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			{
				$s.pop();
				return true;
			}
		}
		prev = l;
		l = l[1];
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b += "{";
	while(l != null) {
		if(first) first = false;
		else s.b += ", ";
		s.b += l[0];
		l = l[1];
	}
	s.b += "}";
	{
		var $tmp = s.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.__class__ = List;
org.puremvc.haxe.multicore.patterns.proxy = {}
org.puremvc.haxe.multicore.patterns.proxy.ProxyTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.ProxyTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.proxy.ProxyTest.__name__ = ["org","puremvc","haxe","multicore","patterns","proxy","ProxyTest"];
org.puremvc.haxe.multicore.patterns.proxy.ProxyTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.patterns.proxy.ProxyTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.patterns.proxy.ProxyTest.prototype.testConstructor = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.ProxyTest::testConstructor");
	var $spos = $s.length;
	var proxy = new org.puremvc.haxe.multicore.patterns.proxy.Proxy("colors",["red","green","blue"]);
	var data = proxy.getData();
	this.assertTrue(proxy != null,{ fileName : "ProxyTest.hx", lineNumber : 55, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(proxy.getProxyName(),"colors",{ fileName : "ProxyTest.hx", lineNumber : 56, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data.length,3,{ fileName : "ProxyTest.hx", lineNumber : 57, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data[0],"red",{ fileName : "ProxyTest.hx", lineNumber : 58, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data[1],"green",{ fileName : "ProxyTest.hx", lineNumber : 59, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data[2],"blue",{ fileName : "ProxyTest.hx", lineNumber : 60, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.ProxyTest.prototype.testDataAccessors = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.ProxyTest::testDataAccessors");
	var $spos = $s.length;
	var proxy = new org.puremvc.haxe.multicore.patterns.proxy.Proxy("colors");
	proxy.setData(["red","green","blue"]);
	var data = proxy.getData();
	this.assertEquals(data.length,3,{ fileName : "ProxyTest.hx", lineNumber : 39, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	this.assertEquals(data[0],"red",{ fileName : "ProxyTest.hx", lineNumber : 40, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	this.assertEquals(data[1],"green",{ fileName : "ProxyTest.hx", lineNumber : 41, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	this.assertEquals(data[2],"blue",{ fileName : "ProxyTest.hx", lineNumber : 42, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.ProxyTest.prototype.testNameAccessor = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.ProxyTest::testNameAccessor");
	var $spos = $s.length;
	var proxy = new org.puremvc.haxe.multicore.patterns.proxy.Proxy("TestProxy");
	this.assertEquals(proxy.getProxyName(),"TestProxy",{ fileName : "ProxyTest.hx", lineNumber : 25, className : "org.puremvc.haxe.multicore.patterns.proxy.ProxyTest", methodName : "testNameAccessor"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.ProxyTest.prototype.__class__ = org.puremvc.haxe.multicore.patterns.proxy.ProxyTest;
org.puremvc.haxe.multicore.interfaces.IFacade = function() { }
org.puremvc.haxe.multicore.interfaces.IFacade.__name__ = ["org","puremvc","haxe","multicore","interfaces","IFacade"];
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.hasCommand = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.hasMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.hasProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.notifyObservers = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.registerCommand = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.registerMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.registerProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeCommand = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeCore = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.retrieveMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.retrieveProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.sendNotification = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IFacade;
org.puremvc.haxe.multicore.interfaces.IFacade.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
org.puremvc.haxe.multicore.interfaces.IController = function() { }
org.puremvc.haxe.multicore.interfaces.IController.__name__ = ["org","puremvc","haxe","multicore","interfaces","IController"];
org.puremvc.haxe.multicore.interfaces.IController.prototype.executeCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.hasCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.registerCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.removeCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.removeController = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IController;
org.puremvc.haxe.multicore.core = {}
org.puremvc.haxe.multicore.core.Controller = function(key) { if( key === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.Controller::new");
	var $spos = $s.length;
	this.multitonKey = key;
	org.puremvc.haxe.multicore.core.Controller.instanceMap.set(this.multitonKey,this);
	this.commandMap = new Hash();
	this.initializeController();
	$s.pop();
}}
org.puremvc.haxe.multicore.core.Controller.__name__ = ["org","puremvc","haxe","multicore","core","Controller"];
org.puremvc.haxe.multicore.core.Controller.getInstance = function(key) {
	$s.push("org.puremvc.haxe.multicore.core.Controller::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.multicore.core.Controller.instanceMap == null) org.puremvc.haxe.multicore.core.Controller.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.core.Controller.instanceMap.exists(key)) org.puremvc.haxe.multicore.core.Controller.instanceMap.set(key,new org.puremvc.haxe.multicore.core.Controller(key));
	{
		var $tmp = org.puremvc.haxe.multicore.core.Controller.instanceMap.get(key);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.Controller.instanceMap = null;
org.puremvc.haxe.multicore.core.Controller.prototype.commandMap = null;
org.puremvc.haxe.multicore.core.Controller.prototype.executeCommand = function(note) {
	$s.push("org.puremvc.haxe.multicore.core.Controller::executeCommand");
	var $spos = $s.length;
	var commandClassRef = this.commandMap.get(note.getName());
	if(commandClassRef == null) {
		$s.pop();
		return;
	}
	var commandInstance = Type.createInstance(commandClassRef,[]);
	commandInstance.initializeNotifier(this.multitonKey);
	commandInstance.execute(note);
	$s.pop();
}
org.puremvc.haxe.multicore.core.Controller.prototype.hasCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.multicore.core.Controller::hasCommand");
	var $spos = $s.length;
	{
		var $tmp = this.commandMap.exists(notificationName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.Controller.prototype.initializeController = function() {
	$s.push("org.puremvc.haxe.multicore.core.Controller::initializeController");
	var $spos = $s.length;
	this.view = org.puremvc.haxe.multicore.core.View.getInstance(this.multitonKey);
	$s.pop();
}
org.puremvc.haxe.multicore.core.Controller.prototype.multitonKey = null;
org.puremvc.haxe.multicore.core.Controller.prototype.registerCommand = function(notificationName,commandClassRef) {
	$s.push("org.puremvc.haxe.multicore.core.Controller::registerCommand");
	var $spos = $s.length;
	if(!this.commandMap.exists(notificationName)) this.view.registerObserver(notificationName,new org.puremvc.haxe.multicore.patterns.observer.Observer($closure(this,"executeCommand"),this));
	this.commandMap.set(notificationName,commandClassRef);
	$s.pop();
}
org.puremvc.haxe.multicore.core.Controller.prototype.removeCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.multicore.core.Controller::removeCommand");
	var $spos = $s.length;
	if(this.hasCommand(notificationName)) {
		this.view.removeObserver(notificationName,this);
		this.commandMap.remove(notificationName);
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.Controller.prototype.removeController = function(key) {
	$s.push("org.puremvc.haxe.multicore.core.Controller::removeController");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.core.Controller.instanceMap.remove(key);
	$s.pop();
}
org.puremvc.haxe.multicore.core.Controller.prototype.view = null;
org.puremvc.haxe.multicore.core.Controller.prototype.__class__ = org.puremvc.haxe.multicore.core.Controller;
org.puremvc.haxe.multicore.core.Controller.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IController];
org.puremvc.haxe.multicore.interfaces.IProxy = function() { }
org.puremvc.haxe.multicore.interfaces.IProxy.__name__ = ["org","puremvc","haxe","multicore","interfaces","IProxy"];
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.getData = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.getProxyName = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.onRegister = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.onRemove = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.setData = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IProxy;
org.puremvc.haxe.multicore.interfaces.IProxy.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
org.puremvc.haxe.multicore.patterns.proxy.Proxy = function(proxyName,data) { if( proxyName === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.Proxy::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
	this.proxyName = (proxyName != null?proxyName:org.puremvc.haxe.multicore.patterns.proxy.Proxy.NAME);
	if(data != null) this.setData(data);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.__name__ = ["org","puremvc","haxe","multicore","patterns","proxy","Proxy"];
org.puremvc.haxe.multicore.patterns.proxy.Proxy.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.data = null;
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.getData = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.Proxy::getData");
	var $spos = $s.length;
	{
		var $tmp = this.data;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.getProxyName = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.Proxy::getProxyName");
	var $spos = $s.length;
	{
		var $tmp = this.proxyName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.Proxy::onRegister");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.Proxy::onRemove");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.proxyName = null;
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.setData = function(data) {
	$s.push("org.puremvc.haxe.multicore.patterns.proxy.Proxy::setData");
	var $spos = $s.length;
	this.data = data;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.__class__ = org.puremvc.haxe.multicore.patterns.proxy.Proxy;
org.puremvc.haxe.multicore.patterns.proxy.Proxy.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IProxy];
org.puremvc.haxe.multicore.core.ModelTestProxy = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ModelTestProxy::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.proxy.Proxy.apply(this,[org.puremvc.haxe.multicore.core.ModelTestProxy.NAME]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ModelTestProxy.__name__ = ["org","puremvc","haxe","multicore","core","ModelTestProxy"];
org.puremvc.haxe.multicore.core.ModelTestProxy.__super__ = org.puremvc.haxe.multicore.patterns.proxy.Proxy;
for(var k in org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype ) org.puremvc.haxe.multicore.core.ModelTestProxy.prototype[k] = org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype[k];
org.puremvc.haxe.multicore.core.ModelTestProxy.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.multicore.core.ModelTestProxy::onRegister");
	var $spos = $s.length;
	this.setData(org.puremvc.haxe.multicore.core.ModelTestProxy.ON_REGISTER_CALLED);
	$s.pop();
}
org.puremvc.haxe.multicore.core.ModelTestProxy.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.multicore.core.ModelTestProxy::onRemove");
	var $spos = $s.length;
	this.setData(org.puremvc.haxe.multicore.core.ModelTestProxy.ON_REMOVE_CALLED);
	$s.pop();
}
org.puremvc.haxe.multicore.core.ModelTestProxy.prototype.__class__ = org.puremvc.haxe.multicore.core.ModelTestProxy;
haxe.unit.TestStatus = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestStatus::new");
	var $spos = $s.length;
	this.done = false;
	this.success = false;
	$s.pop();
}}
haxe.unit.TestStatus.__name__ = ["haxe","unit","TestStatus"];
haxe.unit.TestStatus.prototype.backtrace = null;
haxe.unit.TestStatus.prototype.classname = null;
haxe.unit.TestStatus.prototype.done = null;
haxe.unit.TestStatus.prototype.error = null;
haxe.unit.TestStatus.prototype.method = null;
haxe.unit.TestStatus.prototype.posInfos = null;
haxe.unit.TestStatus.prototype.success = null;
haxe.unit.TestStatus.prototype.__class__ = haxe.unit.TestStatus;
haxe.unit.TestRunner = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestRunner::new");
	var $spos = $s.length;
	this.result = new haxe.unit.TestResult();
	this.cases = new List();
	$s.pop();
}}
haxe.unit.TestRunner.__name__ = ["haxe","unit","TestRunner"];
haxe.unit.TestRunner.print = function(v) {
	$s.push("haxe.unit.TestRunner::print");
	var $spos = $s.length;
	var msg = StringTools.htmlEscape(js.Boot.__string_rec(v,"")).split("\n").join("<br/>");
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("haxe:trace element not found");
	else d.innerHTML += msg;
	$s.pop();
}
haxe.unit.TestRunner.customTrace = function(v,p) {
	$s.push("haxe.unit.TestRunner::customTrace");
	var $spos = $s.length;
	haxe.unit.TestRunner.print(p.fileName + ":" + p.lineNumber + ": " + Std.string(v) + "\n");
	$s.pop();
}
haxe.unit.TestRunner.prototype.add = function(c) {
	$s.push("haxe.unit.TestRunner::add");
	var $spos = $s.length;
	this.cases.add(c);
	$s.pop();
}
haxe.unit.TestRunner.prototype.cases = null;
haxe.unit.TestRunner.prototype.result = null;
haxe.unit.TestRunner.prototype.run = function() {
	$s.push("haxe.unit.TestRunner::run");
	var $spos = $s.length;
	this.result = new haxe.unit.TestResult();
	{ var $it0 = this.cases.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		this.runCase(c);
	}
	}}
	haxe.unit.TestRunner.print(this.result.toString());
	{
		var $tmp = this.result.success;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.unit.TestRunner.prototype.runCase = function(t) {
	$s.push("haxe.unit.TestRunner::runCase");
	var $spos = $s.length;
	var old = $closure(haxe.Log,"trace");
	haxe.Log.trace = $closure(haxe.unit.TestRunner,"customTrace");
	var cl = Type.getClass(t);
	var fields = Type.getInstanceFields(cl);
	haxe.unit.TestRunner.print("Class: " + Type.getClassName(cl) + " ");
	{
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var fname = f;
			var field = Reflect.field(t,f);
			if(StringTools.startsWith(fname,"test") && Reflect.isFunction(field)) {
				t.currentTest = new haxe.unit.TestStatus();
				t.currentTest.classname = Type.getClassName(cl);
				t.currentTest.method = fname;
				t.setup();
				try {
					field.apply(t,new Array());
					if(t.currentTest.done) {
						t.currentTest.success = true;
						haxe.unit.TestRunner.print(".");
					}
					else {
						t.currentTest.success = false;
						t.currentTest.error = "(warning) no assert";
						haxe.unit.TestRunner.print("W");
					}
				}
				catch( $e1 ) {
					if( js.Boot.__instanceof($e1,haxe.unit.TestStatus) ) {
						var e = $e1;
						{
							$e = [];
							while($s.length >= $spos) $e.unshift($s.pop());
							$s.push($e[0]);
							haxe.unit.TestRunner.print("F");
							t.currentTest.backtrace = haxe.Stack.toString(haxe.Stack.exceptionStack());
						}
					} else {
						var e = $e1;
						{
							$e = [];
							while($s.length >= $spos) $e.unshift($s.pop());
							$s.push($e[0]);
							haxe.unit.TestRunner.print("E");
							if(e.message != null) {
								t.currentTest.error = "exception thrown : " + e + " [" + e.message + "]";
							}
							else {
								t.currentTest.error = "exception thrown : " + e;
							}
							t.currentTest.backtrace = haxe.Stack.toString(haxe.Stack.exceptionStack());
						}
					}
				}
				this.result.add(t.currentTest);
				t.tearDown();
			}
		}
	}
	haxe.unit.TestRunner.print("\n");
	haxe.Log.trace = old;
	$s.pop();
}
haxe.unit.TestRunner.prototype.__class__ = haxe.unit.TestRunner;
org.puremvc.haxe.multicore.interfaces.IMediator = function() { }
org.puremvc.haxe.multicore.interfaces.IMediator.__name__ = ["org","puremvc","haxe","multicore","interfaces","IMediator"];
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.getMediatorName = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.getViewComponent = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.handleNotification = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.listNotificationInterests = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.onRegister = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.onRemove = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.setViewComponent = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IMediator;
org.puremvc.haxe.multicore.interfaces.IMediator.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
org.puremvc.haxe.multicore.patterns.mediator = {}
org.puremvc.haxe.multicore.patterns.mediator.Mediator = function(mediatorName,viewComponent) { if( mediatorName === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
	this.mediatorName = (mediatorName != null?mediatorName:org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME);
	this.viewComponent = viewComponent;
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.__name__ = ["org","puremvc","haxe","multicore","patterns","mediator","Mediator"];
org.puremvc.haxe.multicore.patterns.mediator.Mediator.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.getMediatorName = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::getMediatorName");
	var $spos = $s.length;
	{
		var $tmp = this.mediatorName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.getViewComponent = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::getViewComponent");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.handleNotification = function(notification) {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::handleNotification");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.mediatorName = null;
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::onRegister");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::onRemove");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.setViewComponent = function(viewComponent) {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.Mediator::setViewComponent");
	var $spos = $s.length;
	this.viewComponent = viewComponent;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.viewComponent = null;
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.__class__ = org.puremvc.haxe.multicore.patterns.mediator.Mediator;
org.puremvc.haxe.multicore.patterns.mediator.Mediator.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IMediator];
org.puremvc.haxe.multicore.core.ViewTestMediator2 = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator2::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.mediator.Mediator.apply(this,[org.puremvc.haxe.multicore.core.ViewTestMediator2.NAME,view]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ViewTestMediator2.__name__ = ["org","puremvc","haxe","multicore","core","ViewTestMediator2"];
org.puremvc.haxe.multicore.core.ViewTestMediator2.__super__ = org.puremvc.haxe.multicore.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.multicore.core.ViewTestMediator2.prototype[k] = org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.multicore.core.ViewTestMediator2.prototype.getViewTest = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator2::getViewTest");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator2.prototype.handleNotification = function(notification) {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator2::handleNotification");
	var $spos = $s.length;
	this.getViewTest().lastNotification = notification.getName();
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator2.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator2::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = [org.puremvc.haxe.multicore.core.ViewTest.NOTE1,org.puremvc.haxe.multicore.core.ViewTest.NOTE2];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator2.prototype.__class__ = org.puremvc.haxe.multicore.core.ViewTestMediator2;
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO::new");
	var $spos = $s.length;
	this.input = input;
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO.__name__ = ["org","puremvc","haxe","multicore","patterns","command","MacroCommandTestVO"];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO.prototype.input = null;
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO.prototype.result1 = null;
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO.prototype.result2 = null;
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO;
org.puremvc.haxe.multicore.interfaces.IModel = function() { }
org.puremvc.haxe.multicore.interfaces.IModel.__name__ = ["org","puremvc","haxe","multicore","interfaces","IModel"];
org.puremvc.haxe.multicore.interfaces.IModel.prototype.hasProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.registerProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.removeModel = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.removeProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.retrieveProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IModel;
org.puremvc.haxe.multicore.core.Model = function(key) { if( key === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.Model::new");
	var $spos = $s.length;
	this.multitonKey = key;
	org.puremvc.haxe.multicore.core.Model.instanceMap.set(this.multitonKey,this);
	this.proxyMap = new Hash();
	this.initializeModel();
	$s.pop();
}}
org.puremvc.haxe.multicore.core.Model.__name__ = ["org","puremvc","haxe","multicore","core","Model"];
org.puremvc.haxe.multicore.core.Model.getInstance = function(key) {
	$s.push("org.puremvc.haxe.multicore.core.Model::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.multicore.core.Model.instanceMap == null) org.puremvc.haxe.multicore.core.Model.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.core.Model.instanceMap.exists(key)) org.puremvc.haxe.multicore.core.Model.instanceMap.set(key,new org.puremvc.haxe.multicore.core.Model(key));
	{
		var $tmp = org.puremvc.haxe.multicore.core.Model.instanceMap.get(key);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.Model.instanceMap = null;
org.puremvc.haxe.multicore.core.Model.prototype.hasProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.multicore.core.Model::hasProxy");
	var $spos = $s.length;
	{
		var $tmp = this.proxyMap.exists(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.Model.prototype.initializeModel = function() {
	$s.push("org.puremvc.haxe.multicore.core.Model::initializeModel");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.core.Model.prototype.multitonKey = null;
org.puremvc.haxe.multicore.core.Model.prototype.proxyMap = null;
org.puremvc.haxe.multicore.core.Model.prototype.registerProxy = function(proxy) {
	$s.push("org.puremvc.haxe.multicore.core.Model::registerProxy");
	var $spos = $s.length;
	proxy.initializeNotifier(this.multitonKey);
	this.proxyMap.set(proxy.getProxyName(),proxy);
	proxy.onRegister();
	$s.pop();
}
org.puremvc.haxe.multicore.core.Model.prototype.removeModel = function(key) {
	$s.push("org.puremvc.haxe.multicore.core.Model::removeModel");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.core.Model.instanceMap.remove(key);
	$s.pop();
}
org.puremvc.haxe.multicore.core.Model.prototype.removeProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.multicore.core.Model::removeProxy");
	var $spos = $s.length;
	var proxy = this.proxyMap.get(proxyName);
	if(proxy != null) {
		this.proxyMap.remove(proxyName);
		proxy.onRemove();
	}
	{
		$s.pop();
		return proxy;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.Model.prototype.retrieveProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.multicore.core.Model::retrieveProxy");
	var $spos = $s.length;
	{
		var $tmp = this.proxyMap.get(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.Model.prototype.__class__ = org.puremvc.haxe.multicore.core.Model;
org.puremvc.haxe.multicore.core.Model.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IModel];
org.puremvc.haxe.multicore.patterns.mediator.MediatorTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.MediatorTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.mediator.MediatorTest.__name__ = ["org","puremvc","haxe","multicore","patterns","mediator","MediatorTest"];
org.puremvc.haxe.multicore.patterns.mediator.MediatorTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.patterns.mediator.MediatorTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.patterns.mediator.MediatorTest.prototype.testNameAccessor = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.MediatorTest::testNameAccessor");
	var $spos = $s.length;
	var mediator = new org.puremvc.haxe.multicore.patterns.mediator.Mediator();
	this.assertEquals(mediator.getMediatorName(),"Mediator",{ fileName : "MediatorTest.hx", lineNumber : 22, className : "org.puremvc.haxe.multicore.patterns.mediator.MediatorTest", methodName : "testNameAccessor"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.MediatorTest.prototype.testViewAccessor = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.mediator.MediatorTest::testViewAccessor");
	var $spos = $s.length;
	var view = new String("test string");
	var mediator = new org.puremvc.haxe.multicore.patterns.mediator.Mediator(org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME,view);
	this.assertTrue(mediator.getViewComponent() != null,{ fileName : "MediatorTest.hx", lineNumber : 37, className : "org.puremvc.haxe.multicore.patterns.mediator.MediatorTest", methodName : "testViewAccessor"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.mediator.MediatorTest.prototype.__class__ = org.puremvc.haxe.multicore.patterns.mediator.MediatorTest;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = Reflect.fields(o);
	{ var $it2 = arr.iterator();
	while( $it2.hasNext() ) { var t = $it2.next();
	if(t == field) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	}
	catch( $e3 ) {
		{
			var e = $e3;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	{
		var $tmp = func.apply(o,args);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
	var a = new Array();
	if(o.hasOwnProperty) {
		
					for(var i in o)
						if( o.hasOwnProperty(i) )
							a.push(i);
				;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e4 ) {
			{
				var e = $e4;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
					for(var i in o)
						if( i != "__proto__" )
							a.push(i);
				;
		if(t != null) o.__proto__ = t;
	}
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	{
		var $tmp = typeof(f) == "function" && f.__name__ == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = ((a == b)?0:((((a) > (b))?1:-1)));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	{
		var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	{
		var $tmp = (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	{
		$s.pop();
		return o2;
	}
	$s.pop();
}
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	{
		var $tmp = function() {
			$s.push("Reflect::makeVarArgs@409");
			var $spos = $s.length;
			var a = new Array();
			{
				var _g1 = 0, _g = arguments.length;
				while(_g1 < _g) {
					var i = _g1++;
					a.push(arguments[i]);
				}
			}
			{
				var $tmp = f(a);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
org.puremvc.haxe.multicore.patterns.facade = {}
org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO::new");
	var $spos = $s.length;
	this.input = input;
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO.__name__ = ["org","puremvc","haxe","multicore","patterns","facade","FacadeTestVO"];
org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO.prototype.input = null;
org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO.prototype.result = null;
org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO.prototype.__class__ = org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO;
org.puremvc.haxe.multicore.interfaces.INotification = function() { }
org.puremvc.haxe.multicore.interfaces.INotification.__name__ = ["org","puremvc","haxe","multicore","interfaces","INotification"];
org.puremvc.haxe.multicore.interfaces.INotification.prototype.getBody = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.getName = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.getType = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.setBody = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.setType = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.toString = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.INotification;
org.puremvc.haxe.multicore.patterns.observer.Notification = function(name,body,type) { if( name === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notification::new");
	var $spos = $s.length;
	this.name = name;
	this.body = body;
	this.type = type;
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.observer.Notification.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","Notification"];
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.body = null;
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.getBody = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notification::getBody");
	var $spos = $s.length;
	{
		var $tmp = this.body;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.getName = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notification::getName");
	var $spos = $s.length;
	{
		var $tmp = this.name;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.getType = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notification::getType");
	var $spos = $s.length;
	{
		var $tmp = this.type;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.name = null;
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.setBody = function(body) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notification::setBody");
	var $spos = $s.length;
	this.body = body;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.setType = function(type) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notification::setType");
	var $spos = $s.length;
	this.type = type;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.toString = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.Notification::toString");
	var $spos = $s.length;
	var msg = "Notification Name: " + this.getName();
	msg += "\nBody:" + (this.body == null?"null":this.body.toString());
	msg += "\nType:" + (this.type == null?"null":this.type);
	{
		$s.pop();
		return msg;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.type = null;
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.Notification;
org.puremvc.haxe.multicore.patterns.observer.Notification.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotification];
org.puremvc.haxe.multicore.core.ViewTestNote = function(name,body) { if( name === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestNote::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.observer.Notification.apply(this,[org.puremvc.haxe.multicore.core.ViewTestNote.NAME,body]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ViewTestNote.__name__ = ["org","puremvc","haxe","multicore","core","ViewTestNote"];
org.puremvc.haxe.multicore.core.ViewTestNote.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notification;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notification.prototype ) org.puremvc.haxe.multicore.core.ViewTestNote.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notification.prototype[k];
org.puremvc.haxe.multicore.core.ViewTestNote.create = function(body) {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestNote::create");
	var $spos = $s.length;
	{
		var $tmp = new org.puremvc.haxe.multicore.core.ViewTestNote(org.puremvc.haxe.multicore.core.ViewTestNote.NAME,body);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestNote.prototype.__class__ = org.puremvc.haxe.multicore.core.ViewTestNote;
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	$s.push("haxe.Stack::callStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$s");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.exceptionStack = function() {
	$s.push("haxe.Stack::exceptionStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$e");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.toString = function(stack) {
	$s.push("haxe.Stack::toString");
	var $spos = $s.length;
	var b = new StringBuf();
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			b.b += "\nCalled from ";
			haxe.Stack.itemToString(b,s);
		}
	}
	{
		var $tmp = b.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.itemToString = function(b,s) {
	$s.push("haxe.Stack::itemToString");
	var $spos = $s.length;
	var $e = (s);
	switch( $e[1] ) {
	case 0:
	{
		b.b += "a C function";
	}break;
	case 1:
	var m = $e[2];
	{
		b.b += "module ";
		b.b += m;
	}break;
	case 2:
	var line = $e[4], file = $e[3], s1 = $e[2];
	{
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += file;
		b.b += " line ";
		b.b += line;
		if(s1 != null) b.b += ")";
	}break;
	case 3:
	var meth = $e[3], cname = $e[2];
	{
		b.b += cname;
		b.b += ".";
		b.b += meth;
	}break;
	case 4:
	var n = $e[2];
	{
		b.b += "local function #";
		b.b += n;
	}break;
	}
	$s.pop();
}
haxe.Stack.makeStack = function(s) {
	$s.push("haxe.Stack::makeStack");
	var $spos = $s.length;
	var a = function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e5 ) {
			{
				var e = $e5;
				$r = function($this) {
					var $r;
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					$r = [];
					return $r;
				}($this);
			}
		}
		return $r;
	}(this);
	var m = new Array();
	{
		var _g1 = 0, _g = a.length - (s == "$s"?2:0);
		while(_g1 < _g) {
			var i = _g1++;
			var d = a[i].split("::");
			m.unshift(haxe.StackItem.Method(d[0],d[1]));
		}
	}
	{
		$s.pop();
		return m;
	}
	$s.pop();
}
haxe.Stack.prototype.__class__ = haxe.Stack;
org.puremvc.haxe.multicore.core.ControllerTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ControllerTest.__name__ = ["org","puremvc","haxe","multicore","core","ControllerTest"];
org.puremvc.haxe.multicore.core.ControllerTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.core.ControllerTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.core.ControllerTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTest::testGetInstance");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.multicore.core.Controller.getInstance("ControllerTestKey1");
	this.assertTrue(controller != null,{ fileName : "ControllerTest.hx", lineNumber : 27, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](controller,org.puremvc.haxe.multicore.interfaces.IController),{ fileName : "ControllerTest.hx", lineNumber : 28, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ControllerTest.prototype.testHasCommand = function() {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTest::testHasCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.multicore.core.Controller.getInstance("ControllerTestKey4");
	controller.registerCommand("hasCommandTest",org.puremvc.haxe.multicore.core.ControllerTestCommand);
	this.assertTrue(controller.hasCommand("hasCommandTest"),{ fileName : "ControllerTest.hx", lineNumber : 114, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testHasCommand"});
	controller.removeCommand("hasCommandTest");
	this.assertFalse(controller.hasCommand("hasCommandTest"),{ fileName : "ControllerTest.hx", lineNumber : 120, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testHasCommand"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ControllerTest.prototype.testRegisterAndExecuteCommand = function() {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTest::testRegisterAndExecuteCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.multicore.core.Controller.getInstance("ControllerTestKey2");
	controller.registerCommand("ControllerTest",org.puremvc.haxe.multicore.core.ControllerTestCommand);
	var vo = new org.puremvc.haxe.multicore.core.ControllerTestVO(12.0);
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("ControllerTest",vo);
	controller.executeCommand(note);
	this.assertEquals(vo.result,24.0,{ fileName : "ControllerTest.hx", lineNumber : 61, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testRegisterAndExecuteCommand"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ControllerTest.prototype.testRegisterAndRemoveCommand = function() {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTest::testRegisterAndRemoveCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.multicore.core.Controller.getInstance("ControllerTestKey3");
	controller.registerCommand("ControllerRemoveTest",org.puremvc.haxe.multicore.core.ControllerTestCommand);
	var vo = new org.puremvc.haxe.multicore.core.ControllerTestVO(12);
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("ControllerRemoveTest",vo);
	controller.executeCommand(note);
	this.assertEquals(vo.result,24.0,{ fileName : "ControllerTest.hx", lineNumber : 86, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testRegisterAndRemoveCommand"});
	vo.result = 0;
	controller.removeCommand("ControllerRemoveTest");
	controller.executeCommand(note);
	this.assertEquals(vo.result,0,{ fileName : "ControllerTest.hx", lineNumber : 100, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testRegisterAndRemoveCommand"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ControllerTest.prototype.testReregisterAndExecuteCommand = function() {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTest::testReregisterAndExecuteCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.multicore.core.Controller.getInstance("ControllerTestKey5");
	controller.registerCommand("ControllerTest2",org.puremvc.haxe.multicore.core.ControllerTestCommand2);
	controller.removeCommand("ControllerTest2");
	controller.registerCommand("ControllerTest2",org.puremvc.haxe.multicore.core.ControllerTestCommand2);
	var vo = new org.puremvc.haxe.multicore.core.ControllerTestVO(12);
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("ControllerTest2",vo);
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ControllerTestKey5");
	view.notifyObservers(note);
	this.assertEquals(vo.result,24.0,{ fileName : "ControllerTest.hx", lineNumber : 160, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testReregisterAndExecuteCommand"});
	view.notifyObservers(note);
	this.assertEquals(vo.result,48.0,{ fileName : "ControllerTest.hx", lineNumber : 166, className : "org.puremvc.haxe.multicore.core.ControllerTest", methodName : "testReregisterAndExecuteCommand"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ControllerTest.prototype.__class__ = org.puremvc.haxe.multicore.core.ControllerTest;
IntIter = function(min,max) { if( min === $_ ) return; {
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	{
		var $tmp = this.min < this.max;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	{
		var $tmp = this.min++;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
org.puremvc.haxe.multicore.core.ViewTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ViewTest.__name__ = ["org","puremvc","haxe","multicore","core","ViewTest"];
org.puremvc.haxe.multicore.core.ViewTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.core.ViewTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.core.ViewTest.prototype.lastNotification = null;
org.puremvc.haxe.multicore.core.ViewTest.prototype.onRegisterCalled = null;
org.puremvc.haxe.multicore.core.ViewTest.prototype.onRemoveCalled = null;
org.puremvc.haxe.multicore.core.ViewTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testGetInstance");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey1");
	this.assertTrue(view != null,{ fileName : "ViewTest.hx", lineNumber : 39, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](view,org.puremvc.haxe.multicore.interfaces.IView),{ fileName : "ViewTest.hx", lineNumber : 40, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testHasMediator = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testHasMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey4");
	var mediator = new org.puremvc.haxe.multicore.patterns.mediator.Mediator("hasMediatorTest",this);
	view.registerMediator(mediator);
	this.assertTrue(view.hasMediator("hasMediatorTest"),{ fileName : "ViewTest.hx", lineNumber : 140, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testHasMediator"});
	view.removeMediator("hasMediatorTest");
	this.assertFalse(view.hasMediator("hasMediatorTest"),{ fileName : "ViewTest.hx", lineNumber : 146, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testHasMediator"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testOnRegisterAndOnRemove = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testOnRegisterAndOnRemove");
	var $spos = $s.length;
	this.onRegisterCalled = false;
	this.onRemoveCalled = false;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey6");
	var mediator = new org.puremvc.haxe.multicore.core.ViewTestMediator4(this);
	view.registerMediator(mediator);
	this.assertTrue(this.onRegisterCalled,{ fileName : "ViewTest.hx", lineNumber : 187, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testOnRegisterAndOnRemove"});
	view.removeMediator(org.puremvc.haxe.multicore.core.ViewTestMediator4.NAME);
	this.assertTrue(this.onRemoveCalled,{ fileName : "ViewTest.hx", lineNumber : 193, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testOnRegisterAndOnRemove"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testRegisterAndNotifyObserver = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testRegisterAndNotifyObserver");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey2");
	var observer = new org.puremvc.haxe.multicore.patterns.observer.Observer($closure(this,"viewTestMethod"),this);
	view.registerObserver(org.puremvc.haxe.multicore.core.ViewTestNote.NAME,observer);
	var note = org.puremvc.haxe.multicore.core.ViewTestNote.create(10.0);
	view.notifyObservers(note);
	this.assertEquals(this.viewTestVar,10.0,{ fileName : "ViewTest.hx", lineNumber : 87, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRegisterAndNotifyObserver"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testRegisterAndRemoveMediator = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testRegisterAndRemoveMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey5");
	var mediator = new org.puremvc.haxe.multicore.patterns.mediator.Mediator("testing",this);
	view.registerMediator(mediator);
	var removedMediator = view.removeMediator("testing");
	this.assertEquals(removedMediator.getMediatorName(),"testing",{ fileName : "ViewTest.hx", lineNumber : 165, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRegisterAndRemoveMediator"});
	this.assertTrue(view.retrieveMediator("testing") == null,{ fileName : "ViewTest.hx", lineNumber : 168, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRegisterAndRemoveMediator"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testRegisterAndRetrieveMediator = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testRegisterAndRetrieveMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey3");
	var viewTestMediator = new org.puremvc.haxe.multicore.core.ViewTestMediator(this);
	view.registerMediator(viewTestMediator);
	var mediator = view.retrieveMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME);
	this.assertTrue(Std["is"](mediator,org.puremvc.haxe.multicore.core.ViewTestMediator),{ fileName : "ViewTest.hx", lineNumber : 122, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRegisterAndRetrieveMediator"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testRemoveMediatorAndSubsequentNotify = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testRemoveMediatorAndSubsequentNotify");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey8");
	view.registerMediator(new org.puremvc.haxe.multicore.core.ViewTestMediator2(this));
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE1));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.multicore.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 248, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE2));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.multicore.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 251, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	view.removeMediator(org.puremvc.haxe.multicore.core.ViewTestMediator2.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.multicore.core.ViewTestMediator2.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 257, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	this.lastNotification = null;
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE1));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.multicore.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 265, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE2));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.multicore.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 268, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testRemoveOneOfTwoMediatorsAndSubsequentNotify = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testRemoveOneOfTwoMediatorsAndSubsequentNotify");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey9");
	view.registerMediator(new org.puremvc.haxe.multicore.core.ViewTestMediator2(this));
	view.registerMediator(new org.puremvc.haxe.multicore.core.ViewTestMediator3(this));
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE1));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.multicore.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 290, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE2));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.multicore.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 293, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE3));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.multicore.core.ViewTest.NOTE3,{ fileName : "ViewTest.hx", lineNumber : 296, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.removeMediator(org.puremvc.haxe.multicore.core.ViewTestMediator2.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.multicore.core.ViewTestMediator2.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 302, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	this.lastNotification = null;
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE1));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.multicore.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 309, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE2));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.multicore.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 312, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(org.puremvc.haxe.multicore.core.ViewTest.NOTE3));
	this.assertTrue(this.lastNotification == org.puremvc.haxe.multicore.core.ViewTest.NOTE3,{ fileName : "ViewTest.hx", lineNumber : 315, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.testSuccessiveRegisterAndRemoveMediator = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::testSuccessiveRegisterAndRemoveMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.multicore.core.View.getInstance("ViewTestKey7");
	view.registerMediator(new org.puremvc.haxe.multicore.core.ViewTestMediator(this));
	this.assertTrue(Std["is"](view.retrieveMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME),org.puremvc.haxe.multicore.core.ViewTestMediator),{ fileName : "ViewTest.hx", lineNumber : 209, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	view.removeMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 215, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	this.assertEquals(view.removeMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 218, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	view.registerMediator(new org.puremvc.haxe.multicore.core.ViewTestMediator(this));
	this.assertTrue(Std["is"](view.retrieveMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME),org.puremvc.haxe.multicore.core.ViewTestMediator),{ fileName : "ViewTest.hx", lineNumber : 223, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	view.removeMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.multicore.core.ViewTestMediator.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 229, className : "org.puremvc.haxe.multicore.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.viewTestMethod = function(note) {
	$s.push("org.puremvc.haxe.multicore.core.ViewTest::viewTestMethod");
	var $spos = $s.length;
	this.viewTestVar = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,Float)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTest.prototype.viewTestVar = null;
org.puremvc.haxe.multicore.core.ViewTest.prototype.__class__ = org.puremvc.haxe.multicore.core.ViewTest;
org.puremvc.haxe.multicore.core.ControllerTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ControllerTestCommand.__name__ = ["org","puremvc","haxe","multicore","core","ControllerTestCommand"];
org.puremvc.haxe.multicore.core.ControllerTestCommand.__super__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.multicore.core.ControllerTestCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.multicore.core.ControllerTestCommand.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTestCommand::execute");
	var $spos = $s.length;
	var vo = note.getBody();
	vo.result = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.multicore.core.ControllerTestCommand.prototype.__class__ = org.puremvc.haxe.multicore.core.ControllerTestCommand;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	if(o.__enum__ != null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__class__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__enum__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	{
		var $tmp = c.__super__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	if(c == null) {
		$s.pop();
		return null;
	}
	var a = c.__name__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e6 ) {
		{
			var e = $e6;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return cl;
	}
	$s.pop();
}
Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	try {
		e = eval(name);
	}
	catch( $e7 ) {
		{
			var err = $e7;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return e;
	}
	$s.pop();
}
Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length <= 3) {
		var $tmp = new cl(args[0],args[1],args[2]);
		$s.pop();
		return $tmp;
	}
	if(args.length > 8) throw "Too many arguments";
	{
		var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	{
		var $tmp = new cl($_);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEnum = function(e,constr,params) {
	$s.push("Type::createEnum");
	var $spos = $s.length;
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		{
			var $tmp = f.apply(e,params);
			$s.pop();
			return $tmp;
		}
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	{
		$s.pop();
		return f;
	}
	$s.pop();
}
Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = Reflect.fields(c.prototype);
	c = c.__super__;
	while(c != null) {
		a = a.concat(Reflect.fields(c.prototype));
		c = c.__super__;
	}
	while(a.remove("__class__")) null;
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	{
		var $tmp = e.__constructs__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":{
		{
			var $tmp = ValueType.TBool;
			$s.pop();
			return $tmp;
		}
	}break;
	case "string":{
		{
			var $tmp = ValueType.TClass(String);
			$s.pop();
			return $tmp;
		}
	}break;
	case "number":{
		if(v + 1 == v) {
			var $tmp = ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
		if(Math.ceil(v) == v) {
			var $tmp = ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
	}break;
	case "object":{
		if(v == null) {
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
	}break;
	case "function":{
		if(v.__name__ != null) {
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFunction;
			$s.pop();
			return $tmp;
		}
	}break;
	case "undefined":{
		{
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
	}break;
	default:{
		{
			var $tmp = ValueType.TUnknown;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		$s.pop();
		return true;
	}
	if(a[0] != b[0]) {
		$s.pop();
		return false;
	}
	{
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) {
				$s.pop();
				return false;
			}
		}
	}
	var e = a.__enum__;
	if(e != b.__enum__ || e == null) {
		$s.pop();
		return false;
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	{
		var $tmp = e[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	{
		var $tmp = e.slice(2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	{
		var $tmp = e[1];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.prototype.__class__ = Type;
js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		{
			var $tmp = m.apply(o,arguments);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	f1.scope = o;
	f1.method = m;
	{
		$s.pop();
		return f1;
	}
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				{
					var $tmp = str + ")";
					$s.pop();
					return $tmp;
				}
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			{
				$s.pop();
				return str;
			}
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e8 ) {
			{
				var e = $e8;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					{
						$s.pop();
						return "???";
					}
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		{
			$s.pop();
			return str;
		}
	}break;
	case "function":{
		{
			$s.pop();
			return "<function>";
		}
	}break;
	case "string":{
		{
			$s.pop();
			return o;
		}
	}break;
	default:{
		{
			var $tmp = String(o);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	{
		var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == Array) {
				var $tmp = (o.__enum__ == null);
				$s.pop();
				return $tmp;
			}
			{
				$s.pop();
				return true;
			}
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	}
	catch( $e9 ) {
		{
			var e = $e9;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				if(cl == null) {
					$s.pop();
					return false;
				}
			}
		}
	}
	switch(cl) {
	case Int:{
		{
			var $tmp = Math.ceil(o) === o && isFinite(o);
			$s.pop();
			return $tmp;
		}
	}break;
	case Float:{
		{
			var $tmp = typeof(o) == "number";
			$s.pop();
			return $tmp;
		}
	}break;
	case Bool:{
		{
			var $tmp = o === true || o === false;
			$s.pop();
			return $tmp;
		}
	}break;
	case String:{
		{
			var $tmp = typeof(o) == "string";
			$s.pop();
			return $tmp;
		}
	}break;
	case Dynamic:{
		{
			$s.pop();
			return true;
		}
	}break;
	default:{
		if(o == null) {
			$s.pop();
			return false;
		}
		{
			var $tmp = o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = (document.all != null && window.opera == null);
	js.Lib.isOpera = (window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@199");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	}
	Array.prototype.remove = function(obj) {
		$s.push("js.Boot::__init@202");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				{
					$s.pop();
					return true;
				}
			}
			i++;
		}
		{
			$s.pop();
			return false;
		}
		$s.pop();
	}
	Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@214");
		var $spos = $s.length;
		{
			var $tmp = { cur : 0, arr : this, hasNext : function() {
				$s.push("js.Boot::__init@214@218");
				var $spos = $s.length;
				{
					var $tmp = this.cur < this.arr.length;
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}, next : function() {
				$s.push("js.Boot::__init@214@221");
				var $spos = $s.length;
				{
					var $tmp = this.arr[this.cur++];
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}}
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@228");
		var $spos = $s.length;
		var x = cca.call(this,i);
		if(isNaN(x)) {
			$s.pop();
			return null;
		}
		{
			$s.pop();
			return x;
		}
		$s.pop();
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@235");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		{
			var $tmp = oldsub.apply(this,[pos,len]);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
org.puremvc.haxe.multicore.core.ControllerTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTestVO::new");
	var $spos = $s.length;
	this.input = input;
	this.result = 0;
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ControllerTestVO.__name__ = ["org","puremvc","haxe","multicore","core","ControllerTestVO"];
org.puremvc.haxe.multicore.core.ControllerTestVO.prototype.input = null;
org.puremvc.haxe.multicore.core.ControllerTestVO.prototype.result = null;
org.puremvc.haxe.multicore.core.ControllerTestVO.prototype.__class__ = org.puremvc.haxe.multicore.core.ControllerTestVO;
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO::new");
	var $spos = $s.length;
	this.input = input;
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO.__name__ = ["org","puremvc","haxe","multicore","patterns","command","SimpleCommandTestVO"];
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO.prototype.input = null;
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO.prototype.result = null;
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO;
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest.__name__ = ["org","puremvc","haxe","multicore","patterns","command","SimpleCommandTest"];
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest.prototype.testSimpleCommandExecute = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest::testSimpleCommandExecute");
	var $spos = $s.length;
	var vo = new org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestVO(5);
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("SimpleCommandTestNote",vo);
	var command = new org.puremvc.haxe.multicore.patterns.command.SimpleCommandTestCommand();
	command.execute(note);
	this.assertEquals(vo.result,10,{ fileName : "SimpleCommandTest.hx", lineNumber : 46, className : "org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest", methodName : "testSimpleCommandExecute"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommandTest;
org.puremvc.haxe.multicore.patterns.facade.Facade = function(key) { if( key === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::new");
	var $spos = $s.length;
	this.initializeNotifier(key);
	org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.set(this.multitonKey,this);
	this.initializeFacade();
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.facade.Facade.__name__ = ["org","puremvc","haxe","multicore","patterns","facade","Facade"];
org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance = function(key) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap == null) org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.exists(key)) org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.set(key,new org.puremvc.haxe.multicore.patterns.facade.Facade(key));
	{
		var $tmp = org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.get(key);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.controller = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.hasCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::hasCommand");
	var $spos = $s.length;
	{
		var $tmp = this.controller.hasCommand(notificationName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.hasMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::hasMediator");
	var $spos = $s.length;
	{
		var $tmp = this.view.hasMediator(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.hasProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::hasProxy");
	var $spos = $s.length;
	{
		var $tmp = this.model.hasProxy(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeController = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::initializeController");
	var $spos = $s.length;
	if(this.controller != null) {
		$s.pop();
		return;
	}
	this.controller = org.puremvc.haxe.multicore.core.Controller.getInstance(this.multitonKey);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeFacade = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::initializeFacade");
	var $spos = $s.length;
	this.initializeModel();
	this.initializeController();
	this.initializeView();
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeModel = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::initializeModel");
	var $spos = $s.length;
	if(this.model != null) {
		$s.pop();
		return;
	}
	this.model = org.puremvc.haxe.multicore.core.Model.getInstance(this.multitonKey);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeNotifier = function(key) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::initializeNotifier");
	var $spos = $s.length;
	this.multitonKey = key;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeView = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::initializeView");
	var $spos = $s.length;
	if(this.view != null) {
		$s.pop();
		return;
	}
	this.view = org.puremvc.haxe.multicore.core.View.getInstance(this.multitonKey);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.model = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.multitonKey = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.notifyObservers = function(notification) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::notifyObservers");
	var $spos = $s.length;
	if(this.view != null) this.view.notifyObservers(notification);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.registerCommand = function(notificationName,commandClassRef) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::registerCommand");
	var $spos = $s.length;
	this.controller.registerCommand(notificationName,commandClassRef);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.registerMediator = function(mediator) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::registerMediator");
	var $spos = $s.length;
	if(this.view != null) this.view.registerMediator(mediator);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.registerProxy = function(proxy) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::registerProxy");
	var $spos = $s.length;
	this.model.registerProxy(proxy);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::removeCommand");
	var $spos = $s.length;
	this.controller.removeCommand(notificationName);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeCore = function(key) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::removeCore");
	var $spos = $s.length;
	this.model.removeModel(key);
	this.view.removeView(key);
	this.controller.removeController(key);
	org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.remove(key);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::removeMediator");
	var $spos = $s.length;
	var mediator = null;
	if(this.view != null) mediator = this.view.removeMediator(mediatorName);
	{
		$s.pop();
		return mediator;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::removeProxy");
	var $spos = $s.length;
	var proxy = null;
	if(this.model != null) proxy = this.model.removeProxy(proxyName);
	{
		$s.pop();
		return proxy;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.retrieveMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::retrieveMediator");
	var $spos = $s.length;
	{
		var $tmp = this.view.retrieveMediator(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.retrieveProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::retrieveProxy");
	var $spos = $s.length;
	{
		var $tmp = this.model.retrieveProxy(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.sendNotification = function(notificationName,body,type) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.Facade::sendNotification");
	var $spos = $s.length;
	this.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(notificationName,body,type));
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.view = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.__class__ = org.puremvc.haxe.multicore.patterns.facade.Facade;
org.puremvc.haxe.multicore.patterns.facade.Facade.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IFacade];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command.__name__ = ["org","puremvc","haxe","multicore","patterns","command","MacroCommandTestSub2Command"];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command.__super__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command.prototype[k] = org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result2 = vo.input * vo.input;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command;
org.puremvc.haxe.multicore.patterns.facade.FacadeTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.__name__ = ["org","puremvc","haxe","multicore","patterns","facade","FacadeTest"];
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testGetInstance");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey1");
	this.assertTrue(facade != null,{ fileName : "FacadeTest.hx", lineNumber : 31, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](facade,org.puremvc.haxe.multicore.interfaces.IFacade),{ fileName : "FacadeTest.hx", lineNumber : 32, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testHasCommand = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testHasCommand");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey10");
	facade.registerCommand("facadeHasCommandTest",org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand);
	this.assertTrue(facade.hasCommand("facadeHasCommandTest"),{ fileName : "FacadeTest.hx", lineNumber : 215, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testHasCommand"});
	facade.removeCommand("facadeHasCommandTest");
	this.assertFalse(facade.hasCommand("facadeHasCommandTest"),{ fileName : "FacadeTest.hx", lineNumber : 221, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testHasCommand"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testHasMediator = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testHasMediator");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey8");
	facade.registerMediator(new org.puremvc.haxe.multicore.patterns.mediator.Mediator("facadeHasMediatorTest",new String("")));
	this.assertTrue(facade.hasMediator("facadeHasMediatorTest"),{ fileName : "FacadeTest.hx", lineNumber : 196, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testHasMediator"});
	facade.removeMediator("facadeHasMediatorTest");
	this.assertFalse(facade.hasMediator("facadeHasMediatorTest"),{ fileName : "FacadeTest.hx", lineNumber : 202, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testHasMediator"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testHasProxy = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testHasProxy");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey7");
	facade.registerProxy(new org.puremvc.haxe.multicore.patterns.proxy.Proxy("hasProxyTest",[1,2,3]));
	this.assertEquals(facade.hasProxy("hasProxyTest"),true,{ fileName : "FacadeTest.hx", lineNumber : 182, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testHasProxy"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testRegisterAndRemoveCommandAndSendNotification = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testRegisterAndRemoveCommandAndSendNotification");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey3");
	facade.registerCommand("FacadeTestNote",org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand);
	facade.removeCommand("FacadeTestNote");
	var vo = new org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO(32);
	facade.sendNotification("FacadeTestNote",vo);
	this.assertTrue(vo.result != 64,{ fileName : "FacadeTest.hx", lineNumber : 92, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRemoveCommandAndSendNotification"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testRegisterAndRemoveProxy = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testRegisterAndRemoveProxy");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey5");
	var proxy = new org.puremvc.haxe.multicore.patterns.proxy.Proxy("sizes",["7","13","21"]);
	facade.registerProxy(proxy);
	var removedProxy = facade.removeProxy("sizes");
	this.assertEquals(removedProxy.getProxyName(),"sizes",{ fileName : "FacadeTest.hx", lineNumber : 140, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRemoveProxy"});
	proxy = facade.retrieveProxy("sizes");
	this.assertTrue(proxy == null,{ fileName : "FacadeTest.hx", lineNumber : 146, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRemoveProxy"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testRegisterAndRetrieveProxy = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testRegisterAndRetrieveProxy");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey4");
	facade.registerProxy(new org.puremvc.haxe.multicore.patterns.proxy.Proxy("colors",["red","green","blue"]));
	var proxy = facade.retrieveProxy("colors");
	this.assertTrue(Std["is"](proxy,org.puremvc.haxe.multicore.interfaces.IProxy),{ fileName : "FacadeTest.hx", lineNumber : 112, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	var data = function($this) {
		var $r;
		var tmp = proxy;
		$r = (Std["is"](tmp,org.puremvc.haxe.multicore.patterns.proxy.Proxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).getData();
	this.assertTrue(data != null,{ fileName : "FacadeTest.hx", lineNumber : 118, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertTrue(Std["is"](data,Array),{ fileName : "FacadeTest.hx", lineNumber : 119, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data.length,3,{ fileName : "FacadeTest.hx", lineNumber : 120, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[0],"red",{ fileName : "FacadeTest.hx", lineNumber : 121, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[1],"green",{ fileName : "FacadeTest.hx", lineNumber : 122, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[2],"blue",{ fileName : "FacadeTest.hx", lineNumber : 123, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testRegisterCommandAndSendNotification = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testRegisterCommandAndSendNotification");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey2");
	facade.registerCommand("FacadeTestNote",org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand);
	var vo = new org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO(32);
	facade.sendNotification("FacadeTestNote",vo);
	this.assertEquals(vo.result,64,{ fileName : "FacadeTest.hx", lineNumber : 62, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterCommandAndSendNotification"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.testRegisterRetrieveAndRemoveMediator = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTest::testRegisterRetrieveAndRemoveMediator");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance("FacadeTestKey6");
	facade.registerMediator(new org.puremvc.haxe.multicore.patterns.mediator.Mediator(org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME,new String("test view")));
	this.assertTrue(facade.retrieveMediator(org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME) != null,{ fileName : "FacadeTest.hx", lineNumber : 159, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterRetrieveAndRemoveMediator"});
	var removedMediator = facade.removeMediator(org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME);
	this.assertEquals(removedMediator.getMediatorName(),org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME,{ fileName : "FacadeTest.hx", lineNumber : 165, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterRetrieveAndRemoveMediator"});
	this.assertTrue(facade.retrieveMediator(org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME) == null,{ fileName : "FacadeTest.hx", lineNumber : 168, className : "org.puremvc.haxe.multicore.patterns.facade.FacadeTest", methodName : "testRegisterRetrieveAndRemoveMediator"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTest.prototype.__class__ = org.puremvc.haxe.multicore.patterns.facade.FacadeTest;
StringBuf = function(p) { if( p === $_ ) return; {
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = "";
	$s.pop();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b += x;
	$s.pop();
}
StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b += String.fromCharCode(c);
	$s.pop();
}
StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b += s.substr(pos,len);
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	{
		var $tmp = this.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringBuf.prototype.__class__ = StringBuf;
org.puremvc.haxe.multicore.core.ViewTestMediator3 = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator3::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.mediator.Mediator.apply(this,[org.puremvc.haxe.multicore.core.ViewTestMediator3.NAME,view]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ViewTestMediator3.__name__ = ["org","puremvc","haxe","multicore","core","ViewTestMediator3"];
org.puremvc.haxe.multicore.core.ViewTestMediator3.__super__ = org.puremvc.haxe.multicore.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.multicore.core.ViewTestMediator3.prototype[k] = org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.multicore.core.ViewTestMediator3.prototype.getViewTest = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator3::getViewTest");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator3.prototype.handleNotification = function(notification) {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator3::handleNotification");
	var $spos = $s.length;
	this.getViewTest().lastNotification = notification.getName();
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator3.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator3::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = [org.puremvc.haxe.multicore.core.ViewTest.NOTE3];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator3.prototype.__class__ = org.puremvc.haxe.multicore.core.ViewTestMediator3;
org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand.__name__ = ["org","puremvc","haxe","multicore","patterns","facade","FacadeTestCommand"];
org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand.__super__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.multicore.patterns.facade.FacadeTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand.prototype.__class__ = org.puremvc.haxe.multicore.patterns.facade.FacadeTestCommand;
org.puremvc.haxe.multicore.patterns.command.MacroCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
	this.subCommands = new List();
	this.initializeMacroCommand();
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.__name__ = ["org","puremvc","haxe","multicore","patterns","command","MacroCommand"];
org.puremvc.haxe.multicore.patterns.command.MacroCommand.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.addSubCommand = function(commandClassRef) {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommand::addSubCommand");
	var $spos = $s.length;
	this.subCommands.add(commandClassRef);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.execute = function(notification) {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommand::execute");
	var $spos = $s.length;
	while(!this.subCommands.isEmpty()) {
		var commandClassRef = this.subCommands.pop();
		var commandInstance = Type.createInstance(commandClassRef,[]);
		commandInstance.initializeNotifier(this.multitonKey);
		commandInstance.execute(notification);
	}
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.initializeMacroCommand = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommand::initializeMacroCommand");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.subCommands = null;
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.MacroCommand;
org.puremvc.haxe.multicore.patterns.command.MacroCommand.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.ICommand];
org.puremvc.haxe.multicore.core.ViewTestMediator = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.mediator.Mediator.apply(this,[org.puremvc.haxe.multicore.core.ViewTestMediator.NAME,view]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ViewTestMediator.__name__ = ["org","puremvc","haxe","multicore","core","ViewTestMediator"];
org.puremvc.haxe.multicore.core.ViewTestMediator.__super__ = org.puremvc.haxe.multicore.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.multicore.core.ViewTestMediator.prototype[k] = org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.multicore.core.ViewTestMediator.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = ["ABC","DEF","GHI"];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator.prototype.__class__ = org.puremvc.haxe.multicore.core.ViewTestMediator;
org.puremvc.haxe.multicore.interfaces.IView = function() { }
org.puremvc.haxe.multicore.interfaces.IView.__name__ = ["org","puremvc","haxe","multicore","interfaces","IView"];
org.puremvc.haxe.multicore.interfaces.IView.prototype.hasMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.notifyObservers = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.registerMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.registerObserver = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.removeMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.removeObserver = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.removeView = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.retrieveMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IView;
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command.__name__ = ["org","puremvc","haxe","multicore","patterns","command","MacroCommandTestSub1Command"];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command.__super__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command.prototype[k] = org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.multicore.patterns.command.MacroCommandTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result1 = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command;
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.command.MacroCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand.__name__ = ["org","puremvc","haxe","multicore","patterns","command","MacroCommandTestCommand"];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand.__super__ = org.puremvc.haxe.multicore.patterns.command.MacroCommand;
for(var k in org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype ) org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype[k];
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand.prototype.initializeMacroCommand = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand::initializeMacroCommand");
	var $spos = $s.length;
	this.addSubCommand(org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub1Command);
	this.addSubCommand(org.puremvc.haxe.multicore.patterns.command.MacroCommandTestSub2Command);
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.MacroCommandTestCommand;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
Hash = function(p) { if( p === $_ ) return; {
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
	$s.pop();
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		{
			var $tmp = this.hasOwnProperty.call(this.h,key);
			$s.pop();
			return $tmp;
		}
	}
	catch( $e10 ) {
		{
			var e = $e10;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h["$" + key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("Hash::iterator@198");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Hash::iterator@199");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref["$" + i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b += "{";
	var it = this.keys();
	{ var $it11 = it;
	while( $it11.hasNext() ) { var i = $it11.next();
	{
		s.b += i;
		s.b += " => ";
		s.b += Std.string(this.get(i));
		if(it.hasNext()) s.b += ", ";
	}
	}}
	s.b += "}";
	{
		var $tmp = s.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.__class__ = Hash;
org.puremvc.haxe.multicore.core.View = function(key) { if( key === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.View::new");
	var $spos = $s.length;
	this.multitonKey = key;
	org.puremvc.haxe.multicore.core.View.instanceMap.set(this.multitonKey,this);
	this.mediatorMap = new Hash();
	this.observerMap = new Hash();
	this.initializeView();
	$s.pop();
}}
org.puremvc.haxe.multicore.core.View.__name__ = ["org","puremvc","haxe","multicore","core","View"];
org.puremvc.haxe.multicore.core.View.getInstance = function(key) {
	$s.push("org.puremvc.haxe.multicore.core.View::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.multicore.core.View.instanceMap == null) org.puremvc.haxe.multicore.core.View.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.core.View.instanceMap.exists(key)) org.puremvc.haxe.multicore.core.View.instanceMap.set(key,new org.puremvc.haxe.multicore.core.View(key));
	{
		var $tmp = org.puremvc.haxe.multicore.core.View.instanceMap.get(key);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.instanceMap = null;
org.puremvc.haxe.multicore.core.View.prototype.hasMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.multicore.core.View::hasMediator");
	var $spos = $s.length;
	{
		var $tmp = this.mediatorMap.exists(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.initializeView = function() {
	$s.push("org.puremvc.haxe.multicore.core.View::initializeView");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.mediatorMap = null;
org.puremvc.haxe.multicore.core.View.prototype.multitonKey = null;
org.puremvc.haxe.multicore.core.View.prototype.notifyObservers = function(notification) {
	$s.push("org.puremvc.haxe.multicore.core.View::notifyObservers");
	var $spos = $s.length;
	if(this.observerMap.exists(notification.getName())) {
		var iterator = this.observerMap.get(notification.getName()).iterator();
		{ var $it12 = iterator;
		while( $it12.hasNext() ) { var observer = $it12.next();
		observer.notifyObserver(notification);
		}}
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.observerMap = null;
org.puremvc.haxe.multicore.core.View.prototype.registerMediator = function(mediator) {
	$s.push("org.puremvc.haxe.multicore.core.View::registerMediator");
	var $spos = $s.length;
	mediator.initializeNotifier(this.multitonKey);
	this.mediatorMap.set(mediator.getMediatorName(),mediator);
	var interests = mediator.listNotificationInterests();
	if(interests.length > 0) {
		var observer = new org.puremvc.haxe.multicore.patterns.observer.Observer($closure(mediator,"handleNotification"),mediator);
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.registerObserver(interests[i],observer);
			}
		}
	}
	mediator.onRegister();
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.registerObserver = function(notificationName,observer) {
	$s.push("org.puremvc.haxe.multicore.core.View::registerObserver");
	var $spos = $s.length;
	if(!this.observerMap.exists(notificationName)) this.observerMap.set(notificationName,new List());
	this.observerMap.get(notificationName).add(observer);
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.removeMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.multicore.core.View::removeMediator");
	var $spos = $s.length;
	var mediator = this.mediatorMap.get(mediatorName);
	if(mediator != null) {
		var interests = mediator.listNotificationInterests();
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.removeObserver(interests[i],mediator);
			}
		}
		this.mediatorMap.remove(mediatorName);
		mediator.onRemove();
	}
	{
		$s.pop();
		return mediator;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.removeObserver = function(notificationName,notifyContext) {
	$s.push("org.puremvc.haxe.multicore.core.View::removeObserver");
	var $spos = $s.length;
	var observers = this.observerMap.get(notificationName);
	{ var $it13 = observers.iterator();
	while( $it13.hasNext() ) { var observer = $it13.next();
	{
		if(observer.compareNotifyContext(notifyContext) == true) {
			observers.remove(observer);
			break;
		}
	}
	}}
	if(observers.isEmpty()) {
		this.observerMap.remove(notificationName);
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.removeView = function(key) {
	$s.push("org.puremvc.haxe.multicore.core.View::removeView");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.core.View.instanceMap.remove(key);
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.retrieveMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.multicore.core.View::retrieveMediator");
	var $spos = $s.length;
	{
		var $tmp = this.mediatorMap.get(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.View.prototype.__class__ = org.puremvc.haxe.multicore.core.View;
org.puremvc.haxe.multicore.core.View.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IView];
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__instanceof(v,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__string_rec(s,"");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = Math.floor(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x);
	if(Math.isNaN(v)) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	{
		var $tmp = parseFloat(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	{
		var $tmp = Math.floor(Math.random() * x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.prototype.__class__ = Std;
org.puremvc.haxe.multicore.core.ModelTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ModelTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ModelTest.__name__ = ["org","puremvc","haxe","multicore","core","ModelTest"];
org.puremvc.haxe.multicore.core.ModelTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.core.ModelTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.core.ModelTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.multicore.core.ModelTest::testGetInstance");
	var $spos = $s.length;
	var model = org.puremvc.haxe.multicore.core.Model.getInstance("ModelTestKey1");
	this.assertTrue(model != null,{ fileName : "ModelTest.hx", lineNumber : 28, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](model,org.puremvc.haxe.multicore.interfaces.IModel),{ fileName : "ModelTest.hx", lineNumber : 29, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ModelTest.prototype.testHasProxy = function() {
	$s.push("org.puremvc.haxe.multicore.core.ModelTest::testHasProxy");
	var $spos = $s.length;
	var model = org.puremvc.haxe.multicore.core.Model.getInstance("ModelTestKey4");
	var proxy = new org.puremvc.haxe.multicore.patterns.proxy.Proxy("aces",["clubs","spades","hearts","diamonds"]);
	model.registerProxy(proxy);
	this.assertTrue(model.hasProxy("aces"),{ fileName : "ModelTest.hx", lineNumber : 92, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testHasProxy"});
	model.removeProxy("aces");
	this.assertFalse(model.hasProxy("aces"),{ fileName : "ModelTest.hx", lineNumber : 99, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testHasProxy"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ModelTest.prototype.testOnRegisterAndOnRemove = function() {
	$s.push("org.puremvc.haxe.multicore.core.ModelTest::testOnRegisterAndOnRemove");
	var $spos = $s.length;
	var model = org.puremvc.haxe.multicore.core.Model.getInstance("ModelTestKey4");
	var proxy = new org.puremvc.haxe.multicore.core.ModelTestProxy();
	model.registerProxy(proxy);
	this.assertEquals(proxy.getData(),org.puremvc.haxe.multicore.core.ModelTestProxy.ON_REGISTER_CALLED,{ fileName : "ModelTest.hx", lineNumber : 115, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testOnRegisterAndOnRemove"});
	model.removeProxy(org.puremvc.haxe.multicore.core.ModelTestProxy.NAME);
	this.assertEquals(proxy.getData(),org.puremvc.haxe.multicore.core.ModelTestProxy.ON_REMOVE_CALLED,{ fileName : "ModelTest.hx", lineNumber : 121, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testOnRegisterAndOnRemove"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ModelTest.prototype.testRegisterAndRemoveProxy = function() {
	$s.push("org.puremvc.haxe.multicore.core.ModelTest::testRegisterAndRemoveProxy");
	var $spos = $s.length;
	var model = org.puremvc.haxe.multicore.core.Model.getInstance("ModelTestKey3");
	var proxy = new org.puremvc.haxe.multicore.patterns.proxy.Proxy("sizes",["7","13","21"]);
	model.registerProxy(proxy);
	var removedProxy = model.removeProxy("sizes");
	this.assertEquals(removedProxy.getProxyName(),"sizes",{ fileName : "ModelTest.hx", lineNumber : 72, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRemoveProxy"});
	proxy = model.retrieveProxy("sizes");
	this.assertTrue(proxy == null,{ fileName : "ModelTest.hx", lineNumber : 77, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRemoveProxy"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ModelTest.prototype.testRegisterAndRetrieveProxy = function() {
	$s.push("org.puremvc.haxe.multicore.core.ModelTest::testRegisterAndRetrieveProxy");
	var $spos = $s.length;
	var model = org.puremvc.haxe.multicore.core.Model.getInstance("ModelTestKey2");
	model.registerProxy(new org.puremvc.haxe.multicore.patterns.proxy.Proxy("colors",["red","green","blue"]));
	var proxy = model.retrieveProxy("colors");
	var data = function($this) {
		var $r;
		var tmp = proxy;
		$r = (Std["is"](tmp,org.puremvc.haxe.multicore.patterns.proxy.Proxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).getData();
	this.assertTrue(data != null,{ fileName : "ModelTest.hx", lineNumber : 50, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertTrue(Std["is"](data,Array),{ fileName : "ModelTest.hx", lineNumber : 51, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data.length,3,{ fileName : "ModelTest.hx", lineNumber : 52, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[0],"red",{ fileName : "ModelTest.hx", lineNumber : 53, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[1],"green",{ fileName : "ModelTest.hx", lineNumber : 54, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[2],"blue",{ fileName : "ModelTest.hx", lineNumber : 55, className : "org.puremvc.haxe.multicore.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	$s.pop();
}
org.puremvc.haxe.multicore.core.ModelTest.prototype.__class__ = org.puremvc.haxe.multicore.core.ModelTest;
org.puremvc.haxe.multicore.core.ControllerTestCommand2 = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTestCommand2::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ControllerTestCommand2.__name__ = ["org","puremvc","haxe","multicore","core","ControllerTestCommand2"];
org.puremvc.haxe.multicore.core.ControllerTestCommand2.__super__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.multicore.core.ControllerTestCommand2.prototype[k] = org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.multicore.core.ControllerTestCommand2.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.multicore.core.ControllerTestCommand2::execute");
	var $spos = $s.length;
	var vo = note.getBody();
	vo.result = vo.result + (2 * vo.input);
	$s.pop();
}
org.puremvc.haxe.multicore.core.ControllerTestCommand2.prototype.__class__ = org.puremvc.haxe.multicore.core.ControllerTestCommand2;
org.puremvc.haxe.multicore.patterns.observer.ObserverTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.ObserverTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","ObserverTest"];
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.patterns.observer.ObserverTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.prototype.observerTestMethod = function(note) {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.ObserverTest::observerTestMethod");
	var $spos = $s.length;
	this.observerTestVar = note.getBody();
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.prototype.observerTestVar = null;
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.prototype.testCompareNotifyContext = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.ObserverTest::testCompareNotifyContext");
	var $spos = $s.length;
	var observer = new org.puremvc.haxe.multicore.patterns.observer.Observer($closure(this,"observerTestMethod"),this);
	var negTestObj = null;
	this.assertFalse(observer.compareNotifyContext(negTestObj),{ fileName : "ObserverTest.hx", lineNumber : 88, className : "org.puremvc.haxe.multicore.patterns.observer.ObserverTest", methodName : "testCompareNotifyContext"});
	this.assertTrue(observer.compareNotifyContext(this),{ fileName : "ObserverTest.hx", lineNumber : 89, className : "org.puremvc.haxe.multicore.patterns.observer.ObserverTest", methodName : "testCompareNotifyContext"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.prototype.testObserverAccessors = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.ObserverTest::testObserverAccessors");
	var $spos = $s.length;
	var observer = new org.puremvc.haxe.multicore.patterns.observer.Observer(null,null);
	observer.setNotifyContext(this);
	observer.setNotifyMethod($closure(this,"observerTestMethod"));
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("ObserverTestNote",10);
	observer.notifyObserver(note);
	this.assertEquals(this.observerTestVar,10,{ fileName : "ObserverTest.hx", lineNumber : 51, className : "org.puremvc.haxe.multicore.patterns.observer.ObserverTest", methodName : "testObserverAccessors"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.prototype.testObserverConstructor = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.ObserverTest::testObserverConstructor");
	var $spos = $s.length;
	var observer = new org.puremvc.haxe.multicore.patterns.observer.Observer($closure(this,"observerTestMethod"),this);
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("ObserverTestNote",5.0);
	observer.notifyObserver(note);
	this.assertEquals(this.observerTestVar,5.0,{ fileName : "ObserverTest.hx", lineNumber : 74, className : "org.puremvc.haxe.multicore.patterns.observer.ObserverTest", methodName : "testObserverConstructor"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.ObserverTest.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.ObserverTest;
org.puremvc.haxe.multicore.core.ViewTestMediator4 = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator4::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.patterns.mediator.Mediator.apply(this,[org.puremvc.haxe.multicore.core.ViewTestMediator4.NAME,view]);
	$s.pop();
}}
org.puremvc.haxe.multicore.core.ViewTestMediator4.__name__ = ["org","puremvc","haxe","multicore","core","ViewTestMediator4"];
org.puremvc.haxe.multicore.core.ViewTestMediator4.__super__ = org.puremvc.haxe.multicore.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.multicore.core.ViewTestMediator4.prototype[k] = org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.multicore.core.ViewTestMediator4.prototype.getViewTest = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator4::getViewTest");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator4.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator4::onRegister");
	var $spos = $s.length;
	this.getViewTest().onRegisterCalled = true;
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator4.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.multicore.core.ViewTestMediator4::onRemove");
	var $spos = $s.length;
	this.getViewTest().onRemoveCalled = true;
	$s.pop();
}
org.puremvc.haxe.multicore.core.ViewTestMediator4.prototype.__class__ = org.puremvc.haxe.multicore.core.ViewTestMediator4;
org.puremvc.haxe.multicore.patterns.observer.NotificationTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.NotificationTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.patterns.observer.NotificationTest.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","NotificationTest"];
org.puremvc.haxe.multicore.patterns.observer.NotificationTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.patterns.observer.NotificationTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.patterns.observer.NotificationTest.prototype.testBodyAccessors = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.NotificationTest::testBodyAccessors");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification(null);
	note.setBody(5);
	this.assertEquals(note.getBody(),5,{ fileName : "NotificationTest.hx", lineNumber : 38, className : "org.puremvc.haxe.multicore.patterns.observer.NotificationTest", methodName : "testBodyAccessors"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.NotificationTest.prototype.testConstructor = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.NotificationTest::testConstructor");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("TestNote",5,"TestNoteType");
	this.assertEquals(note.getName(),"TestNote",{ fileName : "NotificationTest.hx", lineNumber : 51, className : "org.puremvc.haxe.multicore.patterns.observer.NotificationTest", methodName : "testConstructor"});
	this.assertEquals(note.getBody(),5,{ fileName : "NotificationTest.hx", lineNumber : 52, className : "org.puremvc.haxe.multicore.patterns.observer.NotificationTest", methodName : "testConstructor"});
	this.assertEquals(note.getType(),"TestNoteType",{ fileName : "NotificationTest.hx", lineNumber : 53, className : "org.puremvc.haxe.multicore.patterns.observer.NotificationTest", methodName : "testConstructor"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.NotificationTest.prototype.testNameAccessors = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.NotificationTest::testNameAccessors");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("TestNote");
	this.assertEquals(note.getName(),"TestNote",{ fileName : "NotificationTest.hx", lineNumber : 23, className : "org.puremvc.haxe.multicore.patterns.observer.NotificationTest", methodName : "testNameAccessors"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.NotificationTest.prototype.testToString = function() {
	$s.push("org.puremvc.haxe.multicore.patterns.observer.NotificationTest::testToString");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.multicore.patterns.observer.Notification("TestNote",[1,3,5],"TestType");
	var ts = "Notification Name: TestNote\nBody:1,3,5\nType:TestType";
	this.assertEquals(note.toString(),ts,{ fileName : "NotificationTest.hx", lineNumber : 73, className : "org.puremvc.haxe.multicore.patterns.observer.NotificationTest", methodName : "testToString"});
	$s.pop();
}
org.puremvc.haxe.multicore.patterns.observer.NotificationTest.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.NotificationTest;
haxe.unit.TestResult = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestResult::new");
	var $spos = $s.length;
	this.m_tests = new List();
	this.success = true;
	$s.pop();
}}
haxe.unit.TestResult.__name__ = ["haxe","unit","TestResult"];
haxe.unit.TestResult.prototype.add = function(t) {
	$s.push("haxe.unit.TestResult::add");
	var $spos = $s.length;
	this.m_tests.add(t);
	if(!t.success) this.success = false;
	$s.pop();
}
haxe.unit.TestResult.prototype.m_tests = null;
haxe.unit.TestResult.prototype.success = null;
haxe.unit.TestResult.prototype.toString = function() {
	$s.push("haxe.unit.TestResult::toString");
	var $spos = $s.length;
	var buf = new StringBuf();
	var failures = 0;
	{ var $it14 = this.m_tests.iterator();
	while( $it14.hasNext() ) { var test = $it14.next();
	{
		if(test.success == false) {
			buf.b += "* ";
			buf.b += test.classname;
			buf.b += "::";
			buf.b += test.method;
			buf.b += "()";
			buf.b += "\n";
			buf.b += "ERR: ";
			if(test.posInfos != null) {
				buf.b += test.posInfos.fileName;
				buf.b += ":";
				buf.b += test.posInfos.lineNumber;
				buf.b += "(";
				buf.b += test.posInfos.className;
				buf.b += ".";
				buf.b += test.posInfos.methodName;
				buf.b += ") - ";
			}
			buf.b += test.error;
			buf.b += "\n";
			if(test.backtrace != null) {
				buf.b += test.backtrace;
				buf.b += "\n";
			}
			buf.b += "\n";
			failures++;
		}
	}
	}}
	buf.b += "\n";
	if(failures == 0) buf.b += "OK ";
	else buf.b += "FAILED ";
	buf.b += this.m_tests.length;
	buf.b += " tests, ";
	buf.b += failures;
	buf.b += " failed, ";
	buf.b += (this.m_tests.length - failures);
	buf.b += " success";
	buf.b += "\n";
	{
		var $tmp = buf.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.unit.TestResult.prototype.__class__ = haxe.unit.TestResult;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	{
		var $tmp = eval(code);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	{
		var $tmp = encodeURIComponent(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	{
		var $tmp = decodeURIComponent(s.split("+").join(" "));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	{
		var $tmp = (s.length >= start.length && s.substr(0,start.length) == start);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	{
		var $tmp = (slen >= elen && s.substr(slen - elen,elen) == end);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	{
		var $tmp = (c >= 9 && c <= 13) || c == 32;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	}
	else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		{
			var $tmp = s.substr(0,l - r);
			$s.pop();
			return $tmp;
		}
	}
	else {
		{
			$s.pop();
			return s;
		}
	}
	$s.pop();
}
StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	{
		var $tmp = StringTools.ltrim(StringTools.rtrim(s));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		$s.pop();
		return s;
	}
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	{
		var $tmp = ns + s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	{
		var $tmp = s.split(sub).join(by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.baseEncode = function(s,base) {
	$s.push("StringTools::baseEncode");
	var $spos = $s.length;
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "baseEncode: base must be a power of two.";
	var size = Std["int"]((s.length * 8 + nbits - 1) / nbits);
	var out = new StringBuf();
	var buf = 0;
	var curbits = 0;
	var mask = ((1 << nbits) - 1);
	var pin = 0;
	while(size-- > 0) {
		while(curbits < nbits) {
			curbits += 8;
			buf <<= 8;
			var t = s.charCodeAt(pin++);
			if(t > 255) throw "baseEncode: bad chars";
			buf |= t;
		}
		curbits -= nbits;
		out.b += String.fromCharCode(base.charCodeAt((buf >> curbits) & mask));
	}
	{
		var $tmp = out.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.baseDecode = function(s,base) {
	$s.push("StringTools::baseDecode");
	var $spos = $s.length;
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "baseDecode: base must be a power of two.";
	var size = (s.length * 8 + nbits - 1) / nbits;
	var tbl = new Array();
	{
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
	}
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			tbl[base.charCodeAt(i)] = i;
		}
	}
	var size1 = (s.length * nbits) / 8;
	var out = new StringBuf();
	var buf = 0;
	var curbits = 0;
	var pin = 0;
	while(size1-- > 0) {
		while(curbits < 8) {
			curbits += nbits;
			buf <<= nbits;
			var i = tbl[s.charCodeAt(pin++)];
			if(i == -1) throw "baseDecode: bad chars";
			buf |= i;
		}
		curbits -= 8;
		out.b += String.fromCharCode((buf >> curbits) & 255);
	}
	{
		var $tmp = out.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var neg = false;
	if(n < 0) {
		neg = true;
		n = -n;
	}
	var s = n.toString(16);
	s = s.toUpperCase();
	if(digits != null) while(s.length < digits) s = "0" + s;
	if(neg) s = "-" + s;
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.prototype.__class__ = StringTools;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("@Main::new@74");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("@Main::new@86");
		var $spos = $s.length;
		{
			var $tmp = isNaN(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.__name__ = ["Math"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
org.puremvc.haxe.multicore.patterns.proxy.Proxy.NAME = "Proxy";
org.puremvc.haxe.multicore.core.ModelTestProxy.NAME = "ModelTestProxy";
org.puremvc.haxe.multicore.core.ModelTestProxy.ON_REGISTER_CALLED = "onRegister Called";
org.puremvc.haxe.multicore.core.ModelTestProxy.ON_REMOVE_CALLED = "onRemove Called";
org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME = "Mediator";
org.puremvc.haxe.multicore.core.ViewTestMediator2.NAME = "ViewTestMediator2";
org.puremvc.haxe.multicore.core.ViewTestNote.NAME = "ViewTestNote";
org.puremvc.haxe.multicore.core.ViewTest.NOTE1 = "Notification1";
org.puremvc.haxe.multicore.core.ViewTest.NOTE2 = "Notification2";
org.puremvc.haxe.multicore.core.ViewTest.NOTE3 = "Notification3";
org.puremvc.haxe.multicore.core.ViewTestMediator3.NAME = "ViewTestMediator3";
org.puremvc.haxe.multicore.core.ViewTestMediator.NAME = "ViewTestMediator";
org.puremvc.haxe.multicore.core.ViewTestMediator4.NAME = "ViewTestMediator4";
js.Lib.document = document;
js.Lib.window = window;
js.Lib.onerror = null;
$Main.init = PureMVCMultiCoreTestRunner.main();
