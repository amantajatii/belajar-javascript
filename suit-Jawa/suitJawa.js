let tanya = true

while (tanya) {
    let p = prompt('gajah, semut, orang')

    var comp = Math.random()

    if (comp < 0.34) {
        comp = 'gajah'
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut'
    } else {
        comp = 'orang'
    }

    var hasil = ''

    if (p == comp) {
        hasil = 'SERI'
    } else if (p == 'gajah') {
        hasil = (comp = 'semut') ? 'MENANG' : 'KALAH'
    } else if (p == 'semut') {
        hasil = (comp = 'orang') ? 'MENANG' : 'KALAH'
    } else if (p == 'orang') {
        hasil = (comp = 'gajah') ? 'MENANG' : 'KALAH'
    } else {
        hasil = 'tidak valid'
    }

    alert(`
        Kamu memilih ${p} dan komputer memilih ${comp}.\n
        Sehingga hasilnya adalah ${hasil}
        `)

    tanya = confirm('lagi atau tidak?')
}