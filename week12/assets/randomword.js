const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const randomIndex1 = Math.floor(Math.random() * alphabet.length);
const randomIndex2 = Math.floor(Math.random() * alphabet.length);
const randomIndex3 = Math.floor(Math.random() * alphabet.length);
const randomIndex4 = Math.floor(Math.random() * alphabet.length);
const randomWord = document.getElementById('random-word');
const resultButton = document.getElementById('result');

function printWord() {
    randomWord.textContent = alphabet[randomIndex1] + alphabet[randomIndex2] + alphabet[randomIndex3] + alphabet[randomIndex4];
}

resultButton.addEventListener('click', printWord);



// Выведи полученное случайное слово на экран, чтобы проверить результат.
// Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
// Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
// Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.