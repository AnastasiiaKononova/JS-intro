// Функції

// Повторне використання коду
// Одна функція - одна відповідальність

// Оголошення функції
// function fName(param1, param2, ...){
//   тіло функції
//   return значення;
// }

// Виклик функції
// fName('p1', 'p2', ...)
//--------------------------------------------
// в дужках при оголошенні - параметри функції
// function myFunction(userName) {
//     const userGreeting = `Hello, ${userName}`;
//     return userGreeting;
//   }
  
//   // const a = myFunction('Ivo'); //  в дужках при виклику - аргументи
  // console.log('a :>> ', a);
  
  // ---------------------------------------------
  // написати функцію для обчислення суми двох чисел
  
//   function sum(par1, par2) {
//     return par1 + par2;
//   }
  
//   const result = sum(4, 5);
//   console.log('result :>> ', result);
  
//   // написати функцію, яка приймає два параметри a, b і повертає a**b
  // 2,2 => 4
//   // 3,4 => 81
//   function myPow(a, b) {
//     return a ** b;
//   }
  
//   const pow = myPow(2, 2);
//   console.log(pow);
  
//   // написати функцію для обчислення суми цілих чисел від n1 до n2
//   // 1, 5  => 1 + 2 + 3 + 4 + 5
//   // 7, 10 => 7 + 8 + 9 + 10
  
//   function sumFromAToB(from, to) {
//     let sum = 0;
//     for (let i = from; i <= to; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log('sumFromAToB(1,5) :>> ', sumFromAToB(1, 5));
//   console.log('sumFromAToB(1,5) :>> ', sumFromAToB(100, 110));
  
//   // Task: Написати функцію, яка приймає вік користувача і
//   // повертає true для повнолітнього користувача,
//   //          false - для неповнолітнього
  
  // function age1(number) {
  //   if (number >= 18) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // const ourAge = age1(81);
  // console.log(ourAge);
  
  // function age2(number) {
  //   return number >= 18 ? true : false;
  // }
  
  // const ourAge2 = age2(81);
  // console.log(ourAge2);
  
  // function isAdult(age) {
  //   return age >= 18;
  // }
  
  // console.log('isAdult :>> ', isAdult(15));
  


  // Способи задання функцій

// Function Declaration / Оголошення функції
// function fName(param1, param2, ...){
//   тіло функції
//   return значення;
// }

// Function Expression / Вираз функції
// const fName = function (param1, param2, ...){
//   тіло функції
//   return значення;
// }
// // fName(...)

// // // ! Використовується тільки післі оголошення

// const calcSum = function (a, b) {
//   return a + b;
// };

// console.log('calcSum(1,2) :>> ', calcSum(1, 2));

// // Переписати функцію для піднесення числа до степеня
// // в формі Function Expression

// // const calcPow = function (a, b) {
// //   return a ** b;
// // };
// // console.log(calcPow(2, 2));

// // Значення за умовчуванням
// // ! Оголошуються після обов'язкових

// const value = prompt('Input number');
// console.log('value :>> ', value === '');

// // Знайти суму двох чисел,
// // якщо друге число не передане, то вважати його 1

// /**
//  * Calculates summ of two numbers
//  * @param {number} a - First summand
//  * @param {number} [b = 1] - Second summand
//  * @returns {number} Summ of arguments
//  */
// function sum2(a, b = 1) {
//   // if(b === undefined) { b = 1; }
//   return a + b;
// }


// console.log('sum2(2,3) :>> ', sum2(2, 3));
// console.log('sum2(2) :>> ', sum2(2));

// // Переписати так, щоб, якщо користувач передає тільки 1 параметр, то це to,
// // тоді from вважати 1

// // Прописати JSDoc для sumFromAToB або функції піднесення до степеня
// /**
//  * Function for calculating the sum of given numbers
//  * @param {number} to - First number
//  * @param {number} [from = 1] - Second number
//  * @returns {number} return sum from number to number
// //  */
// function sumFromAToB(to, from = 1) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let sumto1 = sumFromAToB(10, -10);
// console.log(sumto1);
// let sumto10 = sumFromAToB(10);
// console.log(sumto10);

// //
// prompt();






    