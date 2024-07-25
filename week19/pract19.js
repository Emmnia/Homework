// - Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch().
// - Затем из полученного объекта нужно извлечь свойство "status"
// - Результат должен быть выведен в элемент <p> с id "practicum" в DOM-дерево.

// Пожалуйста, обратите внимание, при написании функции для запроса API нужно добавлять обработку ошибок. Используйте метод catch после метода then, чтобы отлавливать и обрабатывать возможные ошибки, которые могут возникнуть в процессе выполнения запроса. Это поможет предотвратить неожиданные проблемы и обеспечит более надёжную работу вашего кода.

// <section class='html'>
//   <p id="practicum"></p>
// </section>

function makeOne() {
  fetch('<https://catfact.ninja/fact>')//Ваш код
    .then((res) => {
      document.getElementById('practicum').textContent = res.status;
    })//Если есть ответ от сервера, выведи его свойство status в <p>
    .catch((err) => {
      document.getElementById('practicum').textContent = "Ошибка. Запрос не выполнен";
    });//Если произошла ошибка, выведи в <p> сообщение "Ошибка. Запрос не выполнен"
}

makeOne()


// Создайте функцию makeTwo, которая выполняет следующие действия:

// - Функция makeTwo должна сделать GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "name"
// - Полученное значение вставьте в элемент с id "practicum" в DOM-дерево
// - В случае ошибки выведите сообщение 'Произошла ошибка'

function makeTwo() {
  fetch('<https://emojihub.yurace.pro/api/random/group/face-positive>')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById('practicum').textContent = data.name;
    })
    .catch((err) => {
      document.getElementById('practicum').textContent = 'Произошла ошибка';
    });
}

makeTwo()

// Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в <p> свойство statusText полученного объекта.
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeThree() {
	fetch('https://www.boredapi.com/api/activity')//Ваш код
  .then((data) => {
    document.getElementById('practicum').textContent = data.statusText;
    console.log(data.statusText)
  })
  .catch((err) => {
    document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
  });
}

makeThree()

// Создайте функцию makeFour, которая выполняет следующие действия:

// - Функция makeFour должна сделать GET-запрос по адресу https://www.boredapi.com/api/activity с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "activity", которое содержит описание активности
// - Вывести полученную активность в формате 'Activity: описание активности' в <p>
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeFour() {
	fetch('https://www.boredapi.com/api/activity')
.then((res) => {
      return res.json();
    })
  .then((data) => {
      document.getElementById('practicum').textContent = 'Activity: ' + data.activity;
    })
  .catch((err) => {
    document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
  });
}

makeFour()

// Создайте функцию makeFive, которая выполняет следующие действия:

// Функция makeFive должна сделать GET-запрос по адресу https://www.boredapi.com/api/activity с помощью функции fetch()
// Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// Затем из полученного JSON-объекта нужно извлечь свойство "participants", которое содержит количество участников для активности
// Вывести количество участников для активности в <p>
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeFive() {
	fetch('https://www.boredapi.com/api/activity')
.then((res) => {
      return res.json();
    })
  .then((data) => {
      document.getElementById('practicum').textContent = data.participants;
    })
  .catch((err) => {
    document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
  });//Ваш код
}

makeFive()


// Создайте функцию makeSix, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в <p> свойства из полученного объекта, такие как activity, type, price и accessibility.
// - В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeSix() {
	fetch('https://www.boredapi.com/api/activity')
.then((res) => {
      return res.json();
    })
  .then((data) => {
      document.getElementById('practicum').textContent = data.activity + data.type + data.price + data.accessibility;
    })
  .catch((err) => {
    document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
  });
}

makeSix()


// Создайте функцию makeSeven, которая выполняет GET-запрос по адресу https://api.agify.io/, используя функцию fetch(). Выведите в <p> ответ с сервера (не забудь преобразовать его к строке с помощью JSON.stringify()), чтобы убедиться, что получили данные.
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeSeven() {
	fetch('https://api.agify.io/')
.then((res) => {
      return res.json();
    })
  .then((data) => {
      document.getElementById('practicum').textContent = JSON.stringify(data);
    })
  .catch((err) => {
    document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
  });
}

makeSeven()

// Если вы сделали всё верно, в 7 задании вы получили ответ от сервера "Missing 'name' parameter". Помните, что обработка ошибок является важной частью кода, и хорошая практика - всегда предусматривать возможные ситуации, когда запрос может завершиться неудачно.

// Создайте функцию makeEight, которая выполняет GET-запрос по адресу https://api.agify.io/, используя функцию fetch(), с параметром '?name=alice' ("https://api.agify.io/параметр").
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

