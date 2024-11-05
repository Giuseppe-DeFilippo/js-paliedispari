/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


console.clear();
    const pd = prompt("pari o dispari?");
    const number = parseInt(prompt("inserisci numero da 1 a 5"));
    const nRandom = random();
    
    console.log(pd);
    console.log(number);
    console.log(nRandom);
    winner(number, nRandom,pd);

function random(){
    const computer = Math.floor(Math.random() * 6);
    return computer;
}


//questa funzione serve per somamre i 2 numeri e vedere se sono pari e dispari 
function winner(number, nRandom,pd){
    // faccio la somma qui
    let somma = (number + nRandom);
    console.log(somma);

    // qua faccio il controllo pari o dispari
    let pod = null;
    if(somma %2 === 0 ){
        console.log("è pari");
        pod="pari";
    } else{
        console.log("è dispari");
        pod="dispari";
    }

    if(pd === "pari"  && pod === "pari"){
         console.log("l utente ha vinto");
    }else if(pd === "dispari" && pod ==="dispari" ){
         console.log("l utente ha vinto");
    }else{
        console.log("il computer ha vinto");
    }

}



