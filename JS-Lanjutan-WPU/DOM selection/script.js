// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Selamat Datang';

// document.getElementsByTagName()
// --> HTMLCollection
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
// --> HTMLCollection
const p1 = document.getElementsByClassName('p1');
for (let i = 0; i < p1.length; i++) {
    p1[i].style.color = 'red';
}


