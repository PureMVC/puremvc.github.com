/**
 * @lends Boxsplash.ApplicationFacade.prototype
 */
Ext.namespace("Boxsplash");
Ext.define("Boxsplash.ApplicationFacade", {

  /** @extends puremvc.Facade */
  extend: "puremvc.Facade",

  /**
   * @class <p>A <i>concrete</i> <code>Facade</code> implementation used to facilitate the startup
   *        process of the MVC. This is the 'hub' that accesses and communicates
   *        with the <code>Proxy</code>s, <code>Mediator</code>s and <code>Command</code>s that
   *        do the work in your application.</p>
   *        <p>
   *        Excerpts from "Implementation Idioms and Best Practices" by Cliff
   *        Hall: "...By composition then, the Facade implements and exposes the
   *        features of the Model, View and Controller; aggregating their
   *        functionality and shielding the developer from direct interaction with
   *        the Core actors of the framework..."
   *        </p>
   *        <p>
   *        "By convention, it is named <i>ApplicationFacade</i>, but you may call
   *        it whatever you like".
   *        </p>
   *        <p>
   *        "Once the application's View hierarchy has been built, the PureMVC
   *        apparatus is started and the Model and View regions are prepared for
   *        use." For more information on creating the concrete Facade, see page
   *        11 in "Implementation Idioms and Best Practices" by Cliff Hall.
   *        </p>
   *
   * @param {string} key The multiton key.
   * 
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function(key) {
    this.callParent(arguments);
  },

  /**
   * The <code>Model</code>, <code>View</code> and <code>Controller</code>
   * are initialized in a deliberate order to ensure internal dependencies are
   * satisfied before operations are performed.
   * <p>
   * <code>initializeController()</code> should be overridden for the specific
   * purpose of registering your commands. Any attempt to register
   * <code>Mediator</code>s here will result in an error being thrown
   * because the <code>View</code> has not yet been initialized.
   * </p>
   * <p>Calling <code>this.parent()</code> is also required.
   */
  initializeController: function() {
    // Always call parent
    this.callParent(arguments);
    this.registerCommand(Boxsplash.ApplicationFacade.STARTUP, Boxsplash.controller.StartupCommand);
    this.registerCommand(Boxsplash.ApplicationFacade.RETRIEVE_CONFIG_OPTION, Boxsplash.controller.RetrieveConfigOptionCommand);
  },

  /**
   * Method used to start the system.
   *
   * @param {Boxsplash.view.components.Shell} viewComponent the <code>Shell</code> instance used as the <code>View</code>.
   */
  startup: function(viewComponent /* Shell */) {
    this.sendNotification(Boxsplash.ApplicationFacade.STARTUP, viewComponent);
  },

  statics: {
    /**
     * Constant used to register and identify the notification that should execute
     * the <code>StartupCommand</code>
     *
     * @type String
     * @constant
     * @memberof Boxsplash.ApplicationFacade
     * @see Boxsplash.controller.StartupCommand
     */
    STARTUP: "Startup",

    /**
     * Constant used to register and identify the notification that should execute
     * the <code>RetrieveConfigOptionCommand</code>
     *
     * @type String
     * @constant
     * @memberof Boxsplash.ApplicationFacade
     * @see Boxsplash.controller.RetrieveConfigOptionCommand
     */
    RETRIEVE_CONFIG_OPTION: "retrieveConfigOption",

    /**
     * Constant used to register and identify the notification that should toggle
     * the animation between start and stop.
     *
     * @type String
     * @constant
     * @memberof Boxsplash.ApplicationFacade
     * @see Boxsplash.view.components.ControlPanel
     * @see Boxsplash.view.components.WorldSpace
     */
    TOGGLE_START_STOP: "toggleStartStop",

    /**
     * Constant used to register and identify the notification that is sent when
     * the animation state of the <code>WorldSpace</code> has changed
     *
     * @type String
     * @constant
     * @memberof Boxsplash.ApplicationFacade
     * @see Boxsplash.view.components.ControlPanel
     * @see Boxsplash.view.components.WorldSpace
     */
    ANIMATION_STATE_CHANGED: "animationStateChanged",

    /**
     * @memberof Boxsplash.ApplicationFacade
     *
     * @param {string} key The multiton key.
     *
     * @return {Boxsplash.ApplicationFacade} the <code>Facade</code> subclass instance
     * used throughout the application.
     */
    getInstance: function(key) {
      if (!puremvc.Facade.hasCore(key)) {
        new Boxsplash.ApplicationFacade(key);
      }
      var retVal = puremvc.Facade.getInstance(key);
      return retVal;
    }
  }
});
/**
 * @lends Boxsplash.controller.RetrieveConfigOptionCommand.prototype
 */
Ext.namespace("Boxsplash.controller");
Ext.define("Boxsplash.controller.RetrieveConfigOptionCommand", {

  /** @extends puremvc.SimpleCommand */
  extend: "puremvc.SimpleCommand",

  /**
   * @class <code>SimpleCommand</code> subclass
   * used to retrieve configuration data from the <code>ConfigProxy</code>.
   *
   * @see Boxsplash.model.ConfigProxy
   * @see Boxsplash.ApplicationFacade
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    this.callParent(arguments);
  },

  /**
   * Fulfills the use case given by the <code>Notification</code>.
   * In this case, the retrieval of a specific <code>BoxConfigVO</code>.
   *
   * @param {puremvc.Notification} notification containing the location of a <code>BoxConfigVO</code>.
   *
   * @see Boxsplash.model.vo.BoxConfigVO
   */
  execute: function(notification /* Notification */){
    var configOptionNum = notification.getBody();
    var configProxy = this.facade.retrieveProxy(Boxsplash.model.ConfigProxy.NAME);
    configProxy.retrieveConfigOption(configOptionNum);
  }
});

/**
 * @lends Boxsplash.controller.ModelPrepCommand.prototype
 */
