const sizeInput = document.querySelector('#font-size-control');
const changedText = document.querySelector('#text');

sizeInput.addEventListener('input', () => {
    changedText.style.fontSize = sizeInput.value + "px";
});