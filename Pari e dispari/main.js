/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// prendo come input il dato dell`utente come nell`esercizio precedente
const usernumber = parseInt(prompt('Inserisci un numero da 1 a 5 '));

// genero un numero random da 1 a 5 compresi (fonte: w3school)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const pcNumber = getRndInteger(1,5);

// sommo i due numeri con una funzione che prenda in ingresso due numeri, quello dell`utente e quello generato dal computer e poi li sommo. 
function sumNumbers(num_1, num_2){
    return num_1 + num_2;
}

// lo script deve verificare se la somma dei due numeri è un numero pari o dispari 
function isEven(number){
    if(number % 2 == 0){
        return 'Il numero è pari';
    } else return 'Il numero è Dispari';
}

console.log(`Numero dato dal PC: `, `${pcNumber}`);
console.log(`Numero dato dal utente: `, `${usernumber}`);

const sum = sumNumbers(usernumber,pcNumber);
console.log(isEven(sum));