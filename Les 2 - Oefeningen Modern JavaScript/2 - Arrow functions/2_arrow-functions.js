/**
 * Vorm onderstaande 'praise' om tot een arrow function van één lijn.
 */
const praise = () => console.log("🙌")


praise();


/**
 * Vorm 'convertIntoMilliseconds' om tot een arrow function van één lijn.
 */
const convertIntoMilliseconds = (seconds) =>{
  return seconds *1000
} 


console.log(convertIntoMilliseconds(5));



/**
 * Schrijf een nieuwe arrow function met drie parameters: id, name, isStudent. isStudent is optioneel, met default "true".
 * Geef een object terug met ingevulde waarden, bijvoorbeeld:
 * {
 *  id: 4,
 *  name: 'Thomas',
 *  student: true
 * }
 */
const setNameIds = (id, name, student = true) => ({id:id,name:name,student:student})

console.log(setNameIds(4, "Thomas"));