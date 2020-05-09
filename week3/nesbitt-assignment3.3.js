/*
======================================================
; Title:  nesbitt-assignment
; Author: Michelle Nesbitt
; Date:   5-9-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates design patterns
;=====================================================
*/
var assignment = "3.3"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {
  var instance;
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }
    return {
      getInstance: function() {
      if (!instance) {
      instance = createInstance();
      }
    return instance;
    }
  }
 })();
 function databaseSingletonTest() {
    var databaseInstance1 = DatabaseSingleton.getInstance();
    var databaseInstance2 = DatabaseSingleton.getInstance();
  console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
 }
 databaseSingletonTest();

// end program
