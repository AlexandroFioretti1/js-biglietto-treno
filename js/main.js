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
- Math.round 
- console.log
- getElementById/innerHTML
*/

//********************************************************************************************************************************************
// chiedo all'utente quanti km deve percorrere 
const km = Number(prompt("Quanti km devi percorrere?"));
console.log(km);

// chiedo all'utente l'età e controllo che sia un numero e che sia maggiore di 1

// calcolo lo sconto a seconda dell'età

// assegno a prezzo scontato il valore del "full price"

// formatto il prezzo scontato per avere due cifre decimali

// mostrare all'utente il prezzo finale in pagina

// prego di non aver rotto niente
