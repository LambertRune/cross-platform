/**
 * Gebruik destructuring om het voor- en achternaam op te halen.
 */
const profile = {
  first_name: 'Ryan',
  last_name: 'Gosling',
  birth_date: new Date('1980-11-12')
}

// verander de volgende twee lijnen

const { first_name, last_name } = profile

console.log(first_name, last_name);