let rahaa = 50;
let panos = 0;
let rahamaara = document.getElementById('rahamaara').value;
let panosmaara = document.getElementById('panosmaara');
let viesti = document.getElementById('viesti');

let slots = ["omena", "omena", "omena", "omena"];
let lukot = [false, false, false, false];

const kuvat = ["kirsikka", "meloni", "omppu", "päärynä", "seiska"];

function asetaPanos(arvo) {
    if (arvo === 1) {
        panos = 1;
        panosmaara.innerText = "1";
    }

    if (arvo === 2) {
        panos = 2;
        panosmaara.innerText = "2";
    }

    if (arvo === 3) {
        panos = 3;
        panosmaara.innerText = "3";
    }
}

function pelaa() {
    if (rahaa < panos || panos < 1) {
        viesti.innerHTML = "Ei tarpeeksi rahaa tai panos asettamatta!";
        return;
    }

    rahaa -= panos;
    document.getElementById('rahamaara').innerText = rahaa;

    for (let i = 0; i<4; i++) {
        if (!lukot[i]) {
            const satunnainen = Math.floor(Math.random()* kuvat.length);
            slots[i] = kuvat[satunnainen];
        }
    }

    paivitaKuvat(slots);

    const eka = slots[0];
    const kaikkiSamat = slots.every(hedelma => hedelma === eka);
    const seiskat = slots.filter(hedelma => hedelma === "seiska").length;

    if (kaikkiSamat) {
        viesti.innerHTML = "Voitit!";
        voitonmaksu(eka);
    } else if (seiskat === 3) {
        const voitto = 5 * panos;
        rahaa += voitto;
        viesti.innerHTML = `Kolme seiskaa - voitit ${voitto} euroa!`;
        document.getElementById('rahamaara').innerText = rahaa;
    }

    lukot = [false, false, false, false];
    paivitaLukot();
}
    
function voitonmaksu(hedelma) {
    const voitot = {omena: 6, päärynä: 4, kirsikka: 3, meloni: 5, seiska: 10};

    const kerroin = voitot[hedelma] || 0;
    const voitto = kerroin * panos;

    rahaa += voitto;
    viesti.innerHTML = `Voitit ${voitto} euroa (${kerroin}x panos)!`;
    document.getElementById('rahamaara').innerText = rahaa;
}

function paivitaKuvat(slots) {
    for (let i = 0; i < slots.length; i++) {
        document.getElementById(`slot${i +1}`).src = `kuvat/${slots[i]}.webp`;
    }
}

function lukitus(index) {
    lukot[index - 1] = !lukot[index - 1];
    paivitaLukot();
}

function paivitaLukot() {
    for (let i = 0; i < 4; i++) {
        const lukkoIMG = document.getElementById(`lukko${i + 1}`);
        lukkoIMG.querySelector("img").src = lukot[i] ? "lukko.webp" : "lukko-auki.webp";
    }
}