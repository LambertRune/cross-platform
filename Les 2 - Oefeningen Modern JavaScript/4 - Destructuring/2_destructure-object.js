/**
 * Gebruik destructuring om het voor- en achternaam op te halen.
 */
const profile = {
  first_name: 'Ryan',
  last_name: 'Gosling',
  birth_date: new Date('1980-11-12')
}

// verander de volgende twee lijnen
const first_name = profile.first_name;
const last_name = profile.last_name;

console.log(first_name, last_name);