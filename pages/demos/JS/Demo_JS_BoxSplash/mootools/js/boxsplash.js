/**
 * @fileoverview This file contains the BoxSplash PureMVC demo classes.
 * It is inspired by the Coordinate Rotation example on page 407 in the popular
 * book titled: "ActionScript 3.0 Animation: Making Things Move!" by
 * Keith Peters.  It has been ported to JavaScript in the context of the
 * PureMVC Framework to illustrate the usefullness and fun you can have
 * with the framework.  Thank you Keith Peters.  You continue to inspire
 * creativity in all who read your books.
 * @author Justin Wilaby jwilaby@gmail.com
 * @version 1.0
 */

/**
 * @misc
 * @class <i>concrete</i> Facade implementation used to
 * facilitate the startup process of the MV&C.  This is
 * the 'hub' that accesses and communicates with the Proxies,
 * Mediators and Commands that do the work in your application.
 * <p>
 * Excerpts from "Implementation Idioms and Best Practices" by Cliff Hall:
 * "...By composition then, the Façade implements and exposes the
 * features of the Model, View and Controller; aggregating their
 * functionality and shielding the developer from direct interaction
 * with the Core actors of the framework..."</p>
 * <p> "By convention, it is named ‘ApplicationFacade’, but you
 * may call it whatever you like".</p>
 * <p> "Once the application’s View
 * hierarchy has been built, the PureMVC apparatus is
 * started and the Model and View regions are prepared for use."
 * For more information on creating the  concrete Facade, see
 * page 11 in "Implementation Idioms and Best Practices" by Cliff Hall
 * </p>
 * @extends Facade
 * @author Justin Wilaby
 */
var ApplicationFacade = function(){

    /**
     * Required by MooTools for inheritance.
     * @type Class
     */
    this.Extends = new Class(new Facade());

    /**
     * The <code>Model</code> <code>View</code> and
     * <code>Controller</code> are initialized in a deliberate
     * order to ensure internal dependencies are satisfied before
     * operations are performed.<p>
     * <code>initializeController()</code> should be overridden
     * for the specific purpose of registering your commands. Any attempt to
     * register <code>Mediator</code>s here will result in an error.
     * being thrown because the View has not yet been initialized.</p>
     * <p>calling <code>this.parent()</code> is also required.
     */
    this.initializeController = function()
    {
	// Always call this.parent()
	this.parent();
	this.registerCommand(ApplicationFacade.STARTUP, StartupCommand);
	this.registerCommand(ApplicationFacade.RETRIEVE_CONFIG_OPTION, RetrieveConfigOptionCommand);
    };

    /**
     * Method used to start the system.  
     * 
     * @param {Shell} viewComponent the Shell instance used as the vew.
     */
    this.startup = function(viewComponent /* Shell */)
    {
	this.sendNotification(ApplicationFacade.STARTUP, viewComponent);
    };
}
/**
 * Constant used to register and identify the notification that should
 * execute the <code>StartupCommand</code>
 * @type String
 * @see StartupCommand
 */
ApplicationFacade.STARTUP = "Startup";
/**
 * Constant used to register and identify the notification that should 
 * execute the <code>RetrieveConfigOptionCommand</code>
 * @type String
 * @see RetrieveConfigOptionCommand
 */
ApplicationFacade.RETRIEVE_CONFIG_OPTION = "retrieveConfigOption";
/**
 * Constant used to register and identify the notification that should 
 * toggle the animation between start and stop.
 * @type String
 * @see ControlPanel
 * @see WorldSpace
 */
ApplicationFacade.TOGGLE_START_STOP = "toggleStartStop";
/**
 * Constant used to register and identify the notification that
 * is sent when the animation state of the <code>WorldSpace</code>
 * has changed
 * @type String
 * @see ControlPanel
 * @see WorldSpace
 */
ApplicationFacade.ANIMATION_STATE_CHANGED = "animationStateChanged";
/**
 * Singleton implementation for the <code>ApplicationFacade</code>
 * Your Singleton implementation is up to you.  This provides an example
 * that is compatable with JSDoc and most editors' code assistance.
 *
 * @return {ApplicationFacade} the <code>Facade</code> subclass instance
 * used throughout the application.
 */
ApplicationFacade.getInstance = function()
{
    if (Facade.instance == undefined)
    {
	// The classFactory is used as a descriptor for the ApplicatonFacade
	// when hierarchical relationships are required as in this case.
	var classFactory = new Class(new ApplicationFacade());
	Facade.instance = new classFactory();
    }
    return Facade.instance;
};
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class The Configuration <code>Proxy</code> used to house
 * and manipulate (if necessary) configuration data for the BoxSplash
 * application.  The data takes its form as <code>BoxConfigVO</code>
 *  (Value Objects) containing properties that define the state of the
 *  application.
 * <p>In an MVC pattern, the Proxy acts upon notifications from the system
 * or calls to public methods from either <cod>SimpleCommand</code>
 * subclasses or <code>Mediator</code> subclasses to retrieve, store, or
 * manipulate data whether the data's physical location happens to be 
 * remote or local.</p>
 */
