const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://h-dmos.ru/cdn/d2bywgumb0o70j/2021/01/18/1dbb49ca0d619e276dada65da8db6103_8159636dc4c52aed.png'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

const radioCar = document.getElementById('car');
const radioMoto = document.getElementById('motorcycle');
const container = document.querySelector('#container');


class Transport {
    constructor(id, type, price, brand, image) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo() {
        let vehicleCard = document.createElement('div');
        vehicleCard.classList.add('card');
        container.appendChild(vehicleCard);
        let vehiclePhoto = document.createElement('img');
        vehiclePhoto.src = this.image;
        vehiclePhoto.classList.add('img');
        vehicleCard.appendChild(vehiclePhoto);
        let infoButton = document.createElement('button');
        infoButton.textContent = "Показать информацию";
        infoButton.classList.add('button');
        vehicleCard.appendChild(infoButton);
        let vehicleInfo = document.createElement('div');
        vehicleInfo.classList.add('info');
        vehicleInfo.setAttribute('style', 'white-space: pre-line;');
        infoButton.addEventListener('click', () => {
            switch(this.id) {
                case 1:
                    vehicleCard.appendChild(vehicleInfo);
                    vehicleInfo.textContent = `${audi.getPrice()}
                    Количество дверей: ${audi.getDoorsCount()}`;
                    break;
                case 2:
                    vehicleCard.appendChild(vehicleInfo);
                    vehicleInfo.textContent = `${mercedes.getPrice()}
                    Количество дверей: ${mercedes.getDoorsCount()}`;
                    break;
                case 3:
                    vehicleCard.appendChild(vehicleInfo);
                    vehicleInfo.textContent = `${harley1.getPrice()}
                    Максимальная скорость: ${harley1.getMaxSpeed()}`;
                    break;
                case 4:
                    vehicleCard.appendChild(vehicleInfo);
                    vehicleInfo.textContent = `${harley2.getPrice()}
                    Максимальная скорость: ${harley2.getMaxSpeed()}`;
                    break;
                default:
                    vehicleCard.appendChild(vehicleInfo);
                    vehicleInfo.textContent = '-';
                    break;
            }
        })
    }

    getPrice() { 
        return `${this.brand}
        ${this.price.toLocaleString('ru-RU')} ₽`
    }
}

class Car extends Transport {
    constructor(id, type, price, brand, image, doors) {
        super(id, type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors;
    }
}

let audi = new Car(1, 'car', 4300000, 'Audi', 'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/27995-2024-audi-q4-e-tron-premium-plus', 4);
let mercedes = new Car(2,'car', 2800000, 'Mercedes-Benz', 'https://platform.cstatic-images.com/medium/in/v2/stock_photos/ae3923fe-2f97-49ba-b825-4f521a0b01f3/a605eea8-7485-4615-9151-67e943897230.png', 4);

radioCar.addEventListener('change', () => {
    if (radioCar.checked) {
        container.innerHTML = '';
        audi.getInfo();
        mercedes.getInfo();
    }
})

class Bike extends Transport {
    constructor(id, type, price, brand, image, maxSpeed) {
        super(id, type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed + " км/ч";
    }
}

let harley1 = new Bike(3, 'bike', 1300000, 'Harley-Davidson', 'https://h-dmos.ru/cdn/d2bywgumb0o70j/2021/01/18/1dbb49ca0d619e276dada65da8db6103_8159636dc4c52aed.png', 210);
let harley2 = new Bike(4, 'bike', 1400000, 'Harley-Davidson', 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png', 220);

radioMoto.addEventListener('change', () => {
    if (radioMoto.checked) {
        container.innerHTML = '';
        harley1.getInfo();
        harley2.getInfo();
    }
})