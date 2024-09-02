/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.*/

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'falconidi', classe: 'mammiferi' },
    { nome: 'falco', famiglia: 'canidi', classe: 'uccelli' },
    { nome: 'tigre', famiglia: 'felini', classe: 'mammiferi' },
    { nome: 'squalo tigre', famiglia: 'caracarinidi', classe: 'pesci' },
    { nome: 'cobra', famiglia: 'ellipidi', classe: 'rettili' },
    { nome: 'coccodrillo', famiglia: 'sauropsidi', classe: 'rettili' },
    { nome: 'cervo', famiglia: 'cervidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'cammello', famiglia: 'camelidi', classe: 'mammiferi' },
];

const mammals = animals.filter(animal => (animal.classe === 'mammiferi'));

console.table(mammals);