///<reference path='../../../../../../bin/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='ControllerTestVO.ts'/>

module test
{
	"use strict";

	/**
	 * A SimpleCommand subclass used by ControllerTest.
	 */
	export class ControllerTestCommand2
		extends puremvc.SimpleCommand
		implements puremvc.ICommand
	{
		/**
		 * Fabricate a result by multiplying the input by 2 and adding to the existing result.
		 *
		 * This tests accumulation effect that would show if the command were executed more than
		 * once.
		 *
		 * @param notification
		 * 		The notification carrying the ControllerTestVO.
		 */
		execute( notification:puremvc.INotification )
		{
			var vo:ControllerTestVO = notification.getBody();

			// Fabricate a result
			vo.result = vo.result+(2 * vo.input);
		}
	}
}