var ConfigProxy = function(){
    this.Extends = Proxy;

    /*
     * @ignore
     */
    this.initialize = function()
    {
	// Config options to store in the 'data' property of this proxy.
	var configOptions = [
	    new BoxConfigVO('Light', 20, 50, 500, '#FF0000'),
	    new BoxConfigVO('Medium-light', 40, 30, 400, '#00FF00'),
	    new BoxConfigVO('Medium', 80, 20, 300, '#0000FF'),
	    new BoxConfigVO('Heavy-medium', 160, 10, 200, '#FF00FF'),
	    new BoxConfigVO('Heavy (IE Killer)', 320, 5, 200, '#00FFFF')
	];
	this.parent(ConfigProxy.NAME, configOptions);
    };

    /**
     * Retrieves the specified configuration oprion.  In this case
     * by index
     * @param {integer} optionNum The index of the <code>BoxConfigVO</code>
     * stored in the <code>data</code> Object
     */
    this.retrieveConfigOption = function(optionNum /* int */)
    {
	this.sendNotification(ConfigProxy.CONFIG_OPTION_RETRIEVED, this.data[optionNum]);
    };
}
ConfigProxy = new Class(new ConfigProxy());
/**
 * Contstant defining the unique name of this
 * <code>Proxy</code> sublcass
 * @type String
 */
ConfigProxy.NAME = "ConfigProxy";
/**
 * Constant used to name the <i>outbound</i> notification
 * resulting from a call to the <code>retrieveConfigOption</code> method.
 * @type String
 */
ConfigProxy.CONFIG_OPTION_RETRIEVED = "configOptionRetrieved";
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class A <code>MacroCommand</code> subclass
 * used to satisfy or initialize dependency handling.<p>
 * in this case, our <code>ShellMediator</code> 
 * needs to be registered with the <code>View</code>
 * in order to begin communication with the system.</p>
 * 
 * @extends MacroCommand
 * @author Justin Wilaby
 */
var StartupCommand = function(){

    /**
     * @ignore
     */
    this.Extends = MacroCommand;

    /**
     * Overridden to populate the <code>MacroCommand</code>'s
     * <code>subCommands</code> array
     * @see ModelPrepCommand
     * @see ViewPrepCommand
     */
    this.initializeMacroCommand = function()
    {
	this.addSubCommand(ModelPrepCommand);
	this.addSubCommand(ViewPrepCommand);
    };
};
StartupCommand = new Class(new StartupCommand());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class <code>SimpleCommand</code> subclass that is
 * responsible for preparing the data Model.  This is where all
 * <code>Proxy</code> subclasses are registered with the
 * <code>Model</code>.
 *
 * @extends SimpleCommand
 * @author Justin Wilaby
 */
var ModelPrepCommand = function(){

    /*
     * @ignore
     */
    this.Extends = SimpleCommand;

    /**
     * Registers the <code>ConfigProxy</code> with
     * the <code>Model</code>
     * @see ConfigProxy
     */
    this.execute = function()
    {
	this.facade.registerProxy(new ConfigProxy());
    };
};
ModelPrepCommand = new Class(new ModelPrepCommand());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class <code>SimpleCommand</code> subclass that is
 * responsible for preparing the primary View.  This is where the
 * <code>Mediator</code> subclass assigned to the Shell is
 *  registered with the <code>Model</code>.
 *
 *  @extends SimpleCommand
 *  @see ShellMediator
 *  @see Shell
 *  @author Justin Wilaby
 */
var ViewPrepCommand = function(){
    this.Extends = SimpleCommand;
    /**
     * Executes the command. A <code>Notification</code>
     * instance will always be present as an argument to
     * this method.
     * @param {Notification} notification The notification containing
     * the view instance in the <code>body</code> property.
     * (In this case our Shell)
     */
    this.execute = function(notification /* Notification */)
    {
	// Extract the Shell instance
	var shell = notification.getBody();
	// Register the ShellMediator passing the Shell
	// instance to its constructor.
	this.facade.registerMediator(new ShellMediator(shell));
    };
};
ViewPrepCommand = new Class(new ViewPrepCommand());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class <code>SimpleCommand</code> subclass
 * used to retrieve configuration data from the <code>ConfigProxy</code>
 * @see ConfigProxy
 * @see ApplicationFacade
 */
var RetrieveConfigOptionCommand = function(){

    /**
     * @ignore
     */
    this.Extends = SimpleCommand;

    /**
     * Fulfills the use case give by the <code>Notification</code>.
     * In this case, the retrieval of a specific <code>BoxConfigVO</code>
     * @param {Notification} notification containing the location of a <code>BoxConfigVO</code>.
     * @see BoxConfigVO
     */
    this.execute = function(notification /* Notification */)
    {
	var configOptionNum = notification.getBody();
	var configProxy = this.facade.retrieveProxy(ConfigProxy.NAME);
	configProxy.retrieveConfigOption(configOptionNum);
    };
};
RetrieveConfigOptionCommand = new Class(new RetrieveConfigOptionCommand());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class The primary Value Object used to store and retrieve
 * configuration data used in the application
 *
 * @param {String} id the identifier and label of the configuration object.
 * @param {integer} numBoxes The number of <code>Box</code> object to display
 * @param {Number} boxSize width and height of each box
 * @param {Number} focalLength the distance from the lens to the focal point.
 * @param {String} color the color of each <code>Box</code> instance.
 */
