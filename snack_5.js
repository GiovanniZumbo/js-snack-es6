/* ES6 Snack 5
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */

const names = ["pippo", 'PLUTO', 'Paperino'];


const formatNames = names.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());

console.table(formatNames);