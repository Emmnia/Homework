//Задание 1
// Напишите функцию firstFunction, которая будет выводить в консоль переменную first.
let first = 8;

function firstFunction() {
	return first;
}

console.log(firstFunction());

//Задание 2
// Напишите функцию sum, которая принимает два параметра a и b, складывает их и выводит в консоль результат.
let a = 5;
let b = 3;

function sum(a, b) {
	return a + b;
}

console.log(sum(a, b));

//Задание 3
// Напишите функцию multiply, которая принимает два параметра x и y, перемножает их и выводит в консоль результат.
let x = 4;
let y = 2;

function multiply(x, y) {
    return x * y;
}

console.log(multiply(x, y));

//Задание 4
// Напишите функцию greet, которая принимает один параметр firstName и выводит в консоль приветствие с этим именем.
let firstName = 'Alice';

function greet(firstName) {
	return 'Hi, ' + firstName + '!';
}

console.log(greet(firstName));

//Задание 5
// Напишите функцию calculateArea, которая принимает два параметра width и height, вычисляет площадь прямоугольника и выводит в консоль результат.
let width = 6;
let height = 4;

function calculateArea(width, height) {
	return width * height;
}

console.log(calculateArea(width, height));

//Задание 6
// Напишите функцию printMessage(), которая принимает один параметр message и выводит его в консоль. Если параметр не передан, используйте значение по умолчанию: "Сообщение отсутствует".
function printMessage(message = "Сообщение отсутствует") {
	console.log(message);
}

printMessage();
printMessage('Hi');

//Задание 7
// Напишите функцию secondFunction, которая принимает два параметра: c и d, и выводит в консоль их сумму. Если значения параметров не переданы, используйте значения по умолчанию: c = 5 и d = 10.
let c = 5;
let d = 10;

function secondFunction(c = 5, d = 10) {
	return c + d;
}

console.log(secondFunction()); //Выведет 15
//Обратите ваше внимание, что мы можем передать в функцию любые аргументы и secondFunction подставит их на место параметров соответственно, перемножит их и вернёт результат.
console.log(secondFunction(2, 3)); //Выведет 5

//Задание 8
// Напишите функцию thirdFunction, которая принимает два параметра: f и g, и выводит в консоль их произведение. Если ни одно значение не передано, используйте значения по умолчанию: f = 2 и g = 3.

function thirdFunction(f = 2, g = 3) {
	return f * g;
}

console.log(thirdFunction()); //Выведет 6, так как используются значения по умолчанию
console.log(thirdFunction(4, 5)); //Выведет 20, так как переданы параметры 4 и 5

//Задание 9
// Напишите функцию приветствия (название придумайте самостоятельно), которая принимает один параметр guestName и возвращает приветствие в формате "Привет, {guestName}!". Если параметр не передан, используйте значение по умолчанию: "Гость". Чтобы увидеть результат в консоли, вызовите функцию внутри console.log.

function printGreeting (guestName = "Гость") {
	return 'Привет, ' + guestName + '!';
}

console.log(printGreeting());
console.log(printGreeting("Кот"));


//Задание 10
// Создайте функцию calculateDifference с помощью Function Expression и правильно используйте её, чтобы вычесть два числа и вывести результат в консоль.
// Ваш код

const result = function calculateDifference(a, b) {
	return a - b;
};

console.log(result(5, 3)); //Выведет 2

//Задание 11
// Напишите функцию calculateProduct с помощью Function Expression, которая будет принимать два параметра. Функция должна перемножить значения и вывести результат в консоль.

const total = function calculateProduct(a, b) {
	return a * b;
};

console.log(total(5, 3)); //Выведет 15

//Задание 12
// Напишите стрелочную функцию calculateSquare, которая будет принимать один параметр num. Внутри функции объявите локальную переменную result и присвойте ей значение, равное квадрату числа num. Затем верните значение переменной result из функции.

const squaredNumber = (num) => {
	const result = num ** 2;
	return result;
};

console.log(squaredNumber(5)); // Выведет 25

//Задание 13
// Напишите  стрелочную функцию sayThree, которая будет выводить в консоль сообщение "Три!"

const sayThree = () => {
	console.log("Три!");
};

sayThree();

//Задание 14
// Напишите функцию findAnimal, которая будет выводить в консоль значения переменных cat и rabbit. Переменная cat объявлена внутри функции, а переменная rabbit объявлена во внешней области видимости.

const rabbit = "Кролик";

function findAnimal () {
	const cat = "Кошка";
	return cat + ' и ' + rabbit;
}

console.log(findAnimal());

//Задание 15
// Допишите программу, которая вычисляет сколько лет прошло с летней олимпиады в Токио, Япония. Подсказка: 1. нужно создать переменную с текущим годом. 2. при вызове функции в круглые скобки нужно передать два параметра: текущий год и год летней олимпиады в Токио.
const lastOlympicsYear = 2021;
let thisYear = 2024;

function calculateYearsSinceLastOlympics(a, b) {
	return a - b;
}

console.log(
	'С момента летней олимпиады в Токио прошло ' + calculateYearsSinceLastOlympics(thisYear, lastOlympicsYear) + ' года',
);

//Задание 16
// Напишите программу, которая вычисляет возраст пользователя на основе его года рождения, будет выводить результат в консоль.
const friendYearOfBirth = 1985;

function calculateAge(year) {
	console.log(year - friendYearOfBirth);
}

calculateAge(2024);

//Задание 17
// Напишите функцию которая принимает ваш год рождения и возвращает ваш возраст. Обратите ваше внимание, что в глобальной зоне видимости есть переменная с текущим годом.

let currentYear = 2024;

function calcAge(birthYear) {
	console.log(currentYear - birthYear);
}

calcAge(1989);


//Задание 18
// Напишите функцию, которая должна возводить число в заданную степень. Результат должен выводить в консоль в формате: console.log("Результат: " + result);

function calculatePower (number, power) {
	const result = number ** power;
	console.log("Результат: " + result);
}

calculatePower (5, 3);