var BoxConfigVO = function(id /* String */, numBoxes /* integer */, boxSize /* Number */,  focalLength /* Number */, color /* String */){
    this.id = id;
    this.numBoxes = numBoxes;
    this.boxSize = boxSize;
    this.focalLength = focalLength;
    this.color = color;
};
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class An ultra-light framework class used as a wrapper
 * and psudo-extenstion of the MooTools Native Element
 * implementation. Its primary goal is to encuorage the addition 
 * of  elements to the DOM in a top-down fashion.
 *
 * @param {mixed} element String or Element to become the subject
 * of ths instance.<p>If a string is passed, an element ID is assumed first.
 * if the element ID is not found in the DOM, a tag name is assumed and
 * MooTools will attempt to create that Element.</p><p>If an Element is
 * passed in, it is left as-is.</p>
 *
 * @param {Object} properties The Object containing the default properties
 * to be set on the Element.
 */
var UIComponent = function(element /* mixed String or Element */, properties /* Object */){

    /**
     * <code>true</code> if the component has
     * been initialized <code>false</code> otherwise
     * @type Boolean
     */
    this.initialized = false;

    /**
     * The Native <code>Element</code> used as
     * the subject of this UIComponent instance.
     * @type Element
     */
    this.element = null;
    
    /**
     * @ignore
     */
    this.initialize = function(element /* mixed String or Element */, properties /* Object */)
    {
	this.element = $(element);
	if (!this.element)
	    this.element = new Element(element, properties);
	else
	    this.element.setProperties(properties);
	// Copy methods of the Element object to
	// 'this' and bind the functions to the element itself.
	// This creates a transparent wrapper in the UIComponent for
	// each method of the Element.
	var e = this.element;
	for (var key in e)
	{
	    var type = null;
	    try
	    {
		// IE 7+ has a problem with this sometimes.
		type = typeof e[key];
	    }
	    catch(e){}
	    if (type == "function" && !this[key])
	    {
		try
		{
		    // Safari has trouble here with some function binding
		    this[key] = e[key].bind(e);
		}
		catch(e){}
	    }
	}
    };

    /**
     * Used in the creation of children used in this component.
     * Override this method to create new UIComponents or 'grab'
     * existing DOM nodes.
     */
    this.initializeChildren = function(){};
    /**
     * Called after <code>initializeChildren()</code>.
     * Override this method for additional processing
     * or adding event listeners to children
     */
    this.childrenInitialized = function(){};
    /**
     * Called after <code>childrenInitialized()</code>
     * Override this method to perform any final processing
     * before the child is considered initialized.
     */
    this.initializationComplete = function()
    {
	this.initialized = true;
    };

    /**
     * Wrapper for the MooTools <code>Element.grab()</code>
     * that serves 2 primary purposes.
     * <ol>
     * <li>Appends the child UIComponent's DOMElement
     * to this one.</li>
     * <li>calls the child's initialization routines to gaurantee all
     * elements are added to the DOM in a 'top down' fashion. (else IE will leak like a siv)</li>
     * </ol>
     * @param {UIComponent} child The child to append.
     * @return {UIComponent} this object - can be used for chaining
     */
    this.addChild = function(child /* UIComponent */ )
    {
	this.grab(child.element);
	// Initialize child
	child.initializeChildren();
	child.childrenInitialized();
	child.initializationComplete();
	// Fire an added event
	child.fireEvent('added');
	
	return this;
    };
};
UIComponent = new Class(new UIComponent());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class Serves as the main application's View.  All
 * other Views will become children of this control making
 * the Shell act as the 'stage'
 *
 * @extends UIComponent
 * @author Justin Wilaby
 */
var Shell = function(){
    /**
     * @ignore
     */
    this.Extends = UIComponent;
    /**
     * The 'control panel' View instance used in the application
     * @type UIComponent
     * @see UIComponent
     */
    this.navigation = null;
    /**
     * The viewport for the 3D Box animation.
     * @type UIComponent
     * @see UIComponent
     */
    this.worldSpace = null;
    /**
     * A reference to the <code>ApplicationFacade</code> Singleton.
     * This reference serves no purpose other than to access the <code>startup()</code>
     * method when the initial View has finished being built.
     * @type ApplicationFacade
     */
    this.facade = null;

    /**
     * @ignore
     */
    this.initialize = function()
    {
	this.facade = ApplicationFacade.getInstance();
	this.parent('shell');
    };

    /**
     * Creates and adds the control panel and
     * world space to this as children.
     */
    this.initializeChildren = function()
    {
	this.controlPanel = new ControlPanel();
	this.addChild(this.controlPanel);
	//-----------------
	this.worldSpace = new WorldSpace();
	this.addChild(this.worldSpace);
    };

    /**
     * Once the children are added and the
     * initial state of the View has been build,
     * <code>startup()</code> is called passing
     * a reference to the <code>Shell</code> as an
     * argument which starts the system and initializes
     * the Shell's <code>Mediator</code>
     *
     * @see ApplicationFacade
     * @see StartupCommand
     * @see ViewPrepCommand
     * @see ModelPrepCommand
     * @see ShellMediator
     */
    this.initializationComplete = function()
    {
	this.facade.startup(this);
    };
};
Shell = new Class(new Shell());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class The <code>Mediator</code> subclass attached to
 * the <code>Shell</code>.  Its primary responsibility here is
 * to register additional <code>Mediator<code>s for child Views but
 * it can listen for and/or send <code>Notification</code>s and seward
 * state changes for the View
 *
 * @param {Shell} viewComponent to register with the <code>ShellMediator</code>
 * @extends Mediator
 * @see Shell
 * @see WorldSpaceMediator
 * @see ControlPanelMediator
 * @author Justin Wilaby
 */
