PureMVC AS3 Demo - Flex/Rails Index Cards
By Jim Robson <jim.robson@puremvc.org>
Copyright(c) 2008 Jim Robson, Some rights reserved.
--------------------------------------------------------------------------
 Reuse governed by Creative Commons Attribution 3.0 United States License
   View this license and the associated Creative Commons deed online at: 
            http://creativecommons.org/licenses/by/3.0/us/
            	You must leave all copyright and license 
            	statements intact in your final product.
--------------------------------------------------------------------------


A. Setting Up the Rails Application

1) Open a command window in your Rails applications directory. (If you're using Instant Rails, this is usually the rails_apps subdirectory of the Instant Rails folder. If you're using RubyStack, look for the "BitNami RubyStack projects" directory.)
2) At the command prompt, type rails index_cards. Your directory tree should now be generated for you. Keep the command window open; you will use it to set up the database. 
3) Copy the contents of the org/puremvc/as3/demos/flex/rails/indexcards/app directory of the repository into the app subdirectory of the Rails application structure that you just created in step 2. 

-----------------------------

B. Setting Up the MySQL Database 

1) Copy the file create.sql from the rails/db directory of the zip the the db subdirectory of the Rails application structure that you created above. 
2) If you haven't already, open a command window as in step #1 above. 
3) Log in to MySQL with the appropriate user name and password, then create a database called index_cards_development.  
4) Still in the command window, navigate to the db subdirectory of your new Rails application and run the create.sql script. Leave the command window open.

------------------------------

C. Starting the Rails Application

1) With a command window open at the root directory of your new Rails application, type the following line to start the application:

               ruby script/server

-----------------------------------

D. Setting Up the Flex Builder Project

1) File -> New -> Flex Project
2) Select the location in your file system where you would like to store the project. If using FB2, make sure that Web application (runs in Flash Player) is selected. In the Application server type combo box, make sure None is selected. Click Next. 
2) Select your output folder (the default is fine). Click Next.
3) Select your main source folder (the default is fine), and type index_cards.mxml as the name of your Main application file. Set the root directory of your Rails application as the output folder. Click Finish. 
4) Copy the contents of the src directory into the source directory of the Flex project you just created. 
5) In a standard Rails development setup, your Rails application is most likely running on http://localhost:3000/. If you are using a different configuration, you'll have to make a change to the ActionScript code. In the source folder of your new Flex project, open    org/puremvc/as3/demos/flex/rails/indexcards/model/utils/URL.as and modify the value of the constant Stub to match your configuration. 
.
.
.





