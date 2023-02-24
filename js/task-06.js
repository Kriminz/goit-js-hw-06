const textInput = document.querySelector('input#validation-input');
const MAX_LENGTH = document.querySelector('input[data-length = "6"]');

textInput.addEventListener('blur', (event) => {
    if(MAX_LENGTH.dataset.length < textInput.value.length){
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");    
    }
    else{
        textInput.classList.remove("invalid");
        textInput.classList.add("valid")
    }
});