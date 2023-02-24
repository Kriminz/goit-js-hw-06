const textInput = document.querySelector('#name-input');
const namePerson = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    if(event.currentTarget.value === ''){
        namePerson.textContent = 'Anonymous';
    }
    else{
        namePerson.textContent = event.currentTarget.value;
    }
});