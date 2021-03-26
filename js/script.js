function getRandomValue(min, max) {
    const localMin = min;
    const localMax = max - min + 1;
    return Math.floor(Math.random() * localMax) + localMin;
}

//es 1
// Creare un array di oggetti: ogni oggetto descriverà 
// una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.

function bycicle() { 
    let arr = [
        {
            'nome': 'Bruno',
            'peso': 22
        },
        {
            'nome': 'Massimo',
            'peso': 2
        },
        {
            'nome': 'Genny',
            'peso': 15
        },
        {
            'nome': 'ErnestoBruno',
            'peso': 65
        }

    ];
    let arrMin = arr[0].peso;
    for (let i=0; i<arr.length;i++) {

        if (arrMin > arr[i].peso) {
            arrMin = arr[i].peso;
            var selector = i;
        }
    }
    console.log(arr);
    console.log("La bici più leggera è ", arr[selector])
}
//es2
// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti
function footballTeam() {
    let teams = [
        {
            'name': 'BustoArsizio',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'Orvieto',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'Poggibonsi',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'ManchesterUtd.',
            'score': 0,
            'fouls': 0
        }
    ];
    for (let i=0;i<teams.length;i++) {
        const team = teams[i];
        team.score = getRandomValue(0, 50);
        team.fouls = getRandomValue(0, 50);
    }
    console.log(teams);
//es3
// Usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.

    const nameFouls = [];
    for (let i=0; i<teams.length;i++) {
        const team = teams[i];
        let { score, fouls } = team;
        let nameFoulsObj = { score, fouls };
        nameFouls.push(nameFoulsObj);
    }
    console.log(nameFouls);

}






function init() { 
    $('#startBtn1').click(bycicle);
    $('#startBtn2').click(footballTeam);

}

$(document).ready(init);
