// // JS - мова з динамічною типізацією, високорівнева, інтерпретована, мультипарадигмова, скриптова

// // js виконується браузером (движком)

// // Стандарт ECMASctipt

// // Вивести в модальне вікно
// alert('Hello, world!');

// // Виведення в консоль
// console.log('Hi)))') ;

// // Однорядковий коментар

// /* 
//   Багаторядковий коментар
// */

// // Змінні

// // lowerCamelCase - для змінних/функцій/...
// // UpperCamelCase - класи
// // UPPER_SNAKE_CASE - константи (PI)

// // 1    a-z, A-Z, _, $
// // 2... a-z, A-Z, _, $, 0-9

// let userName = 'Test'; // ініціалізація
// console.log(userName);
// userName = 1; // let дозволяє змінювати значення
// console.log(userName);

// const constValue = 10;
// // constValue = 5; // const НЕ дозволяє змінювати значення
// console.log(userName);

// // для уникнення випадкової зміни значення змінної,
// // всі змінні, які не мають змінюватися,
// // рекомендується оголошувати як const

// // НЕБЕЗПЕЧНО !!!
// var anotherValue = 'string'; // старий стиль

// // Типи даних
// // string: 'value', "value", `value`
// const stringVar1 = 'string';
// const stringVar2 = 'string'; // ""
// const stringVar3 = `string
//                     end of string`;

// console.log(stringVar1);
// console.log('store "Aliexpress"');
// console.log("store 'Aliexpress'"); // ('store \'Aliexpress\'')
// console.log('\u{1F607}');

// // Числа
// // number:
// // 4, 0, -10 - цілі
// // 20.5, -0.5 - зфіксованою крапкою
// // 0.000000000000000000000000004 = 0.4*10^-25  = 0.4e-25 - експоненційна форма
// // 210000000000000000            = 21*10^16    = 21e16     (з плавачою комою)
// // NaN (not a number)
// // Infinity, -Infinity, +0, -0

// const a = 10.002;
// console.log(a);

// // Number.MAX_SAFE_INTEGER
// // Number.MAX_VALUE

// // bigint
// const bigintValue = 111111111111111111111111111111n;
// console.log(bigintValue);

// // boolean: true (+), false (-)
// const isOdd = false;
// console.log(isOdd);

// // null: null  - "порожня коробка з повітрям"
// const nullValue = null;
// console.log(nullValue);

// // undefined: undefined - "порожня коробка"
// let value;
// console.log(value);

// // symbol
// const symbolValue = Symbol('foo'); //'5sdf4g5fdgs45fd1g456fs4g5sfg4sr'
// console.log(symbolValue);

// // примітивних типів: 7 + object 1 = 8

// // object
// const objValue = {};
// console.log(objValue);

// ///////////////////////////////////////////////////////////////////////

// // Визначення типу даних
// // typeof значення
// console.log('typeof 10:', typeof 10);
// console.log('typeof objValue:', typeof objValue);
// console.log('typeof undefined:', typeof undefined);
// // визначити тип 11n, '11n', true, 'true', null
// console.log(typeof 11n);
// console.log(typeof '11n');
// console.log(typeof true);
// console.log(typeof 'true');
// console.log(typeof null);

// // Задати 2 змінні: своє ім'я і кількість років і висести ці значення в консоль
// const MY_NAME = 'Olya';
// let myAge = 42;

// console.log(MY_NAME);
// console.log(myAge);

// // Операції
// let b = 10; // присвоювання - ініціалізація
// b = 0; // присвоювання

// // арифметичні: + - * / % **
// let c = 1 + 2;
// console.log(c);

// let d = 5 - 8;
// console.log(d);

// let e = 7 * 0.58;
// console.log(e);

// let f = 8 / 9;
// console.log(f);

// let g = 10 % 3; // залишок від ділення, 3 цілих і 1 в залишку
// console.log(g);

// let h = 10 ** 2; // піднесення до степеня
// console.log(h);

// console.log(Math.sqrt(3)); // корінь кв.

// console.log(Math.pow(4, 2)); // піднесення до степеня

// // Знайти довжину кола за радіусом: 2 * PI * r
// const r = 10;
// const l = 2 * Math.PI * r;
// console.log(l);

// console.log(2 ** (3 ** 2)); //64 vs 512

// Операції для рядків
// Конкатенація (склеювання)
// 'str1' + 'str2' => 'str1str2'
const greeting = 'You are ';
const age = prompt('How old are you?');
console.log(greeting + age + ' years old');

// Скорочені операції +=, *=, -=, /=, ...
let sum = 5;
sum += 5; // sum = sum + 5;
console.log(sum);
sum *= 10; // sum= sum*10;
console.log(sum);

// інкремент постфіксний
sum++; // sum += 1; // sum = sum + 1;
console.log(sum);
let x = 10;
const y = x++;
console.log('y=', y);
console.log(x);

// інкремент префікс
let x1 = 10;
const y1 = ++x1;
console.log('y1=', y1);
console.log(x1);

// декремент: --x, x--
