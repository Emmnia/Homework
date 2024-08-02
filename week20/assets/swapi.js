const selectCategory = document.getElementById('category');
const selectNumber = document.getElementById('number');
const searchButton = document.getElementById('searchButton');
const loader = document.getElementById('loading');
const result = document.getElementById('result');
const error = document.getElementById('error');


const searchInfo = () => {
    loader.classList.add("display");
    let url = `https://swapi.py4e.com/api/${selectCategory.value}/${selectNumber.value}/`;
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            error.textContent = 'Не удалось отобразить информацию: ' + response.status;
            result.textContent = '';
            return Promise.reject(response.status);
        }
    })
    .then((data) => {
        loader.classList.remove("display");
        if (selectCategory.value === 'films') {
            console.log(data.title);
            result.textContent = data.title;
            error.textContent = '';
        } else {
            console.log(data.name);
            result.textContent = data.name;
            error.textContent = '';
        }
    })
    .catch((error) => {
        loader.classList.remove("display");
        error.textContent = 'Не удалось отобразить информацию: ' + error.message;
    })
    .finally(() => {
        console.log('Запрос информации');
    })
}

searchButton.addEventListener('click', searchInfo);