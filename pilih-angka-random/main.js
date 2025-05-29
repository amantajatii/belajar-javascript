let lanjut = true

while (lanjut) {
    let tanya = 3
    while (tanya > 0) {
        let p = prompt(
            'pilih angka acak dengan range 1 - 10!'
        )

        const angkaRandom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        // const angkaRandom = 8



        let hasil = ''

        if (p < 1 || p > 10) {
            hasil = 'Angka yang kamu pilih tidak memenuhi range 1 - 10'
        } else if (p < angkaRandom) {
            hasil = 'Angka yang kamu pilih kurang besar'
        } else if (p > angkaRandom) {
            hasil = 'Angka yang kamu pilih terlalu besar'
        } else if (p == angkaRandom) {
            hasil = 'Selamat! Jawaban kamu BENAR!!!'
            tanya = 1
        } else {
            hasil = 'tidak valid'
        }

        alert(hasil)

        tanya--

        var alr

        // alert(`kamu memiliki ${tanya} percobaan lagi`)

        alr = (p == angkaRandom) ? 'Permainan Selesai' : `kamu memiliki ${tanya} percobaan lagi`
        alert(alr)
    }
    lanjut = confirm('ingin bermain lagi?')
}