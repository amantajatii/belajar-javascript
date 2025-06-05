const button = document.querySelector('.button');

button.addEventListener('click', function(){
    document.body.classList.toggle('biru-muda');
});

const buttonBaru = document.createElement('button');
const textButtonBaru = document.createTextNode('Ubah Warna Acak');

buttonBaru.appendChild(textButtonBaru);

buttonBaru.setAttribute('type', 'button');

button.after(buttonBaru)

buttonBaru.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const s = Math.round(Math.random() * 255 + 1);
    const t = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + s + ', ' + t + ')'
})


const sMerah  = document.querySelector('input[name=sMerah]')
const sHijau  = document.querySelector('input[name=sHijau]')
const sBiru  = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +' )'
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +' )'
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +' )'
});

document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
})