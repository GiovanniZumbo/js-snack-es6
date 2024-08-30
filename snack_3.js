/*

*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

// Creo un array di oggetti

const bikes = [

    {
        brand: 'Bianchi',
        weight: 45
    },
    {
        brand: 'Rossi',
        weight: 52
    },
    {
        brand: 'Shimano',
        weight: 39
    },
    {
        brand: 'Graziella',
        weight: 38
    },
    {
        brand: 'Argon',
        weight: 48
    },
]

// Capire qual è la bici col peso minore:

// * Prendo una bici come riferimento

let lightBike = bikes[0];

// * Creo un ciclo che itera sulle bici

for (const bike of bikes) {
    if (bike.weight < lightBike.weight) lightBike = bike;
}

// * Prendo le keys della bici 

const { brand, weight } = lightBike;

//# Output

console.log(`La bici ${brand} risulta essere la più leggera con un peso di: ${weight} kg`);



















// Creo un array dove mettere i numeri ordinati

// const weights = [];

// for (const bike of bikes) {
//     //Prendo i pesi con il destructuring
//     const { weight } = bike;
//     console.log(weight);
//     weights.push(weight);
// }

// console.log(weights.sort())

// console.log(weights[0]);




// const weights = [];

// for (const bike of bikes) {

// }

// weights.sort;

// console.log(weights);

// Li metto in ordine crescente

// Stampo il primo elemento dell'array

