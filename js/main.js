/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */
//********************************************************************************************************************************************

/*  
Strumenti usati 
- const/let
- if/else
- prompt
- console.log
- getElementById/innerHTML
*/

//********************************************************************************************************************************************
const SCONTO_MINORENNI = 0.2;
const SCONTO_OVER = 0.4;

// chiedo all'utente quanti km deve percorrere
const km = Number(prompt("Quanti km devi percorrere?"));
console.log(km);

// chiedo all'utente l'età
const userAges = Math.floor(Number(prompt("Quanti anni hai?")));
console.log(userAges);

// assegno  il valore del "full price" e prezzo scontato
const standardCost = 0.21;


let fullCost = km * standardCost;
console.log(fullCost);

if (userAges < 18) {
  fullCost *= 1 - SCONTO_MINORENNI;
  console.log(fullCost);
} else if (userAges >= 65) {

  fullCost *= 1 - SCONTO_OVER;
  console.log(fullCost);
}

// formatto il prezzo scontato per avere due cifre
let humanPrice = fullCost.toFixed(2);

// mostrare all'utente il prezzo finale in pagina
const displayPrice = document.getElementById("result");
displayPrice.innerHTML = `${humanPrice} €`;
// prego di non aver rotto nient