Ext.namespace("Boxsplash.controller");
Ext.define("Boxsplash.controller.ModelPrepCommand", {

  /** @extends puremvc.SimpleCommand */
  extend: "puremvc.SimpleCommand",

  /**
   * @class <code>SimpleCommand</code> subclass that is
   * responsible for preparing the data <code>Model</code>.
   * This is where all <code>Proxy</code> subclasses are
   * registered with the <code>Model</code>.
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    this.callParent(arguments);
  },

  /**
   * Registers the <code>ConfigProxy</code> with the <code>Model</code>.
   *
   * @param {puremvc.Notification} notification the <code>Notification</code> to handle.
   *
   * @see Boxsplash.model.ConfigProxy
   */
  execute: function(notification /* Notification */) {
    this.facade.registerProxy(new Boxsplash.model.ConfigProxy());
  }
});

/**
 * @lends Boxsplash.controller.ViewPrepCommand.prototype
 */
Ext.namespace("Boxsplash.controller");
Ext.define("Boxsplash.controller.ViewPrepCommand", {

  /** @extends puremvc.SimpleCommand */
  extend: "puremvc.SimpleCommand",

  /**
   * @class <code>SimpleCommand</code> subclass that is
   * responsible for preparing the primary View.  This is where the
   * <code>Mediator</code> subclass assigned to the Shell is
   * registered with the <code>Model</code>.
   *
   * @see Boxsplash.view.ShellMediator
   * @see Boxsplash.view.components.Shell
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    this.callParent(arguments);
  },

  /**
   * Executes the command. A <code>Notification</code>
   * instance will always be present as an argument to
   * this method.
   * @param {puremvc.Notification} notification The notification containing
   * the view instance in the <code>body</code> property.
   * (In this case our Shell)
   */
  execute: function(notification /* Notification */) {
    // Extract the Shell instance
    var shell = notification.getBody();

    // Register the ShellMediator passing the Shell
    // instance to its constructor.
    this.facade.registerMediator(new Boxsplash.view.ShellMediator(shell));
  }
});

/**
 * @lends Boxsplash.controller.StartupCommand.prototype
 */
Ext.namespace("Boxsplash.controller");
Ext.define("Boxsplash.controller.StartupCommand", {

  /** @extends puremvc.MacroCommand */
  extend: "puremvc.MacroCommand",

  /**
   * @class A <code>MacroCommand</code> subclass
   * used to satisfy or initialize dependency handling.<p>
   * In this case, our <code>ShellMediator</code>
   * needs to be registered with the <code>View</code>
   * in order to begin communication with the system.</p>
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    this.callParent(arguments);
  },

  /**
   * Overridden to populate the <code>MacroCommand</code>'s
   * <code>subCommands</code> array.
   *
   * @see Boxsplash.controller.ModelPrepCommand
   * @see Boxsplash.controller.ViewPrepCommand
   */
  initializeMacroCommand: function() {
    this.addSubCommand(Boxsplash.controller.ModelPrepCommand);
    this.addSubCommand(Boxsplash.controller.ViewPrepCommand);
  }
});

Ext.namespace("Boxsplash.model.vo");

Ext.define("Boxsplash.model.vo.BoxConfigVO", {

  extend: "Object",

  /**
   * @class The primary <i>Value Object</i> used to store and retrieve
   * configuration data used in the application.
   *
   * @param {String} id the identifier and label of the configuration object.
   * @param {int} numBoxes the number of <code>Box</code> object to display.
   * @param {Number} boxSize width and height of each box.
   * @param {Number} focalLength the distance from the lens to the focal point.
   * @param {String} color the color of each <code>Box</code> instance.
   */
  constructor: function(id /* String */, numBoxes /* int */, boxSize /* Number */,  focalLength /* Number */, color /* String */) {
    this.id = id;
    this.numBoxes = numBoxes;
    this.boxSize = boxSize;
    this.focalLength = focalLength;
    this.color = color;
  }
});
/**
 * @lends Boxsplash.model.ConfigProxy.prototype
 */
Ext.namespace("Boxsplash.model");
Ext.define("Boxsplash.model.ConfigProxy", {

  /** @extends puremvc.Proxy */
  extend: "puremvc.Proxy",

  /**
   * @class The Configuration <code>Proxy</code> used to house
   * and manipulate (if necessary) configuration data for the BoxSplash
   * application.  The data takes its form as <code>BoxConfigVO</code>
   * (Value Objects) containing properties that define the state of the
   * application.
   * <p>In an MVC pattern, the <code>Proxy</code> acts upon notifications from the system
   * or calls to public methods from either <code>SimpleCommand</code>
   * subclasses or <code>Mediator</code> subclasses to retrieve, store, or
   * manipulate data whether the data's physical location happens to be
   * remote or local.</p>
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    // Config options to store in the 'data' property of this proxy.
    var configOptions = [ new Boxsplash.model.vo.BoxConfigVO('Light', 20, 50, 500, '#FF0000'),
      new Boxsplash.model.vo.BoxConfigVO('Medium-light', 40, 30, 400, '#00FF00'),
      new Boxsplash.model.vo.BoxConfigVO('Medium', 80, 20, 300, '#0000FF'),
      new Boxsplash.model.vo.BoxConfigVO('Heavy-medium', 160, 10, 200, '#FF00FF'),
      new Boxsplash.model.vo.BoxConfigVO('Heavy (IE Killer)', 320, 5, 200, '#00FFFF') ];
    this.callParent([Boxsplash.model.ConfigProxy.NAME, configOptions]);
  },

  /**
   * Retrieves the specified configuration option.  In this case, by index.
   * 
   * @param {int} optionNum The index of the <code>BoxConfigVO</code>
   * stored in the <code>data</code> Object.
   */
  retrieveConfigOption: function(optionNum /* int */) {
    this.sendNotification(Boxsplash.model.ConfigProxy.CONFIG_OPTION_RETRIEVED,
        this.data[optionNum]);
  },

  statics: {
    /**
     * Constant defining the unique name of this <code>Proxy</code> subclass.
     * @type String
     * @constant
     * @memberof Boxsplash.model.ConfigProxy
     */
    NAME: "ConfigProxy",

    /**
     * Constant used to name the <i>outbound</i> notification
     * resulting from a call to the <code>retrieveConfigOption</code> method.
     * @type String
     * @constant
     * @memberof Boxsplash.model.ConfigProxy
     */
    CONFIG_OPTION_RETRIEVED: "configOptionRetrieved"
  }
});
/**
 * @lends Boxsplash.view.components.core.UIComponent.prototype
 */
Ext.namespace("Boxsplash.view.components.core");
Ext.define("Boxsplash.view.components.core.UIComponent", {

  /** @extends Ext.util.Observable */
  extend: "Ext.util.Observable",

  /**
   * <code>true</code> if the component has
   * been initialized, <code>false</code> otherwise.
   * @type Boolean
   */
  initialized: false,

  /**
   * The <code>Ext.Element</code> used as
   * the subject of this UIComponent instance.
   * @type Ext.Element
   */
  element: null,

  /**
   * @class A wrapper class whose primary goal is to encourage the addition
   * of elements to the DOM in a top-down fashion.
   *
   * @param {String|Ext.Element} element String or Ext.Element to become the subject
   * of the instance.<p>If a string is passed, an element ID is assumed first.
   * If the element ID is not found in the DOM, a tag name is assumed and
   * Ext core will attempt to create that Ext.Element.</p><p>If an Ext.Element is
   * passed in, it is left as-is.</p>
   * @param {Object} config The Object containing the default configuration properties
   * to use to pre-configure the event handling mechanism of Ext.util.Observable.
   * @param {Object} styles The Object containing CSS stylesheet properties to use to
   * style the underlying Ext.Element.
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @see Boxsplash.view.components.Box
   * @see Boxsplash.view.components.ControlPanel
   * @see Boxsplash.view.components.Shell
   * @see Boxsplash.view.components.WorldSpace
   *
   * @constructs
   */
  constructor: function(element /* String/Ext.Element */, config /* Object */, styles /* Object */) {
    if (element) {
      this.element = Boxsplash.view.components.core.UIComponent.buildElement(element, styles);
    }
    if (config) {
      if (config.events) {
        this.addEvents(config.events);
      }
      if (config.listeners) {
        this.listeners = config.listeners;
      }
      this.callParent([config]);
    }
    else {
      this.callParent([]);
    }
  },

  /**
   * Used in the creation of children used in this component.
   * Override this method to create new <code>UIComponent</code>s or 'grab'
   * existing DOM nodes.
   */
  initializeChildren: function(){},

  /**
   * Called after <code>initializeChildren()</code>.
   * Override this method for additional processing
   * or adding event listeners to children.
   */
  childrenInitialized: function(){},

  /**
   * Called after <code>childrenInitialized()</code>.
   * Override this method to perform any final processing
   * before the child is considered initialized.
   */
  initializationComplete: function(){
    this.initialized = true;
  },

  /**
   * Adds the given component as an immediate child to this <code>UIComponent</code> instance
   * and invokes the three entry point methods to manage the children of the given component.
   * @param {Boxsplash.view.components.core.UIComponent} child The child component to append.
   *
   * @return this object - can be used for method/property chaining.
   * @type Boxsplash.view.components.core.UIComponent
   */
  addChild: function(child /* UIComponent */) {
    this.element.appendChild(child.element);

    // Initialize children
    child.initializeChildren();
    child.childrenInitialized();
    child.initializationComplete();

    return this;
  },

  statics: {
    /**
     * Convenience method for creating and configuring an Ext.Element instance.
     *
     * @param element {String|Ext.Element|Object} The String id of an element in the DOM,
     * an instance of Ext.Element, or the Object containing the default configuration properties
     * that describe a DOM element to use to set up the underlying Ext.Element.
     * @param {Object} styles The Object containing CSS stylesheet properties to use to
     * style the underlying Ext.Element.
     *
     * @memberof Boxsplash.view.components.core.UIComponent
     */
    buildElement: function(element /* String|Ext.Element|Object */, styles /* Object */) {
      var el = null;
      if (element) {
        if (Ext.isString(element) || Ext.isElement(element)){
          el = Ext.get(element);
          if (el) {
            el = new Ext.Element(el, true);
          }
        }
        else if (Ext.isObject(element)) {
          el = new Ext.Element(Ext.DomHelper.createDom(element));
        }
        if (styles) {
          if (Ext.isObject(styles)) {
            Ext.DomHelper.applyStyles(el.dom, styles);
          }
        }
      }
      return el;
    },

    /**
     * Convenience method for creating a simple instance of UIComponent without the details
     * of preconfiguring the event handling mechanism of Ext.util.Observable.
     *
     * @param element {String|Ext.Element|Object} The String id of an element in the DOM,
     * an instance of Ext.Element, or the Object containing the default configuration properties
     * that describe a DOM element to use to set up the underlying Ext.Element.
     * @param {Object} styles The Object containing CSS stylesheet properties to use to
     * style the underlying Ext.Element.
     *
     * @memberof Boxsplash.view.components.core.UIComponent
     */
    buildComponent: function(element, styles) {
      var el = Boxsplash.view.components.core.UIComponent.buildElement(element, styles);
      var component = new Boxsplash.view.components.core.UIComponent(el);
      return component;
    }
  }
});
/**
 * @lends Boxsplash.view.components.Box.prototype
 */
Ext.namespace("Boxsplash.view.components");
Ext.define("Boxsplash.view.components.Box", {

  /** @extends Boxsplash.view.components.core.UIComponent */
  extend: "Boxsplash.view.components.core.UIComponent",

  /**
   * @class The particle used in the 3D animations.
   *
   * @param {Number} unscaledWidth The unscaled width of the Box.
   * @param {Number} unscaledHeight The unscaled height of the Box.
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function(unscaledWidth /* Number */, unscaledHeight /* Number */) {
    this.callParent([{tag: 'div'}, null, {
      "position": "absolute",
      "width": unscaledWidth + "px",
      "height": unscaledHeight + "px"
    }]);
    this.unscaledWidth = unscaledWidth;
    this.unscaledHeight = unscaledHeight;
  },

  /**
   * The x position in 3D coordinate space.
   * 
   * @type Number
   */
  posX: 0,

  /**
   * The Y position in 3D coordinate space.
   * 
   * @type Number
   */
  posY: 0,

  /**
   * The z position in 3D coordinate space.
   * 
   * @type Number
   */
  posZ: 0,

  /**
   * Width of the box with no scaling applied.
   *
   * @type Number
   */
  unscaledWidth: 0,

  /**
   * Height of the box with no scaling applied.
   * 
   * @type Number
   */
  unscaledHeight: 0
});

