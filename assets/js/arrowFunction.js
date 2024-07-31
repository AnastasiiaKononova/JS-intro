// Необмежена кількість аргументів

// 1 arguments - псевдомасив (пронумерованы + length)

// arguments приймає усі перераховані при виклику функції аргументи,
// навіть якщо при оголошенні функції вказано імена для перших кількох параметрів

// Ex. a - arguments[0], b - arguments[1]

// arguments - колекція для збереження аргументів ф-ї
function f(a, b) {
    console.log(arguments);
    console.log('a :>> ', a);
  }
  
  f(1, 2, 3);
  
  //Написати функцію для підрахунку суми необмеженої кількості елементів
  
  function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  const sumOfArgs = sum(1, 2, 3, 4, 5, 6);
  console.log(sumOfArgs);
  
  // Task: Написати функцію для розрахунку добутку
  // необмеженої кількості переданих аргументів.
  function dob() {
    let dob = 1;
    for (let i = 0; i < arguments.length; i++) {
      dob *= arguments[i];
    }
    return dob;
  }
  const dobOfargs = dob(1, 2, 3, 4, 5, 6);
  console.log(dobOfargs);
  
  // Task: *Написати функцію виду
  // calculate(operation, operand1, operand2, …, operandN),
  // де operation - це операція (+,*), яка має бути виконана над операндами.
  // operation - arguments[0], тому цикл перебираємо з 1
  
  // operation = arguments[0]
  function calculate(operation) {
    let accum;
    if (operation === '+') {
      accum = 0;
      for (let i = 1; i < arguments.length; i++) {
        accum += arguments[i];
      }
    } else if (operation === '*') {
      accum = 1;
      for (let i = 1; i < arguments.length; i++) {
        accum *= arguments[i];
      }
    } else {
      return undefined;
    }
  
    return accum;
  }
  
  const result = calculate('*', 1, 2, 3, 4);
  console.log(result);


  