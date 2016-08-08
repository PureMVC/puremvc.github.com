$estr = function() { return js.Boot.__string_rec(this,''); }
xinf = {}
xinf.event = {}
xinf.event.EventDispatcher = function() { }
xinf.event.EventDispatcher.__name__ = ["xinf","event","EventDispatcher"];
xinf.event.EventDispatcher.prototype.addEventListener = null;
xinf.event.EventDispatcher.prototype.dispatchEvent = null;
xinf.event.EventDispatcher.prototype.postEvent = null;
xinf.event.EventDispatcher.prototype.removeEventListener = null;
xinf.event.EventDispatcher.prototype.__class__ = xinf.event.EventDispatcher;
xinf.event.SimpleEventDispatcher = function(p) { if( p === $_ ) return; {
	this.listeners = new Hash();
}}
xinf.event.SimpleEventDispatcher.__name__ = ["xinf","event","SimpleEventDispatcher"];
xinf.event.SimpleEventDispatcher.prototype.addEventFilter = function(f) {
	if(this.filters == null) this.filters = new List();
	this.filters.push(f);
}
xinf.event.SimpleEventDispatcher.prototype.addEventListener = function(type,h) {
	var t = type.toString();
	var l = this.listeners.get(t.toString());
	if(l == null) {
		l = new List();
		this.listeners.set(t,l);
	}
	l.push(h);
	return h;
}
xinf.event.SimpleEventDispatcher.prototype.copyProperties = function(to) {
	to.listeners = new Hash();
	{ var $it0 = this.listeners.keys();
	while( $it0.hasNext() ) { var e = $it0.next();
	{
		var v = this.listeners.get(e);
		var l = new List();
		{ var $it1 = v.iterator();
		while( $it1.hasNext() ) { var i = $it1.next();
		{
			l.add(i);
		}
		}}
		to.listeners.set(e,l);
	}
	}}
}
xinf.event.SimpleEventDispatcher.prototype.dispatchEvent = function(e) {
	var l = this.listeners.get(e.type.toString());
	var dispatched = false;
	if(this.filters != null) {
		{ var $it2 = this.filters.iterator();
		while( $it2.hasNext() ) { var f = $it2.next();
		{
			if(f(e) == false) return;
		}
		}}
	}
	if(l != null) {
		{ var $it3 = l.iterator();
		while( $it3.hasNext() ) { var h = $it3.next();
		{
			h(e);
			dispatched = true;
		}
		}}
	}
}
xinf.event.SimpleEventDispatcher.prototype.filters = null;
xinf.event.SimpleEventDispatcher.prototype.listeners = null;
xinf.event.SimpleEventDispatcher.prototype.postEvent = function(e,pos) {
	e.origin = pos;
	this.dispatchEvent(e);
}
xinf.event.SimpleEventDispatcher.prototype.removeAllListeners = function(type) {
	return (this.listeners.remove(type.toString()));
}
xinf.event.SimpleEventDispatcher.prototype.removeEventListener = function(type,h) {
	var l = this.listeners.get(type.toString());
	if(l != null) {
		return (l.remove(h));
	}
	return false;
}
xinf.event.SimpleEventDispatcher.prototype.__class__ = xinf.event.SimpleEventDispatcher;
xinf.event.SimpleEventDispatcher.__interfaces__ = [xinf.event.EventDispatcher];
xinf.erno = {}
xinf.erno.ImageData = function(p) { if( p === $_ ) return; {
	xinf.event.SimpleEventDispatcher.apply(this,[]);
}}
xinf.erno.ImageData.__name__ = ["xinf","erno","ImageData"];
xinf.erno.ImageData.__super__ = xinf.event.SimpleEventDispatcher;
for(var k in xinf.event.SimpleEventDispatcher.prototype ) xinf.erno.ImageData.prototype[k] = xinf.event.SimpleEventDispatcher.prototype[k];
xinf.erno.ImageData.load = function(url) {
	return (new xinf.erno.js.JSImageData(url.toString()));
}
xinf.erno.ImageData.prototype.frameAvailable = function(data,pos) {
	this.postEvent(new xinf.event.ImageLoadEvent(xinf.event.ImageLoadEvent.FRAME_AVAILABLE,this,data),pos);
}
xinf.erno.ImageData.prototype.height = null;
xinf.erno.ImageData.prototype.loaded = function(data,pos) {
	this.postEvent(new xinf.event.ImageLoadEvent(xinf.event.ImageLoadEvent.LOADED,this),pos);
}
xinf.erno.ImageData.prototype.partLoaded = function(pos) {
	this.postEvent(new xinf.event.ImageLoadEvent(xinf.event.ImageLoadEvent.PART_LOADED,this),pos);
}
xinf.erno.ImageData.prototype.url = null;
xinf.erno.ImageData.prototype.width = null;
xinf.erno.ImageData.prototype.__class__ = xinf.erno.ImageData;
xinf.erno.js = {}
xinf.erno.js.JSImageData = function(url) { if( url === $_ ) return; {
	xinf.erno.ImageData.apply(this,[]);
	this.url = url;
	this.img = js.Lib.document.createElement("img");
	this.img.onload = $closure(this,"js_loaded");
	this.img.src = url;
}}
xinf.erno.js.JSImageData.__name__ = ["xinf","erno","js","JSImageData"];
xinf.erno.js.JSImageData.__super__ = xinf.erno.ImageData;
for(var k in xinf.erno.ImageData.prototype ) xinf.erno.js.JSImageData.prototype[k] = xinf.erno.ImageData.prototype[k];
xinf.erno.js.JSImageData.prototype.img = null;
xinf.erno.js.JSImageData.prototype.js_loaded = function(e) {
	this.width = this.img.width;
	this.height = this.img.height;
	this.postEvent(new xinf.event.ImageLoadEvent(xinf.event.ImageLoadEvent.LOADED,this),{ fileName : "JSImageData.hx", lineNumber : 24, className : "xinf.erno.js.JSImageData", methodName : "js_loaded"});
}
xinf.erno.js.JSImageData.prototype.__class__ = xinf.erno.js.JSImageData;
xinf.event.Event = function(t) { if( t === $_ ) return; {
	this.type = t;
	this.preventBubble = false;
}}
xinf.event.Event.__name__ = ["xinf","event","Event"];
xinf.event.Event.prototype.origin = null;
xinf.event.Event.prototype.preventBubble = null;
xinf.event.Event.prototype.target = null;
xinf.event.Event.prototype.toString = function() {
	var r = "" + this.type;
	if(this.origin != null) r += ", from " + this.origin.fileName + ":" + this.origin.lineNumber;
	r += " { ";
	{
		var _g = 0, _g1 = Reflect.fields(this);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			if(field != "origin") r += field + ":" + Reflect.field(this,field) + ", ";
		}
	}
	r += "}";
	return r;
}
xinf.event.Event.prototype.type = null;
xinf.event.Event.prototype.__class__ = xinf.event.Event;
xinf.event.EventKind = function(name,bubble) { if( name === $_ ) return; {
	this.name = name;
	if(bubble == null) bubble = false;
	this.bubble = bubble;
}}
xinf.event.EventKind.__name__ = ["xinf","event","EventKind"];
xinf.event.EventKind.prototype.bubble = null;
xinf.event.EventKind.prototype.name = null;
xinf.event.EventKind.prototype.toString = function() {
	return this.name;
}
xinf.event.EventKind.prototype.__class__ = xinf.event.EventKind;
xinf.event.MouseEvent = function(_type,_x,_y,_button,targetId,shiftMod,altMod,ctrlMod) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.x = _x;
	this.y = _y;
	this.button = _button;
	this.targetId = targetId;
	this.shiftMod = (shiftMod == null?false:shiftMod);
	this.altMod = (altMod == null?false:altMod);
	this.ctrlMod = (ctrlMod == null?false:ctrlMod);
}}
xinf.event.MouseEvent.__name__ = ["xinf","event","MouseEvent"];
xinf.event.MouseEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.MouseEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.MouseEvent.prototype.altMod = null;
xinf.event.MouseEvent.prototype.button = null;
xinf.event.MouseEvent.prototype.ctrlMod = null;
xinf.event.MouseEvent.prototype.shiftMod = null;
xinf.event.MouseEvent.prototype.targetId = null;
xinf.event.MouseEvent.prototype.toString = function() {
	var r = "" + this.type + "(" + this.x + "," + this.y + ", ";
	if(this.shiftMod) r += "Shift+";
	if(this.altMod) r += "Alt+";
	if(this.ctrlMod) r += "Ctrl+";
	r += "Button " + this.button + ")";
	if(this.targetId != 0) r += " to #" + this.targetId;
	if(this.target != null) r += " (" + this.target + ")";
	return r;
}
xinf.event.MouseEvent.prototype.x = null;
xinf.event.MouseEvent.prototype.y = null;
xinf.event.MouseEvent.prototype.__class__ = xinf.event.MouseEvent;
xinf.erno.Renderer = function() { }
xinf.erno.Renderer.__name__ = ["xinf","erno","Renderer"];
xinf.erno.Renderer.prototype.arcTo = null;
xinf.erno.Renderer.prototype.clipRect = null;
xinf.erno.Renderer.prototype.close = null;
xinf.erno.Renderer.prototype.cubicTo = null;
xinf.erno.Renderer.prototype.destroyObject = null;
xinf.erno.Renderer.prototype.ellipse = null;
xinf.erno.Renderer.prototype.endNative = null;
xinf.erno.Renderer.prototype.endObject = null;
xinf.erno.Renderer.prototype.endPath = null;
xinf.erno.Renderer.prototype.endShape = null;
xinf.erno.Renderer.prototype.image = null;
xinf.erno.Renderer.prototype.lineTo = null;
xinf.erno.Renderer.prototype["native"] = null;
xinf.erno.Renderer.prototype.quadraticTo = null;
xinf.erno.Renderer.prototype.rect = null;
xinf.erno.Renderer.prototype.roundedRect = null;
xinf.erno.Renderer.prototype.setFill = null;
xinf.erno.Renderer.prototype.setStroke = null;
xinf.erno.Renderer.prototype.setTransform = null;
xinf.erno.Renderer.prototype.setTranslation = null;
xinf.erno.Renderer.prototype.showObject = null;
xinf.erno.Renderer.prototype.startNative = null;
xinf.erno.Renderer.prototype.startObject = null;
xinf.erno.Renderer.prototype.startPath = null;
xinf.erno.Renderer.prototype.startShape = null;
xinf.erno.Renderer.prototype.text = null;
xinf.erno.Renderer.prototype.__class__ = xinf.erno.Renderer;
xinf.xml = {}
xinf.xml.Serializable = function() { }
xinf.xml.Serializable.__name__ = ["xinf","xml","Serializable"];
xinf.xml.Serializable.prototype.fromXml = null;
xinf.xml.Serializable.prototype.__class__ = xinf.xml.Serializable;
xinf.xml.Node = function(p) { if( p === $_ ) return; {
	this.mChildren = new Array();
}}
xinf.xml.Node.__name__ = ["xinf","xml","Node"];
xinf.xml.Node.prototype.acquired = function(newChild) {
	if(this.constructed) newChild.construct();
	if(this.ownerDocument != null) newChild.setOwnerDocument(this.ownerDocument);
	newChild.added(this);
}
xinf.xml.Node.prototype.added = function(parent) {
	null;
}
xinf.xml.Node.prototype.appendChild = function(newChild) {
	this.mChildren.push(newChild);
	this.acquired(newChild);
	return newChild;
}
xinf.xml.Node.prototype.childNodes = null;
xinf.xml.Node.prototype.cloneNode = function(deep) {
	var clone = Type.createInstance(Type.getClass(this),[null]);
	this.copyProperties(clone);
	if(deep) {
		clone.mChildren = new Array();
		{
			var _g = 0, _g1 = this.mChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				var c = child.cloneNode(deep);
				clone.appendChild(c);
			}
		}
	}
	return clone;
}
xinf.xml.Node.prototype.construct = function() {
	if(this.constructed) return false;
	this.constructed = true;
	{
		var _g = 0, _g1 = this.mChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.construct();
		}
	}
	return true;
}
xinf.xml.Node.prototype.constructed = null;
xinf.xml.Node.prototype.copyProperties = function(to) {
	null;
}
xinf.xml.Node.prototype.destruct = function() {
	if(!this.constructed) return false;
	this.constructed = false;
	{
		var _g = 0, _g1 = this.mChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.destruct();
		}
	}
	return true;
}
xinf.xml.Node.prototype.fromXml = function(xml) {
	if(this.ownerDocument == null) throw ("Document not set.");
	{ var $it4 = xml.elements();
	while( $it4.hasNext() ) { var node = $it4.next();
	{
		this.ownerDocument.unmarshal(node,this);
	}
	}}
}
xinf.xml.Node.prototype.getTypedParent = function(type) {
	if(Std["is"](this.parentElement,type)) return this.parentElement;
	return null;
}
xinf.xml.Node.prototype.get_childNodes = function() {
	return this.mChildren;
}
xinf.xml.Node.prototype.insertBefore = function(newChild,refChild) {
	var pos = -1;
	var i = 0;
	{
		var _g = 0, _g1 = this.mChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == refChild) pos = i;
			i++;
		}
	}
	if(pos == -1) this.mChildren.push(newChild);
	else this.mChildren.insert(pos - 1,newChild);
	this.acquired(newChild);
	return newChild;
}
xinf.xml.Node.prototype.mChildren = null;
xinf.xml.Node.prototype.onLoad = function() {
	var _g = 0, _g1 = this.mChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.onLoad();
	}
}
xinf.xml.Node.prototype.ownerDocument = null;
xinf.xml.Node.prototype.parentElement = null;
xinf.xml.Node.prototype.removeChild = function(oldChild) {
	this.mChildren.remove(oldChild);
	oldChild.ownerDocument = null;
	oldChild.parentElement = null;
	if(this.constructed) oldChild.destruct();
	oldChild.removed(this);
	return oldChild;
}
xinf.xml.Node.prototype.removed = function(parent) {
	null;
}
xinf.xml.Node.prototype.setOwnerDocument = function(doc) {
	if(doc == this.ownerDocument) return;
	this.ownerDocument = doc;
	{
		var _g = 0, _g1 = this.mChildren;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.setOwnerDocument(doc);
		}
	}
}
xinf.xml.Node.prototype.toString = function() {
	return (Type.getClassName(Type.getClass(this)));
}
xinf.xml.Node.prototype.toXml = function() {
	throw ("unimplemented");
	return null;
}
xinf.xml.Node.prototype.__class__ = xinf.xml.Node;
xinf.xml.Node.__interfaces__ = [xinf.xml.Serializable];
xinf.traits = {}
xinf.traits.TraitAccess = function() { }
xinf.traits.TraitAccess.__name__ = ["xinf","traits","TraitAccess"];
xinf.traits.TraitAccess.prototype.getStyleTrait = null;
xinf.traits.TraitAccess.prototype.getTrait = null;
xinf.traits.TraitAccess.prototype.setStyleTrait = null;
xinf.traits.TraitAccess.prototype.setTrait = null;
xinf.traits.TraitAccess.prototype.setTraitFromDynamic = null;
xinf.traits.TraitAccess.prototype.setTraitFromString = null;
xinf.traits.TraitAccess.prototype.__class__ = xinf.traits.TraitAccess;
EReg = function(r,opt) { if( r === $_ ) return; {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}}
EReg.__name__ = ["EReg"];
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b += this.matchedLeft();
		buf.b += f(this);
		s = this.matchedRight();
	}
	buf.b += s;
	return buf.b;
}
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return (this.r.m != null);
}
EReg.prototype.matched = function(n) {
	return (this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length}
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.r = null;
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.__class__ = EReg;
xinf.traits.TraitDefinition = function() { }
xinf.traits.TraitDefinition.__name__ = ["xinf","traits","TraitDefinition"];
xinf.traits.TraitDefinition.prototype.add = null;
xinf.traits.TraitDefinition.prototype.distance = null;
xinf.traits.TraitDefinition.prototype.fromDynamic = null;
xinf.traits.TraitDefinition.prototype.getDefault = null;
xinf.traits.TraitDefinition.prototype.interpolate = null;
xinf.traits.TraitDefinition.prototype.parse = null;
xinf.traits.TraitDefinition.prototype.write = null;
xinf.traits.TraitDefinition.prototype.__class__ = xinf.traits.TraitDefinition;
xinf.traits.TypedTrait = function(type) { if( type === $_ ) return; {
	this.type = type;
}}
xinf.traits.TypedTrait.__name__ = ["xinf","traits","TypedTrait"];
xinf.traits.TypedTrait.prototype.add = function(a,b) {
	return a;
}
xinf.traits.TypedTrait.prototype.distance = function(a,b) {
	return 1.;
}
xinf.traits.TypedTrait.prototype.fromDynamic = function(value) {
	if(Std["is"](value,this.type)) {
		return value;
	}
	return (this.parse(Std.string(value)));
}
xinf.traits.TypedTrait.prototype.getDefault = function() {
	throw ("unimplemented " + Type.getClassName(Type.getClass(this)) + ".getDefault()");
	return null;
}
xinf.traits.TypedTrait.prototype.interpolate = function(a,b,f) {
	return (f >= .5?a:b);
}
xinf.traits.TypedTrait.prototype.parse = function(value) {
	throw ("unimplemented");
}
xinf.traits.TypedTrait.prototype.type = null;
xinf.traits.TypedTrait.prototype.write = function(value) {
	return Std.string(value);
}
xinf.traits.TypedTrait.prototype.__class__ = xinf.traits.TypedTrait;
xinf.traits.TypedTrait.__interfaces__ = [xinf.traits.TraitDefinition];
xinf.traits.StringTrait = function(def) { if( def === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[String]);
	this.def = def;
}}
xinf.traits.StringTrait.__name__ = ["xinf","traits","StringTrait"];
xinf.traits.StringTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.traits.StringTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.traits.StringTrait.prototype.def = null;
xinf.traits.StringTrait.prototype.getDefault = function() {
	return this.def;
}
xinf.traits.StringTrait.prototype.parse = function(value) {
	return StringTools.trim(value);
}
xinf.traits.StringTrait.prototype.__class__ = xinf.traits.StringTrait;
xinf.xml.XMLElement = function(traits) { if( traits === $_ ) return; {
	xinf.xml.Node.apply(this,[]);
	this._traits = { }
	this._ptraits = { }
	this._cache = { }
	this.listeners = new Hash();
	if(traits != null) this.setTraitsFromObject(traits);
}}
xinf.xml.XMLElement.__name__ = ["xinf","xml","XMLElement"];
xinf.xml.XMLElement.__super__ = xinf.xml.Node;
for(var k in xinf.xml.Node.prototype ) xinf.xml.XMLElement.prototype[k] = xinf.xml.Node.prototype[k];
xinf.xml.XMLElement.prototype._cache = null;
xinf.xml.XMLElement.prototype._ptraits = null;
xinf.xml.XMLElement.prototype._traits = null;
xinf.xml.XMLElement.prototype.acquired = function(newChild) {
	if(newChild.parentElement != null) {
		throw ("child " + newChild + " is already attached to a parent (" + newChild.parentElement + ", new " + this + ")");
	}
	newChild.parentElement = this;
	xinf.xml.Node.prototype.acquired.apply(this,[newChild]);
}
xinf.xml.XMLElement.prototype.addEventListener = function(type,h) {
	var t = type.toString();
	var l = this.listeners.get(t.toString());
	if(l == null) {
		l = new List();
		this.listeners.set(t,l);
	}
	l.push(h);
	return h;
}
xinf.xml.XMLElement.prototype.base = null;
xinf.xml.XMLElement.prototype.cacheTrait = function(name,v,type) {
	if(Std["is"](v,type)) null;
	else if(Std["is"](v,xinf.traits.SpecialTraitValue)) {
		var v2 = v;
		v = v2.get(name,type,this);
	}
	else throw (new xinf.traits.TraitTypeException(name,this,v,type));
	this._cache[name] = v;
	return v;
}
xinf.xml.XMLElement.prototype.clearTraitsCache = function() {
	this._cache = { }
}
xinf.xml.XMLElement.prototype.copyProperties = function(to) {
	xinf.xml.Node.prototype.copyProperties.apply(this,[to]);
	to._traits = Reflect.copy(this._traits);
	if(to._traits.id != null) to._traits.id += "'";
	to.listeners = new Hash();
	{ var $it5 = this.listeners.keys();
	while( $it5.hasNext() ) { var e = $it5.next();
	{
		var v = this.listeners.get(e);
		var l = new List();
		{ var $it6 = v.iterator();
		while( $it6.hasNext() ) { var i = $it6.next();
		{
			l.add(i);
		}
		}}
		to.listeners.set(e,l);
	}
	}}
}
xinf.xml.XMLElement.prototype.dispatchEvent = function(e) {
	var l = this.listeners.get(e.type.toString());
	var dispatched = false;
	if(l != null) {
		{ var $it7 = l.iterator();
		while( $it7.hasNext() ) { var h = $it7.next();
		{
			h(e);
			dispatched = true;
		}
		}}
	}
}
xinf.xml.XMLElement.prototype.fromXml = function(xml) {
	xinf.xml.Node.prototype.fromXml.apply(this,[xml]);
	this.setTraitsFromXml(xml);
	if(this.get_id() != null) {
		this.ownerDocument.elementsById.set(this.get_id(),this);
	}
}
xinf.xml.XMLElement.prototype.getClassTrait = function(cl,name) {
	var traits = Reflect.field(cl,"TRAITS");
	if(traits != null) return Reflect.field(traits,name);
	return null;
}
xinf.xml.XMLElement.prototype.getElementByName = function(name) {
	{ var $it8 = this.typedChildren(xinf.xml.XMLElement);
	while( $it8.hasNext() ) { var child = $it8.next();
	{
		if(child.get_name() == name) return child;
	}
	}}
	throw ("no child with name '" + name + "'");
	return null;
}
xinf.xml.XMLElement.prototype.getStyleTrait = function(name,type,inherit,presentation) {
	if(presentation == null) presentation = true;
	if(inherit == null) inherit = true;
	return this.getTrait(name,type,presentation);
}
xinf.xml.XMLElement.prototype.getTagName = function() {
	var cl = Type.getClass(this);
	while(cl != null) {
		if(Reflect.hasField(cl,"tagName")) return Reflect.field(cl,"tagName");
		cl = Type.getSuperClass(cl);
	}
	return null;
}
xinf.xml.XMLElement.prototype.getTrait = function(name,type,presentation) {
	var v = null;
	if(presentation != false) {
		v = Reflect.field(this._cache,name);
		if(v != null) return v;
		v = Reflect.field(this._ptraits,name);
		if(v != null) return v;
	}
	if(v == null) v = Reflect.field(this._traits,name);
	if(v == null) {
		var def = this.getTraitDefinition(name);
		if(def != null) {
			v = def.getDefault();
		}
	}
	if(v != null) {
		this.cacheTrait(name,v,type);
	}
	return v;
}
xinf.xml.XMLElement.prototype.getTraitDefinition = function(_name) {
	var name = this.normalizeAttributeName(_name);
	var cl = Type.getClass(this);
	var t = null;
	while(t == null && cl != null) {
		t = this.getClassTrait(cl,name);
		cl = Type.getSuperClass(cl);
	}
	return t;
}
xinf.xml.XMLElement.prototype.getTypedElementByName = function(name,cl) {
	var r = this.getElementByName(name);
	if(!Std["is"](r,cl)) throw ("Element '" + name + "' is not of class " + Type.getClassName(cl) + " (but instead " + Type.getClassName(Type.getClass(r)) + ")");
	return r;
}
xinf.xml.XMLElement.prototype.get_base = function() {
	var p = this;
	var b = null;
	while(p != null) {
		var thisBase = p.getTrait("base",String);
		if(thisBase != null) b = (b != null?thisBase + b:thisBase);
		p = p.parentElement;
	}
	return b;
}
xinf.xml.XMLElement.prototype.get_id = function() {
	return this.getTrait("id",String);
}
xinf.xml.XMLElement.prototype.get_name = function() {
	return this.getTrait("name",String);
}
xinf.xml.XMLElement.prototype.id = null;
xinf.xml.XMLElement.prototype.listeners = null;
xinf.xml.XMLElement.prototype.name = null;
xinf.xml.XMLElement.prototype.normalizeAttributeName = function(_name) {
	var r = xinf.xml.XMLElement.AttrReg.replace(_name,"").toLowerCase();
	return r;
}
xinf.xml.XMLElement.prototype.postEvent = function(e,pos) {
	e.origin = pos;
	this.dispatchEvent(e);
}
xinf.xml.XMLElement.prototype.removeAllListeners = function(type) {
	return (this.listeners.remove(type.toString()));
}
xinf.xml.XMLElement.prototype.removeEventListener = function(type,h) {
	var l = this.listeners.get(type.toString());
	if(l != null) {
		return (l.remove(h));
	}
	return false;
}
xinf.xml.XMLElement.prototype.setPresentationTrait = function(name,value) {
	this._ptraits[name] = value;
	return value;
}
xinf.xml.XMLElement.prototype.setStyleTrait = function(name,value) {
	return this.setTrait(name,value);
}
xinf.xml.XMLElement.prototype.setTrait = function(name,value) {
	this._traits[name] = value;
	this._cache[name] = value;
	return value;
}
xinf.xml.XMLElement.prototype.setTraitFromDynamic = function(_name,value,to) {
	var name = this.normalizeAttributeName(_name);
	var def = this.getTraitDefinition(name);
	if(def != null) to[name] = def.fromDynamic(value);
	else to[name] = value;
}
xinf.xml.XMLElement.prototype.setTraitFromString = function(_name,value,to) {
	var name = this.normalizeAttributeName(_name);
	var def = this.getTraitDefinition(name);
	if(def != null) to[name] = def.parse(value);
	else to[name] = value;
}
xinf.xml.XMLElement.prototype.setTraitsFromObject = function(o) {
	xinf.style.StyleParser.fromObject(o,this,this._traits);
}
xinf.xml.XMLElement.prototype.setTraitsFromXml = function(xml) {
	{ var $it9 = xml.attributes();
	while( $it9.hasNext() ) { var field = $it9.next();
	{
		var f2 = field;
		var a = field.split(":");
		if(a.length > 1) f2 = a[a.length - 1];
		this.setTraitFromString(f2,xml.get(field),this._traits);
	}
	}}
}
xinf.xml.XMLElement.prototype.set_base = function(v) {
	return this.setStyleTrait("base",v);
}
xinf.xml.XMLElement.prototype.set_id = function(v) {
	return this.setTrait("id",v);
}
xinf.xml.XMLElement.prototype.set_name = function(v) {
	return this.setTrait("name",v);
}
xinf.xml.XMLElement.prototype.toXml = function() {
	var xml = Xml.createElement(this.getTagName());
	{
		var _g = 0, _g1 = Reflect.fields(this._traits);
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			var def = this.getTraitDefinition(name);
			if(def != null) {
				var v = def.write(Reflect.field(this._traits,name));
				if(v.length > 0) xml.set(name,v);
			}
		}
	}
	{
		var _g = 0, _g1 = this.mChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			var c = child.toXml();
			if(c != null) xml.addChild(c);
		}
	}
	return xml;
}
xinf.xml.XMLElement.prototype.typedChildren = function(cl) {
	var i = -1;
	var children = this.mChildren;
	return ({ hasNext : function() {
		var j = i + 1;
		while(j < children.length && !Std["is"](children[j],cl)) j++;
		return j < children.length;
	}, next : function() {
		i++;
		while(i < children.length && !Std["is"](children[i],cl)) i++;
		if(i < children.length) return children[i];
		return null;
	}});
}
xinf.xml.XMLElement.prototype.__class__ = xinf.xml.XMLElement;
xinf.xml.XMLElement.__interfaces__ = [xinf.event.EventDispatcher,xinf.traits.TraitAccess];
xinf.style = {}
xinf.style.StyledElement = function(traits) { if( traits === $_ ) return; {
	xinf.xml.XMLElement.apply(this,[traits]);
	this._matchedStyle = { }
	this.styleClasses = new Hash();
}}
xinf.style.StyledElement.__name__ = ["xinf","style","StyledElement"];
xinf.style.StyledElement.__super__ = xinf.xml.XMLElement;
for(var k in xinf.xml.XMLElement.prototype ) xinf.style.StyledElement.prototype[k] = xinf.xml.XMLElement.prototype[k];
xinf.style.StyledElement.prototype._matchedStyle = null;
xinf.style.StyledElement.prototype.addStyleClass = function(name) {
	this.styleClasses.set(name,true);
	this.updateClassStyle();
}
xinf.style.StyledElement.prototype.fromXml = function(xml) {
	xinf.xml.XMLElement.prototype.fromXml.apply(this,[xml]);
	if(xml.exists("style")) {
		xinf.style.StyleParser.fromObject(xinf.style.StyleParser.parseToObject(xml.get("style")),this,this._traits);
	}
	if(xml.exists("class")) {
		var cs = xinf.style.StyledElement.ws_split.split(xml.get("class"));
		{
			var _g = 0;
			while(_g < cs.length) {
				var c = cs[_g];
				++_g;
				var ct = StringTools.trim(c);
				if(ct.length > 0) this.addStyleClass(ct);
			}
		}
	}
}
xinf.style.StyledElement.prototype.getStyleClasses = function() {
	return this.styleClasses.keys();
}
xinf.style.StyledElement.prototype.getStyleTrait = function(name,type,inherit,presentation) {
	if(presentation == null) presentation = true;
	if(inherit == null) inherit = true;
	var v = null;
	if(presentation != false) {
		v = Reflect.field(this._cache,name);
		if(v != null) return v;
		v = Reflect.field(this._ptraits,name);
		if(v != null) return v;
	}
	if(v == null) v = Reflect.field(this._traits,name);
	if(v == null) v = Reflect.field(this._matchedStyle,name);
	if(v == null && inherit) {
		var p = this.parentElement;
		if(p != null) {
			v = p.getStyleTrait(name,type,inherit);
		}
	}
	if(v == null) {
		var def = this.getTraitDefinition(name);
		if(def != null) {
			return def.getDefault();
		}
	}
	if(v != null) {
		v = this.cacheTrait(name,v,type);
	}
	return v;
}
xinf.style.StyledElement.prototype.hasOwnStyleTrait = function(name) {
	var v = Reflect.field(this._traits,name);
	if(v == null) v = Reflect.field(this._matchedStyle,name);
	return v != null;
}
xinf.style.StyledElement.prototype.hasStyleClass = function(name) {
	return this.styleClasses.get(name) != null;
}
xinf.style.StyledElement.prototype.matchSelector = function(s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
	{
		return true;
	}break;
	case 3:
	var id = $e[2];
	{
		return (this.get_id() == id);
	}break;
	case 1:
	var name = $e[2];
	{
		return (this.getTagName() == name);
	}break;
	case 2:
	var name = $e[2];
	{
		return this.hasStyleClass(name);
	}break;
	case 4:
	var a = $e[2];
	{
		{ var $it10 = a.iterator();
		while( $it10.hasNext() ) { var sel = $it10.next();
		{
			if(this.matchSelector(sel)) return true;
		}
		}}
		return false;
	}break;
	case 5:
	var a = $e[2];
	{
		{ var $it11 = a.iterator();
		while( $it11.hasNext() ) { var sel = $it11.next();
		{
			if(!this.matchSelector(sel)) return false;
		}
		}}
		return true;
	}break;
	case 6:
	var sel = $e[2];
	{
		var p = this.getTypedParent(xinf.style.StyledElement);
		if(p == null) return false;
		return p.matchSelector(sel);
	}break;
	case 7:
	var sel = $e[2];
	{
		var p = this;
		while(p != null) {
			p = p.getTypedParent(xinf.style.StyledElement);
			if(Std["is"](p,xinf.style.StyledElement) && p.matchSelector(sel)) return true;
		}
		return false;
	}break;
	case 8:
	var sel = $e[2];
	{
		var p = this.getTypedParent(xinf.style.StyledElement);
		while(p != null && p.parentElement != null) {
			p = p.getTypedParent(xinf.style.StyledElement);
			if(p != null && p.matchSelector(sel)) return true;
		}
		return false;
	}break;
	case 9:
	var sel = $e[2];
	{
		if(this.parentElement == null) return false;
		var prev = null;
		{
			var _g = 0, _g1 = this.parentElement.mChildren;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				if(c == this) {
					if(prev == null) return false;
					return (Std["is"](prev,xinf.style.StyledElement) && prev.matchSelector(sel));
				}
				prev = c;
			}
		}
		return false;
	}break;
	default:{
		return false;
	}break;
	}
	return false;
}
xinf.style.StyledElement.prototype.onLoad = function() {
	xinf.xml.XMLElement.prototype.onLoad.apply(this,[]);
	this.updateClassStyle();
}
xinf.style.StyledElement.prototype.removeStyleClass = function(name) {
	this.styleClasses.remove(name);
	this.updateClassStyle();
}
xinf.style.StyledElement.prototype.setOwnerDocument = function(doc) {
	xinf.xml.XMLElement.prototype.setOwnerDocument.apply(this,[doc]);
	this.updateClassStyle();
}
xinf.style.StyledElement.prototype.setPresentationTrait = function(name,value) {
	this.styleChanged(name);
	xinf.xml.XMLElement.prototype.setPresentationTrait.apply(this,[name,value]);
	return value;
}
xinf.style.StyledElement.prototype.setStyleTrait = function(name,value) {
	var r = this.setTrait(name,value);
	this.styleChanged(name);
	return r;
}
xinf.style.StyledElement.prototype.styleChanged = function(attribute) {
	this.clearTraitsCache();
	{ var $it12 = this.get_childNodes().iterator();
	while( $it12.hasNext() ) { var child = $it12.next();
	{
		if(Std["is"](child,xinf.style.StyledElement)) {
			var s = child;
			s.styleChanged(attribute);
		}
	}
	}}
}
xinf.style.StyledElement.prototype.styleClasses = null;
xinf.style.StyledElement.prototype.updateClassStyle = function() {
	var css = xinf.style.StyleSheet.DEFAULT;
	if(this.ownerDocument != null && this.ownerDocument.styleSheet != null) css = this.ownerDocument.styleSheet;
	this.clearTraitsCache();
	this._matchedStyle = { }
	var match = css.match(this);
	if(match != null) {
		xinf.style.StyleParser.fromObject(match,this,this._matchedStyle);
	}
	else this._matchedStyle = null;
	this.styleChanged();
}
xinf.style.StyledElement.prototype.__class__ = xinf.style.StyledElement;
xinf.ony = {}
xinf.ony.traits = {}
xinf.ony.traits.TransformTrait = function(p) { if( p === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[xinf.geom.Transform]);
}}
xinf.ony.traits.TransformTrait.__name__ = ["xinf","ony","traits","TransformTrait"];
xinf.ony.traits.TransformTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.TransformTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.TransformTrait.parseTransformList = function(text) {
	var r = null;
	while(xinf.ony.traits.TransformTrait.transform.match(text)) {
		var t = xinf.ony.traits.TransformTrait.parseSingle(xinf.ony.traits.TransformTrait.transform.matched(1));
		if(r != null) r = new xinf.geom.Concatenate(t,r);
		else r = t;
		var p = xinf.ony.traits.TransformTrait.transform.matchedPos();
		text = text.substr(p.pos + p.len);
	}
	if(r == null) r = new xinf.geom.Identity();
	return r;
}
xinf.ony.traits.TransformTrait.parseSingle = function(text) {
	var r;
	if(xinf.ony.traits.TransformTrait.translate.match(text)) {
		var v1 = xinf.ony.traits.TransformTrait.translate.matched(1);
		var v2 = xinf.ony.traits.TransformTrait.translate.matched(3);
		if(v2 == "") v2 = v1;
		r = new xinf.geom.Translate(Std.parseFloat(v1),Std.parseFloat(v2));
	}
	else if(xinf.ony.traits.TransformTrait.matrix.match(text)) {
		r = new xinf.geom.Matrix({ a : Std.parseFloat(xinf.ony.traits.TransformTrait.matrix.matched(1)), c : Std.parseFloat(xinf.ony.traits.TransformTrait.matrix.matched(3)), tx : Std.parseFloat(xinf.ony.traits.TransformTrait.matrix.matched(5)), b : Std.parseFloat(xinf.ony.traits.TransformTrait.matrix.matched(2)), d : Std.parseFloat(xinf.ony.traits.TransformTrait.matrix.matched(4)), ty : Std.parseFloat(xinf.ony.traits.TransformTrait.matrix.matched(6))});
	}
	else if(xinf.ony.traits.TransformTrait.rotate.match(text)) {
		if(xinf.ony.traits.TransformTrait.rotate.matched(2) == null || xinf.ony.traits.TransformTrait.rotate.matched(2).length == 0) {
			r = new xinf.geom.Rotate(Std.parseFloat(xinf.ony.traits.TransformTrait.rotate.matched(1)) * xinf.ony.traits.TransformTrait.D2R);
		}
		else {
			var a = Std.parseFloat(xinf.ony.traits.TransformTrait.rotate.matched(1));
			var cx = Std.parseFloat(xinf.ony.traits.TransformTrait.rotate.matched(3));
			var cy = Std.parseFloat(xinf.ony.traits.TransformTrait.rotate.matched(4));
			r = new xinf.geom.Concatenate(new xinf.geom.Translate(-cx,-cy),new xinf.geom.Concatenate(new xinf.geom.Rotate(a * xinf.ony.traits.TransformTrait.D2R),new xinf.geom.Translate(cx,cy)));
		}
	}
	else if(xinf.ony.traits.TransformTrait.scale.match(text)) {
		var s = xinf.ony.traits.TransformTrait.splitNumbers.split(xinf.ony.traits.TransformTrait.scale.matched(1));
		if(s.length == 1) {
			var scale = Std.parseFloat(s[0]);
			r = new xinf.geom.Scale(scale,scale);
		}
		else if(s.length == 2) {
			r = new xinf.geom.Scale(Std.parseFloat(s[0]),Std.parseFloat(s[1]));
		}
		else {
			throw ("unimplemented transform: " + text);
		}
	}
	else if(xinf.ony.traits.TransformTrait.skewX.match(text)) {
		r = new xinf.geom.SkewX(Std.parseFloat(xinf.ony.traits.TransformTrait.skewX.matched(1)) * xinf.ony.traits.TransformTrait.D2R);
	}
	else if(xinf.ony.traits.TransformTrait.skewY.match(text)) {
		r = new xinf.geom.SkewY(Std.parseFloat(xinf.ony.traits.TransformTrait.skewY.matched(1)) * xinf.ony.traits.TransformTrait.D2R);
	}
	else if(StringTools.trim(text).length == 0) {
		return new xinf.geom.Identity();
	}
	else {
		throw ("invalid/unimplemented SVG transform '" + text + "'");
	}
	return r;
}
xinf.ony.traits.TransformTrait.prototype.add = function(a,b) {
	return a.add(b);
}
xinf.ony.traits.TransformTrait.prototype.distance = function(a,b) {
	return a.distanceTo(b);
}
xinf.ony.traits.TransformTrait.prototype.fromDynamic = function(value) {
	return xinf.traits.TypedTrait.prototype.fromDynamic.apply(this,[value]);
}
xinf.ony.traits.TransformTrait.prototype.getDefault = function() {
	return new xinf.geom.Identity();
}
xinf.ony.traits.TransformTrait.prototype.interpolate = function(a,b,f) {
	return a.interpolateWith(b,f);
}
xinf.ony.traits.TransformTrait.prototype.parse = function(value) {
	return xinf.ony.traits.TransformTrait.parseTransformList(value);
}
xinf.ony.traits.TransformTrait.prototype.__class__ = xinf.ony.traits.TransformTrait;
xinf.ony.type = {}
xinf.ony.type.Display = { __ename__ : ["xinf","ony","type","Display"], __constructs__ : ["None","Inline"] }
xinf.ony.type.Display.Inline = ["Inline",1];
xinf.ony.type.Display.Inline.toString = $estr;
xinf.ony.type.Display.Inline.__enum__ = xinf.ony.type.Display;
xinf.ony.type.Display.None = ["None",0];
xinf.ony.type.Display.None.toString = $estr;
xinf.ony.type.Display.None.__enum__ = xinf.ony.type.Display;
xinf.traits.EnumTrait = function(enumClass,suffix,def) { if( enumClass === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[enumClass]);
	this.enumClass = enumClass;
	this.def = def;
	this.sfx = suffix;
	if(this.sfx == null) this.sfx = "";
}}
xinf.traits.EnumTrait.__name__ = ["xinf","traits","EnumTrait"];
xinf.traits.EnumTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.traits.EnumTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.traits.EnumTrait.prototype.def = null;
xinf.traits.EnumTrait.prototype.enumClass = null;
xinf.traits.EnumTrait.prototype.getDefault = function() {
	return this.def;
}
xinf.traits.EnumTrait.prototype.parse = function(value) {
	var v = value.toLowerCase();
	{
		var _g = 0, _g1 = Type.getEnumConstructs(this.enumClass);
		while(_g < _g1.length) {
			var choice = _g1[_g];
			++_g;
			if(choice.toLowerCase() == v + this.sfx) {
				var v1 = Reflect.field(this.enumClass,choice);
				return v1;
			}
		}
	}
	throw ("Value '" + value + "' not in " + Type.getEnumConstructs(this.enumClass));
	return this.def;
}
xinf.traits.EnumTrait.prototype.sfx = null;
xinf.traits.EnumTrait.prototype.write = function(value) {
	var r = Std.string(value);
	if(this.sfx != null) r = r.substr(0,r.length - this.sfx.length);
	return r;
}
xinf.traits.EnumTrait.prototype.__class__ = xinf.traits.EnumTrait;
xinf.ony.type.Visibility = { __ename__ : ["xinf","ony","type","Visibility"], __constructs__ : ["Visible","Hidden"] }
xinf.ony.type.Visibility.Hidden = ["Hidden",1];
xinf.ony.type.Visibility.Hidden.toString = $estr;
xinf.ony.type.Visibility.Hidden.__enum__ = xinf.ony.type.Visibility;
xinf.ony.type.Visibility.Visible = ["Visible",0];
xinf.ony.type.Visibility.Visible.toString = $estr;
xinf.ony.type.Visibility.Visible.__enum__ = xinf.ony.type.Visibility;
xinf.traits.FloatTrait = function(def) { if( def === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[Float]);
	if(def == null) def = 0.;
	this.def = def;
}}
xinf.traits.FloatTrait.__name__ = ["xinf","traits","FloatTrait"];
xinf.traits.FloatTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.traits.FloatTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.traits.FloatTrait.prototype.add = function(a,b) {
	return a + b;
}
xinf.traits.FloatTrait.prototype.def = null;
xinf.traits.FloatTrait.prototype.distance = function(a,b) {
	return Math.abs(b - a);
}
xinf.traits.FloatTrait.prototype.fromDynamic = function(value) {
	if(Std["is"](value,Int)) {
		return (value * 1.);
	}
	return (xinf.traits.TypedTrait.prototype.fromDynamic.apply(this,[value]));
}
xinf.traits.FloatTrait.prototype.getDefault = function() {
	return this.def;
}
xinf.traits.FloatTrait.prototype.interpolate = function(a,b,f) {
	return a + ((b - a) * f);
}
xinf.traits.FloatTrait.prototype.parse = function(value) {
	var v = 0;
	if(xinf.traits.FloatTrait.numeric.match(value)) {
		v = Std.parseFloat(xinf.traits.FloatTrait.numeric.matched(1));
	}
	if(v == null) throw ("Not a numeric/unit value: " + value);
	return v;
}
xinf.traits.FloatTrait.prototype.__class__ = xinf.traits.FloatTrait;
xinf.traits.BoundedFloatTrait = function(min,max,def) { if( min === $_ ) return; {
	xinf.traits.FloatTrait.apply(this,[def]);
	this.min = min;
	this.max = max;
}}
xinf.traits.BoundedFloatTrait.__name__ = ["xinf","traits","BoundedFloatTrait"];
xinf.traits.BoundedFloatTrait.__super__ = xinf.traits.FloatTrait;
for(var k in xinf.traits.FloatTrait.prototype ) xinf.traits.BoundedFloatTrait.prototype[k] = xinf.traits.FloatTrait.prototype[k];
xinf.traits.BoundedFloatTrait.prototype.max = null;
xinf.traits.BoundedFloatTrait.prototype.min = null;
xinf.traits.BoundedFloatTrait.prototype.parse = function(value) {
	var v = xinf.traits.FloatTrait.prototype.parse.apply(this,[value]);
	if(this.min != null) v = Math.max(this.min,v);
	if(this.max != null) v = Math.min(this.max,v);
	return v;
}
xinf.traits.BoundedFloatTrait.prototype.__class__ = xinf.traits.BoundedFloatTrait;
xinf.ony.traits.PaintTrait = function(def) { if( def === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[xinf.ony.type.Paint]);
	this.def = def;
	if(def == null) this.def = xinf.ony.type.Paint.None;
}}
xinf.ony.traits.PaintTrait.__name__ = ["xinf","ony","traits","PaintTrait"];
xinf.ony.traits.PaintTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.PaintTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.PaintTrait.colorNames = null;
xinf.ony.traits.PaintTrait.getColorNames = function() {
	if(xinf.ony.traits.PaintTrait.colorNames == null) {
		xinf.ony.traits.PaintTrait.colorNames = new Hash();
		xinf.ony.traits.PaintTrait.colorNames.set("none",xinf.ony.type.Paint.None);
		xinf.ony.traits.PaintTrait.colorNames.set("aliceblue",xinf.ony.type.Paint.RGBColor(240 / 255,248 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("antiquewhite",xinf.ony.type.Paint.RGBColor(250 / 255,235 / 255,215 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("aqua",xinf.ony.type.Paint.RGBColor(0 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("aquamarine",xinf.ony.type.Paint.RGBColor(127 / 255,255 / 255,212 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("azure",xinf.ony.type.Paint.RGBColor(240 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("beige",xinf.ony.type.Paint.RGBColor(245 / 255,245 / 255,220 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("bisque",xinf.ony.type.Paint.RGBColor(255 / 255,228 / 255,196 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("black",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("blanchedalmond",xinf.ony.type.Paint.RGBColor(255 / 255,235 / 255,205 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("blue",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("blueviolet",xinf.ony.type.Paint.RGBColor(138 / 255,43 / 255,226 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("brown",xinf.ony.type.Paint.RGBColor(165 / 255,42 / 255,42 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("burlywood",xinf.ony.type.Paint.RGBColor(222 / 255,184 / 255,135 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("cadetblue",xinf.ony.type.Paint.RGBColor(95 / 255,158 / 255,160 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("chartreuse",xinf.ony.type.Paint.RGBColor(127 / 255,255 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("chocolate",xinf.ony.type.Paint.RGBColor(210 / 255,105 / 255,30 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("coral",xinf.ony.type.Paint.RGBColor(255 / 255,127 / 255,80 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("cornflowerblue",xinf.ony.type.Paint.RGBColor(100 / 255,149 / 255,237 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("cornsilk",xinf.ony.type.Paint.RGBColor(255 / 255,248 / 255,220 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("crimson",xinf.ony.type.Paint.RGBColor(220 / 255,20 / 255,60 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("cyan",xinf.ony.type.Paint.RGBColor(0 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkblue",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,139 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkcyan",xinf.ony.type.Paint.RGBColor(0 / 255,139 / 255,139 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkgoldenrod",xinf.ony.type.Paint.RGBColor(184 / 255,134 / 255,11 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkgray",xinf.ony.type.Paint.RGBColor(169 / 255,169 / 255,169 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkgreen",xinf.ony.type.Paint.RGBColor(0 / 255,100 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkgrey",xinf.ony.type.Paint.RGBColor(169 / 255,169 / 255,169 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkkhaki",xinf.ony.type.Paint.RGBColor(189 / 255,183 / 255,107 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkmagenta",xinf.ony.type.Paint.RGBColor(139 / 255,0 / 255,139 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkolivegreen",xinf.ony.type.Paint.RGBColor(85 / 255,107 / 255,47 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkorange",xinf.ony.type.Paint.RGBColor(255 / 255,140 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkorchid",xinf.ony.type.Paint.RGBColor(153 / 255,50 / 255,204 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkred",xinf.ony.type.Paint.RGBColor(139 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darksalmon",xinf.ony.type.Paint.RGBColor(233 / 255,150 / 255,122 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkseagreen",xinf.ony.type.Paint.RGBColor(143 / 255,188 / 255,143 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkslateblue",xinf.ony.type.Paint.RGBColor(72 / 255,61 / 255,139 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkslategray",xinf.ony.type.Paint.RGBColor(47 / 255,79 / 255,79 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkslategrey",xinf.ony.type.Paint.RGBColor(47 / 255,79 / 255,79 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkturquoise",xinf.ony.type.Paint.RGBColor(0 / 255,206 / 255,209 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkviolet",xinf.ony.type.Paint.RGBColor(148 / 255,0 / 255,211 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("deeppink",xinf.ony.type.Paint.RGBColor(255 / 255,20 / 255,147 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("deepskyblue",xinf.ony.type.Paint.RGBColor(0 / 255,191 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("dimgray",xinf.ony.type.Paint.RGBColor(105 / 255,105 / 255,105 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("dimgrey",xinf.ony.type.Paint.RGBColor(105 / 255,105 / 255,105 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("dodgerblue",xinf.ony.type.Paint.RGBColor(30 / 255,144 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("firebrick",xinf.ony.type.Paint.RGBColor(178 / 255,34 / 255,34 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("floralwhite",xinf.ony.type.Paint.RGBColor(255 / 255,250 / 255,240 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("forestgreen",xinf.ony.type.Paint.RGBColor(34 / 255,139 / 255,34 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("fuchsia",xinf.ony.type.Paint.RGBColor(255 / 255,0 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("gainsboro",xinf.ony.type.Paint.RGBColor(220 / 255,220 / 255,220 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ghostwhite",xinf.ony.type.Paint.RGBColor(248 / 255,248 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("gold",xinf.ony.type.Paint.RGBColor(255 / 255,215 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("goldenrod",xinf.ony.type.Paint.RGBColor(218 / 255,165 / 255,32 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("gray",xinf.ony.type.Paint.RGBColor(128 / 255,128 / 255,128 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("green",xinf.ony.type.Paint.RGBColor(0 / 255,128 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("greenyellow",xinf.ony.type.Paint.RGBColor(173 / 255,255 / 255,47 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("grey",xinf.ony.type.Paint.RGBColor(128 / 255,128 / 255,128 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("honeydew",xinf.ony.type.Paint.RGBColor(240 / 255,255 / 255,240 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("hotpink",xinf.ony.type.Paint.RGBColor(255 / 255,105 / 255,180 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("indianred",xinf.ony.type.Paint.RGBColor(205 / 255,92 / 255,92 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("indigo",xinf.ony.type.Paint.RGBColor(75 / 255,0 / 255,130 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ivory",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,240 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("khaki",xinf.ony.type.Paint.RGBColor(240 / 255,230 / 255,140 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lavender",xinf.ony.type.Paint.RGBColor(230 / 255,230 / 255,250 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lavenderblush",xinf.ony.type.Paint.RGBColor(255 / 255,240 / 255,245 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lawngreen",xinf.ony.type.Paint.RGBColor(124 / 255,252 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lemonchiffon",xinf.ony.type.Paint.RGBColor(255 / 255,250 / 255,205 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightblue",xinf.ony.type.Paint.RGBColor(173 / 255,216 / 255,230 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightcoral",xinf.ony.type.Paint.RGBColor(240 / 255,128 / 255,128 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightcyan",xinf.ony.type.Paint.RGBColor(224 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightgoldenrodyellow",xinf.ony.type.Paint.RGBColor(250 / 255,250 / 255,210 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightgray",xinf.ony.type.Paint.RGBColor(211 / 255,211 / 255,211 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightgreen",xinf.ony.type.Paint.RGBColor(144 / 255,238 / 255,144 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightgrey",xinf.ony.type.Paint.RGBColor(211 / 255,211 / 255,211 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightpink",xinf.ony.type.Paint.RGBColor(255 / 255,182 / 255,193 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightsalmon",xinf.ony.type.Paint.RGBColor(255 / 255,160 / 255,122 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightseagreen",xinf.ony.type.Paint.RGBColor(32 / 255,178 / 255,170 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightskyblue",xinf.ony.type.Paint.RGBColor(135 / 255,206 / 255,250 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightslategray",xinf.ony.type.Paint.RGBColor(119 / 255,136 / 255,153 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightslategrey",xinf.ony.type.Paint.RGBColor(119 / 255,136 / 255,153 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightsteelblue",xinf.ony.type.Paint.RGBColor(176 / 255,196 / 255,222 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightyellow",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,224 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lime",xinf.ony.type.Paint.RGBColor(0 / 255,255 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("limegreen",xinf.ony.type.Paint.RGBColor(50 / 255,205 / 255,50 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("linen",xinf.ony.type.Paint.RGBColor(250 / 255,240 / 255,230 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("magenta",xinf.ony.type.Paint.RGBColor(255 / 255,0 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("maroon",xinf.ony.type.Paint.RGBColor(128 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumaquamarine",xinf.ony.type.Paint.RGBColor(102 / 255,205 / 255,170 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumblue",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,205 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumorchid",xinf.ony.type.Paint.RGBColor(186 / 255,85 / 255,211 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumpurple",xinf.ony.type.Paint.RGBColor(147 / 255,112 / 255,219 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumseagreen",xinf.ony.type.Paint.RGBColor(60 / 255,179 / 255,113 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumslateblue",xinf.ony.type.Paint.RGBColor(123 / 255,104 / 255,238 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumspringgreen",xinf.ony.type.Paint.RGBColor(0 / 255,250 / 255,154 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumturquoise",xinf.ony.type.Paint.RGBColor(72 / 255,209 / 255,204 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mediumvioletred",xinf.ony.type.Paint.RGBColor(199 / 255,21 / 255,133 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("midnightblue",xinf.ony.type.Paint.RGBColor(25 / 255,25 / 255,112 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mintcream",xinf.ony.type.Paint.RGBColor(245 / 255,255 / 255,250 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("mistyrose",xinf.ony.type.Paint.RGBColor(255 / 255,228 / 255,225 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("moccasin",xinf.ony.type.Paint.RGBColor(255 / 255,228 / 255,181 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("navajowhite",xinf.ony.type.Paint.RGBColor(255 / 255,222 / 255,173 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("navy",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,128 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("oldlace",xinf.ony.type.Paint.RGBColor(253 / 255,245 / 255,230 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("olive",xinf.ony.type.Paint.RGBColor(128 / 255,128 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("olivedrab",xinf.ony.type.Paint.RGBColor(107 / 255,142 / 255,35 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("orange",xinf.ony.type.Paint.RGBColor(255 / 255,165 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("orangered",xinf.ony.type.Paint.RGBColor(255 / 255,69 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("orchid",xinf.ony.type.Paint.RGBColor(218 / 255,112 / 255,214 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("palegoldenrod",xinf.ony.type.Paint.RGBColor(238 / 255,232 / 255,170 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("palegreen",xinf.ony.type.Paint.RGBColor(152 / 255,251 / 255,152 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("paleturquoise",xinf.ony.type.Paint.RGBColor(175 / 255,238 / 255,238 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("palevioletred",xinf.ony.type.Paint.RGBColor(219 / 255,112 / 255,147 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("papayawhip",xinf.ony.type.Paint.RGBColor(255 / 255,239 / 255,213 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("peachpuff",xinf.ony.type.Paint.RGBColor(255 / 255,218 / 255,185 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("peru",xinf.ony.type.Paint.RGBColor(205 / 255,133 / 255,63 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("pink",xinf.ony.type.Paint.RGBColor(255 / 255,192 / 255,203 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("plum",xinf.ony.type.Paint.RGBColor(221 / 255,160 / 255,221 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("powderblue",xinf.ony.type.Paint.RGBColor(176 / 255,224 / 255,230 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("purple",xinf.ony.type.Paint.RGBColor(128 / 255,0 / 255,128 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("red",xinf.ony.type.Paint.RGBColor(255 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("rosybrown",xinf.ony.type.Paint.RGBColor(188 / 255,143 / 255,143 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("royalblue",xinf.ony.type.Paint.RGBColor(65 / 255,105 / 255,225 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("saddlebrown",xinf.ony.type.Paint.RGBColor(139 / 255,69 / 255,19 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("salmon",xinf.ony.type.Paint.RGBColor(250 / 255,128 / 255,114 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("sandybrown",xinf.ony.type.Paint.RGBColor(244 / 255,164 / 255,96 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("seagreen",xinf.ony.type.Paint.RGBColor(46 / 255,139 / 255,87 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("seashell",xinf.ony.type.Paint.RGBColor(255 / 255,245 / 255,238 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("sienna",xinf.ony.type.Paint.RGBColor(160 / 255,82 / 255,45 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("silver",xinf.ony.type.Paint.RGBColor(192 / 255,192 / 255,192 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("skyblue",xinf.ony.type.Paint.RGBColor(135 / 255,206 / 255,235 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("slateblue",xinf.ony.type.Paint.RGBColor(106 / 255,90 / 255,205 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("slategray",xinf.ony.type.Paint.RGBColor(112 / 255,128 / 255,144 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("slategrey",xinf.ony.type.Paint.RGBColor(112 / 255,128 / 255,144 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("snow",xinf.ony.type.Paint.RGBColor(255 / 255,250 / 255,250 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("springgreen",xinf.ony.type.Paint.RGBColor(0 / 255,255 / 255,127 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("steelblue",xinf.ony.type.Paint.RGBColor(70 / 255,130 / 255,180 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("tan",xinf.ony.type.Paint.RGBColor(210 / 255,180 / 255,140 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("teal",xinf.ony.type.Paint.RGBColor(0 / 255,128 / 255,128 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("thistle",xinf.ony.type.Paint.RGBColor(216 / 255,191 / 255,216 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("tomato",xinf.ony.type.Paint.RGBColor(255 / 255,99 / 255,71 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("turquoise",xinf.ony.type.Paint.RGBColor(64 / 255,224 / 255,208 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("violet",xinf.ony.type.Paint.RGBColor(238 / 255,130 / 255,238 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("wheat",xinf.ony.type.Paint.RGBColor(245 / 255,222 / 255,179 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("white",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("whitesmoke",xinf.ony.type.Paint.RGBColor(245 / 255,245 / 255,245 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("yellow",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("yellowgreen",xinf.ony.type.Paint.RGBColor(154 / 255,205 / 255,50 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("Background",xinf.ony.type.Paint.RGBColor(58 / 255,110 / 255,165 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("AppWorkspace",xinf.ony.type.Paint.RGBColor(58 / 255,110 / 255,165 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("Window",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("WindowText",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("WindowFrame",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("Menu",xinf.ony.type.Paint.RGBColor(212 / 255,208 / 255,200 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("MenuText",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ButtonFace",xinf.ony.type.Paint.RGBColor(212 / 255,208 / 255,200 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ButtonShadow",xinf.ony.type.Paint.RGBColor(64 / 255,64 / 255,64 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ButtonHighlight",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ThreeDFace",xinf.ony.type.Paint.RGBColor(212 / 255,208 / 255,200 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ThreeDDarkShadow",xinf.ony.type.Paint.RGBColor(64 / 255,64 / 255,64 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ThreeDLightShadow",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("HighlightText",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("CaptionText",xinf.ony.type.Paint.RGBColor(255 / 255,255 / 255,255 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ActiveBorder",xinf.ony.type.Paint.RGBColor(0 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("ActiveCaption",xinf.ony.type.Paint.RGBColor(10 / 255,36 / 255,106 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("yellow",xinf.ony.type.Paint.RGBColor(252 / 255,233 / 255,79 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("orange",xinf.ony.type.Paint.RGBColor(252 / 255,175 / 255,62 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("green",xinf.ony.type.Paint.RGBColor(115 / 255,210 / 255,22 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightblue",xinf.ony.type.Paint.RGBColor(114 / 255,159 / 255,207 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("blue",xinf.ony.type.Paint.RGBColor(52 / 255,101 / 255,164 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkblue",xinf.ony.type.Paint.RGBColor(32 / 255,74 / 255,135 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("red",xinf.ony.type.Paint.RGBColor(204 / 255,0 / 255,0 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("lightgray",xinf.ony.type.Paint.RGBColor(211 / 255,215 / 255,207 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("gray",xinf.ony.type.Paint.RGBColor(186 / 255,189 / 255,182 / 255));
		xinf.ony.traits.PaintTrait.colorNames.set("darkgray",xinf.ony.type.Paint.RGBColor(85 / 255,87 / 255,83 / 255));
	}
	return xinf.ony.traits.PaintTrait.colorNames;
}
xinf.ony.traits.PaintTrait.intToString = function(v,radix,l) {
	var glyphs = "0123456789abcdef";
	var r = "";
	if(radix == null) radix = 10;
	if(l == null) l = 0;
	var t = v;
	var u;
	while(v > 0) {
		t = v;
		t /= radix;
		t -= Math.floor(t);
		t *= radix;
		v -= Math.round(t);
		v /= radix;
		r = glyphs.charAt(Math.round(t)) + r;
	}
	l -= r.length;
	{
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			r = "0" + r;
		}
	}
	return r;
}
xinf.ony.traits.PaintTrait.fromRGBInt = function(c) {
	var r = ((c & 16711680) >> 16) / 255;
	var g = ((c & 65280) >> 8) / 255;
	var b = (c & 255) / 255;
	return xinf.ony.type.Paint.RGBColor(r,g,b);
}
xinf.ony.traits.PaintTrait.prototype.add = function(a,b) {
	return this.interpolate(a,b,.5);
}
xinf.ony.traits.PaintTrait.prototype.def = null;
xinf.ony.traits.PaintTrait.prototype.distance = function(a,b) {
	var aC = a;
	var bC = b;
	var $e = (aC);
	switch( $e[1] ) {
	case 2:
	var b1 = $e[4], g1 = $e[3], r1 = $e[2];
	{
		var $e = (bC);
		switch( $e[1] ) {
		case 2:
		var b2 = $e[4], g2 = $e[3], r2 = $e[2];
		{
			return Math.sqrt(((r2 - r1) * (r2 - r1)) + ((g2 - g1) * (g2 - g1)) + ((b2 + b1) * (b2 + b1)));
		}break;
		default:{
			return 1.;
		}break;
		}
	}break;
	default:{
		return 1.;
	}break;
	}
}
xinf.ony.traits.PaintTrait.prototype.getDefault = function() {
	return this.def;
}
xinf.ony.traits.PaintTrait.prototype.interpolate = function(a,b,f) {
	var aC = a;
	var bC = b;
	var $e = (aC);
	switch( $e[1] ) {
	case 2:
	var b1 = $e[4], g1 = $e[3], r1 = $e[2];
	{
		var $e = (bC);
		switch( $e[1] ) {
		case 2:
		var b2 = $e[4], g2 = $e[3], r2 = $e[2];
		{
			return xinf.ony.type.Paint.RGBColor(r1 + ((r2 - r1) * f),g1 + ((g2 - g1) * f),b1 + ((b2 - b1) * f));
		}break;
		default:{
			return a;
		}break;
		}
	}break;
	default:{
		return a;
	}break;
	}
}
xinf.ony.traits.PaintTrait.prototype.parse = function(value) {
	var v = null;
	if(value == null) {
		return null;
	}
	else if(value == "currentColor") {
		return xinf.traits.CurrentColor.currentColor;
	}
	else if(value == "inherit") {
		return xinf.traits.Inherit.inherit;
	}
	else if(xinf.ony.traits.PaintTrait.hexcolor.match(value)) {
		var w = xinf.ony.traits.PaintTrait.hexcolor.matched(1);
		if(w.length == 3) {
			var c = Std.parseInt("0x" + w);
			var r = ((c & 3840) >> 8) / 15;
			var g = ((c & 240) >> 4) / 15;
			var b = (c & 15) / 15;
			v = xinf.ony.type.Paint.RGBColor(r,g,b);
		}
		else if(w.length == 6) {
			v = xinf.ony.traits.PaintTrait.fromRGBInt(Std.parseInt("0x" + w));
		}
	}
	else if(xinf.ony.traits.PaintTrait.rgbpercentcolor.match(value)) {
		v = xinf.ony.type.Paint.RGBColor(Std.parseFloat(xinf.ony.traits.PaintTrait.rgbpercentcolor.matched(1)) / 100,Std.parseFloat(xinf.ony.traits.PaintTrait.rgbpercentcolor.matched(2)) / 100,Std.parseFloat(xinf.ony.traits.PaintTrait.rgbpercentcolor.matched(3)) / 100);
	}
	else if(xinf.ony.traits.PaintTrait.rgbcolor.match(value)) {
		v = xinf.ony.type.Paint.RGBColor(Std.parseInt(xinf.ony.traits.PaintTrait.rgbcolor.matched(1)) / 255,Std.parseInt(xinf.ony.traits.PaintTrait.rgbcolor.matched(2)) / 255,Std.parseInt(xinf.ony.traits.PaintTrait.rgbcolor.matched(3)) / 255);
	}
	else if(xinf.ony.traits.PaintTrait.url.match(value)) {
		v = xinf.ony.type.Paint.URLReference(xinf.ony.traits.PaintTrait.url.matched(1));
	}
	else if((v = xinf.ony.traits.PaintTrait.getColorNames().get(value)) != null) null;
	else if(StringTools.trim(value).length == 0) {
		v = xinf.ony.type.Paint.None;
	}
	if(v == null) throw ("Not a color: -" + value + "- (" + value.length + ")");
	return v;
}
xinf.ony.traits.PaintTrait.prototype.write = function(value) {
	var v = value;
	var $e = (v);
	switch( $e[1] ) {
	case 2:
	var b = $e[4], g = $e[3], r = $e[2];
	{
		return ("rgb(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + ")");
	}break;
	case 1:
	var url = $e[2];
	{
		return ("url(" + url + ")");
	}break;
	case 0:
	{
		return ("none");
	}break;
	}
}
xinf.ony.traits.PaintTrait.prototype.__class__ = xinf.ony.traits.PaintTrait;
xinf.ony.type.Paint = { __ename__ : ["xinf","ony","type","Paint"], __constructs__ : ["None","URLReference","RGBColor"] }
xinf.ony.type.Paint.None = ["None",0];
xinf.ony.type.Paint.None.toString = $estr;
xinf.ony.type.Paint.None.__enum__ = xinf.ony.type.Paint;
xinf.ony.type.Paint.RGBColor = function(r,g,b) { var $x = ["RGBColor",2,r,g,b]; $x.__enum__ = xinf.ony.type.Paint; $x.toString = $estr; return $x; }
xinf.ony.type.Paint.URLReference = function(url) { var $x = ["URLReference",1,url]; $x.__enum__ = xinf.ony.type.Paint; $x.toString = $estr; return $x; }
xinf.ony.type.Length = function(s,v) { if( s === $_ ) return; {
	if(s != null) this.setDOMString(s);
	if(v != null) {
		this.unitType = xinf.ony.type.Length.TYPE_NUMBER;
		this.setValue(v);
	}
}}
xinf.ony.type.Length.__name__ = ["xinf","ony","type","Length"];
xinf.ony.type.Length.prototype.DOMString = null;
xinf.ony.type.Length.prototype.convertToSpecifiedUnits = function(newType,data) {
	if(newType == xinf.ony.type.Length.TYPE_EMS || newType == xinf.ony.type.Length.TYPE_EXS) return false;
	var rv = false;
	switch(this.getUnitType()) {
	case xinf.ony.type.Length.TYPE_NUMBER:{
		rv = true;
	}break;
	case xinf.ony.type.Length.TYPE_PERCENTAGE:{
		if(data == null) return false;
		{
			var _g = this;
			_g.setValue(_g.getValue() * data);
		}
		rv = true;
	}break;
	case xinf.ony.type.Length.TYPE_EMS:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_EXS:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_PX:{
		switch(newType) {
		case xinf.ony.type.Length.TYPE_NUMBER:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PERCENTAGE:{
			if(data != null && data != 0) {
				this.setValue(this.getValue() / data);
				rv = true;
			}
		}break;
		case xinf.ony.type.Length.TYPE_EMS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_EXS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_PX:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_CM:{
			rv = true;
			this.setValue(this.getValue() * xinf.ony.type.Length.pixSize / 10);
		}break;
		case xinf.ony.type.Length.TYPE_MM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * xinf.ony.type.Length.pixSize);
			}
		}break;
		case xinf.ony.type.Length.TYPE_IN:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * (xinf.ony.type.Length.pixSize / 25.4));
			}
		}break;
		case xinf.ony.type.Length.TYPE_PT:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * (xinf.ony.type.Length.pixSize * 2.834645669291399));
			}
		}break;
		case xinf.ony.type.Length.TYPE_PC:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * (xinf.ony.type.Length.pixSize * 0.23622047244));
			}
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case xinf.ony.type.Length.TYPE_CM:{
		switch(newType) {
		case xinf.ony.type.Length.TYPE_NUMBER:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PERCENTAGE:{
			if(data != null && data != 0) {
				this.setValue(this.getValue() / data);
				rv = true;
			}
		}break;
		case xinf.ony.type.Length.TYPE_EMS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_EXS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_PX:{
			rv = true;
			this.setValue(this.getValue() * 10 / xinf.ony.type.Length.pixSize);
		}break;
		case xinf.ony.type.Length.TYPE_CM:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_MM:{
			rv = true;
			this.setValue(this.getValue() * 10);
		}break;
		case xinf.ony.type.Length.TYPE_IN:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * (1 / 2.54));
			}
		}break;
		case xinf.ony.type.Length.TYPE_PT:{
			rv = true;
			this.setValue(this.getValue() * (1 / 2.54) * 72);
		}break;
		case xinf.ony.type.Length.TYPE_PC:{
			rv = true;
			this.setValue(this.getValue() * (1 / 2.54) * 6);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case xinf.ony.type.Length.TYPE_MM:{
		switch(newType) {
		case xinf.ony.type.Length.TYPE_NUMBER:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PERCENTAGE:{
			if(data != null && data != 0) {
				this.setValue(this.getValue() / data);
				rv = true;
			}
		}break;
		case xinf.ony.type.Length.TYPE_EMS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_EXS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_PX:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / xinf.ony.type.Length.pixSize);
			}
		}break;
		case xinf.ony.type.Length.TYPE_CM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * 10);
			}
		}break;
		case xinf.ony.type.Length.TYPE_MM:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_IN:{
			rv = true;
			this.setValue(this.getValue() * (1 / 2.54) / 10);
		}break;
		case xinf.ony.type.Length.TYPE_PT:{
			rv = true;
			this.setValue(this.getValue() * (1 / 2.54) * 7.2);
		}break;
		case xinf.ony.type.Length.TYPE_PC:{
			rv = true;
			this.setValue(this.getValue() * (1 / 2.54) * 0.6);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case xinf.ony.type.Length.TYPE_IN:{
		switch(newType) {
		case xinf.ony.type.Length.TYPE_NUMBER:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PERCENTAGE:{
			if(data != null && data != 0) {
				this.setValue(this.getValue() / data);
				rv = true;
			}
		}break;
		case xinf.ony.type.Length.TYPE_EMS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_EXS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_PX:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * 25.4 / xinf.ony.type.Length.pixSize);
			}
		}break;
		case xinf.ony.type.Length.TYPE_CM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * 2.54);
			}
		}break;
		case xinf.ony.type.Length.TYPE_MM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * 25.4);
			}
		}break;
		case xinf.ony.type.Length.TYPE_IN:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PT:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * 72);
			}
		}break;
		case xinf.ony.type.Length.TYPE_PC:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * 6);
			}
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case xinf.ony.type.Length.TYPE_PT:{
		switch(newType) {
		case xinf.ony.type.Length.TYPE_NUMBER:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PERCENTAGE:{
			if(data != null && data != 0) {
				this.setValue(this.getValue() / data);
				rv = true;
			}
		}break;
		case xinf.ony.type.Length.TYPE_EMS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_EXS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_PX:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 2.834645669291399 / xinf.ony.type.Length.pixSize);
			}
		}break;
		case xinf.ony.type.Length.TYPE_CM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 28.34645669291399);
			}
		}break;
		case xinf.ony.type.Length.TYPE_MM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 2.834645669291399);
			}
		}break;
		case xinf.ony.type.Length.TYPE_IN:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 72);
			}
		}break;
		case xinf.ony.type.Length.TYPE_PT:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PC:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 12);
			}
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case xinf.ony.type.Length.TYPE_PC:{
		switch(newType) {
		case xinf.ony.type.Length.TYPE_NUMBER:{
			rv = true;
		}break;
		case xinf.ony.type.Length.TYPE_PERCENTAGE:{
			if(data != null && data != 0) {
				this.setValue(this.getValue() / data);
				rv = true;
			}
		}break;
		case xinf.ony.type.Length.TYPE_EMS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_EXS:{
			null;
		}break;
		case xinf.ony.type.Length.TYPE_PX:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 0.23622047244 / xinf.ony.type.Length.pixSize);
			}
		}break;
		case xinf.ony.type.Length.TYPE_CM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 2.3622047244);
			}
		}break;
		case xinf.ony.type.Length.TYPE_MM:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 0.23622047244);
			}
		}break;
		case xinf.ony.type.Length.TYPE_IN:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() / 6);
			}
		}break;
		case xinf.ony.type.Length.TYPE_PT:{
			rv = true;
			{
				var _g = this;
				_g.setValue(_g.getValue() * 12);
			}
		}break;
		case xinf.ony.type.Length.TYPE_PC:{
			rv = true;
		}break;
		default:{
			null;
		}break;
		}
	}break;
	default:{
		null;
	}break;
	}
	if(rv) this.unitType = newType;
	return rv;
}
xinf.ony.type.Length.prototype.getDOMString = function() {
	if(this.getUnitType() == xinf.ony.type.Length.TYPE_UNKNOWN) return "";
	var v = this.getValue();
	if(v > .001) Math.round(this.getValue() * 100) / 100;
	return (Std.string(v) + this.getUnitType());
}
xinf.ony.type.Length.prototype.getUnitType = function() {
	return this.unitType;
}
xinf.ony.type.Length.prototype.getValue = function() {
	return this.value;
}
xinf.ony.type.Length.prototype.newValueSpecifiedUnits = function(unitType,i) {
	if(this.typeValid(unitType) && i != Math.NaN) this.unitType = unitType;
	else unitType = xinf.ony.type.Length.TYPE_UNKNOWN;
	this.setValue(i);
	this.orig = { value : i, type : unitType}
}
xinf.ony.type.Length.prototype.orig = null;
xinf.ony.type.Length.prototype.setDOMString = function(s) {
	var num = 0.0;
	var unit = xinf.ony.type.Length.TYPE_UNKNOWN;
	if(s == null || s.length == 0) return s;
	s = StringTools.trim(s);
	num = Std.parseFloat(s);
	if(num != Math.NaN) {
		unit = xinf.ony.type.Length.TYPE_NUMBER;
		var r = new EReg("([a-z%]+)","");
		try {
			r.match(s);
			if(this.typeValid(r.matched(0))) unit = r.matched(0);
		}
		catch( $e13 ) {
			{
				var e = $e13;
				null;
			}
		}
	}
	this.newValueSpecifiedUnits(unit,num);
	return s;
}
xinf.ony.type.Length.prototype.setValue = function(v) {
	this.value = v;
	return v;
}
xinf.ony.type.Length.prototype.toString = function() {
	return this.getDOMString();
}
xinf.ony.type.Length.prototype.typeValid = function(ut) {
	switch(ut) {
	case xinf.ony.type.Length.TYPE_NUMBER:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_PERCENTAGE:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_EMS:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_EXS:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_PX:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_CM:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_MM:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_IN:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_PT:{
		null;
	}break;
	case xinf.ony.type.Length.TYPE_PC:{
		null;
	}break;
	default:{
		return false;
	}break;
	}
	return true;
}
xinf.ony.type.Length.prototype.unitType = null;
xinf.ony.type.Length.prototype.value = null;
xinf.ony.type.Length.prototype.valueInSpecifiedUnits = null;
xinf.ony.type.Length.prototype.__class__ = xinf.ony.type.Length;
xinf.ony.traits.LengthTrait = function(def) { if( def === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[xinf.ony.type.Length]);
	if(def == null) def = new xinf.ony.type.Length(null,0);
	this.def = def;
}}
xinf.ony.traits.LengthTrait.__name__ = ["xinf","ony","traits","LengthTrait"];
xinf.ony.traits.LengthTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.LengthTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.LengthTrait.prototype.add = function(a,b) {
	return new xinf.ony.type.Length(null,a.value + b.value);
}
xinf.ony.traits.LengthTrait.prototype.def = null;
xinf.ony.traits.LengthTrait.prototype.distance = function(a,b) {
	return Math.abs(b.value - a.value);
}
xinf.ony.traits.LengthTrait.prototype.fromDynamic = function(value) {
	if(Std["is"](value,Float)) {
		return new xinf.ony.type.Length(null,value);
	}
	return xinf.traits.TypedTrait.prototype.fromDynamic.apply(this,[value]);
}
xinf.ony.traits.LengthTrait.prototype.getDefault = function() {
	return this.def;
}
xinf.ony.traits.LengthTrait.prototype.interpolate = function(a,b,f) {
	return new xinf.ony.type.Length(null,a.value + ((b.value - a.value) * f));
}
xinf.ony.traits.LengthTrait.prototype.parse = function(value) {
	return new xinf.ony.type.Length(value,null);
}
xinf.ony.traits.LengthTrait.prototype.__class__ = xinf.ony.traits.LengthTrait;
xinf.ony.type.JoinStyle = { __ename__ : ["xinf","ony","type","JoinStyle"], __constructs__ : ["MiterJoin","RoundJoin","BevelJoin"] }
xinf.ony.type.JoinStyle.BevelJoin = ["BevelJoin",2];
xinf.ony.type.JoinStyle.BevelJoin.toString = $estr;
xinf.ony.type.JoinStyle.BevelJoin.__enum__ = xinf.ony.type.JoinStyle;
xinf.ony.type.JoinStyle.MiterJoin = ["MiterJoin",0];
xinf.ony.type.JoinStyle.MiterJoin.toString = $estr;
xinf.ony.type.JoinStyle.MiterJoin.__enum__ = xinf.ony.type.JoinStyle;
xinf.ony.type.JoinStyle.RoundJoin = ["RoundJoin",1];
xinf.ony.type.JoinStyle.RoundJoin.toString = $estr;
xinf.ony.type.JoinStyle.RoundJoin.__enum__ = xinf.ony.type.JoinStyle;
xinf.ony.type.CapsStyle = { __ename__ : ["xinf","ony","type","CapsStyle"], __constructs__ : ["ButtCaps","RoundCaps","SquareCaps"] }
xinf.ony.type.CapsStyle.ButtCaps = ["ButtCaps",0];
xinf.ony.type.CapsStyle.ButtCaps.toString = $estr;
xinf.ony.type.CapsStyle.ButtCaps.__enum__ = xinf.ony.type.CapsStyle;
xinf.ony.type.CapsStyle.RoundCaps = ["RoundCaps",1];
xinf.ony.type.CapsStyle.RoundCaps.toString = $estr;
xinf.ony.type.CapsStyle.RoundCaps.__enum__ = xinf.ony.type.CapsStyle;
xinf.ony.type.CapsStyle.SquareCaps = ["SquareCaps",2];
xinf.ony.type.CapsStyle.SquareCaps.toString = $estr;
xinf.ony.type.CapsStyle.SquareCaps.__enum__ = xinf.ony.type.CapsStyle;
xinf.ony.traits.IntListTrait = function(p) { if( p === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[xinf.ony.type.IntList]);
}}
xinf.ony.traits.IntListTrait.__name__ = ["xinf","ony","traits","IntListTrait"];
xinf.ony.traits.IntListTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.IntListTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.IntListTrait.prototype.distance = function(_a,_b) {
	var a = _a.list;
	var b = _b.list;
	if(a.length != b.length) return 1.;
	var r = 0;
	{
		var _g1 = 0, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			r += Math.round(Math.abs(b[i] - a[i]));
		}
	}
	return r;
}
xinf.ony.traits.IntListTrait.prototype.getDefault = function() {
	return null;
}
xinf.ony.traits.IntListTrait.prototype.interpolate = function(_a,_b,f) {
	var a = _a.list;
	var b = _b.list;
	if(a.length != b.length) return a;
	var r = new Array();
	{
		var _g1 = 0, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			r.push(Math.round(a[i] + ((b[i] - a[i]) * f)));
		}
	}
	return new xinf.ony.type.IntList(r);
}
xinf.ony.traits.IntListTrait.prototype.parse = function(value) {
	if(value == "none") return null;
	var l = value.split(",");
	var l2 = new Array();
	{
		var _g = 0;
		while(_g < l.length) {
			var i = l[_g];
			++_g;
			l2.push(Std.parseInt(i));
		}
	}
	return new xinf.ony.type.IntList(l2);
}
xinf.ony.traits.IntListTrait.prototype.write = function(value) {
	return value.join(",");
}
xinf.ony.traits.IntListTrait.prototype.__class__ = xinf.ony.traits.IntListTrait;
xinf.traits.IntTrait = function(def) { if( def === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[Int]);
	if(def == null) def = 0;
	this.def = def;
}}
xinf.traits.IntTrait.__name__ = ["xinf","traits","IntTrait"];
xinf.traits.IntTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.traits.IntTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.traits.IntTrait.prototype.add = function(a,b) {
	return Math.round(a + b);
}
xinf.traits.IntTrait.prototype.def = null;
xinf.traits.IntTrait.prototype.distance = function(a,b) {
	return Math.round(Math.abs(b - a));
}
xinf.traits.IntTrait.prototype.getDefault = function() {
	return this.def;
}
xinf.traits.IntTrait.prototype.interpolate = function(a,b,f) {
	return Math.round(a + ((b - a) * f));
}
xinf.traits.IntTrait.prototype.parse = function(value) {
	if(value == "none") return 0;
	var v = null;
	if(xinf.traits.IntTrait.numeric.match(value)) {
		v = Std.parseInt(xinf.traits.IntTrait.numeric.matched(1));
	}
	if(v == null) throw ("Not an integer value: " + value);
	return v;
}
xinf.traits.IntTrait.prototype.__class__ = xinf.traits.IntTrait;
xinf.ony.traits.StringListTrait = function(p) { if( p === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[xinf.ony.type.StringList]);
}}
xinf.ony.traits.StringListTrait.__name__ = ["xinf","ony","traits","StringListTrait"];
xinf.ony.traits.StringListTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.StringListTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.StringListTrait.prototype.getDefault = function() {
	return new xinf.ony.type.StringList([""]);
}
xinf.ony.traits.StringListTrait.prototype.parse = function(value) {
	return new xinf.ony.type.StringList(value.split(","));
}
xinf.ony.traits.StringListTrait.prototype.write = function(value) {
	return value.join(",");
}
xinf.ony.traits.StringListTrait.prototype.__class__ = xinf.ony.traits.StringListTrait;
xinf.ony.traits.StringChoiceTrait = function(choices) { if( choices === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[Array]);
	this.choices = choices;
}}
xinf.ony.traits.StringChoiceTrait.__name__ = ["xinf","ony","traits","StringChoiceTrait"];
xinf.ony.traits.StringChoiceTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.StringChoiceTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.StringChoiceTrait.prototype.choices = null;
xinf.ony.traits.StringChoiceTrait.prototype.getDefault = function() {
	return this.choices[0];
}
xinf.ony.traits.StringChoiceTrait.prototype.parse = function(value) {
	{
		var _g = 0, _g1 = this.choices;
		while(_g < _g1.length) {
			var choice = _g1[_g];
			++_g;
			if(choice == value) return choice;
		}
	}
	return null;
}
xinf.ony.traits.StringChoiceTrait.prototype.__class__ = xinf.ony.traits.StringChoiceTrait;
xinf.ony.type.TextAnchor = { __ename__ : ["xinf","ony","type","TextAnchor"], __constructs__ : ["Start","Middle","End"] }
xinf.ony.type.TextAnchor.End = ["End",2];
xinf.ony.type.TextAnchor.End.toString = $estr;
xinf.ony.type.TextAnchor.End.__enum__ = xinf.ony.type.TextAnchor;
xinf.ony.type.TextAnchor.Middle = ["Middle",1];
xinf.ony.type.TextAnchor.Middle.toString = $estr;
xinf.ony.type.TextAnchor.Middle.__enum__ = xinf.ony.type.TextAnchor;
xinf.ony.type.TextAnchor.Start = ["Start",0];
xinf.ony.type.TextAnchor.Start.toString = $estr;
xinf.ony.type.TextAnchor.Start.__enum__ = xinf.ony.type.TextAnchor;
xinf.ony.Element = function(traits) { if( traits === $_ ) return; {
	xinf.style.StyledElement.apply(this,[traits]);
	this.styleClasses = new Hash();
}}
xinf.ony.Element.__name__ = ["xinf","ony","Element"];
xinf.ony.Element.__super__ = xinf.style.StyledElement;
for(var k in xinf.style.StyledElement.prototype ) xinf.ony.Element.prototype[k] = xinf.style.StyledElement.prototype[k];
xinf.ony.Element.prototype.color = null;
xinf.ony.Element.prototype.copyProperties = function(to) {
	xinf.style.StyledElement.prototype.copyProperties.apply(this,[to]);
	to.ownerDocument = this.ownerDocument;
}
xinf.ony.Element.prototype.dispatchEvent = function(e) {
	var l = this.listeners.get(e.type.toString());
	var dispatched = false;
	if(l != null) {
		{ var $it14 = l.iterator();
		while( $it14.hasNext() ) { var h = $it14.next();
		{
			h(e);
			dispatched = true;
		}
		}}
	}
	if(this.parentElement != null && !e.preventBubble && e.type.bubble == true) {
		this.parentElement.dispatchEvent(e);
	}
}
xinf.ony.Element.prototype.display = null;
xinf.ony.Element.prototype.fill = null;
xinf.ony.Element.prototype.fillOpacity = null;
xinf.ony.Element.prototype.fontFamily = null;
xinf.ony.Element.prototype.fontSize = null;
xinf.ony.Element.prototype.getBoundingBox = function() {
	haxe.Log.trace("getBoundingBox unimplemented for " + this,{ fileName : "Element.hx", lineNumber : 162, className : "xinf.ony.Element", methodName : "getBoundingBox"});
	return { l : 0., t : 0., r : 0., b : 0.}
}
xinf.ony.Element.prototype.get_color = function() {
	return this.getStyleTrait("color",xinf.ony.type.Paint);
}
xinf.ony.Element.prototype.get_display = function() {
	return this.getStyleTrait("display",xinf.ony.type.Display,false);
}
xinf.ony.Element.prototype.get_fill = function() {
	return this.getStyleTrait("fill",xinf.ony.type.Paint);
}
xinf.ony.Element.prototype.get_fill_opacity = function() {
	return this.getStyleTrait("fillopacity",Float);
}
xinf.ony.Element.prototype.get_font_family = function() {
	return this.getStyleTrait("fontfamily",xinf.ony.type.StringList);
}
xinf.ony.Element.prototype.get_font_size = function() {
	return this.getStyleTrait("fontsize",xinf.ony.type.Length).value;
}
xinf.ony.Element.prototype.get_line_cap = function() {
	return this.getStyleTrait("strokelinecap",xinf.ony.type.CapsStyle);
}
xinf.ony.Element.prototype.get_line_join = function() {
	return this.getStyleTrait("strokelinejoin",xinf.ony.type.JoinStyle);
}
xinf.ony.Element.prototype.get_opacity = function() {
	return this.getStyleTrait("opacity",Float,false);
}
xinf.ony.Element.prototype.get_stroke = function() {
	return this.getStyleTrait("stroke",xinf.ony.type.Paint);
}
xinf.ony.Element.prototype.get_stroke_dasharray = function() {
	return this.getStyleTrait("strokedasharray",xinf.ony.type.IntList);
}
xinf.ony.Element.prototype.get_stroke_dashoffset = function() {
	return this.getStyleTrait("strokedashoffset",Int);
}
xinf.ony.Element.prototype.get_stroke_miterlimit = function() {
	return this.getStyleTrait("strokemiterlimit",Float);
}
xinf.ony.Element.prototype.get_stroke_opacity = function() {
	return this.getStyleTrait("strokeopacity",Float);
}
xinf.ony.Element.prototype.get_stroke_width = function() {
	return this.getStyleTrait("strokewidth",xinf.ony.type.Length).value;
}
xinf.ony.Element.prototype.get_text_anchor = function() {
	return this.getStyleTrait("textanchor",xinf.ony.type.TextAnchor);
}
xinf.ony.Element.prototype.get_transform = function() {
	return this.getTrait("transform",xinf.geom.Transform);
}
xinf.ony.Element.prototype.get_visibility = function() {
	return this.getStyleTrait("visibility",xinf.ony.type.Visibility);
}
xinf.ony.Element.prototype.globalToLocal = function(p) {
	var q = { x : p.x, y : p.y}
	var parent = this.getTypedParent(xinf.ony.Element);
	if(parent != null) q = parent.globalToLocal(q);
	return (this.get_transform().applyInverse(q));
}
xinf.ony.Element.prototype.localToGlobal = function(p) {
	var q = { x : p.x, y : p.y}
	var p1 = this.getTypedParent(xinf.ony.Element);
	if(p1 != null) q = p1.localToGlobal(q);
	return (this.get_transform().apply(q));
}
xinf.ony.Element.prototype.opacity = null;
xinf.ony.Element.prototype.redraw = function() {
	null;
}
xinf.ony.Element.prototype.retransform = function() {
	null;
}
xinf.ony.Element.prototype.set_color = function(v) {
	return this.setStyleTrait("color",v);
}
xinf.ony.Element.prototype.set_display = function(v) {
	return this.setStyleTrait("display",v);
}
xinf.ony.Element.prototype.set_fill = function(v) {
	return this.setStyleTrait("fill",v);
}
xinf.ony.Element.prototype.set_fill_opacity = function(v) {
	return this.setStyleTrait("fillopacity",v);
}
xinf.ony.Element.prototype.set_font_family = function(v) {
	return this.setStyleTrait("fontfamily",v);
}
xinf.ony.Element.prototype.set_font_size = function(v) {
	return this.setStyleTrait("fontsize",new xinf.ony.type.Length(null,v)).getValue();
}
xinf.ony.Element.prototype.set_id = function(v) {
	if(this.ownerDocument != null) {
		this.ownerDocument.elementsById.remove(this.get_id());
		this.ownerDocument.elementsById.set(v,this);
	}
	return xinf.style.StyledElement.prototype.set_id.apply(this,[v]);
}
xinf.ony.Element.prototype.set_line_cap = function(v) {
	return this.setStyleTrait("strokelinecap",v);
}
xinf.ony.Element.prototype.set_line_join = function(v) {
	return this.setStyleTrait("strokelinejoin",v);
}
xinf.ony.Element.prototype.set_opacity = function(v) {
	return this.setStyleTrait("opacity",v);
}
xinf.ony.Element.prototype.set_stroke = function(v) {
	return this.setStyleTrait("stroke",v);
}
xinf.ony.Element.prototype.set_stroke_dasharray = function(v) {
	return this.setStyleTrait("strokedasharray",v);
}
xinf.ony.Element.prototype.set_stroke_dashoffset = function(v) {
	return this.setStyleTrait("strokedashoffset",v);
}
xinf.ony.Element.prototype.set_stroke_miterlimit = function(v) {
	return this.setStyleTrait("strokemiterlimit",v);
}
xinf.ony.Element.prototype.set_stroke_opacity = function(v) {
	return this.setStyleTrait("strokeopacity",v);
}
xinf.ony.Element.prototype.set_stroke_width = function(v) {
	this.setStyleTrait("strokewidth",new xinf.ony.type.Length(null,v));
	return v;
}
xinf.ony.Element.prototype.set_text_anchor = function(v) {
	return this.setStyleTrait("textanchor",v);
}
xinf.ony.Element.prototype.set_transform = function(v) {
	this.setTrait("transform",v);
	this.retransform();
	return v;
}
xinf.ony.Element.prototype.set_visibility = function(v) {
	return this.setStyleTrait("visibility",v);
}
xinf.ony.Element.prototype.stroke = null;
xinf.ony.Element.prototype.strokeDasharray = null;
xinf.ony.Element.prototype.strokeDashoffset = null;
xinf.ony.Element.prototype.strokeLinecap = null;
xinf.ony.Element.prototype.strokeLinejoin = null;
xinf.ony.Element.prototype.strokeMiterlimit = null;
xinf.ony.Element.prototype.strokeOpacity = null;
xinf.ony.Element.prototype.strokeWidth = null;
xinf.ony.Element.prototype.styleChanged = function(attribute) {
	xinf.style.StyledElement.prototype.styleChanged.apply(this,[attribute]);
	this.redraw();
}
xinf.ony.Element.prototype.textAnchor = null;
xinf.ony.Element.prototype.toString = function() {
	var s = "";
	if(this.get_id() != null) s += "#" + this.get_id();
	if(this.get_name() != null) s += "(\"" + this.get_name() + "\")";
	return (Type.getClassName(Type.getClass(this)) + s);
}
xinf.ony.Element.prototype.transform = null;
xinf.ony.Element.prototype.visibility = null;
xinf.ony.Element.prototype.__class__ = xinf.ony.Element;
xinf.ony.erno = {}
xinf.ony.erno.Element = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Element.apply(this,[traits]);
	this.xid = null;
}}
xinf.ony.erno.Element.__name__ = ["xinf","ony","erno","Element"];
xinf.ony.erno.Element.__super__ = xinf.ony.Element;
for(var k in xinf.ony.Element.prototype ) xinf.ony.erno.Element.prototype[k] = xinf.ony.Element.prototype[k];
xinf.ony.erno.Element._manager = null;
xinf.ony.erno.Element.manager = null;
xinf.ony.erno.Element.getManager = function() {
	if(xinf.ony.erno.Element._manager == null) {
		xinf.ony.erno.Element._manager = new xinf.ony.erno.Manager();
	}
	return xinf.ony.erno.Element._manager;
}
xinf.ony.erno.Element.findById = function(id) {
	return (xinf.ony.erno.Element.getManager().find(id));
}
xinf.ony.erno.Element.prototype.construct = function() {
	if(!xinf.ony.Element.prototype.construct.apply(this,[])) return false;
	if(this.xid != null) throw ("constructing an object that is already constructed");
	this.xid = xinf.erno.Runtime.getRuntime().getNextId();
	xinf.ony.erno.Element.getManager().register(this.xid,this);
	this.redraw();
	return true;
}
xinf.ony.erno.Element.prototype.convertPaint = function(paint,opacity) {
	if(paint != null) {
		var $e = (paint);
		switch( $e[1] ) {
		case 1:
		var url = $e[2];
		{
			var r = this.ownerDocument.getTypedElementByURI(url,xinf.ony.erno.PaintServer);
			if(r == null) throw ("Referenced Paint not found: " + url);
			return r.getPaint(this);
		}break;
		case 2:
		var b = $e[4], green = $e[3], r = $e[2];
		{
			return (xinf.erno.Paint.SolidColor(r,green,b,opacity));
		}break;
		case 0:
		{
			return xinf.erno.Paint.None;
		}break;
		default:{
			throw ("unhandled Paint: " + paint + ", my fill: " + this.get_fill());
		}break;
		}
	}
	return null;
}
xinf.ony.erno.Element.prototype.destruct = function() {
	if(!xinf.ony.Element.prototype.destruct.apply(this,[])) return false;
	if(this.xid == null) throw ("destroying an object that is already destroyed");
	xinf.ony.erno.Element.getManager().unregister(this.xid);
	this.xid = null;
	return true;
}
xinf.ony.erno.Element.prototype.draw = function(g) {
	if(this.xid == null) throw ("no xid: " + this);
	g.startObject(this.xid);
	if(this.get_display() != xinf.ony.type.Display.None && this.get_visibility() != xinf.ony.type.Visibility.Hidden) this.drawContents(g);
	g.endObject();
	this.reTransform(g);
}
xinf.ony.erno.Element.prototype.drawContents = function(g) {
	var f = this.convertPaint(this.getStyleTrait("fill",xinf.ony.type.Paint),this.get_fill_opacity() * this.get_opacity());
	g.setFill(f);
	if(this.get_stroke() != null && this.get_stroke() != xinf.ony.type.Paint.None) {
		var w = this.get_stroke_width();
		var caps = this.get_line_cap();
		var join = this.get_line_join();
		var miterLimit = this.get_stroke_miterlimit();
		var _caps = function($this) {
			var $r;
			var $e = (caps);
			switch( $e[1] ) {
			case 0:
			{
				$r = xinf.erno.Constants.CAPS_BUTT;
			}break;
			case 1:
			{
				$r = xinf.erno.Constants.CAPS_ROUND;
			}break;
			case 2:
			{
				$r = xinf.erno.Constants.CAPS_SQUARE;
			}break;
			default:{
				$r = null;
			}break;
			}
			return $r;
		}(this);
		var _join = function($this) {
			var $r;
			var $e = (join);
			switch( $e[1] ) {
			case 0:
			{
				$r = xinf.erno.Constants.JOIN_MITER;
			}break;
			case 1:
			{
				$r = xinf.erno.Constants.JOIN_ROUND;
			}break;
			case 2:
			{
				$r = xinf.erno.Constants.JOIN_BEVEL;
			}break;
			default:{
				$r = null;
			}break;
			}
			return $r;
		}(this);
		var dashArray = null;
		if(this.get_stroke_dasharray() != null) {
			dashArray = this.get_stroke_dasharray().list;
			if(dashArray.length % 2 == 1 && (dashArray.length != 1 || dashArray[0] != 0)) {
				var d2 = new Array();
				{
					var _g = 0;
					while(_g < dashArray.length) {
						var i = dashArray[_g];
						++_g;
						d2.push(i);
					}
				}
				{
					var _g = 0;
					while(_g < dashArray.length) {
						var i = dashArray[_g];
						++_g;
						d2.push(i);
					}
				}
				dashArray = d2;
			}
		}
		var paint = this.convertPaint(this.get_stroke(),this.get_stroke_opacity() * this.get_opacity());
		g.setStroke(paint,w,_caps,_join,miterLimit,dashArray,this.get_stroke_dashoffset());
	}
	else g.setStroke(null,0);
}
xinf.ony.erno.Element.prototype.reTransform = function(g) {
	if(this.xid == null) throw ("no xid: " + this);
	var t = this.get_transform();
	if(t == null) t = new xinf.geom.Identity();
	var m = t.getMatrix();
	g.setTransform(this.xid,m.tx,m.ty,m.a,m.b,m.c,m.d);
}
xinf.ony.erno.Element.prototype.redraw = function() {
	if(this.xid != null) xinf.ony.erno.Element.getManager().objectChanged(this.xid,this);
}
xinf.ony.erno.Element.prototype.retransform = function() {
	if(this.xid != null) xinf.ony.erno.Element.getManager().objectMoved(this.xid,this);
}
xinf.ony.erno.Element.prototype.xid = null;
xinf.ony.erno.Element.prototype.__class__ = xinf.ony.erno.Element;
xinf.ony.Line = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Line.__name__ = ["xinf","ony","Line"];
xinf.ony.Line.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Line.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Line.prototype.getBoundingBox = function() {
	return { l : this.get_x1(), t : this.get_y1(), r : this.get_x2(), b : this.get_y2()}
}
xinf.ony.Line.prototype.get_x1 = function() {
	return this.getTrait("x1",xinf.ony.type.Length).value;
}
xinf.ony.Line.prototype.get_x2 = function() {
	return this.getTrait("x2",xinf.ony.type.Length).value;
}
xinf.ony.Line.prototype.get_y1 = function() {
	return this.getTrait("y1",xinf.ony.type.Length).value;
}
xinf.ony.Line.prototype.get_y2 = function() {
	return this.getTrait("y2",xinf.ony.type.Length).value;
}
xinf.ony.Line.prototype.set_x1 = function(v) {
	this.setTrait("x1",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Line.prototype.set_x2 = function(v) {
	this.setTrait("x2",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Line.prototype.set_y1 = function(v) {
	this.setTrait("y1",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Line.prototype.set_y2 = function(v) {
	this.setTrait("y2",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Line.prototype.x1 = null;
xinf.ony.Line.prototype.x2 = null;
xinf.ony.Line.prototype.y1 = null;
xinf.ony.Line.prototype.y2 = null;
xinf.ony.Line.prototype.__class__ = xinf.ony.Line;
xinf.ony.traits.PointListTrait = function(p) { if( p === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[new List()]);
}}
xinf.ony.traits.PointListTrait.__name__ = ["xinf","ony","traits","PointListTrait"];
xinf.ony.traits.PointListTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.PointListTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.PointListTrait.prototype.getDefault = function() {
	return new List();
}
xinf.ony.traits.PointListTrait.prototype.parse = function(value) {
	var ps = new List();
	var s = xinf.ony.traits.PointListTrait.pointSplit.split(value);
	if(s.length % 2 != 0) return ps;
	while(s.length > 1) {
		var x = Std.parseFloat(s.shift());
		var y = Std.parseFloat(s.shift());
		ps.add({ x : x, y : y});
	}
	return ps;
}
xinf.ony.traits.PointListTrait.prototype.write = function(value) {
	var r = "";
	var v = value;
	{ var $it15 = v.iterator();
	while( $it15.hasNext() ) { var p = $it15.next();
	{
		r += p.x + "," + p.y + " ";
	}
	}}
	return r;
}
xinf.ony.traits.PointListTrait.prototype.__class__ = xinf.ony.traits.PointListTrait;
xinf.erno.TextFormat = function(family,size,bold,italic) { if( family === $_ ) return; {
	if(family == null) family = "_sans";
	if(size == null) size = 12.0;
	if(bold == null) bold = false;
	if(italic == null) italic = false;
	this.setFamily(family);
	this.setSize(size);
	this.setBold(bold);
	this.setItalic(italic);
	this.dirty = true;
}}
xinf.erno.TextFormat.__name__ = ["xinf","erno","TextFormat"];
xinf.erno.TextFormat.create = function(family,size,bold,italic) {
	return new xinf.erno.js.JSTextFormat(family,size,bold,italic);
}
xinf.erno.TextFormat.DEFAULT = null;
xinf.erno.TextFormat.getDefault = function() {
	if(xinf.erno.TextFormat.DEFAULT == null) xinf.erno.TextFormat.DEFAULT = xinf.erno.TextFormat.create();
	return xinf.erno.TextFormat.DEFAULT;
}
xinf.erno.TextFormat.prototype.apply = function(to) {
	null;
}
xinf.erno.TextFormat.prototype.ascender = function() {
	return this.size;
}
xinf.erno.TextFormat.prototype.assureGlyphs = function(text,size) {
	null;
}
xinf.erno.TextFormat.prototype.assureLoaded = function() {
	if(this.dirty) this.load();
}
xinf.erno.TextFormat.prototype.bold = null;
xinf.erno.TextFormat.prototype.dirty = null;
xinf.erno.TextFormat.prototype.family = null;
xinf.erno.TextFormat.prototype.italic = null;
xinf.erno.TextFormat.prototype.load = function() {
	this.dirty = false;
}
xinf.erno.TextFormat.prototype.setBold = function(v) {
	this.bold = v;
	this.dirty = true;
	return v;
}
xinf.erno.TextFormat.prototype.setFamily = function(family) {
	this.family = family;
	this.dirty = true;
	return family;
}
xinf.erno.TextFormat.prototype.setItalic = function(v) {
	this.italic = v;
	this.dirty = true;
	return v;
}
xinf.erno.TextFormat.prototype.setSize = function(size) {
	this.size = size;
	this.dirty = true;
	return size;
}
xinf.erno.TextFormat.prototype.size = null;
xinf.erno.TextFormat.prototype.textSize = function(text) {
	return null;
}
xinf.erno.TextFormat.prototype.__class__ = xinf.erno.TextFormat;
xinf.ony.erno.Line = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Line.apply(this,[traits]);
}}
xinf.ony.erno.Line.__name__ = ["xinf","ony","erno","Line"];
xinf.ony.erno.Line.__super__ = xinf.ony.Line;
for(var k in xinf.ony.Line.prototype ) xinf.ony.erno.Line.prototype[k] = xinf.ony.Line.prototype[k];
xinf.ony.erno.Line.prototype.drawContents = function(g) {
	xinf.ony.Line.prototype.drawContents.apply(this,[g]);
	g.startShape();
	g.startPath(this.get_x1(),this.get_y1());
	g.lineTo(this.get_x2(),this.get_y2());
	g.endPath();
	g.endShape();
}
xinf.ony.erno.Line.prototype.__class__ = xinf.ony.erno.Line;
org = {}
org.puremvc = {}
org.puremvc.haxe = {}
org.puremvc.haxe.interfaces = {}
org.puremvc.haxe.interfaces.INotifier = function() { }
org.puremvc.haxe.interfaces.INotifier.__name__ = ["org","puremvc","haxe","interfaces","INotifier"];
org.puremvc.haxe.interfaces.INotifier.prototype.sendNotification = null;
org.puremvc.haxe.interfaces.INotifier.prototype.__class__ = org.puremvc.haxe.interfaces.INotifier;
org.puremvc.haxe.patterns = {}
org.puremvc.haxe.patterns.observer = {}
org.puremvc.haxe.patterns.observer.Notifier = function(p) { if( p === $_ ) return; {
	this.facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
}}
org.puremvc.haxe.patterns.observer.Notifier.__name__ = ["org","puremvc","haxe","patterns","observer","Notifier"];
org.puremvc.haxe.patterns.observer.Notifier.prototype.facade = null;
org.puremvc.haxe.patterns.observer.Notifier.prototype.sendNotification = function(notificationName,body,type) {
	this.facade.sendNotification(notificationName,body,type);
}
org.puremvc.haxe.patterns.observer.Notifier.prototype.__class__ = org.puremvc.haxe.patterns.observer.Notifier;
org.puremvc.haxe.patterns.observer.Notifier.__interfaces__ = [org.puremvc.haxe.interfaces.INotifier];
org.puremvc.haxe.interfaces.ICommand = function() { }
org.puremvc.haxe.interfaces.ICommand.__name__ = ["org","puremvc","haxe","interfaces","ICommand"];
org.puremvc.haxe.interfaces.ICommand.prototype.execute = null;
org.puremvc.haxe.interfaces.ICommand.prototype.__class__ = org.puremvc.haxe.interfaces.ICommand;
org.puremvc.haxe.patterns.command = {}
org.puremvc.haxe.patterns.command.SimpleCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
}}
org.puremvc.haxe.patterns.command.SimpleCommand.__name__ = ["org","puremvc","haxe","patterns","command","SimpleCommand"];
org.puremvc.haxe.patterns.command.SimpleCommand.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.command.SimpleCommand.prototype.execute = function(notification) {
	null;
}
org.puremvc.haxe.patterns.command.SimpleCommand.prototype.__class__ = org.puremvc.haxe.patterns.command.SimpleCommand;
org.puremvc.haxe.patterns.command.SimpleCommand.__interfaces__ = [org.puremvc.haxe.interfaces.ICommand];
xinf.ony.type.SVGPathSegment = { __ename__ : ["xinf","ony","type","SVGPathSegment"], __constructs__ : ["MoveTo","MoveToR","Close","LineTo","LineToR","HorizontalTo","HorizontalToR","VerticalTo","VerticalToR","CubicTo","CubicToR","SmoothCubicTo","SmoothCubicToR","QuadraticTo","QuadraticToR","SmoothQuadraticTo","SmoothQuadraticToR","ArcTo","ArcToR"] }
xinf.ony.type.SVGPathSegment.ArcTo = function(rx,ry,rotation,largeArc,sweep,x,y) { var $x = ["ArcTo",17,rx,ry,rotation,largeArc,sweep,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.ArcToR = function(rx,ry,rotation,largeArc,sweep,x,y) { var $x = ["ArcToR",18,rx,ry,rotation,largeArc,sweep,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.Close = ["Close",2];
xinf.ony.type.SVGPathSegment.Close.toString = $estr;
xinf.ony.type.SVGPathSegment.Close.__enum__ = xinf.ony.type.SVGPathSegment;
xinf.ony.type.SVGPathSegment.CubicTo = function(x1,y1,x2,y2,x,y) { var $x = ["CubicTo",9,x1,y1,x2,y2,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.CubicToR = function(x1,y1,x2,y2,x,y) { var $x = ["CubicToR",10,x1,y1,x2,y2,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.HorizontalTo = function(x) { var $x = ["HorizontalTo",5,x]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.HorizontalToR = function(x) { var $x = ["HorizontalToR",6,x]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.LineTo = function(x,y) { var $x = ["LineTo",3,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.LineToR = function(x,y) { var $x = ["LineToR",4,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.MoveTo = function(x,y) { var $x = ["MoveTo",0,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.MoveToR = function(x,y) { var $x = ["MoveToR",1,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.QuadraticTo = function(x1,y1,x,y) { var $x = ["QuadraticTo",13,x1,y1,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.QuadraticToR = function(x1,y1,x,y) { var $x = ["QuadraticToR",14,x1,y1,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.SmoothCubicTo = function(x2,y2,x,y) { var $x = ["SmoothCubicTo",11,x2,y2,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.SmoothCubicToR = function(x2,y2,x,y) { var $x = ["SmoothCubicToR",12,x2,y2,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.SmoothQuadraticTo = function(x,y) { var $x = ["SmoothQuadraticTo",15,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.SmoothQuadraticToR = function(x,y) { var $x = ["SmoothQuadraticToR",16,x,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.VerticalTo = function(y) { var $x = ["VerticalTo",7,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.SVGPathSegment.VerticalToR = function(y) { var $x = ["VerticalToR",8,y]; $x.__enum__ = xinf.ony.type.SVGPathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.GradientUnits = { __ename__ : ["xinf","ony","type","GradientUnits"], __constructs__ : ["UserSpaceOnUse","ObjectBoundingBox"] }
xinf.ony.type.GradientUnits.ObjectBoundingBox = ["ObjectBoundingBox",1];
xinf.ony.type.GradientUnits.ObjectBoundingBox.toString = $estr;
xinf.ony.type.GradientUnits.ObjectBoundingBox.__enum__ = xinf.ony.type.GradientUnits;
xinf.ony.type.GradientUnits.UserSpaceOnUse = ["UserSpaceOnUse",0];
xinf.ony.type.GradientUnits.UserSpaceOnUse.toString = $estr;
xinf.ony.type.GradientUnits.UserSpaceOnUse.__enum__ = xinf.ony.type.GradientUnits;
xinf.ony.type.SpreadMethod = { __ename__ : ["xinf","ony","type","SpreadMethod"], __constructs__ : ["PadSpread","ReflectSpread","RepeatSpread"] }
xinf.ony.type.SpreadMethod.PadSpread = ["PadSpread",0];
xinf.ony.type.SpreadMethod.PadSpread.toString = $estr;
xinf.ony.type.SpreadMethod.PadSpread.__enum__ = xinf.ony.type.SpreadMethod;
xinf.ony.type.SpreadMethod.ReflectSpread = ["ReflectSpread",1];
xinf.ony.type.SpreadMethod.ReflectSpread.toString = $estr;
xinf.ony.type.SpreadMethod.ReflectSpread.__enum__ = xinf.ony.type.SpreadMethod;
xinf.ony.type.SpreadMethod.RepeatSpread = ["RepeatSpread",2];
xinf.ony.type.SpreadMethod.RepeatSpread.toString = $estr;
xinf.ony.type.SpreadMethod.RepeatSpread.__enum__ = xinf.ony.type.SpreadMethod;
xinf.ony.Gradient = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
	this.stops = new Array();
}}
xinf.ony.Gradient.__name__ = ["xinf","ony","Gradient"];
xinf.ony.Gradient.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Gradient.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Gradient.prototype.fromXml = function(xml) {
	xinf.ony.erno.Element.prototype.fromXml.apply(this,[xml]);
	{ var $it16 = xml.elementsNamed("stop");
	while( $it16.hasNext() ) { var i = $it16.next();
	{
		var s = new xinf.ony.GradientStop();
		s.ownerDocument = this.ownerDocument;
		s.parentElement = this;
		s.fromXml(i);
		this.get_stops().push(s);
	}
	}}
	if(xml.exists("xlink:href")) this.set_href(xml.get("xlink:href"));
}
xinf.ony.Gradient.prototype.get_gradientTransform = function() {
	var r = this.getTrait("gradientTransform",xinf.geom.Transform);
	if(r == null) return ((this.peer != null?this.peer.get_gradientTransform():new xinf.geom.Identity()));
	return r;
}
xinf.ony.Gradient.prototype.get_gradientUnits = function() {
	var r = this.getTrait("gradientUnits",xinf.ony.type.GradientUnits,false);
	if(r == null) return ((this.peer != null?this.peer.get_gradientUnits():xinf.ony.type.GradientUnits.ObjectBoundingBox));
	return r;
}
xinf.ony.Gradient.prototype.get_spreadMethod = function() {
	var r = this.getTrait("spreadMethod",xinf.ony.type.SpreadMethod,false);
	if(r == null) return ((this.peer != null?this.peer.get_spreadMethod():xinf.ony.type.SpreadMethod.PadSpread));
	return r;
}
xinf.ony.Gradient.prototype.get_stops = function() {
	if(this.stops.length == 0 && this.peer != null) {
		return this.peer.get_stops();
	}
	return this.stops;
}
xinf.ony.Gradient.prototype.gradientTransform = null;
xinf.ony.Gradient.prototype.gradientUnits = null;
xinf.ony.Gradient.prototype.href = null;
xinf.ony.Gradient.prototype.onLoad = function() {
	xinf.ony.erno.Element.prototype.onLoad.apply(this,[]);
	if(this.href != null && this.peer == null) {
		this.set_peer(this.ownerDocument.getTypedElementByURI(this.href,xinf.ony.Gradient));
	}
}
xinf.ony.Gradient.prototype.peer = null;
xinf.ony.Gradient.prototype.set_gradientTransform = function(v) {
	this.setTrait("gradientTransform",v);
	return v;
}
xinf.ony.Gradient.prototype.set_gradientUnits = function(v) {
	return this.setTrait("gradientUnits",v);
}
xinf.ony.Gradient.prototype.set_href = function(v) {
	this.href = v;
	try {
		this.set_peer(this.ownerDocument.getTypedElementByURI(this.href,xinf.ony.Gradient));
	}
	catch( $e17 ) {
		{
			var e = $e17;
			null;
		}
	}
	return this.href;
}
xinf.ony.Gradient.prototype.set_peer = function(v) {
	if(v == this) throw ("Gradient #" + this.get_id() + " referencing itself.");
	this.peer = v;
	this.redraw();
	return v;
}
xinf.ony.Gradient.prototype.set_spreadMethod = function(v) {
	return this.setTrait("spreadMethod",v);
}
xinf.ony.Gradient.prototype.spreadMethod = null;
xinf.ony.Gradient.prototype.stops = null;
xinf.ony.Gradient.prototype.__class__ = xinf.ony.Gradient;
xinf.ony.RadialGradient = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Gradient.apply(this,[traits]);
}}
xinf.ony.RadialGradient.__name__ = ["xinf","ony","RadialGradient"];
xinf.ony.RadialGradient.__super__ = xinf.ony.Gradient;
for(var k in xinf.ony.Gradient.prototype ) xinf.ony.RadialGradient.prototype[k] = xinf.ony.Gradient.prototype[k];
xinf.ony.RadialGradient.prototype.cx = null;
xinf.ony.RadialGradient.prototype.cy = null;
xinf.ony.RadialGradient.prototype.get_cx = function() {
	return this.getTrait("cx",Float);
}
xinf.ony.RadialGradient.prototype.get_cy = function() {
	return this.getTrait("cy",Float);
}
xinf.ony.RadialGradient.prototype.get_r = function() {
	return this.getTrait("r",Float);
}
xinf.ony.RadialGradient.prototype.r = null;
xinf.ony.RadialGradient.prototype.set_cx = function(v) {
	return this.setTrait("cx",v);
}
xinf.ony.RadialGradient.prototype.set_cy = function(v) {
	return this.setTrait("cy",v);
}
xinf.ony.RadialGradient.prototype.set_r = function(v) {
	return this.setTrait("r",v);
}
xinf.ony.RadialGradient.prototype.__class__ = xinf.ony.RadialGradient;
xinf.ony.erno.PaintServer = function() { }
xinf.ony.erno.PaintServer.__name__ = ["xinf","ony","erno","PaintServer"];
xinf.ony.erno.PaintServer.prototype.getPaint = null;
xinf.ony.erno.PaintServer.prototype.__class__ = xinf.ony.erno.PaintServer;
xinf.ony.erno.RadialGradient = function(traits) { if( traits === $_ ) return; {
	xinf.ony.RadialGradient.apply(this,[traits]);
}}
xinf.ony.erno.RadialGradient.__name__ = ["xinf","ony","erno","RadialGradient"];
xinf.ony.erno.RadialGradient.__super__ = xinf.ony.RadialGradient;
for(var k in xinf.ony.RadialGradient.prototype ) xinf.ony.erno.RadialGradient.prototype[k] = xinf.ony.RadialGradient.prototype[k];
xinf.ony.erno.RadialGradient.prototype.getPaint = function(target) {
	var center = { x : this.get_cx(), y : this.get_cy()}
	var focus = { x : this.get_cx(), y : this.get_cy()}
	var pr = { x : this.get_r(), y : 0.}
	var _r = this.get_r();
	var transform = null;
	if(this.get_gradientTransform() != null) {
		transform = this.get_gradientTransform();
	}
	if(this.get_gradientUnits() == xinf.ony.type.GradientUnits.ObjectBoundingBox) {
		var bbox = target.getBoundingBox();
		var t = new xinf.geom.Concatenate(new xinf.geom.Scale(bbox.r - bbox.l,bbox.b - bbox.t),new xinf.geom.Translate(bbox.l,bbox.t));
		if(transform != null) transform = new xinf.geom.Concatenate(transform,t);
		else transform = t;
	}
	var spread = function($this) {
		var $r;
		var $e = ($this.get_spreadMethod());
		switch( $e[1] ) {
		case 0:
		{
			$r = xinf.erno.Constants.SPREAD_PAD;
		}break;
		case 1:
		{
			$r = xinf.erno.Constants.SPREAD_REFLECT;
		}break;
		case 2:
		{
			$r = xinf.erno.Constants.SPREAD_REPEAT;
		}break;
		default:{
			$r = null;
		}break;
		}
		return $r;
	}(this);
	return xinf.erno.Paint.PRadialGradient(this.get_stops(),center.x,center.y,_r,focus.x,focus.y,transform,spread);
}
xinf.ony.erno.RadialGradient.prototype.__class__ = xinf.ony.erno.RadialGradient;
xinf.ony.erno.RadialGradient.__interfaces__ = [xinf.ony.erno.PaintServer];
org.puremvc.haxe.interfaces.IController = function() { }
org.puremvc.haxe.interfaces.IController.__name__ = ["org","puremvc","haxe","interfaces","IController"];
org.puremvc.haxe.interfaces.IController.prototype.executeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.registerCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.removeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.__class__ = org.puremvc.haxe.interfaces.IController;
xinf.ony.Circle = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Circle.__name__ = ["xinf","ony","Circle"];
xinf.ony.Circle.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Circle.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Circle.prototype.cx = null;
xinf.ony.Circle.prototype.cy = null;
xinf.ony.Circle.prototype.getBoundingBox = function() {
	return { l : this.get_cx() - this.get_r(), t : this.get_cy() - this.get_r(), r : this.get_cx() + this.get_r(), b : this.get_cy() + this.get_r()}
}
xinf.ony.Circle.prototype.get_cx = function() {
	return this.getTrait("cx",xinf.ony.type.Length).value;
}
xinf.ony.Circle.prototype.get_cy = function() {
	return this.getTrait("cy",xinf.ony.type.Length).value;
}
xinf.ony.Circle.prototype.get_r = function() {
	return this.getTrait("r",xinf.ony.type.Length).value;
}
xinf.ony.Circle.prototype.r = null;
xinf.ony.Circle.prototype.set_cx = function(v) {
	this.setTrait("cx",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Circle.prototype.set_cy = function(v) {
	this.setTrait("cy",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Circle.prototype.set_r = function(v) {
	this.setTrait("r",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Circle.prototype.__class__ = xinf.ony.Circle;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.first = function() {
	return (this.h == null?null:this.h[0]);
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	return (this.h == null);
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return (this.h != null);
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b += sep;
		s.b += l[0];
		l = l[1];
	}
	return s.b;
}
List.prototype.last = function() {
	return (this.q == null?null:this.q[0]);
}
List.prototype.length = null;
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.toString = function() {
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
	return s.b;
}
List.prototype.__class__ = List;
xinf.ony.LinearGradient = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Gradient.apply(this,[traits]);
}}
xinf.ony.LinearGradient.__name__ = ["xinf","ony","LinearGradient"];
xinf.ony.LinearGradient.__super__ = xinf.ony.Gradient;
for(var k in xinf.ony.Gradient.prototype ) xinf.ony.LinearGradient.prototype[k] = xinf.ony.Gradient.prototype[k];
xinf.ony.LinearGradient.prototype.get_x1 = function() {
	return this.getTrait("x1",Float);
}
xinf.ony.LinearGradient.prototype.get_x2 = function() {
	return this.getTrait("x2",Float);
}
xinf.ony.LinearGradient.prototype.get_y1 = function() {
	return this.getTrait("y1",Float);
}
xinf.ony.LinearGradient.prototype.get_y2 = function() {
	return this.getTrait("y2",Float);
}
xinf.ony.LinearGradient.prototype.set_x1 = function(v) {
	return this.setTrait("x1",v);
}
xinf.ony.LinearGradient.prototype.set_x2 = function(v) {
	return this.setTrait("x2",v);
}
xinf.ony.LinearGradient.prototype.set_y1 = function(v) {
	return this.setTrait("y1",v);
}
xinf.ony.LinearGradient.prototype.set_y2 = function(v) {
	return this.setTrait("y2",v);
}
xinf.ony.LinearGradient.prototype.x1 = null;
xinf.ony.LinearGradient.prototype.x2 = null;
xinf.ony.LinearGradient.prototype.y1 = null;
xinf.ony.LinearGradient.prototype.y2 = null;
xinf.ony.LinearGradient.prototype.__class__ = xinf.ony.LinearGradient;
xinf.ony.traits.LineIncrementTrait = function(p) { if( p === $_ ) return; {
	xinf.traits.FloatTrait.apply(this,[-1]);
}}
xinf.ony.traits.LineIncrementTrait.__name__ = ["xinf","ony","traits","LineIncrementTrait"];
xinf.ony.traits.LineIncrementTrait.__super__ = xinf.traits.FloatTrait;
for(var k in xinf.traits.FloatTrait.prototype ) xinf.ony.traits.LineIncrementTrait.prototype[k] = xinf.traits.FloatTrait.prototype[k];
xinf.ony.traits.LineIncrementTrait.prototype.parse = function(value) {
	if(value == "auto") return -1.;
	var v = xinf.traits.FloatTrait.prototype.parse.apply(this,[value]);
	if(v < 0) throw ("line-increment needs to be positive");
	return v;
}
xinf.ony.traits.LineIncrementTrait.prototype.__class__ = xinf.ony.traits.LineIncrementTrait;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
org.puremvc.haxe.interfaces.IMediator = function() { }
org.puremvc.haxe.interfaces.IMediator.__name__ = ["org","puremvc","haxe","interfaces","IMediator"];
org.puremvc.haxe.interfaces.IMediator.prototype.getMediatorName = null;
org.puremvc.haxe.interfaces.IMediator.prototype.getViewComponent = null;
org.puremvc.haxe.interfaces.IMediator.prototype.handleNotification = null;
org.puremvc.haxe.interfaces.IMediator.prototype.listNotificationInterests = null;
org.puremvc.haxe.interfaces.IMediator.prototype.onRegister = null;
org.puremvc.haxe.interfaces.IMediator.prototype.onRemove = null;
org.puremvc.haxe.interfaces.IMediator.prototype.setViewComponent = null;
org.puremvc.haxe.interfaces.IMediator.prototype.__class__ = org.puremvc.haxe.interfaces.IMediator;
org.puremvc.haxe.patterns.mediator = {}
org.puremvc.haxe.patterns.mediator.Mediator = function(mediatorName,viewComponent) { if( mediatorName === $_ ) return; {
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.mediatorName = (mediatorName != null?mediatorName:org.puremvc.haxe.patterns.mediator.Mediator.NAME);
	if(viewComponent != null) this.viewComponent = viewComponent;
}}
org.puremvc.haxe.patterns.mediator.Mediator.__name__ = ["org","puremvc","haxe","patterns","mediator","Mediator"];
org.puremvc.haxe.patterns.mediator.Mediator.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.mediator.Mediator.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.mediator.Mediator.prototype.getMediatorName = function() {
	return this.mediatorName;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.getViewComponent = function() {
	return this.viewComponent;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.handleNotification = function(notification) {
	null;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.listNotificationInterests = function() {
	return [];
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.mediatorName = null;
org.puremvc.haxe.patterns.mediator.Mediator.prototype.onRegister = function() {
	null;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.onRemove = function() {
	null;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.setViewComponent = function(viewComponent) {
	this.viewComponent = viewComponent;
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.viewComponent = null;
org.puremvc.haxe.patterns.mediator.Mediator.prototype.__class__ = org.puremvc.haxe.patterns.mediator.Mediator;
org.puremvc.haxe.patterns.mediator.Mediator.__interfaces__ = [org.puremvc.haxe.interfaces.IMediator];
org.puremvc.haxe.utilities = {}
org.puremvc.haxe.utilities.statemachine = {}
org.puremvc.haxe.utilities.statemachine.StateMachine = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,["StateMachine"]);
	this.states = new Hash();
}}
org.puremvc.haxe.utilities.statemachine.StateMachine.__name__ = ["org","puremvc","haxe","utilities","statemachine","StateMachine"];
org.puremvc.haxe.utilities.statemachine.StateMachine.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.utilities.statemachine.StateMachine.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.canceled = null;
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.currentState = null;
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.getCurrentState = function() {
	return this.viewComponent;
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.handleNotification = function(note) {
	switch(note.getName()) {
	case "StateMachine" + "/notes/action":{
		var action = note.getType();
		var target = this.getCurrentState().getTarget(action);
		if(this.states.exists(target)) this.transitionTo(this.states.get(target));
	}break;
	case "StateMachine" + "/notes/cancel":{
		this.canceled = true;
	}break;
	}
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.initial = null;
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.listNotificationInterests = function() {
	return ["StateMachine" + "/notes/action","StateMachine" + "/notes/cancel"];
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.onRegister = function() {
	if(this.initial != null) this.transitionTo(this.initial);
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.registerState = function(state,initial) {
	if(initial == null) initial = false;
	if(state == null || this.states.exists(state.name)) return;
	this.states.set(state.name,state);
	if(initial) this.initial = state;
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.removeState = function(stateName) {
	if(this.states.exists(stateName)) this.states.remove(stateName);
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.setCurrentState = function(state) {
	this.viewComponent = state;
	return state;
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.states = null;
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.transitionTo = function(nextState) {
	if(nextState == null) return;
	this.canceled = false;
	if(this.getCurrentState() != null) {
		if(nextState.name == this.getCurrentState().name) return;
		if(this.getCurrentState().exiting != null) this.sendNotification(this.getCurrentState().exiting,nextState);
	}
	if(this.canceled) {
		this.canceled = false;
		return;
	}
	if(nextState.entering != null) this.sendNotification(nextState.entering,nextState);
	this.setCurrentState(nextState);
	this.sendNotification("StateMachine" + "/notes/changed",this.getCurrentState());
}
org.puremvc.haxe.utilities.statemachine.StateMachine.prototype.__class__ = org.puremvc.haxe.utilities.statemachine.StateMachine;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e18 ) {
		{
			var e = $e18;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b += "{";
	var it = this.keys();
	{ var $it19 = it;
	while( $it19.hasNext() ) { var i = $it19.next();
	{
		s.b += i;
		s.b += " => ";
		s.b += Std.string(this.get(i));
		if(it.hasNext()) s.b += ", ";
	}
	}}
	s.b += "}";
	return s.b;
}
Hash.prototype.__class__ = Hash;
xinf.xml.IBinding = function() { }
xinf.xml.IBinding.__name__ = ["xinf","xml","IBinding"];
xinf.xml.IBinding.prototype.add = null;
xinf.xml.IBinding.prototype.addInstantiator = null;
xinf.xml.IBinding.prototype.instantiate = null;
xinf.xml.IBinding.prototype.__class__ = xinf.xml.IBinding;
xinf.ony.Group = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Group.__name__ = ["xinf","ony","Group"];
xinf.ony.Group.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Group.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Group.prototype.appendChild = function(newChild) {
	this.redraw();
	return xinf.ony.erno.Element.prototype.appendChild.apply(this,[newChild]);
}
xinf.ony.Group.prototype.removeChild = function(oldChild) {
	this.redraw();
	return xinf.ony.erno.Element.prototype.removeChild.apply(this,[oldChild]);
}
xinf.ony.Group.prototype.__class__ = xinf.ony.Group;
xinf.ony.erno.Group = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Group.apply(this,[traits]);
}}
xinf.ony.erno.Group.__name__ = ["xinf","ony","erno","Group"];
xinf.ony.erno.Group.__super__ = xinf.ony.Group;
for(var k in xinf.ony.Group.prototype ) xinf.ony.erno.Group.prototype[k] = xinf.ony.Group.prototype[k];
xinf.ony.erno.Group.prototype.draw = function(g) {
	if(this.xid == null) throw ("no xid: " + this);
	g.startObject(this.xid);
	if(this.get_display() != xinf.ony.type.Display.None) this.drawContents(g);
	g.endObject();
	this.reTransform(g);
}
xinf.ony.erno.Group.prototype.drawContents = function(g) {
	var _g = 0, _g1 = this.mChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		if(child.xid != null) {
			g.showObject(child.xid);
		}
	}
}
xinf.ony.erno.Group.prototype.__class__ = xinf.ony.erno.Group;
xinf.ony.Definitions = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Group.apply(this,[traits]);
}}
xinf.ony.Definitions.__name__ = ["xinf","ony","Definitions"];
xinf.ony.Definitions.__super__ = xinf.ony.erno.Group;
for(var k in xinf.ony.erno.Group.prototype ) xinf.ony.Definitions.prototype[k] = xinf.ony.erno.Group.prototype[k];
xinf.ony.Definitions.prototype.__class__ = xinf.ony.Definitions;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.h = null;
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}}
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b += "{";
	var it = this.keys();
	{ var $it20 = it;
	while( $it20.hasNext() ) { var i = $it20.next();
	{
		s.b += i;
		s.b += " => ";
		s.b += Std.string(this.get(i));
		if(it.hasNext()) s.b += ", ";
	}
	}}
	s.b += "}";
	return s.b;
}
IntHash.prototype.__class__ = IntHash;
xinf.style.Selector = { __ename__ : ["xinf","style","Selector"], __constructs__ : ["Any","ClassName","StyleClass","ById","AnyOf","AllOf","Parent","Ancestor","GrandAncestor","Preceding","Unknown"] }
xinf.style.Selector.AllOf = function(a) { var $x = ["AllOf",5,a]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.Ancestor = function(s) { var $x = ["Ancestor",7,s]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.Any = ["Any",0];
xinf.style.Selector.Any.toString = $estr;
xinf.style.Selector.Any.__enum__ = xinf.style.Selector;
xinf.style.Selector.AnyOf = function(a) { var $x = ["AnyOf",4,a]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.ById = function(id) { var $x = ["ById",3,id]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.ClassName = function(name) { var $x = ["ClassName",1,name]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.GrandAncestor = function(s) { var $x = ["GrandAncestor",8,s]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.Parent = function(s) { var $x = ["Parent",6,s]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.Preceding = function(s) { var $x = ["Preceding",9,s]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.StyleClass = function(name) { var $x = ["StyleClass",2,name]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.style.Selector.Unknown = function(text) { var $x = ["Unknown",10,text]; $x.__enum__ = xinf.style.Selector; $x.toString = $estr; return $x; }
xinf.erno.BasicRenderer = function(p) { if( p === $_ ) return; {
	null;
}}
xinf.erno.BasicRenderer.__name__ = ["xinf","erno","BasicRenderer"];
xinf.erno.BasicRenderer.prototype.arcTo = function(x1,y1,rx,ry,rotation,largeArc,sweep,x,y) {
	this.unimplemented("arcTo");
}
xinf.erno.BasicRenderer.prototype.clipRect = function(w,h) {
	this.unimplemented("clipRect");
}
xinf.erno.BasicRenderer.prototype.close = function() {
	this.unimplemented("close");
}
xinf.erno.BasicRenderer.prototype.cubicTo = function(x1,y1,x2,y2,x,y) {
	this.unimplemented("cubicTo");
}
xinf.erno.BasicRenderer.prototype.destroyObject = function(id) {
	this.unimplemented("freeObject");
}
xinf.erno.BasicRenderer.prototype.ellipse = function(x,y,rx,ry) {
	this.unimplemented("ellipse");
}
xinf.erno.BasicRenderer.prototype.endNative = function() {
	this.unimplemented("endNative");
}
xinf.erno.BasicRenderer.prototype.endObject = function() {
	this.unimplemented("endObject");
}
xinf.erno.BasicRenderer.prototype.endPath = function() {
	this.unimplemented("endPath");
}
xinf.erno.BasicRenderer.prototype.endShape = function() {
	this.unimplemented("endShape");
}
xinf.erno.BasicRenderer.prototype.image = function(img,inRegion,outRegion) {
	this.unimplemented("image");
}
xinf.erno.BasicRenderer.prototype.lineTo = function(x,y) {
	this.unimplemented("lineTo");
}
xinf.erno.BasicRenderer.prototype["native"] = function(o) {
	this.unimplemented("native");
}
xinf.erno.BasicRenderer.prototype.quadraticTo = function(x1,y1,x,y) {
	this.unimplemented("quadraticTo");
}
xinf.erno.BasicRenderer.prototype.rect = function(x,y,w,h) {
	this.unimplemented("rect");
}
xinf.erno.BasicRenderer.prototype.roundedRect = function(x,y,w,h,rx,ry) {
	this.unimplemented("roundedRect");
}
xinf.erno.BasicRenderer.prototype.setFill = function(paint) {
	this.unimplemented("setFill");
}
xinf.erno.BasicRenderer.prototype.setStroke = function(paint,width,caps,join,miterLimit,dashArray,dashOffset) {
	this.unimplemented("setStroke");
}
xinf.erno.BasicRenderer.prototype.setTransform = function(id,x,y,a,b,c,d) {
	this.unimplemented("setTransform");
}
xinf.erno.BasicRenderer.prototype.setTranslation = function(id,x,y) {
	this.unimplemented("setTranslation");
}
xinf.erno.BasicRenderer.prototype.showObject = function(id) {
	this.unimplemented("showObject");
}
xinf.erno.BasicRenderer.prototype.startNative = function(o) {
	this.unimplemented("startNative");
}
xinf.erno.BasicRenderer.prototype.startObject = function(id) {
	this.unimplemented("startObject");
}
xinf.erno.BasicRenderer.prototype.startPath = function(x,y) {
	this.unimplemented("startPath");
}
xinf.erno.BasicRenderer.prototype.startShape = function() {
	this.unimplemented("startShape");
}
xinf.erno.BasicRenderer.prototype.text = function(x,y,text,format) {
	this.unimplemented("text");
}
xinf.erno.BasicRenderer.prototype.unimplemented = function(func) {
	haxe.Log.trace("unimplemented: " + func,{ fileName : "BasicRenderer.hx", lineNumber : 21, className : "xinf.erno.BasicRenderer", methodName : "unimplemented"});
}
xinf.erno.BasicRenderer.prototype.__class__ = xinf.erno.BasicRenderer;
xinf.erno.BasicRenderer.__interfaces__ = [xinf.erno.Renderer];
xinf.erno.PenRenderer = function(p) { if( p === $_ ) return; {
	xinf.erno.BasicRenderer.apply(this,[]);
	this.pen = new xinf.erno.Pen();
}}
xinf.erno.PenRenderer.__name__ = ["xinf","erno","PenRenderer"];
xinf.erno.PenRenderer.__super__ = xinf.erno.BasicRenderer;
for(var k in xinf.erno.BasicRenderer.prototype ) xinf.erno.PenRenderer.prototype[k] = xinf.erno.BasicRenderer.prototype[k];
xinf.erno.PenRenderer.prototype.pen = null;
xinf.erno.PenRenderer.prototype.setFill = function(paint) {
	this.pen.fill = paint;
}
xinf.erno.PenRenderer.prototype.setStroke = function(paint,width,caps,join,miterLimit,dashArray,dashOffset) {
	this.pen.stroke = paint;
	this.pen.width = width;
	this.pen.caps = caps;
	this.pen.join = join;
	this.pen.miterLimit = miterLimit;
	this.pen.dashArray = dashArray;
	this.pen.dashOffset = dashOffset;
}
xinf.erno.PenRenderer.prototype.__class__ = xinf.erno.PenRenderer;
xinf.erno.ObjectModelRenderer = function(p) { if( p === $_ ) return; {
	xinf.erno.PenRenderer.apply(this,[]);
	this.objects = new IntHash();
}}
xinf.erno.ObjectModelRenderer.__name__ = ["xinf","erno","ObjectModelRenderer"];
xinf.erno.ObjectModelRenderer.__super__ = xinf.erno.PenRenderer;
for(var k in xinf.erno.PenRenderer.prototype ) xinf.erno.ObjectModelRenderer.prototype[k] = xinf.erno.PenRenderer.prototype[k];
xinf.erno.ObjectModelRenderer.prototype.attachPrimitive = function(parent,child) {
	null;
}
xinf.erno.ObjectModelRenderer.prototype.clearPrimitive = function(p) {
	null;
}
xinf.erno.ObjectModelRenderer.prototype.createPrimitive = function(id) {
	return null;
}
xinf.erno.ObjectModelRenderer.prototype.current = null;
xinf.erno.ObjectModelRenderer.prototype.destroyObject = function(id) {
	var o = this.lookup(id);
	this.objects.remove(id);
	this.destroyPrimitive(o);
}
xinf.erno.ObjectModelRenderer.prototype.destroyPrimitive = function(p) {
	return null;
}
xinf.erno.ObjectModelRenderer.prototype.endNative = function() {
	this.current = null;
}
xinf.erno.ObjectModelRenderer.prototype.endObject = function() {
	this.current = null;
}
xinf.erno.ObjectModelRenderer.prototype.lookup = function(id) {
	var o = this.objects.get(id);
	if(o == null) {
		o = this.createPrimitive(id);
		this.objects.set(id,o);
	}
	return o;
}
xinf.erno.ObjectModelRenderer.prototype.objects = null;
xinf.erno.ObjectModelRenderer.prototype.setPrimitiveTransform = function(p,x,y,a,b,c,d) {
	null;
}
xinf.erno.ObjectModelRenderer.prototype.setPrimitiveTranslation = function(p,x,y) {
	null;
}
xinf.erno.ObjectModelRenderer.prototype.setTransform = function(id,x,y,a,b,c,d) {
	var o = this.lookup(id);
	this.setPrimitiveTransform(o,x,y,a,b,c,d);
}
xinf.erno.ObjectModelRenderer.prototype.setTranslation = function(id,x,y) {
	var o = this.lookup(id);
	this.setPrimitiveTranslation(o,x,y);
}
xinf.erno.ObjectModelRenderer.prototype.showObject = function(id) {
	var o = this.lookup(id);
	this.attachPrimitive(this.current,o);
}
xinf.erno.ObjectModelRenderer.prototype.startNative = function(o) {
	this.current = o;
	this.clearPrimitive(this.current);
}
xinf.erno.ObjectModelRenderer.prototype.startObject = function(id) {
	this.current = this.lookup(id);
	if(this.current == null) {
		this.current = this.createPrimitive(id);
		this.objects.set(id,this.current);
	}
	else {
		this.clearPrimitive(this.current);
	}
}
xinf.erno.ObjectModelRenderer.prototype.__class__ = xinf.erno.ObjectModelRenderer;
xinf.erno.js.JSRenderer = function(p) { if( p === $_ ) return; {
	xinf.erno.ObjectModelRenderer.apply(this,[]);
}}
xinf.erno.js.JSRenderer.__name__ = ["xinf","erno","js","JSRenderer"];
xinf.erno.js.JSRenderer.__super__ = xinf.erno.ObjectModelRenderer;
for(var k in xinf.erno.ObjectModelRenderer.prototype ) xinf.erno.js.JSRenderer.prototype[k] = xinf.erno.ObjectModelRenderer.prototype[k];
xinf.erno.js.JSRenderer.colorToRGBString = function(r,g,b) {
	return "rgb(" + Math.round(r * 255) + "," + Math.round(g * 255) + "," + Math.round(b * 255) + ")";
}
xinf.erno.js.JSRenderer.prototype.attachPrimitive = function(parent,child) {
	if(child.parentNode != null) {
		child.parentNode.removeChild(child);
	}
	parent.appendChild(child);
}
xinf.erno.js.JSRenderer.prototype.clearPrimitive = function(p) {
	p.innerHTML = "";
}
xinf.erno.js.JSRenderer.prototype.clipRect = function(w,h) {
	this.current.style.overflow = "hidden";
	this.current.style.width = "" + Math.max(0,Math.round(w));
	this.current.style.height = "" + Math.max(0,Math.round(h));
}
xinf.erno.js.JSRenderer.prototype.createPrimitive = function(id) {
	var o = js.Lib.document.createElement("div");
	o.style.position = "absolute";
	o.xinfId = id;
	return o;
}
xinf.erno.js.JSRenderer.prototype.ellipse = function(x,y,rx,ry) {
	this.rect(x - rx,y - ry,rx * 2,ry * 2);
}
xinf.erno.js.JSRenderer.prototype.image = function(img,inRegion,outRegion) {
	var wf = outRegion.w / inRegion.w;
	var hf = outRegion.h / inRegion.h;
	var r = js.Lib.document.createElement("img");
	r.src = img.url;
	r.style.position = "absolute";
	r.style.left = "" + Math.round(-inRegion.x * wf);
	r.style.top = "" + Math.round(-inRegion.y * hf);
	r.style.width = "" + Math.round(img.width * wf);
	r.style.height = "" + Math.round(img.height * hf);
	var wrap = js.Lib.document.createElement("div");
	wrap.style.position = "absolute";
	wrap.style.overflow = "hidden";
	wrap.style.left = "" + Math.round(outRegion.x);
	wrap.style.top = "" + Math.round(outRegion.y);
	wrap.style.width = "" + Math.round(outRegion.w);
	wrap.style.height = "" + Math.round(outRegion.h);
	wrap.appendChild(r);
	this.current.appendChild(wrap);
}
xinf.erno.js.JSRenderer.prototype["native"] = function(o) {
	this.current.appendChild(o);
}
xinf.erno.js.JSRenderer.prototype.rect = function(x,y,w,h) {
	var r = js.Lib.document.createElement("div");
	r.style.position = "absolute";
	r.style.left = "" + Math.round(x);
	r.style.top = "" + Math.round(y);
	if(this.pen.fill != null) {
		var $e = (this.pen.fill);
		switch( $e[1] ) {
		case 1:
		var a = $e[5], b = $e[4], g = $e[3], red = $e[2];
		{
			r.style.background = xinf.erno.js.JSRenderer.colorToRGBString(red,g,b);
			r.style.opacity = a;
		}break;
		default:{
			r.style.opacity = 0;
		}break;
		}
	}
	if(this.pen.width > 0 && this.pen.stroke != null) {
		var $e = (this.pen.stroke);
		switch( $e[1] ) {
		case 1:
		var a = $e[5], b = $e[4], g = $e[3], red = $e[2];
		{
			r.style.border = "" + this.pen.width + "px solid " + xinf.erno.js.JSRenderer.colorToRGBString(red,g,b);
			r.style.width = "" + Math.round(w + 1 - (this.pen.width * 2));
			r.style.height = "" + Math.round(h + 1 - (this.pen.width * 2));
		}break;
		default:{
			r.style.border = 0;
		}break;
		}
	}
	r.style.width = "" + Math.round(w);
	r.style.height = "" + Math.round(h);
	this.current.appendChild(r);
}
xinf.erno.js.JSRenderer.prototype.roundedRect = function(x,y,w,h,rx,ry) {
	this.rect(x,y,w,h);
}
xinf.erno.js.JSRenderer.prototype.setPrimitiveTransform = function(p,x,y,a,b,c,d) {
	p.style.left = "" + Math.round(x);
	p.style.top = "" + Math.round(y);
}
xinf.erno.js.JSRenderer.prototype.setPrimitiveTranslation = function(p,x,y) {
	p.style.left = "" + Math.round(x);
	p.style.top = "" + Math.round(y);
}
xinf.erno.js.JSRenderer.prototype.text = function(x,y,text,format) {
	var r = js.Lib.document.createElement("div");
	r.style.position = "absolute";
	r.style.whiteSpace = "nowrap";
	r.style.cursor = "default";
	if(x != null) r.style.left = "" + Math.round(x);
	if(y != null) r.style.top = "" + Math.round(y);
	if(this.pen.fill != null) {
		var $e = (this.pen.fill);
		switch( $e[1] ) {
		case 1:
		var a = $e[5], b = $e[4], g = $e[3], red = $e[2];
		{
			r.style.color = xinf.erno.js.JSRenderer.colorToRGBString(red,g,b);
			r.style.opacity = a;
		}break;
		default:{
			r.style.opacity = 0;
		}break;
		}
	}
	format.apply(r);
	r.innerHTML = text.split("\n").join("<br/>");
	this.current.appendChild(r);
}
xinf.erno.js.JSRenderer.prototype.__class__ = xinf.erno.js.JSRenderer;
org.puremvc.haxe.interfaces.IFacade = function() { }
org.puremvc.haxe.interfaces.IFacade.__name__ = ["org","puremvc","haxe","interfaces","IFacade"];
org.puremvc.haxe.interfaces.IFacade.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.notifyObservers = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.retrieveMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.retrieveProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.sendNotification = null;
org.puremvc.haxe.interfaces.IFacade.prototype.__class__ = org.puremvc.haxe.interfaces.IFacade;
org.puremvc.haxe.patterns.facade = {}
org.puremvc.haxe.patterns.facade.Facade = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.facade.Facade.instance = this;
	this.initializeFacade();
}}
org.puremvc.haxe.patterns.facade.Facade.__name__ = ["org","puremvc","haxe","patterns","facade","Facade"];
org.puremvc.haxe.patterns.facade.Facade.getInstance = function() {
	if(org.puremvc.haxe.patterns.facade.Facade.instance == null) org.puremvc.haxe.patterns.facade.Facade.instance = new org.puremvc.haxe.patterns.facade.Facade();
	return org.puremvc.haxe.patterns.facade.Facade.instance;
}
org.puremvc.haxe.patterns.facade.Facade.instance = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.controller = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.hasCommand = function(notificationName) {
	return this.controller.hasCommand(notificationName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.hasMediator = function(mediatorName) {
	return this.view.hasMediator(mediatorName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.hasProxy = function(proxyName) {
	return this.model.hasProxy(proxyName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeController = function() {
	if(this.controller != null) return;
	this.controller = org.puremvc.haxe.core.Controller.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeFacade = function() {
	this.initializeModel();
	this.initializeController();
	this.initializeView();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeModel = function() {
	if(this.model != null) return;
	this.model = org.puremvc.haxe.core.Model.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeView = function() {
	if(this.view != null) return;
	this.view = org.puremvc.haxe.core.View.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.model = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.notifyObservers = function(notification) {
	if(this.view != null) this.view.notifyObservers(notification);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerCommand = function(notificationName,commandClassRef) {
	this.controller.registerCommand(notificationName,commandClassRef);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerMediator = function(mediator) {
	if(this.view != null) this.view.registerMediator(mediator);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerProxy = function(proxy) {
	this.model.registerProxy(proxy);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeCommand = function(notificationName) {
	this.controller.removeCommand(notificationName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeMediator = function(mediatorName) {
	var mediator = null;
	if(this.view != null) mediator = this.view.removeMediator(mediatorName);
	return mediator;
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeProxy = function(proxyName) {
	var proxy = null;
	if(this.model != null) proxy = this.model.removeProxy(proxyName);
	return proxy;
}
org.puremvc.haxe.patterns.facade.Facade.prototype.retrieveMediator = function(mediatorName) {
	return this.view.retrieveMediator(mediatorName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.retrieveProxy = function(proxyName) {
	return this.model.retrieveProxy(proxyName);
}
org.puremvc.haxe.patterns.facade.Facade.prototype.sendNotification = function(notificationName,body,type) {
	this.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(notificationName,body,type));
}
org.puremvc.haxe.patterns.facade.Facade.prototype.view = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.__class__ = org.puremvc.haxe.patterns.facade.Facade;
org.puremvc.haxe.patterns.facade.Facade.__interfaces__ = [org.puremvc.haxe.interfaces.IFacade];
org.puremvc.haxe.demos = {}
org.puremvc.haxe.demos.xinf = {}
org.puremvc.haxe.demos.xinf.stopwatch = {}
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.facade.Facade.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","ApplicationFacade"];
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.__super__ = org.puremvc.haxe.patterns.facade.Facade;
for(var k in org.puremvc.haxe.patterns.facade.Facade.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.prototype[k] = org.puremvc.haxe.patterns.facade.Facade.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.instance = null;
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.getInstance = function() {
	if(org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.instance == null) org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.instance = new org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade();
	return org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.instance;
}
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.prototype.initializeController = function() {
	org.puremvc.haxe.patterns.facade.Facade.prototype.initializeController.apply(this,[]);
	this.registerCommand("startup",org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand);
	this.registerCommand("ensureTimer",org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand);
	this.registerCommand("resetDisplay",org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand);
	this.registerCommand("freezeDisplay",org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand);
	this.registerCommand("stopTimer",org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand);
}
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.prototype.startup = function(app) {
	this.sendNotification("startup",app);
}
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade;
xinf.ony.type.PreserveAspectRatio = { __ename__ : ["xinf","ony","type","PreserveAspectRatio"], __constructs__ : ["Defer","Meet","None","Preserve"] }
xinf.ony.type.PreserveAspectRatio.Defer = function(o) { var $x = ["Defer",0,o]; $x.__enum__ = xinf.ony.type.PreserveAspectRatio; $x.toString = $estr; return $x; }
xinf.ony.type.PreserveAspectRatio.Meet = function(o) { var $x = ["Meet",1,o]; $x.__enum__ = xinf.ony.type.PreserveAspectRatio; $x.toString = $estr; return $x; }
xinf.ony.type.PreserveAspectRatio.None = ["None",2];
xinf.ony.type.PreserveAspectRatio.None.toString = $estr;
xinf.ony.type.PreserveAspectRatio.None.__enum__ = xinf.ony.type.PreserveAspectRatio;
xinf.ony.type.PreserveAspectRatio.Preserve = function(x,y) { var $x = ["Preserve",3,x,y]; $x.__enum__ = xinf.ony.type.PreserveAspectRatio; $x.toString = $estr; return $x; }
xinf.ony.type.Align = { __ename__ : ["xinf","ony","type","Align"], __constructs__ : ["Min","Mid","Max"] }
xinf.ony.type.Align.Max = ["Max",2];
xinf.ony.type.Align.Max.toString = $estr;
xinf.ony.type.Align.Max.__enum__ = xinf.ony.type.Align;
xinf.ony.type.Align.Mid = ["Mid",1];
xinf.ony.type.Align.Mid.toString = $estr;
xinf.ony.type.Align.Mid.__enum__ = xinf.ony.type.Align;
xinf.ony.type.Align.Min = ["Min",0];
xinf.ony.type.Align.Min.toString = $estr;
xinf.ony.type.Align.Min.__enum__ = xinf.ony.type.Align;
xinf.ony.traits.PreserveAspectRatioTrait = function(def) { if( def === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[xinf.ony.type.PreserveAspectRatio]);
	if(def == null) def = xinf.ony.type.PreserveAspectRatio.None;
	this.def = def;
}}
xinf.ony.traits.PreserveAspectRatioTrait.__name__ = ["xinf","ony","traits","PreserveAspectRatioTrait"];
xinf.ony.traits.PreserveAspectRatioTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.PreserveAspectRatioTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.PreserveAspectRatioTrait.align = function(p,viewBox,viewPort) {
	var $e = (p);
	switch( $e[1] ) {
	case 2:
	{
		return { x : 0., y : 0., w : viewPort.x, h : viewPort.y}
	}break;
	case 0:
	var q = $e[2];
	{
		haxe.Log.trace("Cannot defer preserveAspectRatio.",{ fileName : "PreserveAspectRatioTrait.hx", lineNumber : 83, className : "xinf.ony.traits.PreserveAspectRatioTrait", methodName : "align"});
		return xinf.ony.traits.PreserveAspectRatioTrait.align(q,viewBox,viewPort);
	}break;
	case 1:
	var q = $e[2];
	{
		haxe.Log.trace("Not sure what to do with preserveAspectRatio.Meet.",{ fileName : "PreserveAspectRatioTrait.hx", lineNumber : 86, className : "xinf.ony.traits.PreserveAspectRatioTrait", methodName : "align"});
		return xinf.ony.traits.PreserveAspectRatioTrait.align(q,viewBox,viewPort);
	}break;
	case 3:
	var y = $e[3], x = $e[2];
	{
		return xinf.ony.traits.PreserveAspectRatioTrait.alignPreserve(viewBox,viewPort,x,y);
	}break;
	}
}
xinf.ony.traits.PreserveAspectRatioTrait.alignPreserve = function(viewBox,viewPort,x,y) {
	var scaleX = viewPort.x / viewBox.x;
	var scaleY = viewPort.y / viewBox.y;
	var aspect = viewPort.x / viewPort.y;
	var out;
	if(scaleX > scaleY) {
		out = { x : 0., y : 0., w : viewBox.x * scaleY, h : viewBox.y * scaleY}
		var $e = (x);
		switch( $e[1] ) {
		case 0:
		{
			null;
		}break;
		case 1:
		{
			out.x = (viewPort.x - out.w) / 2;
		}break;
		case 2:
		{
			out.x = (viewPort.x - out.w);
		}break;
		}
	}
	else {
		out = { x : 0., y : 0., w : viewBox.x * scaleX, h : viewBox.y * scaleX}
		var $e = (y);
		switch( $e[1] ) {
		case 0:
		{
			null;
		}break;
		case 1:
		{
			out.y = (viewPort.y - out.h) / 2;
		}break;
		case 2:
		{
			out.y = (viewPort.y - out.h);
		}break;
		}
	}
	return out;
}
xinf.ony.traits.PreserveAspectRatioTrait.prototype.def = null;
xinf.ony.traits.PreserveAspectRatioTrait.prototype.getDefault = function() {
	return this.def;
}
xinf.ony.traits.PreserveAspectRatioTrait.prototype.parse = function(value) {
	if(value == "none") return xinf.ony.type.PreserveAspectRatio.None;
	var s = xinf.ony.traits.PreserveAspectRatioTrait.ws.split(value);
	var meet = false;
	var defer = false;
	var p = value;
	if(s.length > 1) {
		if(s[0] == "defer") {
			defer = true;
			p = s[1];
		}
		if(s[s.length - 1] == "meet") {
			meet = true;
			p = s[s.length - 2];
		}
	}
	if(xinf.ony.traits.PreserveAspectRatioTrait.par.match(p)) {
		var v = xinf.ony.type.PreserveAspectRatio.Preserve(this.parsePart(xinf.ony.traits.PreserveAspectRatioTrait.par.matched(1)),this.parsePart(xinf.ony.traits.PreserveAspectRatioTrait.par.matched(2)));
		if(meet) v = xinf.ony.type.PreserveAspectRatio.Meet(v);
		if(defer) v = xinf.ony.type.PreserveAspectRatio.Defer(v);
		return v;
	}
	else {
		throw ("invalid PreserveAspectRatio value: '" + p + "'");
	}
	return null;
}
xinf.ony.traits.PreserveAspectRatioTrait.prototype.parsePart = function(s) {
	switch(s) {
	case "Min":{
		return xinf.ony.type.Align.Min;
	}break;
	case "Mid":{
		return xinf.ony.type.Align.Mid;
	}break;
	case "Max":{
		return xinf.ony.type.Align.Max;
	}break;
	default:{
		throw ("invalid PreserveAspectRatio value: '" + s + "'");
	}break;
	}
}
xinf.ony.traits.PreserveAspectRatioTrait.prototype.write = function(value) {
	var v = value;
	return function($this) {
		var $r;
		var $e = (v);
		switch( $e[1] ) {
		case 3:
		var y = $e[3], x = $e[2];
		{
			$r = "x" + x + "Y" + y;
		}break;
		case 0:
		var o = $e[2];
		{
			$r = "" + $this.write(o) + " defer";
		}break;
		case 1:
		var o = $e[2];
		{
			$r = "" + $this.write(o) + " meet";
		}break;
		case 2:
		{
			$r = "none";
		}break;
		default:{
			$r = null;
		}break;
		}
		return $r;
	}(this);
}
xinf.ony.traits.PreserveAspectRatioTrait.prototype.__class__ = xinf.ony.traits.PreserveAspectRatioTrait;
xinf.ony.Image = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Image.__name__ = ["xinf","ony","Image"];
xinf.ony.Image.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Image.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Image.prototype.get_height = function() {
	return this.getTrait("height",xinf.ony.type.Length).value;
}
xinf.ony.Image.prototype.get_href = function() {
	return this.getTrait("href",String);
}
xinf.ony.Image.prototype.get_preserveAspectRatio = function() {
	return this.getStyleTrait("preserveAspectRatio",xinf.ony.type.PreserveAspectRatio);
}
xinf.ony.Image.prototype.get_width = function() {
	return this.getTrait("width",xinf.ony.type.Length).value;
}
xinf.ony.Image.prototype.get_x = function() {
	return this.getTrait("x",xinf.ony.type.Length).value;
}
xinf.ony.Image.prototype.get_y = function() {
	return this.getTrait("y",xinf.ony.type.Length).value;
}
xinf.ony.Image.prototype.height = null;
xinf.ony.Image.prototype.href = null;
xinf.ony.Image.prototype.preserveAspectRatio = null;
xinf.ony.Image.prototype.set_height = function(v) {
	this.setTrait("height",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Image.prototype.set_href = function(v) {
	return this.setTrait("href",v);
}
xinf.ony.Image.prototype.set_preserveAspectRatio = function(v) {
	return this.setStyleTrait("preserveAspectRatio",v);
}
xinf.ony.Image.prototype.set_width = function(v) {
	this.setTrait("width",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Image.prototype.set_x = function(v) {
	this.setTrait("x",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Image.prototype.set_y = function(v) {
	this.setTrait("y",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Image.prototype.width = null;
xinf.ony.Image.prototype.x = null;
xinf.ony.Image.prototype.y = null;
xinf.ony.Image.prototype.__class__ = xinf.ony.Image;
xinf.event.ScrollEvent = function(_type,value,targetId) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.value = value;
	this.targetId = targetId;
}}
xinf.event.ScrollEvent.__name__ = ["xinf","event","ScrollEvent"];
xinf.event.ScrollEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.ScrollEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.ScrollEvent.prototype.targetId = null;
xinf.event.ScrollEvent.prototype.toString = function() {
	var r = "" + this.type + "(" + this.value + ")";
	if(this.targetId != null) r += "to #" + this.targetId;
	return r;
}
xinf.event.ScrollEvent.prototype.value = null;
xinf.event.ScrollEvent.prototype.__class__ = xinf.event.ScrollEvent;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return (s.length >= start.length && s.substr(0,start.length) == start);
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return (slen >= elen && s.substr(slen - elen,elen) == end);
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return (c >= 9 && c <= 13) || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
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
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
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
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var neg = false;
	if(n < 0) {
		neg = true;
		n = -n;
	}
	var s = n.toString(16);
	s = s.toUpperCase();
	if(digits != null) while(s.length < digits) s = "0" + s;
	if(neg) s = "-" + s;
	return s;
}
StringTools.prototype.__class__ = StringTools;
haxe = {}
haxe.io = {}
haxe.io.Bytes = function(length,b) { if( length === $_ ) return; {
	this.length = length;
	this.b = b;
}}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	{
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			a.push(0);
		}
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	{
		var _g1 = 0, _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = s["cca"](i);
			if(c <= 127) a.push(c);
			else if(c <= 2047) {
				a.push(192 | (c >> 6));
				a.push(128 | (c & 63));
			}
			else if(c <= 65535) {
				a.push(224 | (c >> 12));
				a.push(128 | ((c >> 6) & 63));
				a.push(128 | (c & 63));
			}
			else {
				a.push(240 | (c >> 18));
				a.push(128 | ((c >> 12) & 63));
				a.push(128 | ((c >> 6) & 63));
				a.push(128 | (c & 63));
			}
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		return;
	}
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
}
haxe.io.Bytes.prototype.compare = function(other) {
	var b1 = this.b;
	var b2 = other.b;
	var len = ((this.length < other.length)?this.length:other.length);
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = $closure(String,"fromCharCode");
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		}
		else if(c < 224) s += fcc(((c & 63) << 6) | (b[i++] & 127));
		else if(c < 240) {
			var c2 = b[i++];
			s += fcc((((c & 31) << 12) | ((c2 & 127) << 6)) | (b[i++] & 127));
		}
		else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc(((((c & 15) << 18) | ((c2 & 127) << 12)) | ((c3 << 6) & 127)) | (b[i++] & 127));
		}
	}
	return s;
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v;
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
}
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
xinf.erno.Keys = function() { }
xinf.erno.Keys.__name__ = ["xinf","erno","Keys"];
xinf.erno.Keys.SPECIAL = null;
xinf.erno.Keys.keys = null;
xinf.erno.Keys.get = function(code) {
	return (xinf.erno.Keys.keys.get(code));
}
xinf.erno.Keys.prototype.__class__ = xinf.erno.Keys;
xinf.geom = {}
xinf.geom.TransformParser = function() { }
xinf.geom.TransformParser.__name__ = ["xinf","geom","TransformParser"];
xinf.geom.TransformParser.parse = function(text) {
	var r = null;
	while(xinf.geom.TransformParser.transform.match(text)) {
		var t = xinf.geom.TransformParser.parseSingle(xinf.geom.TransformParser.transform.matched(1));
		if(r != null) r = new xinf.geom.Concatenate(t,r);
		else r = t;
		var p = xinf.geom.TransformParser.transform.matchedPos();
		text = text.substr(p.pos + p.len);
	}
	if(r == null) r = new xinf.geom.Identity();
	return r;
}
xinf.geom.TransformParser.parseSingle = function(text) {
	var r;
	if(xinf.geom.TransformParser.translate.match(text)) {
		r = new xinf.geom.Translate(Std.parseFloat(xinf.geom.TransformParser.translate.matched(1)),Std.parseFloat(xinf.geom.TransformParser.translate.matched(2)));
	}
	else if(xinf.geom.TransformParser.matrix.match(text)) {
		r = new xinf.geom.Matrix({ a : Std.parseFloat(xinf.geom.TransformParser.matrix.matched(1)), c : Std.parseFloat(xinf.geom.TransformParser.matrix.matched(3)), tx : Std.parseFloat(xinf.geom.TransformParser.matrix.matched(5)), b : Std.parseFloat(xinf.geom.TransformParser.matrix.matched(2)), d : Std.parseFloat(xinf.geom.TransformParser.matrix.matched(4)), ty : Std.parseFloat(xinf.geom.TransformParser.matrix.matched(6))});
	}
	else if(xinf.geom.TransformParser.rotate.match(text)) {
		if(xinf.geom.TransformParser.rotate.matched(2) == null || xinf.geom.TransformParser.rotate.matched(2).length == 0) {
			r = new xinf.geom.Rotate(Std.parseFloat(xinf.geom.TransformParser.rotate.matched(1)) * xinf.geom.TransformParser.D2R);
		}
		else {
			var a = Std.parseFloat(xinf.geom.TransformParser.rotate.matched(1));
			var cx = Std.parseFloat(xinf.geom.TransformParser.rotate.matched(3));
			var cy = Std.parseFloat(xinf.geom.TransformParser.rotate.matched(4));
			r = new xinf.geom.Concatenate(new xinf.geom.Translate(-cx,-cy),new xinf.geom.Concatenate(new xinf.geom.Rotate(a * xinf.geom.TransformParser.D2R),new xinf.geom.Translate(cx,cy)));
		}
	}
	else if(xinf.geom.TransformParser.scale.match(text)) {
		var s = xinf.geom.TransformParser.splitNumbers.split(xinf.geom.TransformParser.scale.matched(1));
		if(s.length == 1) {
			var scale = Std.parseFloat(s[0]);
			r = new xinf.geom.Scale(scale,scale);
		}
		else if(s.length == 2) {
			r = new xinf.geom.Scale(Std.parseFloat(s[0]),Std.parseFloat(s[1]));
		}
		else {
			throw ("unimplemented transform: " + text);
		}
	}
	else if(xinf.geom.TransformParser.skewX.match(text)) {
		r = new xinf.geom.SkewX(Std.parseFloat(xinf.geom.TransformParser.skewX.matched(1)) * xinf.geom.TransformParser.D2R);
	}
	else if(xinf.geom.TransformParser.skewY.match(text)) {
		r = new xinf.geom.SkewY(Std.parseFloat(xinf.geom.TransformParser.skewY.matched(1)) * xinf.geom.TransformParser.D2R);
	}
	else if(StringTools.trim(text).length == 0) {
		return new xinf.geom.Identity();
	}
	else {
		throw ("invalid/unimplemented SVG transform '" + text + "'");
	}
	return r;
}
xinf.geom.TransformParser.prototype.__class__ = xinf.geom.TransformParser;
haxe.io.BytesBuffer = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype.add = function(src) {
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.addByte = function($byte) {
	this.b.push($byte);
}
haxe.io.BytesBuffer.prototype.addBytes = function(src,pos,len) {
	if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	{
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
}
haxe.io.BytesBuffer.prototype.b = null;
haxe.io.BytesBuffer.prototype.getBytes = function() {
	var bytes = new haxe.io.Bytes(this.b.length,this.b);
	this.b = null;
	return bytes;
}
haxe.io.BytesBuffer.prototype.__class__ = haxe.io.BytesBuffer;
xinf.ony._Path = {}
xinf.ony._Path.PathBBox = function(segments) { if( segments === $_ ) return; {
	if(segments != null) this.calculate(segments);
}}
xinf.ony._Path.PathBBox.__name__ = ["xinf","ony","_Path","PathBBox"];
xinf.ony._Path.PathBBox.prototype.b = null;
xinf.ony._Path.PathBBox.prototype.calculate = function(segments) {
	this.l = this.t = Math.POSITIVE_INFINITY;
	this.r = this.b = Math.NEGATIVE_INFINITY;
	{ var $it21 = segments.iterator();
	while( $it21.hasNext() ) { var s = $it21.next();
	{
		var $e = (s);
		switch( $e[1] ) {
		case 0:
		var y = $e[3], x = $e[2];
		{
			this.proc(x,y);
		}break;
		case 2:
		var y = $e[3], x = $e[2];
		{
			this.proc(x,y);
		}break;
		case 3:
		var y = $e[7], x = $e[6], y2 = $e[5], x2 = $e[4], y1 = $e[3], x1 = $e[2];
		{
			this.proc(x1,y1);
			this.proc(x2,y2);
			this.proc(x,y);
		}break;
		case 4:
		var y = $e[5], x = $e[4], y1 = $e[3], x1 = $e[2];
		{
			this.proc(x1,y1);
			this.proc(x,y);
		}break;
		case 5:
		var y = $e[10], x = $e[9], sweep = $e[8], largeArc = $e[7], rotation = $e[6], ry = $e[5], rx = $e[4], y1 = $e[3], x1 = $e[2];
		{
			this.proc(x,y);
		}break;
		default:{
			null;
		}break;
		}
	}
	}}
	return this;
}
xinf.ony._Path.PathBBox.prototype.l = null;
xinf.ony._Path.PathBBox.prototype.proc = function(x,y) {
	if(x < this.l) this.l = x;
	if(x > this.r) this.r = x;
	if(y < this.t) this.t = y;
	if(y > this.b) this.b = y;
}
xinf.ony._Path.PathBBox.prototype.r = null;
xinf.ony._Path.PathBBox.prototype.t = null;
xinf.ony._Path.PathBBox.prototype.__class__ = xinf.ony._Path.PathBBox;
xinf.ony.traits.PathTrait = function(p) { if( p === $_ ) return; {
	xinf.traits.TypedTrait.apply(this,[new List()]);
}}
xinf.ony.traits.PathTrait.__name__ = ["xinf","ony","traits","PathTrait"];
xinf.ony.traits.PathTrait.__super__ = xinf.traits.TypedTrait;
for(var k in xinf.traits.TypedTrait.prototype ) xinf.ony.traits.PathTrait.prototype[k] = xinf.traits.TypedTrait.prototype[k];
xinf.ony.traits.PathTrait.prototype.getDefault = function() {
	return new List();
}
xinf.ony.traits.PathTrait.prototype.parse = function(value) {
	var d = xinf.ony.PathParser.simplify(new xinf.ony.PathParser().parse(value));
	return d;
}
xinf.ony.traits.PathTrait.prototype.write = function(value) {
	var r = "";
	var v = value;
	{ var $it22 = v.iterator();
	while( $it22.hasNext() ) { var s = $it22.next();
	{
		var $e = (s);
		switch( $e[1] ) {
		case 0:
		var y = $e[3], x = $e[2];
		{
			r += "M" + x + " " + y + " ";
		}break;
		case 1:
		{
			r += "Z ";
		}break;
		case 2:
		var y = $e[3], x = $e[2];
		{
			r += "L" + x + " " + y + " ";
		}break;
		case 4:
		var y = $e[5], x = $e[4], y1 = $e[3], x1 = $e[2];
		{
			r += "Q" + x1 + " " + y1 + " " + x + " " + y + " ";
		}break;
		case 3:
		var y = $e[7], x = $e[6], y2 = $e[5], x2 = $e[4], y1 = $e[3], x1 = $e[2];
		{
			r += "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + x + " " + y + " ";
		}break;
		case 5:
		var y = $e[10], x = $e[9], sweep = $e[8], largeArc = $e[7], rotation = $e[6], ry = $e[5], rx = $e[4], y1 = $e[3], x1 = $e[2];
		{
			r + "A" + x1 + " " + y1 + " " + rx + " " + ry + " " + rotation + " " + ((largeArc?"1":"0")) + " " + ((sweep?"1":"0")) + " " + x + " " + y + " ";
		}break;
		}
	}
	}}
	return r;
}
xinf.ony.traits.PathTrait.prototype.__class__ = xinf.ony.traits.PathTrait;
xinf.ony.Path = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Path.__name__ = ["xinf","ony","Path"];
xinf.ony.Path.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Path.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Path.prototype.d = null;
xinf.ony.Path.prototype.getBoundingBox = function() {
	return new xinf.ony._Path.PathBBox(this.get_segments());
}
xinf.ony.Path.prototype.get_d = function() {
	return this.getTrait("d",String);
}
xinf.ony.Path.prototype.get_segments = function() {
	return this.getTrait("d",Dynamic);
}
xinf.ony.Path.prototype.segments = null;
xinf.ony.Path.prototype.set_d = function(v) {
	this.setTraitFromString("d",v,this._traits);
	this.redraw();
	return v;
}
xinf.ony.Path.prototype.set_segments = function(v) {
	this.setTrait("d",v);
	this.redraw();
	return v;
}
xinf.ony.Path.prototype.__class__ = xinf.ony.Path;
xinf.ony.Use = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Use.__name__ = ["xinf","ony","Use"];
xinf.ony.Use.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Use.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Use.prototype.get_href = function() {
	return this.getTrait("href",String);
}
xinf.ony.Use.prototype.get_x = function() {
	return this.getTrait("x",xinf.ony.type.Length).value;
}
xinf.ony.Use.prototype.get_y = function() {
	return this.getTrait("y",xinf.ony.type.Length).value;
}
xinf.ony.Use.prototype.href = null;
xinf.ony.Use.prototype.onLoad = function() {
	xinf.ony.erno.Element.prototype.onLoad.apply(this,[]);
	this.resolve();
}
xinf.ony.Use.prototype.peer = null;
xinf.ony.Use.prototype.resolve = function() {
	if(this.get_href() == null) return;
	var id = this.get_href().split("#")[1];
	try {
		this.set_peer(this.ownerDocument.getTypedElementById(id,xinf.ony.erno.Element));
		if(this.peer == null) throw ("#" + id + " not found");
	}
	catch( $e23 ) {
		{
			var e = $e23;
			{
				haxe.Log.trace("'Use' peer '" + this.get_href() + "' invalid: " + e + ", ignored.",{ fileName : "Use.hx", lineNumber : 47, className : "xinf.ony.Use", methodName : "resolve"});
			}
		}
	}
	this.redraw();
}
xinf.ony.Use.prototype.set_href = function(v) {
	this.setTrait("href",v);
	this.resolve();
	return v;
}
xinf.ony.Use.prototype.set_peer = function(p) {
	this.peer = p;
	this.redraw();
	return this.peer;
}
xinf.ony.Use.prototype.set_x = function(v) {
	this.setTrait("x",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Use.prototype.set_y = function(v) {
	this.setTrait("y",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Use.prototype.x = null;
xinf.ony.Use.prototype.y = null;
xinf.ony.Use.prototype.__class__ = xinf.ony.Use;
xinf.ony.type.StringList = function(l) { if( l === $_ ) return; {
	this.list = l;
}}
xinf.ony.type.StringList.__name__ = ["xinf","ony","type","StringList"];
xinf.ony.type.StringList.prototype.list = null;
xinf.ony.type.StringList.prototype.toString = function() {
	return this.list.join(", ");
}
xinf.ony.type.StringList.prototype.__class__ = xinf.ony.type.StringList;
org.puremvc.haxe.demos.xinf.stopwatch.controller = {}
org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","EnsureTimerCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand.prototype.execute = function(note) {
	var proxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("StopWatchProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	proxy.startTimer();
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.EnsureTimerCommand;
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","PrepViewCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand.prototype.execute = function(note) {
	var app = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,StopWatch)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	this.facade.registerMediator(new org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator(app));
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand;
xinf.ony.erno.Image = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Image.apply(this,[traits]);
}}
xinf.ony.erno.Image.__name__ = ["xinf","ony","erno","Image"];
xinf.ony.erno.Image.__super__ = xinf.ony.Image;
for(var k in xinf.ony.Image.prototype ) xinf.ony.erno.Image.prototype[k] = xinf.ony.Image.prototype[k];
xinf.ony.erno.Image.load = function(url) {
	return xinf.erno.ImageData.load(url);
}
xinf.ony.erno.Image.prototype.bitmap = null;
xinf.ony.erno.Image.prototype.dataChanged = function(e) {
	this.redraw();
}
xinf.ony.erno.Image.prototype.dataLoaded = function(e) {
	this.dataChanged(e);
	this.postEvent(e,{ fileName : "Image.hx", lineNumber : 39, className : "xinf.ony.erno.Image", methodName : "dataLoaded"});
}
xinf.ony.erno.Image.prototype.drawContents = function(g) {
	if(this.bitmap == null || this.bitmap.width == null) {
		g.setStroke(xinf.erno.Paint.SolidColor(1,0,0,1),1);
		g.setFill(xinf.erno.Paint.SolidColor(.5,.5,.5,.5));
		g.rect(this.get_x(),this.get_y(),this.get_width(),this.get_height());
		return;
	}
	if(this.get_width() <= 0 || this.get_width() == null) this.set_width(this.bitmap.width);
	if(this.get_height() <= 0 || this.get_width() == null) this.set_height(this.bitmap.height);
	var box = xinf.ony.traits.PreserveAspectRatioTrait.align(this.get_preserveAspectRatio(),{ x : this.bitmap.width, y : this.bitmap.height},{ x : this.get_width(), y : this.get_height()});
	g.setFill(xinf.erno.Paint.SolidColor(1,1,1,this.get_opacity()));
	box.x += this.get_x();
	box.y += this.get_y();
	if(this.get_opacity() > 0 || this.get_opacity() == null) {
		g.image(this.bitmap,{ x : 0., y : 0., w : this.bitmap.width, h : this.bitmap.height},box);
	}
}
xinf.ony.erno.Image.prototype.onLoad = function() {
	xinf.ony.Image.prototype.onLoad.apply(this,[]);
	this.resolve();
}
xinf.ony.erno.Image.prototype.resolve = function() {
	var url;
	var b = this.get_base();
	if(this.get_href() == null) return;
	if(b != null) url = new xinf.xml.URL(b).getRelativeURL(this.get_href());
	else url = new xinf.xml.URL(this.get_href());
	try {
		this.set_bitmap(xinf.ony.erno.Image.load(url));
	}
	catch( $e24 ) {
		{
			var e = $e24;
			{
				haxe.Log.trace(e,{ fileName : "Image.hx", lineNumber : 61, className : "xinf.ony.erno.Image", methodName : "resolve"});
			}
		}
	}
	this.redraw();
}
xinf.ony.erno.Image.prototype.set_bitmap = function(v) {
	this.bitmap = v;
	this.bitmap.addEventListener(xinf.event.ImageLoadEvent.FRAME_AVAILABLE,$closure(this,"dataChanged"));
	this.bitmap.addEventListener(xinf.event.ImageLoadEvent.PART_LOADED,$closure(this,"dataChanged"));
	this.bitmap.addEventListener(xinf.event.ImageLoadEvent.LOADED,$closure(this,"dataLoaded"));
	this.redraw();
	return this.bitmap;
}
xinf.ony.erno.Image.prototype.set_href = function(v) {
	this.setTrait("href",v);
	this.resolve();
	return this.get_href();
}
xinf.ony.erno.Image.prototype.toString = function() {
	return ("xinf.ony.erno.Image(" + this.get_href() + ")");
}
xinf.ony.erno.Image.prototype.__class__ = xinf.ony.erno.Image;
haxe.Resource = function() { }
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.listNames = function() {
	var names = new Array();
	{
		var _g = 0, _g1 = haxe.Resource.content;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			names.push(x.name);
		}
	}
	return names;
}
haxe.Resource.getString = function(name) {
	{
		var _g = 0, _g1 = haxe.Resource.content;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x.name == name) {
				var b = haxe.Unserializer.run(x.data);
				return b.toString();
			}
		}
	}
	return null;
}
haxe.Resource.getBytes = function(name) {
	{
		var _g = 0, _g1 = haxe.Resource.content;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x.name == name) {
				return haxe.Unserializer.run(x.data);
			}
		}
	}
	return null;
}
haxe.Resource.prototype.__class__ = haxe.Resource;
xinf.erno.Paint = { __ename__ : ["xinf","erno","Paint"], __constructs__ : ["None","SolidColor","PLinearGradient","PRadialGradient"] }
xinf.erno.Paint.None = ["None",0];
xinf.erno.Paint.None.toString = $estr;
xinf.erno.Paint.None.__enum__ = xinf.erno.Paint;
xinf.erno.Paint.PLinearGradient = function(stops,x1,y1,x2,y2,transform,spread) { var $x = ["PLinearGradient",2,stops,x1,y1,x2,y2,transform,spread]; $x.__enum__ = xinf.erno.Paint; $x.toString = $estr; return $x; }
xinf.erno.Paint.PRadialGradient = function(stops,cx,cy,r,fx,fy,transform,spread) { var $x = ["PRadialGradient",3,stops,cx,cy,r,fx,fy,transform,spread]; $x.__enum__ = xinf.erno.Paint; $x.toString = $estr; return $x; }
xinf.erno.Paint.SolidColor = function(r,g,b,a) { var $x = ["SolidColor",1,r,g,b,a]; $x.__enum__ = xinf.erno.Paint; $x.toString = $estr; return $x; }
xinf.ony.type.Editability = { __ename__ : ["xinf","ony","type","Editability"], __constructs__ : ["None","Simple"] }
xinf.ony.type.Editability.None = ["None",0];
xinf.ony.type.Editability.None.toString = $estr;
xinf.ony.type.Editability.None.__enum__ = xinf.ony.type.Editability;
xinf.ony.type.Editability.Simple = ["Simple",1];
xinf.ony.type.Editability.Simple.toString = $estr;
xinf.ony.type.Editability.Simple.__enum__ = xinf.ony.type.Editability;
xinf.ony.TextArea = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.TextArea.__name__ = ["xinf","ony","TextArea"];
xinf.ony.TextArea.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.TextArea.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.TextArea.xmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&").split("&quot;").join("\"");
}
xinf.ony.TextArea.prototype.copyProperties = function(to) {
	xinf.ony.erno.Element.prototype.copyProperties.apply(this,[to]);
	to.x = this.get_x();
	to.y = this.get_y();
	to.text = this.get_text();
}
xinf.ony.TextArea.prototype.editable = null;
xinf.ony.TextArea.prototype.focus = function(focus) {
	null;
}
xinf.ony.TextArea.prototype.fromXml = function(xml) {
	xinf.ony.erno.Element.prototype.fromXml.apply(this,[xml]);
	this.set_text(this.textContent(xml));
}
xinf.ony.TextArea.prototype.get_editable = function() {
	return this.getTrait("editable",xinf.ony.type.Editability);
}
xinf.ony.TextArea.prototype.get_height = function() {
	return this.getTrait("height",xinf.ony.type.Length).value;
}
xinf.ony.TextArea.prototype.get_line_increment = function() {
	var r = this.getStyleTrait("line-increment",Float);
	if(r == -1) r = this.get_font_size() * 1.1;
	return r;
}
xinf.ony.TextArea.prototype.get_text = function() {
	return this.getTrait("text",String);
}
xinf.ony.TextArea.prototype.get_width = function() {
	return this.getTrait("width",xinf.ony.type.Length).value;
}
xinf.ony.TextArea.prototype.get_x = function() {
	return this.getTrait("x",xinf.ony.type.Length).value;
}
xinf.ony.TextArea.prototype.get_y = function() {
	return this.getTrait("y",xinf.ony.type.Length).value;
}
xinf.ony.TextArea.prototype.height = null;
xinf.ony.TextArea.prototype.lineIncrement = null;
xinf.ony.TextArea.prototype.set_editable = function(v) {
	return this.setTrait("editable",v);
}
xinf.ony.TextArea.prototype.set_height = function(v) {
	this.setTrait("height",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.TextArea.prototype.set_line_increment = function(v) {
	this.setStyleTrait("line-increment",v);
	this.redraw();
	return v;
}
xinf.ony.TextArea.prototype.set_text = function(v) {
	this.redraw();
	return this.setTrait("text",v);
}
xinf.ony.TextArea.prototype.set_width = function(v) {
	this.setTrait("width",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.TextArea.prototype.set_x = function(v) {
	this.setTrait("x",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.TextArea.prototype.set_y = function(v) {
	this.setTrait("y",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.TextArea.prototype.text = null;
xinf.ony.TextArea.prototype.textContent = function(xml) {
	var text = "";
	{ var $it25 = xml.iterator();
	while( $it25.hasNext() ) { var child = $it25.next();
	{
		switch(child.nodeType) {
		case Xml.PCData:{
			text += child.getNodeValue();
		}break;
		case Xml.Element:{
			text += this.textContent(child) + "\n";
		}break;
		default:{
			null;
		}break;
		}
	}
	}}
	return xinf.ony.TextArea.xmlUnescape(StringTools.trim(text));
}
xinf.ony.TextArea.prototype.width = null;
xinf.ony.TextArea.prototype.x = null;
xinf.ony.TextArea.prototype.y = null;
xinf.ony.TextArea.prototype.__class__ = xinf.ony.TextArea;
xinf.ony.Style = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Style.__name__ = ["xinf","ony","Style"];
xinf.ony.Style.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Style.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Style.prototype.fromXml = function(xml) {
	xinf.ony.erno.Element.prototype.fromXml.apply(this,[xml]);
	if(this.get_type() == "text/css") {
		var t = "";
		{ var $it26 = xml.iterator();
		while( $it26.hasNext() ) { var node = $it26.next();
		{
			if(node.nodeType == Xml.PCData || node.nodeType == Xml.CData) {
				t += node.getNodeValue();
			}
		}
		}}
		if(t.length > 0) {
			this.ownerDocument.styleSheet.parseCSS(t);
			this.set_text(t);
		}
	}
}
xinf.ony.Style.prototype.get_text = function() {
	return this.getTrait("text",String);
}
xinf.ony.Style.prototype.get_type = function() {
	return this.getTrait("type",String);
}
xinf.ony.Style.prototype.set_text = function(v) {
	return this.setTrait("text",v);
}
xinf.ony.Style.prototype.set_type = function(v) {
	return this.setTrait("type",v);
}
xinf.ony.Style.prototype.text = null;
xinf.ony.Style.prototype.type = null;
xinf.ony.Style.prototype.__class__ = xinf.ony.Style;
xinf.ony.type.PathSegment = { __ename__ : ["xinf","ony","type","PathSegment"], __constructs__ : ["MoveTo","Close","LineTo","CubicTo","QuadraticTo","ArcTo"] }
xinf.ony.type.PathSegment.ArcTo = function(x1,y1,rx,ry,rotation,largeArc,sweep,x,y) { var $x = ["ArcTo",5,x1,y1,rx,ry,rotation,largeArc,sweep,x,y]; $x.__enum__ = xinf.ony.type.PathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.PathSegment.Close = ["Close",1];
xinf.ony.type.PathSegment.Close.toString = $estr;
xinf.ony.type.PathSegment.Close.__enum__ = xinf.ony.type.PathSegment;
xinf.ony.type.PathSegment.CubicTo = function(x1,y1,x2,y2,x,y) { var $x = ["CubicTo",3,x1,y1,x2,y2,x,y]; $x.__enum__ = xinf.ony.type.PathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.PathSegment.LineTo = function(x,y) { var $x = ["LineTo",2,x,y]; $x.__enum__ = xinf.ony.type.PathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.PathSegment.MoveTo = function(x,y) { var $x = ["MoveTo",0,x,y]; $x.__enum__ = xinf.ony.type.PathSegment; $x.toString = $estr; return $x; }
xinf.ony.type.PathSegment.QuadraticTo = function(x1,y1,x,y) { var $x = ["QuadraticTo",4,x1,y1,x,y]; $x.__enum__ = xinf.ony.type.PathSegment; $x.toString = $estr; return $x; }
js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
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
				return str + ")";
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
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e27 ) {
			{
				var e = $e27;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
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
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e28 ) {
		{
			var e = $e28;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = (document.all != null && window.opera == null);
	js.Lib.isOpera = (window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
xinf.geom.Transform = function() { }
xinf.geom.Transform.__name__ = ["xinf","geom","Transform"];
xinf.geom.Transform.prototype.add = null;
xinf.geom.Transform.prototype.apply = null;
xinf.geom.Transform.prototype.applyInverse = null;
xinf.geom.Transform.prototype.distanceTo = null;
xinf.geom.Transform.prototype.getMatrix = null;
xinf.geom.Transform.prototype.getScale = null;
xinf.geom.Transform.prototype.getTranslation = null;
xinf.geom.Transform.prototype.interpolateWith = null;
xinf.geom.Transform.prototype.isIdentity = null;
xinf.geom.Transform.prototype.__class__ = xinf.geom.Transform;
js.JsXml__ = function(p) { if( p === $_ ) return; {
	null;
}}
js.JsXml__.__name__ = ["js","JsXml__"];
js.JsXml__.parse = function(str) {
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
	return current;
}
js.JsXml__.createElement = function(name) {
	var r = new js.JsXml__();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
js.JsXml__.createPCData = function(data) {
	var r = new js.JsXml__();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
js.JsXml__.createCData = function(data) {
	var r = new js.JsXml__();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
js.JsXml__.createComment = function(data) {
	var r = new js.JsXml__();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
js.JsXml__.createDocType = function(data) {
	var r = new js.JsXml__();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
js.JsXml__.createProlog = function(data) {
	var r = new js.JsXml__();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
js.JsXml__.createDocument = function() {
	var r = new js.JsXml__();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
js.JsXml__.prototype._attributes = null;
js.JsXml__.prototype._children = null;
js.JsXml__.prototype._nodeName = null;
js.JsXml__.prototype._nodeValue = null;
js.JsXml__.prototype._parent = null;
js.JsXml__.prototype.addChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
}
js.JsXml__.prototype.attributes = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.keys();
}
js.JsXml__.prototype.elements = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			if(this.x[k].nodeType == Xml.Element) break;
			k += 1;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k += 1;
			if(n.nodeType == Xml.Element) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}}
}
js.JsXml__.prototype.elementsNamed = function(name) {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			if(n.nodeType == Xml.Element && n._nodeName == name) break;
			k++;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k++;
			if(n.nodeType == Xml.Element && n._nodeName == name) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}}
}
js.JsXml__.prototype.exists = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.exists(att);
}
js.JsXml__.prototype.firstChild = function() {
	if(this._children == null) throw "bad nodetype";
	return this._children[0];
}
js.JsXml__.prototype.firstElement = function() {
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) return n;
		cur++;
	}
	return null;
}
js.JsXml__.prototype.get = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.get(att);
}
js.JsXml__.prototype.getNodeName = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName;
}
js.JsXml__.prototype.getNodeValue = function() {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue;
}
js.JsXml__.prototype.getParent = function() {
	return this._parent;
}
js.JsXml__.prototype.insertChild = function(x,pos) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
}
js.JsXml__.prototype.iterator = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		return this.cur < this.x.length;
	}, next : function() {
		return this.x[this.cur++];
	}}
}
js.JsXml__.prototype.nodeName = null;
js.JsXml__.prototype.nodeType = null;
js.JsXml__.prototype.nodeValue = null;
js.JsXml__.prototype.parent = null;
js.JsXml__.prototype.remove = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
}
js.JsXml__.prototype.removeChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	return b;
}
js.JsXml__.prototype.set = function(att,value) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
}
js.JsXml__.prototype.setNodeName = function(n) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName = n;
}
js.JsXml__.prototype.setNodeValue = function(v) {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue = v;
}
js.JsXml__.prototype.toString = function() {
	if(this.nodeType == Xml.PCData) return this._nodeValue;
	if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
	if(this.nodeType == Xml.Comment || this.nodeType == Xml.DocType || this.nodeType == Xml.Prolog) return this._nodeValue;
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b += "<";
		s.b += this._nodeName;
		{ var $it29 = this._attributes.keys();
		while( $it29.hasNext() ) { var k = $it29.next();
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
			return s.b;
		}
		s.b += ">";
	}
	{ var $it30 = this.iterator();
	while( $it30.hasNext() ) { var x = $it30.next();
	s.b += x.toString();
	}}
	if(this.nodeType == Xml.Element) {
		s.b += "</";
		s.b += this._nodeName;
		s.b += ">";
	}
	return s.b;
}
js.JsXml__.prototype.__class__ = js.JsXml__;
xinf.ony.SolidColor = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.SolidColor.__name__ = ["xinf","ony","SolidColor"];
xinf.ony.SolidColor.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.SolidColor.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.SolidColor.prototype.get_solid_color = function() {
	return this.getStyleTrait("solid-color",xinf.ony.type.Paint);
}
xinf.ony.SolidColor.prototype.get_solid_opacity = function() {
	return this.getStyleTrait("solid-opacity",Float);
}
xinf.ony.SolidColor.prototype.set_solid_color = function(v) {
	return this.setStyleTrait("solid-color",v);
}
xinf.ony.SolidColor.prototype.set_solid_opacity = function(v) {
	return this.setStyleTrait("solid-opacity",v);
}
xinf.ony.SolidColor.prototype.solidColor = null;
xinf.ony.SolidColor.prototype.solidOpacity = null;
xinf.ony.SolidColor.prototype.__class__ = xinf.ony.SolidColor;
xinf.ony.erno.SolidColor = function(traits) { if( traits === $_ ) return; {
	xinf.ony.SolidColor.apply(this,[traits]);
}}
xinf.ony.erno.SolidColor.__name__ = ["xinf","ony","erno","SolidColor"];
xinf.ony.erno.SolidColor.__super__ = xinf.ony.SolidColor;
for(var k in xinf.ony.SolidColor.prototype ) xinf.ony.erno.SolidColor.prototype[k] = xinf.ony.SolidColor.prototype[k];
xinf.ony.erno.SolidColor.prototype.getPaint = function(target) {
	var c;
	var o = this.get_solid_opacity();
	var v = Reflect.field(this._traits,"solid-color");
	if(v == xinf.traits.CurrentColor.currentColor) {
		c = target.get_color();
	}
	else {
		c = this.getTrait("solid-color",xinf.ony.type.Paint);
	}
	var $e = (c);
	switch( $e[1] ) {
	case 2:
	var b = $e[4], g = $e[3], r = $e[2];
	{
		return xinf.erno.Paint.SolidColor(r,g,b,o);
	}break;
	default:{
		null;
	}break;
	}
	return xinf.erno.Paint.None;
}
xinf.ony.erno.SolidColor.prototype.__class__ = xinf.ony.erno.SolidColor;
xinf.ony.erno.SolidColor.__interfaces__ = [xinf.ony.erno.PaintServer];
xinf.traits.TraitTypeException = function(name,obj,value,expected) { if( name === $_ ) return; {
	this.message = "Trait '" + name + "' in " + obj + " is of wrong type: " + Type.getClassName(Type.getClass(value)) + " ('" + value + "'), expect " + expected;
}}
xinf.traits.TraitTypeException.__name__ = ["xinf","traits","TraitTypeException"];
xinf.traits.TraitTypeException.prototype.message = null;
xinf.traits.TraitTypeException.prototype.toString = function() {
	return (this.message);
}
xinf.traits.TraitTypeException.prototype.__class__ = xinf.traits.TraitTypeException;
xinf.erno.Constants = function() { }
xinf.erno.Constants.__name__ = ["xinf","erno","Constants"];
xinf.erno.Constants.prototype.__class__ = xinf.erno.Constants;
xinf.ony.erno.Embed = function(o) { if( o === $_ ) return; {
	xinf.ony.erno.Group.apply(this,[]);
	this.root = o;
	this.construct();
}}
xinf.ony.erno.Embed.__name__ = ["xinf","ony","erno","Embed"];
xinf.ony.erno.Embed.__super__ = xinf.ony.erno.Group;
for(var k in xinf.ony.erno.Group.prototype ) xinf.ony.erno.Embed.prototype[k] = xinf.ony.erno.Group.prototype[k];
xinf.ony.erno.Embed.prototype.draw = function(g) {
	if(this.xid == null) throw ("no xid: " + this);
	g.startNative(this.root);
	this.drawContents(g);
	g.endNative();
	this.reTransform(g);
}
xinf.ony.erno.Embed.prototype.root = null;
xinf.ony.erno.Embed.prototype.__class__ = xinf.ony.erno.Embed;
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
	return haxe.Stack.makeStack("$s");
}
haxe.Stack.exceptionStack = function() {
	return haxe.Stack.makeStack("$e");
}
haxe.Stack.toString = function(stack) {
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
	return b.b;
}
haxe.Stack.itemToString = function(b,s) {
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
}
haxe.Stack.makeStack = function(s) {
	var a = function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e31 ) {
			{
				var e = $e31;
				$r = [];
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
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
xinf.geom.Translate = function(x,y) { if( x === $_ ) return; {
	this.x = x;
	this.y = y;
}}
xinf.geom.Translate.__name__ = ["xinf","geom","Translate"];
xinf.geom.Translate.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	if(Std["is"](t,xinf.geom.Translate)) {
		return new xinf.geom.Translate(this.x + t.x,this.y + t.y);
	}
	return new xinf.geom.Concatenate(this,t);
}
xinf.geom.Translate.prototype.apply = function(p) {
	return { x : p.x + this.x, y : p.y + this.y}
}
xinf.geom.Translate.prototype.applyInverse = function(p) {
	return { x : p.x - this.x, y : p.y - this.y}
}
xinf.geom.Translate.prototype.distanceTo = function(p) {
	if(Std["is"](p,xinf.geom.Identity) || !Std["is"](p,xinf.geom.Translate)) return Math.sqrt((this.x * this.x) + (this.y * this.y));
	var q = p;
	return (Math.sqrt(Math.pow(q.x - this.x,2) + Math.pow(q.y - this.y,2)));
}
xinf.geom.Translate.prototype.getMatrix = function() {
	return { a : 1., b : 0., c : 0., d : 1., tx : this.x, ty : this.y}
}
xinf.geom.Translate.prototype.getScale = function() {
	return { x : .0, y : .0}
}
xinf.geom.Translate.prototype.getTranslation = function() {
	return { x : this.x, y : this.y}
}
xinf.geom.Translate.prototype.interpolateWith = function(p,f) {
	if(Std["is"](p,xinf.geom.Identity)) return new xinf.geom.Translate(this.x * (1 - f),this.y * (1 - f));
	if(!Std["is"](p,xinf.geom.Translate)) return this;
	var q = p;
	return (new xinf.geom.Translate(this.x + ((q.x - this.x) * f),this.y + ((q.y - this.y) * f)));
}
xinf.geom.Translate.prototype.isIdentity = function() {
	return (this.x == 0. && this.y == 0.);
}
xinf.geom.Translate.prototype.toString = function() {
	return ("translate(" + this.x + "," + this.y + ")");
}
xinf.geom.Translate.prototype.x = null;
xinf.geom.Translate.prototype.y = null;
xinf.geom.Translate.prototype.__class__ = xinf.geom.Translate;
xinf.geom.Translate.__interfaces__ = [xinf.geom.Transform];
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
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
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	if(c == null) return null;
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e32 ) {
		{
			var e = $e32;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e33 ) {
		{
			var err = $e33;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	if(a[0] != b[0]) return false;
	{
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
	}
	var e = a.__enum__;
	if(e != b.__enum__ || e == null) return false;
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
xinf.event.FrameEvent = function(_type,frame,time) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.frame = frame;
	this.time = time;
}}
xinf.event.FrameEvent.__name__ = ["xinf","event","FrameEvent"];
xinf.event.FrameEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.FrameEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.FrameEvent.prototype.frame = null;
xinf.event.FrameEvent.prototype.time = null;
xinf.event.FrameEvent.prototype.__class__ = xinf.event.FrameEvent;
xinf.ony._PathParser = {}
xinf.ony._PathParser.PathParserState = { __ename__ : ["xinf","ony","_PathParser","PathParserState"], __constructs__ : ["Empty","ParseCommand","ParseFloat"] }
xinf.ony._PathParser.PathParserState.Empty = ["Empty",0];
xinf.ony._PathParser.PathParserState.Empty.toString = $estr;
xinf.ony._PathParser.PathParserState.Empty.__enum__ = xinf.ony._PathParser.PathParserState;
xinf.ony._PathParser.PathParserState.ParseCommand = function(cmd,nargs) { var $x = ["ParseCommand",1,cmd,nargs]; $x.__enum__ = xinf.ony._PathParser.PathParserState; $x.toString = $estr; return $x; }
xinf.ony._PathParser.PathParserState.ParseFloat = function(s,old) { var $x = ["ParseFloat",2,s,old]; $x.__enum__ = xinf.ony._PathParser.PathParserState; $x.toString = $estr; return $x; }
xinf.ony.PathParser = function(p) { if( p === $_ ) return; {
	this.state = xinf.ony._PathParser.PathParserState.Empty;
}}
xinf.ony.PathParser.__name__ = ["xinf","ony","PathParser"];
xinf.ony.PathParser.simplify = function(segments) {
	var out = new List();
	var last = { x : 0., y : 0.}
	var first = { x : 0., y : 0.}
	var csmooth = null;
	var qsmooth = null;
	{ var $it34 = segments.iterator();
	while( $it34.hasNext() ) { var seg = $it34.next();
	{
		var csmooth2 = null;
		var qsmooth2 = null;
		var $e = (seg);
		switch( $e[1] ) {
		case 0:
		var y = $e[3], x = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.MoveTo(x,y));
			last = { x : x, y : y}
			first = { x : x, y : y}
		}break;
		case 1:
		var y = $e[3], x = $e[2];
		{
			first = { x : last.x + x, y : last.y + y}
			last = { x : last.x + x, y : last.y + y}
			out.add(xinf.ony.type.PathSegment.MoveTo(last.x,last.y));
		}break;
		case 2:
		{
			out.add(xinf.ony.type.PathSegment.Close);
			last = first;
		}break;
		case 3:
		var y = $e[3], x = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.LineTo(x,y));
			last = { x : x, y : y}
		}break;
		case 4:
		var y = $e[3], x = $e[2];
		{
			last = { x : last.x + x, y : last.y + y}
			out.add(xinf.ony.type.PathSegment.LineTo(last.x,last.y));
		}break;
		case 5:
		var x = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.LineTo(x,last.y));
			last.x = x;
		}break;
		case 6:
		var x = $e[2];
		{
			last = { x : last.x + x, y : last.y}
			out.add(xinf.ony.type.PathSegment.LineTo(last.x,last.y));
		}break;
		case 7:
		var y = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.LineTo(last.x,y));
			last.y = y;
		}break;
		case 8:
		var y = $e[2];
		{
			last = { x : last.x, y : last.y + y}
			out.add(xinf.ony.type.PathSegment.LineTo(last.x,last.y));
		}break;
		case 9:
		var y = $e[7], x = $e[6], y2 = $e[5], x2 = $e[4], y1 = $e[3], x1 = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.CubicTo(x1,y1,x2,y2,x,y));
			last = { x : x, y : y}
			csmooth2 = { x : x2, y : y2}
		}break;
		case 10:
		var y = $e[7], x = $e[6], y2 = $e[5], x2 = $e[4], y1 = $e[3], x1 = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.CubicTo(last.x + x1,last.y + y1,last.x + x2,last.y + y2,last.x + x,last.y + y));
			csmooth2 = { x : last.x + x2, y : last.y + y2}
			last = { x : last.x + x, y : last.y + y}
		}break;
		case 11:
		var y = $e[5], x = $e[4], y2 = $e[3], x2 = $e[2];
		{
			if(csmooth == null) csmooth = last;
			out.add(xinf.ony.type.PathSegment.CubicTo(last.x + (last.x - csmooth.x),last.y + (last.y - csmooth.y),x2,y2,x,y));
			last = { x : x, y : y}
			csmooth2 = { x : x2, y : y2}
		}break;
		case 12:
		var y = $e[5], x = $e[4], y2 = $e[3], x2 = $e[2];
		{
			if(csmooth == null) csmooth = last;
			out.add(xinf.ony.type.PathSegment.CubicTo(last.x + (last.x - csmooth.x),last.y + (last.y - csmooth.y),last.x + x2,last.y + y2,last.x + x,last.y + y));
			csmooth2 = { x : last.x + x2, y : last.y + y2}
			last = { x : last.x + x, y : last.y + y}
		}break;
		case 13:
		var y = $e[5], x = $e[4], y1 = $e[3], x1 = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.QuadraticTo(x1,y1,x,y));
			last = { x : x, y : y}
			qsmooth2 = { x : x1, y : y1}
		}break;
		case 14:
		var y = $e[5], x = $e[4], y1 = $e[3], x1 = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.QuadraticTo(last.x + x1,last.y + y1,last.x + x,last.y + y));
			qsmooth2 = { x : last.x + x1, y : last.y + y1}
			last = { x : last.x + x, y : last.y + y}
		}break;
		case 15:
		var y = $e[3], x = $e[2];
		{
			if(qsmooth == null) qsmooth = last;
			var s = { x : last.x + (last.x - qsmooth.x), y : last.y + (last.y - qsmooth.y)}
			out.add(xinf.ony.type.PathSegment.QuadraticTo(s.x,s.y,x,y));
			last = { x : x, y : y}
			qsmooth2 = { x : s.x, y : s.y}
		}break;
		case 16:
		var y = $e[3], x = $e[2];
		{
			if(qsmooth == null) qsmooth = last;
			var s = { x : last.x + (last.x - qsmooth.x), y : last.y + (last.y - qsmooth.y)}
			out.add(xinf.ony.type.PathSegment.QuadraticTo(s.x,s.y,last.x + x,last.y + y));
			last = { x : last.x + x, y : last.y + y}
			qsmooth2 = s;
		}break;
		case 17:
		var y = $e[8], x = $e[7], sweep = $e[6], largeArc = $e[5], rotation = $e[4], ry = $e[3], rx = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.ArcTo(last.x,last.y,rx,ry,rotation,largeArc,sweep,x,y));
			last = { x : x, y : y}
		}break;
		case 18:
		var y = $e[8], x = $e[7], sweep = $e[6], largeArc = $e[5], rotation = $e[4], ry = $e[3], rx = $e[2];
		{
			out.add(xinf.ony.type.PathSegment.ArcTo(last.x,last.y,rx,ry,rotation,largeArc,sweep,last.x + x,last.y + y));
			last = { x : last.x + x, y : last.y + y}
		}break;
		default:{
			throw ("unimplemented path segment " + seg);
		}break;
		}
		csmooth = csmooth2;
		csmooth2 = null;
		qsmooth = qsmooth2;
		qsmooth2 = null;
	}
	}}
	return out;
}
xinf.ony.PathParser.prototype.args = null;
xinf.ony.PathParser.prototype.command = function(cmd,a) {
	var op = function($this) {
		var $r;
		switch(cmd) {
		case "M":{
			$r = xinf.ony.type.SVGPathSegment.MoveTo(a[0],a[1]);
		}break;
		case "m":{
			$r = xinf.ony.type.SVGPathSegment.MoveToR(a[0],a[1]);
		}break;
		case "L":{
			$r = xinf.ony.type.SVGPathSegment.LineTo(a[0],a[1]);
		}break;
		case "l":{
			$r = xinf.ony.type.SVGPathSegment.LineToR(a[0],a[1]);
		}break;
		case "H":{
			$r = xinf.ony.type.SVGPathSegment.HorizontalTo(a[0]);
		}break;
		case "h":{
			$r = xinf.ony.type.SVGPathSegment.HorizontalToR(a[0]);
		}break;
		case "V":{
			$r = xinf.ony.type.SVGPathSegment.VerticalTo(a[0]);
		}break;
		case "v":{
			$r = xinf.ony.type.SVGPathSegment.VerticalToR(a[0]);
		}break;
		case "C":{
			$r = xinf.ony.type.SVGPathSegment.CubicTo(a[0],a[1],a[2],a[3],a[4],a[5]);
		}break;
		case "c":{
			$r = xinf.ony.type.SVGPathSegment.CubicToR(a[0],a[1],a[2],a[3],a[4],a[5]);
		}break;
		case "S":{
			$r = xinf.ony.type.SVGPathSegment.SmoothCubicTo(a[0],a[1],a[2],a[3]);
		}break;
		case "s":{
			$r = xinf.ony.type.SVGPathSegment.SmoothCubicToR(a[0],a[1],a[2],a[3]);
		}break;
		case "Q":{
			$r = xinf.ony.type.SVGPathSegment.QuadraticTo(a[0],a[1],a[2],a[3]);
		}break;
		case "q":{
			$r = xinf.ony.type.SVGPathSegment.QuadraticToR(a[0],a[1],a[2],a[3]);
		}break;
		case "T":{
			$r = xinf.ony.type.SVGPathSegment.SmoothQuadraticTo(a[0],a[1]);
		}break;
		case "t":{
			$r = xinf.ony.type.SVGPathSegment.SmoothQuadraticToR(a[0],a[1]);
		}break;
		case "A":{
			$r = xinf.ony.type.SVGPathSegment.ArcTo(a[0],a[1],a[2],a[3] == 0.,a[4] == 0.,a[5],a[6]);
		}break;
		case "a":{
			$r = xinf.ony.type.SVGPathSegment.ArcToR(a[0],a[1],a[2],a[3] == 0.,a[4] == 0.,a[5],a[6]);
		}break;
		case "Z":{
			$r = xinf.ony.type.SVGPathSegment.Close;
		}break;
		case "z":{
			$r = xinf.ony.type.SVGPathSegment.Close;
		}break;
		default:{
			$r = function($this) {
				var $r;
				throw ("unimplemented shape command " + cmd);
				return $r;
			}($this);
		}break;
		}
		return $r;
	}(this);
	this.g.push(op);
}
xinf.ony.PathParser.prototype.endState = function() {
	var $e = (this.state);
	switch( $e[1] ) {
	case 0:
	{
		this.pin++;
	}break;
	case 2:
	var old = $e[3], c = $e[2];
	{
		this.args.push(Std.parseFloat(c));
		this.state = old;
		this.endState();
	}break;
	case 1:
	var nargs = $e[3], cmd = $e[2];
	{
		if(this.args.length == nargs) {
			this.command(cmd,this.args);
			this.args = new Array();
			if(nargs == 0) this.state = xinf.ony._PathParser.PathParserState.Empty;
			else if(cmd.toUpperCase() == "M") {
				if(cmd == "M") cmd = "L";
				else cmd = "l";
				this.parseCommand(cmd);
			}
		}
		this.pin++;
	}break;
	}
}
xinf.ony.PathParser.prototype.fail = function() {
	throw ("failed parsing path '" + this.input.substr(this.pin) + "'");
}
xinf.ony.PathParser.prototype.g = null;
xinf.ony.PathParser.prototype.input = null;
xinf.ony.PathParser.prototype.parse = function(pathToParse) {
	this.input = pathToParse;
	this.pin = 0;
	this.args = new Array();
	this.g = new Array();
	while(this.pin < this.input.length) {
		var c = this.input.charAt(this.pin);
		if(StringTools.isSpace(c,0) || c == ",") {
			this.endState();
		}
		else if(c == "-") {
			var $e = (this.state);
			switch( $e[1] ) {
			case 2:
			var old = $e[3], f = $e[2];
			{
				if(f.length == 0) this.state = xinf.ony._PathParser.PathParserState.ParseFloat("-",old);
				else if(f.charAt(f.length - 1) == "e") {
					this.state = xinf.ony._PathParser.PathParserState.ParseFloat(f + c,old);
					this.pin++;
				}
				else {
					this.endState();
					this.state = xinf.ony._PathParser.PathParserState.ParseFloat("-",this.state);
				}
			}break;
			default:{
				this.state = xinf.ony._PathParser.PathParserState.ParseFloat("-",this.state);
				this.pin++;
			}break;
			}
		}
		else if(xinf.ony.PathParser.commandReg.match(c)) {
			this.endState();
			this.parseCommand(xinf.ony.PathParser.commandReg.matched(0));
		}
		else {
			var $e = (this.state);
			switch( $e[1] ) {
			case 2:
			var old = $e[3], f = $e[2];
			{
				this.state = xinf.ony._PathParser.PathParserState.ParseFloat(f + c,old);
				this.pin++;
			}break;
			default:{
				this.state = xinf.ony._PathParser.PathParserState.ParseFloat(c,this.state);
				this.pin++;
			}break;
			}
		}
	}
	this.endState();
	return this.g;
}
xinf.ony.PathParser.prototype.parseCommand = function(cmd) {
	var nargs = function($this) {
		var $r;
		switch(cmd.toUpperCase()) {
		case "Z":{
			$r = 0;
		}break;
		case "H":case "V":{
			$r = 1;
		}break;
		case "M":case "L":case "T":{
			$r = 2;
		}break;
		case "S":case "Q":{
			$r = 4;
		}break;
		case "C":{
			$r = 6;
		}break;
		case "A":{
			$r = 7;
		}break;
		default:{
			$r = null;
		}break;
		}
		return $r;
	}(this);
	this.state = xinf.ony._PathParser.PathParserState.ParseCommand(cmd,nargs);
}
xinf.ony.PathParser.prototype.pin = null;
xinf.ony.PathParser.prototype.state = null;
xinf.ony.PathParser.prototype.__class__ = xinf.ony.PathParser;
xinf.erno.Runtime = function(p) { if( p === $_ ) return; {
	xinf.event.SimpleEventDispatcher.apply(this,[]);
}}
xinf.erno.Runtime.__name__ = ["xinf","erno","Runtime"];
xinf.erno.Runtime.__super__ = xinf.event.SimpleEventDispatcher;
for(var k in xinf.event.SimpleEventDispatcher.prototype ) xinf.erno.Runtime.prototype[k] = xinf.event.SimpleEventDispatcher.prototype[k];
xinf.erno.Runtime.runtime = null;
xinf.erno.Runtime._runtime = null;
xinf.erno.Runtime.renderer = null;
xinf.erno.Runtime._renderer = null;
xinf.erno.Runtime.getRuntime = function() {
	if(xinf.erno.Runtime._runtime == null) xinf.erno.Runtime.initRuntime();
	return xinf.erno.Runtime._runtime;
}
xinf.erno.Runtime.getRenderer = function() {
	if(xinf.erno.Runtime._renderer == null) xinf.erno.Runtime.initRuntime();
	return xinf.erno.Runtime._renderer;
}
xinf.erno.Runtime.initRuntime = function() {
	xinf.erno.Runtime._renderer = new xinf.erno.js.JSRenderer();
	xinf.erno.Runtime._runtime = new xinf.erno.js.JSRuntime();
	if(xinf.erno.Runtime.getRuntime() == null) throw ("unable to create runtime environment");
	return xinf.erno.Runtime.getRuntime();
}
xinf.erno.Runtime.addEventListener = function(type,h) {
	return xinf.erno.Runtime.getRuntime().addEventListener(type,h);
}
xinf.erno.Runtime.removeEventListener = function(type,h) {
	return xinf.erno.Runtime.getRuntime().removeEventListener(type,h);
}
xinf.erno.Runtime.prototype.changed = function() {
	null;
}
xinf.erno.Runtime.prototype.getDefaultRoot = function() {
	throw ("unimplemented");
	return null;
}
xinf.erno.Runtime.prototype.getFramerate = function() {
	return 30;
}
xinf.erno.Runtime.prototype.getMeasuredFramerate = function() {
	return -1.;
}
xinf.erno.Runtime.prototype.getNextId = function() {
	throw ("unimplemented");
	return -1;
}
xinf.erno.Runtime.prototype.run = function() {
	throw ("unimplemented");
}
xinf.erno.Runtime.prototype.setBackgroundColor = function(r,g,b,a) {
	null;
}
xinf.erno.Runtime.prototype.setFramerate = function(rate) {
	null;
}
xinf.erno.Runtime.prototype.__class__ = xinf.erno.Runtime;
xinf.erno.SimpleRuntime = function(p) { if( p === $_ ) return; {
	xinf.erno.Runtime.apply(this,[]);
	this.nextId = 1;
}}
xinf.erno.SimpleRuntime.__name__ = ["xinf","erno","SimpleRuntime"];
xinf.erno.SimpleRuntime.__super__ = xinf.erno.Runtime;
for(var k in xinf.erno.Runtime.prototype ) xinf.erno.SimpleRuntime.prototype[k] = xinf.erno.Runtime.prototype[k];
xinf.erno.SimpleRuntime.prototype.getNextId = function() {
	return this.nextId++;
}
xinf.erno.SimpleRuntime.prototype.nextId = null;
xinf.erno.SimpleRuntime.prototype.__class__ = xinf.erno.SimpleRuntime;
org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","InjectFSMCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand.prototype.execute = function(note) {
	var xmlStr = "<fsm initial=\"" + "StopWatch" + "/states/ready" + "\">\r\n\t\t   <state name=\"" + "StopWatch" + "/states/ready" + "\" entering=\"" + "resetDisplay" + "\">\r\n\t\t       <transition action=\"" + "StopWatch" + "/actions/start" + "\" target=\"" + "StopWatch" + "/states/running" + "\"/>\r\n\t\t   </state>\r\n\t\t   <state name=\"" + "StopWatch" + "/states/running" + "\" entering=\"" + "ensureTimer" + "\">\r\n\t\t       <transition action=\"" + "StopWatch" + "/actions/split" + "\" target=\"" + "StopWatch" + "/states/paused" + "\"/>\r\n\t\t       <transition action=\"" + "StopWatch" + "/actions/stop" + "\" target=\"" + "StopWatch" + "/states/stopped" + "\"/>\r\n\t\t   </state>\r\n\t\t   <state name=\"" + "StopWatch" + "/states/paused" + "\" entering=\"" + "freezeDisplay" + "\">\r\n\t\t       <transition action=\"" + "StopWatch" + "/actions/unsplit" + "\" target=\"" + "StopWatch" + "/states/running" + "\"/>\r\n\t\t       <transition action=\"" + "StopWatch" + "/actions/stop" + "\" target=\"" + "StopWatch" + "/states/stopped" + "\"/>\r\n\t\t   </state>\r\n\t\t   <state name=\"" + "StopWatch" + "/states/stopped" + "\" entering=\"" + "stopTimer" + "\">\r\n\t\t       <transition action=\"" + "StopWatch" + "/actions/reset" + "\" target=\"" + "StopWatch" + "/states/ready" + "\"/>\r\n\t\t   </state>\r\n\t\t</fsm>";
	var fsm = Xml.parse(xmlStr).firstElement();
	var injector = new org.puremvc.haxe.utilities.statemachine.FSMInjector(fsm);
	injector.inject();
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand;
xinf.event.GeometryEvent = function(_type,_x,_y) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.x = _x;
	this.y = _y;
}}
xinf.event.GeometryEvent.__name__ = ["xinf","event","GeometryEvent"];
xinf.event.GeometryEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.GeometryEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.GeometryEvent.prototype.toString = function() {
	return ("" + this.type + "(" + this.x + "," + this.y + ")");
}
xinf.event.GeometryEvent.prototype.x = null;
xinf.event.GeometryEvent.prototype.y = null;
xinf.event.GeometryEvent.prototype.__class__ = xinf.event.GeometryEvent;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it35 = arr.iterator();
	while( $it35.hasNext() ) { var t = $it35.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e36 ) {
		{
			var e = $e36;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
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
		catch( $e37 ) {
			{
				var e = $e37;
				{
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
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
org.puremvc.haxe.interfaces.IProxy = function() { }
org.puremvc.haxe.interfaces.IProxy.__name__ = ["org","puremvc","haxe","interfaces","IProxy"];
org.puremvc.haxe.interfaces.IProxy.prototype.getData = null;
org.puremvc.haxe.interfaces.IProxy.prototype.getProxyName = null;
org.puremvc.haxe.interfaces.IProxy.prototype.onRegister = null;
org.puremvc.haxe.interfaces.IProxy.prototype.onRemove = null;
org.puremvc.haxe.interfaces.IProxy.prototype.setData = null;
org.puremvc.haxe.interfaces.IProxy.prototype.__class__ = org.puremvc.haxe.interfaces.IProxy;
org.puremvc.haxe.patterns.proxy = {}
org.puremvc.haxe.patterns.proxy.Proxy = function(proxyName,data) { if( proxyName === $_ ) return; {
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.proxyName = (proxyName != null?proxyName:org.puremvc.haxe.patterns.proxy.Proxy.NAME);
	if(data != null) this.setData(data);
}}
org.puremvc.haxe.patterns.proxy.Proxy.__name__ = ["org","puremvc","haxe","patterns","proxy","Proxy"];
org.puremvc.haxe.patterns.proxy.Proxy.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.proxy.Proxy.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.proxy.Proxy.prototype.data = null;
org.puremvc.haxe.patterns.proxy.Proxy.prototype.getData = function() {
	return this.data;
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.getProxyName = function() {
	return this.proxyName;
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.onRegister = function() {
	null;
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.onRemove = function() {
	null;
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.proxyName = null;
org.puremvc.haxe.patterns.proxy.Proxy.prototype.setData = function(data) {
	this.data = data;
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.__class__ = org.puremvc.haxe.patterns.proxy.Proxy;
org.puremvc.haxe.patterns.proxy.Proxy.__interfaces__ = [org.puremvc.haxe.interfaces.IProxy];
org.puremvc.haxe.demos.xinf.stopwatch.proxy = {}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.proxy.Proxy.apply(this,["StopWatchProxy"]);
	this.timer = new org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer($closure(this,"onTick"),1000);
}}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","proxy","StopWatchProxy"];
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.__super__ = org.puremvc.haxe.patterns.proxy.Proxy;
for(var k in org.puremvc.haxe.patterns.proxy.Proxy.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype[k] = org.puremvc.haxe.patterns.proxy.Proxy.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.displayTime = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.elapsed = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.freeze = function() {
	this.sendNotification("StopWatchProxy" + "/notes/lap",this.getDisplayTime());
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.getDisplayTime = function() {
	var time = this.getElapsed();
	return { h : time.getHours(), m : time.getMinutes(), s : time.getSeconds()}
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.getElapsed = function() {
	return Date.fromTime(this.now.getTime() - this.start.getTime());
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.now = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.onTick = function() {
	this.now = Date.now();
	this.sendNotification("StopWatchProxy" + "/notes/tick",this.getDisplayTime());
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.resetTimer = function() {
	this.timer.reset();
	this.start = Date.now();
	this.now = this.start;
	this.sendNotification("StopWatchProxy" + "/notes/reset",this.getDisplayTime());
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.start = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.startTimer = function() {
	this.timer.start();
	this.sendNotification("StopWatchProxy" + "/notes/sync",this.getDisplayTime());
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.stopTimer = function() {
	this.timer.stop();
	this.now = Date.now();
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.timer = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer = function(callBack,milliInterval,maxTicks) { if( callBack === $_ ) return; {
	if(maxTicks == null) maxTicks = -1;
	if(milliInterval == null) milliInterval = 1000;
	this.callBack = callBack;
	this.milliInterval = milliInterval;
	this.maxTicks = maxTicks;
	this.ticks = 0;
	this.stopped = true;
}}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","proxy","Timer"];
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.callBack = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.maxTicks = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.milliInterval = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.reset = function() {
	this.ticks = 0;
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.start = function() {
	this.stopped = false;
	haxe.Timer.delay($closure(this,"tick"),this.milliInterval);
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.stop = function() {
	this.stopped = true;
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.stopped = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.tick = function() {
	if(this.stopped || this.ticks == this.maxTicks) return;
	this.callBack();
	this.ticks++;
	haxe.Timer.delay($closure(this,"tick"),this.milliInterval);
}
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.ticks = null;
org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.proxy.Timer;
xinf.ony.erno.Path = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Path.apply(this,[traits]);
}}
xinf.ony.erno.Path.__name__ = ["xinf","ony","erno","Path"];
xinf.ony.erno.Path.__super__ = xinf.ony.Path;
for(var k in xinf.ony.Path.prototype ) xinf.ony.erno.Path.prototype[k] = xinf.ony.Path.prototype[k];
xinf.ony.erno.Path.prototype.drawContents = function(g) {
	xinf.ony.Path.prototype.drawContents.apply(this,[g]);
	if(this.get_segments() == null) return;
	g.startShape();
	var open = false;
	{ var $it38 = this.get_segments().iterator();
	while( $it38.hasNext() ) { var s = $it38.next();
	{
		var $e = (s);
		switch( $e[1] ) {
		case 0:
		var y = $e[3], x = $e[2];
		{
			if(open) g.endPath();
			open = true;
			g.startPath(x,y);
		}break;
		case 2:
		var y = $e[3], x = $e[2];
		{
			open = true;
			g.lineTo(x,y);
		}break;
		case 1:
		{
			g.close();
			g.endPath();
			open = false;
		}break;
		case 4:
		var y = $e[5], x = $e[4], y1 = $e[3], x1 = $e[2];
		{
			open = true;
			g.quadraticTo(x1,y1,x,y);
		}break;
		case 3:
		var y = $e[7], x = $e[6], y2 = $e[5], x2 = $e[4], y1 = $e[3], x1 = $e[2];
		{
			open = true;
			g.cubicTo(x1,y1,x2,y2,x,y);
		}break;
		case 5:
		var y = $e[10], x = $e[9], sweep = $e[8], largeArc = $e[7], rotation = $e[6], ry = $e[5], rx = $e[4], y1 = $e[3], x1 = $e[2];
		{
			open = true;
			g.arcTo(x1,y1,rx,ry,rotation,largeArc,sweep,x,y);
		}break;
		}
	}
	}}
	if(open) g.endPath();
	g.endShape();
}
xinf.ony.erno.Path.prototype.__class__ = xinf.ony.erno.Path;
xinf.ony.erno.Manager = function(p) { if( p === $_ ) return; {
	this.objects = new IntHash();
	this.changed = new IntHash();
	this.moved = new IntHash();
	xinf.erno.Runtime.addEventListener(xinf.event.FrameEvent.ENTER_FRAME,$closure(this,"redrawChanged"));
	xinf.erno.Runtime.addEventListener(xinf.event.MouseEvent.MOUSE_DOWN,$closure(this,"dispatchToTarget"));
	xinf.erno.Runtime.addEventListener(xinf.event.MouseEvent.MOUSE_OVER,$closure(this,"dispatchToTarget"));
	xinf.erno.Runtime.addEventListener(xinf.event.MouseEvent.MOUSE_OUT,$closure(this,"dispatchToTarget"));
	xinf.erno.Runtime.addEventListener(xinf.event.ScrollEvent.SCROLL_STEP,$closure(this,"dispatchToTarget"));
	xinf.erno.Runtime.addEventListener(xinf.event.UIEvent.ACTIVATE,$closure(this,"dispatchToTarget"));
}}
xinf.ony.erno.Manager.__name__ = ["xinf","ony","erno","Manager"];
xinf.ony.erno.Manager.prototype.changed = null;
xinf.ony.erno.Manager.prototype.dispatchToTarget = function(e) {
	if(e.targetId != null) {
		var target = this.find(e.targetId);
		e.target = target;
		if(target != null) {
			target.postEvent(e,{ fileName : "Manager.hx", lineNumber : 60, className : "xinf.ony.erno.Manager", methodName : "dispatchToTarget"});
		}
	}
}
xinf.ony.erno.Manager.prototype.find = function(id) {
	return this.objects.get(id);
}
xinf.ony.erno.Manager.prototype.moved = null;
xinf.ony.erno.Manager.prototype.objectChanged = function(id,o) {
	this.changed.set(id,o);
}
xinf.ony.erno.Manager.prototype.objectMoved = function(id,o) {
	this.moved.set(id,o);
}
xinf.ony.erno.Manager.prototype.objects = null;
xinf.ony.erno.Manager.prototype.redrawChanged = function(e) {
	var somethingChanged = false;
	var g = xinf.erno.Runtime.getRenderer();
	var ch = this.moved;
	this.moved = new IntHash();
	{ var $it39 = ch.keys();
	while( $it39.hasNext() ) { var id = $it39.next();
	{
		ch.get(id).reTransform(g);
		somethingChanged = true;
	}
	}}
	var ch1 = this.changed;
	this.changed = new IntHash();
	{ var $it40 = ch1.keys();
	while( $it40.hasNext() ) { var id = $it40.next();
	{
		ch1.get(id).draw(g);
		somethingChanged = true;
	}
	}}
	if(somethingChanged) xinf.erno.Runtime.getRuntime().changed();
}
xinf.ony.erno.Manager.prototype.register = function(id,o) {
	this.objects.set(id,o);
}
xinf.ony.erno.Manager.prototype.unregister = function(id) {
	this.objects.remove(id);
	this.changed.remove(id);
	this.moved.remove(id);
	xinf.erno.Runtime.getRenderer().destroyObject(id);
}
xinf.ony.erno.Manager.prototype.__class__ = xinf.ony.erno.Manager;
xinf.event.ImageLoadEvent = function(_type,image,data) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.image = image;
	this.data = data;
}}
xinf.event.ImageLoadEvent.__name__ = ["xinf","event","ImageLoadEvent"];
xinf.event.ImageLoadEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.ImageLoadEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.ImageLoadEvent.prototype.data = null;
xinf.event.ImageLoadEvent.prototype.image = null;
xinf.event.ImageLoadEvent.prototype.__class__ = xinf.event.ImageLoadEvent;
org.puremvc.haxe.interfaces.IView = function() { }
org.puremvc.haxe.interfaces.IView.__name__ = ["org","puremvc","haxe","interfaces","IView"];
org.puremvc.haxe.interfaces.IView.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.notifyObservers = null;
org.puremvc.haxe.interfaces.IView.prototype.registerMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.registerObserver = null;
org.puremvc.haxe.interfaces.IView.prototype.removeMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.removeObserver = null;
org.puremvc.haxe.interfaces.IView.prototype.retrieveMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.__class__ = org.puremvc.haxe.interfaces.IView;
xinf.ony.Rectangle = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Rectangle.__name__ = ["xinf","ony","Rectangle"];
xinf.ony.Rectangle.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Rectangle.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Rectangle.prototype.getBoundingBox = function() {
	return { l : this.get_x(), t : this.get_y(), r : this.get_x() + this.get_width(), b : this.get_y() + this.get_height()}
}
xinf.ony.Rectangle.prototype.get_height = function() {
	return this.getTrait("height",xinf.ony.type.Length).value;
}
xinf.ony.Rectangle.prototype.get_rx = function() {
	return this.getTrait("rx",xinf.ony.type.Length).value;
}
xinf.ony.Rectangle.prototype.get_ry = function() {
	return this.getTrait("ry",xinf.ony.type.Length).value;
}
xinf.ony.Rectangle.prototype.get_width = function() {
	return this.getTrait("width",xinf.ony.type.Length).value;
}
xinf.ony.Rectangle.prototype.get_x = function() {
	return this.getTrait("x",xinf.ony.type.Length).value;
}
xinf.ony.Rectangle.prototype.get_y = function() {
	return this.getTrait("y",xinf.ony.type.Length).value;
}
xinf.ony.Rectangle.prototype.height = null;
xinf.ony.Rectangle.prototype.rx = null;
xinf.ony.Rectangle.prototype.ry = null;
xinf.ony.Rectangle.prototype.set_height = function(v) {
	this.setTrait("height",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Rectangle.prototype.set_rx = function(v) {
	this.setTrait("rx",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Rectangle.prototype.set_ry = function(v) {
	this.setTrait("ry",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Rectangle.prototype.set_width = function(v) {
	this.setTrait("width",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Rectangle.prototype.set_x = function(v) {
	this.setTrait("x",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Rectangle.prototype.set_y = function(v) {
	this.setTrait("y",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Rectangle.prototype.width = null;
xinf.ony.Rectangle.prototype.x = null;
xinf.ony.Rectangle.prototype.y = null;
xinf.ony.Rectangle.prototype.__class__ = xinf.ony.Rectangle;
org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","StopTimerCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand.prototype.execute = function(note) {
	var proxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("StopWatchProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	proxy.stopTimer();
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.StopTimerCommand;
org.puremvc.haxe.interfaces.INotification = function() { }
org.puremvc.haxe.interfaces.INotification.__name__ = ["org","puremvc","haxe","interfaces","INotification"];
org.puremvc.haxe.interfaces.INotification.prototype.getBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.getName = null;
org.puremvc.haxe.interfaces.INotification.prototype.getType = null;
org.puremvc.haxe.interfaces.INotification.prototype.setBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.setType = null;
org.puremvc.haxe.interfaces.INotification.prototype.toString = null;
org.puremvc.haxe.interfaces.INotification.prototype.__class__ = org.puremvc.haxe.interfaces.INotification;
xinf.xml.Instantiator = function(cl) { if( cl === $_ ) return; {
	this.myClass = cl;
}}
xinf.xml.Instantiator.__name__ = ["xinf","xml","Instantiator"];
xinf.xml.Instantiator.prototype.fits = function(xml) {
	return false;
}
xinf.xml.Instantiator.prototype.instantiate = function() {
	var ret;
	try {
		ret = Type.createInstance(this.myClass,[null]);
	}
	catch( $e41 ) {
		{
			var e = $e41;
			{
				throw ("Could not create instance of " + Type.getClassName(this.myClass) + ": " + e);
			}
		}
	}
	return ret;
}
xinf.xml.Instantiator.prototype.myClass = null;
xinf.xml.Instantiator.prototype.__class__ = xinf.xml.Instantiator;
xinf.xml.ByAttributeValue = function(attributeName,attributeValue,cl) { if( attributeName === $_ ) return; {
	xinf.xml.Instantiator.apply(this,[cl]);
	this.attributeName = attributeName;
	this.attributeValue = attributeValue;
}}
xinf.xml.ByAttributeValue.__name__ = ["xinf","xml","ByAttributeValue"];
xinf.xml.ByAttributeValue.__super__ = xinf.xml.Instantiator;
for(var k in xinf.xml.Instantiator.prototype ) xinf.xml.ByAttributeValue.prototype[k] = xinf.xml.Instantiator.prototype[k];
xinf.xml.ByAttributeValue.prototype.attributeName = null;
xinf.xml.ByAttributeValue.prototype.attributeValue = null;
xinf.xml.ByAttributeValue.prototype.fits = function(xml) {
	return (xml.get(this.attributeName) == this.attributeValue);
}
xinf.xml.ByAttributeValue.prototype.__class__ = xinf.xml.ByAttributeValue;
xinf.xml.HasAttribute = function(attributeName,cl) { if( attributeName === $_ ) return; {
	xinf.xml.Instantiator.apply(this,[cl]);
	this.attributeName = attributeName;
}}
xinf.xml.HasAttribute.__name__ = ["xinf","xml","HasAttribute"];
xinf.xml.HasAttribute.__super__ = xinf.xml.Instantiator;
for(var k in xinf.xml.Instantiator.prototype ) xinf.xml.HasAttribute.prototype[k] = xinf.xml.Instantiator.prototype[k];
xinf.xml.HasAttribute.prototype.attributeName = null;
xinf.xml.HasAttribute.prototype.fits = function(xml) {
	return (xml.get(this.attributeName) != null);
}
xinf.xml.HasAttribute.prototype.__class__ = xinf.xml.HasAttribute;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	{ var $it42 = it.iterator();
	while( $it42.hasNext() ) { var i = $it42.next();
	a.push(i);
	}}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	{ var $it43 = it.iterator();
	while( $it43.hasNext() ) { var i = $it43.next();
	l.add(i);
	}}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	{ var $it44 = it.iterator();
	while( $it44.hasNext() ) { var x = $it44.next();
	l.add(f(x));
	}}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	{ var $it45 = it.iterator();
	while( $it45.hasNext() ) { var x = $it45.next();
	l.add(f(i++,x));
	}}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it46 = it.iterator();
		while( $it46.hasNext() ) { var x = $it46.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it47 = it.iterator();
		while( $it47.hasNext() ) { var x = $it47.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.exists = function(it,f) {
	{ var $it48 = it.iterator();
	while( $it48.hasNext() ) { var x = $it48.next();
	if(f(x)) return true;
	}}
	return false;
}
Lambda.foreach = function(it,f) {
	{ var $it49 = it.iterator();
	while( $it49.hasNext() ) { var x = $it49.next();
	if(!f(x)) return false;
	}}
	return true;
}
Lambda.iter = function(it,f) {
	{ var $it50 = it.iterator();
	while( $it50.hasNext() ) { var x = $it50.next();
	f(x);
	}}
}
Lambda.filter = function(it,f) {
	var l = new List();
	{ var $it51 = it.iterator();
	while( $it51.hasNext() ) { var x = $it51.next();
	if(f(x)) l.add(x);
	}}
	return l;
}
Lambda.fold = function(it,f,first) {
	{ var $it52 = it.iterator();
	while( $it52.hasNext() ) { var x = $it52.next();
	first = f(x,first);
	}}
	return first;
}
Lambda.count = function(it) {
	var n = 0;
	{ var $it53 = it.iterator();
	while( $it53.hasNext() ) { var _ = $it53.next();
	++n;
	}}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.prototype.__class__ = Lambda;
org.puremvc.haxe.interfaces.IObserver = function() { }
org.puremvc.haxe.interfaces.IObserver.__name__ = ["org","puremvc","haxe","interfaces","IObserver"];
org.puremvc.haxe.interfaces.IObserver.prototype.compareNotifyContext = null;
org.puremvc.haxe.interfaces.IObserver.prototype.notifyObserver = null;
org.puremvc.haxe.interfaces.IObserver.prototype.setNotifyContext = null;
org.puremvc.haxe.interfaces.IObserver.prototype.setNotifyMethod = null;
org.puremvc.haxe.interfaces.IObserver.prototype.__class__ = org.puremvc.haxe.interfaces.IObserver;
org.puremvc.haxe.patterns.observer.Observer = function(notifyMethod,notifyContext) { if( notifyMethod === $_ ) return; {
	this.setNotifyMethod(notifyMethod);
	this.setNotifyContext(notifyContext);
}}
org.puremvc.haxe.patterns.observer.Observer.__name__ = ["org","puremvc","haxe","patterns","observer","Observer"];
org.puremvc.haxe.patterns.observer.Observer.prototype.compareNotifyContext = function(object) {
	return object == this.context;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.context = null;
org.puremvc.haxe.patterns.observer.Observer.prototype.getNotifyContext = function() {
	return this.context;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.getNotifyMethod = function() {
	return $closure(this,"notify");
}
org.puremvc.haxe.patterns.observer.Observer.prototype.notify = null;
org.puremvc.haxe.patterns.observer.Observer.prototype.notifyObserver = function(notification) {
	(this.getNotifyMethod())(notification);
}
org.puremvc.haxe.patterns.observer.Observer.prototype.setNotifyContext = function(notifyContext) {
	this.context = notifyContext;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.setNotifyMethod = function(notifyMethod) {
	this.notify = notifyMethod;
}
org.puremvc.haxe.patterns.observer.Observer.prototype.__class__ = org.puremvc.haxe.patterns.observer.Observer;
org.puremvc.haxe.patterns.observer.Observer.__interfaces__ = [org.puremvc.haxe.interfaces.IObserver];
org.puremvc.haxe.patterns.command.MacroCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.subCommands = new List();
	this.initializeMacroCommand();
}}
org.puremvc.haxe.patterns.command.MacroCommand.__name__ = ["org","puremvc","haxe","patterns","command","MacroCommand"];
org.puremvc.haxe.patterns.command.MacroCommand.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.command.MacroCommand.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.command.MacroCommand.prototype.addSubCommand = function(commandClassRef) {
	this.subCommands.add(commandClassRef);
}
org.puremvc.haxe.patterns.command.MacroCommand.prototype.execute = function(notification) {
	while(!this.subCommands.isEmpty()) {
		var commandClassRef = this.subCommands.pop();
		var commandInstance = Type.createInstance(commandClassRef,[]);
		commandInstance.execute(notification);
	}
}
org.puremvc.haxe.patterns.command.MacroCommand.prototype.initializeMacroCommand = function() {
	null;
}
org.puremvc.haxe.patterns.command.MacroCommand.prototype.subCommands = null;
org.puremvc.haxe.patterns.command.MacroCommand.prototype.__class__ = org.puremvc.haxe.patterns.command.MacroCommand;
org.puremvc.haxe.patterns.command.MacroCommand.__interfaces__ = [org.puremvc.haxe.interfaces.ICommand];
org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.MacroCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","StartupCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand.__super__ = org.puremvc.haxe.patterns.command.MacroCommand;
for(var k in org.puremvc.haxe.patterns.command.MacroCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand.prototype[k] = org.puremvc.haxe.patterns.command.MacroCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand.prototype.initializeMacroCommand = function() {
	this.addSubCommand(org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand);
	this.addSubCommand(org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepViewCommand);
	this.addSubCommand(org.puremvc.haxe.demos.xinf.stopwatch.controller.InjectFSMCommand);
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.StartupCommand;
xinf.event.SimpleEvent = function(_type) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
}}
xinf.event.SimpleEvent.__name__ = ["xinf","event","SimpleEvent"];
xinf.event.SimpleEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.SimpleEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.SimpleEvent.prototype.__class__ = xinf.event.SimpleEvent;
StopWatch = function(p) { if( p === $_ ) return; {
	xinf.event.SimpleEventDispatcher.apply(this,[]);
	this.buttonData = [{ groupId : "start_btn", coverId : "start_btn_cover", action : $closure(this,"onStart")},{ groupId : "stop_btn", coverId : "stop_btn_cover", action : $closure(this,"onStop")},{ groupId : "reset_btn", coverId : "reset_btn_cover", action : $closure(this,"onReset")},{ groupId : "split_btn", coverId : "split_btn_cover", action : $closure(this,"onSplit")},{ groupId : "unsplit_btn", coverId : "unsplit_btn_cover", action : $closure(this,"onUnsplit")}];
	var doc = document.getElementById("js_time").getSVGDocument();
	this.timeWatch = { doc : doc, watch : new Watch(doc,"watch","hour","minute","second"), buttons : this.getButtons(doc)}
	doc = document.getElementById("js_laptime").getSVGDocument();
	this.laptimeWatch = { doc : doc, watch : new Watch(doc,"watch","hour","minute","second"), buttons : this.getButtons(doc)}
	this.showButtons(this.laptimeWatch.doc,false);
	this.laptimeWatch.watch.setShow(false);
	org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.getInstance().startup(this);
}}
StopWatch.__name__ = ["StopWatch"];
StopWatch.__super__ = xinf.event.SimpleEventDispatcher;
for(var k in xinf.event.SimpleEventDispatcher.prototype ) StopWatch.prototype[k] = xinf.event.SimpleEventDispatcher.prototype[k];
StopWatch.main = function() {
	try {
		new StopWatch();
	}
	catch( $e54 ) {
		{
			var e = $e54;
			{
				haxe.Log.trace("err or " + Std.string(e),{ fileName : "StopWatch.hx", lineNumber : 167, className : "StopWatch", methodName : "main"});
			}
		}
	}
}
StopWatch.prototype.buttonData = null;
StopWatch.prototype.elapsed = null;
StopWatch.prototype.getButtons = function(doc) {
	var buttons = new Hash();
	{
		var _g = 0, _g1 = this.buttonData;
		while(_g < _g1.length) {
			var d = _g1[_g];
			++_g;
			buttons.set(d.groupId,new Button(doc,d.groupId,d.coverId,$closure(d,"action"),false));
		}
	}
	return buttons;
}
StopWatch.prototype.laptime = null;
StopWatch.prototype.laptimeWatch = null;
StopWatch.prototype.onError = function(e) {
	haxe.Log.trace("Could not load SVG source.\n" + e,{ fileName : "StopWatch.hx", lineNumber : 154, className : "StopWatch", methodName : "onError"});
}
StopWatch.prototype.onLoad1 = function(data) {
	xinf.ony.Root.appendChild(data);
	this.timeWatch.watch = new Watch(this.timeWatch.doc,"watch","hour","minute","second");
	this.timeWatch.buttons = this.getButtons(this.timeWatch.doc);
}
StopWatch.prototype.onLoad2 = function(data) {
	xinf.ony.Root.appendChild(data);
	this.laptimeWatch.watch = new Watch(this.laptimeWatch.doc,"watch","hour","minute","second");
	this.laptimeWatch.buttons = this.getButtons(this.laptimeWatch.doc);
	this.showButtons(this.laptimeWatch.doc,false);
	this.laptimeWatch.watch.setShow(false);
	data.set_transform(new xinf.geom.Translate(300.,0));
	xinf.ony.Root.main();
	org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.getInstance().startup(this);
}
StopWatch.prototype.onReset = function() {
	this.dispatchEvent(new StopWatchEvent(StopWatchEvent.RESET));
}
StopWatch.prototype.onSplit = function() {
	this.dispatchEvent(new StopWatchEvent(StopWatchEvent.SPLIT));
}
StopWatch.prototype.onStart = function() {
	this.dispatchEvent(new StopWatchEvent(StopWatchEvent.START));
}
StopWatch.prototype.onStop = function() {
	this.dispatchEvent(new StopWatchEvent(StopWatchEvent.STOP));
}
StopWatch.prototype.onUnsplit = function() {
	this.dispatchEvent(new StopWatchEvent(StopWatchEvent.UNSPLIT));
}
StopWatch.prototype.setElapsed = function(hms) {
	if(this.timeWatch.watch == null) return hms;
	this.timeWatch.watch.setTime(hms);
	return hms;
}
StopWatch.prototype.setLaptime = function(hms) {
	if(this.laptimeWatch.watch == null) return hms;
	if(hms == null) {
		this.laptimeWatch.watch.setShow(false);
	}
	else {
		this.laptimeWatch.watch.setTime(hms);
		this.laptimeWatch.watch.setShow(true);
	}
	return hms;
}
StopWatch.prototype.setState = function(state) {
	if(this.timeWatch.buttons == null) return state;
	this.timeWatch.buttons.get("start_btn").setEnabled((state == "StopWatch" + "/states/ready"));
	this.timeWatch.buttons.get("stop_btn").setEnabled((state == "StopWatch" + "/states/running" || state == "StopWatch" + "/states/paused"));
	this.timeWatch.buttons.get("reset_btn").setEnabled((state == "StopWatch" + "/states/stopped"));
	this.timeWatch.buttons.get("split_btn").setEnabled((state == "StopWatch" + "/states/running"));
	this.timeWatch.buttons.get("unsplit_btn").setEnabled((state == "StopWatch" + "/states/paused"));
	return state;
}
StopWatch.prototype.showButtons = function(doc,b) {
	doc.getElementById("buttons").setAttribute("opacity",(b?"1":"0"));
}
StopWatch.prototype.state = null;
StopWatch.prototype.timeWatch = null;
StopWatch.prototype.__class__ = StopWatch;
Watch = function(doc,watchId,hourId,minId,secId) { if( doc === $_ ) return; {
	this.doc = doc;
	this.watchId = watchId;
	this.hourId = hourId;
	this.minId = minId;
	this.secId = secId;
}}
Watch.__name__ = ["Watch"];
Watch.prototype.doc = null;
Watch.prototype.hourId = null;
Watch.prototype.minId = null;
Watch.prototype.secId = null;
Watch.prototype.setShow = function(s) {
	this.show = s;
	this.doc.getElementById(this.watchId).setAttribute("opacity",(s?"1":"0"));
	return s;
}
Watch.prototype.setTime = function(t) {
	this.time = t;
	this.doc.getElementById(this.hourId).setAttribute("transform","rotate( " + Std.string(t.h * 6) + ")");
	this.doc.getElementById(this.minId).setAttribute("transform","rotate( " + Std.string(t.m * 6) + ")");
	this.doc.getElementById(this.secId).setAttribute("transform","rotate( " + Std.string(t.s * 6) + ")");
	return t;
}
Watch.prototype.show = null;
Watch.prototype.time = null;
Watch.prototype.watchId = null;
Watch.prototype.__class__ = Watch;
Button = function(doc,groupId,coverId,action,enabled) { if( doc === $_ ) return; {
	if(enabled == null) enabled = true;
	this.doc = doc;
	this.groupId = groupId;
	this.coverId = coverId;
	this.action = action;
	this.setEnabled(enabled);
	this.setHandler();
}}
Button.__name__ = ["Button"];
Button.prototype.action = null;
Button.prototype.coverId = null;
Button.prototype.doc = null;
Button.prototype.enabled = null;
Button.prototype.groupId = null;
Button.prototype.onClick = function(e) {
	if(this.enabled) this.action();
}
Button.prototype.setEnabled = function(b) {
	this.enabled = b;
	this.doc.getElementById(this.coverId).setAttribute("opacity",(b?"0":".7"));
	return b;
}
Button.prototype.setHandler = function() {
	this.doc.getElementById(this.groupId)["onclick"] = $closure(this,"onClick");
}
Button.prototype.__class__ = Button;
StopWatchEvent = function(_type) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
}}
StopWatchEvent.__name__ = ["StopWatchEvent"];
StopWatchEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) StopWatchEvent.prototype[k] = xinf.event.Event.prototype[k];
StopWatchEvent.prototype.toString = function() {
	return this.type + "()";
}
StopWatchEvent.prototype.__class__ = StopWatchEvent;
xinf.xml.Binding = function(p) { if( p === $_ ) return; {
	this.marshallers = new Hash();
	this.instantiators = new Array();
}}
xinf.xml.Binding.__name__ = ["xinf","xml","Binding"];
xinf.xml.Binding.prototype.add = function(nodeName,cl) {
	this.marshallers.set(nodeName,cl);
}
xinf.xml.Binding.prototype.addInstantiator = function(i) {
	this.instantiators.push(i);
}
xinf.xml.Binding.prototype.instantiate = function(xml) {
	var ret;
	{
		var _g = 0, _g1 = this.instantiators;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.fits(xml)) {
				return (i.instantiate());
			}
		}
	}
	var m = this.marshallers.get(xml.getNodeName());
	if(m == null) return null;
	try {
		ret = Type.createInstance(m,[null]);
	}
	catch( $e55 ) {
		{
			var e = $e55;
			{
				throw ("Could not create instance of " + Type.getClassName(m) + ": " + e);
			}
		}
	}
	return ret;
}
xinf.xml.Binding.prototype.instantiators = null;
xinf.xml.Binding.prototype.marshallers = null;
xinf.xml.Binding.prototype.__class__ = xinf.xml.Binding;
xinf.xml.Binding.__interfaces__ = [xinf.xml.IBinding];
xinf.xml.Document = function(p) { if( p === $_ ) return; {
	xinf.xml.XMLElement.apply(this,[]);
	this.elementsById = new Hash();
	this.styleSheet = new xinf.style.StyleSheet();
	this.ownerDocument = this;
}}
xinf.xml.Document.__name__ = ["xinf","xml","Document"];
xinf.xml.Document.__super__ = xinf.xml.XMLElement;
for(var k in xinf.xml.XMLElement.prototype ) xinf.xml.Document.prototype[k] = xinf.xml.XMLElement.prototype[k];
xinf.xml.Document.instantiate = function(data,base,parentDocument,onLoad,type) {
	if(parentDocument == null) parentDocument = xinf.ony.Root.getDocument();
	var xml = Xml.parse(data);
	var e = parentDocument.unmarshal(xml.firstElement());
	if(base != null && Std["is"](e,xinf.xml.XMLElement)) {
		var el = e;
		el.set_base(base.pathString());
	}
	e.onLoad();
	if(onLoad != null) {
		if(type != null && !Std["is"](e,type)) throw ("Document root (" + e + ") is not of expected type " + Type.getClassName(type) + ".");
		onLoad(e);
	}
	return e;
}
xinf.xml.Document.load = function(url_s,parentDocument,onLoad,onError,type) {
	var url = new xinf.xml.URL(url_s);
	url.fetch(function(data) {
		xinf.xml.Document.instantiate(data,url,parentDocument,onLoad,type);
	},onError);
}
xinf.xml.Document.bindings = null;
xinf.xml.Document.addBinding = function(namespaceURI,binding) {
	if(xinf.xml.Document.bindings == null) xinf.xml.Document.bindings = new Hash();
	xinf.xml.Document.bindings.set(namespaceURI,binding);
}
xinf.xml.Document.getBinding = function(namespaceURI) {
	if(xinf.xml.Document.bindings == null) xinf.xml.Document.bindings = new Hash();
	var binding = xinf.xml.Document.bindings.get(namespaceURI);
	if(binding == null) {
		binding = new xinf.xml.Binding();
		xinf.xml.Document.bindings.set(namespaceURI,binding);
	}
	return binding;
}
xinf.xml.Document.addToBinding = function(namespaceURI,nodeName,cl) {
	var binding = xinf.xml.Document.getBinding(namespaceURI);
	binding.add(nodeName,cl);
}
xinf.xml.Document.prototype.documentElement = null;
xinf.xml.Document.prototype.elementsById = null;
xinf.xml.Document.prototype.getElementById = function(id) {
	var r = this.elementsById.get(id);
	if(r == null) throw ("No such Element #" + id + " in " + this);
	return r;
}
xinf.xml.Document.prototype.getElementByURI = function(uri) {
	var u = uri.split("#");
	if(u.length != 2) throw ("invalid URI, or URI doesn't include fragment identifier: " + uri);
	if(u[0] != "") throw ("full URIs are not yet supported");
	var id = u[1];
	return this.getElementById(id);
}
xinf.xml.Document.prototype.getTypedElementById = function(id,type) {
	var r = this.getElementById(id);
	if(!Std["is"](r,type)) throw ("Element #" + id + " is not of class " + Type.getClassName(type) + " (but instead " + Type.getClassName(Type.getClass(r)) + ")");
	return r;
}
xinf.xml.Document.prototype.getTypedElementByURI = function(uri,cl) {
	var r = this.getElementByURI(uri);
	if(!Std["is"](r,cl)) throw ("Element " + uri + " is not of class " + Type.getClassName(cl) + " (but instead " + Type.getClassName(Type.getClass(r)) + ")");
	return r;
}
xinf.xml.Document.prototype.styleSheet = null;
xinf.xml.Document.prototype.toString = function() {
	return ("Document(" + this.get_base() + ")");
}
xinf.xml.Document.prototype.unmarshal = function(xml,parent) {
	var r = null;
	var ns = xinf.xml.Document.bindings.keys();
	while(ns.hasNext() && r == null) {
		r = xinf.xml.Document.bindings.get(ns.next()).instantiate(xml);
	}
	if(r == null) return null;
	r.ownerDocument = this;
	r.fromXml(xml);
	if(parent != null) parent.appendChild(r);
	return r;
}
xinf.xml.Document.prototype.__class__ = xinf.xml.Document;
xinf.ony.erno.Definitions = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Definitions.apply(this,[traits]);
}}
xinf.ony.erno.Definitions.__name__ = ["xinf","ony","erno","Definitions"];
xinf.ony.erno.Definitions.__super__ = xinf.ony.Definitions;
for(var k in xinf.ony.Definitions.prototype ) xinf.ony.erno.Definitions.prototype[k] = xinf.ony.Definitions.prototype[k];
xinf.ony.erno.Definitions.prototype.drawContents = function(g) {
	null;
}
xinf.ony.erno.Definitions.prototype.__class__ = xinf.ony.erno.Definitions;
xinf.style.StyleParser = function() { }
xinf.style.StyleParser.__name__ = ["xinf","style","StyleParser"];
xinf.style.StyleParser.fromObject = function(s,via,to) {
	var _g = 0, _g1 = Reflect.fields(s);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var field2 = StringTools.replace(field,"_","-");
		via.setTraitFromDynamic(field2,Reflect.field(s,field),to);
	}
}
xinf.style.StyleParser.removeComments = function(text) {
	var at = 0;
	while(true) {
		var from = text.indexOf("/*",at);
		if(from == -1) return text;
		var to = text.indexOf("*/",from);
		var t2 = text.substr(0,from);
		t2 += text.substr(to + 2);
		text = t2;
		at = from;
	}
	return text;
}
xinf.style.StyleParser.parseToObject = function(text) {
	var to = { }
	text = xinf.style.StyleParser.removeComments(text);
	var properties = xinf.style.StyleParser.split.split(text);
	{
		var _g = 0;
		while(_g < properties.length) {
			var prop = properties[_g];
			++_g;
			var p = prop.split(":");
			if(p.length == 2) {
				var name = StringTools.trim(p[0]);
				var value = StringTools.trim(p[1]);
				to[name] = value;
			}
			else if(prop.length == 0) null;
			else {
				throw ("invalid CSS: '" + prop + "'");
			}
		}
	}
	return to;
}
xinf.style.StyleParser.parseRules = function(text) {
	text = xinf.style.StyleParser.removeComments(text);
	var rules = new Array();
	var ruleTexts = text.split("}");
	{
		var _g = 0;
		while(_g < ruleTexts.length) {
			var ruleText = ruleTexts[_g];
			++_g;
			var sr = ruleText.split("{");
			if(sr.length == 2) {
				var selText = StringTools.trim(sr[0]);
				var styleText = StringTools.trim(sr[1]);
				var sel = xinf.style.StyleParser.parseSelectorGroup(selText);
				var s = xinf.style.StyleParser.parseToObject(styleText);
				rules.push({ selector : sel, style : s});
			}
			else {
				if(StringTools.trim(ruleText).length > 0) throw ("ignore non-CSS '" + ruleText + "'");
			}
		}
	}
	return rules;
}
xinf.style.StyleParser.parseSelectorGroup = function(text) {
	var anyTexts = xinf.style.StyleParser.comma_split.split(text);
	var any = new Array();
	{
		var _g = 0;
		while(_g < anyTexts.length) {
			var a = anyTexts[_g];
			++_g;
			if(a.length > 0) {
				any.push(xinf.style.StyleParser.parseSelector(a));
			}
		}
	}
	if(any.length == 1) return any[0];
	return xinf.style.Selector.AnyOf(any);
}
xinf.style.StyleParser.parseSelector = function(text,already) {
	if(xinf.style.StyleParser.first_s.match(text)) {
		var a_s = xinf.style.StyleParser.first_s.matched(1);
		var b = xinf.style.StyleParser.first_s.matched(4);
		var op = xinf.style.StyleParser.first_s.matched(3);
		var a = xinf.style.StyleParser.parseCombinedSelector(a_s);
		var a2 = (already != null?xinf.style.Selector.AllOf([already,a]):a);
		var a3 = function($this) {
			var $r;
			switch(op) {
			case "":{
				$r = xinf.style.Selector.Ancestor(a2);
			}break;
			case null:{
				$r = xinf.style.Selector.Ancestor(a2);
			}break;
			case "+":{
				$r = xinf.style.Selector.Preceding(a2);
			}break;
			case ">":{
				$r = xinf.style.Selector.Parent(a2);
			}break;
			case "*":{
				$r = xinf.style.Selector.GrandAncestor(a2);
			}break;
			default:{
				$r = function($this) {
					var $r;
					haxe.Log.trace("a: " + a + ", b: " + b + ", op: " + op,{ fileName : "StyleParser.hx", lineNumber : 153, className : "xinf.style.StyleParser", methodName : "parseSelector"});
					throw ("unknown style selector operator '" + op + "'");
					$r = xinf.style.Selector.Unknown(op);
					return $r;
				}($this);
			}break;
			}
			return $r;
		}(this);
		return xinf.style.StyleParser.parseSelector(b,a3);
	}
	else {
		var thisSelector = xinf.style.StyleParser.parseCombinedSelector(text);
		if(already != null) return xinf.style.Selector.AllOf([already,thisSelector]);
		return thisSelector;
	}
}
xinf.style.StyleParser.parseCombinedSelector = function(text) {
	var allTexts = xinf.style.StyleParser.ws_split.split(text);
	var all = new Array();
	{
		var _g = 0;
		while(_g < allTexts.length) {
			var a = allTexts[_g];
			++_g;
			if(a.length > 0) {
				xinf.style.StyleParser.parseSingleSelector(a,all);
			}
		}
	}
	if(all.length == 1) return all[0];
	return xinf.style.Selector.AllOf(all);
}
xinf.style.StyleParser.parseSingleSelector = function(text,list) {
	if(xinf.style.StyleParser.classSel.match(text)) {
		list.push(xinf.style.Selector.StyleClass(xinf.style.StyleParser.classSel.matched(1)));
		xinf.style.StyleParser.parseSingleSelector(xinf.style.StyleParser.classSel.matchedLeft() + xinf.style.StyleParser.classSel.matchedRight(),list);
		return;
	}
	if(xinf.style.StyleParser.idSel.match(text)) {
		list.push(xinf.style.Selector.ById(xinf.style.StyleParser.idSel.matched(1)));
		xinf.style.StyleParser.parseSingleSelector(xinf.style.StyleParser.idSel.matchedLeft() + xinf.style.StyleParser.idSel.matchedRight(),list);
		return;
	}
	if(text == "*") {
		list.push(xinf.style.Selector.Any);
		return;
	}
	if(StringTools.trim(text).length > 0) {
		list.push(xinf.style.Selector.ClassName(text));
	}
}
xinf.style.StyleParser.prototype.__class__ = xinf.style.StyleParser;
org.puremvc.haxe.patterns.observer.Notification = function(name,body,type) { if( name === $_ ) return; {
	this.name = name;
	if(body != null) this.body = body;
	if(type != null) this.type = type;
}}
org.puremvc.haxe.patterns.observer.Notification.__name__ = ["org","puremvc","haxe","patterns","observer","Notification"];
org.puremvc.haxe.patterns.observer.Notification.prototype.body = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.getBody = function() {
	return this.body;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.getName = function() {
	return this.name;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.getType = function() {
	return this.type;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.name = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.setBody = function(body) {
	this.body = body;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.setType = function(type) {
	this.type = type;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.toString = function() {
	var msg = "Notification Name: " + this.getName();
	msg += "\nBody:" + (this.body == null?"null":this.body.toString());
	msg += "\nType:" + (this.type == null?"null":this.type);
	return msg;
}
org.puremvc.haxe.patterns.observer.Notification.prototype.type = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.__class__ = org.puremvc.haxe.patterns.observer.Notification;
org.puremvc.haxe.patterns.observer.Notification.__interfaces__ = [org.puremvc.haxe.interfaces.INotification];
xinf.ony.Ellipse = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Ellipse.__name__ = ["xinf","ony","Ellipse"];
xinf.ony.Ellipse.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Ellipse.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Ellipse.prototype.cx = null;
xinf.ony.Ellipse.prototype.cy = null;
xinf.ony.Ellipse.prototype.getBoundingBox = function() {
	return { l : this.get_cx() - this.get_rx(), t : this.get_cy() - this.get_ry(), r : this.get_cx() + this.get_rx(), b : this.get_cy() + this.get_ry()}
}
xinf.ony.Ellipse.prototype.get_cx = function() {
	return this.getTrait("cx",xinf.ony.type.Length).value;
}
xinf.ony.Ellipse.prototype.get_cy = function() {
	return this.getTrait("cy",xinf.ony.type.Length).value;
}
xinf.ony.Ellipse.prototype.get_rx = function() {
	return this.getTrait("rx",xinf.ony.type.Length).value;
}
xinf.ony.Ellipse.prototype.get_ry = function() {
	return this.getTrait("ry",xinf.ony.type.Length).value;
}
xinf.ony.Ellipse.prototype.rx = null;
xinf.ony.Ellipse.prototype.ry = null;
xinf.ony.Ellipse.prototype.set_cx = function(v) {
	this.setTrait("cx",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Ellipse.prototype.set_cy = function(v) {
	this.setTrait("cy",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Ellipse.prototype.set_rx = function(v) {
	this.setTrait("rx",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Ellipse.prototype.set_ry = function(v) {
	this.setTrait("ry",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Ellipse.prototype.__class__ = xinf.ony.Ellipse;
xinf.ony.Root = function() { }
xinf.ony.Root.__name__ = ["xinf","ony","Root"];
xinf.ony.Root.mRoot = null;
xinf.ony.Root.getDocument = function() {
	return xinf.ony.Root.getRootSvg().ownerDocument;
}
xinf.ony.Root.getRootSvg = function() {
	if(xinf.ony.Root.mRoot == null) {
		xinf.ony.Root.mRoot = new xinf.ony.erno.Svg();
		xinf.ony.Root.mRoot.ownerDocument = new xinf.xml.Document();
		xinf.ony.Root.mRoot.ownerDocument.set_base("");
		var r = new xinf.ony.erno.Root();
		r.construct();
		r.appendChild(xinf.ony.Root.mRoot);
		xinf.ony.Root.width = xinf.ony.Root.height = 100;
		xinf.erno.Runtime.getRuntime().addEventListener(xinf.event.GeometryEvent.STAGE_SCALED,function(e) {
			xinf.ony.Root.width = e.x;
			xinf.ony.Root.height = e.y;
			xinf.ony.Root.mRoot.set_width(e.x);
			xinf.ony.Root.mRoot.set_height(e.y);
		});
	}
	return xinf.ony.Root.mRoot;
}
xinf.ony.Root.appendChild = function(o) {
	xinf.ony.Root.getRootSvg().appendChild(o);
}
xinf.ony.Root.removeChild = function(o) {
	xinf.ony.Root.getRootSvg().removeChild(o);
}
xinf.ony.Root.addEventListener = function(type,h) {
	return xinf.erno.Runtime.getRuntime().addEventListener(type,h);
}
xinf.ony.Root.removeEventListener = function(type,h) {
	return xinf.erno.Runtime.getRuntime().removeEventListener(type,h);
}
xinf.ony.Root.postEvent = function(e,pos) {
	return xinf.erno.Runtime.getRuntime().postEvent(e,pos);
}
xinf.ony.Root.setBackgroundColor = function(r,g,b,a) {
	xinf.erno.Runtime.getRuntime().setBackgroundColor(r,g,b,a);
}
xinf.ony.Root.setFramerate = function(r) {
	xinf.erno.Runtime.getRuntime().setFramerate(r);
}
xinf.ony.Root.getFramerate = function() {
	return xinf.erno.Runtime.getRuntime().getFramerate();
}
xinf.ony.Root.getMeasuredFramerate = function() {
	return xinf.erno.Runtime.getRuntime().getMeasuredFramerate();
}
xinf.ony.Root.addCSS = function(css) {
	xinf.style.StyleSheet.DEFAULT.parseCSS(css);
}
xinf.ony.Root.main = function() {
	xinf.ony.Root.getRootSvg().onLoad();
	xinf.erno.Runtime.getRuntime().run();
}
xinf.ony.Root.prototype.__class__ = xinf.ony.Root;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = "";
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b += x;
}
StringBuf.prototype.addChar = function(c) {
	this.b += String.fromCharCode(c);
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b += s.substr(pos,len);
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	return this.b;
}
StringBuf.prototype.__class__ = StringBuf;
org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","FreezeDisplayCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand.prototype.execute = function(note) {
	var proxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("StopWatchProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	proxy.freeze();
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.FreezeDisplayCommand;
xinf.ony.Polygon = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Polygon.__name__ = ["xinf","ony","Polygon"];
xinf.ony.Polygon.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Polygon.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Polygon.prototype.getBoundingBox = function() {
	var pi = this.get_points().iterator();
	if(!pi.hasNext()) {
		return { l : 0., t : 0., r : 0., b : 0.}
	}
	var p = pi.next();
	var xmin = p.x, xmax = p.x, ymin = p.y, ymax = p.y;
	while(pi.hasNext()) {
		p = pi.next();
		if(p.x < xmin) xmin = p.x;
		if(p.x > xmax) xmax = p.x;
		if(p.y < ymin) ymin = p.y;
		if(p.y > ymax) ymax = p.y;
	}
	return { l : xmin, t : ymin, r : xmax, b : ymax}
}
xinf.ony.Polygon.prototype.get_points = function() {
	return this.getTrait("points",Dynamic);
}
xinf.ony.Polygon.prototype.points = null;
xinf.ony.Polygon.prototype.set_points = function(v) {
	this.setTrait("points",v);
	this.redraw();
	return v;
}
xinf.ony.Polygon.prototype.__class__ = xinf.ony.Polygon;
xinf.geom.SkewY = function(a) { if( a === $_ ) return; {
	this.a = a;
}}
xinf.geom.SkewY.__name__ = ["xinf","geom","SkewY"];
xinf.geom.SkewY.prototype.a = null;
xinf.geom.SkewY.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	if(Std["is"](t,xinf.geom.SkewY)) {
		return new xinf.geom.SkewY(this.a + t.a);
		return this;
	}
	return new xinf.geom.Concatenate(this,t);
}
xinf.geom.SkewY.prototype.apply = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).apply(p);
}
xinf.geom.SkewY.prototype.applyInverse = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).applyInverse(p);
}
xinf.geom.SkewY.prototype.distanceTo = function(p) {
	if(Std["is"](p,xinf.geom.Identity) || !Std["is"](p,xinf.geom.SkewY)) return Math.abs(this.a);
	var q = p;
	return (Math.abs(q.a - this.a));
}
xinf.geom.SkewY.prototype.getMatrix = function() {
	return { a : 1., b : Math.tan(this.a), c : 0., d : 1., tx : 0., ty : 0.}
}
xinf.geom.SkewY.prototype.getScale = function() {
	return { x : .0, y : .0}
}
xinf.geom.SkewY.prototype.getTranslation = function() {
	return { x : .0, y : .0}
}
xinf.geom.SkewY.prototype.interpolateWith = function(p,f) {
	if(Std["is"](p,xinf.geom.Identity)) return new xinf.geom.SkewY(this.a * (1 - f));
	if(!Std["is"](p,xinf.geom.SkewY)) return this;
	var q = p;
	return (new xinf.geom.SkewY(this.a + ((q.a - this.a) * f)));
}
xinf.geom.SkewY.prototype.isIdentity = function() {
	return (this.a == 0);
}
xinf.geom.SkewY.prototype.toString = function() {
	return ("skewY(" + (this.a * xinf.geom.TransformParser.R2D) + ")");
}
xinf.geom.SkewY.prototype.__class__ = xinf.geom.SkewY;
xinf.geom.SkewY.__interfaces__ = [xinf.geom.Transform];
xinf.ony.erno.Polygon = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Polygon.apply(this,[traits]);
}}
xinf.ony.erno.Polygon.__name__ = ["xinf","ony","erno","Polygon"];
xinf.ony.erno.Polygon.__super__ = xinf.ony.Polygon;
for(var k in xinf.ony.Polygon.prototype ) xinf.ony.erno.Polygon.prototype[k] = xinf.ony.Polygon.prototype[k];
xinf.ony.erno.Polygon.prototype.drawContents = function(g) {
	if(this.get_points() == null) return;
	var ps = this.get_points().iterator();
	if(!ps.hasNext()) return;
	xinf.ony.Polygon.prototype.drawContents.apply(this,[g]);
	g.startShape();
	var p0 = ps.next();
	g.startPath(p0.x,p0.y);
	var p = null;
	while(ps.hasNext()) {
		p = ps.next();
		g.lineTo(p.x,p.y);
	}
	if(p.x != p0.x || p.y != p0.y) {
		g.lineTo(p0.x,p0.y);
	}
	g.endPath();
	g.endShape();
}
xinf.ony.erno.Polygon.prototype.__class__ = xinf.ony.erno.Polygon;
xinf.ony.erno.Circle = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Circle.apply(this,[traits]);
}}
xinf.ony.erno.Circle.__name__ = ["xinf","ony","erno","Circle"];
xinf.ony.erno.Circle.__super__ = xinf.ony.Circle;
for(var k in xinf.ony.Circle.prototype ) xinf.ony.erno.Circle.prototype[k] = xinf.ony.Circle.prototype[k];
xinf.ony.erno.Circle.prototype.drawContents = function(g) {
	if(this.get_r() != 0) {
		xinf.ony.Circle.prototype.drawContents.apply(this,[g]);
		g.ellipse(this.get_cx(),this.get_cy(),this.get_r(),this.get_r());
	}
}
xinf.ony.erno.Circle.prototype.__class__ = xinf.ony.erno.Circle;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
org.puremvc.haxe.demos.xinf.stopwatch.view = {}
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator = function(viewComponent) { if( viewComponent === $_ ) return; {
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,["ApplicationMediator",viewComponent]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","view","ApplicationMediator"];
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype.app = null;
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype.getApp = function() {
	return this.viewComponent;
}
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype.handleEvent = function(event) {
	switch(event.type) {
	case StopWatchEvent.STOP:case StopWatchEvent.START:case StopWatchEvent.RESET:case StopWatchEvent.UNSPLIT:case StopWatchEvent.SPLIT:{
		this.sendNotification("StateMachine" + "/notes/action",null,event.type.name);
	}break;
	}
}
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype.handleNotification = function(note) {
	switch(note.getName()) {
	case "StopWatchProxy" + "/notes/tick":{
		this.getApp().setElapsed(note.getBody());
	}break;
	case "StopWatchProxy" + "/notes/lap":{
		this.getApp().setLaptime(note.getBody());
	}break;
	case "StopWatchProxy" + "/notes/sync":case "StopWatchProxy" + "/notes/reset":{
		this.getApp().setElapsed(note.getBody());
		this.getApp().setLaptime(null);
	}break;
	case "StateMachine" + "/notes/changed":{
		this.getApp().setState(function($this) {
			var $r;
			var tmp = note.getBody();
			$r = (Std["is"](tmp,org.puremvc.haxe.utilities.statemachine.State)?tmp:function($this) {
				var $r;
				throw "Class cast error";
				return $r;
			}($this));
			return $r;
		}(this).name);
	}break;
	}
}
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype.listNotificationInterests = function() {
	return ["StopWatchProxy" + "/notes/tick","StopWatchProxy" + "/notes/lap","StopWatchProxy" + "/notes/sync","StopWatchProxy" + "/notes/reset","StateMachine" + "/notes/changed"];
}
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype.onRegister = function() {
	this.getApp().addEventListener(StopWatchEvent.STOP,$closure(this,"handleEvent"));
	this.getApp().addEventListener(StopWatchEvent.START,$closure(this,"handleEvent"));
	this.getApp().addEventListener(StopWatchEvent.RESET,$closure(this,"handleEvent"));
	this.getApp().addEventListener(StopWatchEvent.SPLIT,$closure(this,"handleEvent"));
	this.getApp().addEventListener(StopWatchEvent.UNSPLIT,$closure(this,"handleEvent"));
}
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator;
xinf.ony.erno.Ellipse = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Ellipse.apply(this,[traits]);
}}
xinf.ony.erno.Ellipse.__name__ = ["xinf","ony","erno","Ellipse"];
xinf.ony.erno.Ellipse.__super__ = xinf.ony.Ellipse;
for(var k in xinf.ony.Ellipse.prototype ) xinf.ony.erno.Ellipse.prototype[k] = xinf.ony.Ellipse.prototype[k];
xinf.ony.erno.Ellipse.prototype.drawContents = function(g) {
	if(this.get_rx() != 0 && this.get_ry() != 0) {
		xinf.ony.Ellipse.prototype.drawContents.apply(this,[g]);
		g.ellipse(this.get_cx(),this.get_cy(),this.get_rx(),this.get_ry());
	}
}
xinf.ony.erno.Ellipse.prototype.__class__ = xinf.ony.erno.Ellipse;
org.puremvc.haxe.utilities.statemachine.State = function(name,entering,exiting) { if( name === $_ ) return; {
	this.name = name;
	if(entering != null) this.entering = entering;
	if(exiting != null) this.exiting = exiting;
	this.transitions = new Hash();
}}
org.puremvc.haxe.utilities.statemachine.State.__name__ = ["org","puremvc","haxe","utilities","statemachine","State"];
org.puremvc.haxe.utilities.statemachine.State.prototype.defineTrans = function(action,target) {
	if(this.getTarget(action) != null) return;
	this.transitions.set(action,target);
}
org.puremvc.haxe.utilities.statemachine.State.prototype.entering = null;
org.puremvc.haxe.utilities.statemachine.State.prototype.exiting = null;
org.puremvc.haxe.utilities.statemachine.State.prototype.getTarget = function(action) {
	return this.transitions.get(action);
}
org.puremvc.haxe.utilities.statemachine.State.prototype.name = null;
org.puremvc.haxe.utilities.statemachine.State.prototype.removeTrans = function(action) {
	this.transitions.remove(action);
}
org.puremvc.haxe.utilities.statemachine.State.prototype.transitions = null;
org.puremvc.haxe.utilities.statemachine.State.prototype.__class__ = org.puremvc.haxe.utilities.statemachine.State;
xinf.geom.Matrix = function(m) { if( m === $_ ) return; {
	if(m == null) this.setIdentity();
	else {
		this.set(m);
	}
}}
xinf.geom.Matrix.__name__ = ["xinf","geom","Matrix"];
xinf.geom.Matrix.prototype.a = null;
xinf.geom.Matrix.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	var m = new xinf.geom.Matrix(this.getMatrix());
	m.multiply(t.getMatrix());
	return m;
}
xinf.geom.Matrix.prototype.apply = function(p) {
	return { x : (p.x * this.a) + (p.y * this.c) + this.tx, y : (p.x * this.b) + (p.y * this.d) + this.ty}
}
xinf.geom.Matrix.prototype.applyInverse = function(p) {
	return this.invert().apply(p);
}
xinf.geom.Matrix.prototype.b = null;
xinf.geom.Matrix.prototype.c = null;
xinf.geom.Matrix.prototype.d = null;
xinf.geom.Matrix.prototype.distanceTo = function(p) {
	return 1.;
}
xinf.geom.Matrix.prototype.getMatrix = function() {
	return this;
}
xinf.geom.Matrix.prototype.getScale = function() {
	return { x : this.a, y : this.d}
}
xinf.geom.Matrix.prototype.getTranslation = function() {
	return { x : this.tx, y : this.ty}
}
xinf.geom.Matrix.prototype.interpolateWith = function(p,f) {
	return this;
}
xinf.geom.Matrix.prototype.invert = function() {
	var o = new xinf.geom.Matrix();
	var d1 = 1. / ((this.a * this.d) - (this.b * this.c));
	o.a = this.d * d1;
	o.b = -this.b * d1;
	o.c = -this.c * d1;
	o.d = this.a * d1;
	o.tx = ((this.c * this.ty) - (this.d * this.tx)) * d1;
	o.ty = -((this.a * this.ty) - (this.b * this.tx)) * d1;
	return o;
}
xinf.geom.Matrix.prototype.isIdentity = function() {
	this.a = 1;
	this.c = 0;
	this.tx = 0;
	this.b = 0;
	this.d = 1;
	this.ty = 0;
	return (this.a == 1 && this.b == 0 && this.c == 0 && this.d == 1 && this.tx == 0 && this.ty == 0);
}
xinf.geom.Matrix.prototype.multiply = function(m) {
	var o = new xinf.geom.Matrix();
	o.a = (this.a * m.a) + (this.b * m.c);
	o.c = (this.c * m.a) + (this.d * m.c);
	o.tx = (this.tx * m.a) + (this.ty * m.c) + m.tx;
	o.b = (this.a * m.b) + (this.b * m.d);
	o.d = (this.c * m.b) + (this.d * m.d);
	o.ty = (this.tx * m.b) + (this.ty * m.d) + m.ty;
	return o;
}
xinf.geom.Matrix.prototype.rotate = function(a) {
	return this.multiply(new xinf.geom.Matrix().setRotation(a));
}
xinf.geom.Matrix.prototype.scale = function(x,y) {
	return this.multiply(new xinf.geom.Matrix().setScale(x,y));
}
xinf.geom.Matrix.prototype.set = function(m) {
	this.a = m.a;
	this.c = m.c;
	this.tx = m.tx;
	this.b = m.b;
	this.d = m.d;
	this.ty = m.ty;
}
xinf.geom.Matrix.prototype.setIdentity = function() {
	this.a = 1;
	this.c = 0;
	this.tx = 0;
	this.b = 0;
	this.d = 1;
	this.ty = 0;
	return this;
}
xinf.geom.Matrix.prototype.setRotation = function(angle) {
	var co = Math.cos(angle);
	var si = Math.sin(angle);
	this.a = co;
	this.b = si;
	this.c = -si;
	this.d = co;
	return this;
}
xinf.geom.Matrix.prototype.setScale = function(x,y) {
	this.a = x;
	this.d = y;
	return this;
}
xinf.geom.Matrix.prototype.setSkew = function(x,y) {
	this.c = x;
	this.b = y;
	return this;
}
xinf.geom.Matrix.prototype.setTranslation = function(x,y) {
	this.tx = x;
	this.ty = y;
	return this;
}
xinf.geom.Matrix.prototype.skew = function(x,y) {
	return this.multiply(new xinf.geom.Matrix().setSkew(x,y));
}
xinf.geom.Matrix.prototype.toString = function() {
	return ("matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty + ")");
}
xinf.geom.Matrix.prototype.transformBBox = function(r) {
	var tl = this.apply({ x : r.l, y : r.t});
	var br = this.apply({ x : r.r, y : r.b});
	return { l : Math.min(tl.x,br.x), t : Math.min(tl.y,br.y), r : Math.max(tl.x,br.x), b : Math.max(tl.y,br.y)}
}
xinf.geom.Matrix.prototype.translate = function(x,y) {
	return this.multiply(new xinf.geom.Matrix().setTranslation(x,y));
}
xinf.geom.Matrix.prototype.tx = null;
xinf.geom.Matrix.prototype.ty = null;
xinf.geom.Matrix.prototype.__class__ = xinf.geom.Matrix;
xinf.geom.Matrix.__interfaces__ = [xinf.geom.Transform];
xinf.event.KeyboardEvent = function(_type,code,key,shiftMod,altMod,ctrlMod) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.code = code;
	this.key = key;
	this.shiftMod = (shiftMod == null?false:shiftMod);
	this.altMod = (altMod == null?false:altMod);
	this.ctrlMod = (ctrlMod == null?false:ctrlMod);
}}
xinf.event.KeyboardEvent.__name__ = ["xinf","event","KeyboardEvent"];
xinf.event.KeyboardEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.KeyboardEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.KeyboardEvent.prototype.altMod = null;
xinf.event.KeyboardEvent.prototype.code = null;
xinf.event.KeyboardEvent.prototype.ctrlMod = null;
xinf.event.KeyboardEvent.prototype.key = null;
xinf.event.KeyboardEvent.prototype.shiftMod = null;
xinf.event.KeyboardEvent.prototype.toString = function() {
	var r = "" + this.type + "(";
	if(this.shiftMod) r += "Shift-";
	if(this.altMod) r += "Alt-";
	if(this.ctrlMod) r += "Ctrl-";
	if(this.key == null) r += "[null]";
	else if(this.key.length == 1) r += "'" + this.key + "'";
	else r += this.key;
	r += ")";
	return r;
}
xinf.event.KeyboardEvent.prototype.__class__ = xinf.event.KeyboardEvent;
xinf.ony.Text = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Text.__name__ = ["xinf","ony","Text"];
xinf.ony.Text.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Text.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Text.xmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&").split("&quot;").join("\"");
}
xinf.ony.Text.prototype.copyProperties = function(to) {
	xinf.ony.erno.Element.prototype.copyProperties.apply(this,[to]);
	to.x = this.get_x();
	to.y = this.get_y();
	to.text = this.get_text();
}
xinf.ony.Text.prototype.fromXml = function(xml) {
	xinf.ony.erno.Element.prototype.fromXml.apply(this,[xml]);
	this.set_text(this.textContent(xml));
}
xinf.ony.Text.prototype.get_text = function() {
	return this.getTrait("text",String);
}
xinf.ony.Text.prototype.get_x = function() {
	return this.getTrait("x",xinf.ony.type.Length).value;
}
xinf.ony.Text.prototype.get_y = function() {
	return this.getTrait("y",xinf.ony.type.Length).value;
}
xinf.ony.Text.prototype.set_text = function(v) {
	this.redraw();
	return this.setTrait("text",v);
}
xinf.ony.Text.prototype.set_x = function(v) {
	this.setTrait("x",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Text.prototype.set_y = function(v) {
	this.setTrait("y",new xinf.ony.type.Length(null,v));
	this.redraw();
	return v;
}
xinf.ony.Text.prototype.text = null;
xinf.ony.Text.prototype.textContent = function(xml) {
	var text = "";
	{ var $it56 = xml.iterator();
	while( $it56.hasNext() ) { var child = $it56.next();
	{
		switch(child.nodeType) {
		case Xml.PCData:{
			text += child.getNodeValue();
		}break;
		case Xml.Element:{
			text += this.textContent(child) + "\n";
		}break;
		default:{
			null;
		}break;
		}
	}
	}}
	return xinf.ony.Text.xmlUnescape(text);
}
xinf.ony.Text.prototype.x = null;
xinf.ony.Text.prototype.y = null;
xinf.ony.Text.prototype.__class__ = xinf.ony.Text;
xinf.ony.Polyline = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Element.apply(this,[traits]);
}}
xinf.ony.Polyline.__name__ = ["xinf","ony","Polyline"];
xinf.ony.Polyline.__super__ = xinf.ony.erno.Element;
for(var k in xinf.ony.erno.Element.prototype ) xinf.ony.Polyline.prototype[k] = xinf.ony.erno.Element.prototype[k];
xinf.ony.Polyline.prototype.getBoundingBox = function() {
	var pi = this.get_points().iterator();
	if(!pi.hasNext()) {
		return { l : 0., t : 0., r : 0., b : 0.}
	}
	var p = pi.next();
	var xmin = p.x, xmax = p.x, ymin = p.y, ymax = p.y;
	while(pi.hasNext()) {
		p = pi.next();
		if(p.x < xmin) xmin = p.x;
		if(p.x > xmax) xmax = p.x;
		if(p.y < ymin) ymin = p.y;
		if(p.y > ymax) ymax = p.y;
	}
	return { l : xmin, t : ymin, r : xmax, b : ymax}
}
xinf.ony.Polyline.prototype.get_points = function() {
	return this.getTrait("points",Dynamic);
}
xinf.ony.Polyline.prototype.points = null;
xinf.ony.Polyline.prototype.set_points = function(v) {
	this.setTrait("points",v);
	this.redraw();
	return v;
}
xinf.ony.Polyline.prototype.__class__ = xinf.ony.Polyline;
xinf.ony.erno.Polyline = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Polyline.apply(this,[traits]);
}}
xinf.ony.erno.Polyline.__name__ = ["xinf","ony","erno","Polyline"];
xinf.ony.erno.Polyline.__super__ = xinf.ony.Polyline;
for(var k in xinf.ony.Polyline.prototype ) xinf.ony.erno.Polyline.prototype[k] = xinf.ony.Polyline.prototype[k];
xinf.ony.erno.Polyline.prototype.drawContents = function(g) {
	if(this.get_points() == null) return;
	var ps = this.get_points().iterator();
	if(!ps.hasNext()) return;
	xinf.ony.Polyline.prototype.drawContents.apply(this,[g]);
	g.startShape();
	var p0 = ps.next();
	g.startPath(p0.x,p0.y);
	var p;
	while(ps.hasNext()) {
		p = ps.next();
		g.lineTo(p.x,p.y);
	}
	g.endPath();
	g.endShape();
}
xinf.ony.erno.Polyline.prototype.__class__ = xinf.ony.erno.Polyline;
xinf.ony.Crop = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Group.apply(this,[traits]);
}}
xinf.ony.Crop.__name__ = ["xinf","ony","Crop"];
xinf.ony.Crop.__super__ = xinf.ony.erno.Group;
for(var k in xinf.ony.erno.Group.prototype ) xinf.ony.Crop.prototype[k] = xinf.ony.erno.Group.prototype[k];
xinf.ony.Crop.prototype.get_height = function() {
	return this.getTrait("height",Float);
}
xinf.ony.Crop.prototype.get_width = function() {
	return this.getTrait("width",Float);
}
xinf.ony.Crop.prototype.height = null;
xinf.ony.Crop.prototype.set_height = function(v) {
	this.redraw();
	return this.setTrait("height",v);
}
xinf.ony.Crop.prototype.set_width = function(v) {
	this.redraw();
	return this.setTrait("width",v);
}
xinf.ony.Crop.prototype.width = null;
xinf.ony.Crop.prototype.__class__ = xinf.ony.Crop;
xinf.ony.GradientStop = function(traits) { if( traits === $_ ) return; {
	xinf.style.StyledElement.apply(this,[traits]);
	this.r = this.g = this.b = this.a = 0;
	this.offset = 0;
}}
xinf.ony.GradientStop.__name__ = ["xinf","ony","GradientStop"];
xinf.ony.GradientStop.__super__ = xinf.style.StyledElement;
for(var k in xinf.style.StyledElement.prototype ) xinf.ony.GradientStop.prototype[k] = xinf.style.StyledElement.prototype[k];
xinf.ony.GradientStop.prototype.a = null;
xinf.ony.GradientStop.prototype.b = null;
xinf.ony.GradientStop.prototype.fromXml = function(xml) {
	xinf.style.StyledElement.prototype.fromXml.apply(this,[xml]);
	this.offset = this.getTrait("offset",xinf.ony.type.Length).value;
	var o = this.get_stop_opacity();
	if(o == null) o = 1;
	if(this.get_stop_color() != null) {
		var $e = (this.get_stop_color());
		switch( $e[1] ) {
		case 2:
		var b = $e[4], g = $e[3], r = $e[2];
		{
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = o;
		}break;
		case 0:
		{
			this.r = this.g = this.b = this.a = 0;
		}break;
		default:{
			throw ("GradientStop stop-color must be a SolidColor (is: " + this.get_stop_color() + ")");
		}break;
		}
	}
}
xinf.ony.GradientStop.prototype.g = null;
xinf.ony.GradientStop.prototype.get_stop_color = function() {
	return this.getStyleTrait("stop-color",xinf.ony.type.Paint,false);
}
xinf.ony.GradientStop.prototype.get_stop_opacity = function() {
	return this.getStyleTrait("stop-opacity",Float,false);
}
xinf.ony.GradientStop.prototype.offset = null;
xinf.ony.GradientStop.prototype.r = null;
xinf.ony.GradientStop.prototype.set_stop_color = function(v) {
	return this.setStyleTrait("stop-color",v);
}
xinf.ony.GradientStop.prototype.set_stop_opacity = function(v) {
	return this.setStyleTrait("stop-opacity",v);
}
xinf.ony.GradientStop.prototype.stopColor = null;
xinf.ony.GradientStop.prototype.stopOpacity = null;
xinf.ony.GradientStop.prototype.toString = function() {
	return ("GradientStop(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")");
}
xinf.ony.GradientStop.prototype.__class__ = xinf.ony.GradientStop;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
xinf.traits.SpecialTraitValue = function(p) { if( p === $_ ) return; {
	null;
}}
xinf.traits.SpecialTraitValue.__name__ = ["xinf","traits","SpecialTraitValue"];
xinf.traits.SpecialTraitValue.prototype.get = function(name,type,c) {
	return null;
}
xinf.traits.SpecialTraitValue.prototype.__class__ = xinf.traits.SpecialTraitValue;
xinf.traits.Inherit = function(p) { if( p === $_ ) return; {
	xinf.traits.SpecialTraitValue.apply(this,[]);
}}
xinf.traits.Inherit.__name__ = ["xinf","traits","Inherit"];
xinf.traits.Inherit.__super__ = xinf.traits.SpecialTraitValue;
for(var k in xinf.traits.SpecialTraitValue.prototype ) xinf.traits.Inherit.prototype[k] = xinf.traits.SpecialTraitValue.prototype[k];
xinf.traits.Inherit.prototype.get = function(name,type,c) {
	var p = c.parentElement;
	if(p == null) return null;
	return (p.getStyleTrait(name,type,true));
}
xinf.traits.Inherit.prototype.toString = function() {
	return ("inherit");
}
xinf.traits.Inherit.prototype.__class__ = xinf.traits.Inherit;
xinf.traits.CurrentColor = function(p) { if( p === $_ ) return; {
	xinf.traits.SpecialTraitValue.apply(this,[]);
}}
xinf.traits.CurrentColor.__name__ = ["xinf","traits","CurrentColor"];
xinf.traits.CurrentColor.__super__ = xinf.traits.SpecialTraitValue;
for(var k in xinf.traits.SpecialTraitValue.prototype ) xinf.traits.CurrentColor.prototype[k] = xinf.traits.SpecialTraitValue.prototype[k];
xinf.traits.CurrentColor.prototype.get = function(name,type,c) {
	var p = c;
	while(p != null) {
		var v = p.getStyleTrait("color",type,true);
		if(v != null) return v;
		p = p.parentElement;
	}
	return null;
}
xinf.traits.CurrentColor.prototype.toString = function() {
	return ("currentColor");
}
xinf.traits.CurrentColor.prototype.__class__ = xinf.traits.CurrentColor;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.run = function() {
	null;
}
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.__class__ = haxe.Timer;
org.puremvc.haxe.utilities.statemachine.FSMInjector = function(fsm) { if( fsm === $_ ) return; {
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.fsm = fsm;
}}
org.puremvc.haxe.utilities.statemachine.FSMInjector.__name__ = ["org","puremvc","haxe","utilities","statemachine","FSMInjector"];
org.puremvc.haxe.utilities.statemachine.FSMInjector.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.createState = function(stateDef) {
	var name = stateDef.get("name");
	var exiting = stateDef.get("exiting");
	var entering = stateDef.get("entering");
	var state = new org.puremvc.haxe.utilities.statemachine.State(name,entering,exiting);
	{ var $it57 = stateDef.elementsNamed("transition");
	while( $it57.hasNext() ) { var transDef = $it57.next();
	{
		state.defineTrans(transDef.get("action"),transDef.get("target"));
	}
	}}
	return state;
}
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.fsm = null;
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.getStates = function() {
	if(this.stateList == null) {
		this.stateList = new List();
		{ var $it58 = this.fsm.elementsNamed("state");
		while( $it58.hasNext() ) { var stateDef = $it58.next();
		{
			var state = this.createState(stateDef);
			this.stateList.add(state);
		}
		}}
	}
	return this.stateList;
}
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.inject = function() {
	var stateMachine = new org.puremvc.haxe.utilities.statemachine.StateMachine();
	{ var $it59 = this.getStates().iterator();
	while( $it59.hasNext() ) { var state = $it59.next();
	{
		stateMachine.registerState(state,this.isInitial(state.name));
	}
	}}
	this.facade.registerMediator(stateMachine);
}
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.isInitial = function(stateName) {
	var initial = this.fsm.get("initial");
	return (stateName == initial);
}
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.stateList = null;
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.states = null;
org.puremvc.haxe.utilities.statemachine.FSMInjector.prototype.__class__ = org.puremvc.haxe.utilities.statemachine.FSMInjector;
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","PrepModelCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand.prototype.execute = function(note) {
	this.facade.registerProxy(new org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy());
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.PrepModelCommand;
xinf.ony.erno.Crop = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Crop.apply(this,[traits]);
}}
xinf.ony.erno.Crop.__name__ = ["xinf","ony","erno","Crop"];
xinf.ony.erno.Crop.__super__ = xinf.ony.Crop;
for(var k in xinf.ony.Crop.prototype ) xinf.ony.erno.Crop.prototype[k] = xinf.ony.Crop.prototype[k];
xinf.ony.erno.Crop.prototype.drawContents = function(g) {
	g.clipRect(this.get_width(),this.get_height());
	xinf.ony.Crop.prototype.drawContents.apply(this,[g]);
}
xinf.ony.erno.Crop.prototype.__class__ = xinf.ony.erno.Crop;
xinf.geom.Rotate = function(a) { if( a === $_ ) return; {
	this.a = a;
}}
xinf.geom.Rotate.__name__ = ["xinf","geom","Rotate"];
xinf.geom.Rotate.prototype.a = null;
xinf.geom.Rotate.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	if(Std["is"](t,xinf.geom.Rotate)) {
		return new xinf.geom.Rotate(this.a + t.a);
	}
	return new xinf.geom.Concatenate(this,t);
}
xinf.geom.Rotate.prototype.apply = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).apply(p);
}
xinf.geom.Rotate.prototype.applyInverse = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).applyInverse(p);
}
xinf.geom.Rotate.prototype.distanceTo = function(p) {
	if(Std["is"](p,xinf.geom.Identity) || !Std["is"](p,xinf.geom.Rotate)) return Math.abs(this.a);
	var q = p;
	return (Math.abs(q.a - this.a));
}
xinf.geom.Rotate.prototype.getMatrix = function() {
	var co = Math.cos(this.a);
	var si = Math.sin(this.a);
	return { a : co, b : si, c : -si, d : co, tx : 0., ty : 0.}
}
xinf.geom.Rotate.prototype.getScale = function() {
	return { x : .0, y : .0}
}
xinf.geom.Rotate.prototype.getTranslation = function() {
	return { x : .0, y : .0}
}
xinf.geom.Rotate.prototype.interpolateWith = function(p,f) {
	if(Std["is"](p,xinf.geom.Identity)) return new xinf.geom.Rotate(this.a * (1 - f));
	if(!Std["is"](p,xinf.geom.Rotate)) return this;
	var q = p;
	return (new xinf.geom.Rotate(this.a + ((q.a - this.a) * f)));
}
xinf.geom.Rotate.prototype.isIdentity = function() {
	return (this.a == 0 || this.a % (2 * Math.PI) == 0);
}
xinf.geom.Rotate.prototype.toString = function() {
	return ("rotate(" + (this.a * xinf.geom.TransformParser.R2D) + ")");
}
xinf.geom.Rotate.prototype.__class__ = xinf.geom.Rotate;
xinf.geom.Rotate.__interfaces__ = [xinf.geom.Transform];
xinf.event.UIEvent = function(_type,targetId) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.targetId = targetId;
}}
xinf.event.UIEvent.__name__ = ["xinf","event","UIEvent"];
xinf.event.UIEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.UIEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.UIEvent.prototype.targetId = null;
xinf.event.UIEvent.prototype.__class__ = xinf.event.UIEvent;
xinf.geom.TransformList = function(list) { if( list === $_ ) return; {
	this.l = new List();
	if(list != null) { var $it60 = list.iterator();
	while( $it60.hasNext() ) { var item = $it60.next();
	this.l.add(item);
	}}
	this.cache();
}}
xinf.geom.TransformList.__name__ = ["xinf","geom","TransformList"];
xinf.geom.TransformList.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	var l2 = Lambda.list(this.l);
	l2.add(t);
	return new xinf.geom.TransformList(l2);
}
xinf.geom.TransformList.prototype.apply = function(p) {
	return this.m.apply(p);
}
xinf.geom.TransformList.prototype.applyInverse = function(p) {
	return this.m.applyInverse(p);
}
xinf.geom.TransformList.prototype.cache = function() {
	this.m = new xinf.geom.Matrix();
	{ var $it61 = this.l.iterator();
	while( $it61.hasNext() ) { var item = $it61.next();
	{
		this.m = this.m.multiply(item.getMatrix());
	}
	}}
}
xinf.geom.TransformList.prototype.distanceTo = function(p) {
	return 1.;
}
xinf.geom.TransformList.prototype.getMatrix = function() {
	return this.m;
}
xinf.geom.TransformList.prototype.getScale = function() {
	return this.m.getScale();
}
xinf.geom.TransformList.prototype.getTranslation = function() {
	return this.m.getTranslation();
}
xinf.geom.TransformList.prototype.interpolateWith = function(p,f) {
	return this;
}
xinf.geom.TransformList.prototype.isIdentity = function() {
	{ var $it62 = this.l.iterator();
	while( $it62.hasNext() ) { var item = $it62.next();
	{
		if(!item.isIdentity()) return false;
	}
	}}
	return true;
}
xinf.geom.TransformList.prototype.l = null;
xinf.geom.TransformList.prototype.m = null;
xinf.geom.TransformList.prototype.toString = function() {
	var r = "(*";
	{ var $it63 = this.l.iterator();
	while( $it63.hasNext() ) { var item = $it63.next();
	{
		r += "," + item;
	}
	}}
	r += ")";
	return r;
}
xinf.geom.TransformList.prototype.__class__ = xinf.geom.TransformList;
xinf.geom.TransformList.__interfaces__ = [xinf.geom.Transform];
xinf.ony.erno.Rectangle = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Rectangle.apply(this,[traits]);
}}
xinf.ony.erno.Rectangle.__name__ = ["xinf","ony","erno","Rectangle"];
xinf.ony.erno.Rectangle.__super__ = xinf.ony.Rectangle;
for(var k in xinf.ony.Rectangle.prototype ) xinf.ony.erno.Rectangle.prototype[k] = xinf.ony.Rectangle.prototype[k];
xinf.ony.erno.Rectangle.prototype.drawContents = function(g) {
	if(this.get_width() <= 0 || this.get_height() <= 0) return;
	xinf.ony.Rectangle.prototype.drawContents.apply(this,[g]);
	if(this.get_rx() == 0 && this.get_ry() == 0) {
		g.rect(this.get_x(),this.get_y(),this.get_width(),this.get_height());
	}
	else {
		var ry2 = this.get_ry();
		if(ry2 == 0.) ry2 = this.get_rx();
		var rx2 = this.get_rx();
		if(rx2 == 0.) rx2 = ry2;
		if(rx2 > (this.get_width() / 2)) rx2 = this.get_width() / 2;
		if(ry2 > (this.get_height() / 2)) ry2 = this.get_height() / 2;
		g.roundedRect(this.get_x(),this.get_y(),this.get_width(),this.get_height(),rx2,ry2);
	}
}
xinf.ony.erno.Rectangle.prototype.__class__ = xinf.ony.erno.Rectangle;
xinf.event.LinkEvent = function(_type,href) { if( _type === $_ ) return; {
	xinf.event.Event.apply(this,[_type]);
	this.href = href;
}}
xinf.event.LinkEvent.__name__ = ["xinf","event","LinkEvent"];
xinf.event.LinkEvent.__super__ = xinf.event.Event;
for(var k in xinf.event.Event.prototype ) xinf.event.LinkEvent.prototype[k] = xinf.event.Event.prototype[k];
xinf.event.LinkEvent.prototype.href = null;
xinf.event.LinkEvent.prototype.__class__ = xinf.event.LinkEvent;
xinf.ony.erno.Root = function(p) { if( p === $_ ) return; {
	xinf.ony.erno.Embed.apply(this,[xinf.erno.Runtime.getRuntime().getDefaultRoot()]);
	xinf.erno.Runtime.addEventListener(xinf.event.GeometryEvent.STAGE_SCALED,$closure(this,"stageScaled"));
}}
xinf.ony.erno.Root.__name__ = ["xinf","ony","erno","Root"];
xinf.ony.erno.Root.__super__ = xinf.ony.erno.Embed;
for(var k in xinf.ony.erno.Embed.prototype ) xinf.ony.erno.Root.prototype[k] = xinf.ony.erno.Embed.prototype[k];
xinf.ony.erno.Root.prototype.stageScaled = function(e) {
	null;
}
xinf.ony.erno.Root.prototype.__class__ = xinf.ony.erno.Root;
xinf.style.StyleSheet = function(_rules) { if( _rules === $_ ) return; {
	this.rules = new Array();
	if(_rules != null) this.addMany(_rules);
}}
xinf.style.StyleSheet.__name__ = ["xinf","style","StyleSheet"];
xinf.style.StyleSheet.prototype.add = function(rule) {
	var s = { }
	{
		var _g = 0, _g1 = Reflect.fields(rule.style);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			var field2 = StringTools.replace(field,"_","-");
			s[field2] = Reflect.field(rule.style,field);
		}
	}
	this.rules.push({ selector : rule.selector, style : s});
}
xinf.style.StyleSheet.prototype.addMany = function(_rules) {
	{ var $it64 = _rules.iterator();
	while( $it64.hasNext() ) { var rule = $it64.next();
	this.add(rule);
	}}
}
xinf.style.StyleSheet.prototype.match = function(e) {
	var a = new Array();
	if(xinf.style.StyleSheet.DEFAULT != null) {
		{
			var _g = 0, _g1 = xinf.style.StyleSheet.DEFAULT.rules;
			while(_g < _g1.length) {
				var rule = _g1[_g];
				++_g;
				if(e.matchSelector(rule.selector)) {
					a.push(rule.style);
				}
			}
		}
	}
	{
		var _g = 0, _g1 = this.rules;
		while(_g < _g1.length) {
			var rule = _g1[_g];
			++_g;
			if(e.matchSelector(rule.selector)) {
				a.push(rule.style);
			}
		}
	}
	var r = { }
	{
		var _g = 0;
		while(_g < a.length) {
			var style = a[_g];
			++_g;
			{
				var _g1 = 0, _g2 = Reflect.fields(style);
				while(_g1 < _g2.length) {
					var field = _g2[_g1];
					++_g1;
					r[field] = Reflect.field(style,field);
				}
			}
		}
	}
	return r;
}
xinf.style.StyleSheet.prototype.parseCSS = function(data) {
	this.addMany(xinf.style.StyleParser.parseRules(data));
}
xinf.style.StyleSheet.prototype.rules = null;
xinf.style.StyleSheet.prototype.__class__ = xinf.style.StyleSheet;
xinf.erno.Pen = function(p) { if( p === $_ ) return; {
	null;
}}
xinf.erno.Pen.__name__ = ["xinf","erno","Pen"];
xinf.erno.Pen.prototype.caps = null;
xinf.erno.Pen.prototype.clone = function() {
	var p = new xinf.erno.Pen();
	p.fill = this.fill;
	p.stroke = this.stroke;
	p.width = this.width;
	p.caps = this.caps;
	p.join = this.join;
	p.miterLimit = this.miterLimit;
	p.dashArray = this.dashArray;
	p.dashOffset = this.dashOffset;
	return p;
}
xinf.erno.Pen.prototype.dashArray = null;
xinf.erno.Pen.prototype.dashOffset = null;
xinf.erno.Pen.prototype.fill = null;
xinf.erno.Pen.prototype.join = null;
xinf.erno.Pen.prototype.miterLimit = null;
xinf.erno.Pen.prototype.stroke = null;
xinf.erno.Pen.prototype.width = null;
xinf.erno.Pen.prototype.__class__ = xinf.erno.Pen;
org.puremvc.haxe.interfaces.IModel = function() { }
org.puremvc.haxe.interfaces.IModel.__name__ = ["org","puremvc","haxe","interfaces","IModel"];
org.puremvc.haxe.interfaces.IModel.prototype.hasProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.registerProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.removeProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.retrieveProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.__class__ = org.puremvc.haxe.interfaces.IModel;
org.puremvc.haxe.core = {}
org.puremvc.haxe.core.Model = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.Model.instance = this;
	this.proxyMap = new Hash();
	this.initializeModel();
}}
org.puremvc.haxe.core.Model.__name__ = ["org","puremvc","haxe","core","Model"];
org.puremvc.haxe.core.Model.getInstance = function() {
	if(org.puremvc.haxe.core.Model.instance == null) org.puremvc.haxe.core.Model.instance = new org.puremvc.haxe.core.Model();
	return org.puremvc.haxe.core.Model.instance;
}
org.puremvc.haxe.core.Model.instance = null;
org.puremvc.haxe.core.Model.prototype.hasProxy = function(proxyName) {
	return this.proxyMap.exists(proxyName);
}
org.puremvc.haxe.core.Model.prototype.initializeModel = function() {
	null;
}
org.puremvc.haxe.core.Model.prototype.proxyMap = null;
org.puremvc.haxe.core.Model.prototype.registerProxy = function(proxy) {
	this.proxyMap.set(proxy.getProxyName(),proxy);
	proxy.onRegister();
}
org.puremvc.haxe.core.Model.prototype.removeProxy = function(proxyName) {
	var proxy = this.proxyMap.get(proxyName);
	if(proxy != null) {
		this.proxyMap.remove(proxyName);
		proxy.onRemove();
	}
	return proxy;
}
org.puremvc.haxe.core.Model.prototype.retrieveProxy = function(proxyName) {
	return this.proxyMap.get(proxyName);
}
org.puremvc.haxe.core.Model.prototype.__class__ = org.puremvc.haxe.core.Model;
org.puremvc.haxe.core.Model.__interfaces__ = [org.puremvc.haxe.interfaces.IModel];
xinf.ony.erno.LinearGradient = function(traits) { if( traits === $_ ) return; {
	xinf.ony.LinearGradient.apply(this,[traits]);
}}
xinf.ony.erno.LinearGradient.__name__ = ["xinf","ony","erno","LinearGradient"];
xinf.ony.erno.LinearGradient.__super__ = xinf.ony.LinearGradient;
for(var k in xinf.ony.LinearGradient.prototype ) xinf.ony.erno.LinearGradient.prototype[k] = xinf.ony.LinearGradient.prototype[k];
xinf.ony.erno.LinearGradient.prototype.getPaint = function(target) {
	var p1 = { x : this.get_x1(), y : this.get_y1()}
	var p2 = { x : this.get_x2(), y : this.get_y2()}
	var transform = null;
	if(this.get_gradientTransform() != null) {
		transform = this.get_gradientTransform();
	}
	if(this.get_gradientUnits() == xinf.ony.type.GradientUnits.ObjectBoundingBox) {
		var bbox = target.getBoundingBox();
		var t = new xinf.geom.Concatenate(new xinf.geom.Scale(bbox.r - bbox.l,bbox.b - bbox.t),new xinf.geom.Translate(bbox.l,bbox.t));
		if(transform != null) transform = new xinf.geom.Concatenate(transform,t);
		else transform = t;
	}
	var spread = function($this) {
		var $r;
		var $e = ($this.get_spreadMethod());
		switch( $e[1] ) {
		case 0:
		{
			$r = xinf.erno.Constants.SPREAD_PAD;
		}break;
		case 1:
		{
			$r = xinf.erno.Constants.SPREAD_REFLECT;
		}break;
		case 2:
		{
			$r = xinf.erno.Constants.SPREAD_REPEAT;
		}break;
		default:{
			$r = null;
		}break;
		}
		return $r;
	}(this);
	return xinf.erno.Paint.PLinearGradient(this.get_stops(),p1.x,p1.y,p2.x,p2.y,transform,spread);
}
xinf.ony.erno.LinearGradient.prototype.__class__ = xinf.ony.erno.LinearGradient;
xinf.ony.erno.LinearGradient.__interfaces__ = [xinf.ony.erno.PaintServer];
xinf.geom.Identity = function(p) { if( p === $_ ) return; {
	null;
}}
xinf.geom.Identity.__name__ = ["xinf","geom","Identity"];
xinf.geom.Identity.prototype.add = function(t) {
	return t;
}
xinf.geom.Identity.prototype.apply = function(p) {
	return p;
}
xinf.geom.Identity.prototype.applyInverse = function(p) {
	return p;
}
xinf.geom.Identity.prototype.distanceTo = function(p) {
	if(Std["is"](p,xinf.geom.Identity)) return 0.;
	return p.distanceTo(this);
}
xinf.geom.Identity.prototype.getMatrix = function() {
	return { a : 1., b : 0., c : 0., d : 1., tx : 0., ty : 0.}
}
xinf.geom.Identity.prototype.getScale = function() {
	return { x : .0, y : .0}
}
xinf.geom.Identity.prototype.getTranslation = function() {
	return { x : .0, y : .0}
}
xinf.geom.Identity.prototype.interpolateWith = function(p,f) {
	if(Std["is"](p,xinf.geom.Identity)) return this;
	return p.interpolateWith(this,1 - f);
}
xinf.geom.Identity.prototype.isIdentity = function() {
	return true;
}
xinf.geom.Identity.prototype.toString = function() {
	return ("identity");
}
xinf.geom.Identity.prototype.__class__ = xinf.geom.Identity;
xinf.geom.Identity.__interfaces__ = [xinf.geom.Transform];
xinf.erno.js.JSEventSource = function(r) { if( r === $_ ) return; {
	this.runtime = r;
	js.Lib.document.onmousedown = $closure(this,"mouseDown");
	js.Lib.document.onmouseup = $closure(this,"mouseUp");
	js.Lib.document.onmousemove = $closure(this,"mouseMove");
	js.Lib.document.onresize = $closure(this,"rootResized");
	js.Lib.document.onkeydown = $closure(this,"keyPress");
	js.Lib.document.onkeyup = $closure(this,"keyRelease");
	js.Lib.document.onkeypress = function(e) {
		return false;
	}
	if(js.Lib.window.addEventListener) {
		js.Lib.window.addEventListener("DOMMouseScroll",$closure(this,"mouseWheelFF"),false);
	}
}}
xinf.erno.js.JSEventSource.__name__ = ["xinf","erno","js","JSEventSource"];
xinf.erno.js.JSEventSource.prototype.currentDown = null;
xinf.erno.js.JSEventSource.prototype.currentOver = null;
xinf.erno.js.JSEventSource.prototype.findTarget = function(e) {
	var targetNode = e.target;
	while(targetNode.xinfId == null && targetNode.parentNode != null) {
		targetNode = targetNode.parentNode;
	}
	return targetNode.xinfId;
}
xinf.erno.js.JSEventSource.prototype.keyEvent = function(e,type) {
	var key = xinf.erno.Keys.get(e.keyCode);
	if(key == null) key = String.fromCharCode(e.keyCode);
	if(e.keyCode == 0) {
		return true;
	}
	else {
		if(key == null) {
			haxe.Log.trace("unhandled key code " + e.keyCode,{ fileName : "JSEventSource.hx", lineNumber : 63, className : "xinf.erno.js.JSEventSource", methodName : "keyEvent"});
			return true;
		}
		this.runtime.postEvent(new xinf.event.KeyboardEvent(type,e.keyCode,key,e.shiftKey,e.altKey,e.ctrlKey),{ fileName : "JSEventSource.hx", lineNumber : 66, className : "xinf.erno.js.JSEventSource", methodName : "keyEvent"});
		return false;
	}
}
xinf.erno.js.JSEventSource.prototype.keyPress = function(e) {
	return this.keyEvent(e,xinf.event.KeyboardEvent.KEY_DOWN);
}
xinf.erno.js.JSEventSource.prototype.keyRelease = function(e) {
	return this.keyEvent(e,xinf.event.KeyboardEvent.KEY_UP);
}
xinf.erno.js.JSEventSource.prototype.mouseDown = function(e) {
	var targetId = this.findTarget(e);
	if(targetId == null) targetId = 0;
	this.currentDown = targetId;
	return this.postMouseEventTo(e,xinf.event.MouseEvent.MOUSE_DOWN,targetId);
}
xinf.erno.js.JSEventSource.prototype.mouseMove = function(e) {
	var targetId = this.findTarget(e);
	if(targetId != this.currentOver) {
		if(this.currentOver != null) {
			this.postMouseEventTo(e,xinf.event.MouseEvent.MOUSE_OUT,this.currentOver);
		}
		this.postMouseEventTo(e,xinf.event.MouseEvent.MOUSE_OVER,targetId);
		this.currentOver = targetId;
	}
	else this.postMouseEventTo(e,xinf.event.MouseEvent.MOUSE_MOVE,targetId);
	return true;
}
xinf.erno.js.JSEventSource.prototype.mouseUp = function(e) {
	var targetId = this.findTarget(e);
	if(targetId == null) targetId = 0;
	var r = this.postMouseEventTo(e,xinf.event.MouseEvent.MOUSE_UP,targetId);
	if(targetId == this.currentDown) {
		this.runtime.postEvent(new xinf.event.UIEvent(xinf.event.UIEvent.ACTIVATE,targetId),{ fileName : "JSEventSource.hx", lineNumber : 86, className : "xinf.erno.js.JSEventSource", methodName : "mouseUp"});
	}
	this.currentDown = null;
	return r;
}
xinf.erno.js.JSEventSource.prototype.mouseWheelFF = function(e) {
	var targetId = this.findTarget(e);
	if(targetId != null) {
		this.runtime.postEvent(new xinf.event.ScrollEvent(xinf.event.ScrollEvent.SCROLL_STEP,(e.detail / 3),targetId),{ fileName : "JSEventSource.hx", lineNumber : 108, className : "xinf.erno.js.JSEventSource", methodName : "mouseWheelFF"});
		e.preventDefault();
	}
	return false;
}
xinf.erno.js.JSEventSource.prototype.postMouseEventTo = function(e,type,targetId) {
	this.runtime.postEvent(new xinf.event.MouseEvent(type,e.clientX,e.clientY,e.which,targetId,e.shiftKey,e.altKey,e.ctrlKey),{ fileName : "JSEventSource.hx", lineNumber : 124, className : "xinf.erno.js.JSEventSource", methodName : "postMouseEventTo"});
	return e.target.nodeName == "INPUT";
}
xinf.erno.js.JSEventSource.prototype.rootResized = function(e) {
	var w = js.Lib.window.innerWidth;
	var h = js.Lib.window.innerHeight;
	this.runtime.postEvent(new xinf.event.GeometryEvent(xinf.event.GeometryEvent.STAGE_SCALED,w,h),{ fileName : "JSEventSource.hx", lineNumber : 133, className : "xinf.erno.js.JSEventSource", methodName : "rootResized"});
}
xinf.erno.js.JSEventSource.prototype.runtime = null;
xinf.erno.js.JSEventSource.prototype.__class__ = xinf.erno.js.JSEventSource;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.Unserializer = function(buf) { if( buf === $_ ) return; {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	this.setResolver(haxe.Unserializer.DEFAULT_RESOLVER);
}}
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	{
		var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
		while(_g1 < _g) {
			var i = _g1++;
			codes[haxe.Unserializer.BASE64.cca(i)] = i;
		}
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype.buf = null;
haxe.Unserializer.prototype.cache = null;
haxe.Unserializer.prototype.get = function(p) {
	return this.buf.cca(p);
}
haxe.Unserializer.prototype.length = null;
haxe.Unserializer.prototype.pos = null;
haxe.Unserializer.prototype.readDigits = function() {
	var k = 0;
	var s = false;
	var fpos = this.pos;
	while(true) {
		var c = this.buf.cca(this.pos);
		if(Math.isNaN(c)) break;
		if(c == 45) {
			if(this.pos != fpos) break;
			s = true;
			this.pos++;
			continue;
		}
		c -= 48;
		if(c < 0 || c > 9) break;
		k = k * 10 + c;
		this.pos++;
	}
	if(s) k *= -1;
	return k;
}
haxe.Unserializer.prototype.resolver = null;
haxe.Unserializer.prototype.scache = null;
haxe.Unserializer.prototype.setResolver = function(r) {
	if(r == null) this.resolver = { resolveClass : function(_) {
		return null;
	}, resolveEnum : function(_) {
		return null;
	}}
	else this.resolver = r;
}
haxe.Unserializer.prototype.unserialize = function() {
	switch(this.buf.cca(this.pos++)) {
	case 110:{
		return null;
	}break;
	case 116:{
		return true;
	}break;
	case 102:{
		return false;
	}break;
	case 122:{
		return 0;
	}break;
	case 105:{
		return this.readDigits();
	}break;
	case 100:{
		var p1 = this.pos;
		while(true) {
			var c = this.buf.cca(this.pos);
			if((c >= 43 && c < 58) || c == 101 || c == 69) this.pos++;
			else break;
		}
		return Std.parseFloat(this.buf.substr(p1,this.pos - p1));
	}break;
	case 121:{
		var len = this.readDigits();
		if(this.buf.charAt(this.pos++) != ":" || this.length - this.pos < len) throw "Invalid string length";
		var s = this.buf.substr(this.pos,len);
		this.pos += len;
		s = StringTools.urlDecode(s);
		this.scache.push(s);
		return s;
	}break;
	case 107:{
		return Math.NaN;
	}break;
	case 109:{
		return Math.NEGATIVE_INFINITY;
	}break;
	case 112:{
		return Math.POSITIVE_INFINITY;
	}break;
	case 97:{
		var buf = this.buf;
		var a = new Array();
		this.cache.push(a);
		while(true) {
			var c = this.buf.cca(this.pos);
			if(c == 104) {
				this.pos++;
				break;
			}
			if(c == 117) {
				this.pos++;
				var n = this.readDigits();
				a[a.length + n - 1] = null;
			}
			else a.push(this.unserialize());
		}
		return a;
	}break;
	case 111:{
		var o = { }
		this.cache.push(o);
		this.unserializeObject(o);
		return o;
	}break;
	case 114:{
		var n = this.readDigits();
		if(n < 0 || n >= this.cache.length) throw "Invalid reference";
		return this.cache[n];
	}break;
	case 82:{
		var n = this.readDigits();
		if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
		return this.scache[n];
	}break;
	case 120:{
		throw this.unserialize();
	}break;
	case 99:{
		var name = this.unserialize();
		var cl = this.resolver.resolveClass(name);
		if(cl == null) throw "Class not found " + name;
		var o = Type.createEmptyInstance(cl);
		this.cache.push(o);
		this.unserializeObject(o);
		return o;
	}break;
	case 119:{
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		return this.unserializeEnum(edecl,this.unserialize());
	}break;
	case 106:{
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		this.pos++;
		var index = this.readDigits();
		var tag = Type.getEnumConstructs(edecl)[index];
		if(tag == null) throw "Unknown enum index " + name + "@" + index;
		return this.unserializeEnum(edecl,tag);
	}break;
	case 108:{
		var l = new List();
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) l.add(this.unserialize());
		this.pos++;
		return l;
	}break;
	case 98:{
		var h = new Hash();
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) {
			var s = this.unserialize();
			h.set(s,this.unserialize());
		}
		this.pos++;
		return h;
	}break;
	case 113:{
		var h = new IntHash();
		var buf = this.buf;
		var c = this.buf.cca(this.pos++);
		while(c == 58) {
			var i = this.readDigits();
			h.set(i,this.unserialize());
			c = this.buf.cca(this.pos++);
		}
		if(c != 104) throw "Invalid IntHash format";
		return h;
	}break;
	case 118:{
		var d = Date.fromString(this.buf.substr(this.pos,19));
		this.pos += 19;
		return d;
	}break;
	case 115:{
		var len = this.readDigits();
		var buf = this.buf;
		if(buf.charAt(this.pos++) != ":" || this.length - this.pos < len) throw "Invalid bytes length";
		var codes = haxe.Unserializer.CODES;
		if(codes == null) {
			codes = haxe.Unserializer.initCodes();
			haxe.Unserializer.CODES = codes;
		}
		var b = new haxe.io.BytesBuffer();
		var i = this.pos;
		var rest = len & 3;
		var max = i + (len - rest);
		while(i < max) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			b.b.push((c1 << 2) | (c2 >> 4));
			var c3 = codes[buf.cca(i++)];
			b.b.push(((c2 << 4) | (c3 >> 2)) & 255);
			var c4 = codes[buf.cca(i++)];
			b.b.push(((c3 << 6) | c4) & 255);
		}
		if(rest >= 2) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			b.b.push((c1 << 2) | (c2 >> 4));
			if(rest == 3) {
				var c3 = codes[buf.cca(i++)];
				b.b.push(((c2 << 4) | (c3 >> 2)) & 255);
			}
		}
		var bytes = b.getBytes();
		this.pos += len;
		this.cache.push(bytes);
		return bytes;
	}break;
	default:{
		null;
	}break;
	}
	this.pos--;
	throw ("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
}
haxe.Unserializer.prototype.unserializeEnum = function(edecl,tag) {
	var constr = Reflect.field(edecl,tag);
	if(constr == null) throw "Unknown enum tag " + Type.getEnumName(edecl) + "." + tag;
	if(this.buf.cca(this.pos++) != 58) throw "Invalid enum format";
	var nargs = this.readDigits();
	if(nargs == 0) {
		this.cache.push(constr);
		return constr;
	}
	var args = new Array();
	while(nargs > 0) {
		args.push(this.unserialize());
		nargs -= 1;
	}
	var e = constr.apply(edecl,args);
	this.cache.push(e);
	return e;
}
haxe.Unserializer.prototype.unserializeObject = function(o) {
	while(true) {
		if(this.pos >= this.length) throw "Invalid object";
		if(this.buf.cca(this.pos) == 103) break;
		var k = this.unserialize();
		if(!Std["is"](k,String)) throw "Invalid object key";
		var v = this.unserialize();
		o[k] = v;
	}
	this.pos++;
}
haxe.Unserializer.prototype.__class__ = haxe.Unserializer;
xinf.geom.Concatenate = function(a,b) { if( a === $_ ) return; {
	this.a = a;
	this.b = b;
}}
xinf.geom.Concatenate.__name__ = ["xinf","geom","Concatenate"];
xinf.geom.Concatenate.prototype.a = null;
xinf.geom.Concatenate.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	else return (new xinf.geom.TransformList([this.a,this.b,t]));
}
xinf.geom.Concatenate.prototype.apply = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).apply(p);
}
xinf.geom.Concatenate.prototype.applyInverse = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).applyInverse(p);
}
xinf.geom.Concatenate.prototype.b = null;
xinf.geom.Concatenate.prototype.distanceTo = function(p) {
	return 1.;
}
xinf.geom.Concatenate.prototype.getMatrix = function() {
	var m = new xinf.geom.Matrix(this.a.getMatrix()).multiply(this.b.getMatrix());
	return m;
}
xinf.geom.Concatenate.prototype.getScale = function() {
	return new xinf.geom.Matrix(this.getMatrix()).getScale();
}
xinf.geom.Concatenate.prototype.getTranslation = function() {
	return new xinf.geom.Matrix(this.getMatrix()).getTranslation();
}
xinf.geom.Concatenate.prototype.interpolateWith = function(p,f) {
	return this;
}
xinf.geom.Concatenate.prototype.isIdentity = function() {
	return (this.a.isIdentity() && this.b.isIdentity());
}
xinf.geom.Concatenate.prototype.toString = function() {
	return ("concat( " + this.a + ", " + this.b + " )");
}
xinf.geom.Concatenate.prototype.__class__ = xinf.geom.Concatenate;
xinf.geom.Concatenate.__interfaces__ = [xinf.geom.Transform];
org.puremvc.haxe.core.Controller = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.Controller.instance = this;
	this.commandMap = new Hash();
	this.initializeController();
}}
org.puremvc.haxe.core.Controller.__name__ = ["org","puremvc","haxe","core","Controller"];
org.puremvc.haxe.core.Controller.getInstance = function() {
	if(org.puremvc.haxe.core.Controller.instance == null) org.puremvc.haxe.core.Controller.instance = new org.puremvc.haxe.core.Controller();
	return org.puremvc.haxe.core.Controller.instance;
}
org.puremvc.haxe.core.Controller.instance = null;
org.puremvc.haxe.core.Controller.prototype.commandMap = null;
org.puremvc.haxe.core.Controller.prototype.executeCommand = function(note) {
	var commandClassRef = this.commandMap.get(note.getName());
	if(commandClassRef == null) return;
	var commandInstance = Type.createInstance(commandClassRef,[]);
	commandInstance.execute(note);
}
org.puremvc.haxe.core.Controller.prototype.hasCommand = function(notificationName) {
	return this.commandMap.exists(notificationName);
}
org.puremvc.haxe.core.Controller.prototype.initializeController = function() {
	this.view = org.puremvc.haxe.core.View.getInstance();
}
org.puremvc.haxe.core.Controller.prototype.registerCommand = function(notificationName,commandClassRef) {
	if(!this.commandMap.exists(notificationName)) this.view.registerObserver(notificationName,new org.puremvc.haxe.patterns.observer.Observer($closure(this,"executeCommand"),this));
	this.commandMap.set(notificationName,commandClassRef);
}
org.puremvc.haxe.core.Controller.prototype.removeCommand = function(notificationName) {
	if(this.hasCommand(notificationName)) {
		this.view.removeObserver(notificationName,this);
		this.commandMap.remove(notificationName);
	}
}
org.puremvc.haxe.core.Controller.prototype.view = null;
org.puremvc.haxe.core.Controller.prototype.__class__ = org.puremvc.haxe.core.Controller;
org.puremvc.haxe.core.Controller.__interfaces__ = [org.puremvc.haxe.interfaces.IController];
xinf.ony.erno.Text = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Text.apply(this,[traits]);
}}
xinf.ony.erno.Text.__name__ = ["xinf","ony","erno","Text"];
xinf.ony.erno.Text.__super__ = xinf.ony.Text;
for(var k in xinf.ony.Text.prototype ) xinf.ony.erno.Text.prototype[k] = xinf.ony.Text.prototype[k];
xinf.ony.erno.Text.prototype.alignment = function() {
	return function($this) {
		var $r;
		var $e = ($this.get_text_anchor());
		switch( $e[1] ) {
		case 0:
		{
			$r = 0.;
		}break;
		case 1:
		{
			$r = 0.5;
		}break;
		case 2:
		{
			$r = 1.0;
		}break;
		default:{
			$r = null;
		}break;
		}
		return $r;
	}(this);
}
xinf.ony.erno.Text.prototype.assureFormat = function() {
	if(this.format == null) {
		var family = this.get_font_family();
		var size = this.get_font_size();
		this.format = xinf.erno.TextFormat.create((family != null?family.list[0]:null),size);
		this.format.assureGlyphs(this.get_text(),this.format.size);
	}
}
xinf.ony.erno.Text.prototype.drawContents = function(g) {
	xinf.ony.Text.prototype.drawContents.apply(this,[g]);
	this.assureFormat();
	if(this.get_text() != null) {
		var $e = (this.get_text_anchor());
		switch( $e[1] ) {
		case 0:
		{
			g.text(this.get_x(),this.get_y() - (this.format.ascender()),this.get_text(),this.format);
		}break;
		case 1:
		{
			g.text(this.get_x() - (this.format.textSize(this.get_text()).x / 2),this.get_y() - (this.format.ascender()),this.get_text(),this.format);
		}break;
		case 2:
		{
			g.text(this.get_x() - (this.format.textSize(this.get_text()).x),this.get_y() - (this.format.ascender()),this.get_text(),this.format);
		}break;
		}
	}
}
xinf.ony.erno.Text.prototype.format = null;
xinf.ony.erno.Text.prototype.getBoundingBox = function() {
	if(this.get_text() == null) return { l : this.get_x(), t : this.get_y(), r : this.get_x(), b : this.get_y()}
	this.assureFormat();
	var b = this.format.textSize(this.get_text());
	var yy = this.get_y() - this.format.ascender();
	var xx = this.get_x() - (b.x * this.alignment());
	return { l : xx, t : yy, r : xx + b.x, b : yy + b.y}
}
xinf.ony.erno.Text.prototype.styleChanged = function(attribute) {
	xinf.ony.Text.prototype.styleChanged.apply(this,[attribute]);
	this.format = null;
}
xinf.ony.erno.Text.prototype.__class__ = xinf.ony.erno.Text;
org.puremvc.haxe.core.View = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.View.instance = this;
	this.mediatorMap = new Hash();
	this.observerMap = new Hash();
	this.initializeView();
}}
org.puremvc.haxe.core.View.__name__ = ["org","puremvc","haxe","core","View"];
org.puremvc.haxe.core.View.getInstance = function() {
	if(org.puremvc.haxe.core.View.instance == null) org.puremvc.haxe.core.View.instance = new org.puremvc.haxe.core.View();
	return org.puremvc.haxe.core.View.instance;
}
org.puremvc.haxe.core.View.instance = null;
org.puremvc.haxe.core.View.prototype.hasMediator = function(mediatorName) {
	return this.mediatorMap.exists(mediatorName);
}
org.puremvc.haxe.core.View.prototype.initializeView = function() {
	null;
}
org.puremvc.haxe.core.View.prototype.mediatorMap = null;
org.puremvc.haxe.core.View.prototype.notifyObservers = function(notification) {
	if(this.observerMap.exists(notification.getName())) {
		var observers_ref = this.observerMap.get(notification.getName());
		var observers = new List();
		var iterator_ref = observers_ref.iterator();
		{ var $it65 = iterator_ref;
		while( $it65.hasNext() ) { var observer = $it65.next();
		observers.add(observer);
		}}
		var iterator = observers.iterator();
		{ var $it66 = iterator;
		while( $it66.hasNext() ) { var observer = $it66.next();
		observer.notifyObserver(notification);
		}}
	}
}
org.puremvc.haxe.core.View.prototype.observerMap = null;
org.puremvc.haxe.core.View.prototype.registerMediator = function(mediator) {
	if(this.mediatorMap.exists(mediator.getMediatorName())) return;
	this.mediatorMap.set(mediator.getMediatorName(),mediator);
	var interests = mediator.listNotificationInterests();
	if(interests.length > 0) {
		var observer = new org.puremvc.haxe.patterns.observer.Observer($closure(mediator,"handleNotification"),mediator);
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.registerObserver(interests[i],observer);
			}
		}
	}
	mediator.onRegister();
}
org.puremvc.haxe.core.View.prototype.registerObserver = function(notificationName,observer) {
	if(!this.observerMap.exists(notificationName)) this.observerMap.set(notificationName,new List());
	this.observerMap.get(notificationName).add(observer);
}
org.puremvc.haxe.core.View.prototype.removeMediator = function(mediatorName) {
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
	return mediator;
}
org.puremvc.haxe.core.View.prototype.removeObserver = function(notificationName,notifyContext) {
	var observers = this.observerMap.get(notificationName);
	{ var $it67 = observers.iterator();
	while( $it67.hasNext() ) { var observer = $it67.next();
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
}
org.puremvc.haxe.core.View.prototype.retrieveMediator = function(mediatorName) {
	return this.mediatorMap.get(mediatorName);
}
org.puremvc.haxe.core.View.prototype.__class__ = org.puremvc.haxe.core.View;
org.puremvc.haxe.core.View.__interfaces__ = [org.puremvc.haxe.interfaces.IView];
xinf.ony.Svg = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Group.apply(this,[traits]);
}}
xinf.ony.Svg.__name__ = ["xinf","ony","Svg"];
xinf.ony.Svg.__super__ = xinf.ony.erno.Group;
for(var k in xinf.ony.erno.Group.prototype ) xinf.ony.Svg.prototype[k] = xinf.ony.erno.Group.prototype[k];
xinf.ony.Svg.prototype.fromXml = function(xml) {
	xinf.ony.erno.Group.prototype.fromXml.apply(this,[xml]);
	if(xml.exists("viewBox")) {
		var vb = xml.get("viewBox").split(" ");
		if(vb.length != 4) {
			throw ("illegal/unsupported viewBox: " + vb);
		}
		this.set_width(Std.parseInt(vb[2]));
		this.set_height(Std.parseInt(vb[3]));
	}
}
xinf.ony.Svg.prototype.get_height = function() {
	return this.getTrait("height",xinf.ony.type.Length).value;
}
xinf.ony.Svg.prototype.get_width = function() {
	return this.getTrait("width",xinf.ony.type.Length).value;
}
xinf.ony.Svg.prototype.get_x = function() {
	return this.getTrait("x",Float);
}
xinf.ony.Svg.prototype.get_y = function() {
	return this.getTrait("y",Float);
}
xinf.ony.Svg.prototype.height = null;
xinf.ony.Svg.prototype.set_height = function(v) {
	this.setTrait("height",new xinf.ony.type.Length(null,v));
	return v;
}
xinf.ony.Svg.prototype.set_width = function(v) {
	this.setTrait("width",new xinf.ony.type.Length(null,v));
	return v;
}
xinf.ony.Svg.prototype.set_x = function(v) {
	this.retransform();
	return this.setTrait("x",v);
}
xinf.ony.Svg.prototype.set_y = function(v) {
	this.retransform();
	return this.setTrait("y",v);
}
xinf.ony.Svg.prototype.width = null;
xinf.ony.Svg.prototype.x = null;
xinf.ony.Svg.prototype.y = null;
xinf.ony.Svg.prototype.__class__ = xinf.ony.Svg;
haxe.Http = function(url) { if( url === $_ ) return; {
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.request = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	}
	h.onError = function(e) {
		throw e;
	}
	h.request(false);
	return r;
}
haxe.Http.prototype.async = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.onData = function(data) {
	null;
}
haxe.Http.prototype.onError = function(msg) {
	null;
}
haxe.Http.prototype.onStatus = function(status) {
	null;
}
haxe.Http.prototype.params = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.request = function(post) {
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		if(r.readyState != 4) return;
		var s = function($this) {
			var $r;
			try {
				$r = r.status;
			}
			catch( $e68 ) {
				{
					var e = $e68;
					$r = null;
				}
			}
			return $r;
		}(this);
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText);
		else switch(s) {
		case null:{
			me.onError("Failed to connect or resolve host");
		}break;
		case 12029:{
			me.onError("Failed to connect to host");
		}break;
		case 12007:{
			me.onError("Unknown host");
		}break;
		default:{
			me.onError("Http Error #" + r.status);
		}break;
		}
	}
	r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true;
	else { var $it69 = this.params.keys();
	while( $it69.hasNext() ) { var p = $it69.next();
	{
		if(uri == null) uri = "";
		else uri += "&";
		uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
	}
	}}
	try {
		if(post) r.open("POST",this.url,this.async);
		else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + ((question?"?":"&")) + uri,this.async);
			uri = null;
		}
		else r.open("GET",this.url,this.async);
	}
	catch( $e70 ) {
		{
			var e = $e70;
			{
				this.onError(e.toString());
				return;
			}
		}
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	{ var $it71 = this.headers.keys();
	while( $it71.hasNext() ) { var h = $it71.next();
	r.setRequestHeader(h,this.headers.get(h));
	}}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.__class__ = haxe.Http;
xinf.geom.SkewX = function(a) { if( a === $_ ) return; {
	this.a = a;
}}
xinf.geom.SkewX.__name__ = ["xinf","geom","SkewX"];
xinf.geom.SkewX.prototype.a = null;
xinf.geom.SkewX.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	if(Std["is"](t,xinf.geom.SkewX)) {
		return new xinf.geom.SkewX(this.a + t.a);
	}
	return new xinf.geom.Concatenate(this,t);
}
xinf.geom.SkewX.prototype.apply = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).apply(p);
}
xinf.geom.SkewX.prototype.applyInverse = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).applyInverse(p);
}
xinf.geom.SkewX.prototype.distanceTo = function(p) {
	if(Std["is"](p,xinf.geom.Identity) || !Std["is"](p,xinf.geom.SkewX)) return Math.abs(this.a);
	var q = p;
	return (Math.abs(q.a - this.a));
}
xinf.geom.SkewX.prototype.getMatrix = function() {
	return { a : 1., b : 0., c : Math.tan(this.a), d : 1., tx : 0., ty : 0.}
}
xinf.geom.SkewX.prototype.getScale = function() {
	return { x : .0, y : .0}
}
xinf.geom.SkewX.prototype.getTranslation = function() {
	return { x : .0, y : .0}
}
xinf.geom.SkewX.prototype.interpolateWith = function(p,f) {
	if(Std["is"](p,xinf.geom.Identity)) return new xinf.geom.SkewX(this.a * (1 - f));
	if(!Std["is"](p,xinf.geom.SkewX)) return this;
	var q = p;
	return (new xinf.geom.SkewX(this.a + ((q.a - this.a) * f)));
}
xinf.geom.SkewX.prototype.isIdentity = function() {
	return (this.a == 0);
}
xinf.geom.SkewX.prototype.toString = function() {
	return ("skewX(" + (this.a * xinf.geom.TransformParser.R2D) + ")");
}
xinf.geom.SkewX.prototype.__class__ = xinf.geom.SkewX;
xinf.geom.SkewX.__interfaces__ = [xinf.geom.Transform];
xinf.ony.erno.TextArea = function(traits) { if( traits === $_ ) return; {
	xinf.ony.TextArea.apply(this,[traits]);
}}
xinf.ony.erno.TextArea.__name__ = ["xinf","ony","erno","TextArea"];
xinf.ony.erno.TextArea.__super__ = xinf.ony.TextArea;
for(var k in xinf.ony.TextArea.prototype ) xinf.ony.erno.TextArea.prototype[k] = xinf.ony.TextArea.prototype[k];
xinf.ony.erno.TextArea.prototype.drawContents = function(g) {
	xinf.ony.TextArea.prototype.drawContents.apply(this,[g]);
	if(this.get_fill() == xinf.ony.type.Paint.None) return;
	if(this.format == null) {
		var family = this.get_font_family();
		var size = this.get_font_size();
		this.format = xinf.erno.TextFormat.create((family != null?family.list[0]:null),size);
		this.format.assureLoaded();
	}
	var r = js.Lib.document.createElement("div");
	r.style.position = "absolute";
	r.style.overflow = "hidden";
	if(this.get_editable() != xinf.ony.type.Editability.None) null;
	else {
		r.style.cursor = "default";
	}
	r.style.left = "" + Math.round(this.get_x());
	r.style.top = "" + Math.round(this.get_y());
	r.style.width = "" + Math.round(this.get_x());
	r.style.height = "" + Math.round(this.get_y());
	var $e = (this.get_fill());
	switch( $e[1] ) {
	case 2:
	var b = $e[4], g1 = $e[3], red = $e[2];
	{
		r.style.color = xinf.erno.js.JSRenderer.colorToRGBString(red,g1,b);
	}break;
	default:{
		throw ("Fill " + this.get_fill() + " not supported for text");
	}break;
	}
	this.format.apply(r);
	r.innerHTML = this.get_text().split("\n").join("<br/>");
	g["native"](r);
}
xinf.ony.erno.TextArea.prototype.format = null;
xinf.ony.erno.TextArea.prototype.__class__ = xinf.ony.erno.TextArea;
xinf.ony.erno.Use = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Use.apply(this,[traits]);
}}
xinf.ony.erno.Use.__name__ = ["xinf","ony","erno","Use"];
xinf.ony.erno.Use.__super__ = xinf.ony.Use;
for(var k in xinf.ony.Use.prototype ) xinf.ony.erno.Use.prototype[k] = xinf.ony.Use.prototype[k];
xinf.ony.erno.Use.prototype.clone = null;
xinf.ony.erno.Use.prototype.cloneNode = function(deep) {
	if(this.cycleLock == true) {
		throw ("Cycle in Use reference: " + this.get_href());
	}
	var n = xinf.ony.Use.prototype.cloneNode.apply(this,[deep]);
	return n;
}
xinf.ony.erno.Use.prototype.cycleLock = null;
xinf.ony.erno.Use.prototype.draw = function(g) {
	if(this.clone != null) {
		this.clone.draw(g);
		g.setTransform(this.wrapper,this.get_x(),this.get_y(),1,0,0,1);
		g.startObject(this.wrapper);
		g.showObject(this.clone.xid);
		g.endObject();
	}
	xinf.ony.Use.prototype.draw.apply(this,[g]);
}
xinf.ony.erno.Use.prototype.drawContents = function(g) {
	if(this.wrapper != null) {
		g.showObject(this.wrapper);
	}
}
xinf.ony.erno.Use.prototype.onLoad = function() {
	this.cycleLock = true;
	xinf.ony.Use.prototype.onLoad.apply(this,[]);
	if(this.clone != null) this.clone.onLoad();
	this.cycleLock = false;
}
xinf.ony.erno.Use.prototype.set_peer = function(v) {
	this.clone = v.cloneNode(true);
	this.clone.parentElement = this;
	this.clone.styleChanged();
	this.clone.construct();
	this.wrapper = xinf.erno.Runtime.getRuntime().getNextId();
	return xinf.ony.Use.prototype.set_peer.apply(this,[v]);
}
xinf.ony.erno.Use.prototype.wrapper = null;
xinf.ony.erno.Use.prototype.__class__ = xinf.ony.erno.Use;
xinf.ony.Link = function(traits) { if( traits === $_ ) return; {
	xinf.ony.erno.Group.apply(this,[traits]);
	this.addEventListener(xinf.event.UIEvent.ACTIVATE,$closure(this,"onActivate"));
}}
xinf.ony.Link.__name__ = ["xinf","ony","Link"];
xinf.ony.Link.__super__ = xinf.ony.erno.Group;
for(var k in xinf.ony.erno.Group.prototype ) xinf.ony.Link.prototype[k] = xinf.ony.erno.Group.prototype[k];
xinf.ony.Link.prototype.get_href = function() {
	return this.getTrait("href",String);
}
xinf.ony.Link.prototype.href = null;
xinf.ony.Link.prototype.onActivate = function(e) {
	this.postEvent(new xinf.event.LinkEvent(xinf.event.LinkEvent.ACTUATE,this.get_href()),{ fileName : "Link.hx", lineNumber : 29, className : "xinf.ony.Link", methodName : "onActivate"});
}
xinf.ony.Link.prototype.set_href = function(v) {
	this.setTrait("href",v);
	return v;
}
xinf.ony.Link.prototype.__class__ = xinf.ony.Link;
xinf.ony.erno.Svg = function(traits) { if( traits === $_ ) return; {
	xinf.ony.Svg.apply(this,[traits]);
}}
xinf.ony.erno.Svg.__name__ = ["xinf","ony","erno","Svg"];
xinf.ony.erno.Svg.__super__ = xinf.ony.Svg;
for(var k in xinf.ony.Svg.prototype ) xinf.ony.erno.Svg.prototype[k] = xinf.ony.Svg.prototype[k];
xinf.ony.erno.Svg.prototype.__class__ = xinf.ony.erno.Svg;
xinf.erno.js.JSTextFormat = function(family,size,bold,italic) { if( family === $_ ) return; {
	xinf.erno.TextFormat.apply(this,[family,size,bold,italic]);
	if(xinf.erno.js.JSTextFormat.measure == null) {
		xinf.erno.js.JSTextFormat.measure = js.Lib.document.createElement("div");
		xinf.erno.js.JSTextFormat.measure.style.position = "absolute";
		xinf.erno.js.JSTextFormat.measure.style.bottom = "-200";
		xinf.erno.js.JSTextFormat.measure.style.background = "#fff";
		js.Lib.document.body.appendChild(xinf.erno.js.JSTextFormat.measure);
	}
}}
xinf.erno.js.JSTextFormat.__name__ = ["xinf","erno","js","JSTextFormat"];
xinf.erno.js.JSTextFormat.__super__ = xinf.erno.TextFormat;
for(var k in xinf.erno.TextFormat.prototype ) xinf.erno.js.JSTextFormat.prototype[k] = xinf.erno.TextFormat.prototype[k];
xinf.erno.js.JSTextFormat.measure = null;
xinf.erno.js.JSTextFormat.prototype.apply = function(to) {
	to.style.fontFamily = (this.family == "sans"?"Bitstream Vera Sans, Arial, sans-serif":this.family);
	to.style.fontStyle = (this.italic?"italic":"normal");
	to.style.fontWeight = (this.bold?"bold":"normal");
	to.style.fontSize = this.size;
}
xinf.erno.js.JSTextFormat.prototype.load = function() {
	null;
}
xinf.erno.js.JSTextFormat.prototype.textSize = function(text) {
	this.assureLoaded();
	this.apply(xinf.erno.js.JSTextFormat.measure);
	xinf.erno.js.JSTextFormat.measure.innerHTML = text.split("\n").join("<br/>");
	return { x : 1. * xinf.erno.js.JSTextFormat.measure.offsetWidth, y : 1. * xinf.erno.js.JSTextFormat.measure.offsetHeight}
}
xinf.erno.js.JSTextFormat.prototype.__class__ = xinf.erno.js.JSTextFormat;
xinf.erno.js.JSRuntime = function(p) { if( p === $_ ) return; {
	xinf.erno.SimpleRuntime.apply(this,[]);
	this._eventSource = new xinf.erno.js.JSEventSource(this);
	this.frame = 0;
}}
xinf.erno.js.JSRuntime.__name__ = ["xinf","erno","js","JSRuntime"];
xinf.erno.js.JSRuntime.__super__ = xinf.erno.SimpleRuntime;
for(var k in xinf.erno.SimpleRuntime.prototype ) xinf.erno.js.JSRuntime.prototype[k] = xinf.erno.SimpleRuntime.prototype[k];
xinf.erno.js.JSRuntime.defaultRoot = null;
xinf.erno.js.JSRuntime.prototype._eventSource = null;
xinf.erno.js.JSRuntime.prototype.frame = null;
xinf.erno.js.JSRuntime.prototype.getDefaultRoot = function() {
	if(xinf.erno.js.JSRuntime.defaultRoot == null) {
		xinf.erno.js.JSRuntime.defaultRoot = js.Lib.document.createElement("div");
		js.Lib.document.body.appendChild(xinf.erno.js.JSRuntime.defaultRoot);
	}
	return xinf.erno.js.JSRuntime.defaultRoot;
}
xinf.erno.js.JSRuntime.prototype.run = function() {
	this._eventSource.rootResized(null);
	window.setInterval("xinf.erno.Runtime.getRuntime().step()",1000 / 25);
}
xinf.erno.js.JSRuntime.prototype.step = function() {
	this.postEvent(new xinf.event.FrameEvent(xinf.event.FrameEvent.ENTER_FRAME,this.frame++,0),{ fileName : "JSRuntime.hx", lineNumber : 36, className : "xinf.erno.js.JSRuntime", methodName : "step"});
}
xinf.erno.js.JSRuntime.prototype.__class__ = xinf.erno.js.JSRuntime;
xinf.ony.type.IntList = function(l) { if( l === $_ ) return; {
	this.list = l;
}}
xinf.ony.type.IntList.__name__ = ["xinf","ony","type","IntList"];
xinf.ony.type.IntList.prototype.list = null;
xinf.ony.type.IntList.prototype.toString = function() {
	if(this.list == null) return "";
	return this.list.join(",");
}
xinf.ony.type.IntList.prototype.__class__ = xinf.ony.type.IntList;
org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand.__name__ = ["org","puremvc","haxe","demos","xinf","stopwatch","controller","ResetDisplayCommand"];
org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand.prototype.execute = function(note) {
	var proxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("StopWatchProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	proxy.resetTimer();
}
org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand.prototype.__class__ = org.puremvc.haxe.demos.xinf.stopwatch.controller.ResetDisplayCommand;
xinf.geom.Scale = function(x,y) { if( x === $_ ) return; {
	this.x = x;
	this.y = y;
}}
xinf.geom.Scale.__name__ = ["xinf","geom","Scale"];
xinf.geom.Scale.prototype.add = function(t) {
	if(t.isIdentity()) return this;
	if(Std["is"](t,xinf.geom.Scale)) {
		return new xinf.geom.Scale(this.x * t.x,this.y * t.y);
	}
	return new xinf.geom.Concatenate(this,t);
}
xinf.geom.Scale.prototype.apply = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).apply(p);
}
xinf.geom.Scale.prototype.applyInverse = function(p) {
	return new xinf.geom.Matrix(this.getMatrix()).applyInverse(p);
}
xinf.geom.Scale.prototype.distanceTo = function(p) {
	if(Std["is"](p,xinf.geom.Identity) || !Std["is"](p,xinf.geom.Scale)) return Math.abs(this.x) + Math.abs(this.y);
	var q = p;
	return (Math.abs(q.x - this.x) + Math.abs(q.y - this.y));
}
xinf.geom.Scale.prototype.getMatrix = function() {
	return { a : this.x, b : 0., c : 0., d : this.y, tx : 0., ty : 0.}
}
xinf.geom.Scale.prototype.getScale = function() {
	return { x : this.x, y : this.y}
}
xinf.geom.Scale.prototype.getTranslation = function() {
	return { x : .0, y : .0}
}
xinf.geom.Scale.prototype.interpolateWith = function(p,f) {
	if(Std["is"](p,xinf.geom.Identity)) return new xinf.geom.Scale(this.x * (1 - f),this.y * (1 - f));
	if(!Std["is"](p,xinf.geom.Scale)) return this;
	var q = p;
	return (new xinf.geom.Scale(this.x + ((q.x - this.x) * f),this.y + ((q.y - this.y) * f)));
}
xinf.geom.Scale.prototype.isIdentity = function() {
	return (this.x == 1. && this.y == 1.);
}
xinf.geom.Scale.prototype.toString = function() {
	return ("scale(" + this.x + "," + this.y + ")");
}
xinf.geom.Scale.prototype.x = null;
xinf.geom.Scale.prototype.y = null;
xinf.geom.Scale.prototype.__class__ = xinf.geom.Scale;
xinf.geom.Scale.__interfaces__ = [xinf.geom.Transform];
xinf.xml.URL = function(s) { if( s === $_ ) return; {
	this.parse(s);
}}
xinf.xml.URL.__name__ = ["xinf","xml","URL"];
xinf.xml.URL.prototype.fetch = function(onData,onError) {
	if(onError == null) {
		var self = this;
		onError = function(e) {
			haxe.Log.trace("Error fetching document '" + self + "': " + e + "\n" + haxe.Stack.toString(haxe.Stack.exceptionStack()),{ fileName : "URL.hx", lineNumber : 122, className : "xinf.xml.URL", methodName : "fetch"});
			throw ("Could not load document");
		}
	}
	try {
		if(this.protocol == "resource") {
			var rname = (this.host != null?this.host + this.path + this.filename:this.path + this.filename);
			var data = haxe.Resource.getString(rname);
			if(data == null) throw ("Resource not found: " + rname);
			onData(data);
			return;
		}
		var request = new haxe.Http(this.toString());
		request.onError = onError;
		request.onData = onData;
		request.request(false);
	}
	catch( $e72 ) {
		{
			var e = $e72;
			{
				if(onError != null) onError(e);
			}
		}
	}
}
xinf.xml.URL.prototype.filename = null;
xinf.xml.URL.prototype.getData = function() {
	if(this.protocol != "data") return null;
	var d = this.path.split(",");
	if(d.length != 2) throw ("Unhandled data: URL: " + this);
	var format = d[0].split(";");
	if(format[format.length - 1] != "base64") throw ("data: URL of format " + format + " not understood. Can only handle base64.");
	var base64 = d[1];
	throw ("Where have all the StringTools.baseDecode gone?");
	return ("");
}
xinf.xml.URL.prototype.getRelativeURL = function(rel) {
	var rel1 = new xinf.xml.URL(rel);
	if(rel1.isAbsolute()) return rel1;
	var url = new xinf.xml.URL(this.pathString() + rel1.path + rel1.filename);
	return url;
}
xinf.xml.URL.prototype.host = null;
xinf.xml.URL.prototype.isAbsolute = function() {
	return (this.path.charAt(0) == "/" || this.protocol == "data");
}
xinf.xml.URL.prototype.parse = function(s) {
	var r = new EReg("([a-z]+)://([a-zA-Z0-9-\\.]*)(:([0-9]+))?(.*)","");
	if(s == null) throw ("URL is null");
	if(StringTools.startsWith(s,"data:")) {
		this.protocol = "data";
		this.host = null;
		this.port = 0;
		this.path = s.substr(5);
	}
	else if(r.match(s)) {
		this.protocol = r.matched(1);
		this.host = r.matched(2);
		this.port = Std.parseInt(r.matched(4));
		if(this.port == 0) {
			switch(this.protocol) {
			case "http":{
				this.port = 80;
			}break;
			case "https":{
				this.port = 443;
			}break;
			case "ftp":{
				this.port = 21;
			}break;
			default:{
				this.port = 0;
			}break;
			}
		}
		this.path = r.matched(5);
		if(this.protocol == "file") {
			if(this.path != "") this.path = this.host + "/" + this.path;
			else this.path = this.host;
			this.host = "";
		}
	}
	else {
		this.host = null;
		this.port = 0;
		this.path = s;
	}
	if(this.path.charAt(this.path.length - 1) != "/") {
		var p = this.path.split("/");
		this.filename = p.pop();
		this.path = p.join("/");
		if(p.length > 0) this.path += "/";
	}
	else {
		this.filename = "";
	}
}
xinf.xml.URL.prototype.path = null;
xinf.xml.URL.prototype.pathString = function() {
	var h = "";
	if(this.protocol != null) {
		if(this.protocol == "data") {
			h = "data:";
		}
		else h = this.protocol + "://";
	}
	if(this.host != null) {
		h = h + this.host;
	}
	if(this.port != 0) {
		h = h + ":" + this.port;
	}
	return (h + this.path);
}
xinf.xml.URL.prototype.port = null;
xinf.xml.URL.prototype.protocol = null;
xinf.xml.URL.prototype.toString = function() {
	return (this.pathString() + this.filename);
}
xinf.xml.URL.prototype.__class__ = xinf.xml.URL;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
	Math.__name__ = ["Math"];
}
{
	xinf.erno.Keys.keys = new IntHash();
	xinf.erno.Keys.keys.set(8,"backspace");
	xinf.erno.Keys.keys.set(9,"tab");
	xinf.erno.Keys.keys.set(27,"escape");
	xinf.erno.Keys.keys.set(32," ");
	xinf.erno.Keys.keys.set(127,"delete");
	xinf.erno.Keys.keys.set(33,"page up");
	xinf.erno.Keys.keys.set(34,"page down");
	xinf.erno.Keys.keys.set(37,"left");
	xinf.erno.Keys.keys.set(38,"up");
	xinf.erno.Keys.keys.set(39,"right");
	xinf.erno.Keys.keys.set(40,"down");
}
{
	haxe.Resource.content = [];
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	Date.now = function() {
		return new Date();
	}
	Date.fromTime = function(t) {
		var d = new Date();
		d["setTime"](t);
		return d;
	}
	Date.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d = new Date();
			d["setTime"](0);
			d["setUTCHours"](k[0]);
			d["setUTCMinutes"](k[1]);
			d["setUTCSeconds"](k[2]);
			return d;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	Date.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + ((m < 10?"0" + m:"" + m)) + "-" + ((d < 10?"0" + d:"" + d)) + " " + ((h < 10?"0" + h:"" + h)) + ":" + ((mi < 10?"0" + mi:"" + mi)) + ":" + ((s < 10?"0" + s:"" + s));
	}
	Date.prototype.__class__ = Date;
	Date.__name__ = ["Date"];
}
{
	js["XMLHttpRequest"] = (window.XMLHttpRequest?XMLHttpRequest:(window.ActiveXObject?function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch( $e73 ) {
			{
				var e = $e73;
				{
					try {
						return new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch( $e74 ) {
						{
							var e1 = $e74;
							{
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
	}:function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this)));
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
	var svgns = "http://www.w3.org/2000/svg";
	xinf.xml.Document.addToBinding(svgns,"g",xinf.ony.erno.Group);
	xinf.xml.Document.addToBinding(svgns,"rect",xinf.ony.erno.Rectangle);
	xinf.xml.Document.addToBinding(svgns,"line",xinf.ony.erno.Line);
	xinf.xml.Document.addToBinding(svgns,"polygon",xinf.ony.erno.Polygon);
	xinf.xml.Document.addToBinding(svgns,"polyline",xinf.ony.erno.Polyline);
	xinf.xml.Document.addToBinding(svgns,"ellipse",xinf.ony.erno.Ellipse);
	xinf.xml.Document.addToBinding(svgns,"circle",xinf.ony.erno.Circle);
	xinf.xml.Document.addToBinding(svgns,"text",xinf.ony.erno.Text);
	xinf.xml.Document.addToBinding(svgns,"textArea",xinf.ony.erno.TextArea);
	xinf.xml.Document.addToBinding(svgns,"path",xinf.ony.erno.Path);
	xinf.xml.Document.addToBinding(svgns,"image",xinf.ony.erno.Image);
	xinf.xml.Document.addToBinding(svgns,"svg",xinf.ony.erno.Svg);
	xinf.xml.Document.addToBinding(svgns,"use",xinf.ony.erno.Use);
	xinf.xml.Document.addToBinding(svgns,"defs",xinf.ony.erno.Definitions);
	xinf.xml.Document.addToBinding(svgns,"a",xinf.ony.Link);
	xinf.xml.Document.addToBinding(svgns,"linearGradient",xinf.ony.erno.LinearGradient);
	xinf.xml.Document.addToBinding(svgns,"radialGradient",xinf.ony.erno.RadialGradient);
	xinf.xml.Document.addToBinding(svgns,"solidColor",xinf.ony.erno.SolidColor);
	xinf.xml.Document.addToBinding(svgns,"style",xinf.ony.Style);
}
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
xinf.event.MouseEvent.MOUSE_DOWN = new xinf.event.EventKind("mouseDown",true);
xinf.event.MouseEvent.MOUSE_UP = new xinf.event.EventKind("mouseUp");
xinf.event.MouseEvent.MOUSE_MOVE = new xinf.event.EventKind("mouseMove");
xinf.event.MouseEvent.MOUSE_OVER = new xinf.event.EventKind("mouseOver",true);
xinf.event.MouseEvent.MOUSE_OUT = new xinf.event.EventKind("mouseOut",true);
xinf.xml.XMLElement.TRAITS = { base : new xinf.traits.StringTrait(), id : new xinf.traits.StringTrait(), name : new xinf.traits.StringTrait()}
xinf.xml.XMLElement.AttrReg = new EReg("[\\-\\_:]","g");
xinf.style.StyledElement.ws_split = new EReg("[ \\r\\n\\t]+","g");
xinf.ony.traits.TransformTrait.D2R = ((2. * Math.PI) / 360.);
xinf.ony.traits.TransformTrait.R2D = (360. / (2. * Math.PI));
xinf.ony.traits.TransformTrait.splitNumbers = new EReg("[ ,\\r\\n\\t]+","g");
xinf.ony.traits.TransformTrait.translate = new EReg("translate\\([ \\t\\r\\n]*([0-9eE\\.\\-]+)([ \\t\\r\\n,]+[ \\t\\r\\n]*([0-9eE\\.\\-]+)[ \\t\\r\\n]*)?\\)","");
xinf.ony.traits.TransformTrait.rotate = new EReg("rotate\\(([0-9eE\\.\\-]+)([ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n]?)?\\)","");
xinf.ony.traits.TransformTrait.matrix = new EReg("matrix\\(([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)\\)","");
xinf.ony.traits.TransformTrait.scale = new EReg("scale\\(([0-9eE\\.\\-, ]+)\\)","");
xinf.ony.traits.TransformTrait.skewX = new EReg("skewX\\((\\-*[0-9eE\\.]+)\\)","");
xinf.ony.traits.TransformTrait.skewY = new EReg("skewY\\((\\-*[0-9eE\\.]+)\\)","");
xinf.ony.traits.TransformTrait.transform = new EReg("([a-zA-Z]+\\([0-9eE\\.\\-, ]+\\))","");
xinf.traits.FloatTrait.numeric = new EReg("^([\\-+]?[0-9\\.]+([eE][\\-+]?[0-9]+)?)$","");
xinf.traits.BoundedFloatTrait.numeric = new EReg("^([0-9\\.]+)$","");
xinf.ony.traits.PaintTrait.url = new EReg("url\\((.*)\\)","i");
xinf.ony.traits.PaintTrait.hexcolor = new EReg("^#([0-9a-f]+)$","i");
xinf.ony.traits.PaintTrait.rgbcolor = new EReg("^rgb\\([\\r\\n\\t ]*([0-9]+)[\\r\\n\\t ]*,[\\r\\n\\t ]*([0-9]+)[\\r\\n\\t ]*,[\\r\\n\\t ]*([0-9]+)[\\r\\n\\t ]*\\)$","");
xinf.ony.traits.PaintTrait.rgbpercentcolor = new EReg("^rgb\\([\\r\\n\\t ]*([0-9\\.]+)[\\r\\n\\t ]*%[\\r\\n\\t ]*,[\\r\\n\\t ]*([0-9\\.]+)[\\r\\n\\t ]*%[\\r\\n\\t ]*,[\\r\\n\\t ]*([0-9\\.]+)[\\r\\n\\t ]*%[\\r\\n\\t ]*\\)$","");
xinf.ony.type.Length.TYPE_UNKNOWN = "??";
xinf.ony.type.Length.TYPE_NUMBER = "";
xinf.ony.type.Length.TYPE_PERCENTAGE = "%";
xinf.ony.type.Length.TYPE_EMS = "em";
xinf.ony.type.Length.TYPE_EXS = "ex";
xinf.ony.type.Length.TYPE_PX = "px";
xinf.ony.type.Length.TYPE_CM = "cm";
xinf.ony.type.Length.TYPE_MM = "mm";
xinf.ony.type.Length.TYPE_IN = "in";
xinf.ony.type.Length.TYPE_PT = "pt";
xinf.ony.type.Length.TYPE_PC = "pc";
xinf.ony.type.Length.pixSize = 0.28;
xinf.traits.IntTrait.numeric = new EReg("^([0-9\\.\\-]+)$","");
xinf.ony.Element.TRAITS = { transform : new xinf.ony.traits.TransformTrait(), display : new xinf.traits.EnumTrait(xinf.ony.type.Display,null,xinf.ony.type.Display.Inline), visibility : new xinf.traits.EnumTrait(xinf.ony.type.Visibility,null,xinf.ony.type.Visibility.Visible), opacity : new xinf.traits.BoundedFloatTrait(0,1,1), color : new xinf.ony.traits.PaintTrait(null), fill : new xinf.ony.traits.PaintTrait(xinf.ony.type.Paint.None), fillopacity : new xinf.traits.BoundedFloatTrait(0,1,1), stroke : new xinf.ony.traits.PaintTrait(xinf.ony.type.Paint.None), strokewidth : new xinf.ony.traits.LengthTrait(new xinf.ony.type.Length(null,1)), strokeopacity : new xinf.traits.BoundedFloatTrait(0,1,1), strokelinejoin : new xinf.traits.EnumTrait(xinf.ony.type.JoinStyle,"join",xinf.ony.type.JoinStyle.MiterJoin), strokelinecap : new xinf.traits.EnumTrait(xinf.ony.type.CapsStyle,"caps",xinf.ony.type.CapsStyle.ButtCaps), strokemiterlimit : new xinf.traits.FloatTrait(4), strokedasharray : new xinf.ony.traits.IntListTrait(), strokedashoffset : new xinf.traits.IntTrait(), fontfamily : new xinf.ony.traits.StringListTrait(), fontsize : new xinf.ony.traits.LengthTrait(new xinf.ony.type.Length(null,10)), fontweight : new xinf.ony.traits.StringChoiceTrait(["normal","bold"]), textanchor : new xinf.traits.EnumTrait(xinf.ony.type.TextAnchor,"",xinf.ony.type.TextAnchor.Start)}
xinf.ony.Line.tagName = "line";
xinf.ony.Line.TRAITS = { x1 : new xinf.ony.traits.LengthTrait(), y1 : new xinf.ony.traits.LengthTrait(), x2 : new xinf.ony.traits.LengthTrait(), y2 : new xinf.ony.traits.LengthTrait()}
xinf.ony.traits.PointListTrait.pointSplit = new EReg("[ ,]+","g");
xinf.ony.Gradient.TRAITS = { gradientTransform : new xinf.ony.traits.TransformTrait(), gradientUnits : new xinf.traits.EnumTrait(xinf.ony.type.GradientUnits,null), spreadMethod : new xinf.traits.EnumTrait(xinf.ony.type.SpreadMethod,"spread",null)}
xinf.ony.RadialGradient.TRAITS = { cx : new xinf.traits.FloatTrait(.5), cy : new xinf.traits.FloatTrait(.5), r : new xinf.traits.FloatTrait(.5), fx : new xinf.traits.FloatTrait(.5), fy : new xinf.traits.FloatTrait(.5)}
xinf.ony.RadialGradient.tagName = "radialGradient";
xinf.ony.Circle.tagName = "circle";
xinf.ony.Circle.TRAITS = { cx : new xinf.ony.traits.LengthTrait(), cy : new xinf.ony.traits.LengthTrait(), r : new xinf.ony.traits.LengthTrait()}
xinf.ony.LinearGradient.TRAITS = { x1 : new xinf.traits.FloatTrait(0), y1 : new xinf.traits.FloatTrait(0), x2 : new xinf.traits.FloatTrait(1), y2 : new xinf.traits.FloatTrait(0)}
xinf.ony.LinearGradient.tagName = "linearGradient";
org.puremvc.haxe.patterns.mediator.Mediator.NAME = "Mediator";
org.puremvc.haxe.utilities.statemachine.StateMachine.NAME = "StateMachine";
org.puremvc.haxe.utilities.statemachine.StateMachine.ACTION = "StateMachine" + "/notes/action";
org.puremvc.haxe.utilities.statemachine.StateMachine.CHANGED = "StateMachine" + "/notes/changed";
org.puremvc.haxe.utilities.statemachine.StateMachine.CANCEL = "StateMachine" + "/notes/cancel";
xinf.ony.Group.tagName = "g";
xinf.ony.Definitions.tagName = "defs";
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.STARTUP = "startup";
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.ENSURE_TIMER = "ensureTimer";
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.RESET_DISPLAY = "resetDisplay";
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.FREEZE_DISPLAY = "freezeDisplay";
org.puremvc.haxe.demos.xinf.stopwatch.ApplicationFacade.STOP_TIMER = "stopTimer";
xinf.ony.traits.PreserveAspectRatioTrait.ws = new EReg("[ \\r\\n\\t]+","g");
xinf.ony.traits.PreserveAspectRatioTrait.par = new EReg("x(M[indax]+)Y(M[indax]+)","");
xinf.ony.Image.tagName = "image";
xinf.ony.Image.TRAITS = { x : new xinf.ony.traits.LengthTrait(), y : new xinf.ony.traits.LengthTrait(), width : new xinf.ony.traits.LengthTrait(), height : new xinf.ony.traits.LengthTrait(), href : new xinf.traits.StringTrait(), preserveAspectRatio : new xinf.ony.traits.PreserveAspectRatioTrait(xinf.ony.type.PreserveAspectRatio.Preserve(xinf.ony.type.Align.Mid,xinf.ony.type.Align.Mid))}
xinf.event.ScrollEvent.SCROLL_STEP = new xinf.event.EventKind("scrollStep",true);
xinf.event.ScrollEvent.SCROLL_LEAP = new xinf.event.EventKind("scrollLeap",true);
xinf.event.ScrollEvent.SCROLL_TO = new xinf.event.EventKind("scrollTo");
xinf.geom.TransformParser.D2R = ((2. * Math.PI) / 360.);
xinf.geom.TransformParser.R2D = (360. / (2. * Math.PI));
xinf.geom.TransformParser.splitNumbers = new EReg("[,\\r\\n\\t]","g");
xinf.geom.TransformParser.translate = new EReg("translate\\([ \\t\\r\\n]*([0-9eE\\.\\-]+)[ \\t\\r\\n,]+[ \\t\\r\\n]*([0-9eE\\.\\-]+)[ \\t\\r\\n]*\\)","");
xinf.geom.TransformParser.rotate = new EReg("rotate\\(([0-9eE\\.\\-]+)([ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n]?)?\\)","");
xinf.geom.TransformParser.matrix = new EReg("matrix\\(([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)[ \\t\\r\\n,]+([0-9eE\\.\\-]+)\\)","");
xinf.geom.TransformParser.scale = new EReg("scale\\(([0-9eE\\.\\-, ]+)\\)","");
xinf.geom.TransformParser.skewX = new EReg("skewX\\((\\-*[0-9eE\\.]+)\\)","");
xinf.geom.TransformParser.skewY = new EReg("skewY\\((\\-*[0-9eE\\.]+)\\)","");
xinf.geom.TransformParser.transform = new EReg("([a-zA-Z]+\\([0-9eE\\.\\-, ]+\\))","");
xinf.ony.Path.TRAITS = { d : new xinf.ony.traits.PathTrait()}
xinf.ony.Path.tagName = "path";
xinf.ony.Use.TRAITS = { x : new xinf.ony.traits.LengthTrait(), y : new xinf.ony.traits.LengthTrait(), href : new xinf.traits.StringTrait()}
xinf.ony.TextArea.tagName = "textArea";
xinf.ony.TextArea.TRAITS = { x : new xinf.ony.traits.LengthTrait(), y : new xinf.ony.traits.LengthTrait(), width : new xinf.ony.traits.LengthTrait(), height : new xinf.ony.traits.LengthTrait(), text : new xinf.traits.StringTrait(), editable : new xinf.traits.EnumTrait(xinf.ony.type.Editability,"",xinf.ony.type.Editability.None), line_increment : new xinf.ony.traits.LineIncrementTrait()}
xinf.ony.Style.TRAITS = { type : new xinf.traits.StringTrait(), text : new xinf.traits.StringTrait()}
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
xinf.ony.SolidColor.TRAITS = { solid_opacity : new xinf.traits.BoundedFloatTrait(0,1,1), solid_color : new xinf.ony.traits.PaintTrait(xinf.ony.type.Paint.None)}
xinf.erno.Constants.CAPS_BUTT = 0;
xinf.erno.Constants.CAPS_ROUND = 1;
xinf.erno.Constants.CAPS_SQUARE = 2;
xinf.erno.Constants.JOIN_MITER = 0;
xinf.erno.Constants.JOIN_ROUND = 1;
xinf.erno.Constants.JOIN_BEVEL = 2;
xinf.erno.Constants.SPREAD_PAD = 0;
xinf.erno.Constants.SPREAD_REFLECT = 1;
xinf.erno.Constants.SPREAD_REPEAT = 2;
js.Lib.onerror = null;
xinf.event.FrameEvent.ENTER_FRAME = new xinf.event.EventKind("enterFrame");
xinf.ony.PathParser.commandReg = new EReg("[MmZzLlHhVvCcSsQqTtAa]","");
xinf.event.GeometryEvent.STAGE_SCALED = new xinf.event.EventKind("stageScaled");
xinf.event.GeometryEvent.SIZE_CHANGED = new xinf.event.EventKind("sizeChanged");
org.puremvc.haxe.patterns.proxy.Proxy.NAME = "Proxy";
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.NAME = "StopWatchProxy";
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.SYNC = "StopWatchProxy" + "/notes/sync";
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.TICK = "StopWatchProxy" + "/notes/tick";
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.LAP = "StopWatchProxy" + "/notes/lap";
org.puremvc.haxe.demos.xinf.stopwatch.proxy.StopWatchProxy.RESET = "StopWatchProxy" + "/notes/reset";
xinf.event.ImageLoadEvent.PART_LOADED = new xinf.event.EventKind("imagePartLoaded");
xinf.event.ImageLoadEvent.LOADED = new xinf.event.EventKind("imageLoaded");
xinf.event.ImageLoadEvent.FRAME_AVAILABLE = new xinf.event.EventKind("imageFrameAvailable");
xinf.ony.Rectangle.tagName = "rect";
xinf.ony.Rectangle.TRAITS = { x : new xinf.ony.traits.LengthTrait(), y : new xinf.ony.traits.LengthTrait(), width : new xinf.ony.traits.LengthTrait(), height : new xinf.ony.traits.LengthTrait(), rx : new xinf.ony.traits.LengthTrait(), ry : new xinf.ony.traits.LengthTrait()}
xinf.event.SimpleEvent.QUIT = new xinf.event.EventKind("quit");
xinf.event.SimpleEvent.CHANGED = new xinf.event.EventKind("changed");
StopWatch.NAME = "StopWatch";
StopWatch.ACTION_STOP = "StopWatch" + "/actions/stop";
StopWatch.ACTION_START = "StopWatch" + "/actions/start";
StopWatch.ACTION_RESET = "StopWatch" + "/actions/reset";
StopWatch.ACTION_SPLIT = "StopWatch" + "/actions/split";
StopWatch.ACTION_UNSPLIT = "StopWatch" + "/actions/unsplit";
StopWatch.STATE_READY = "StopWatch" + "/states/ready";
StopWatch.STATE_RUNNING = "StopWatch" + "/states/running";
StopWatch.STATE_PAUSED = "StopWatch" + "/states/paused";
StopWatch.STATE_STOPPED = "StopWatch" + "/states/stopped";
StopWatchEvent.STOP = new xinf.event.EventKind("StopWatch" + "/actions/stop");
StopWatchEvent.START = new xinf.event.EventKind("StopWatch" + "/actions/start");
StopWatchEvent.RESET = new xinf.event.EventKind("StopWatch" + "/actions/reset");
StopWatchEvent.SPLIT = new xinf.event.EventKind("StopWatch" + "/actions/split");
StopWatchEvent.UNSPLIT = new xinf.event.EventKind("StopWatch" + "/actions/unsplit");
xinf.style.StyleParser.split = new EReg("[ \\r\\n\\t]*;[ \\r\\n\\t]*","g");
xinf.style.StyleParser.cssRules = new EReg("\\W*(.*)\\W{\\W(.*)\\W","g");
xinf.style.StyleParser.comma_split = new EReg("[ \\r\\n\\t]*,[ \\r\\n\\t]*","g");
xinf.style.StyleParser.ws_split = new EReg("[ \\r\\n\\t]+","g");
xinf.style.StyleParser.first_s = new EReg("([^ ]+) (([\\*\\+>]) )?(.+)","");
xinf.style.StyleParser.classSel = new EReg("\\.([:a-zA-Z0-9\\-]*)","");
xinf.style.StyleParser.idSel = new EReg("#([a-zA-Z0-9\\-]*)","");
xinf.ony.Ellipse.tagName = "ellipse";
xinf.ony.Ellipse.TRAITS = { cx : new xinf.ony.traits.LengthTrait(), cy : new xinf.ony.traits.LengthTrait(), rx : new xinf.ony.traits.LengthTrait(), ry : new xinf.ony.traits.LengthTrait()}
xinf.ony.Root.width = 0.;
xinf.ony.Root.height = 0.;
xinf.ony.Polygon.TRAITS = { points : new xinf.ony.traits.PointListTrait()}
xinf.ony.Polygon.tagName = "polygon";
org.puremvc.haxe.demos.xinf.stopwatch.view.ApplicationMediator.NAME = "ApplicationMediator";
xinf.event.KeyboardEvent.KEY_DOWN = new xinf.event.EventKind("keyDown");
xinf.event.KeyboardEvent.KEY_UP = new xinf.event.EventKind("keyUp");
xinf.ony.Text.tagName = "text";
xinf.ony.Text.TRAITS = { x : new xinf.ony.traits.LengthTrait(), y : new xinf.ony.traits.LengthTrait(), text : new xinf.traits.StringTrait()}
xinf.ony.Polyline.TRAITS = { points : new xinf.ony.traits.PointListTrait()}
xinf.ony.Polyline.tagName = "polyline";
xinf.ony.Crop.TRAITS = { width : new xinf.traits.FloatTrait(), height : new xinf.traits.FloatTrait()}
xinf.ony.GradientStop.TRAITS = { offset : new xinf.ony.traits.LengthTrait(), stop_opacity : new xinf.traits.BoundedFloatTrait(0,1,1), stop_color : new xinf.ony.traits.PaintTrait()}
xinf.traits.Inherit.inherit = new xinf.traits.Inherit();
xinf.traits.CurrentColor.currentColor = new xinf.traits.CurrentColor();
haxe.Timer.arr = new Array();
xinf.event.UIEvent.ACTIVATE = new xinf.event.EventKind("activate",true);
xinf.event.LinkEvent.ACTUATE = new xinf.event.EventKind("actuate",true);
xinf.style.StyleSheet.DEFAULT = new xinf.style.StyleSheet();
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
xinf.ony.Svg.TRAITS = { x : new xinf.traits.FloatTrait(), y : new xinf.traits.FloatTrait(), width : new xinf.ony.traits.LengthTrait(), height : new xinf.ony.traits.LengthTrait()}
xinf.ony.Svg.tagName = "svg";
xinf.ony.Link.tagName = "a";
xinf.ony.Link.TRAITS = { href : new xinf.traits.StringTrait()}
xinf.xml.URL.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
