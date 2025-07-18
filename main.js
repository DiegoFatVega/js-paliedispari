/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//ricevo la parola come input e la salvo in una variabile
const word = prompt('inserisci una parola: ')

//creo una funzione che  inverta la parola e la salvo in un altra variabile

function isPalindrome (word){
    let reversedWord = '';
    for(let i = word.length - 1; i >= 0; i --){
        const char = word[i];
        //faccio il confronto tra la prima variabile e la seconda con la prima parola pero invertita
        reversedWord = reversedWord + char;  
    }
    //se sono ugali, stampo il messaggio "è palindroma", altrimenti "non è palindroma"
        if(word === reversedWord){
            return 'la parola inserita è palindroma'
        }else 
            return 'la parola inserita NON è palindroma' 
}

const reversedWord = isPalindrome(word)
console.log(reversedWord);

