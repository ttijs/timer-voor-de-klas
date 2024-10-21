let endTime;
let timerDuration = 65;

function setup() {
    createCanvas(400, 400);
    //Om de eindtijd in te stellen pak je de huidige tijd
    endTime = new Date();
    //En voeg je er x aantal seconde aan toe.
    endTime.setSeconds(endTime.getSeconds() + timerDuration);
}

function draw() {
    background(220);

    //Haal de huidige tijd op
    let currentTime = new Date();

    //Als de huidige tijd hoger of gelijk is aan de eindtijd
    if (currentTime >= endTime) {
        console.log("Timer ended!");
        //Hier stop je logica als de timer klaar is.
        background("green");
    }
    //Anders
    else {
        //Maak een variabele met het verschil door eindtijd - huidige tijd te doen
        //Dit is een waarde met het verschil in millisecondes
        let remainingTime = endTime - currentTime;
        //console.log(remainingTime);
        console.log(remainingTime % (60 * 1000));
        //Om minuten te rekenen: aantalMillisecondes / (60000) 
        //(want 60000 millisecondes in een minuut)
        let minutes = Math.floor(remainingTime / (60 * 1000));
        //Met modulo het restdeel pakken en die ook omrekenen naar secondes.
        let seconds = Math.floor(remainingTime % (60 * 1000)) / 1000;

        //Schrijven van de tekst met nf() en round()
        textSize(24);
        textAlign(LEFT, CENTER);
        text("Time remaining: " + nf(minutes, 2) + ":" + nf(round(seconds), 2), 20, height * 0.5);
    }
}