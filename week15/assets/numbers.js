let numbers = [];

for (let i = -10; i <= 10; i++) {
    numbers.push(Math.floor(i));
}
console.log(numbers);

const notNegative = (n) => {
    for (let i = -10; n >= i; i++) {
        return n >= 0;
    }
}

numbers = numbers.filter(notNegative);
console.log(numbers);

for (let number of numbers) {
    console.log(number * number)
}

const getSorted = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[i] > arr[j]) {
                let x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    return arr;
}

numbers = getSorted(numbers);
console.log(numbers);



// Вам необходимо выполнить следующие операции над массивом чисел:

// Создайте пустой массив с именем numbers
// Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
// Используя циклы, выполните следующие операции над массивом numbers:
// Удалите все отрицательные числа из массива
// Возведите каждое число в квадрат
// Отсортируйте числа в порядке убывания
// Выведите полученный массив numbers в консоль