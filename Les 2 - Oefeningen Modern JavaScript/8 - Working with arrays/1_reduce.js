/**
 * Schrijf een nieuwe arrow function 'average' met n parameters - gebruik hiervoor reduce.
 * Bereken het gemiddelde van de gegeven parameters.
 */

const average = (...numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5