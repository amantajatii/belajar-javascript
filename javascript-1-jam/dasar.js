let nama = 'diaz amantajati'
let usia = 19
let tinggiBadan = 185
let beratBadan
let pacar =

    beratBadan = 96

if (pacar == null) {
    pacar = 'belum punya'
} else {
    pacar = 'udah punya'
}

// switch (pacar) {
//     case 1:
//         pacar = 'punya 1 aja'
//         break
//     case 2:
//         pacar = 'punya pacar 2'
//         break
//     default:
//         pacar = 'belum punya pacar'
//         break
// }

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

alert(
    `nama saya ${nama}, usia saya ${usia}, tinggi badan saya ${tinggiBadan}, berat badan saya ${beratBadan}, dan pacar saya ${pacar} `
)

alert(
    `saldo awal saya sebesar Rp. ${saldoAwal} dan saldo tambahan saya sebesar Rp. ${saldoTambahan}, jadi total saldo yang saya miliki adalah Rp. ${saldoAkhir}`
)