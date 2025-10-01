/**
 * Zorg ervoor dat de gevraagde output weergeven wordt.
 * Gebruik hiervoor blocked scoped declarations. 
 */
const sum = () =>{
  let x = 1;

if (x == 1) {
  let x = 2;
}

// resultaat: 1
console.log(x);
}

sum()
