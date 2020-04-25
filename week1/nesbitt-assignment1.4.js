/*
======================================================
; Title:  nesbitt-assignment 1.4
; Author: Michelle Nesbitt
; Date:   2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates
;=====================================================
*/
var assignment = "1.4"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

function Car(model) {
  this.model = model;
 }
 Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
 };
 function Truck(model, year) {
  this.model = model;
  this.year = year;
 }
 Truck.prototype.start = function() {
     console.log("Truck added to the racetrack!");
 };
 function Jeep(model, year, color) {
  this.model = model;
  this.year - year;
  this.color = color;
 }
 Jeep.prototype.start = function() {
     console.log("Jeep added to the racetrack!");
 };

 var car1 = new Car("Audi");
 var truck1 = new Truck("Chevy", 1985);
 var jeep1 = new Jeep("Cherokee", 2020, "Red");

 var racetrack = [];

 function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
 }

 driveIt(car1);
 driveIt(truck1);
 driveIt(jeep1);

 // Display racetrack
 console.log("\n-- The following vehicles have been added to the racetrack --");
 for (var k = 0; k < racetrack.length; k++) {
  console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
 }



// end program
