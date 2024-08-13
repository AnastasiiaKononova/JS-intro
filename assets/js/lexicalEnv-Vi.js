// Scope / Область видимості ----------------------------------

// Змінні, оголошені поза будь-яким блоком - глобальні, видно всім блокам (Scope - Script)
// Змінні, оголошені усередині блоку, тобто в {} - локальні, видно тільки всередині блоку (Scope - Block/Local)

// const globalVar = 'global';

// if (true) {
//   const localVarIn1If = 'local in 1 if';
//   if (true) {
//     const localVarIn2If = 'local in 2 if';

//     console.log('globalVar :>> ', globalVar);
//     console.log('localVarIn1If :>> ', localVarIn1If);
//     console.log('localVarIn2If :>> ', localVarIn2If);
//   }
// }

/// глобальна область видимості (global scope)
let variable = "John";

function printName() {
  let variable = "Rick";
  console.log(variable);
  /* 
    Перш за все шукається локальна змінна name,
    Якщо її не знайдено - буде шукатися в батьківській області видимості
    */

  function sayHello() {
    let variable = "Nick";
    console.log(`${variable} say Hello`);
    sayHello();
  }
  printName();
  function changeName() {
    variable = "Jake";
  }

  //changeName();
  printName();
  if (true) {
    /// блочна область видимості
    let a = "hello";
  }
  // a створена всередині if
  function fn() {
    //локальна область видимості
  }
}

// Lexical Environment / Лексичне оточення --------------------

// Лексичне оточення - концепція, згідно з якою оточення ф-ї
// формується згідно з місцем її оголошення в коді

// const a = 'global';

// function f1 () {
//   const a = 'local';
//   f2();
// }

// function f2 () {
//   console.log('a :>> ', a);
// }

// f1();

// Closure / Замикання ---------------------------------------

// Замикання - це комбінація функції та лексичного оточення, в якому ця функція була визначена.
// У Closure в Scope - локальні змінні функції, всередині якої функція, що виконується, була створена.

// const a = 'global';

// function f1 () {
//   const a = 'local';

//   function f2 () {
//     console.log('a :>> ', a);
//   }

//   f2();
// }
// f1();

// // -----------------------------------------

// const a = 'global';

// function f1 () {
//   const a = 'local';

//   const f2 = function () {
//     console.log('a :>> ', a);
//   };

//   console.log('f2 :>> ', f2);

//   return f2;
// }

// const f2FromF1 = f1(); // Function-object + LexicalEnvironment
// f2FromF1();

// Ex.: використовуючи замикання, реалізувати лічильник

function counter() {
  let i = 0;

  return function () {
    return ++i;
  };
}

const counter1 = counter();
console.log("counter1() :>> ", counter1());
console.log("counter1() :>> ", counter1());
console.log("counter1() :>> ", counter1());
console.log("counter1() :>> ", counter1());
console.log("counter1() :>> ", counter1());

// сюди повертається інший інстанс функції зі своїм оточенням
const counter2 = counter();
console.log("counter2() :>> ", counter2());
console.log("counter2() :>> ", counter2());

console.log("counter1() :>> ", counter1());
