function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorName = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

changeButton.addEventListener('click', checkColorChange);

function checkColorChange(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}