/**
 * @lends Boxsplash.view.components.ControlPanel.prototype
 */
Ext.namespace("Boxsplash.view.components");
Ext.define("Boxsplash.view.components.ControlPanel", {

  /** @extends Boxsplash.view.components.core.UIComponent */
  extend: "Boxsplash.view.components.core.UIComponent",

  /**
   * @class The <code>View</code> used to control the world space and
   * load the various configuration settings available to the user.
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    this.callParent(["control-panel", {events:{loadConfig:true, toggleStartStop:true}}]);

    // Overwrite listener handlers with methods bound to 'this'
    this.button_clickHandler = Ext.bind(this.button_clickHandler, this);
    this.startStop_clickHandler = Ext.bind(this.startStop_clickHandler, this);
  },

  /**
   * The label displaying the control panel title at the top.
   *
   * @type Boxsplash.view.components.core.UIComponent
   */
  headerLabel: null,

  /**
   * The label displaying the title for the configuration buttons.
   *
   * @type Boxsplash.view.components.core.UIComponent
   */
  availableConfigsLabel: null,

  /**
   * The label displaying the the currently selected configuration.
   *
   * @type Boxsplash.view.components.core.UIComponent
   */
  currentConfigLabel: null,

  /**
   * The configuration buttons list.
   *
   * @type Array
   */
  configButtons: [],

  /**
   * Button to start and stop the animation.
   *
   * @type Boxsplash.view.components.core.UIComponent
   */
  stopStartButton: null,

  /**
   * Creates all children required to create the initial <code>View</code> state of this
   * control and adds them to the DOM.
   */
  initializeChildren: function() {
    this.headerLabel = new Boxsplash.view.components.core.UIComponent({tag: 'h1', id: 'header-label', html: 'Control Panel'});
    this.addChild(this.headerLabel);

    this.availableConfigsLabel = new Boxsplash.view.components.core.UIComponent({tag: 'p', id: 'available-configs-label', html: 'Available Configurations:'});
    this.addChild(this.availableConfigsLabel);

    this.currentConfigLabel = new Boxsplash.view.components.core.UIComponent({tag: 'p', id: 'current-config-label', html: 'Now Displaying:'});
    this.addChild(this.currentConfigLabel);

    this.stopStartButton = new Boxsplash.view.components.core.UIComponent({tag: 'button', id: 'startButton', html: 'Start'}, null, {position: 'absolute'});
    this.addChild(this.stopStartButton);
  },

  /**
   * Adds the 'click' listener to the startStop button after creation.
   */
  childrenInitialized: function() {
    this.stopStartButton.element.addListener('click', this.startStop_clickHandler);
  },

  /**
   * Called after <code>childrenInitialized()</code>.
   * Override this method to perform any final processing
   * before the child is considered initialized.
   */
  initializationComplete: function(){
    this.callParent(arguments);
  },

  /**
   * Creates buttons based on the array of <code>BoxConfigVO</code>
   * objects.  In this case, this function is called from the <code>ControlPanelMediator</code>'s
   * <code>onRegister()</code> method and is based on the data contained
   * within the <code>ConfigProxy</code>'s <code>data</code> property.
   *
   * @param {Boxsplash.model.vo.BoxConfigVO[]} value An array of BoxConfigVO objects to base the config buttons on.
   *
   * @see Boxsplash.model.vo.BoxConfigVO
   * @see Boxsplash.view.ControlPanelMediator
   * @see Boxsplash.model.ConfigProxy
   */
  setConfigurationButtons: function(value /* Array of BoxConfigVO */) {
    var button = null;

    // Remove the old buttons if we have them.
    while (this.configButtons.length > 0) {
      button = this.configButtons.pop();
      Ext.removeNode(button.element);
    }
    this.configButtons = [];

    // Add the new ones based on the passed array.
    var posY = 50;
    var len = value.length;
    for (var i = 0; i < len; i++)	{
      var boxConfigVO = value[i];
      var buttonId = '_button' + (i + 1);
      button = new Boxsplash.view.components.core.UIComponent({tag: 'button', id: buttonId, html: boxConfigVO.id}, null, {position: "absolute", top: posY, left: 5, width: 150});

      // Store the index location of the button so
      // we can easily find which BoxConfig to load.
      button.element.dom["__index"] = i;

      // Add the click handler.
      button.element.addListener('click', this.button_clickHandler);
    
      // Retain it in our array for later reference.
      this.configButtons.push(button);

      this.addChild(button);

      // Position the button.
      posY += button.element.getHeight();
    }

    // Reposition the current config label so that it's below the buttons.
    Ext.DomHelper.applyStyles(this.currentConfigLabel.element.dom, {top: posY.toString() + "px"});
    posY += this.currentConfigLabel.element.getHeight() + 10; // Padding

    // Set the position of the start/stop button.
    Ext.DomHelper.applyStyles(this.stopStartButton.element.dom, {top: (posY + 10).toString() + "px"});
  },

  /**
   * Sets the label of the configuration 'p' tag. This function
   * is called by the <code>ControlPanelMediator</code>
   * in response to the <code>ConfigProxy.CONFIG_OPTION_RETRIEVED</code>
   * <code>Notification</code>.
   *
   * @param {String} value the string to append to the label's text.
   *
   * @see Boxsplash.view.ControlPanelMediator
   * @see Boxsplash.model.ConfigProxy
   */
  setConfigurationLabel: function(value /* String */) {
    Ext.fly('current-config-label').update("Now Displaying: " + value);
  },

  /**
   * Sets the appropriate label for the startStop button
   * based on the current state of the animation.
   *
   * @param {Boolean} inTween indicates whether or not the animation is running.
   */
  animationStateChanged: function(inTween) {
    var wrapper = Ext.fly('startButton');
    if (inTween) {
      wrapper.update("Stop");
    }
    else {
      wrapper.update("Start");
    }
  },

  /**
   * Event handler for handling clicks from the user on configuration buttons.
   *
   * @param {Event} event the MouseEvent resulting from a click by the user.
   */
  button_clickHandler: function(event, buttonElement) {
    var index = buttonElement["__index"];

    // Dispatch our custom event to be picked up by the ControlPanelMediator.
    this.fireEvent("loadConfig", index);
  },

  /**
   * Event handler for handling clicks from the startStop button.
   * 
   * @param {Event} event the MouseEvent resulting from a click by the user.
   */
  startStop_clickHandler: function(event, buttonElement) {
    this.fireEvent("toggleStartStop");
  }
});

