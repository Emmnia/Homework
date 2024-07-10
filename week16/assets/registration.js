const form = document.forms.registration;
const submitButton = document.getElementById('submit');
const inputFields = document.querySelectorAll('.input-field');
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const occupationSelect = form.elements.occupation;
const pwdInput = form.elements.password;
const checkbox = document.getElementById('checkbox');

nameInput.addEventListener('change', () => {
    const nameError = document.getElementById('error-name');
    if (!nameInput.checkValidity()) {
        nameError.textContent = 'Введите корректное имя';
    }
})
emailInput.addEventListener('change', function() {
    const emailError = document.getElementById('error-email');
    if (!emailInput.checkValidity()) {
        emailError.textContent = 'Введите корректный e-mail';
    }
})
ageInput.addEventListener('change', () => {
    const ageError = document.getElementById('error-age');
    if (!ageInput.checkValidity()) {
        ageError.textContent = 'Укажите ваш возраст';
    }
})

const radio = form.querySelectorAll('input[type="radio"]');
const errorSex = document.getElementById('error-sex');

occupationSelect.addEventListener('change', () => {
    if (!occupationSelect.value) {
        const errorOccupation = document.getElementById('error-occupation');
        errorOccupation.textContent = 'Укажите вашу профессию';
    }
})

pwdInput.addEventListener('change', () => {
    const pwdError = document.getElementById('error-password');
    if (!pwdInput.checkValidity()) {
        pwdError.textContent = 'Придумайте пароль';
    }
})

checkbox.addEventListener('change', () => {
    const acceptError = document.getElementById('error-accept');
    if (!checkbox.checked) {       
        acceptError.textContent = 'Подтвердите согласие';
    } else {
        acceptError.textContent = '';
    }
})

inputFields.forEach(function(input) {
    input.addEventListener('focus', function() {
        input.style.border = '2px solid #b224ef';
        input.style.outline = 'none';
    });
    input.addEventListener('blur', function() {
        input.style.border = ''; 
    });
})

form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        let isChecked = false;
    radio.forEach(element => {
    if (element.checked) {
        isChecked = true;
    }
    if (!isChecked) {
        errorSex.textContent = 'Укажите ваш пол';
    } else {
        errorSex.textContent = '';
    }
    })
        const formData = new FormData(evt.target);
        console.log("Имя: " + formData.get('name'));
        console.log("Почта: " + formData.get('email'));
        console.log("Возраст: " + formData.get('age'));
        console.log("Пол: " + formData.get('sex.value'));
        console.log("Профессия: " + formData.get('occupation'));
        console.log("Пароль: " + formData.get('password'));
        form.reset();
})




