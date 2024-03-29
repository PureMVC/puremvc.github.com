///<reference path='../../../../../../test/lib/YUITest.d.ts'/>
///<reference path='../../../../../../bin/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='ControllerTestVO.ts'/>
///<reference path='ControllerTestCommand2.ts'/>
///<reference path='ControllerTestCommand.ts'/>

module test
{
	"use strict";

	/**
	 * Test the PureMVC Controller class.
	 */
	export class ControllerTest
	{
		/**
		 * The name of the test case - if not provided, one is automatically generated by the
		 * YUITest framework.
		 */
		name:string = "PureMVC Controller class tests";

		/**
		 * Tests the <code>Controller</code> singleton Factory Method
		 */
		testGetInstance():void
		{
			// Test Factory Method
			var controller:puremvc.IController = puremvc.Controller.getInstance();

			// test assertions
			YUITest.Assert.isNotNull
			(
				controller,
				"Expecting instance !== null"
			);

			YUITest.Assert.isInstanceOf
			(
				puremvc.Controller,
				controller,
				"Expecting instance extends Controller"
			);
		}

		/**
		 * Tests Command registration and execution.
		 *
		 *
		 * This test gets the singleton Controller instance and registers the ControllerTestCommand
		 * class to handle 'ControllerTest' Notifications.
		 *
		 * It then constructs such a Notification and tells the Controller to execute the associated
		 * Command. Success is determined by evaluating a property on an object passed to the
		 * Command, which will be modified when the Command executes.
		 */
		testRegisterAndExecuteCommand():void
		{
			// Create the controller, register the ControllerTestCommand to handle 'ControllerTest' notifications
			var controller:puremvc.IController = puremvc.Controller.getInstance();
			controller.registerCommand( 'ControllerTest', ControllerTestCommand );

			// Create a 'ControllerTest' notification
			var vo:ControllerTestVO = new ControllerTestVO(12);
			var notification:puremvc.INotification = new puremvc.Notification( 'ControllerTest', vo );

			// Tell the controller to execute the Command associated with the notification
			// the ControllerTestCommand invoked will multiply the vo.input value
			// by 2 and set the result on vo.result
			controller.executeCommand(notification);

			// test assertions
			YUITest.Assert.areEqual
			(
				24,
				vo.result,
				"Expecting vo.result == 24"
			);
		}

		/**
		 * Tests Command registration and removal.
		 *
		 * Tests that once a Command is registered and verified working, it can be removed from the
		 * Controller.
		 */
		testRegisterAndRemoveCommand():void
		{
			// Create the controller, register the ControllerTestCommand to handle 'ControllerTest' notifications
			var controller:puremvc.IController = puremvc.Controller.getInstance();
			controller.registerCommand( 'ControllerRemoveTest', ControllerTestCommand );

			// Create a 'ControllerTest' notification
			var vo:ControllerTestVO = new ControllerTestVO(12) ;
			var notification:puremvc.INotification = new puremvc.Notification( 'ControllerRemoveTest', vo );

			// Tell the controller to execute the Command associated with the notification
			// the ControllerTestCommand invoked will multiply the vo.input value
			// by 2 and set the result on vo.result
			controller.executeCommand(notification);

			// test assertions
			YUITest.Assert.areEqual
			(
				24,
				vo.result,
				"Expecting vo.result == 24"
			);

			// Reset result
			vo.result = 0;

			// Remove the Command from the Controller
			controller.removeCommand('ControllerRemoveTest');

			// Tell the controller to execute the Command associated with the
			// notification. This time, it should not be registered, and our vo result
			// will not change
			controller.executeCommand(notification);

			// test assertions
			YUITest.Assert.areEqual
			(
				0,
				vo.result,
				"Expecting vo.result == 0"
			);
		}

		/**
		 * Test hasCommand method.
		 */
		testHasCommand():void
		{
			// register the ControllerTestCommand to handle 'hasCommandTest' notifications
			var controller:puremvc.IController = puremvc.Controller.getInstance();
			controller.registerCommand( 'hasCommandTest', ControllerTestCommand );

			// test that hasCommand returns true for hasCommandTest notifications
			YUITest.Assert.isTrue
			(
				controller.hasCommand('hasCommandTest'),
				"Expecting controller.hasCommand('hasCommandTest') === true"
			);

			// Remove the Command from the Controller
			controller.removeCommand('hasCommandTest');

			// test that hasCommand returns false for hasCommandTest notifications
			YUITest.Assert.isFalse
			(
				controller.hasCommand('hasCommandTest'),
				"Expecting controller.hasCommand('hasCommandTest') === false"
			);
		}

		/**
		 * Tests Removing and Reregistering a Command
		 *
		 * Tests that when a command is re-registered that it isn't fired twice. This involves,
		 * minimally, registration with the controller but notification via the <code>View</code>,
		 * rather than direct execution of the <code>Controller</code>'s executeCommand method as is
		 * done above in <code>testRegisterAndRemove</code>.
		 */
		testReregisterAndExecuteCommand():void
		{
			// Fetch the controller, register the ControllerTestCommand2 to handle 'ControllerTest2' notifications
			var controller:puremvc.IController = puremvc.Controller.getInstance();
			controller.registerCommand( 'ControllerTest2', ControllerTestCommand2 );

			// Remove the Command from the Controller
			controller.removeCommand('ControllerTest2');

			// Re-register the Command with the Controller
			controller.registerCommand( 'ControllerTest2', ControllerTestCommand2 );

			// Create a 'ControllerTest2' notification
			var vo:ControllerTestVO = new ControllerTestVO( 12 );
			var notification:puremvc.INotification = new puremvc.Notification( 'ControllerTest2', vo );

			// retrieve a reference to the View.
			var view:puremvc.IView = puremvc.View.getInstance();

			// send the Notification
			view.notifyObservers(notification);

			// test assertions
			// if the command is executed once the value will be 24
			YUITest.Assert.areEqual
			(
				24,
				vo.result,
				"Expecting vo.result == 24"
			);

			// Prove that accumulation works in the VO by sending the notification again
			view.notifyObservers(notification);

			// if the command is executed twice the value will be 48
			YUITest.Assert.areEqual
			(
				48,
				vo.result,
				"Expecting vo.result == 48"
			);
		}
	}
}