/**
 * @lends Boxsplash.view.components.WorldSpace.prototype
 */
Ext.namespace("Boxsplash.view.components");
Ext.define("Boxsplash.view.components.WorldSpace", {

  /** @extends Boxsplash.view.components.core.UIComponent */
  extend: "Boxsplash.view.components.core.UIComponent",

  /**
   * @class <code>View</code> used as the space for the 3D box animations.
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    this.callParent(["world-space", {events:{animationStateChanged:true}}]);

    // Overwrite listeners with methods bound to 'this' instance of the class.
    this.mouseMoveHandler = Ext.bind(this.mouseMoveHandler, this);
    this.tick = Ext.bind(this.tick, this);
    this.startAnimation = Ext.bind(this.startAnimation, this);
    this.stopAnimation = Ext.bind(this.stopAnimation, this);
  },

  /**
   * Boolean indicating whether or not the animation is running.
   *
   * @type Boolean
   */
  inTween: false,

  /**
   * The array of <code>Box</code> objects currently on stage.
   *
   * @type Array
   */
  boxes: [],

  /**
   * The current focal length of the <code>WorldSpace</code>.
   *
   * @type Number
   */
  focalLength: 0,

  /**
   * The currently calculated angle of the <code>WorldSpace</code>.
   *
   * @type Number
   */
  angle: 0,

  /**
   * The vanishing point of the <code>WorldSpace</code> (always center).
   *
   * @type Object
   */
  vp: {x: 0, y: 0},

  /**
   * The <code>BoxConfigVO</code> currently in play.
   *
   * @type Boxsplash.model.vo.BoxConfigVO
   */
  currentConfig: null,

  /**
   * Processes data contained in a <code>BoxConfigVO</code> and
   * sets up the <code>WorldSpace</code> accordingly.
   *
   * @param {Boxsplash.model.vo.BoxConfigVO} value the <code>BoxConfigVO</code> instance as the
   * basis for the <code>WorldSpace</code> state.
   */
  setConfiguration: function(value /* BoxConfigVO */) {
    // Bail if the BoxConfigVO's are the same.
    if (this.currentConfig != value) {
      this.currentConfig = value;

      // Stop the timer if we have one running.
      this.stopAnimation();
      this.removeAllBoxes();
      this.createWorldFromConfig();
      this.startAnimation();
    }
  },

  /**
   * Toggles the animation between start and stop
   * and returns true if the animation was started or
   * false if it was stopped.  This method is usually called by the
   * <code>WorldSpaceMediator</code> in response to the
   * <code>ApplicationFacade.TOGGLE_START_STOP</code> notification.
   *
   * @return true if the animation was started, false if it was stopped.
   * @type Boolean
   *
   * @see Boxsplash.view.WorldSpaceMediator
   * @see Boxsplash.ApplicationFacade
   */
  toggleStartStop: function() {
    if (this.inTween) {
      this.stopAnimation();
    }
    else {
      this.startAnimation();
    }
    return this.inTween;
  },

  /**
   * @private
   * Configuration options for setting up a timer-managed task with Ext.TaskManager.
   */
  task: {
    run: null,
    interval: 10 // 1/100 second
  },

  /**
   * Removes all boxes from the DOM and
   * the <code>boxes</code> array.  Calling this
   * does not stop the interval from running.
   */
  removeAllBoxes: function() {
    while (this.boxes.length) {
      Ext.removeNode(this.boxes.pop().element.dom);
    }
  },

  /**
   * Creates instances of the <code>Box</code> based on
   * the current <code>BoxConfigVO</code>.
   */
  createWorldFromConfig: function() {
    if (this.currentConfig) { 
      this.focalLength =  this.currentConfig.focalLength;
      var numBoxes = this.currentConfig.numBoxes;
      var color = this.currentConfig.color;
      var boxSize = this.currentConfig.boxSize;

      // Randomize the placement of the boxes in the world space.
      while (numBoxes--) {
        var box = new Boxsplash.view.components.Box(boxSize, boxSize);
        box.posX = Math.random() * 250 - 125;
        box.posY = Math.random() * 250 - 125;
        box.posZ = Math.random() * this.focalLength - (this.focalLength / 2);
        box.element.setStyle({"background":color, border:"1px solid #FFF"});
        this.boxes.push(box);
        this.addChild(box);
      }
    }
  },

  /**
   * Starts the Animation.
   */
  startAnimation: function() {
    if (!this.inTween) {
      var worldSpace = this.element;
      this.vp.x = worldSpace.getWidth() / 2;
      this.vp.y = worldSpace.getHeight() / 2;

      if (this.boxes.length) {
        this.element.addListener("mousemove", this.mouseMoveHandler);
        this.task.run = this.tick;
        Ext.TaskManager.start(this.task);
        this.inTween = true;

        // Notify interested entities that the state has changed.
        this.fireEvent("animationStateChanged", this.inTween);
      }
    }
  },

  /**
   * Stops the animation.
   */
  stopAnimation: function() {
    if (this.inTween) {
      this.element.removeListener("mousemove", this.mouseMoveHandler);

      Ext.TaskManager.stop(this.task);
      this.task.run = this.tick;

      this.angle = 0;
      this.inTween = false;

      // Notify interested entities that the state has changed.
      this.fireEvent("animationStateChanged", this.inTween);
    }
  },

  /**
   * Updates the position, size, z-index and color
   * of each box for each "tick" of the timer.
   */
  tick: function() {
    var i = this.boxes.length;
    var rads = (this.angle * Math.PI) / 180;
    var cos = Math.cos(rads);
    var sin = Math.sin(rads);
    while (i--) {
      var box = this.boxes[i];
      var x1 = (box.posX * cos) - (box.posZ * sin);
      var z1 = (box.posZ * cos) + (box.posX * sin);
      var scale = this.focalLength / (this.focalLength + box.posZ);

      var progress = (z1 > 0) ? z1 /  (this.focalLength / 2) : 0;
      var bgColor = this.interpolateColor(this.currentConfig.color, "#222222", progress);
      var borderColor = this.interpolateColor("#FFFFFF", "#010101", progress);
      box.posX = x1;
      box.posZ = z1;

      box.element.setStyle({
        left: this.vp.x  + (box.posX * scale),
        top: this.vp.y + (box.posY * scale),
        width: box.unscaledWidth * scale,
        height: box.unscaledHeight * scale,
        "background-color": bgColor,
        "border-color": borderColor
      });

    }
    this.sortZ();
  },

  /**
   * Updates the z-order position of each <code>Box</code> in the array of <code>Box</code>es.
   */
  sortZ: function() {
    var copy = this.boxes.concat();
    copy.sort(function(a, b) {
      var retVal = (b.posZ == a.posZ ? 0 : ((b.posZ > a.posZ ? 1 : -1)));
      return retVal;
    });

    var count = copy.length;
    for (var i = 0; i < count; i++) {
      var zIndex = count - i;
      var box = copy[zIndex - 1];
      box.element.setStyle("z-index", zIndex);
    }
  },

  /**
   * A routine for interpolating the appropriate color a given distance between two given colors.
   *
   * @param originalColorHex {String} the RGB color value of the start color.
   * @param newColorHex {String} the RGB color value for the end color.
   * @param progress {Number} the ratio between the start and end colors.
   *
   * @return the RGB color value for the color that occurs between the given start and end colors.
   * @type String
   */
  interpolateColor: function(originalColorHex /* String */, newColorHex /* String */, progress /* Number */) {
    var originalColor = parseInt(originalColorHex.replace('#', '0x'));
    var newColor = parseInt(newColorHex.replace('#', '0x'));

    // Extracts the red channel.
    var origRed = (originalColor & 0xFF0000) >> 16;

    // Extracts the green channel.
    var origGreen = (originalColor & 0xFF00) >> 8;

    // Extracts the blue channel.
    var origBlue = originalColor & 0xFF;
    // --------------------------------

    // Extracts the red channel.
    var newRed = (newColor & 0xFF0000) >> 16;

    // Extracts the green channel.
    var newGreen = (newColor & 0xFF00) >> 8;

    // Extracts the blue channel.
    var newBlue = newColor & 0xFF;
    //---------------------------------

    var diffRed = newRed - origRed;
    var diffGreen = newGreen - origGreen;
    var diffBlue = newBlue - origBlue;

    var interpolatedRed = origRed + (diffRed * progress);
    var interpolatedGreen = origGreen + (diffGreen * progress);
    var interpolatedBlue = origBlue + (diffBlue * progress);

    var payload = Math.abs((interpolatedRed << 16) | (interpolatedGreen << 8) | interpolatedBlue);

    return "#" + this.rgbToHex([((payload & 0xFF0000) >> 16), (payload & 0xFF00) >> 8,  payload & 0xFF]);
  },

  /**
   * Event handler for calculating the angle
   * based on the user's local mouse position within
   * the world space.
   *
   * @param {Event} event the mouseEvent resulting from mouse movement.
   * @param {Object} target the target Object of the resultant mouseEvent.
   */
  mouseMoveHandler: function(event, target) {
    event.preventDefault();
    var newAngle = (event.getXY()[0] - this.element.getX() - this.vp.x) * .01;
    this.angle = newAngle;
  },

  /**
   * Utility routine for converting a color value specified as
   * an array of Red, Green, and Blue decimal values to a numerical
   * hex value for representation as RGB String notation.
   *
   * @param value {Number[]} an array of RGB color components to convert.
   *
   * @return the hex string value that represents an RGB color.
   * @type String
   */
  rgbToHex: function(value) {
    /**
     * Converts a decimal value to its corresponding hex value as a string.
     * @inner
     * @param N the decimal value to convert to a hex string.
     */
    function _toHex(N) {
      if (N == null) {
        return "00";
      }
      N = parseInt(N);
      if (N == 0 || isNaN(N)) {
        return "00";
      }
      N = Math.max(0, N);
      N = Math.min(N, 255);
      N = Math.round(N);
      return "0123456789ABCDEF".charAt((N-N % 16) / 16)
          + "0123456789ABCDEF".charAt(N % 16);
    }
    var R = value[0], G = value[1], B = value[2];
    return _toHex(R) + _toHex(G) + _toHex(B);
   }
});