var ShellMediator = function(viewComponent /* Shell */){
    /**
     * @ignore
     */
    this.Extends = Mediator;
    /**
     * A named shortcut to the Shell instance.  This
     * prevents us from having to reference the more
     * ambiguous <code>viewComponent</code> property.
     * @type Shell
     */
    this.shell = null;

    /**
     * @ignore
     */
    this.initialize = function(viewComponent /* Shell */)
    {
	this.parent(ShellMediator.NAME, viewComponent /* Shell */);
	this.shell = this.getViewComponent();
	// Handle creation and registration of all
	// remaining Mediators here.
	this.facade.registerMediator(new WorldSpaceMediator(this.shell.worldSpace));
	this.facade.registerMediator(new ControlPanelMediator(this.shell.controlPanel));
    };
};
ShellMediator = new Class(new ShellMediator());
/**
 * Constant used as a unique name
 * @type String
 */
ShellMediator.NAME = "ShellMediator";
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class The View used to control the world space and
 * load the various configuration settings available to the user.
 *
 * @extends UIComponent
 * @author Justin Wilaby
 */
var ControlPanel = function(){
    /**
     * @ignore
     */
    this.Extends = UIComponent;

    /**
     * The label displaying the control panel title at the top.
     * @type UIComponent
     */
    this.headerLabel = null;

    /**
     * The label displaying the title for the configuration buttons.
     * @type UIComponent
     */
    this.availableConfigsLabel = null;
    /**
     * The score text control
     * @type UIComponent
     */
    this.currentConfigLabel = null;

    /**
     * The configuration buttons list
     * @type Array
     */
    this.configButtons = [];

    /**
     * Button to start and stop the animation
     * @type UIComponent
     */
    this.stopStartButton = null;

    /**
     * @ignore
     */
    this.initialize = function()
    {
	this.parent('control-panel');
	// Overwrite listener handlers with
	// methods bound to 'this'
	this.button_clickHandler = this.button_clickHandler.bindWithEvent(this);
	this.startStop_clickHandler = this.startStop_clickHandler.bindWithEvent(this);
    };

    /**
     * Creates all children required to create the
     * initial View state of this control and adds them to the DOM.
     */
    this.initializeChildren = function()
    {
	this.headerLabel = new UIComponent('h1',{id:"header-label", html:"Control Panel"});
	this.addChild(this.headerLabel);

	this.availableConfigsLabel = new UIComponent('p', {id:"available-configs-label", html:"Available Configurations:"});
	this.addChild(this.availableConfigsLabel);

	this.currentConfigLabel = new UIComponent('p', {id:"current-config-label", html:"Now Displaying:"});
	this.addChild(this.currentConfigLabel);

	this.stopStartButton = new UIComponent('button', {html:"Start", styles:{"position":"absolute"}});
	this.addChild(this.stopStartButton);
    };

    /**
     * Adds the'click' listener to the startStop button after creation.
     */
    this.childrenInitialized = function()
    {
	this.stopStartButton.addEvent('click', this.startStop_clickHandler);
    };

    /**
     * Creates buttons based on the array of <code>BoxConfigVO</code>
     * objects.  In this case, this function is called from the <code>ControlPanelMediator</code>'s
     * <code>onRegister()</code> method and is based on the data contained
     * within the <code>ConfigProxy</code>'s <code>data</code> property.
     *
     * @param {BoxConfigVO[]} value An array of BoxConfigVO objects to base the config buttons on
     * @see BoxConfigVO
     * @see ControlPanelMediator
     * @see ConfigProxy
     */
    this.setConfigurationButtons = function(value /* Array */)
    {
	// Remove the old buttons if we have them
	var i = 0;
	var button = null;
	if (this.configButtons.length)
	{
	    i = this.configButtons.length;
	    while(i--)
	    {
		button = this.configButtons[i];
		button.removeEvent('click', this.button_clickHandler);
		button.dispose();
	    }
	    this.configButtons = [];
	}
	// Add the new ones based on the passed array
	var posY = 50;
	var len = value.length;
	for (i = 0; i < len; i++)
	{
	    var boxConfigVO = value[i];
	    button = new UIComponent('button', {html:boxConfigVO.id, styles:{position:"absolute", top:posY, left:5, width:150}});
	    // Store the index location of the button so
	    // we can easily find which BoxConfig to load.
	    button.store("index", i);
	    // Add the click handler.
	    button.addEvent('click', this.button_clickHandler);
	    // Add it to the DOM.
	    this.addChild(button);
	    // Retain it in our array for later reference.
	    this.configButtons.push(button);
	    // Position the button.
	    posY += button.getSize().y;
	}
	// Reposition the current config label so
	// that its below the buttons.
	this.currentConfigLabel.setStyle("top", posY.toString() + "px");
	posY += this.currentConfigLabel.getSize().y + 10; // Padding
	// Set the position of the start/stop button
	this.stopStartButton.setStyle("top", (posY + 10).toString() + "px");
    };

    /**
     * Sets the label of the configuration 'p' tag. This function
     * is called by the <code>ControlPanelMediator</code>
     * in response to the <code>ConfigProxy.CONFIG_OPTION_RETRIEVED</code>
     * <code>Notification</code>.
     *
     * @param {String} value the string to append to the label's text
     * @see ControlPanelMediator
     * @see ConfigProxy
     */
    this.setConfigurationLabel = function(value /* String */)
    {
	 this.currentConfigLabel.set("html", "Now Displaying: "+value);
    };

    /**
     * Sets the appropriate label for the startStop button
     * based on the current state of the animation.
     *
     * @param {Boolean} inTween indicates whether or not the animation is running.
     */
    this.animationStateChanged = function(inTween)
    {
	if (inTween)
	    this.stopStartButton.set("html", "Stop");
	else
	    this.stopStartButton.set("html", "Start");
    };

    //------------------------------------------
    // Event Handlers

    /**
     * Handles clicks from the user on conguration buttons
     *
     * @param {Event} event the MouseEvent resulting from a click by the user
     */
    this.button_clickHandler = function(event)
    {
	var buttonElement = event.target;
	var index = buttonElement.retrieve("index");
	// Dispatch our custom event to be
	// picked up by the ControlPanelMediator
	this.fireEvent("loadConfig", index);
    };

    /**
     * Handles clicks from the startStop button
     * @param {Event} event the MouseEvent resulting from a click by the user.
     */
    this.startStop_clickHandler = function(event)
    {
	this.fireEvent("toggleStartStop");
    };
};
ControlPanel = new Class(new ControlPanel());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class The <code>Mediator</code> subclass attached to the
 * <code>ControlPanel</code> View. Its primary responsibilities here
 * are to listen for and notify the system of user interactions that change
 * the state of the application including that of other Views; specifically
 * start/stop and config button clicks.  This <code>Mediator</code> is
 * registered by the <code>ShellMediator</code>'s constructor.
 *
 * @param {ControlPanel} viewComponent The <code>ControlPanel</code> instance
 * assigned to this mediator.
 * @see ControlPanel
 * @see ShellMediator
 * @author Justin Wilaby
 */
