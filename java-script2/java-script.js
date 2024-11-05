/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


console.clear();
    const pd = prompt("pari o dispari?");
    const number = parseInt(prompt("inserisci numero da 1 a 5"));
    console.log(pd);
    console.log(number);

function random(){
const computer = Math.floor(Math.random() * 6);
console.log(computer);
}

//function paridispari(){
    
//}
//questa funzione serve per somamre i 2 numeri e vedere se sono pari e dispari 
function winner(){

}

//paridispari();
random(); 