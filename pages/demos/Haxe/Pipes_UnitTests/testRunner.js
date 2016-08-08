$estr = function() { return js.Boot.__string_rec(this,''); }
org = {}
org.puremvc = {}
org.puremvc.haxe = {}
org.puremvc.haxe.multicore = {}
org.puremvc.haxe.multicore.utilities = {}
org.puremvc.haxe.multicore.utilities.pipes = {}
org.puremvc.haxe.multicore.utilities.pipes.interfaces = {}
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage = function() { }
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","interfaces","IPipeMessage"];
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.getBody = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.getHeader = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.getPriority = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.getType = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.setBody = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.setHeader = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.setPriority = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.setType = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage;
org.puremvc.haxe.multicore.utilities.pipes.messages = {}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message = function(type,header,body,priority) { if( type === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::new");
	var $spos = $s.length;
	if(priority == null) priority = 5;
	this.setType(type);
	this.setHeader(header);
	this.setBody(body);
	this.setPriority(priority);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","messages","Message"];
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.body = null;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.getBody = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::getBody");
	var $spos = $s.length;
	{
		var $tmp = this.body;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.getHeader = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::getHeader");
	var $spos = $s.length;
	{
		var $tmp = this.header;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.getPriority = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::getPriority");
	var $spos = $s.length;
	{
		var $tmp = this.priority;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.getType = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::getType");
	var $spos = $s.length;
	{
		var $tmp = this.type;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.header = null;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.priority = null;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.setBody = function(body) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::setBody");
	var $spos = $s.length;
	this.body = body;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.setHeader = function(header) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::setHeader");
	var $spos = $s.length;
	this.header = header;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.setPriority = function(priority) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::setPriority");
	var $spos = $s.length;
	this.priority = priority;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.setType = function(type) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.Message::setType");
	var $spos = $s.length;
	this.type = type;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.type = null;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.messages.Message;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.__interfaces__ = [org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage];
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage = function(type,name,filter,params) { if( type === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.utilities.pipes.messages.Message.apply(this,[type]);
	this.setName(name);
	this.setFilter(filter);
	this.setParams(params);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","messages","FilterControlMessage"];
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.__super__ = org.puremvc.haxe.multicore.utilities.pipes.messages.Message;
for(var k in org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype ) org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype[k] = org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.filter = null;
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.getFilter = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage::getFilter");
	var $spos = $s.length;
	{
		var $tmp = $closure(this,"filter");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.getName = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage::getName");
	var $spos = $s.length;
	{
		var $tmp = this.name;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.getParams = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage::getParams");
	var $spos = $s.length;
	{
		var $tmp = this.params;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.name = null;
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.params = null;
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.setFilter = function(filter) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage::setFilter");
	var $spos = $s.length;
	this.filter = filter;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.setName = function(name) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage::setName");
	var $spos = $s.length;
	this.name = name;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.setParams = function(params) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage::setParams");
	var $spos = $s.length;
	this.params = params;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting = function() { }
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","interfaces","IPipeFitting"];
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting.prototype.connect = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting.prototype.disconnect = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting.prototype.write = null;
org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting;
org.puremvc.haxe.multicore.utilities.pipes.plumbing = {}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe = function(output) { if( output === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe::new");
	var $spos = $s.length;
	if(output != null) this.connect(output);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","Pipe"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype.connect = function(output) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe::connect");
	var $spos = $s.length;
	var success = false;
	if(this.output == null) {
		this.output = output;
		success = true;
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype.disconnect = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe::disconnect");
	var $spos = $s.length;
	var disconnectedFitting = this.output;
	this.output = null;
	{
		$s.pop();
		return disconnectedFitting;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype.output = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype.write = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe::write");
	var $spos = $s.length;
	{
		var $tmp = this.output.write(message);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.__interfaces__ = [org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge = function(input1,input2) { if( input1 === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.apply(this,[]);
	if(input1 != null) this.connectInput(input1);
	if(input2 != null) this.connectInput(input2);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","TeeMerge"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge.__super__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe;
for(var k in org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge.prototype[k] = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge.prototype.connectInput = function(input) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge::connectInput");
	var $spos = $s.length;
	{
		var $tmp = input.connect(this);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge;
haxe = {}
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
		catch( $e0 ) {
			{
				var e = $e0;
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
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener = function(context,listener) { if( context === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener::new");
	var $spos = $s.length;
	this.context = context;
	this.listener = listener;
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","PipeListener"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.prototype.connect = function(output) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener::connect");
	var $spos = $s.length;
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.prototype.context = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.prototype.disconnect = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener::disconnect");
	var $spos = $s.length;
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.prototype.listener = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.prototype.write = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener::write");
	var $spos = $s.length;
	this.listener(message);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener.__interfaces__ = [org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting];
EReg = function(r,opt) { if( r === $_ ) return; {
	$s.push("EReg::new");
	var $spos = $s.length;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
	$s.pop();
}}
EReg.__name__ = ["EReg"];
EReg.prototype.customReplace = function(s,f) {
	$s.push("EReg::customReplace");
	var $spos = $s.length;
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b += this.matchedLeft();
		buf.b += f(this);
		s = this.matchedRight();
	}
	buf.b += s;
	{
		var $tmp = buf.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.match = function(s) {
	$s.push("EReg::match");
	var $spos = $s.length;
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	{
		var $tmp = (this.r.m != null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matched = function(n) {
	$s.push("EReg::matched");
	var $spos = $s.length;
	{
		var $tmp = (this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedLeft = function() {
	$s.push("EReg::matchedLeft");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) {
		var $tmp = this.r.s.substr(0,this.r.m.index);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = this.r.l;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedPos = function() {
	$s.push("EReg::matchedPos");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	{
		var $tmp = { pos : this.r.m.index, len : this.r.m[0].length}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedRight = function() {
	$s.push("EReg::matchedRight");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		{
			var $tmp = this.r.s.substr(sz,this.r.s.length - sz);
			$s.pop();
			return $tmp;
		}
	}
	{
		var $tmp = this.r.r;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.r = null;
EReg.prototype.replace = function(s,by) {
	$s.push("EReg::replace");
	var $spos = $s.length;
	{
		var $tmp = s.replace(this.r,by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.split = function(s) {
	$s.push("EReg::split");
	var $spos = $s.length;
	var d = "#__delim__#";
	{
		var $tmp = s.replace(this.r,d).split(d);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.__class__ = EReg;
js = {}
js.JsXml__ = function(p) { if( p === $_ ) return; {
	$s.push("js.JsXml__::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
js.JsXml__.__name__ = ["js","JsXml__"];
js.JsXml__.parse = function(str) {
	$s.push("js.JsXml__::parse");
	var $spos = $s.length;
	var rules = [js.JsXml__.enode,js.JsXml__.epcdata,js.JsXml__.eend,js.JsXml__.ecdata,js.JsXml__.edoctype,js.JsXml__.ecomment,js.JsXml__.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:{
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(js.JsXml__.eattribute.match(str)) {
							x.set(js.JsXml__.eattribute.matched(1),js.JsXml__.eattribute.matched(3));
							str = js.JsXml__.eattribute.matchedRight();
						}
						if(!js.JsXml__.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(js.JsXml__.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = js.JsXml__.eclose.matchedRight();
					}break;
					case 1:{
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					case 2:{
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						else null;
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						else null;
						current = stack.pop();
						str = r.matchedRight();
					}break;
					case 3:{
						str = r.matchedRight();
						if(!js.JsXml__.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(js.JsXml__.ecdata_end.matchedLeft());
						current.addChild(x);
						str = js.JsXml__.ecdata_end.matchedRight();
					}break;
					case 4:{
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!js.JsXml__.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = js.JsXml__.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = js.JsXml__.edoctype_elt.matchedRight();
								switch(js.JsXml__.edoctype_elt.matched(0)) {
								case "[":{
									count++;
								}break;
								case "]":{
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
								}break;
								default:{
									if(count == 0) throw "__break__";
								}break;
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(0,pos));
						current.addChild(x);
					}break;
					case 5:{
						if(!js.JsXml__.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = js.JsXml__.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(0,p.pos + p.len));
						current.addChild(x);
						str = js.JsXml__.ecomment_end.matchedRight();
					}break;
					case 6:{
						var x = Xml.createProlog(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw ("Xml parse error : Unexpected " + str.substr(0,10) + "...");
			else throw ("Xml parse error : Unexpected " + str);
		}
	}
	{
		$s.pop();
		return current;
	}
	$s.pop();
}
js.JsXml__.createElement = function(name) {
	$s.push("js.JsXml__::createElement");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createPCData = function(data) {
	$s.push("js.JsXml__::createPCData");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createCData = function(data) {
	$s.push("js.JsXml__::createCData");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createComment = function(data) {
	$s.push("js.JsXml__::createComment");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createDocType = function(data) {
	$s.push("js.JsXml__::createDocType");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createProlog = function(data) {
	$s.push("js.JsXml__::createProlog");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.createDocument = function() {
	$s.push("js.JsXml__::createDocument");
	var $spos = $s.length;
	var r = new js.JsXml__();
	r.nodeType = Xml.Document;
	r._children = new Array();
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
js.JsXml__.prototype._attributes = null;
js.JsXml__.prototype._children = null;
js.JsXml__.prototype._nodeName = null;
js.JsXml__.prototype._nodeValue = null;
js.JsXml__.prototype._parent = null;
js.JsXml__.prototype.addChild = function(x) {
	$s.push("js.JsXml__::addChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
	$s.pop();
}
js.JsXml__.prototype.attributes = function() {
	$s.push("js.JsXml__::attributes");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.keys();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.elements = function() {
	$s.push("js.JsXml__::elements");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("js.JsXml__::elements@283");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("js.JsXml__::elements@294");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.elementsNamed = function(name) {
	$s.push("js.JsXml__::elementsNamed");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("js.JsXml__::elementsNamed@315");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("js.JsXml__::elementsNamed@327");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k++;
				if(n.nodeType == Xml.Element && n._nodeName == name) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.exists = function(att) {
	$s.push("js.JsXml__::exists");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.exists(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.firstChild = function() {
	$s.push("js.JsXml__::firstChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = this._children[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.firstElement = function() {
	$s.push("js.JsXml__::firstElement");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) {
			$s.pop();
			return n;
		}
		cur++;
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
js.JsXml__.prototype.get = function(att) {
	$s.push("js.JsXml__::get");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.get(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.getNodeName = function() {
	$s.push("js.JsXml__::getNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.getNodeValue = function() {
	$s.push("js.JsXml__::getNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.getParent = function() {
	$s.push("js.JsXml__::getParent");
	var $spos = $s.length;
	{
		var $tmp = this._parent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.insertChild = function(x,pos) {
	$s.push("js.JsXml__::insertChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
	$s.pop();
}
js.JsXml__.prototype.iterator = function() {
	$s.push("js.JsXml__::iterator");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("js.JsXml__::iterator@269");
			var $spos = $s.length;
			{
				var $tmp = this.cur < this.x.length;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("js.JsXml__::iterator@272");
			var $spos = $s.length;
			{
				var $tmp = this.x[this.cur++];
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
js.JsXml__.prototype.nodeName = null;
js.JsXml__.prototype.nodeType = null;
js.JsXml__.prototype.nodeValue = null;
js.JsXml__.prototype.parent = null;
js.JsXml__.prototype.remove = function(att) {
	$s.push("js.JsXml__::remove");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
	$s.pop();
}
js.JsXml__.prototype.removeChild = function(x) {
	$s.push("js.JsXml__::removeChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
js.JsXml__.prototype.set = function(att,value) {
	$s.push("js.JsXml__::set");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
	$s.pop();
}
js.JsXml__.prototype.setNodeName = function(n) {
	$s.push("js.JsXml__::setNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName = n;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.setNodeValue = function(v) {
	$s.push("js.JsXml__::setNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue = v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.toString = function() {
	$s.push("js.JsXml__::toString");
	var $spos = $s.length;
	if(this.nodeType == Xml.PCData) {
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.CData) {
		var $tmp = "<![CDATA[" + this._nodeValue + "]]>";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.Comment || this.nodeType == Xml.DocType || this.nodeType == Xml.Prolog) {
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b += "<";
		s.b += this._nodeName;
		{ var $it1 = this._attributes.keys();
		while( $it1.hasNext() ) { var k = $it1.next();
		{
			s.b += " ";
			s.b += k;
			s.b += "=\"";
			s.b += this._attributes.get(k);
			s.b += "\"";
		}
		}}
		if(this._children.length == 0) {
			s.b += "/>";
			{
				var $tmp = s.b;
				$s.pop();
				return $tmp;
			}
		}
		s.b += ">";
	}
	{ var $it2 = this.iterator();
	while( $it2.hasNext() ) { var x = $it2.next();
	s.b += x.toString();
	}}
	if(this.nodeType == Xml.Element) {
		s.b += "</";
		s.b += this._nodeName;
		s.b += ">";
	}
	{
		var $tmp = s.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.JsXml__.prototype.__class__ = js.JsXml__;
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
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage = function(type) { if( type === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.utilities.pipes.messages.Message.apply(this,[type]);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","messages","QueueControlMessage"];
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.__super__ = org.puremvc.haxe.multicore.utilities.pipes.messages.Message;
for(var k in org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype ) org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.prototype[k] = org.puremvc.haxe.multicore.utilities.pipes.messages.Message.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::new");
	var $spos = $s.length;
	this.inputPipes = new Array();
	this.outputPipes = new Array();
	this.pipesMap = new Hash();
	this.pipeTypesMap = new Hash();
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","Junction"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.addPipeListener = function(inputPipeName,context,listener) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::addPipeListener");
	var $spos = $s.length;
	var success = false;
	if(this.hasInputPipe(inputPipeName)) {
		var pipe = this.pipesMap.get(inputPipeName);
		success = pipe.connect(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(context,listener));
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.hasInputPipe = function(name) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::hasInputPipe");
	var $spos = $s.length;
	{
		var $tmp = (this.hasPipe(name) && (this.pipeTypesMap.get(name) == "input"));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.hasOutputPipe = function(name) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::hasOutputPipe");
	var $spos = $s.length;
	{
		var $tmp = (this.hasPipe(name) && (this.pipeTypesMap.get(name) == "output"));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.hasPipe = function(name) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::hasPipe");
	var $spos = $s.length;
	{
		var $tmp = this.pipesMap.exists(name);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.inputPipes = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.outputPipes = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.pipeTypesMap = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.pipesMap = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.registerPipe = function(name,type,pipe) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::registerPipe");
	var $spos = $s.length;
	var success = true;
	if(!this.pipesMap.exists(name)) {
		this.pipesMap.set(name,pipe);
		this.pipeTypesMap.set(name,type);
		switch(type) {
		case "input":{
			this.inputPipes.push(name);
		}break;
		case "output":{
			this.outputPipes.push(name);
		}break;
		default:{
			success = false;
		}break;
		}
	}
	else {
		success = false;
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.removePipe = function(name) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::removePipe");
	var $spos = $s.length;
	if(this.hasPipe(name)) {
		var type = this.pipeTypesMap.get(name);
		var pipesList = null;
		switch(type) {
		case "input":{
			pipesList = this.inputPipes;
		}break;
		case "output":{
			pipesList = this.outputPipes;
		}break;
		}
		{
			var _g1 = 0, _g = pipesList.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(pipesList[i] == name) {
					pipesList.splice(i,1);
					break;
				}
			}
		}
		this.pipesMap.remove(name);
		this.pipeTypesMap.remove(name);
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.retrievePipe = function(name) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::retrievePipe");
	var $spos = $s.length;
	{
		var $tmp = this.pipesMap.get(name);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.sendMessage = function(outputPipeName,message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction::sendMessage");
	var $spos = $s.length;
	var success = false;
	if(this.hasOutputPipe(outputPipeName)) {
		var pipe = this.pipesMap.get(outputPipeName);
		success = pipe.write(message);
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction;
PureMVCPipesTestRunner = function() { }
PureMVCPipesTestRunner.__name__ = ["PureMVCPipesTestRunner"];
PureMVCPipesTestRunner.main = function() {
	$s.push("PureMVCPipesTestRunner::main");
	var $spos = $s.length;
	var tr = new haxe.unit.TestRunner();
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest());
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest());
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest());
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest());
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest());
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest());
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest());
	tr.add(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest());
	tr.run();
	$s.pop();
}
PureMVCPipesTestRunner.prototype.__class__ = PureMVCPipesTestRunner;
haxe.unit = {}
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
	{ var $it3 = this.m_tests.iterator();
	while( $it3.hasNext() ) { var test = $it3.next();
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
	{ var $it4 = arr.iterator();
	while( $it4.hasNext() ) { var t = $it4.next();
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
	catch( $e5 ) {
		{
			var e = $e5;
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
		catch( $e6 ) {
			{
				var e = $e6;
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
haxe.Public = function() { }
haxe.Public.__name__ = ["haxe","Public"];
haxe.Public.prototype.__class__ = haxe.Public;
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
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	this.messagesReceived = new Array();
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","JunctionTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype.callBackMethod = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest::callBackMethod");
	var $spos = $s.length;
	this.messagesReceived.push(message);
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype.messagesReceived = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype.testAddingPipeListenerToAnInputPipe = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest::testAddingPipeListenerToAnInputPipe");
	var $spos = $s.length;
	var pipe = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var junction = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction();
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testVal : 1});
	var registered = junction.registerPipe("testInputPipe","input",pipe);
	var listenerAdded = junction.addPipeListener("testInputPipe",this,$closure(this,"callBackMethod"));
	var sent = pipe.write(message);
	this.assertTrue(Std["is"](pipe,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "JunctionTest.hx", lineNumber : 138, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testAddingPipeListenerToAnInputPipe"});
	this.assertTrue(Std["is"](junction,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction),{ fileName : "JunctionTest.hx", lineNumber : 139, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testAddingPipeListenerToAnInputPipe"});
	this.assertTrue(registered,{ fileName : "JunctionTest.hx", lineNumber : 140, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testAddingPipeListenerToAnInputPipe"});
	this.assertTrue(listenerAdded,{ fileName : "JunctionTest.hx", lineNumber : 141, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testAddingPipeListenerToAnInputPipe"});
	this.assertTrue(sent,{ fileName : "JunctionTest.hx", lineNumber : 142, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testAddingPipeListenerToAnInputPipe"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "JunctionTest.hx", lineNumber : 143, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testAddingPipeListenerToAnInputPipe"});
	this.assertTrue(this.messagesReceived.pop() == message,{ fileName : "JunctionTest.hx", lineNumber : 144, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testAddingPipeListenerToAnInputPipe"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype.testRegisterRetrieveAndRemoveInputPipe = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest::testRegisterRetrieveAndRemoveInputPipe");
	var $spos = $s.length;
	var pipe = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var junction = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction();
	var registered = junction.registerPipe("testInputPipe","input",pipe);
	this.assertTrue(Std["is"](pipe,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "JunctionTest.hx", lineNumber : 50, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	this.assertTrue(Std["is"](junction,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction),{ fileName : "JunctionTest.hx", lineNumber : 51, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	this.assertTrue(registered,{ fileName : "JunctionTest.hx", lineNumber : 52, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	this.assertTrue(junction.hasPipe("testInputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 55, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	this.assertTrue(junction.hasInputPipe("testInputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 56, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	this.assertTrue(junction.retrievePipe("testInputPipe") == pipe,{ fileName : "JunctionTest.hx", lineNumber : 57, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	junction.removePipe("testInputPipe");
	this.assertFalse(junction.hasPipe("testInputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 62, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	this.assertFalse(junction.hasInputPipe("testInputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 63, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	this.assertFalse(junction.retrievePipe("testInputPipe") == pipe,{ fileName : "JunctionTest.hx", lineNumber : 64, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveInputPipe"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype.testRegisterRetrieveAndRemoveOutputPipe = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest::testRegisterRetrieveAndRemoveOutputPipe");
	var $spos = $s.length;
	var pipe = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var junction = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction();
	var registered = junction.registerPipe("testOutputPipe","output",pipe);
	this.assertTrue(Std["is"](pipe,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "JunctionTest.hx", lineNumber : 90, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	this.assertTrue(Std["is"](junction,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction),{ fileName : "JunctionTest.hx", lineNumber : 91, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	this.assertTrue(registered,{ fileName : "JunctionTest.hx", lineNumber : 92, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	this.assertTrue(junction.hasPipe("testOutputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 95, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	this.assertTrue(junction.hasOutputPipe("testOutputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 96, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	this.assertTrue(junction.retrievePipe("testOutputPipe") == pipe,{ fileName : "JunctionTest.hx", lineNumber : 97, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	junction.removePipe("testOutputPipe");
	this.assertFalse(junction.hasPipe("testOutputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 102, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	this.assertFalse(junction.hasOutputPipe("testOutputPipe"),{ fileName : "JunctionTest.hx", lineNumber : 103, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	this.assertFalse(junction.retrievePipe("testOutputPipe") == pipe,{ fileName : "JunctionTest.hx", lineNumber : 104, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testRegisterRetrieveAndRemoveOutputPipe"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype.testSendMessageOnAnOutputPipe = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest::testSendMessageOnAnOutputPipe");
	var $spos = $s.length;
	var pipe = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var listenerAdded = pipe.connect(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")));
	var junction = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction();
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testVal : 1});
	var registered = junction.registerPipe("testOutputPipe","output",pipe);
	var sent = junction.sendMessage("testOutputPipe",message);
	this.assertTrue(Std["is"](pipe,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "JunctionTest.hx", lineNumber : 178, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testSendMessageOnAnOutputPipe"});
	this.assertTrue(Std["is"](junction,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction),{ fileName : "JunctionTest.hx", lineNumber : 179, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testSendMessageOnAnOutputPipe"});
	this.assertTrue(registered,{ fileName : "JunctionTest.hx", lineNumber : 180, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testSendMessageOnAnOutputPipe"});
	this.assertTrue(listenerAdded,{ fileName : "JunctionTest.hx", lineNumber : 181, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testSendMessageOnAnOutputPipe"});
	this.assertTrue(sent,{ fileName : "JunctionTest.hx", lineNumber : 182, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testSendMessageOnAnOutputPipe"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "JunctionTest.hx", lineNumber : 183, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testSendMessageOnAnOutputPipe"});
	this.assertTrue(this.messagesReceived.pop() == message,{ fileName : "JunctionTest.hx", lineNumber : 184, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest", methodName : "testSendMessageOnAnOutputPipe"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.JunctionTest;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit = function(output1,output2) { if( output1 === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit::new");
	var $spos = $s.length;
	this.outputs = new Array();
	if(output1 != null) this.connect(output1);
	if(output2 != null) this.connect(output2);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","TeeSplit"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit.prototype.connect = function(output) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit::connect");
	var $spos = $s.length;
	this.outputs.push(output);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit.prototype.disconnect = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit::disconnect");
	var $spos = $s.length;
	{
		var $tmp = this.outputs.pop();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit.prototype.outputs = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit.prototype.write = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit::write");
	var $spos = $s.length;
	var success = true;
	{
		var _g1 = 0, _g = this.outputs.length;
		while(_g1 < _g) {
			var i = _g1++;
			var output = this.outputs[i];
			if(!output.write(message)) success = false;
		}
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit.__interfaces__ = [org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeFitting];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	this.messagesReceived = new Array();
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","QueueTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.prototype.callBackMethod = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest::callBackMethod");
	var $spos = $s.length;
	this.messagesReceived.push(message);
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.prototype.messagesReceived = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.prototype.testConnectingIOPipes = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest::testConnectingIOPipes");
	var $spos = $s.length;
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var queue = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue();
	var connectedInput = pipe1.connect(queue);
	var connectedOutput = queue.connect(pipe2);
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "QueueTest.hx", lineNumber : 47, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "QueueTest.hx", lineNumber : 48, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(Std["is"](queue,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue),{ fileName : "QueueTest.hx", lineNumber : 49, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(connectedInput,{ fileName : "QueueTest.hx", lineNumber : 50, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(connectedOutput,{ fileName : "QueueTest.hx", lineNumber : 51, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testConnectingIOPipes"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.prototype.testSortByPriorityAndFIFO = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest::testSortByPriorityAndFIFO");
	var $spos = $s.length;
	var message1 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",null,null,5);
	var message2 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",null,null,10);
	var message3 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",null,null,1);
	var queue = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")));
	var sortWritten = queue.write(new org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "sort"));
	var message1written = queue.write(message1);
	var message2written = queue.write(message2);
	var message3written = queue.write(message3);
	var flushWritten = queue.write(new org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "flush"));
	this.assertTrue(sortWritten,{ fileName : "QueueTest.hx", lineNumber : 159, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(message1written,{ fileName : "QueueTest.hx", lineNumber : 160, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(message2written,{ fileName : "QueueTest.hx", lineNumber : 161, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(message3written,{ fileName : "QueueTest.hx", lineNumber : 162, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(flushWritten,{ fileName : "QueueTest.hx", lineNumber : 163, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertEquals(this.messagesReceived.length,3,{ fileName : "QueueTest.hx", lineNumber : 166, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	var recieved1 = this.messagesReceived.shift();
	var recieved2 = this.messagesReceived.shift();
	var recieved3 = this.messagesReceived.shift();
	this.assertTrue(recieved1.getPriority() < recieved2.getPriority(),{ fileName : "QueueTest.hx", lineNumber : 174, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(recieved2.getPriority() < recieved3.getPriority(),{ fileName : "QueueTest.hx", lineNumber : 175, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(recieved1 == message3,{ fileName : "QueueTest.hx", lineNumber : 176, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(recieved2 == message1,{ fileName : "QueueTest.hx", lineNumber : 177, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(recieved3 == message2,{ fileName : "QueueTest.hx", lineNumber : 178, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	var fifoWritten = queue.write(new org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "fifo"));
	var message1writtenAgain = queue.write(message1);
	var message2writtenAgain = queue.write(message2);
	var message3writtenAgain = queue.write(message3);
	var flushWrittenAgain = queue.write(new org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "flush"));
	this.assertTrue(fifoWritten,{ fileName : "QueueTest.hx", lineNumber : 192, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(message1writtenAgain,{ fileName : "QueueTest.hx", lineNumber : 193, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(message2writtenAgain,{ fileName : "QueueTest.hx", lineNumber : 194, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(message3writtenAgain,{ fileName : "QueueTest.hx", lineNumber : 195, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(flushWrittenAgain,{ fileName : "QueueTest.hx", lineNumber : 196, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertEquals(this.messagesReceived.length,3,{ fileName : "QueueTest.hx", lineNumber : 199, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	var recieved1Again = this.messagesReceived.shift();
	var recieved2Again = this.messagesReceived.shift();
	var recieved3Again = this.messagesReceived.shift();
	this.assertTrue(recieved1Again == message1,{ fileName : "QueueTest.hx", lineNumber : 207, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(recieved2Again == message2,{ fileName : "QueueTest.hx", lineNumber : 208, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertTrue(recieved3Again == message3,{ fileName : "QueueTest.hx", lineNumber : 209, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertEquals(recieved1Again.getPriority(),5,{ fileName : "QueueTest.hx", lineNumber : 210, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertEquals(recieved2Again.getPriority(),10,{ fileName : "QueueTest.hx", lineNumber : 211, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	this.assertEquals(recieved3Again.getPriority(),1,{ fileName : "QueueTest.hx", lineNumber : 212, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testSortByPriorityAndFIFO"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.prototype.testWritingMultipleMessagesAndFlush = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest::testWritingMultipleMessagesAndFlush");
	var $spos = $s.length;
	var message1 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 1});
	var message2 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 2});
	var message3 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 3});
	var flush = new org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "flush");
	var queue = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")));
	var message1written = queue.write(message1);
	var message2written = queue.write(message2);
	var message3written = queue.write(message3);
	this.assertTrue(Std["is"](message1,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "QueueTest.hx", lineNumber : 83, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(Std["is"](message2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "QueueTest.hx", lineNumber : 84, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(Std["is"](message3,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "QueueTest.hx", lineNumber : 85, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(Std["is"](flush,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "QueueTest.hx", lineNumber : 86, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(Std["is"](queue,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue),{ fileName : "QueueTest.hx", lineNumber : 87, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(message1written,{ fileName : "QueueTest.hx", lineNumber : 89, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(message2written,{ fileName : "QueueTest.hx", lineNumber : 90, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(message3written,{ fileName : "QueueTest.hx", lineNumber : 91, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertEquals(this.messagesReceived.length,0,{ fileName : "QueueTest.hx", lineNumber : 94, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	var flushWritten = queue.write(flush);
	this.assertEquals(this.messagesReceived.length,3,{ fileName : "QueueTest.hx", lineNumber : 101, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	var recieved1 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved1,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "QueueTest.hx", lineNumber : 106, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(recieved1 == message1,{ fileName : "QueueTest.hx", lineNumber : 107, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	var recieved2 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "QueueTest.hx", lineNumber : 112, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(recieved2 == message2,{ fileName : "QueueTest.hx", lineNumber : 113, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	var recieved3 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved3,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "QueueTest.hx", lineNumber : 118, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	this.assertTrue(recieved3 == message3,{ fileName : "QueueTest.hx", lineNumber : 119, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest", methodName : "testWritingMultipleMessagesAndFlush"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.QueueTest;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	this.messagesReceived = new Array();
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","FilterTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.callBackMethod = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::callBackMethod");
	var $spos = $s.length;
	this.messagesReceived.push(message);
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.messagesReceived = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.testBypassAndFilterModeToggle = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testBypassAndFilterModeToggle");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ width : 10, height : 2});
	var filter = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter("scale",new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")),function(message1,params) {
		$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testBypassAndFilterModeToggle@104");
		var $spos = $s.length;
		message1.getHeader().width *= params.factor;
		message1.getHeader().height *= params.factor;
		$s.pop();
	},{ factor : 10});
	var bypassMessage = new org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "bypass","scale");
	var bypassWritten = filter.write(bypassMessage);
	var written1 = filter.write(message);
	this.assertTrue(Std["is"](message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 118, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertTrue(Std["is"](filter,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter),{ fileName : "FilterTest.hx", lineNumber : 119, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertTrue(bypassWritten,{ fileName : "FilterTest.hx", lineNumber : 120, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertTrue(written1,{ fileName : "FilterTest.hx", lineNumber : 121, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "FilterTest.hx", lineNumber : 122, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	var recieved1 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved1,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 126, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertTrue(recieved1 == message,{ fileName : "FilterTest.hx", lineNumber : 127, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertEquals(recieved1.getHeader().width,10,{ fileName : "FilterTest.hx", lineNumber : 128, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertEquals(recieved1.getHeader().height,2,{ fileName : "FilterTest.hx", lineNumber : 129, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	var filterMessage = new org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "filter","scale");
	var filterWritten = filter.write(filterMessage);
	var written2 = filter.write(message);
	this.assertTrue(bypassWritten,{ fileName : "FilterTest.hx", lineNumber : 141, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertTrue(written1,{ fileName : "FilterTest.hx", lineNumber : 142, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "FilterTest.hx", lineNumber : 143, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	var recieved2 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 147, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertTrue(recieved2 == message,{ fileName : "FilterTest.hx", lineNumber : 148, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertEquals(recieved2.getHeader().width,100,{ fileName : "FilterTest.hx", lineNumber : 149, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	this.assertEquals(recieved2.getHeader().height,20,{ fileName : "FilterTest.hx", lineNumber : 150, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testBypassAndFilterModeToggle"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.testConnectingAndDisconnectingIOPipes = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testConnectingAndDisconnectingIOPipes");
	var $spos = $s.length;
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var filter = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter("TestFilter");
	var connectedInput = pipe1.connect(filter);
	var connectedOutput = filter.connect(pipe2);
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "FilterTest.hx", lineNumber : 47, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "FilterTest.hx", lineNumber : 48, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(Std["is"](filter,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter),{ fileName : "FilterTest.hx", lineNumber : 49, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(connectedInput,{ fileName : "FilterTest.hx", lineNumber : 50, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(connectedOutput,{ fileName : "FilterTest.hx", lineNumber : 51, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	var disconnectedPipe = filter.disconnect();
	this.assertTrue(disconnectedPipe == pipe2,{ fileName : "FilterTest.hx", lineNumber : 55, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.testFilteringNormalMessage = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testFilteringNormalMessage");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ width : 10, height : 2});
	var filter = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter("scale",new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")),function(message1,params) {
		$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testFilteringNormalMessage@71");
		var $spos = $s.length;
		message1.getHeader().width *= params.factor;
		message1.getHeader().height *= params.factor;
		$s.pop();
	},{ factor : 10});
	var written = filter.write(message);
	this.assertTrue(Std["is"](message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 79, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	this.assertTrue(Std["is"](filter,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter),{ fileName : "FilterTest.hx", lineNumber : 80, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	this.assertTrue(written,{ fileName : "FilterTest.hx", lineNumber : 81, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "FilterTest.hx", lineNumber : 82, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	var recieved = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 86, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	this.assertTrue(recieved == message,{ fileName : "FilterTest.hx", lineNumber : 87, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	this.assertEquals(recieved.getHeader().width,100,{ fileName : "FilterTest.hx", lineNumber : 88, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	this.assertEquals(recieved.getHeader().height,20,{ fileName : "FilterTest.hx", lineNumber : 89, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testFilteringNormalMessage"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.testSetFilterByControlMessage = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testSetFilterByControlMessage");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ width : 10, height : 2});
	var filter = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter("scale",new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")),function(message1,params) {
		$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testSetFilterByControlMessage@206");
		var $spos = $s.length;
		message1.getHeader().width *= params.factor;
		message1.getHeader().height *= params.factor;
		$s.pop();
	},{ factor : 10});
	var setFilterMessage = new org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "setfilter","scale",function(message1,params) {
		$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testSetFilterByControlMessage@211");
		var $spos = $s.length;
		message1.getHeader().width /= params.factor;
		message1.getHeader().height /= params.factor;
		$s.pop();
	});
	var setFilterWritten = filter.write(setFilterMessage);
	var written = filter.write(message);
	this.assertTrue(Std["is"](message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 220, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	this.assertTrue(Std["is"](filter,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter),{ fileName : "FilterTest.hx", lineNumber : 221, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	this.assertTrue(setFilterWritten,{ fileName : "FilterTest.hx", lineNumber : 222, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	this.assertTrue(written,{ fileName : "FilterTest.hx", lineNumber : 223, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "FilterTest.hx", lineNumber : 224, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	var recieved = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 228, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	this.assertTrue(recieved == message,{ fileName : "FilterTest.hx", lineNumber : 229, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	this.assertEquals(recieved.getHeader().width,1,{ fileName : "FilterTest.hx", lineNumber : 230, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	this.assertEquals(recieved.getHeader().height,.2,{ fileName : "FilterTest.hx", lineNumber : 231, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetFilterByControlMessage"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.testSetParamsByControlMessage = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testSetParamsByControlMessage");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ width : 10, height : 2});
	var filter = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter("scale",new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")),function(message1,params) {
		$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testSetParamsByControlMessage@165");
		var $spos = $s.length;
		message1.getHeader().width *= params.factor;
		message1.getHeader().height *= params.factor;
		$s.pop();
	},{ factor : 10});
	var setParamsMessage = new org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage("http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "setparams","scale",null,{ factor : 5});
	var setParamsWritten = filter.write(setParamsMessage);
	var written = filter.write(message);
	this.assertTrue(Std["is"](message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 179, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	this.assertTrue(Std["is"](filter,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter),{ fileName : "FilterTest.hx", lineNumber : 180, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	this.assertTrue(setParamsWritten,{ fileName : "FilterTest.hx", lineNumber : 181, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	this.assertTrue(written,{ fileName : "FilterTest.hx", lineNumber : 182, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "FilterTest.hx", lineNumber : 183, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	var recieved = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 187, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	this.assertTrue(recieved == message,{ fileName : "FilterTest.hx", lineNumber : 188, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	this.assertEquals(recieved.getHeader().width,50,{ fileName : "FilterTest.hx", lineNumber : 189, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	this.assertEquals(recieved.getHeader().height,10,{ fileName : "FilterTest.hx", lineNumber : 190, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testSetParamsByControlMessage"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.testUseFilterToStopAMessage = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testUseFilterToStopAMessage");
	var $spos = $s.length;
	var message1 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ bozoLevel : 10, user : "Dastardly Dan"});
	var message2 = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ bozoLevel : 3, user : "Dudley Doright"});
	var filter = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter("bozoFilter",new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")),function(message,params) {
		$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest::testUseFilterToStopAMessage@264");
		var $spos = $s.length;
		if(message.getHeader().bozoLevel > params.bozoThreshold) throw "bozoFiltered";
		$s.pop();
	},{ bozoThreshold : 5});
	var written1 = filter.write(message1);
	var written2 = filter.write(message2);
	this.assertTrue(Std["is"](message1,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 273, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	this.assertTrue(Std["is"](message2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 274, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	this.assertTrue(Std["is"](filter,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter),{ fileName : "FilterTest.hx", lineNumber : 275, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	this.assertFalse(written1,{ fileName : "FilterTest.hx", lineNumber : 276, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	this.assertTrue(written2,{ fileName : "FilterTest.hx", lineNumber : 277, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	this.assertEquals(this.messagesReceived.length,1,{ fileName : "FilterTest.hx", lineNumber : 278, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	var recieved = this.messagesReceived.shift();
	this.assertTrue(Std["is"](recieved,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "FilterTest.hx", lineNumber : 282, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	this.assertTrue(recieved == message2,{ fileName : "FilterTest.hx", lineNumber : 283, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest", methodName : "testUseFilterToStopAMessage"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.FilterTest;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","PipeTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest.prototype.testConnectingAndDisconnectingTwoPipes = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest::testConnectingAndDisconnectingTwoPipes");
	var $spos = $s.length;
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var success = pipe1.connect(pipe2);
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "PipeTest.hx", lineNumber : 39, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest", methodName : "testConnectingAndDisconnectingTwoPipes"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "PipeTest.hx", lineNumber : 40, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest", methodName : "testConnectingAndDisconnectingTwoPipes"});
	this.assertTrue(success,{ fileName : "PipeTest.hx", lineNumber : 41, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest", methodName : "testConnectingAndDisconnectingTwoPipes"});
	var disconnectedPipe = pipe1.disconnect();
	this.assertTrue(disconnectedPipe == pipe2,{ fileName : "PipeTest.hx", lineNumber : 45, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest", methodName : "testConnectingAndDisconnectingTwoPipes"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest.prototype.testConnectingToAConnectedPipe = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest::testConnectingToAConnectedPipe");
	var $spos = $s.length;
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe3 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var success = pipe1.connect(pipe2);
	this.assertTrue(success,{ fileName : "PipeTest.hx", lineNumber : 63, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest", methodName : "testConnectingToAConnectedPipe"});
	this.assertFalse(pipe1.connect(pipe3),{ fileName : "PipeTest.hx", lineNumber : 64, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest", methodName : "testConnectingToAConnectedPipe"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest.prototype.testConstructor = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest::testConstructor");
	var $spos = $s.length;
	var pipe = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	this.assertTrue(Std["is"](pipe,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "PipeTest.hx", lineNumber : 24, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest", methodName : "testConstructor"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeTest;
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
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue = function(output) { if( output === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.apply(this,[output]);
	this.mode = "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "sort";
	this.messages = new Array();
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","Queue"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.__super__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe;
for(var k in org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype[k] = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype.flush = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue::flush");
	var $spos = $s.length;
	var success = true;
	var message = this.messages.shift();
	while(message != null) {
		var ok = this.output.write(message);
		if(!ok) success = false;
		message = this.messages.shift();
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype.messages = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype.mode = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype.sortMessagesByPriority = function(msgA,msgB) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue::sortMessagesByPriority");
	var $spos = $s.length;
	var num = 0;
	if(msgA.getPriority() < msgB.getPriority()) num = -1;
	if(msgA.getPriority() > msgB.getPriority()) num = 1;
	{
		$s.pop();
		return num;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype.store = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue::store");
	var $spos = $s.length;
	this.messages.push(message);
	if(this.mode == "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "sort") this.messages.sort($closure(this,"sortMessagesByPriority"));
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype.write = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue::write");
	var $spos = $s.length;
	var success = true;
	switch(message.getType()) {
	case "http://puremvc.org/namespaces/pipes/messages/" + "normal/":{
		this.store(message);
	}break;
	case "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "flush":{
		success = this.flush();
	}break;
	case "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "sort":{
		this.mode = message.getType();
	}break;
	case "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "fifo":{
		this.mode = message.getType();
	}break;
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Queue;
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
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","PipeListenerTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.prototype.callBackMethod = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest::callBackMethod");
	var $spos = $s.length;
	this.messageReceived = message;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.prototype.messageReceived = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.prototype.testConnectingToAPipe = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest::testConnectingToAPipe");
	var $spos = $s.length;
	var pipe = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var listener = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod"));
	var success = pipe.connect(listener);
	this.assertTrue(Std["is"](pipe,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "PipeListenerTest.hx", lineNumber : 31, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testConnectingToAPipe"});
	this.assertTrue(success,{ fileName : "PipeListenerTest.hx", lineNumber : 32, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testConnectingToAPipe"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.prototype.testReceiveMessageViaPipeListener = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest::testReceiveMessageViaPipeListener");
	var $spos = $s.length;
	var messageToSend = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : "testval"},Xml.parse("<testMessage testAtt='Hello'/>"),1);
	var pipe = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var listener = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod"));
	var connected = pipe.connect(listener);
	var written = pipe.write(messageToSend);
	this.assertTrue(Std["is"](pipe,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "PipeListenerTest.hx", lineNumber : 54, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	this.assertTrue(connected,{ fileName : "PipeListenerTest.hx", lineNumber : 55, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	this.assertTrue(written,{ fileName : "PipeListenerTest.hx", lineNumber : 56, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	this.assertTrue(Std["is"](this.messageReceived,org.puremvc.haxe.multicore.utilities.pipes.messages.Message),{ fileName : "PipeListenerTest.hx", lineNumber : 57, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	this.assertEquals(this.messageReceived.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "PipeListenerTest.hx", lineNumber : 58, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	this.assertEquals(this.messageReceived.getHeader().testProp,"testval",{ fileName : "PipeListenerTest.hx", lineNumber : 59, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	this.assertEquals(function($this) {
		var $r;
		var tmp = $this.messageReceived.getBody();
		$r = (Std["is"](tmp,Xml)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).firstElement().get("testAtt"),"Hello",{ fileName : "PipeListenerTest.hx", lineNumber : 60, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	this.assertEquals(this.messageReceived.getPriority(),1,{ fileName : "PipeListenerTest.hx", lineNumber : 61, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest", methodName : "testReceiveMessageViaPipeListener"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListenerTest;
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
	{ var $it7 = this.cases.iterator();
	while( $it7.hasNext() ) { var c = $it7.next();
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
				catch( $e8 ) {
					if( js.Boot.__instanceof($e8,haxe.unit.TestStatus) ) {
						var e = $e8;
						{
							$e = [];
							while($s.length >= $spos) $e.unshift($s.pop());
							$s.push($e[0]);
							haxe.unit.TestRunner.print("F");
							t.currentTest.backtrace = haxe.Stack.toString(haxe.Stack.exceptionStack());
						}
					} else {
						var e = $e8;
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
	catch( $e9 ) {
		{
			var e = $e9;
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
	catch( $e10 ) {
		{
			var err = $e10;
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
		catch( $e11 ) {
			{
				var e = $e11;
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
	catch( $e12 ) {
		{
			var e = $e12;
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
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter = function(name,output,filter,params) { if( name === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter::new");
	var $spos = $s.length;
	org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.apply(this,[output]);
	this.name = name;
	if(filter != null) this.setFilter(filter);
	if(params != null) this.setParams(params);
	this.mode = "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "filter";
	filter = function(message,params1) {
		$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter::new@36");
		var $spos = $s.length;
		{
			$s.pop();
			return;
		}
		$s.pop();
	}
	params = { }
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","Filter"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.__super__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe;
for(var k in org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype[k] = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.applyFilter = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter::applyFilter");
	var $spos = $s.length;
	this.filter(message,this.params);
	{
		$s.pop();
		return message;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.filter = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.isTarget = function(m) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter::isTarget");
	var $spos = $s.length;
	var res = function($this) {
		var $r;
		var tmp = m;
		$r = (Std["is"](tmp,org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).getName() == this.name;
	{
		$s.pop();
		return res;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.mode = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.name = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.params = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.setFilter = function(filter) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter::setFilter");
	var $spos = $s.length;
	this.filter = filter;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.setParams = function(params) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter::setParams");
	var $spos = $s.length;
	this.params = params;
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.write = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter::write");
	var $spos = $s.length;
	var outputMessage = null;
	var success = true;
	switch(message.getType()) {
	case "http://puremvc.org/namespaces/pipes/messages/" + "normal/":{
		try {
			if(this.mode == "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "filter") {
				outputMessage = this.applyFilter(message);
			}
			else {
				outputMessage = message;
			}
			success = this.output.write(outputMessage);
		}
		catch( $e13 ) {
			{
				var e = $e13;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					success = false;
				}
			}
		}
	}break;
	case "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "setparams":{
		if(this.isTarget(message)) {
			this.setParams(function($this) {
				var $r;
				var tmp = message;
				$r = (Std["is"](tmp,org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage)?tmp:function($this) {
					var $r;
					throw "Class cast error";
					return $r;
				}($this));
				return $r;
			}(this).getParams());
		}
		else {
			success = this.output.write(outputMessage);
		}
	}break;
	case "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "setfilter":{
		if(this.isTarget(message)) {
			this.setFilter(function($this) {
				var $r;
				var tmp = message;
				$r = (Std["is"](tmp,org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage)?tmp:function($this) {
					var $r;
					throw "Class cast error";
					return $r;
				}($this));
				return $r;
			}(this).getFilter());
		}
		else {
			success = this.output.write(outputMessage);
		}
	}break;
	case "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "bypass":{
		if(this.isTarget(message)) {
			this.mode = function($this) {
				var $r;
				var tmp = message;
				$r = (Std["is"](tmp,org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage)?tmp:function($this) {
					var $r;
					throw "Class cast error";
					return $r;
				}($this));
				return $r;
			}(this).getType();
		}
		else {
			success = this.output.write(outputMessage);
		}
	}break;
	case "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "filter":{
		if(this.isTarget(message)) {
			this.mode = function($this) {
				var $r;
				var tmp = message;
				$r = (Std["is"](tmp,org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage)?tmp:function($this) {
					var $r;
					throw "Class cast error";
					return $r;
				}($this));
				return $r;
			}(this).getType();
		}
		else {
			success = this.output.write(outputMessage);
		}
	}break;
	default:{
		success = this.output.write(outputMessage);
	}break;
	}
	{
		$s.pop();
		return success;
	}
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.Filter;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	this.messagesReceived = new Array();
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","TeeMergeTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.prototype.callBackMethod = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest::callBackMethod");
	var $spos = $s.length;
	this.messagesReceived.push(message);
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.prototype.messagesReceived = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.prototype.testConnectingIOPipes = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest::testConnectingIOPipes");
	var $spos = $s.length;
	var output1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe3 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe4 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var teeMerge = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge(pipe1,pipe2);
	var connectedExtra1 = teeMerge.connectInput(pipe3);
	var connectedExtra2 = teeMerge.connectInput(pipe4);
	var connected = output1.connect(teeMerge);
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 51, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 52, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(Std["is"](pipe3,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 53, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(Std["is"](pipe4,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 54, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(Std["is"](teeMerge,org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge),{ fileName : "TeeMergeTest.hx", lineNumber : 55, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(connectedExtra1,{ fileName : "TeeMergeTest.hx", lineNumber : 56, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testConnectingIOPipes"});
	this.assertTrue(connectedExtra2,{ fileName : "TeeMergeTest.hx", lineNumber : 57, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testConnectingIOPipes"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.prototype.testReceiveMessagesFromFourPipesViaTeeMerge = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest::testReceiveMessagesFromFourPipesViaTeeMerge");
	var $spos = $s.length;
	var pipe1Message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 1});
	var pipe2Message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 2});
	var pipe3Message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 3});
	var pipe4Message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 4});
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe3 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe4 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var teeMerge = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge(pipe1,pipe2);
	var connectedExtraInput3 = teeMerge.connectInput(pipe3);
	var connectedExtraInput4 = teeMerge.connectInput(pipe4);
	var listener = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod"));
	var connected = teeMerge.connect(listener);
	var pipe1written = pipe1.write(pipe1Message);
	var pipe2written = pipe2.write(pipe2Message);
	var pipe3written = pipe3.write(pipe3Message);
	var pipe4written = pipe4.write(pipe4Message);
	this.assertTrue(Std["is"](pipe1Message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 164, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe2Message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 165, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe3Message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 166, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe4Message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 167, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 168, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 169, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe3,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 170, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe4,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 171, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](teeMerge,org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge),{ fileName : "TeeMergeTest.hx", lineNumber : 172, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(Std["is"](listener,org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener),{ fileName : "TeeMergeTest.hx", lineNumber : 173, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(connected,{ fileName : "TeeMergeTest.hx", lineNumber : 174, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(connectedExtraInput3,{ fileName : "TeeMergeTest.hx", lineNumber : 175, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(connectedExtraInput4,{ fileName : "TeeMergeTest.hx", lineNumber : 176, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(pipe1written,{ fileName : "TeeMergeTest.hx", lineNumber : 177, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(pipe2written,{ fileName : "TeeMergeTest.hx", lineNumber : 178, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(pipe3written,{ fileName : "TeeMergeTest.hx", lineNumber : 179, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(pipe4written,{ fileName : "TeeMergeTest.hx", lineNumber : 180, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(this.messagesReceived.length,4,{ fileName : "TeeMergeTest.hx", lineNumber : 184, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	var message1 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message1,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 189, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(message1 == pipe1Message,{ fileName : "TeeMergeTest.hx", lineNumber : 190, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message1.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "TeeMergeTest.hx", lineNumber : 191, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message1.getHeader().testProp,1,{ fileName : "TeeMergeTest.hx", lineNumber : 192, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	var message2 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 197, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(message2 == pipe2Message,{ fileName : "TeeMergeTest.hx", lineNumber : 198, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message2.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "TeeMergeTest.hx", lineNumber : 199, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message2.getHeader().testProp,2,{ fileName : "TeeMergeTest.hx", lineNumber : 200, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	var message3 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message3,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 205, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(message3 == pipe3Message,{ fileName : "TeeMergeTest.hx", lineNumber : 206, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message3.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "TeeMergeTest.hx", lineNumber : 207, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message3.getHeader().testProp,3,{ fileName : "TeeMergeTest.hx", lineNumber : 208, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	var message4 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 213, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertTrue(message4 == pipe4Message,{ fileName : "TeeMergeTest.hx", lineNumber : 214, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message4.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "TeeMergeTest.hx", lineNumber : 215, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	this.assertEquals(message4.getHeader().testProp,4,{ fileName : "TeeMergeTest.hx", lineNumber : 216, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromFourPipesViaTeeMerge"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.prototype.testReceiveMessagesFromTwoPipesViaTeeMerge = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest::testReceiveMessagesFromTwoPipesViaTeeMerge");
	var $spos = $s.length;
	var pipe1Message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 1},Xml.parse("<testMessage testAtt='Pipe 1 Message'/>"),10);
	var pipe2Message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 2},Xml.parse("<testMessage testAtt='Pipe 2 Message'/>"),1);
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var teeMerge = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge(pipe1,pipe2);
	var listener = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod"));
	var connected = teeMerge.connect(listener);
	var pipe1written = pipe1.write(pipe1Message);
	var pipe2written = pipe2.write(pipe2Message);
	this.assertTrue(Std["is"](pipe1Message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 93, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe2Message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 94, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 95, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeMergeTest.hx", lineNumber : 96, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(Std["is"](teeMerge,org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMerge),{ fileName : "TeeMergeTest.hx", lineNumber : 97, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(Std["is"](listener,org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener),{ fileName : "TeeMergeTest.hx", lineNumber : 98, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(connected,{ fileName : "TeeMergeTest.hx", lineNumber : 99, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(pipe1written,{ fileName : "TeeMergeTest.hx", lineNumber : 100, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(pipe2written,{ fileName : "TeeMergeTest.hx", lineNumber : 101, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(this.messagesReceived.length,2,{ fileName : "TeeMergeTest.hx", lineNumber : 105, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	var message1 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message1,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 110, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(message1 == pipe1Message,{ fileName : "TeeMergeTest.hx", lineNumber : 111, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(message1.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "TeeMergeTest.hx", lineNumber : 112, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(message1.getHeader().testProp,1,{ fileName : "TeeMergeTest.hx", lineNumber : 113, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(function($this) {
		var $r;
		var tmp = message1.getBody();
		$r = (Std["is"](tmp,Xml)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).firstElement().get("testAtt"),"Pipe 1 Message",{ fileName : "TeeMergeTest.hx", lineNumber : 114, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(message1.getPriority(),10,{ fileName : "TeeMergeTest.hx", lineNumber : 115, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	var message2 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeMergeTest.hx", lineNumber : 120, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertTrue(message2 == pipe2Message,{ fileName : "TeeMergeTest.hx", lineNumber : 121, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(message2.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "TeeMergeTest.hx", lineNumber : 122, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(message2.getHeader().testProp,2,{ fileName : "TeeMergeTest.hx", lineNumber : 123, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(function($this) {
		var $r;
		var tmp = message2.getBody();
		$r = (Std["is"](tmp,Xml)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).firstElement().get("testAtt"),"Pipe 2 Message",{ fileName : "TeeMergeTest.hx", lineNumber : 124, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	this.assertEquals(message2.getPriority(),1,{ fileName : "TeeMergeTest.hx", lineNumber : 125, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest", methodName : "testReceiveMessagesFromTwoPipesViaTeeMerge"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeMergeTest;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	this.messagesReceived = new Array();
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","TeeSplitTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.prototype.callBackMethod = function(message) {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest::callBackMethod");
	var $spos = $s.length;
	this.messagesReceived.push(message);
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.prototype.messagesReceived = null;
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.prototype.testConnectingAndDisconnectingIOPipes = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest::testConnectingAndDisconnectingIOPipes");
	var $spos = $s.length;
	var input1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe3 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe4 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var teeSplit = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit(pipe1,pipe2);
	var connectedExtra1 = teeSplit.connect(pipe3);
	var connectedExtra2 = teeSplit.connect(pipe4);
	var inputConnected = input1.connect(teeSplit);
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeSplitTest.hx", lineNumber : 57, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeSplitTest.hx", lineNumber : 58, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(Std["is"](pipe3,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeSplitTest.hx", lineNumber : 59, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(Std["is"](pipe4,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeSplitTest.hx", lineNumber : 60, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(Std["is"](teeSplit,org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit),{ fileName : "TeeSplitTest.hx", lineNumber : 61, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(connectedExtra1,{ fileName : "TeeSplitTest.hx", lineNumber : 62, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(connectedExtra2,{ fileName : "TeeSplitTest.hx", lineNumber : 63, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(teeSplit.disconnect() == pipe4,{ fileName : "TeeSplitTest.hx", lineNumber : 66, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(teeSplit.disconnect() == pipe3,{ fileName : "TeeSplitTest.hx", lineNumber : 67, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(teeSplit.disconnect() == pipe2,{ fileName : "TeeSplitTest.hx", lineNumber : 68, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	this.assertTrue(teeSplit.disconnect() == pipe1,{ fileName : "TeeSplitTest.hx", lineNumber : 69, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testConnectingAndDisconnectingIOPipes"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.prototype.testReceiveMessagesFromTwoTeeSplitOutputs = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest::testReceiveMessagesFromTwoTeeSplitOutputs");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : 1});
	var pipe1 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var pipe2 = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe();
	var connected1 = pipe1.connect(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")));
	var connected2 = pipe2.connect(new org.puremvc.haxe.multicore.utilities.pipes.plumbing.PipeListener(this,$closure(this,"callBackMethod")));
	var teeSplit = new org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit(pipe1,pipe2);
	var written = teeSplit.write(message);
	this.assertTrue(Std["is"](message,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeSplitTest.hx", lineNumber : 95, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(Std["is"](pipe1,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeSplitTest.hx", lineNumber : 96, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(Std["is"](pipe2,org.puremvc.haxe.multicore.utilities.pipes.plumbing.Pipe),{ fileName : "TeeSplitTest.hx", lineNumber : 97, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(Std["is"](teeSplit,org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplit),{ fileName : "TeeSplitTest.hx", lineNumber : 98, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(connected1,{ fileName : "TeeSplitTest.hx", lineNumber : 99, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(connected2,{ fileName : "TeeSplitTest.hx", lineNumber : 100, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(written,{ fileName : "TeeSplitTest.hx", lineNumber : 101, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertEquals(this.messagesReceived.length,2,{ fileName : "TeeSplitTest.hx", lineNumber : 105, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	var message1 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message1,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeSplitTest.hx", lineNumber : 110, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(message1 == message,{ fileName : "TeeSplitTest.hx", lineNumber : 111, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	var message2 = this.messagesReceived.shift();
	this.assertTrue(Std["is"](message2,org.puremvc.haxe.multicore.utilities.pipes.interfaces.IPipeMessage),{ fileName : "TeeSplitTest.hx", lineNumber : 116, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	this.assertTrue(message2 == message,{ fileName : "TeeSplitTest.hx", lineNumber : 117, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest", methodName : "testReceiveMessagesFromTwoTeeSplitOutputs"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.TeeSplitTest;
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
	catch( $e14 ) {
		{
			var e = $e14;
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
	{ var $it15 = it;
	while( $it15.hasNext() ) { var i = $it15.next();
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
org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest.__name__ = ["org","puremvc","haxe","multicore","utilities","pipes","plumbing","MessageTest"];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest.prototype.testConstructorAndGetters = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest::testConstructorAndGetters");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ testProp : "testval"},Xml.parse("<testMessage testAtt='Hello'/>"),1);
	this.assertTrue(Std["is"](message,org.puremvc.haxe.multicore.utilities.pipes.messages.Message),{ fileName : "MessageTest.hx", lineNumber : 29, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testConstructorAndGetters"});
	this.assertEquals(message.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "MessageTest.hx", lineNumber : 30, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testConstructorAndGetters"});
	this.assertEquals(message.getHeader().testProp,"testval",{ fileName : "MessageTest.hx", lineNumber : 31, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testConstructorAndGetters"});
	this.assertEquals(function($this) {
		var $r;
		var tmp = message.getBody();
		$r = (Std["is"](tmp,Xml)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).firstElement().get("testAtt"),"Hello",{ fileName : "MessageTest.hx", lineNumber : 32, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testConstructorAndGetters"});
	this.assertEquals(message.getPriority(),1,{ fileName : "MessageTest.hx", lineNumber : 33, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testConstructorAndGetters"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest.prototype.testDefaultPriority = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest::testDefaultPriority");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/");
	this.assertEquals(message.getPriority(),5,{ fileName : "MessageTest.hx", lineNumber : 45, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testDefaultPriority"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest.prototype.testSettersAndGetters = function() {
	$s.push("org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest::testSettersAndGetters");
	var $spos = $s.length;
	var message = new org.puremvc.haxe.multicore.utilities.pipes.messages.Message("http://puremvc.org/namespaces/pipes/messages/" + "normal/");
	message.setHeader({ testProp : "testval"});
	message.setBody(Xml.parse("<testMessage testAtt='Hello'/>"));
	message.setPriority(10);
	this.assertTrue(Std["is"](message,org.puremvc.haxe.multicore.utilities.pipes.messages.Message),{ fileName : "MessageTest.hx", lineNumber : 63, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testSettersAndGetters"});
	this.assertEquals(message.getType(),"http://puremvc.org/namespaces/pipes/messages/" + "normal/",{ fileName : "MessageTest.hx", lineNumber : 64, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testSettersAndGetters"});
	this.assertEquals(message.getHeader().testProp,"testval",{ fileName : "MessageTest.hx", lineNumber : 65, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testSettersAndGetters"});
	this.assertEquals(function($this) {
		var $r;
		var tmp = message.getBody();
		$r = (Std["is"](tmp,Xml)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).firstElement().get("testAtt"),"Hello",{ fileName : "MessageTest.hx", lineNumber : 66, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testSettersAndGetters"});
	this.assertEquals(message.getPriority(),10,{ fileName : "MessageTest.hx", lineNumber : 67, className : "org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest", methodName : "testSettersAndGetters"});
	$s.pop();
}
org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest.prototype.__class__ = org.puremvc.haxe.multicore.utilities.pipes.plumbing.MessageTest;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	Xml = js.JsXml__;
	Xml.__name__ = ["Xml"];
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
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
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.PRIORITY_HIGH = 1;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.PRIORITY_MED = 5;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.PRIORITY_LOW = 10;
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.BASE = "http://puremvc.org/namespaces/pipes/messages/";
org.puremvc.haxe.multicore.utilities.pipes.messages.Message.NORMAL = "http://puremvc.org/namespaces/pipes/messages/" + "normal/";
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.BASE = "http://puremvc.org/namespaces/pipes/messages/" + "/filter/";
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.SET_PARAMS = "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "setparams";
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.SET_FILTER = "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "setfilter";
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.BYPASS = "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "bypass";
org.puremvc.haxe.multicore.utilities.pipes.messages.FilterControlMessage.FILTER = "http://puremvc.org/namespaces/pipes/messages/" + "/filter/" + "filter";
js.JsXml__.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
js.JsXml__.ecdata = new EReg("^<!\\[CDATA\\[","i");
js.JsXml__.edoctype = new EReg("^<!DOCTYPE","i");
js.JsXml__.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
js.JsXml__.epcdata = new EReg("^[^<]+","");
js.JsXml__.ecomment = new EReg("^<!--","");
js.JsXml__.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
js.JsXml__.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
js.JsXml__.eclose = new EReg("^[ \\r\\n\\t]*(>|(/>))","");
js.JsXml__.ecdata_end = new EReg("\\]\\]>","");
js.JsXml__.edoctype_elt = new EReg("[\\[|\\]>]","");
js.JsXml__.ecomment_end = new EReg("-->","");
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.BASE = "http://puremvc.org/namespaces/pipes/messages/" + "/queue/";
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.FLUSH = "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "flush";
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.SORT = "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "sort";
org.puremvc.haxe.multicore.utilities.pipes.messages.QueueControlMessage.FIFO = "http://puremvc.org/namespaces/pipes/messages/" + "/queue/" + "fifo";
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.INPUT = "input";
org.puremvc.haxe.multicore.utilities.pipes.plumbing.Junction.OUTPUT = "output";
js.Lib.document = document;
js.Lib.window = window;
js.Lib.onerror = null;
$Main.init = PureMVCPipesTestRunner.main();
