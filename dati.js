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
        vincitore = "Tu!..."
    }
    else{
        vincitore = "Io!!!!! TIÉ!!!!"
    }
    
    document.getElementById('vittoria').innerHTML = vincitore;
})



const mail = [
    "stefano@gmail.com",
    "luigi@gmail.com",
    "riccardo@gmail.com",
    "paolo@gmail.com"
]

const buttonMail = document.getElementById('button-2');

buttonMail.addEventListener('click', function(){

    const inputMail = document.getElementById('mail').value;

    let trovato = false;

    for ( let i = 0; i < mail.length; i++){

        if (inputMail == mail[i]){
            trovato = true;
        }

    }

    if (trovato == true){
        document.getElementById('trovata').innerHTML = "Trovato"
    }
    else{
        document.getElementById('trovata').innerHTML = "Non trovato"
    }
})