/**
 * @lends Boxsplash.view.components.Shell.prototype
 */
Ext.namespace("Boxsplash.view.components");
Ext.define("Boxsplash.view.components.Shell", {

  /** @extends Boxsplash.view.components.core.UIComponent */
  extend: "Boxsplash.view.components.core.UIComponent",

  /**
   * @class Serves as the main application's <code>View</code>.
   * All other <code>View</code>s will become children of this control making
   * the <code>Shell</code> act as the 'stage'.
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function() {
    this.callParent(["shell"]);
  },

  /**
   * The 'control panel' View instance used in the application.
   *
   * @type Boxsplash.view.components.core.UIComponent
   * @see Boxsplash.view.components.core.UIComponent
   */
  controlPanel: null,

  /**
   * The viewport for the 3D Box animation.
   *
   * @type Boxsplash.view.components.core.UIComponent
   * @see Boxsplash.view.components.core.UIComponent
   */
  worldSpace: null,

  /**
   * Creates and adds the control panel and
   * world space to this as children.
   */
  initializeChildren: function() {
    this.controlPanel = new Boxsplash.view.components.ControlPanel();
    this.addChild(this.controlPanel);
    //-----------------
    this.worldSpace = new Boxsplash.view.components.WorldSpace();
    this.addChild(this.worldSpace);
  }
});