var ControlPanelMediator = function(viewComponent /* ControlPanel */){

    /**
     * @ignore
     */
    this.Extends = Mediator;
    /**
     * A named shortcut to the ControlPanel instance.  This
     * prevents us from having to reference the more
     * ambiguous <code>viewComponent</code> property.
     * @type ControlPanel
     */
    this.controlPanel = null;

    /**
     * The <code>ConfigProxy</code> instance registered to the
     * <code>ApplicationFacade</code>. It is retrieved here to act as
     * a discriptor for the initial state of the View based on the <code>data</code>
     * property contents.
     *
     * @type ConfigProxy
     * @see ApplicatinFacade
     */
    this.configProxy = null;

    /**
     * @ignore
     */
    this.initialize = function(viewComponent /* ControlPanel */)
    {
	this.parent(ControlPanelMediator.NAME, viewComponent);

	this.controlPanel = this.getViewComponent();
	this.configProxy = this.facade.retrieveProxy(ConfigProxy.NAME);
	// Replace listener handlers with methods bound to 'this'
	this.loadConfigHandler = this.loadConfigHandler.bind(this);
	this.toggleStartStopHandler = this.toggleStartStopHandler.bind(this);
    };

    /**
     * Provides a list of notification interests to the <code>View</code>.
     * Without an accurate list, the <code>handleNotification()</code> method will
     * may be invoked.  A common mistake by developers is to provide handling
     * routines in the <code>handleNotification()</code> method but forget to
     * add the notification name in the <code>listNotificationInterests()</code> array.
     * <p>Note that changing this array at runtime will not have any affect on
     * notification interests since this method is called by the <code>View</code>
     * a single time when the <code>Mediator</code> is first registered.
     *
     * @return {String[]} the array of notification names to act upon.
     */
    this.listNotificationInterests = function()
    {
	return [
	    ConfigProxy.CONFIG_OPTION_RETRIEVED,
	    ApplicationFacade.ANIMATION_STATE_CHANGED
	];
    };

    /**
     * Handles notifications broadcasted by the system provided
     * the notification is listed in the <code>listNotificationInterests()</code>
     * return value.
     *
     * @param {Notification} notification The notification to act upon.
     */
    this.handleNotification = function(notification /* Notification */)
    {
	switch(notification.getName())
	{
	    case ConfigProxy.CONFIG_OPTION_RETRIEVED:
		var boxConfigVO = notification.getBody();
		this.controlPanel.setConfigurationLabel(boxConfigVO.id);
		break;

	    case ApplicationFacade.ANIMATION_STATE_CHANGED:
		this.controlPanel.animationStateChanged(notification.getBody());
		break;
	}
    };

    /**
     * Performs actions when the <code>Mediator</code> is registered by
     * the <code>View</code>.  Here we listen for the "loadConfig" and "toggleStartStop"
     * events from the <code>ControlPanel</code> and set the configuration buttons
     * based on the contents of the <code>ConfigProxy</code>'s <code>data</code>
     * property.
     *
     * @see ControlPanel
     * @see ConfigProxy
     */
    this.onRegister = function()
    {
	this.parent();
	this.controlPanel.addEvent("loadConfig", this.loadConfigHandler);
	this.controlPanel.addEvent("toggleStartStop", this.toggleStartStopHandler);

	this.controlPanel.setConfigurationButtons(this.configProxy.data);
    };

     /**
     * Removes listeners so the View can be properly disposed of
     * and garbage collected
     */
    this.onRemove = function()
    {
	this.parent();
	this.controlPanel.removeEvent("loadConfig", this.loadConfigHandler);
	this.controlPanel.removeEvent("toggleStartStop", this.toggleStartStopHandler);
    };

    /**
     * Event handler for the "loadConfig" event dispatched by the
     * <code>ControlPanel</code> in respone to user clicks on any
     * of the configuration buttons.
     */
    this.loadConfigHandler = function(index)
    {
	this.sendNotification(ApplicationFacade.RETRIEVE_CONFIG_OPTION, index);
    };

    /**
     * Event handler for the "toggleStartStop" event dispatched
     * by the <code>ControlPanel</code> in respone to user clicks
     * on the startStop button
     */
    this.toggleStartStopHandler = function()
    {
	this.sendNotification(ApplicationFacade.TOGGLE_START_STOP);
    };
};
ControlPanelMediator = new Class(new ControlPanelMediator());
/**
 * Constant used as the unique name and identifier.
 * @type String
 */
