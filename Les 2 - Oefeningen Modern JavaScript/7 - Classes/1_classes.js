/**
 * Gebruik een ES2015 class om een Person object aan te maken.
 */
class Person{
  constructor (fname, lname){
    this.fname = fname
    this.lname = lname
  }

}

const john = new Person("John", "Doe");
const jane = new Person("Jane", "Doe");

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(jane.fname); // Jane