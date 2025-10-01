/**
 * Gebruik een ES2015 getter om 'fullName' op te vullen (alleen-lezen).
 */
class Person {
  constructor(firstname, lastname) {
    this.fname = firstname;
    this.lname = lastname;

    this.fullName = this.fname + ' ' + this.lname;
  }
}

let jen = new Person('Jen', 'Maker');

console.log(jen.fullName);
