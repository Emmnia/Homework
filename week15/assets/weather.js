!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');

const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];
const submitButton = document.getElementById('submit');
const infoContainer = document.getElementById('calculations');

const submitTemperatures = () => {
    for (let city of cities) {
        let temperature = prompt('Введите температуру для города ' + city);
        temperatures.push(Number(temperature));
        let cityTemp = document.createElement('p');
        infoContainer.append(cityTemp);
        cityTemp.textContent = city + ': ' + temperature + '℃';
    }
}

const findMinMax = () => {
    let minValue = Infinity;
    let maxValue = -Infinity;
    for (let temperature of temperatures) {
        if (temperature < minValue) {
            minValue = temperature; 
        }
        if (temperature > maxValue) {
            maxValue = temperature;            
        }
    }
    let minTemp = document.createElement('p');
    infoContainer.append(minTemp);
    minTemp.textContent = 'Минимальная температура: ' + minValue + '℃';
    let maxTemp = document.createElement('p');
    infoContainer.append(maxTemp);
    maxTemp.textContent = 'Максимальная температура: ' + maxValue + '℃';
}

submitButton.addEventListener('click', function(){
    submitTemperatures();
    findMinMax();
});