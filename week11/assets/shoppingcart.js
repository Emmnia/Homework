const button = document.getElementById('discount');
const result = document.getElementById('result');
const price1 = parseFloat(document.getElementById('price1').innerHTML);
const price2 = parseFloat(document.getElementById('price2').innerHTML);
const price3 = parseFloat(document.getElementById('price3').innerHTML);
const price4 = parseFloat(document.getElementById('price4').innerHTML);

result.textContent = price1 + price2 + price3 + price4 + '₽';

function applyDiscount() {
    let discountPrice = (price1 + price2 + price3 + price4)*0.8;
    result.textContent = discountPrice.toFixed(1) + '₽';
    button.disabled = true;
}

button.addEventListener('click', applyDiscount);