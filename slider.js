const slides = document.querySelector('.slider').children
console.log (slides);

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let index = 0;

next.addEventListener ('click', function () {
   console.log('You click next ');
   nextSlide();
   resetTimer();
})

prev.addEventListener ('click', function () {
   console.log('You click prev ');
   prevSlide();
   resetTimer();
})

function nextSlide() {
   if (index === slides.length - 1) {
      index = 0;
   } else {
      index++
   }
changeSlide();
}

function prevSlide () {
   if (index === 0) {
      index = slides.length - 1;
   } else {
      index--;
   }

   changeSlide();
}

function changeSlide () {
   for (let i = 0; i < slides.length; i++){
      slides[i].classList.remove('active');
   }
  slides[index].classList.add('active');
}

function resetTimer() {
clearInterval(timer);
timer = setInterval(autoPlay, 4000)
}

function autoPlay() {
   nextSlide()
}

let timer = setInterval(autoPlay, 4000)