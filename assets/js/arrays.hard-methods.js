/* 
Функції як аргументи інших функцій
*/

function multyTwo(argum) {
  return argum * 2;
}

function square(argum) {
  return argum ** 2;
}

const fn2 = multyTwo; // передача посилання на функцію
/* Функція вищого порядку (High Order Function - HOF)*/
function getConsoleExp(number, func) {
  // функція - аргумент іншої функції
  const res = func(number); // func - callback - функція зворотнього виклику
  console.log(res);
}

getConsoleExp(4, multyTwo);
getConsoleExp(3, square);

// Методи масивів

// forEach(функція) - приймає фнкцію і виконує їїї на кожному елементі масива
// результатом роботи forEach завжди є undefined
// Не змінює елементи масиву

const array = [4, 5, 6, 7, 8];

array.forEach(callback);

function callback(currentValue, index, array) {
  console.log(`${currentValue} - - - ${index} - - - ${array}`);
}

function myOwnForEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

const users = [
  {
    name: "John",
    lastname: "Doe",
    email: "123@mail",
    age: 15,
  },
  {
    name: "Josh",
    lastname: "Fix",
    email: "564@mail",
    age: 20,
  },
  {
    name: "Jack",
    lastname: "Lui",
    email: "976@mail",
    age: 18,
  },
  {
    name: "July",
    lastname: "Bri",
    email: "453@mail",
    age: 13,
  },
];

// users.forEach(function(currentUser){
//     currentUser.age = 20;
// })

/* 
Вивести мейли всіх юзерів на консоль
*/

users.forEach(function (currentUser) {
  console.log(currentUser.email);
});

/* map() */

/* map(функція) - приймає функцію , виконує її на кожному елементі початкового масиву і в якості результата повертає новий масив 
з результатами роботи callback */

const emails = users.map(function (currentValue, index, array) {
  return currentValue.email;
});

/* filter () - вільтрує елементи масива на співпадіння умові*/

// filter (функція) - створює новий масив, який складається з елементів почтакового, які пройшли перевірку
// функція, яку передали методи, повертає true - елемент пройшов первірку
// функція повертає false - елемент не пройшов первірку

const filtered = users.filter(function (currentValue, index, array) {
  return currentValue.age > 18;
});

/*
Створити масив [4, 5, 6, 7, 8, 10]
Відфільтрувати його так, щоб в результаті отримати масив з числами [4, 6, 8, 10]
*/

const res = [4, 5, 6, 7, 8, 10].filter(function (curNum) {
  return curNum % 2 === 0;
});

/* Sort  */

const arr23 = [7, 5, 23, 1, 2, 4];

// Сортує масив
// sort (функція) - прйимає функцію і сортує елементи масива відповідно до результатів роботи цієї функції
// мутує масив (змінює почтаковий)

function comparator(a, b) {
  // порівнююча функція
  if (a > b) {
    // якщо наступний елемент - більший ніж попередній - він має збільшитись на місці
    return -1;
  } else if (a < b) {
    //  якщо наступний менше - вони поміняються місцями
    return 1;
  } else {
    return 0;
  }
}

arr23.sort(comparator);

// Задача відсортувати юзерів за віком

users.sort(function (u1, u2) {
  return u1.age - u2.age;
});

/* Reduce */

// Метод reduce зводить всі елементи масива до якогось результату

const arr34 = [3, 4, 5, 6, 7, 8, 9];

// Знайти суму всіх елементів масива
const result = arr34.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
