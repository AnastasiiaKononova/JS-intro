// const summand1 = 4;
// const summand2 = 5;

// // console.log(
// //   String(summand1) +
//     ' + ' +
//     String(summand2) +
//     ' = ' +
//     String(summand1 + summand2)
// );

// // шаблонний літерал
// console.log(`Summand1: ${summand1}`);

// console.log(`${summand1} + ${summand2} = ${summand1 + summand2}`);

// // Task
// const greeting = 'Hello';
// const userName = prompt('Enter your name:');
// console.log(`${greeting}, ${userName}`); // 'Hello, name' by template literal

// ---------------------------------------------------------
// Користувач має 3 спроби ввести пароль
// Якщо пароль вірний, то вивести "Пароль вірний"
// // Інакше "Пароль невірний"

// const TRY_LIMIT = 3;
// const PASSWORT_PATTERN = 'qwerty';

// let currentTry = 1;
// let password = '';

// // do {
// //   password = prompt('Input password:');
// //   if (password === PASSWORT_PATTERN) {
// //     break;
// //   }
// //   currentTry++;
// // } while (currentTry <= TRY_LIMIT);

// // if (password === PASSWORT_PATTERN) {
// //   console.log('Password is correct');
// // } else {
// //   console.log('Password is incorrect');
// // }

// let isPasswordCorrect = false;

// do {
//   isPasswordCorrect = prompt('Input password:') === PASSWORT_PATTERN;
// } while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// console.log(`Password is ${isPasswordCorrect ? 'correct' : 'incorrect'}`);

// //--------------------------------------------------------
// // Якщо людина повнолітня, вивести "Ви повнолітній", інакше "Ви не повнолітній"
const age = 8;

const resultString = age >= 18 ? 'Ви повнолітній' : 'Ви не повнолітній';
console.log(resultString);

// let resultString = '';
// if (age >= 18) {
//   resultString = 'Ви повнолітній';
// } else {
//   resultString = 'Ви не повнолітній';
// }