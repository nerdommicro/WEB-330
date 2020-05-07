/*
======================================================
; Title:  nesbitt-assignment3.2.js
; Author: Michelle Nesbitt
; Date:   5-7-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates factories
;=====================================================
*/
var assignment = "3.2"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

function Oracle(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
  this.version = properties.version || "5.1"
 }
 function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:8000";

 }
 function DatabaseFactory() {}

 DatabaseFactory.prototype.databaseClass = Oracle;
 DatabaseFactory.prototype.createDatabase = function(properties) {
 if (properties.databaseType === "Oracle") {
  this.databaseClass = Oracle;
  } else {
  this.databaseClass = Informix;
  }
  return new this.databaseClass(properties);
 };


 var oracleFactory = new DatabaseFactory();
 var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "s3cret"
 });
 console.log(oracle instanceof Oracle);
 console.log(oracle);

 var informixFactory = new DatabaseFactory();
 var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "s3cret"
 });
 console.log(informix instanceof Informix);
 console.log(informix);







// end program


