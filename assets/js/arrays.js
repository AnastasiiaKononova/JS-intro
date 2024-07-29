/* Масиви */

const array = {
  0: 87634567,
  1: "value",
  2: true,
  3: 28975368,
  length: 4,
};

const nativeArray = [3, 2, 1, 4];

/* 
Масив- впорядкована сукупність даних
В JS дані в комірках масива можуть бути різних типів
Нумерація з 0 відповідно останній індекс = розмір - 1

Будь-який масив - екземпляр глобального вбудованого обєкта Array 
який містить купу корисних методів для роботи
*/

/*
Таска-- дан масив [5 4 3 2 1] 
Вивести на консоль всі елементи масиву програмним методом 
*/

// const newArr = [5, 4, 3, 2, 1];

// for(let i = 0; i < newArr.length; i++){
// console.log(newArr[i]);
// }

/*
Написати функцію яка приймає масив і повертає суму його числових значень
*/

function getSumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  return sum;
}

/*
Таска 1 Даний масив Написати функцію яка знаходить найбільше числове значення в масиві

Таска 2 Напсиати функцію яка знаходить найменше числове значення в масиві
*/

function getMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function getMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

/* 
Знайти середнє арифметичне числових елементів масива
*/

function getAverageOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  return sum / array.length;
}

/* Методи масива */

const arr = [5, 4, 3, 2, 1]; // === new Array ();

// Метод at(index) - повертає значення з масива за вказаним індексом

arr[3] === arr.at(3);

//Метод push (value) - приймає значення і кладе його наступним елементом масива Повертає новий length

arr.push(8);

// Метод pop() - видаляє останній елемент масиву та повертає його значення

//  Метод shift() - видаляє перший елемент масиву та повертає його значення всі елементи сдвигаються наперед

// Метод unshift() - вставляє 1 або більше елментів на початок всі елементи здвигаються назад повертає новий length

const arr1 = [2, 3, 4];
const arr2 = [5, 6, 7];

// Метод concat() обєднує 2 масива

const concatedArrays = arr1.concat(arr2);

// Метод includes(value) - повертає true якщо value присутнє в масиві і  false якщо таокго немає

const a = {
  key: "value",
};

const newArr = [3, 4, 5, a, 7, 1, 2];

// Метод indexof(value) повертає індекс елемента якщо він такий в масиві є і -1 якщо такого елемента в масиві нема

function getIndexOf(value, array) {
  let index = -1;
  for (let i = 0; i < array.length; i++)
    if (array[i] === value) {
      return i;
    }
  return index;
}

// Метод  reverse() - первертає масив задом наперед Мутує почтаковий обєкт

const arr5 = [9, 8, 7, 6, 5, 4, 3];

arr5.reverse(); // первернутий масив

function myReverse(array) {
  // створюємо новий масив
  const new1Arr = [];
  //записуємо в нього всі еленменти початкового в зворотньому порядку
  for (let i = arr.length - 1; i >= 0; i--) {
    new1Arr.push(arr[i]);
  }
    // повертаємо новий масив
  return new1Arr;
  // щоб змінити почтаковий масив
  array = new1Arr;
}


// Метод splice (початковий індекс кількість елементів ) - мутує початковий масив ,починаючи з вказаного індексу видаляє вказану кількість елементів
// Повертає внаслідок роботи міні-масив що містить видалені елементи


arr.splice(3, 1, 4, 33); // починаючи з 3 індекса видалить 1 елемент і замість нього вставить 2 - число 44 і число 33

// Метод slice  (start , end) - повертає новий масив що містить копію частини попереднього
// елемент з індексом start попадає в результат, end - ні
// якщо аргумент end опущено (метод викликали з 1 аргументом) - це означає від start і до кінця масиву

arr.slice(2, 5) // з 2 до 5(не включно)

arr.slice(4) // від 4 до кінця

/* 
slice робить поверхневе копіювання

Поверхневе копіювання - якщо елемент масиву - обєкт б то поверхневе копіювання копіює посилання на обєкт

Глибоке копіювання обєктів- послідовний перебір кожного обєкта та копіювання його в новий обєкт
*/

const users = [
  {
    username: 'John',
    email: 'yfgyg@tft'
  }, 
  {
    username: 'Jane',
    email: 'uhyguyhg@tft'
  }, 
  {
    username: 'Jack',
    email: '5rd5ytrft@tft'
  }
]

/* 
Таски (на методи масива)

1. Дано 2 масива : [1, 2, 3] i [4, 5, 6]. Обєднати їх разом. (concat)

2. Даний масив [6, 5, 4]. Зробити з нього [4, 5, 6]. (reverse)

3. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6. (push)

4. Даний масив [7, 8, 9] додати йому на початок 1, 2, 3. (unshift)

5. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в косоль перший елемент та видаліть його. (shift)

6. Даний масив ['aaa', 'bbb', 'ccc'] Виведіть в консоль та видаліть останній елемент. (pop)

7. Даний масив [9, 10, 11, 12, 13]. Скопіювати в новий масив елементи з 2 по 5-й. (slice)

8. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5] (оригінальний має змінитись). (splice)

9. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5]. (slice)

10. З масиву [1, 2, 3, 4, 5] не однією командою зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv','a', 'hello']. (splice)

*/

let array1= [1, 2, 3];
let array2= [4, 5, 6];

let combinedArray = array1.concat(array2);
console.log(combinedArray)

let array3 = [6, 5, 4];
let reversedArray = array3.reverse();
console.log(reversedArray)

let array4 = [1, 2, 3];
array4.push(4, 5, 6);
console.log(array4);

let array5 = [7, 8, 9];
array5.unshift(1, 2, 3);
console.log(array5); 

let array6 = ['aaa', 'bbb', 'ccc'];

let firstElement = array6.shift();

console.log(firstElement); 
console.log(array6);

let array7 = ['aaa', 'bbb', 'ccc'];

let lastElement = array7.pop();

console.log(lastElement); 
console.log(array7); 

let array8 = [9, 10, 11, 12, 13];
let newArray = array8.slice(2, 5);

console.log(newArray);

let array9 = [1, 2, 3, 4, 5];
array9.splice(1, 2);

console.log(array9);

let array22 = [1, 2, 3, 4, 5];
let newArray22 = array22.slice(2);

console.log(newArray22); 

let arr11 = [1, 2, 3, 4, 5];

arr11.splice(1, 0, 'w', 'trtr');
arr11.splice(5, 0, 'vvv', 'a', 'hello');

console.log(arr11); 