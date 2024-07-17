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
  
  function age1(number) {
    if (number >= 18) {
      return true;
    } else {
      return false;
    }
  }
  const ourAge = age1(81);
  console.log(ourAge);
  
  function age2(number) {
    return number >= 18 ? true : false;
  }
  
  const ourAge2 = age2(81);
  console.log(ourAge2);
  
  function isAdult(age) {
    return age >= 18;
  }
  
  console.log('isAdult :>> ', isAdult(15));
  