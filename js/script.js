// JavaScript kodas

/* UŽDUOTIS: Reikės sukurti filtravimo (paieškos) aplikaciją,
 *  kurioje vartotojas galės pasirinkti vieną iš
 *  pastarūjų 20 metų NBA (krepšinio lygos)
 *  sezonų t.y. nuo 2000 metų iki 2019 metų ir
 *  išsifiltruoti informaciją t.y. kas atitinkamą sezoną:
 *  1) tapo NBA lygos čempionais (champion);
 *  2) tapo NBA lygos vicečempionais (runnerUp);
 *  3) laimėjo finalo serijos naudingaiuso žaidėjo apdovanojimą (finalsMVP)
 *  4) laimėjo reguliaraus sezono naudingiauso žaidėjo apdovanojimą (mvp)
 *
 *  Informaija apie atitinakmą sezoną bus talpinama masyve nbaSeasons.
 *  Informacija, kuri bus atvaiduojama turės būti imama iš masyvo nbaSeasons
 *  Vartojas galės atlikti paiešką šiais būdais:
 *       - Pasirinkti metus (naudokite <select> HTML tagą)
 *       - Pasirinkti norimą informaciją paslausdamas mygtuką (pvz. "Tapo čempionais")
 *       - Informacija turės būti pateikima su tekstu ir nuotrauka (pvz. žaidėjo nuotrauka
 *       ar komandos nuotrauka su trofėjumi).
 */

// Pastarūjų 20 metų NBA sezono svarbiausia informacija (iš čia reikės imti informaciją)

let select = document.querySelector('#select-year');
let champion = document.querySelector('#champions');
let runnerUp = document.querySelector('#runnerUp');
let finalsMvp = document.querySelector('#finalsMvp');
let seasonMvp = document.querySelector('#seasonMvp');



const showChamp = () => {
  fetch('nba.json')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(s => {
        if(s.year === parseInt(select.value)){
         output += `
        <img src="${s.pictureChamp}" width= 600px; height=400px>
        <h2>CHAMPIONS: ${s.champion}</h2>
      `
    }
    });
    document.querySelector('#output').innerHTML = output;
  })
};

const showRunnerUp = () => {
  fetch('nba.json')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(s => {
         if(s.year === parseInt(select.value)){
        output += `
        <img src="${s.pictureRunnerUp}" width= 600px; height=400px>
        <h2>RUNNER UP: ${s.runnerUp}</h2>
      `
    }
    });
    document.querySelector('#output').innerHTML = output;
  })
};

const showFinalMvp = () => {
  fetch('nba.json')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(s => {
         if(s.year === parseInt(select.value)){
        output += `
        <img src="${s.picFinalsMvp}" width= 600px; height=400px>
        <h2>FINALS MVP: ${s.finalsMVP}</h2>
      `
    }
    });
    document.querySelector('#output').innerHTML = output;
  })
};

const showSeasonMvp = () => {
  fetch('nba.json')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(s => {
         if(s.year === parseInt(select.value)){
        output += `
        <img src="${s.picMvp}" width= 600px; height=400px>
        <h2>SEASON MVP: ${s.mvp}</h2>
      `
    }
    });
    document.querySelector('#output').innerHTML = output;
  })
};


champion.addEventListener('click', showChamp);
runnerUp.addEventListener('click', showRunnerUp);
finalsMvp.addEventListener('click', showFinalMvp);
seasonMvp.addEventListener('click', showSeasonMvp);


