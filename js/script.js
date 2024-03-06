/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere 
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).
*/


let userkilometres = parseInt(prompt('Inserisci i chilometri percorsi'));
let userage = parseInt(prompt('Inserisci la tua età'));
let young = (userage < 18);
let old = (userage >= 65); 
const ticketprice = (0.21 * userkilometres);
const discountyoung = (20 / 100);
const discountold = (40 / 100);

console.log(userkilometres, userage, young, old, discountyoung, discountold);