ControlPanelMediator.NAME = "ControlPanelMediator";
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class View used as the space for the 3d box animations.
 *
 * @extends UIComponent
 * @author Justin Wilaby
 */
var WorldSpace = function(){

    /**
     * @ignore
     */
    this.Extends = UIComponent;

    /**
     * Boolean indicating whether or not the
     * animation is running
     * @type Boolean
     */
    this.inTween = false;

    /**
     * The array of <code>Box</code> objects currently on stage
     * @type Array
     */
    this.boxes = [];

    /**
     * The id of the interval timer used to update the display
     * @type integer
     */
    this.timerId = 0;
    /**
     * The current focal length of the worldSpace
     * @type Number
     */
    this.focalLength = 0;
    /**
     * The currently calculated angle of the world space.
     * @type Number
     */
    this.angle = 0;
    /**
     * The vanishing point of the world space (always center)
     * @type Object
     */
    this.vp = {x:0, y:0};
    /**
     * The BoxConfigVO currently in play
     * @type BoxConfigVO
     */
    this.currentConfig = null;

    /**
     * @ignore
     */
    this.initialize = function()
    {
	this.parent('world-space');
	this.vp.x = this.getSize().x / 2;
	this.vp.y = this.getSize().y / 2;

	// Overwrite listeners with methods
	// bound to 'this'
	this.mouseMoveHandler = this.mouseMoveHandler.bindWithEvent(this);
    };

    /**
     * Processes data contained in a <code>BoxConfigVO</code> and
     * sets up the world space accordingly
     *
     * @param {BoxConfigVO} value the BoxConfigVO instace as the
     * basis for the <code>WorldSpace</code> state.
     */
    this.setConfiguration = function(value /* BoxConfigVO */)
    {
	// Bail if the BoxConfigVO's are the same
	if (this.currentConfig == value)
	    return;
	this.currentConfig = value;
	// Stop the timer if we have one
	this.stopAnimation();
	this.removeAllBoxes();
	this.createWorldFromConfig();
	this.startAnimation();
    };

    /**
     * Toggles the animation between start and stop
     * and returns true if the animation was started or
     * false if it was stopped.  This method is usually called by the
     * <code>WorldSpaceMediator</code> in response to the
     * <code>ApplicationFacade.TOGGLE_START_STOP</code> notification.
     *
     * @return Boolean true if the animation was started, false if it was stopped.
     * @see WorldSpaceMediator
     * @see ApplicationFacade
     */
    this.toggleStartStop = function()
    {
	if (this.inTween)
	    this.stopAnimation();
	else
	    this.startAnimation();
	return this.inTween;
    };

    /**
     * Stops the animation.
     */
    this.stopAnimation = function()
    {
	this.removeEvent("mousemove", this.mouseMoveHandler);
	if (this.timerId)
	    $clear(this.timerId);
	this.timerId = 0;
	this.angle = 0;
	this.inTween = false;
	// Notify interested entities that the state has changed
	this.fireEvent("animationStateChanged", this.inTween);
    };

    /**
     * @ignore
     * Removes all boxes from the DOM and
     * the <code>boxes</code> array.  Calling this
     * does not stop the interval from running.
     */
    this.removeAllBoxes = function()
    {
	while(this.boxes.length)
	    this.boxes.pop().dispose();
    };

    /**
     * @ignore
     * Creates instances of the <code>Box</code> based on
     * the current <code>BoxConfigVO</code>
     */
    this.createWorldFromConfig = function()
    {
	if (!this.currentConfig)
	    return;

	this.focalLength =  this.currentConfig.focalLength;
	var numBoxes = this.currentConfig.numBoxes;
	var color = this.currentConfig.color;
	var boxSize = this.currentConfig.boxSize;
	// Randomize the placement of the boxes
	// in the world space.
	while(numBoxes--)
	{
	    var box = new Box(boxSize, boxSize);
	    box.posX = Math.random() * 250 - 125;
	    box.posY = Math.random() * 250 - 125;
	    box.posZ = Math.random() * this.focalLength - (this.focalLength / 2);
	    box.setStyles({"background":color, border:"1px solid #FFF"});
	    this.boxes.push(box);
	    this.addChild(box);
	}
    };

    /**
     *	@ignore
     * Starts the Animation.
     */
    this.startAnimation = function()
    {
	if (!this.boxes.length)
	    return;
	this.addEvent("mousemove", this.mouseMoveHandler);
	this.timerId = this.tick.periodical(10, this);
	this.inTween = true;
	// Notify interested entities that the state has changed
	this.fireEvent("animationStateChanged", this.inTween);
    };

    /**
     * @ignore
     * Updates the position, size, z-index and color
     * of each box.
     */
    this.tick = function()
    {
	var i = this.boxes.length;
	var rads = (this.angle * Math.PI) / 180;
	var cos = Math.cos(rads);
	var sin = Math.sin(rads);
	while(i--)
	{
	    var box = this.boxes[i];
	    var x1 = (box.posX * cos) - (box.posZ * sin);
	    var z1 = (box.posZ * cos) + (box.posX * sin);
	    var scale = this.focalLength / (this.focalLength + box.posZ);

	    var progress = z1 > 0 ? z1 /  (this.focalLength / 2) : 0;
	    var bgColor = this.interpolateColor(this.currentConfig.color, "#222222", progress);
	    var borderColor = this.interpolateColor("#FFFFFF", "#010101", progress);
	    box.posX = x1;
	    box.posZ = z1;
	    
	    box.setStyles({
		left:this.vp.x + (box.posX * scale),
		top:this.vp.y + (box.posY * scale),
		width:box.unscaledWidth * scale,
		height:box.unscaledHeight * scale,
		"background-color":bgColor,
		"border-color":borderColor
	    });
	}
	this.sortZ();
    };

    /**
     * @ignore
     * updates the z-order
     */
    this.sortZ = function()
    {
	var copy = this.boxes.concat();
	copy.sort(function(a, b)
	{
	    if(a.posZ < b.posZ)
		return 1;
	    if (a.posZ > b.posZ)
		return -1;
	    return 0;
	});
	var i = copy.length;
	while(i--)
	{
	    var box = copy[i];
	    box.setStyle("z-index", i+1);
	}
    };

    /**
     *@ignore
     * color interpoation method
     */
    this.interpolateColor = function(originalColorHex /* String */, newColorHex /* String */, progress /* Number */)
    {
	var originalColor = parseInt(originalColorHex.replace('#', '0x'));
	var newColor = parseInt(newColorHex.replace('#', '0x'));

	//extacts the red channel
	var origRed = (originalColor & 16711680) >> 16;
	//extacts the green channel
	var origGreen = (originalColor & 65280) >> 8;
	//extacts the blue channel
	var origBlue = originalColor & 255;
	// --------------------------------

	//extacts the red channel
	var newRed = (newColor & 16711680) >> 16;
	//extacts the green channel
	var newGreen = (newColor & 65280) >> 8;
	//extacts the blue channel
	var newBlue = newColor & 255;
	//---------------------------------

	var diffRed = newRed - origRed;
	var diffGreen = newGreen - origGreen;
	var diffBlue = newBlue - origBlue;

	var interpolatedRed = origRed+(diffRed*progress);
	var interpolatedGreen = origGreen+(diffGreen*progress);
	var interpolatedBlue = origBlue+(diffBlue*progress);

	var payload = Math.abs((interpolatedRed << 16) | (interpolatedGreen << 8) | interpolatedBlue);

	return [((payload & 16711680) >> 16), (payload & 65280) >> 8,  payload & 255].rgbToHex();
    };

    /**
     * Event handler for calculating the angle
     * based on the user's local mouse position within
     * the worls space.
     * 
     * @param {Event} event the mouseEvent resulting from mouse movement
     */
    this.mouseMoveHandler = function(event)
    {
	this.angle = (event.client.x - this.getPosition().x - this.vp.x) * .01;
    };
};
WorldSpace = new Class(new WorldSpace());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class The <code>Mediator</code> subclass attached to the
 * <code>WorldSpace</code> View. Its primary responsibilities here
 * are to handle notification from the system that require changing
 * the state of the animation (BoxConfigVO data) This <code>Mediator</code> is
 * registered by the <code>ShellMediator</code>'s constructor.
 *
 *@param {WorldSpace} viewComponent The <code>WorldSpace</code> instance.
 * @extends Mediator
 * @see WorldSpace
 * @see ShellMediator
 * @author Justin Wilaby
 */
