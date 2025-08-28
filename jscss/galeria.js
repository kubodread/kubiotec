
const displayedImage = document.querySelector('.galeriaImg');
const thumbBar = document.querySelector('.minibar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['01.png',  `05.png`, `07.png`,  `09.png`,  `10.png`,  `13.png`];
const alts = {
  '01.png' : 'inicio sesión ',
  '05.png' : 'veamos que se puede haber',
    '07.png' : 'veamos que se puede haber',
    '09.png' : 'veamos que se puede haber',
    '10.png' : 'veamos que se puede haber',
    '13.png' : 'veamos que se puede haber'

}

/* Looping through images */
let newImage;
for (const image of images) {
   newImage = document.createElement('img');
  newImage.setAttribute('src', `imagenappcom/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */


