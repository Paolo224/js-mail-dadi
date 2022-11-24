let randomNumberUtente;

let randomNumberPc;

let risultatoUtente;

let risultatoPc;

const button = document.getElementById('button-1');

button.addEventListener('click' , function(){
    for( i = 1; i <= 6; i = i + 1){
        randomNumberUtente = Math.floor(Math.random() * 7);
        risultatoUtente = document.getElementById('output-1').innerHTML = "Il tuo numero: " + randomNumberUtente;
    }
    
    for( i = 1; i <= 6; i = i + 1){
        randomNumberPc = Math.floor(Math.random() * 7);
        risultatoPc = document.getElementById('output-2').innerHTML = "Il mio numero: " + randomNumberPc;
    }
    
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

