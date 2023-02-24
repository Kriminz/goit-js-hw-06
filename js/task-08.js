const form = document.querySelector(".login-form");

const alarm = document.createElement("p");

function checkForm(event) {
  event.preventDefault();

  const { elements: { email, password }, } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alarm.textContent = "Введіть пошту та пароль!";
    form.after(alarm);
    console.log(alarm);
    return alarm;
  }


  console.log(`email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
}

// alarm.remove();

form.addEventListener("submit", checkForm);
