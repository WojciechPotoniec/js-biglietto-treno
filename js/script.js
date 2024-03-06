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


let userkilometres = (prompt('Inserisci i chilometri percorsi')); //km scelti dall'user
let userage = parseInt(prompt('Inserisci la tua età')); // età scelta dall'user
let ticketprice = (0.21 * userkilometres); // Esempio: 0.21*10 = 2.10


if (isNaN(userage) || isNaN(userkilometres)) // mi darà true se userage non è un numero(NotaNumber)
{
    console.log('errore!! Devi inserire un numero.');
    document.getElementById('finalPrice').innerHTML = `Errore!! Devi inserire solo numeri.`
}
else{
    if (userage < 18) {
        //se l'utente è < di anni 18 allora prezzoBase = prezzoBase - ('SCONTO')
        ticketprice = ticketprice - (ticketprice * 20 / 100); 
        console.log(`Il cliente ha diritto ad uno sconto del 20%. Quindi il costo del biglietto è: ${ticketprice.toFixed(2)}&euro;`);
        document.getElementById('finalPrice').innerHTML = `Il costo del biglietto è:  ${ticketprice.toFixed(2)}&euro;`
    }
    else if (userage >= 65) {
        //se l'utente è >= di anni 65 allora prezzoBase = prezzoBase - ('SCONTO')
        ticketprice = ticketprice - (ticketprice * 40 / 100); 
        console.log(`Il cliente ha diritto ad uno sconto del 40%. Quindi il costo del biglietto è:  ${ticketprice.toFixed(2)}&euro;`);
        document.getElementById('finalPrice').innerHTML = `Il costo del biglietto è:  ${ticketprice.toFixed(2)}&euro;`
    }
    else {
        //se l'utente ha tra i 18 e i 65 anni allora paga per intero
        console.log(`Il cliente paga il biglietto per intero. Quindi il prezzo è: ${ticketprice.toFixed(2)}&euro;`);
        document.getElementById('finalPrice').innerHTML = `Il costo del biglietto è:  ${ticketprice.toFixed(2)}&euro;`
    }
}
