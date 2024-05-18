let image = document.getElementById('image');

function changeImage() {
    if (image.getAttribute('src') === 'assets/capy-flowers.png') {
        image.src = 'assets/capy-donut.png';
    } else {
        image.src = 'assets/capy-flowers.png';
    }
}

function calculateTotalPrice(quantity = 2, price = 15000000) {
    if (image.getAttribute('src') === 'assets/capy-flowers.png') {
        price = 1000;
    }
    quantity = document.getElementById('quantity').value;
    const total = quantity * price;
    const localTotal = total.toLocaleString('ru-RU');
    const message = document.getElementById('message');
    message.textContent = "Стоимость покупки: " + localTotal + " рублей";
}
