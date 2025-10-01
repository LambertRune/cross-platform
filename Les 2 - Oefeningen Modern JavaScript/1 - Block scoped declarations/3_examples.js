/**
 * Bekijk onderstaande functies en geef hun resultaat terug.
 * Indien nodig, leg uit wat er fout gaat en pas aan zodat de code geen errors geeft.
 */

const basic = () => {
  let x = 100;
  const y = 200;

  return { x: x, y: y };
}

// wat wordt er gelogd?
console.log("Basic", basic());

const immutable = () => {
  const object = { a: "b" };
  const array = [1, 2, 3, 4];

  object.a = "q";
  array[2] = 30;
  array.push(5);

  return { object: object, array: array };
}

// wat wordt er gelogd?
console.log("immutable", immutable());

const immutableReference = () => {
  let object = { a: "b" };

  object = { a: "q" };

  return object;
}

// wat wordt er gelogd?
console.log("immutableReference", immutableReference());

const temporalDeadZone = () => {
  

  var myVar = "var";
  let myLet = "let";
  const myConst = "const";

  console.log(myVar);
  console.log(myLet);
  console.log(myConst);

  return { myVar: myVar, myLet: myLet, myConst: myConst };
}

// wat wordt er gelogd?
console.log(temporalDeadZone());