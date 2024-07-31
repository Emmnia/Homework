// Создайте функцию makeOne, которая пытается вызвать функцию functionWithErrors, и при этом отлавливает ошибку с помощью блока try/catch.

function makeOne() {
	const resultOne = document.getElementById('practicum')
	try {
	functionWithErrors() //Попытка вызова несуществующей функции
	resultOne.textContent = 'Функция вызвана без ошибок'
	} catch (error) {
	resultOne.textContent = 'Ошибка была перехвачена: ' + error.message
    }
}
makeOne()

// Cоздайте функцию makeTwo, которая использует блок try/catch. Создайте код, который пытается перезаписать константу e, обрабатывает ошибку и выводит в <p> - 'Не удалось перезаписать константу: _текст ошибки_', если этот код не выполняется.

function makeTwo() {
  const resultTwo = document.getElementById('practicum')
  const e = 'Меня нельзя перезаписать'
  try {
	e = 'abc'
	resultTwo.textContent = e
	} catch (error) {
	resultTwo.textContent = 'Не удалось перезаписать константу: ' + error.message
    }
}
makeTwo()

// Cоздайте функцию makeThree, которая используя блок try/catch,
// - пытается выполнить код с оператором throw new Error (передай в качестве аргумента строку 'Ошибка!'),
// - обрабатывает ошибку и выводит её в <p>, если происходит попытка выполнить этот оператор.

function makeThree() {
	const resultThree = document.getElementById('practicum')
	try {
		 throw new Error('Ошибка!')
	} catch (error) {
		resultThree.textContent = 'Ошибка была перехвачена: ' + error.message
	}
}
makeThree()

// Cоздайте функцию makeFour, которая использует блок try/catch. Ошибка не должна выводиться на экран, а должен быть выведен результат умножения чисел 2 и3 в элемент с id "practicum".

function makeFour() {
    const resultFour = document.getElementById("practicum");
    try {
        let a = 2;
        let b = 3;
        resultFour.textContent = a * b;
    } catch (error) {
        resultFour.textContent = "Ошибка" + error.message;
    }
}
makeFour();


// Допишите функцю makeFive так, чтобы она создала объект ошибки (new Error) и выводила текст ошибки в консоль.

function makeFive(number) {
 if (number === 0) {
   const error = new Error('Ошибка')
   console.log(error.message)
 }// если number равна 0, генерируем ошибку и выводим сообщение ошибки в консоль
  else {
    console.log(number * (number - 1))
  }// иначе выводим в консоль результат выражения number * (number - 1)
}
// makeFive(0)
makeFive(-1)


// Создайте функцию makeSix, которая дополнит код предыдущей функции так, чтобы она использовала оператор throw для генерации исключения в случае ошибки, а затем перехватывала это исключение и выводила в консоль сообщение "Ошибка перехвачена".

function makeSix(number) {
	try {
	  throw new Error('Ошибка')
	} catch (error) {
	  console.log('Ошибка перехвачена')
	}
}
makeSix(0)

function makeSix(number) {
    try {
        let result = number * (number - 1);
        if (number === 0) {
            throw new Error("Ошибка");
        } else {
            console.log(result);
        }
    } catch (error) {
        console.log(error.message); //твой код
    }
}
makeSix(1);

// Допишите функцию makeSeven так, что если делитель равен нулю, бросьте исключение с сообщением "Деление на ноль недопустимо".

function makeSeven() {
    try {
        let dividend = 10
	let divisor = 0
	if (divisor === 0) {
   throw new Error('Деление на ноль недопустимо')
   } else {
      console.log(dividend / divisor)
   } 
    } catch (error) {
        console.log(error.message); //твой код
    }	
}
makeSeven()

// Добавьте блок try/catch так, чтобы вместо ошибки выводилось цифра 1 в консоль

function makeEight() {
	try {
      let a = 22;
      let d = -21;
      let c = a + d;
      console.log(c)
    } catch (error) {
        console.log(error.message);
    }
}
makeEight()

// Добавьте в функцию makeNine блок try, в котором адрес будет проверяться на валидность и пробрасываться ошибка, если адрес некорректен
// Если проверка пройдена успешно, выведите сообщение "Email-адрес корректен" на страницу в <p>
// Если возникла ошибка (некорректный email), перехватите исключение с помощью блока catch
// В блоке catch выведите сообщение об ошибке 'Некорректный email-адрес' на страницу в <p>


function makeNine() {
	let email = 'example.com'
	let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	try {
    if (email.match(emailPattern)) {
   document.getElementById("practicum").textContent = "Email-адрес корректен"
   } else {
      throw new Error('Некорректный email-адрес')
   } 
    } catch (error) {
        document.getElementById("practicum").textContent = error.message; 
    }	
}
makeNine()

// Допишите проверку телефона пользователя, если длина телефона менее 10 символов бросьте исключение throw new Error с сообщением "Некорректная длина телефонного номера"

function makeTen() {
	const phoneNumber = '066298207'
  try {
    if (!/^\d+$/.test(phoneNumber)) {
		throw new Error('Телефонный номер должен состоять только из цифр')
	} else if (phoneNumber.length < 10) {
      throw new Error('Некорректная длина телефонного номера')
    } else {
      console.log('Телефонный номер корректен');
    }	
  } catch(error) {
    console.log(error.message)
  }
	
}
makeTen()

// Создайте функцию makeEleven, которая проверит возраст пользователя.
// Если возраст меньше 18 лет, необходимо бросить в консоль исключение типа Error с сообщением "Доступ запрещен для лиц младше 18 лет". В противном случае, выведите в консоль сообщение "Доступ разрешен".

function makeEleven() {
	let age = 12
  try {
    if (age < 18) {
		throw new Error('Доступ запрещен для лиц младше 18 лет')
	} else {
      console.log('Доступ разрешен');
    }	
  } catch(error) {
    console.log(error.message)
  }
}
makeEleven()

// Создайте функцию makeTwelve, которая будет подсчитывать размер скидки на товар
// Однако существует ограничение: скидка не может быть отрицательной и не может превышать 50%
// В случае нарушения этого ограничения, необходимо в <p> бросить исключение типа Error с сообщением "Некорректное значение скидки"
// В противном случае, выведите в <p> сообщение с размером скидки.
// Используйте блок try/catch

function makeTwelve() {
	let discount = 51
  try {
    if (discount < 0 || discount > 50) {
		throw new Error('Некорректное значение скидки')
	} else {
      document.getElementById("practicum").textContent = discount
    }	
  } catch(error) {
    document.getElementById("practicum").textContent = error.message
  }
}
makeTwelve()

// Есть функция makeThirteen, в неё передаются два параметра: переменная ("а") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с переменной "а" в качестве аргумента
// В блоке catch вывести имя (свойство "name") с возникающей ошибки в элемент с id practicum

function makeThirteen(a, func) {
	const result = document.getElementById('practicum')
	try {
		func(a)
	} catch (error) {
		result.textContent = error.name
	}
}
makeThirteen()


// Есть функция makeFourteen, в неё передаются два параметра: число ("n") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с числом "n" в качестве аргумента.
// В блоке catch вывести сообщение с описанием ошибки в элемент с id practicum

function makeFourteen(n, func) {
	const result = document.getElementById('practicum')
	try {
		func(n)
	} catch (error) {
		result.textContent = error.message
	}
}
makeFourteen()

// Есть функция makeFifteen, в неё передаются два параметра: строка ("str") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с строкой "str" в качестве аргумента.
// В блоке catch вывести сообщение с описанием ошибки в элемент с id practicum

function makeFifteen(str, func) {
	const result = document.getElementById('practicum')
	try {
		func(str)
	} catch (error) {
		result.textContent = error.message
	}
}
makeFifteen()

// Создайте функцию makeSixteen и добавьте try, catch, finally так, чтобы в элемент с id practicum выводился 0 при ошибке.
// А в элемент с id practicumFinally всегда выводилось слово finally

function makeSixteen() {
  const result = document.getElementById('practicum')
  const forWordFinally = document.getElementById('practicumFinally')
  try {
  const result = 12 / 0
  result.textContent = result
  if (result) {
throw new Error('Division by zero')
  }
} catch (error) {
  result.textContent = '0';
} finally {
  forWordFinally.textContent = 'finally';
}
}
makeSixteen()

function makeSixteen() {
  const resultSixteen = document.getElementById('practicum')
  const forWordFinally = document.getElementById('practicumFinally')
  try {
    if (true) {
		throw new Error('Division by zero')
	}
	const result = 12 / 0
	resultSixteen.textContent = String(result)
  } catch (error) {
    resultSixteen.textContent = '0'
  } finally {
    forWordFinally.textContent = 'finally'
  }
}
makeSixteen()

// Создайте функцию makeSeventeen и добавьте try, catch, finally так, чтобы в элемент с id practicum выводилась сумма элементов массива при успешном выполнении функции и сообщение "Ошибка" при ошибке
// А в элемент с id practicumFinally всегда выводилась строка "finally17"

function makeSeventeen() {
	const resultSeventeen = document.getElementById('practicum')
	try {
    const arr = [1, 2, 3]
	const sum = arr.reduce((acc, val) => acc + val, 0)
	resultSeventeen.textContent = sum 
    } catch (error) {
        resultSeventeen.textContent = error.message
    } finally {
        document.getElementById('practicumFinally').textContent = "finally17"
    }
}
makeSeventeen()

// Создайте функцию makeEighteen и добавьте try, catch, finally так, чтобы в элемент с id practicum выводилось значение, возвращаемое функцией calculateValue, при успешном выполнении и сообщение "Ошибка" при ошибке
// А в элемент с id practicumFinally всегда выводилась строка "finally18"

function calculateValue() {
	if (Math.random() < 0.5) {
		throw new Error('Произошла ошибка')
	}
	return 'Успешное выполнение'
}

function makeEighteen() {
	try {
    document.getElementById('practicum').textContent = calculateValue() 
    } catch (error) {
        resultSeventeen.textContent = "Ошибка"
    } finally {
        document.getElementById('practicumFinally').textContent = "finally18"
    }
}
makeEighteen()