/**
 * @lends Boxsplash.view.ControlPanelMediator.prototype
 */
Ext.namespace("Boxsplash.view");
Ext.define("Boxsplash.view.ControlPanelMediator", {

  /** @extends puremvc.Mediator */
  extend: "puremvc.Mediator",

  /**
   * @class The <code>Mediator</code> subclass attached to the
   * <code>ControlPanel</code> <code>View</code>. Its primary responsibilities here
   * are to listen for and notify the system of user interactions that change
   * the state of the application including that of other <code>View<code>s; specifically
   * start/stop and config button clicks.  This <code>Mediator</code> is
   * registered by the <code>ShellMediator</code>'s constructor.
   *
   * @param {Boxsplash.view.components.ControlPanel} viewComponent the <code>ControlPanel</code> instance
   * assigned to this mediator.
   *
   * @see Boxsplash.view.components.ControlPanel
   * @see Boxsplash.view.ShellMediator
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function(viewComponent /* ControlPanel */) {
    this.callParent([Boxsplash.view.ControlPanelMediator.NAME, viewComponent]);
    this.controlPanel = this.getViewComponent();
  },

  /**
   * A named shortcut to the <code>ControlPanel</code> instance.  This
   * prevents us from having to reference the more
   * ambiguous <code>viewComponent</code> property.
   * @type Boxsplash.view.components.ControlPanel
   */
  controlPanel: null,

  /**
   * The <code>ConfigProxy</code> instance registered to the
   * <code>ApplicationFacade</code>. It is retrieved here to act as
   * a descriptor for the initial state of the <code>View</code> based on
   * the <code>data</code> property contents.
   *
   * @type Boxsplash.model.ConfigProxy
   * @see Boxsplash.ApplicationFacade
   */
  configProxy: null,

  /**
   * Provides a list of notification interests to the <code>View</code>.
   * Without an accurate list, the <code>handleNotification()</code> method
   * may not be invoked.  A common mistake made by developers is to provide handling
   * routines in the <code>handleNotification()</code> method but forget to
   * add the notification name in the <code>listNotificationInterests()</code> array.
   * <p>Note that changing this array at runtime will not have any effect on
   * notification interests since this method is called by the <code>View</code>
   * a single time when the <code>Mediator</code> is first registered.
   *
   * @return {String[]} the array of notification names to act upon.
   */
  listNotificationInterests: function() {
    return [
            Boxsplash.model.ConfigProxy.CONFIG_OPTION_RETRIEVED,
            Boxsplash.ApplicationFacade.ANIMATION_STATE_CHANGED
            ];
  },

  /**
   * Handles notifications broadcasted by the system provided that
   * the <code>Notification</code> is listed in the <code>listNotificationInterests()</code>
   * return value.
   *
   * @param {puremvc.Notification} notification the notification to act upon.
   */
  handleNotification: function(notification /* Notification */) {
    switch (notification.getName()) {
      case Boxsplash.model.ConfigProxy.CONFIG_OPTION_RETRIEVED:
        var boxConfigVO = notification.getBody();
        this.controlPanel.setConfigurationLabel(boxConfigVO.id);
        break;

      case Boxsplash.ApplicationFacade.ANIMATION_STATE_CHANGED:
        this.controlPanel.animationStateChanged(notification.getBody());
        break;
    }
  },

  /**
   * Performs actions when the <code>Mediator</code> is registered by
   * the <code>View</code>.  Here we listen for the "loadConfig" and "toggleStartStop"
   * events from the <code>ControlPanel</code> and set the configuration buttons
   * based on the contents of the <code>ConfigProxy</code>'s <code>data</code>
   * property.
   *
   * @see Boxsplash.view.components.ControlPanel
   * @see Boxsplash.model.ConfigProxy
   */
  onRegister: function() {
    this.callParent(arguments);
    this.configProxy = this.facade.retrieveProxy(Boxsplash.model.ConfigProxy.NAME);

    // Replace listener handlers with methods bound to 'this'
    this.loadConfigHandler = Ext.bind(this.loadConfigHandler, this);
    this.toggleStartStopHandler = Ext.bind(this.toggleStartStopHandler, this);

    this.controlPanel.addListener("loadConfig", this.loadConfigHandler);
    this.controlPanel.addListener("toggleStartStop", this.toggleStartStopHandler);
    this.controlPanel.setConfigurationButtons(this.configProxy.data);
  },

  /**
   * Removes listeners so that the <code>View</code> can be properly disposed of
   * and garbage collected.
   */
  onRemove: function() {
    this.callParent(arguments);
    this.controlPanel.removeListener("loadConfig", this.loadConfigHandler);
    this.controlPanel.removeListener("toggleStartStop", this.toggleStartStopHandler);
  },

  /**
   * Event handler for the "loadConfig" event dispatched by the
   * <code>ControlPanel</code> in response to user clicks on any
   * of the configuration buttons.
   *
   * @param {int} index the index of the desired configuration option settings to load.
   */
  loadConfigHandler: function(index) {
    this.sendNotification(Boxsplash.ApplicationFacade.RETRIEVE_CONFIG_OPTION, index);
  },

  /**
   * Event handler for the "toggleStartStop" event dispatched
   * by the <code>ControlPanel</code> in response to user clicks
   * on the <i>startStop</i> button.
   */
  toggleStartStopHandler: function() {
    this.sendNotification(Boxsplash.ApplicationFacade.TOGGLE_START_STOP);
  },

  statics: {
    /**
     * Constant used as the unique name and identifier for this <code>Mediator</code> subclass.
     * @type String
     * @constant
     * @memberof Boxsplash.view.ControlPanelMediator
     */
    NAME: "ControlPanelMediator"
  }
});
/**
 * @lends Boxsplash.view.WorldSpaceMediator.prototype
 */
