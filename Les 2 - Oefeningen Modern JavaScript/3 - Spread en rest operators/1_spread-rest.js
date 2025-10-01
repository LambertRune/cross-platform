/**
 * Herschrijf sumArgs() in ES2015, gebruikmakend van een rest parameter, block scoped variables en arrow functions.
 * Het moet mogelijk zijn om het volgende uit te voeren: sumArgs(1, 2, 3, 4, 5, 6);
 */

function sumArgs(...arg) {
  var result = 0;

  for (var i = 0; i < arg.length; ++i) {
    result += arg[i];
  }

  return result;
}

console.log(sumArgs(1,2,3,4,5,6));