var WorldSpaceMediator = function(viewComponent /* WorldSpace */){

    /**
     * @ignore
     */
    this.Extends = Mediator;
    /**
     * A named shortcut to the WorldSpace instance.  This
     * prevents us from having to reference the more
     * ambiguous <code>viewComponent</code> property.
     * 
     * @type WorldSpace
     */
    this.worldSpace = null;

    /**
     * @ignore
     */
    this.initialize = function(viewComponent /* WorldSpace */)
    {
	this.parent(WorldSpaceMediator.NAME, viewComponent);
	this.worldSpace = this.getViewComponent();
	// Overrite listener method with ones bound to 'this'
	this.animationStateChangedHandler = this.animationStateChangedHandler.bind(this);
    };

    /**
     * Adds the "animationStateChanged" listener to the <code>WorldSpace</code> instance
     */
    this.onRegister = function()
    {
	this.worldSpace.addEvent("animationStateChanged", this.animationStateChangedHandler);
    };

    /**
     * Removes listeners so the View can be properly disposed of
     * and garbage collected
     */
    this.onRemove = function()
    {
	this.worldSpace.removeEvent("animationStateChanged", this.animationStateChangedHandler);
    };

    /**
     * Provides a list of notification interests to the <code>View</code>.
     * Without an accurate list, the <code>handleNotification()</code> method will
     * may be invoked.  A common mistake by developers is to provide handling
     * routines in the <code>handleNotification()</code> method but forget to
     * add the notification name in the <code>listNotificationInterests()</code> array.
     * <p>Note that changing this array at runtime will not have any affect on
     * notification interests since this method is called by the <code>View</code>
     * a single time when the <code>Mediator</code> is first registered.
     *
     * @return {String[]} the array of notification names to act upon.
     */
    this.listNotificationInterests = function()
    {
	return [
	    ConfigProxy.CONFIG_OPTION_RETRIEVED,
	    ApplicationFacade.TOGGLE_START_STOP
	];
    };

    /**
     * Handles notifications broadcasted by the system provided
     * the notification is listed in the <code>listNotificationInterests()</code>
     * return value.
     *
     * @param {Notification} notification The notification to act upon.
     */
    this.handleNotification = function(notification /* Notification */)
    {
	switch(notification.getName())
	{
	    case ConfigProxy.CONFIG_OPTION_RETRIEVED:
		this.worldSpace.setConfiguration(notification.getBody());
		break;

	    case ApplicationFacade.TOGGLE_START_STOP:
		this.worldSpace.toggleStartStop();
		break;
	}
    };

    /**
     * Handler for "animationStateChaned" events fired from the
     * <code>WorldSpace</code> View. The system is then notified
     * so any interested <code>Mediator</code>'s can act
     *
     * @param {Boolean} inTween indicates whether or not the animation is running.
     */
    this.animationStateChangedHandler = function(inTween)
    {
	this.sendNotification(ApplicationFacade.ANIMATION_STATE_CHANGED, inTween);
    };
};
WorldSpaceMediator = new Class(new WorldSpaceMediator());
/**
 * Constant used as a unique name and identifier
 * @type String
 */
