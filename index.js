'use strict';

function playCatSound (e) {
  const keyCode = document.querySelector(`.cat[data-key="${e.keyCode}"]`);
  const catSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!keyCode) return;
  catSound.currentTime = 0;
  catSound.play();
  keyCode.classList.add('meow');
}

function removeMeow (e) {
  console.log(e);
  if(e.type !== 'transitionend') return;
  this.classList.remove('meow');
}

const cats = document.querySelectorAll('.cat');

cats.forEach((c) => {c.addEventListener('transitionend', removeMeow)})

window.addEventListener('keydown', playCatSound);