function makeEight() {
		fetch('https://api.agify.io/?name=alice')
.then((res) => {
      return res.json();
    })
  .then((data) => {
      document.getElementById('practicum').textContent = JSON.stringify(data);
    })
  .catch((err) => {
    document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
  });
}

makeEight()


// Создайте функцию makeNine, которая выполняет GET-запрос по адресу `https://api.agify.io/` с параметром ?name=vadim, используя функцию fetch(), и выведет полученные данные в элемент с id practicum.
// В случае ошибки выведите сообщение 'Ошибка. Запрос не выполнен'

// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

const resultElement = document.getElementById('practicum')

function makeNine() {
  fetch('https://api.agify.io/?name=vadim')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('practicum').textContent = JSON.stringify(data);
    })
    .catch((error) => {
      document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
    })
}

makeNine()

// Создайте функцию makeTen, которая выполняет следующие действия:

// - Функция makeTen должна сделать GET-запрос по адресу https://dog.ceo/api/breeds/image/random с помощью функции fetch()
// - Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// - Затем из полученного JSON-объекта нужно извлечь свойство "message", которое содержит ссылку на случайное изображение собаки
// - Далее нужно создать элемент <img> и установить его атрибут "src" равным значению из свойства "message" (ссылке на изображение)
// - Добавьте элементу <img> класс 'html-img'
// - Созданный элемент <img> должен быть вставлен после элемента с id "practicum" в DOM-структуре страницы
// После выполнения этих шагов будет загружено случайное изображение собаки, которое будет отображено под <p>.
// - В случае ошибки выведите в <p> сообщение 'Ошибка. Запрос не выполнен'

function makeTen() {
	fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      let message = data.message;
      let img = document.createElement('img')
      img.src = message
      img.classList.add('html-img')
      let section = document.querySelector('.html')
      section.appendChild(img)
    })
    .catch((error) => {
      document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен';
    })
}

makeTen()

// Нужно создать функцию makeEleven, которая выполняет следующие действия:

// Функция makeEleven должна сделать GET-запрос на адрес https://api.ipify.org?format=json с помощью функции fetch()
// Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// Затем из полученного JSON-объекта нужно извлечь свойство "ip", которое содержит текущий IP-адрес
// Полученный IP-адрес нужно вывести в элемент с id "practicum"
// В случае ошибки выведите `Ошибка: ${error}`

function makeEleven() {
  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = data.ip;
    })
    .catch((error) => {
      document.getElementById('practicum').textContent = `Ошибка: ${error}`
    })
}

makeEleven()

// Введите в поле ввода IP-адрес из задания 11 в поле ниже для получения его гео-позиции. Используйте функцию fetch() для выполнения GET-запроса по адресу https://api.ipgeolocationapi.com/geolocate/{ipAddress}. Замените {ipAddress} на фактический IP-адрес, который вы получите из текстового поля.

// Подсказка: используйте свойство textContent для вывода данных о гео-позиции в виде строки.
// В случае ошибки выведите `Ошибка: ${error}

function makeTwelve() {
  let ipAddress = document.getElementById('ipAddress').value
	fetch('https://api.ipgeolocationapi.com/geolocate/{ipAddress}')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
    })
    .catch((error) => {
      document.getElementById('practicum').textContent = `Ошибка: ${error}`
    })
}

makeTwelve()

// Создайте функцию makeThirteen, которая выполняет GET-запрос по адресу https://official-joke-api.appspot.com/random_joke, используя функцию fetch(). Выведите в <p> ответ с сервера, чтобы посмотреть, какие поля есть в ответе.
// В случае ошибки выведите `Ошибка: ${error}`

function makeThirteen() {
	  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
    })
    .catch((error) => {
      document.getElementById('practicum').textContent = `Ошибка: ${error}`
    })
}

makeThirteen()

// Создайте функцию makeFourteen, которая выполняет GET-запрос по адресу https://official-joke-api.appspot.com/random_joke, используя функцию fetch(). Выведите на страницу информацию о шутке, используя поля "setup" и "punchline" из ответа сервера.
// В случае ошибки выведите `Ошибка: ${error}`

// Подсказка: используйте свойство innerHTML и шаблонные строки

const paragraph = document.getElementById('practicum')
function makeFourteen() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').innerHTML = `<p>- ${data.setup}</p>
        <p>- ${data.punchline}</p>` 
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeFourteen()

// Нужно создать функцию makeFifteen, которая делает следующие действия:

// Функция makeFifteen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/posts с помощью функции fetch()
// В теле запроса отправьте JSON-объект с полями title и body, например:
// { "title": "Заголовок", "body": "Текст поста" }
// Укажите заголовок "Content-Type" как "application/json" для запроса
// Полученный ответ от сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ от сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`
// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.


const paragraph = document.getElementById('practicum')

function makeFifteen() {
  const postData = {
    title: 'Заголовок',
    body: 'Текст поста',
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
      })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeFifteen()


// Создайте функцию makeSixteen, которая делает следующие действия:

// - Функция makeSixteen должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch()
// - Укажите заголовок "Content-Type" как "application/json" для запроса
// - В теле запроса отправьте JSON-объект с полями title и body, например:
// { "title": "Новый заголовок", "body": "Новый текст поста" }
// - Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// - Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`
// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

const paragraph = document.getElementById('practicum')

function makeSixteen() {
	const postData = {
    title: 'Новый заголовок',
    body: 'Новый текст поста',
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
      })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeSixteen()

// Создайте функцию makeSeventeen, которая делает следующие действия:

// Функция makeSeventeen должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch()
// Полученный ответ с сервера должен быть выведен в <p>
// В случае ошибки выведите `Ошибка: ${error}`

const paragraph = document.getElementById('practicum')

const makeSeventeen = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
      })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeSeventeen()

// Создайте функцию makeEighteen, которая делает следующие действия:

// - Функция makeSeventeen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch()
// - Укажите заголовок "Content-Type" как "application/json" для запроса
// - В теле запроса отправьте JSON-объект с полями title и url, например:
// { "title": "Название изображения", "url": "https://example.com/image.jpg" }
// - Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`

function makeEighteen() {
	const photoData = {
    title: 'Название изображения',
    body: 'https://example.com/image.jpg',
  };

  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(photoData),
  })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
      })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}

makeEighteen()


// Создайте функцию makeNineteen, которая делает следующие действия:

// Функция makeNineteen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch()
// В теле запроса отправьте JSON-объект с полями name, username, email и phone, например:
// { "name": "Кот Учёный", "username": "kitty", "email": "kitty@example.com", "phone": "123-456-7890" }
// Укажите заголовок "Content-Type" как "application/json" для запроса
// Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`

function makeNineteen() {
	const userData = {
    name: 'Кот Учёный',
    username: 'kitty',
      email: 'kitty@example.com',
      phone: '123-456-7890',
  };

  fetch('https://jsonplaceholder.typicode.com/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
      })
    .catch((error) => document.getElementById('practicum').textContent = `Ошибка: ${error}`)
}

makeNineteen()

// Создайте функцию makeTwenty, которая делает следующие действия:

// Функция makeTwenty должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/comments с помощью функции fetch()
// Укажите заголовок "Content-Type" как "application/json" для запроса
// В теле запроса отправьте JSON-объект с полями name, email, body и postId, например:
// { "name": "Золотая рыбка", "email": "goldfish@example.com", "body": "Гав-гав!", "postId": 1 }
// Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ с сервера в <p>
// В случае ошибки выведите `Ошибка: ${error}`

function makeTwenty() {
	const commentData = {
    name: 'Золотая рыбка',
      email: 'goldfish@example.com',
      body: 'Гав-гав!',
      postId: 1,
  };

  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
      })
    .catch((error) => document.getElementById('practicum').textContent = `Ошибка: ${error}`)
}

makeTwenty()


// Создайте функцию makeTwentyOne, которая делает следующие действия:

// - Функция makeTwenty должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/comments/1 с помощью функции fetch()
// - Укажите заголовок "Content-Type" как "application/json" для запроса
// В теле запроса отправьте JSON-объект с полями name, email, body и postId, например:
// { "name": "Золотая рыбка", "email": "goldfish@example.com", "body": "Буль-буль!", "postId": 1 }
// - Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// - Выведите ответ с сервера в <p>
// В случае ошибки выведи 'Ошибка. Запрос не выполнен'

function makeTwentyOne() {
	const commentData = {
    name: 'Золотая рыбка',
      email: 'goldfish@example.com',
      body: 'Буль-буль!',
      postId: 1,
  };

  fetch('https://jsonplaceholder.typicode.com/comments/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('practicum').textContent = JSON.stringify(data);
      })
    .catch((error) => document.getElementById('practicum').textContent = `Ошибка: ${error}`)
}

makeTwentyOne()

// Создайте функцию makePromiseAllOne, которая делает следующие действия:

// Функция makePromiseAllOne должна делать два GET-запроса на адреса:
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/comments/1
// Используйте `.then()` для обработки результатов.
// Выведите оба ответа с сервера в <p>
// В случае ошибки выведите 'Ошибка. Запрос не выполнен'

function makePromiseAllOne() {
const request1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
const request2 = fetch('https://jsonplaceholder.typicode.com/comments/1').then(response => response.json());
Promise.all([request1, request2])
  .then(([data1, data2]) => {
    document.getElementById('practicum').innerHTML = `<p>${JSON.stringify(data1)}</p>
        <p>${JSON.stringify(data2)}</p>`
  })
  .catch((error) => document.getElementById('practicum').textContent = `Ошибка: ${error}`)
}

makePromiseAllOne()

// Создайте функцию makePromiseAllTwo, которая делает следующие действия:

// - Функция makePromiseAllTwo должна делать три GET-запроса на адреса:
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/comments/1
// - Используйте `async/await` для обработки результатов.
// - Выведите все ответы с сервера в <p>
// В случае ошибки выведите 'Ошибка. Запрос не выполнен'

async function makePromiseAllTwo() {
  let result
  try {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data1 = await response1.json()
    result = JSON.stringify(data1)

    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data2 = await response2.json()
    result += JSON.stringify(data2)

    const response3 = await fetch('https://jsonplaceholder.typicode.com/comments/1')
    const data3 = await response3.json()
    result += JSON.stringify(data3)

    document.getElementById('practicum').textContent = result
  }
  catch (error) {
    document.getElementById('practicum').textContent = 'Ошибка. Запрос не выполнен'
  }
}

makePromiseAllTwo()


// let name = "Вася";
// function sayHi() {
// document.getElementById('practicum').textContent = name;
// }

// setTimeout(function() {
// let name = "Петя";
// sayHi();
// }, 1000);
// Есть код, как думаете, какое имя выведется в <p>? Проверьте себя  (ВАСЯ)

const makeTwentyFour = () => {
  let name = 'Вася'
  function sayHi() {
    document.getElementById('practicum').textContent = name
  }

  setTimeout(function () {
    let name = 'Петя'
    sayHi()
  }, 1000)
}

makeTwentyFour()

// В каком порядке числа выведутся в <p>? (1, 3, 2)

function makeTwentyFive() {
const paragraph = document.getElementById('practicum')
  let result = ''
  paragraph.textContent = 1; //запишите в paragraph число 1
  //все числа должны быть выведены через запятую 
  //Cтавим таймер на 0 миллисекунд
  setTimeout(function () {
      paragraph.textContent += ', ' + 2;
  }, 0)

  paragraph.textContent += ', ' + 3;
}
makeTwentyFive()

// Создайте функцию makeTwentySix, должна использовать setTimeout для отображения в <p> сообщения "Прошло 5 секунд" через 5 секунд.

function makeTwentySix() {
	setTimeout(function() {
  document.getElementById('practicum').textContent = 'Прошло 5 секунд'
}, 5000);
}

makeTwentySix()


// Создайте функцию makeTwentySeven, должна использовать setTimeout для отображения в <p> сообщения "Прошло 2 секунды" через 2 секунды.

function makeTwentySeven() {
	setTimeout(function() {
  document.getElementById('practicum').textContent = 'Прошло 2 секунды'
}, 2000);
}

makeTwentySeven()


// Создайте функцию makeTwentyEight, которая использует setInterval для отображения в <p> сообщения "Прошло 3 секунды" каждые 3 секунды.

// Подсказка: в <p> необходимо дописывать сообщения, а не перезатирать их

function makeTwentyEight() {
  const interval = setInterval(function() {
  document.getElementById('practicum').textContent += ' Прошло 3 секунды'
}, 3000);

  //Очищаем setInterval для экономии ресурсов
  setTimeout(()=>{
    clearInterval(interval/*тут надо подставить id, который возвращает setInterval*/)
  }, 7000)
}

makeTwentyEight()

// Создайте функцию makeTwentyNine, которая использует setInterval для отображения в <p> сообщения "Прошло 2 секунды" каждые 2 секунды.

// Подсказка: в <p> необходимо дописывать сообщения, а не перезатирать их

function makeTwentyNine() {
 const interval = setInterval(function() {
  document.getElementById('practicum').textContent += ' Прошло 2 секунды'
}, 2000);

  //Очищаем setInterval для экономии ресурсов
  setTimeout(()=>{
    clearInterval(interval/*тут надо подставить id, который возвращает setInterval*/)
  }, 7000)
}

makeTwentyNine()

// Создайте функцию makeThirty, которая использует setInterval для отображения в <p> сообщения "Прошло 5 секунд" каждые 5 секунд.

// Подсказка: в <p> необходимо дописывать сообщения, а не перезатирать их

function makeThirty() {
  const interval = setInterval(function() {
  document.getElementById('practicum').textContent += ' Прошло 5 секунд'
}, 5000);

  //Очищаем setInterval для экономии ресурсов
  setTimeout(()=>{
    clearInterval(interval)
  }, 16000)
}

makeThirty()