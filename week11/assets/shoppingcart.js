const button = document.getElementById('discount');
const result = document.getElementById('result');
const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');
const price4 = document.getElementById('price4');

result.textContent = parseFloat(price1.innerHTML) + parseFloat(price2.innerHTML) + parseFloat(price3.innerHTML) + parseFloat(price4.innerHTML) + '₽';

function applyDiscount() {
    let newPrice1 = parseFloat(price1.innerHTML)*0.8;
    let newPrice2 = parseFloat(price2.innerHTML)*0.8;
    let newPrice3 = parseFloat(price3.innerHTML)*0.8;
    let newPrice4 = parseFloat(price4.innerHTML)*0.8;
    let discountPrice = newPrice1 + newPrice2 + newPrice3 + newPrice4;
    price1.textContent = newPrice1;
    price2.textContent = newPrice2;
    price3.textContent = newPrice3;
    price4.textContent = newPrice4;
    result.textContent = discountPrice.toFixed(1) + '₽';
    button.disabled = true;
}

button.addEventListener('click', applyDiscount);