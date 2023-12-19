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

const evenOdd = prompt("Scegli 'pari' o 'dispari' ");
const chooseNumber = Number(prompt('Scegli un numero da 1 a 5'));

const pcNumberFunction = pcNumber();
console.log(pcNumberFunction);

function pcNumber() {
    const number = Math.floor(Math.random() * 5) + 1;
    return number;
}

const somma = sum();
console.log(somma);

function sum(){
    const somma = Number(pcNumberFunction) + (chooseNumber);
    return somma;
}

const result = isEvenOrOdd(somma);
console.log(result);


if (result === evenOdd){
    console.log('hai vinto');

}else if (result != evenOdd) {
    console.log('hai perso');
}

function isEvenOrOdd(sum) {
    if (somma % 2 == 0) {
        return pari = "Il numero è pari";
    } else {
        return dispari = "Il numero è dispari";
    }
}










