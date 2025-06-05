const gajah = document.getElementsByClassName('gajah')[0]
const semut = document.getElementsByClassName('semut')[0]
const manusia = document.getElementsByClassName('manusia')[0]

var comp = Math.random();
console.log(comp)

// if (comp < 0.34) {
//     comp = 'gajah'
// } else if (comp >= 0.34 && comp < 0.67) {
//     comp = 'semut'
// } else {
//     comp = 'manusia'
// }

function menang() {
    const menang = document.createElement('p');
    const textMenang = document.createTextNode('Kamu menang');
    menang.appendChild(textMenang);
    document.body.appendChild(menang)
}

function kalah() {
    const kalah = document.createElement('p');
    const textKalah = document.createTextNode('Kamu kalah');
    kalah.appendChild(textKalah);
    document.body.appendChild(kalah)
}

function seri() {
    const seri = document.createElement('p');
    const textSeri = document.createTextNode('Kamu seri');
    seri.appendChild(textSeri);
    document.body.appendChild(seri)
}


gajah.addEventListener('click', function() {
    if (comp < 0.34) {
        seri();
    } else if (comp >= 0.34 && comp < 0.67) {
        kalah();
    } else {
        menang();
    }
});

semut.addEventListener('click', function() {
    if (comp < 0.34) {
        menang();
    } else if (comp >= 0.34 && comp < 0.67) {
        seri();
    } else {
        kalah();
    }
});

manusia.addEventListener('click', function() {
    if (comp < 0.34) {
        kalah();
    } else if (comp >= 0.34 && comp < 0.67) {
        menang();
    } else {
        seri();
    }
});