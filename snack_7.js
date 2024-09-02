/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età. */

const people = [
    {
        firstName: 'Salvatore',
        lastName: 'Levini',
        age: 22
    },
    {
        firstName: 'Enrico',
        lastName: 'Otri',
        age: 15
    },
    {
        firstName: 'Federica',
        lastName: 'Gesti',
        age: 24
    },
    {
        firstName: 'Emma',
        lastName: 'Temuti',
        age: 31
    },
    {
        firstName: 'Walter',
        lastName: 'Bianchi',
        age: 13
    },
    {
        firstName: 'Luisa',
        lastName: 'Esposito',
        age: 42
    },
]

const drivers = people.map((person) => {
    const driverLicense = person.age > 18 ? 'Ammesso alla guida' : "Non ammesso alla guida";
    let message = `La persona ${person.firstName} ${person.lastName} è: ${driverLicense}.`;
    return message;
})

console.table(drivers);