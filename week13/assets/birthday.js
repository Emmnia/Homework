let birthdayInput = document.getElementById('date-input');
let resultButton = document.getElementById('button');
let result = document.getElementById('result');
let birthday;

function setBirthday() {
    birthday = new Date(Date.parse(birthdayInput.value));
    console.log(birthday);
}

birthdayInput.addEventListener('input', setBirthday);

function countDays() {
    let today = new Date();
    let diffInMilliseconds = birthday - today;
    let daysLeft = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    if (birthdayInput.value === "") {
        result.textContent = "Пожалуйста, выберите дату";
        result.classList.add('error');
    } else {
        result.textContent = 'До вашего дня рождения осталось ' + daysLeft + ((((dec = daysLeft%100) >= 11 && dec <= 19) || (dec = daysLeft%10) >= 5 || dec == 0) ? ' дней' :  (dec == 1 ? ' день' : ' дня'));
        result.classList.remove('error');
    }
}

resultButton.addEventListener('click', countDays);