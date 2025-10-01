/**
 * Gebruik ES2015 classes (met overerving) om een Developer aan te maken.
 */
class Person{
  constructor (fname, lname){
    this.fname = fname
    this.lname = lname
  }
}
class Developer extends Person{
  constructor(fname, lname, preferredLanguage){
    super(fname, lname);
    this.preferredLanguage = preferredLanguage;
  }
}


const jan = new Developer("Jan", "Modaal", "JavaScript");

console.log(jan.fname); // 'Jan'
console.log(jan.preferredLanguage); // 'JavaScript'