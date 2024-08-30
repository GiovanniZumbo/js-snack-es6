/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creare un array di oggetti di squadre di calcio.

const teamsElement = document.getElementById('teams');

const teams = [
    {
        teamName: 'Liverpool',
        scoredPoints: 0,
        fouls: 0
    },
    {
        teamName: 'Manchester',
        scoredPoints: 0,
        fouls: 0
    },
    {
        teamName: 'Barcelona',
        scoredPoints: 0,
        fouls: 0
    },
    {
        teamName: 'Chelsea',
        scoredPoints: 0,
        fouls: 0
    },
    {
        teamName: 'Milan',
        scoredPoints: 0,
        fouls: 0
    }

]

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Per ogni team...

for (let team of teams) {
    // Assegno un numero casuale da 1 a 50 per scoredPoints
    team.scoredPoints = getRandomNumber(1, 50);
    // Assegno un numero casuale da 1 a 30 per scoredPoints
    team.fouls = getRandomNumber(1, 30);
}

// Creo un array con nome e falli

const teamFouls = teams.map(({ teamName, fouls }) => ({ teamName, fouls }));
console.table(teamFouls);

let message = '';

for (let i = 0; i < teamFouls.length; i++) {
    message += `<p> Squadra, falli subiti : ${teamFouls[i].teamName}, ${teamFouls[i].fouls}</p > <hr>`
}

teamsElement.innerHTML = message;



