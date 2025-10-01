/**
 * Gebruik ES2015 classes (met overerving) om een Developer aan te maken.
 */
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

function Developer(firstname, lastname, preferredLanguage) {
  Person.call(this, firstname, lastname);
  this.preferredLanguage = preferredLanguage;
}

const jan = new Developer("Jan", "Modaal", "JavaScript");

console.log(jan.fname); // 'Jan'
console.log(jan.preferredLanguage); // 'JavaScript'