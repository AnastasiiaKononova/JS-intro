// Arrow (стрілочна, стрелочная) function ----------------------------------

// function declaration
// function funcName (p1, p2) {}

// function expression
// const fName = function (p1, p2) {}

// arrow function
// const fName = (p1, p2) => {}

// const sum = (a, b) => {
//   return a + b;
// };

// Скорочена форма

const sum = (a, b) => a + b;

console.log(sum(4, 5));

// Task: Записати isAdult у вигляді строчної функції
// Приймає вік
// Повертає істину для повнолітнього, false для неповнолітнього

// const isAdult = age => {
//   return age >= 18;
// };

// Скорочена форма

const isAdult1 = age => age >= 18;

console.log(isAdult1(18));

// Task: Запакувати у функції об'єкт
// firstName, lastName =>{
//   firstName: firstName,
//   lastName:lastName
// }

const packToObject = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

console.log(packToObject('Test', 'Testovych'));

// Спрощення при запису стрілочної функції -------------

// // 1 Якщо параметр 1, то можна не брати його у дужки
// const isAdult1 = age => {
//   return age >= 18;
// };

// // 2 Якщо в тілі функції тільки повернення значення,
// //        то дужки і return можна опустити
// const isAdult1 = age => age >= 18;

// 3 Якщо в скороченому записі вигляду 2 повертається об'єкт,
//        то його портібно взяти в ()

const packObject = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

// ---------------------------------------------------------------

// Обмеження:
// 1 Нема arguments
// 2 Нема свого this. Бере з середовища, тому не використовується як метод об'єкта

// ---------------------------------------------------------
// Task: Функція greeting(lang, userName), яка має повертати
// 'Hello ' + userName, if lang==='en'
// 'Вiтаю ' + userName, if lang==='ua'

// greeting('ua', "Ivo")   =>   'Вiтаю Ivo'
// greeting('en', "Ivo")   =>   'Hello Ivo'

// const greeting = (lang, userName) =>
//   lang === 'ua' ? 'Вiтаю ' + userName : 'Hello ' + userName;

const gretingOptions = {
  en: 'Hello',
  ua: 'Вітаю',
  fr: 'Bonjure',
};

const greeting = (lang, userName) => `${gretingOptions[lang]} ${userName}`;

console.log(greeting('en', 'Ivo'));
console.log(greeting('ua', 'Вікторія'));
console.log(greeting('fr', 'Fransua'));