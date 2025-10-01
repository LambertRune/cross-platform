/**
 * Importeer de default class uit person.js.
 * Importeer de twee functies uit vivesLib.js.
 * Importeer het object uit vivesLib.js en geef het een alias.
 * Schrijf een arrow function genaamd 'sort' (zonder implementatie);
 * Exporteer de nieuwe 'sort' functie als default.
 */
import Person from "./exports/person.js";
import { firstFunction, secondFunction } from "./exports/vivesLib.js";
import { myObject as aliasedObject } from "./exports/vivesLib.js";

const sort  = () => undefined

export { sort as default }

