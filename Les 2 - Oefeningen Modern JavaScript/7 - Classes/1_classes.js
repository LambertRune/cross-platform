/**
 * Gebruik een ES2015 class om een Person object aan te maken.
 */
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

const john = new Person("John", "Doe");
const jane = new Person("Jane", "Doe");

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(jane.fname); // Jane