let paragraf;

paragraf = document.querySelector('p');

function dodajtext () {
    paragraf.innerHTML = 'Akademia108';
}

let buttonDodaj;

buttonDodaj = document.getElementById('dodaj').onclick = dodajtext;


function usuntext () {
    paragraf.innerHTML = '';
}

let buttonUsun;

buttonUsun = document.getElementById('usun').onclick = usuntext;