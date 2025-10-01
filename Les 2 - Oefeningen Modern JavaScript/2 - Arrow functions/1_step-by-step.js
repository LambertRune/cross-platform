/**
 * Hieronder zie je stap voor stap hoe JavaScript functions omgevormd kunnen worden van
 * ES5 naar moderne ES2015 arrow functions. Zorg ervoor dat je alle stappen begrijpt.
 */
const names = ['Tesla', 'Edison', 'Ampere'];

// Stap 1
const fullNames = names.map(function(name) {
  return `Mr. ${name}`
});
console.log(fullNames);

// Stap 2
const fullNames2 = names.map((name) => {
  return `Mr. ${name}`
});
console.log(fullNames2);

// Stap 3
const fullNames3 = names.map(name => {
  return `Mr. ${name}`
});
console.log(fullNames3);

// Stap 4
const fullNames4 = names.map(name => `Mr. ${name}`);
console.log(fullNames4);