WorldSpaceMediator.NAME = "WorldSpaceMediator";
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/**
 * @misc
 * @class The particle used in the 3D animations.
 *
 * @param {Number} unscaledWidth The unscaled width of the Box.
 * @param {Number} unscaledHeight The unscaled height of the Box.
 * @extends UIComponent
 * @author Justin Wilaby
 */
var Box = function(unscaledWidth /* Number */, unscaledHeight /* Number */){
    /**
     * @ignore
     */
    this.Extends = UIComponent;

    /**
     * The x postition in 3D coordinate space
     * @type Number
     */
    this.posX = 0;
    /**
     * The Y postition in 3D coordinate space
     * @type Number
     */
    this.posY = 0;
    /**
     * The z postition in 3D coordinate space
     * @type Number
     */
    this.posZ = 0;
    /**
     * Width of the box with no scaling applied
     * @type Number
     */
    this.unscaledWidth = 0;
    /**
     * Height of the box with no scaling applied.
     * @type Number
     */
    this.unscaledHeight = 0;

    /**
     * @ignore
     */
    this.initialize = function(unscaledWidth /* Number */, unscaledHeight /* Number */)
    {
	this.unscaledWidth = unscaledWidth;
	this.unscaledHeight = unscaledHeight;

	this.parent('div',{styles:{"position":"absolute", "width":this.unscaledWidth+"px", "height":this.unscaledHeight+"px"}});
    };
};
Box = new Class(new Box());
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
// Kickoff the application
window.addEvent('domready', function()
{
    application = new Shell();
    application.initializeChildren();
    application.childrenInitialized();
    application.initializationComplete();
});