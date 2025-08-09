let slideImages = document.querySelectorAll('.slides img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');

let counter = 0;

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

function slideNext() {
  slideImages[counter].classList.remove('active');
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  counter = (counter + 1) % slideImages.length;
  slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  slideImages[counter].classList.add('active');
  updateDots();
}

function slidePrev() {
  slideImages[counter].classList.remove('active');
  slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
  counter = (counter - 1 + slideImages.length) % slideImages.length;
  slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  slideImages[counter].classList.add('active');
  updateDots();
}

let autoSlide = setInterval(slideNext, 4000);

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', () => clearInterval(autoSlide));
container.addEventListener('mouseout', () => autoSlide = setInterval(slideNext, 4000));

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[counter].classList.add('active');
}

function switchImage(currentDot) {
  let imageId = parseInt(currentDot.getAttribute('data-index'));
  if (imageId === counter) return;

  slideImages[counter].classList.remove('active');
  slideImages[counter].style.animation = imageId > counter ? 'next1 0.5s ease-in forwards' : 'prev1 0.5s ease-in forwards';

  const direction = imageId > counter ? 'next2' : 'prev2';
  counter = imageId;

  slideImages[counter].style.animation = `${direction} 0.5s ease-in forwards`;
  slideImages[counter].classList.add('active');
  updateDots();
}

window.switchImage = switchImage;
