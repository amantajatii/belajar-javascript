const btn1 = document.getElementById('btn1') // khusus untuk id saja
const btn2 = document.querySelector('.btn2') // bisa untuk semua elemen, bisa id, class, p, button, dll

const defaultText = 'Klik saya 1'
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'

function gantiWarna() {
    console.log('aman')
    btn1.style.background = 'blue '
}

function ubahText() {
    btn1.textContent = 'hihihi'
}

function oriText() {
    btn1.textContent = defaultText
}