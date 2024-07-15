// if - розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// const isLogged = false;

// if (isLogged) {
//   console.log('Hello');
//   console.log('Вітаємо, ви успішно увійшли в систему)');
// } else {
//   console.log('Спробуйте ввести свої дані повторно(');
// }

// // Task: Задана змінна
// const isEnoughMoney = true;
// // Якщо грошей достатньо, вивести “Операцію схвалено)”
// // Якщо недостатньо, то вивести “Операцію відхилено(”
// // const isEnoughMoney = false;
// if (isEnoughMoney) {
//   console.log('Операцію схвалено');
// } else {
//   console.log('Операцію відхилено');
// }

// Оператори порівняння
// >, <, >=, <=, ==/===, !=/!==

// const age = 18;

// console.log('age > 18 :>> ', age > 18);
// console.log('age < 18 :>> ', age < 18);
// console.log('age >= 18 :>> ', age >= 18);
// console.log('age <= 18 :>> ', age <= 18);

// //! Нестрога рівність / нерівність - ПОГАНО!
// console.log('age == 18 :>> ', age == 18);
// console.log('age == "18" :>> ', age == '18');
// console.log('age != 18 :>> ', age != 18);
// console.log('age != "18" :>> ', age != '18');

// // Строга нерівність / рівність
// console.log('age === 18 :>> ', age === 18);
// console.log('age === "18" :>> ', age === '18');
// console.log('age !== 18 :>> ', age !== 18);
// console.log('age !== "18" :>> ', age !== '18'); // 18!=='18'

// Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

// const age = Number(prompt('Скільки вам років?'));

// if (age >= 18) {
//   console.log('Вітаємо на порталі послуг ');
// } else {
//   console.log('Вибачте, доступ заборонено(');
// }

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// інакше вивести їхню різницю
// let a = Number(prompt('Перше число'));
// let b = prompt('Символ');
// let s = Number(prompt('Друге число'));
// if (b === '+') {
//   alert(a + s);
// } else {
//   alert(a - s);
// }

// const num1 = Number(prompt('Enter your first numbeer'));
// const num2 = Number(prompt('Enter your second number'));
// const operator = prompt('Enter your action operator');

// if (operator === '+') {
//   console.log('Сума: ', num1 + num2);
// } else {
//   console.log(num1 - num2);
// }

// Скорочена форма if

// if (умова) {
//   гілка true;
// }

// Вивести привітання для користувачів сайта
// Але якщо користувач неповнолітній, то попередитий його про обмежений функціонал

// const age = Number(prompt('Скільки вам років?'));

// if (age < 18) {
//   console.log('Вибачте вам недено обмежений функціонал');
// }

// console.log('Вітаємо на нашому ресурсі');

// Розширена форма if

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// Якщо введено "*", то порахувати і вивести добуток цих чисел,
// інакше вивести їхню різницю
// const num1 = Number(prompt('Enter your first number'));
// const num2 = Number(prompt('Enter your second number'));
// const operator = prompt('Enter your action operator');

// if (operator === '+') {
//   console.log('Сума: ', num1 + num2);
// } else if (operator === '*') {
//   console.log('Добуток:', num1 * num2);
// } else {
//   console.log('Різниця:', num1 - num2);
// }

// Умовні (булевські) операції

// умова І умова   - умова && умова    - age >= 18 && isVactinated
// умова АБО умова - умова || умова    - age < 18  || isVactinated
// // НЕ умова        - !умова

// console.group('Таблиця істинності &&:');

// console.log('true && true :>> ', true && true); // => true, якщо всі true
// console.log('false && false :>> ', false && false);
// console.log('true && false :>> ', true && false);
// console.log('false && true :>> ', false && true);

// console.groupEnd();

// console.group('Таблиця істинності ||:');

// console.log('true || true :>> ', true || true);
// console.log('false || false :>> ', false || false); // => false, якщо всі false
// console.log('true || false :>> ', true || false);
// console.log('false || true :>> ', false || true);

// console.groupEnd();

// console.group('Таблиця істинності !:');

// console.log('!true :>> ', !true);
// console.log('!false  :>> ', !false);

// console.groupEnd();

// // falsy: 0, '', false, null, undefined, NaN
// const q = 'string';
// // if (q !== '' && q !== undefined && q !== null) {
// if (q) {
//   console.log('Значення коректне');
// }

// const day = 'friday';
// const date = 13;
// // // видати повідомлення про знижку, якщо пт 13
// if (day === 'friday' && date === 13) {
//   console.log('Вітаємо, вам надано знижку в 10%)))');
// // }

// // // якщо неповнолітній, то вивести інфо про обмеження
// const isAdult = false;

// // if (isAdult !== true) {
// // if (isAdult === false) {
// if (!isAdult) {
//   console.log('Вибачте вам надено обмежений функціонал');
// }

// // Number.isNaN(NaN)
// // Не мажна перевіряти NaN===NaN

const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));
if ((num1+num2) %5 === 0) {
    alert('Сумма кратна 5');
} else {
    alert('Сумма не кратна 5');
}