// Создайте функцию makeNineteen и добавьте try, catch, finally так, чтобы в элемент с id practicum выводилось значение, возвращаемое функцией fetchData, при успешном выполнении и сообщение "Ошибка" при ошибке
// А в элемент с id practicumFinally всегда выводилась строка "finally19"

function fetchData() {
	if (Math.random() < 0.5) {
		throw new Error('Произошла ошибка при получении данных')
	}
	return 'Данные успешно получены'
}

function makeNineteen() {
	try {
    document.getElementById('practicum').textContent = fetchData()
    } catch (error) {
        resultSeventeen.textContent = "Ошибка"
    } finally {
        document.getElementById('practicumFinally').textContent = "finally19"
    }
}
makeNineteen()

// Создайте функцию makeTwenty, которая получает json файл, который некорректен. Чтобы предотвратить ошибку, добавьте блок try/catch.

const json = '{ некорректный JSON }';

function makeTwenty() {
  const resultTwenty = document.getElementById('practicum')
  try {
    let user = JSON.parse(json) //Возникает ошибка
  resultTwenty.textContent = user.name //Не сработает
  } catch (e) {
    resultTwenty.textContent = 'Извините, в данных ошибка, мы попробуем получить их ещё раз.'
  }
}

makeTwenty()


// Создайте функцию makeTwentyOne, которая получает JSON файл, который некорректен.
// Чтобы предотвратить ошибку, добавьте блок try/catch.

const jsonTwentyOne = '{ некорректный JSON }'

function makeTwentyOne() {
	const resultTwentyOne = document.getElementById('practicum')
	 try {
    JSON.parse(jsonTwentyOne)
  } catch (e) {
    resultTwentyOne.textContent = 'Извините, в данных ошибка, мы попробуем получить их ещё раз.'
  }
}
makeTwentyOne()

// Создайте функцию makeTwentyTwo, которая пытается выполнить некорректную операцию и использует оператор throw и выводит 'Ошибка',
// ошибка обрабатывается в блоке catch

function makeTwentyTwo() {
  const resultTwentyTwo = document.getElementById('practicum')
  try {
      const divisor = 0
  if (divisor === 0) {
    throw new Error('Ошибка')
  }
  const result = 24 / divisor
  resultTwentyTwo.textContent = result
  } catch (error) {
    resultTwentyTwo.textContent = error.message
  }
}
makeTwentyTwo()

// Создайте функцию makeTwentyThree, которая с вероятностью 90% выбрасывает ошибку,
// и обрабатывает эту ошибку в блоке catch (нужно вывести сообщение об ошибке error.message).

function makeTwentyThree() {
	const result = document.getElementById('practicum')
	try {
        const randomValue = Math.random()
	if (randomValue <= 0.9) {
		throw new Error('Искусственная ошибка')
	}
	result.textContent = 'Операция успешно выполнена'
    } catch (error) {
        result.textContent = error.message
    }
}
makeTwentyThree()

// Создайте функцию makeTwentyFour, которая использует setTimeout с блоком try/catch,
// чтобы обработать ошибку, которая может возникнуть при асинхронном выполнении кода.

function makeTwentyFour() {
  const result = document.getElementById('practicum')
  setTimeout(function() {
  try {
    noSuchVariable 
  } catch (error) {
    result.textContent = error.message
  }
  }, 1000);
}
makeTwentyFour()

// Создайте функцию makeTwentyFive, которая использует async/await для асинхронной операции и блок try/catch, чтобы обработать ошибку, которая может возникнуть при этой асинхронной операции.

const result = document.getElementById('practicum')

function simulateAsyncOperation() {
	return new Promise((resolve, reject) => {
		if (Math.random() < 0.9) {
			reject(new Error('Произошла ошибка при асинхронной операции'));
		} else {
			resolve('Асинхронная операция успешно выполнена');
		}
	});
}

async function makeTwentyFive() {
    result.textContent = 'Ожидание...';
    try {
	const result = await simulateAsyncOperation();
    result.textContent = 'Результат: ' + result;
    } catch (error) {
    result.textContent = 'Произошла ошибка: ' + error.message;
    }
}

makeTwentyFive()

// Создайте функцию makeTwentySix, которая содержит код с использованием Promise.reject, демонстрирующий, что ошибки внутри этих операций не попадают в блок catch на том же уровне.

function makeTwentySix() {
	const result = document.getElementById('practicum')
	result.textContent = 'Ожидание...'
	try {
		Promise.reject()
		throw new Error('ошибка')
	} catch (e) {
		result.textContent = 'Ошибка на верхнем уровне: ' + e.message
	}
}
makeTwentySix()

// Выполнение функции упадёт в блок catch?
// Ответ будет доступен при нажатии на кнопку "Проверить".

function makeTwentySeven() {
	const result = document.getElementById('practicum')
	result.textContent = string
	return
	try {
		while (true) {
			// Бесконечный цикл
		}
	} catch (error) {
		result.textContent = 'Произошла ошибка: ' + error.message
	}
}
makeTwentySeven()

// ответ: нет. ReferenceError: string is not defined В данном коде присутствует синтаксическая ошибка