function toto(image) {
    console.log('hello world');
    console.log(image.src);
    if (image.src.includes('k/modelelivres300x300.png')) {
        image.src = 'k/modeleporteDroite-300x300.png';
    } else if (image.src.includes('k/modeleporteDroite-300x300.png')) {
        image.src = 'k/modeleporteGauche300x300.png';
    } else if (image.src.includes('k/modeleporteGauche300x300.png')) {
        image.src = 'k/rien.png';
    } else {
        image.src = 'k/modelelivres300x300.png';
    }
}

var imgs = document.querySelectorAll('img');
for (i = 0; i < imgs.length; ++i) {
  console.log(i, imgs[i].src); // passes index + value back!
};