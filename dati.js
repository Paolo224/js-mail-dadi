let randomNumberUtente;

let randomNumberPc;

let risultatoUtente;

let risultatoPc;

const button = document.getElementById('button-1');

button.addEventListener('click' , function(){

    randomNumberUtente = Math.floor(Math.random() * 6 + 1);
    document.getElementById('output-1').innerHTML = "Il tuo numero: " + randomNumberUtente;

    randomNumberPc = Math.floor(Math.random() * 6 + 1);
    document.getElementById('output-2').innerHTML = "Il mio numero: " + randomNumberPc;


    let vincitore;
    
    if ( randomNumberPc === randomNumberUtente ){
        vincitore = "Pareggio!!!"
    }
    else if (randomNumberPc < randomNumberUtente){
        vincitore = "Hai vinto tu!... TUTTA FORTUNA!!!!"
    }
    else{
        vincitore = "Ho vinto io!!!!! TIÉ!!!!"
    }
    
    document.getElementById('vittoria').innerHTML = vincitore;
})

