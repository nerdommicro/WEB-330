/*
======================================================
; Title:  nesbitt-assignment1.3
; Author: Michelle Nesbitt
; Date:   2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates
;=====================================================
*/
var assignment = "1.3"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

/*
  Expected output:

  Michelle Nesbitt
  Exercise Number
  Today's Date

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>

*/

// start program


function CellPhone(manufacturer, model, color, price) {

  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  this.GetPrice = function() {
    return this.price;
  };
  this.GetModel = function() {
    return this.model;
  };
  this.GetDetails = function() {
    var cellString =
      "Manufacturer: " + this.manufacturer + "\n" +
      "Model: " + this.model + "\n" +
      "Color: " + this.color + "\n" +
      "Price: " + this.price + "\n";
      return cellString;
  };
}

var myCellPhone = new CellPhone("Apple", "Iphone", "Red", 499.99);

console.log("\n" + myCellPhone.GetDetails());


// end program
