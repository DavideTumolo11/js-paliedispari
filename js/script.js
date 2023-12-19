/*
Chiedere all’utente di inserire una parola

Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

const userWord = prompt('Inserisci una parola');



function isPalindrome(userWord) {
    const len = userWord.length;
    for (let i = 0; i < len / 2; i++) {
        if (userWord[i] !== userWord[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

if (isPalindrome(userWord)) {
    console.log(userWord + " è una parola palindroma");
} else {
    console.log(userWord + " non è una parola palindroma");
}


// pari e dispari


const chooseNumber = prompt('Scegli un numero da 1 a 5');







