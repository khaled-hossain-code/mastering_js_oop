'use strict';
function Person (name , surname) {
  this.name = name;
  this.surname = surname;
  this.address = "";
  this.email = "";
  this.displayFullName = function () 
  {
    return `${this.name} ${this.surname}`;
    //this variable points to the object who called displayFullName
  }
}

var johnSmith = new Person("John","Smith");
console.log(johnSmith.displayFullName());