Ext.namespace("Boxsplash.view");
Ext.define("Boxsplash.view.WorldSpaceMediator", {

  /** @extends puremvc.Mediator */
  extend: "puremvc.Mediator",

  /**
   * @class The <code>Mediator</code> subclass attached to the
   * <code>WorldSpace</code> <code>View</code>. Its primary responsibilities here
   * are to handle notification from the system that require changing
   * the state of the animation (<code>BoxConfigVO</code> data) This <code>Mediator</code> is
   * registered by the <code>ShellMediator</code>'s constructor.
   *
   * @param {Boxsplash.view.WorldSpace} viewComponent The <code>WorldSpace</code> instance.
   *
   * @see Boxsplash.view.components.WorldSpace
   * @see Boxsplash.view.ShellMediator
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function(viewComponent /* WorldSpace */) {
    this.callParent([Boxsplash.view.WorldSpaceMediator.NAME, viewComponent]);
    this.worldSpace = this.getViewComponent();
  },

  /**
   * A named shortcut to the <code>WorldSpace</code> instance.
   * This prevents us from having to reference the more
   * ambiguous <code>viewComponent</code> property.
   *
   * @type Boxsplash.view.components.WorldSpace
   */
  worldSpace: null,

  /**
   * Adds the "animationStateChanged" listener to the <code>WorldSpace</code> instance.
   */
  onRegister: function() {
    this.callParent(arguments);

    // Overwrite listener method with one bound to 'this'
    this.animationStateChangedHandler = Ext.bind(this.animationStateChangedHandler, this);

    this.worldSpace.addListener("animationStateChanged", this.animationStateChangedHandler);
  },

  /**
   * Removes listeners so that the <code>View</code> can be properly disposed of and garbage collected.
   */
  onRemove: function() {
    this.callParent(arguments);
    this.worldSpace.removeListener("animationStateChanged", this.animationStateChangedHandler);
  },

  /**
   * Provides a list of notification interests to the <code>View</code>.
   * Without an accurate list, the <code>handleNotification()</code> method
   * may not be invoked.  A common mistake made by developers is to provide handling
   * routines in the <code>handleNotification()</code> method but forget to
   * add the notification name in the <code>listNotificationInterests()</code> array.
   * <p>Note that changing this array at runtime will not have any effect on
   * notification interests since this method is called by the <code>View</code>
   * a single time when the <code>Mediator</code> is first registered.
   *
   * @return {String[]} the array of notification names to act upon.
   */
  listNotificationInterests: function() {
    return [
            Boxsplash.model.ConfigProxy.CONFIG_OPTION_RETRIEVED,
            Boxsplash.ApplicationFacade.TOGGLE_START_STOP
            ];
  },

  /**
   * Handles notifications broadcasted by the system provided that
   * the <code>Notification</code> is listed in the <code>listNotificationInterests()</code>
   * return value.
   *
   * @param {puremvc.Notification} notification the notification to act upon.
   */
  handleNotification: function(notification /* Notification */) {
    switch (notification.getName()) {
      case Boxsplash.model.ConfigProxy.CONFIG_OPTION_RETRIEVED:
        this.worldSpace.setConfiguration(notification.getBody());
        break;

      case Boxsplash.ApplicationFacade.TOGGLE_START_STOP:
        this.worldSpace.toggleStartStop();
        break;
    }
  },

  /**
   * Handler for "animationStateChanged" events fired from the
   * <code>WorldSpace</code> <code>View</code>. The system is then notified
   * so any interested <code>Mediator</code>'s can act.
   *
   * @param {Boolean} inTween indicates whether or not the animation is running.
   */
  animationStateChangedHandler: function(inTween) {
    this.sendNotification(Boxsplash.ApplicationFacade.ANIMATION_STATE_CHANGED, inTween);
  },

  statics: {
    /**
     * Constant used as a unique name and identifier for this <code>Mediator</code> subclass.
     * @type String
     * @constant
     * @memberof Boxsplash.view.WorldSpaceMediator
     */
    NAME: "WorldSpaceMediator"
  }
});
/**
 * @lends Boxsplash.view.ShellMediator.prototype
 */
Ext.namespace("Boxsplash.view");
Ext.define("Boxsplash.view.ShellMediator", {

  /** @extends puremvc.Mediator */
  extend: "puremvc.Mediator",

  /**
   * A named shortcut to the <code>Shell</code> instance.  This
   * prevents us from having to reference the more
   * ambiguous <code>viewComponent</code> property.
   * @type Boxsplash.view.components.Shell
   */
  shell: null,

  /**
   * @class The <code>Mediator</code> subclass attached to
   * the <code>Shell</code>.  Its primary responsibility here is
   * to register additional <code>Mediator<code>s for child <code>View</code>s but
   * it can listen for and/or send <code>Notification</code>s and steward
   * state changes for the View.
   *
   * @param {Boxsplash.view.components.Shell} viewComponent the view component to register with the <code>ShellMediator</code>.
   *
   * @see Boxsplash.view.components.Shell
   * @see Boxsplash.view.WorldSpaceMediator
   * @see Boxsplash.view.ControlPanelMediator
   *
   * @author Justin Wilaby
   * @author Tony DeFusco
   *
   * @constructs
   */
  constructor: function(viewComponent /* Shell */) {
    this.callParent([Boxsplash.view.ShellMediator.NAME, viewComponent]);
    this.shell = this.getViewComponent();
  }, 

  /**
   * Called by the <code>View</code> when the <code>Mediator</code> is registered.
   * This method is usually overridden as needed by the subclass.
   */
  onRegister: function() {
    this.callParent(arguments);

    // Handle creation and registration of all remaining Mediators here.
    this.facade.registerMediator(new Boxsplash.view.WorldSpaceMediator(this.shell.worldSpace));
    this.facade.registerMediator(new Boxsplash.view.ControlPanelMediator(this.shell.controlPanel));
  },

  statics: {
    /**
     * Constant used as a unique name for this <code>Mediator</code> subclass.
     * @type String
     * @constant
     * @memberof Boxsplash.view.ShellMediator
     */
    NAME: "ShellMediator"
  }
});
