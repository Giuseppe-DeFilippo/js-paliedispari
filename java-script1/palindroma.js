/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari*/

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


console.clear()

    function parola(){
    let word = prompt("inserisci la parola");
    let wordreverse = word.split("").reverse().join("");
    if (word === wordreverse){
        console.log("è una parola palindroma");
    }
    else{
        console.log("non è una parola palindroma");
    }
}
parola();


// perchè nell if non andava il  .reverse
