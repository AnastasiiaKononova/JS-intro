///////////////////////////////////
// // Ввести 2 числа і вивести їхню суму
const a1 = prompt('Введіть перше число:');
// const a2 = prompt('Введіть друге число:');
const a2 = 100;
const sum = a1 + a1 ;
console.log(sum) ;

// // Приведення типів (явне)
// result = Number(source)
const res1 = Number('10');
console.log(res1);

const res2 = Number(null);
console.log(res2);

const res3 = String(200); // '200'
console.log(res3);

// // Ввести 2 числа і вивести їхню суму 2
const op1 = Number(prompt('Введіть перше число:'));
const op2 = +prompt('Введіть друге число:');
const sum = op1 + op2;
console.log(sum);

// // Ввести 3 числа і порахувати їх добуток
const a = +prompt('First number');
const b = +prompt('Second number');
const c = +prompt('Third number');
let sum = a * b * c;
console.log(sum);

// // Приведення типів (неявне) - варто уникати усюди, де можна
console.log("10 + '10' = ", 10 + '10');
console.log("null + '10' = ", null + '10');

