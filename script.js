const sliderLine = document.querySelector('.slider-line');
const sliderForward = document.querySelector('.slider-forward');
const sliderBack = document.querySelector('.slider-back');
let count = 0;
 sliderForward.addEventListener('click', () => {
  count++;
  if (count > 4) {
    count = 0;
  }
  sliderLine.style.transform = `translateX(-${count * 100 / 5}%)`;
});
 sliderBack.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = 4;
  }
  sliderLine.style.transform = `translateX(-${count * 100 / 5}%)`;
});