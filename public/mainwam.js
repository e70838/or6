function toto(event) {
    const image = event.target;
    const files = ['k/modelelivres300x300.png',
    'k/modeleporteDroite-300x300.png',
    'k/modeleporteGauche300x300.png',
    'k/modeletirroirs300x300.png',
    'k/rien.png'];
    // console.log(image);
    for (i = 0; i < files.length; i++) {
        if (image.src.includes(files[i])) {
            image.src = files[(i+1)%files.length];
            break;
        }
    }
}

const ma_div = document.getElementById('grille_kallax');
//let s = '';
//for (i = 0 ; i < 12; i++) {
//    s += '<img src="k/rien.png" />';
//}
//ma_div.innerHTML = s;
//const imgs = document.querySelectorAll('img');
//for (i = 0; i < imgs.length; ++i) {
//  imgs[i].onclick = toto;
  // console.log(i, imgs[i].src); // passes index + value back!
//};

for (i = 0 ; i < 12; i++) {
    const mon_image = document.createElement('img');
    mon_image.setAttribute('src', 'k/rien.png');
    mon_image.onclick = toto;
    ma_div.appendChild(mon_image);
}
