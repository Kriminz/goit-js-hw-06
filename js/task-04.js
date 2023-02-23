const decrementDat = document.querySelector('button[data-action="decrement"]');
const incrementDat = document.querySelector('button[data-action="increment"]');
const primaryValue = document.querySelector('#value');
let counterValue = 0;

const increase = () => {
    counterValue += 1;
    primaryValue.textContent = counterValue;
};

const decrease = () => {
    counterValue -= 1;
    primaryValue.textContent = counterValue;
};

incrementDat.addEventListener("click", increase);
decrementDat.addEventListener("click", decrease);