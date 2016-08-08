$estr = function() { return js.Boot.__string_rec(this,''); }
org = {}
org.puremvc = {}
org.puremvc.haxe = {}
org.puremvc.haxe.interfaces = {}
org.puremvc.haxe.interfaces.IView = function() { }
org.puremvc.haxe.interfaces.IView.__name__ = ["org","puremvc","haxe","interfaces","IView"];
org.puremvc.haxe.interfaces.IView.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.notifyObservers = null;
org.puremvc.haxe.interfaces.IView.prototype.registerMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.registerObserver = null;
org.puremvc.haxe.interfaces.IView.prototype.removeMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.retrieveMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.__class__ = org.puremvc.haxe.interfaces.IView;
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
org.puremvc.haxe.examples = {}
org.puremvc.haxe.examples.simpleAdmin = {}
org.puremvc.haxe.examples.simpleAdmin.controller = {}
org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","controller","SaveEmployee"];
org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee.prototype.execute = function(note) {
	var proxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("EmployeesProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	var mediator = function($this) {
		var $r;
		var tmp = $this.facade.retrieveMediator("DetailsMediator");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	proxy.saveEmployee(mediator.getEmployeeDetails());
	this.sendNotification("update_list");
}
org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee;
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
org.puremvc.haxe.examples.simpleAdmin.view = {}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator = function(viewComponent) { if( viewComponent === $_ ) return; {
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[null,viewComponent]);
	js.Lib.document.getElementById("employees").onclick = $closure(this,"onEmployeeClick");
	this.employeesProxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("EmployeesProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
}}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","view","EmployeesMediator"];
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.employeesProxy = null;
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.getEmployees = function() {
	return this.viewComponent;
}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.getMediatorName = function() {
	return "EmployeesMediator";
}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.handleNotification = function(notification) {
	switch(notification.getName()) {
	case "update_list":{
		this.updateList();
	}break;
	}
}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.listNotificationInterests = function() {
	return ["update_list"];
}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.onEmployeeClick = function(evt) {
	var id;
	id = evt.target.getAttribute("href").split("#")[1];
	this.sendNotification("employee_selected",id);
}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.updateList = function() {
	this.getEmployees().updateList(this.employeesProxy.getEmployees());
}
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator;
org.puremvc.haxe.interfaces.INotification = function() { }
org.puremvc.haxe.interfaces.INotification.__name__ = ["org","puremvc","haxe","interfaces","INotification"];
org.puremvc.haxe.interfaces.INotification.prototype.getBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.getName = null;
org.puremvc.haxe.interfaces.INotification.prototype.getType = null;
org.puremvc.haxe.interfaces.INotification.prototype.setBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.setType = null;
org.puremvc.haxe.interfaces.INotification.prototype.toString = null;
org.puremvc.haxe.interfaces.INotification.prototype.__class__ = org.puremvc.haxe.interfaces.INotification;
org.puremvc.haxe.examples.simpleAdmin.model = {}
org.puremvc.haxe.examples.simpleAdmin.model.vo = {}
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO = function(id) { if( id === $_ ) return; {
	this._id = id;
}}
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","model","vo","EmployeeVO"];
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.prototype._id = null;
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.prototype.getId = function() {
	return this._id;
}
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.prototype.id = null;
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.prototype.lastname = null;
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.prototype.name = null;
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.prototype.role = null;
org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO;
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator = function(viewComponent) { if( viewComponent === $_ ) return; {
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[null,viewComponent]);
	this.employeesProxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("EmployeesProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
}}
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","view","DetailsMediator"];
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.employeesProxy = null;
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.getEmployeeDetails = function() {
	return this.viewComponent.getDetails();
}
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.getMediatorName = function() {
	return "DetailsMediator";
}
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.getMenu = function() {
	return this.viewComponent;
}
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.handleNotification = function(notification) {
	switch(notification.getName()) {
	case "employee_selected":{
		this.viewComponent.setDetails(this.employeesProxy.getEmployee(notification.getBody()));
	}break;
	case "cleanup_details":{
		this.viewComponent.newEmployee(this.employeesProxy.newEmployeeId());
	}break;
	}
}
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.listNotificationInterests = function() {
	return ["employee_selected","cleanup_details"];
}
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.newEmployee = function(id) {
	this.viewComponent.newEmployee(id);
}
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator;
org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","controller","StartupCommand"];
org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand.prototype.execute = function(note) {
	this.facade.registerProxy(new org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy());
	var menu;
	var menu_container;
	menu_container = js.Lib.document.getElementById("menu");
	menu = new org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu(menu_container);
	this.facade.registerMediator(new org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator(menu));
	var employees;
	var employees_container;
	employees_container = js.Lib.document.getElementById("employees");
	employees = new org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees(employees_container);
	this.facade.registerMediator(new org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator(employees));
	var details;
	var details_container;
	details_container = js.Lib.document.getElementById("details");
	details = new org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails(details_container);
	this.facade.registerMediator(new org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator(details));
}
org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.empty = function() {
	return {}
}
Reflect.hasField = function(o,field) {
	{
		if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
		var arr = Reflect.fields(o);
		{ var $it0 = arr.iterator();
		while( $it0.hasNext() ) { var t = $it0.next();
		if(t == field) return true;
		}}
		return false;
	}
}
Reflect.field = function(o,field) {
	try {
		return o[field];
	}
	catch( $e1 ) {
		{
			var e = $e1;
			{
				return null;
			}
		}
	}
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	{
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
			catch( $e2 ) {
				{
					var e = $e2;
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
	{
		if(!Reflect.hasField(o,f)) return false;
		delete(o[f]);
		return true;
	}
}
Reflect.copy = function(o) {
	var o2 = Reflect.empty();
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			Reflect.setField(o2,f,Reflect.field(o,f));
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
org.puremvc.haxe.core = {}
org.puremvc.haxe.core.view = {}
org.puremvc.haxe.core.view.View = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.view.View.instance = this;
	this.mediatorMap = new Hash();
	this.observerMap = new Hash();
	this.initializeView();
}}
org.puremvc.haxe.core.view.View.__name__ = ["org","puremvc","haxe","core","view","View"];
org.puremvc.haxe.core.view.View.getInstance = function() {
	if(org.puremvc.haxe.core.view.View.instance == null) org.puremvc.haxe.core.view.View.instance = new org.puremvc.haxe.core.view.View();
	return org.puremvc.haxe.core.view.View.instance;
}
org.puremvc.haxe.core.view.View.instance = null;
org.puremvc.haxe.core.view.View.prototype.hasMediator = function(mediatorName) {
	return this.mediatorMap.exists(mediatorName);
}
org.puremvc.haxe.core.view.View.prototype.initializeView = function() {
	null;
}
org.puremvc.haxe.core.view.View.prototype.mediatorMap = null;
org.puremvc.haxe.core.view.View.prototype.notifyObservers = function(notification) {
	if(this.observerMap.exists(notification.getName())) {
		var iterator = this.observerMap.get(notification.getName()).iterator();
		{ var $it3 = iterator;
		while( $it3.hasNext() ) { var observer = $it3.next();
		observer.notifyObserver(notification);
		}}
	}
}
org.puremvc.haxe.core.view.View.prototype.observerMap = null;
org.puremvc.haxe.core.view.View.prototype.registerMediator = function(mediator) {
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
org.puremvc.haxe.core.view.View.prototype.registerObserver = function(notificationName,observer) {
	if(!this.observerMap.exists(notificationName)) this.observerMap.set(notificationName,new List());
	this.observerMap.get(notificationName).add(observer);
}
org.puremvc.haxe.core.view.View.prototype.removeMediator = function(mediatorName) {
	{ var $it4 = this.observerMap.keys();
	while( $it4.hasNext() ) { var notificationName = $it4.next();
	{
		var observers = this.observerMap.get(notificationName);
		{ var $it5 = observers.iterator();
		while( $it5.hasNext() ) { var observer = $it5.next();
		{
			if(observer.compareNotifyContext(this.retrieveMediator(mediatorName)) == true) observers.remove(observer);
		}
		}}
		if(observers.isEmpty()) this.observerMap.remove(notificationName);
	}
	}}
	var mediator = this.mediatorMap.get(mediatorName);
	this.mediatorMap.remove(mediatorName);
	if(mediator != null) mediator.onRemove();
	return mediator;
}
org.puremvc.haxe.core.view.View.prototype.retrieveMediator = function(mediatorName) {
	return this.mediatorMap.get(mediatorName);
}
org.puremvc.haxe.core.view.View.prototype.__class__ = org.puremvc.haxe.core.view.View;
org.puremvc.haxe.core.view.View.__interfaces__ = [org.puremvc.haxe.interfaces.IView];
org.puremvc.haxe.examples.simpleAdmin.ui = {}
org.puremvc.haxe.examples.simpleAdmin.ui.IEmployees = function() { }
org.puremvc.haxe.examples.simpleAdmin.ui.IEmployees.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","ui","IEmployees"];
org.puremvc.haxe.examples.simpleAdmin.ui.IEmployees.prototype.updateList = null;
org.puremvc.haxe.examples.simpleAdmin.ui.IEmployees.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.ui.IEmployees;
org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees = function(container) { if( container === $_ ) return; {
	this._container = container;
}}
org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","ui","JsEmployees"];
org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees.prototype._container = null;
org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees.prototype.getContainer = function() {
	return this._container;
}
org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees.prototype.updateList = function(map) {
	this._container.innerHTML = "";
	{ var $it6 = map.iterator();
	while( $it6.hasNext() ) { var i = $it6.next();
	{
		var a = js.Lib.document.createElement("A");
		a.setAttribute("href","#" + i.getId());
		a.innerHTML = i.name + " " + i.lastname;
		this._container.appendChild(a);
	}
	}}
}
org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees;
org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees.__interfaces__ = [org.puremvc.haxe.examples.simpleAdmin.ui.IEmployees];
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
	return object === this.context;
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
org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","controller","NewEmployee"];
org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee.prototype.execute = function(note) {
	var proxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("EmployeesProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	var mediator = function($this) {
		var $r;
		var tmp = $this.facade.retrieveMediator("DetailsMediator");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	mediator.newEmployee(proxy.newEmployeeId());
}
org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee;
org.puremvc.haxe.examples.simpleAdmin.ui.IDetails = function() { }
org.puremvc.haxe.examples.simpleAdmin.ui.IDetails.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","ui","IDetails"];
org.puremvc.haxe.examples.simpleAdmin.ui.IDetails.prototype.getDetails = null;
org.puremvc.haxe.examples.simpleAdmin.ui.IDetails.prototype.newEmployee = null;
org.puremvc.haxe.examples.simpleAdmin.ui.IDetails.prototype.setDetails = null;
org.puremvc.haxe.examples.simpleAdmin.ui.IDetails.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.ui.IDetails;
org.puremvc.haxe.interfaces.IFacade = function() { }
org.puremvc.haxe.interfaces.IFacade.__name__ = ["org","puremvc","haxe","interfaces","IFacade"];
org.puremvc.haxe.interfaces.IFacade.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasProxy = null;
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
	this.controller = org.puremvc.haxe.core.controller.Controller.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeFacade = function() {
	this.initializeModel();
	this.initializeController();
	this.initializeView();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeModel = function() {
	if(this.model != null) return;
	this.model = org.puremvc.haxe.core.model.Model.getInstance();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeView = function() {
	if(this.view != null) return;
	this.view = org.puremvc.haxe.core.view.View.getInstance();
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
	var mediator;
	if(this.view != null) mediator = this.view.removeMediator(mediatorName);
	return mediator;
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeProxy = function(proxyName) {
	var proxy;
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
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.proxy.Proxy.apply(this,["EmployeesProxy",new IntHash()]);
}}
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","model","EmployeesProxy"];
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.__super__ = org.puremvc.haxe.patterns.proxy.Proxy;
for(var k in org.puremvc.haxe.patterns.proxy.Proxy.prototype ) org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype[k] = org.puremvc.haxe.patterns.proxy.Proxy.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype.getEmployee = function(id) {
	return this.getEmployees().get(id);
}
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype.getEmployees = function() {
	return this.data;
}
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype.getNewID = function() {
	var id = 1;
	{ var $it7 = this.getEmployees().keys();
	while( $it7.hasNext() ) { var i = $it7.next();
	{
		if(i >= id) {
			id = i;
			id++;
		}
	}
	}}
	return id;
}
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype.newEmployeeId = function() {
	var id = this.getNewID();
	return id;
}
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype.removeEmployee = function(id) {
	this.getEmployees().remove(id);
}
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype.saveEmployee = function(vo) {
	this.data.set(vo.getId(),vo);
}
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy;
org.puremvc.haxe.interfaces.IController = function() { }
org.puremvc.haxe.interfaces.IController.__name__ = ["org","puremvc","haxe","interfaces","IController"];
org.puremvc.haxe.interfaces.IController.prototype.executeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.registerCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.removeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.__class__ = org.puremvc.haxe.interfaces.IController;
org.puremvc.haxe.core.controller = {}
org.puremvc.haxe.core.controller.Controller = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.controller.Controller.instance = this;
	this.commandMap = new Hash();
	this.initializeController();
}}
org.puremvc.haxe.core.controller.Controller.__name__ = ["org","puremvc","haxe","core","controller","Controller"];
org.puremvc.haxe.core.controller.Controller.getInstance = function() {
	if(org.puremvc.haxe.core.controller.Controller.instance == null) org.puremvc.haxe.core.controller.Controller.instance = new org.puremvc.haxe.core.controller.Controller();
	return org.puremvc.haxe.core.controller.Controller.instance;
}
org.puremvc.haxe.core.controller.Controller.instance = null;
org.puremvc.haxe.core.controller.Controller.prototype.commandMap = null;
org.puremvc.haxe.core.controller.Controller.prototype.executeCommand = function(note) {
	var commandClassRef = this.commandMap.get(note.getName());
	if(commandClassRef == null) return;
	var commandInstance = Type.createInstance(commandClassRef,[]);
	commandInstance.execute(note);
}
org.puremvc.haxe.core.controller.Controller.prototype.hasCommand = function(notificationName) {
	return this.commandMap.exists(notificationName);
}
org.puremvc.haxe.core.controller.Controller.prototype.initializeController = function() {
	this.view = org.puremvc.haxe.core.view.View.getInstance();
}
org.puremvc.haxe.core.controller.Controller.prototype.registerCommand = function(notificationName,commandClassRef) {
	if(!this.commandMap.exists(notificationName)) this.view.registerObserver(notificationName,new org.puremvc.haxe.patterns.observer.Observer($closure(this,"executeCommand"),this));
	this.commandMap.set(notificationName,commandClassRef);
}
org.puremvc.haxe.core.controller.Controller.prototype.removeCommand = function(notificationName) {
	this.commandMap.remove(notificationName);
}
org.puremvc.haxe.core.controller.Controller.prototype.view = null;
org.puremvc.haxe.core.controller.Controller.prototype.__class__ = org.puremvc.haxe.core.controller.Controller;
org.puremvc.haxe.core.controller.Controller.__interfaces__ = [org.puremvc.haxe.interfaces.IController];
org.puremvc.haxe.examples.simpleAdmin.ui.IMenu = function() { }
org.puremvc.haxe.examples.simpleAdmin.ui.IMenu.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","ui","IMenu"];
org.puremvc.haxe.examples.simpleAdmin.ui.IMenu.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.ui.IMenu;
org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu = function(container) { if( container === $_ ) return; {
	this._container = container;
}}
org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","ui","JsMenu"];
org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu.prototype._container = null;
org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu;
org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu.__interfaces__ = [org.puremvc.haxe.examples.simpleAdmin.ui.IMenu];
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails = function(container) { if( container === $_ ) return; {
	this._container = container;
	this.newEmployee(1);
}}
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","ui","JsDetails"];
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails.prototype._container = null;
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails.prototype.getDetails = function() {
	var vo = new org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO(Std.parseInt(js.Lib.document.getElementById("em_id").innerHTML));
	vo.name = js.Lib.document.getElementById("em_name").value;
	vo.lastname = js.Lib.document.getElementById("em_lastname").value;
	vo.role = js.Lib.document.getElementById("em_role").value;
	return vo;
}
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails.prototype.newEmployee = function(id) {
	var em_id = js.Lib.document.getElementById("em_id");
	em_id.innerHTML = Std.string(id);
	js.Lib.document.getElementById("em_name").value = "";
	js.Lib.document.getElementById("em_lastname").value = "";
	js.Lib.document.getElementById("em_role").value = "";
}
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails.prototype.setDetails = function(vo) {
	js.Lib.document.getElementById("em_id").innerHTML = Std.string(vo.getId());
	if(vo.name != null) js.Lib.document.getElementById("em_name").value = vo.name;
	if(vo.lastname != null) js.Lib.document.getElementById("em_lastname").value = vo.lastname;
	if(vo.role != null) js.Lib.document.getElementById("em_role").value = vo.role;
}
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails;
org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails.__interfaces__ = [org.puremvc.haxe.examples.simpleAdmin.ui.IDetails];
org.puremvc.haxe.interfaces.IModel = function() { }
org.puremvc.haxe.interfaces.IModel.__name__ = ["org","puremvc","haxe","interfaces","IModel"];
org.puremvc.haxe.interfaces.IModel.prototype.hasProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.registerProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.removeProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.retrieveProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.__class__ = org.puremvc.haxe.interfaces.IModel;
org.puremvc.haxe.core.model = {}
org.puremvc.haxe.core.model.Model = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.core.model.Model.instance = this;
	this.proxyMap = new Hash();
	this.initializeModel();
}}
org.puremvc.haxe.core.model.Model.__name__ = ["org","puremvc","haxe","core","model","Model"];
org.puremvc.haxe.core.model.Model.getInstance = function() {
	if(org.puremvc.haxe.core.model.Model.instance == null) org.puremvc.haxe.core.model.Model.instance = new org.puremvc.haxe.core.model.Model();
	return org.puremvc.haxe.core.model.Model.instance;
}
org.puremvc.haxe.core.model.Model.instance = null;
org.puremvc.haxe.core.model.Model.prototype.hasProxy = function(proxyName) {
	return this.proxyMap.exists(proxyName);
}
org.puremvc.haxe.core.model.Model.prototype.initializeModel = function() {
	null;
}
org.puremvc.haxe.core.model.Model.prototype.proxyMap = null;
org.puremvc.haxe.core.model.Model.prototype.registerProxy = function(proxy) {
	this.proxyMap.set(proxy.getProxyName(),proxy);
	proxy.onRegister();
}
org.puremvc.haxe.core.model.Model.prototype.removeProxy = function(proxyName) {
	var proxy = this.proxyMap.get(proxyName);
	this.proxyMap.remove(proxyName);
	proxy.onRemove();
	return proxy;
}
org.puremvc.haxe.core.model.Model.prototype.retrieveProxy = function(proxyName) {
	return this.proxyMap.get(proxyName);
}
org.puremvc.haxe.core.model.Model.prototype.__class__ = org.puremvc.haxe.core.model.Model;
org.puremvc.haxe.core.model.Model.__interfaces__ = [org.puremvc.haxe.interfaces.IModel];
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator = function(viewComponent) { if( viewComponent === $_ ) return; {
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[null,viewComponent]);
	js.Lib.document.getElementById("remove_e").onclick = $closure(this,"onRemoveEmployee");
	js.Lib.document.getElementById("new_e").onclick = $closure(this,"onNewEmployee");
	js.Lib.document.getElementById("save_e").onclick = $closure(this,"onSaveEmployee");
}}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","view","MenuMediator"];
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.getMediatorName = function() {
	return "MenuMediator";
}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.getMenu = function() {
	return this.viewComponent;
}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.handleNotification = function(notification) {
	switch(notification.getName()) {
	}
}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.listNotificationInterests = function() {
	return [];
}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.onNewEmployee = function(evt) {
	this.facade.sendNotification("new_employee");
}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.onRemoveEmployee = function(evt) {
	this.facade.sendNotification("remove_employee");
}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.onSaveEmployee = function(evt) {
	this.facade.sendNotification("save_employee");
}
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator;
SimpleAdmin = function(p) { if( p === $_ ) return; {
	var facade = org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.getInstance();
	facade.sendNotification("startup",this);
}}
SimpleAdmin.__name__ = ["SimpleAdmin"];
SimpleAdmin.main = function() {
	var app = new SimpleAdmin();
}
SimpleAdmin.prototype.__class__ = SimpleAdmin;
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
Std.bool = function(x) {
	return (x !== 0 && x != null && x !== false);
}
Std.parseInt = function(x) {
	{
		var v = parseInt(x);
		if(Math.isNaN(v)) return null;
		return v;
	}
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.chr = function(x) {
	return String.fromCharCode(x);
}
Std.ord = function(x) {
	if(x == "") return null;
	else return x.charCodeAt(0);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.resource = function(name) {
	return js.Boot.__res[name];
}
Std.prototype.__class__ = Std;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item,null];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
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
		{
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.add(sep);
		s.add(l[0]);
		l = l[1];
	}
	return s.toString();
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
	s.add("{");
	while(l != null) {
		if(first) first = false;
		else s.add(", ");
		s.add(l[0]);
		l = l[1];
	}
	s.add("}");
	return s.toString();
}
List.prototype.__class__ = List;
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.facade.Facade.apply(this,[]);
}}
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","SimpleAdminFacade"];
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.__super__ = org.puremvc.haxe.patterns.facade.Facade;
for(var k in org.puremvc.haxe.patterns.facade.Facade.prototype ) org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.prototype[k] = org.puremvc.haxe.patterns.facade.Facade.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.instance = null;
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.getInstance = function() {
	if(org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.instance == null) org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.instance = new org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade();
	return org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.instance;
}
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.prototype.initializeController = function() {
	org.puremvc.haxe.patterns.facade.Facade.prototype.initializeController.apply(this,[]);
	this.registerCommand("startup",org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand);
	this.registerCommand("new_employee",org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee);
	this.registerCommand("remove_employee",org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee);
	this.registerCommand("save_employee",org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee);
}
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade;
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
Type.toEnum = function(t) {
	try {
		if(t.__ename__ == null) return null;
		return t;
	}
	catch( $e8 ) {
		{
			var e = $e8;
			null;
		}
	}
	return null;
}
Type.toClass = function(t) {
	try {
		if(t.__name__ == null) return null;
		return t;
	}
	catch( $e9 ) {
		{
			var e = $e9;
			null;
		}
	}
	return null;
}
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
	{
		try {
			cl = eval(name);
		}
		catch( $e10 ) {
			{
				var e = $e10;
				{
					cl = null;
				}
			}
		}
		if(cl == null || cl.__name__ == null) return null;
		else null;
	}
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	{
		try {
			e = eval(name);
		}
		catch( $e11 ) {
			{
				var e1 = $e11;
				{
					e1 = null;
				}
			}
		}
		if(e == null || e.__ename__ == null) return null;
		else null;
	}
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length >= 6) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	c = c.__super__;
	while(c != null) {
		a = a.concat(Reflect.fields(c.prototype));
		c = c.__super__;
	}
	while(a.remove("__class__")) null;
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
		if(v + 1 == v) return ValueType.TFloat;
		if(Math.ceil(v) == v) return ValueType.TInt;
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
js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
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
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	{
		var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
		msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
		var d = document.getElementById("haxe:trace");
		if(d == null) alert("No haxe:trace element defined\n" + msg);
		else d.innerHTML += msg;
	}
}
js.Boot.__clear_trace = function() {
	{
		var d = document.getElementById("haxe:trace");
		if(d != null) d.innerHTML = "";
		else null;
	}
}
js.Boot.__closure = function(o,f) {
	{
		var m = o[f];
		if(m == null) return null;
		var f1 = function() {
			return m.apply(o,arguments);
		}
		f1.scope = o;
		f1.method = m;
		return f1;
	}
}
js.Boot.__string_rec = function(o,s) {
	{
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
			catch( $e12 ) {
				{
					var e = $e12;
					{
						return "???";
					}
				}
			}
			if(tostr != null && tostr != Object.toString) {
				var s2 = o.toString();
				if(s2 != "[object Object]") return s2;
			}
			var k;
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
	{
		try {
			if(o instanceof cl) {
				if(cl == Array) return (o.__enum__ == null);
				return true;
			}
			if(js.Boot.__interfLoop(o.__class__,cl)) return true;
		}
		catch( $e13 ) {
			{
				var e = $e13;
				{
					if(cl == null) return false;
				}
			}
		}
		switch(cl) {
		case Int:{
			return (Math.ceil(o) === o) && isFinite(o);
		}break;
		case Float:{
			return typeof(o) == "number";
		}break;
		case Bool:{
			return (o === true || o === false);
		}break;
		case String:{
			return typeof(o) == "string";
		}break;
		case Dynamic:{
			return true;
		}break;
		default:{
			if(o != null && o.__enum__ == cl) return true;
			return false;
		}break;
		}
	}
}
js.Boot.__init = function() {
	{
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
		String.prototype.__class__ = String;
		String.__name__ = ["String"];
		Array.prototype.__class__ = Array;
		Array.__name__ = ["Array"];
		var cca = String.prototype.charCodeAt;
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
		Int = new Object();
		Dynamic = new Object();
		Float = Number;
		Bool = new Object();
		Bool["true"] = true;
		Bool["false"] = false;
		$closure = js.Boot.__closure;
	}
}
js.Boot.prototype.__class__ = js.Boot;
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
	s.add("{");
	var it = this.keys();
	{ var $it14 = it;
	while( $it14.hasNext() ) { var i = $it14.next();
	{
		s.add(i);
		s.add(" => ");
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.add(", ");
	}
	}}
	s.add("}");
	return s.toString();
}
IntHash.prototype.__class__ = IntHash;
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
org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
}}
org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee.__name__ = ["org","puremvc","haxe","examples","simpleAdmin","controller","RemoveEmployee"];
org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee.prototype.execute = function(note) {
	var mediator = function($this) {
		var $r;
		var tmp = $this.facade.retrieveMediator("DetailsMediator");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	var id = mediator.getEmployeeDetails().getId();
	var proxy = function($this) {
		var $r;
		var tmp = $this.facade.retrieveProxy("EmployeesProxy");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	proxy.removeEmployee(id);
	var d_mediator = function($this) {
		var $r;
		var tmp = $this.facade.retrieveMediator("DetailsMediator");
		$r = (Std["is"](tmp,org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	this.sendNotification("update_list");
	this.sendNotification("cleanup_details");
}
org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee.prototype.__class__ = org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee;
Hash = function(p) { if( p === $_ ) return; {
	{
		this.h = {}
		if(this.h.__proto__ != null) {
			this.h.__proto__ = null;
			delete(this.h.__proto__);
		}
		else null;
	}
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e15 ) {
		{
			var e = $e15;
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
	s.add("{");
	var it = this.keys();
	{ var $it16 = it;
	while( $it16.hasNext() ) { var i = $it16.next();
	{
		s.add(i);
		s.add(" => ");
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.add(", ");
	}
	}}
	s.add("}");
	return s.toString();
}
Hash.prototype.__class__ = Hash;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
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
}
{
	
			onerror = function(msg,url,line) {
				var f = js.Lib.onerror;
				if( f == null )
					return false;
				return f(msg,[url+":"+line]);
			}
		;
}
org.puremvc.haxe.patterns.mediator.Mediator.NAME = "Mediator";
org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator.NAME = "EmployeesMediator";
org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator.NAME = "DetailsMediator";
org.puremvc.haxe.patterns.proxy.Proxy.NAME = "Proxy";
org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy.NAME = "EmployeesProxy";
org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator.NAME = "MenuMediator";
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.STARTUP = "startup";
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.NEW_EMPLOYEE = "new_employee";
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.REMOVE_EMPLOYEE = "remove_employee";
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.SAVE_EMPLOYEE = "save_employee";
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.UPDATE_LIST = "update_list";
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.EMPLOYEE_SELECTED = "employee_selected";
org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade.CLEANUP_DETAILS = "cleanup_details";
js.Lib.document = document;
js.Lib.window = window;
js.Lib.onerror = null;
$Main.init = SimpleAdmin.main();
