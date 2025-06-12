let rahaa = 50;
let panos = 0
let rahamaara = document.getElementById('rahamaara').value;
let panosmaara = document.getElementById('panosmaara').value;
let viesti = document.getElementById('viesti');

const kuvat = [
    "kirsikka.webp",
    "meloni.webp",
    "omppu.webp",
    "päärynä.webp",
    "seiska.webp"
];

function arvoKuva() {
    for (let i = 1; i <=4; i++) {
        const satunnainenIndex = Math.floor(Math.random()* kuvat.length);
        const kuvaElementti = document.getElementById(`slot${i}`);
        kuvaElementti.src = kuvat[satunnainenIndex];
    }
}

function pelaa() {
    if (panos > 0) {
        if(rahaa - panos >= 0){
            rahaa -= panos;
            document.getElementById('rahamaara').innerText = rahaa;
                for (let i = 0; i<4; i++) {
                    document.getElementById(`slot${i}`).src = arvoKuva();
                } 
        }
    } else {
        viesti = "Valitse panos!"}
}

function nostaPanosta(arvo) {
    if (arvo ===1) {
        panos = 1;
        document.getElementById('panosmaara').innerText = 1;
    }
    
    if (arvo === 2){
        panos = 2;
        document.getElementById('panosmaara').innerText = 2;
        }

    if (arvo === 3){
        panos = 3;
        document.getElementById('panosmaara').innerText = 3;
        }
    }

    function lukitse() {

    }

