let rahaa = 50;
let panos = 0
let rahamaara = document.getElementById('rahamaara').value;
let panosmaara = document.getElementById('panosmaara').value;
let lukittu = [false, false, false, false];
let annaLukita = false;

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
    rahaa -= panos;
    document.getElementById('rahamaara').innerText = rahaa
    let vapaana = lukittu.every(l => !l);

    if (!vapaana && !annaLukita) {
        lukittu = [false, false, false, false];
        for (let i = 0; i<4; i++) {
            document.getElementById(`slot${i}`).parentNode.classList.remove("lukittu");
        }
    }

    for (let i = 0; i<4; i++) {
        if (!lukittu[i]) {
            document.getElementById(`slot${i}`).src = arvoKuva();
        }
    }

        annaLukita = vapaana;
}

function nostaPanosta(arvo) {
    if (arvo === 1){
        panos = 1;
        document.getElementById('panosmaara').innerText = 1;
        return;
    }
    if (arvo === 2){
        panos = 2;
        document.getElementById('panosmaara').innerText = 2;
        return;
    }
    if (arvo === 3){
        panos = 3;
        document.getElementById('panosmaara').innerText = 3;
        return;
    }
}

function lukitse(slot) {
    if (!annaLukita) return;

    lukittu[slot] = !lukittu[slot];

    const kuvaPaikka = document.getElementById(`slot${i}`).parentNode;
    kuvaPaikka.classList.lukitse("lukittu", lukittu[slot]);
}