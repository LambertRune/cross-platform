/**
 * Het is niet de bedoeling dat 'pi' kan wijzigen.
 * Zorg ervoor dat er een TypeError opgegooid wordt wanneer dit toch zou gebeuren.
 * Bonus: let op de naming conventions.
 */
const lockedPi = () =>{
    const pi = 3.14159265359;

    pi = 3;
    console.log(pi);
}
lockedPi()



