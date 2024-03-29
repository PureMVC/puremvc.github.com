///<reference path='../../../../../../../../test/lib/YUITest.d.ts'/>
///<reference path='../../../../../../../../bin/puremvc-typescript-multicore-1.0.d.ts'/>

///<reference path='MacroCommandTestSub.ts'/>
///<reference path='MacroCommandTestCommand.ts'/>
///<reference path='MacroCommandTestVO.ts'/>

module test
{
	"use strict";

	/**
	 * Test the PureMVC MacroCommmand class.
	 */
	export class MacroCommandTest
	{
		/**
		 * The name of the test case - if not provided, one is automatically generated by the
		 * YUITest framework.
		 */

		name:string = "PureMVC MacroCommmand class tests";

		/**
		 * Tests if constructing the <code>MacroCommand</code> also call its super by testing for
		 * the existence of its <code>Notifier</code> superclass facade instance.
		 */
		testConstructor():void
		{
			// Create a new subclass of Notifier and verify that its facade has well been created
			var macroCommandTestSub:MacroCommandTestSub = new MacroCommandTestSub();
			macroCommandTestSub.initializeNotifier("macroCommandTestKey1")

			// test assertions
			YUITest.Assert.isTrue
			(
				macroCommandTestSub.hasFacade(),
				"Expecting macroCommandTestSub.hasFacade() === true"
			);
		}

		/**
		 * Tests operation of a <code>MacroCommand</code>.
		 *
		 * This test creates a new <code>Notification</code>, adding a
		 * <code>MacroCommandTestVO</code> as the body. It then creates a
		 * <code>MacroCommandTestCommand</code> and invokes its <code>execute</code> method, passing
		 * in the <code>Notification</code>.
		 *
		 * The <code>MacroCommandTestCommand</code> has defined an <code>initMacroCommand</code>
		 * method, which is called automatically by its constructor. In this method the
		 * <code>MacroCommandTestCommand</code> adds 2 SubCommands to itself,
		 * <code>MacroCommandTestSub1Command</code> and <code>MacroCommandTestSub2Command</code>.
		 *
		 * The <code>MacroCommandTestVO</code> has 2 result properties, one is set by
		 * <code>MacroCommandTestSub1Command</code> by multiplying the input property by 2, and the
		 * other is set by <code>MacroCommandTestSub2Command</code> by multiplying the input
		 * property by itself.
		 *
		 * Success is determined by evaluating the 2 result properties on the
		 * <code>MacroCommandTestVO</code> that was passed to the
		 * <code>MacroCommandTestCommand</code> on the Notification body.
		 *
		 */
		testMacroCommandExecute():void
		{
			// Create the VO
			var vo:MacroCommandTestVO = new MacroCommandTestVO(5);

			// Create the Notification (notification)
			var notification:puremvc.INotification = new puremvc.Notification( 'MacroCommandTest', vo );

			// Create the MacroCommand
			var command:puremvc.ICommand = new MacroCommandTestCommand();

			// Execute the MacroCommand
			command.execute(notification);

			// test assertions
			YUITest.Assert.areEqual
			(
				10,
				vo.result1,
				"Expecting vo.result1 == 10"
			);

			YUITest.Assert.areEqual
			(
				25,
				vo.result2,
				"Expecting vo.result2 == 25"
			);
		}
	}
}