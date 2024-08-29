/*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

const students = [

    {
        id: 213,
        fullName: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        fullName: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        fullName: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        fullName: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        fullName: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        fullName: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        fullName: 'Francesca da Polenta',
        grades: 84
    }

];

// * Step 1

const studentsNames = students.map(student => student.fullName.toUpperCase());

console.log(studentsNames);

// * Step 2

const gradesOver70 = students.filter(student => student.grades > 70);

console.log(gradesOver70);

// * Step 3

const gradesOver70IdOver120 = students.filter(student => student.grades > 70 && student.id > 120);

console.log(gradesOver70IdOver120);