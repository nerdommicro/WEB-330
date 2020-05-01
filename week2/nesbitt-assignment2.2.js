/*
======================================================
; Title:  nesbitt-assignment
; Author: Michelle Nesbitt
; Date:   4-30-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates Objects and Prototypes
;=====================================================
*/
var assignment = "2.2"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person = {

  getAge: function () {

  console.log("The person is " + this.age + " years old");

  }

  };


  var Person = Object.create(person, {

  "age": {

  "value": 21
  },

  "fullname": {

  "value": "Michelle Nesbitt"

  }

  })

  Person.getAge();

console.log("The person's name is " + Person.fullname);



// end program

