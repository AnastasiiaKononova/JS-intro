"use strict";
/* Контекст */

const obj = {
  key: "value",
  method: function () {
    console.log(`key - ${this.key}`);
  },
};

function test() {
  // Function declaration
  console.log(this);
  /*
    За умови 'use strict' this -> undefined,
    без - глобальний обэкт Window
    */
}

test(); /* Window - об'эктне представлення всього браузера */

const fn = function () {
  // function expresiion
  console.log(this);
  /*
    За умови 'use strict' this -> undefined,
    без - глобальний обэкт Window
    */
};

fn();

const arrow = () => {
  console.log(this);
  /* У стрілочних функцій this вказує на контекст , в якому функція була створена  */
};

arrow();

const newspaper = {
  title: "Our super-newspaper",
  articles: [
    {
      author: "John Doe",
      date: 19 - 10 - 2023,
      text: "Lorem ipsum",
    },
    {
      author: "Jane Doe",
      date: 19 - 10 - 2023,
      text: "dolor sit",
    },
    {
      author: "Jock Doe",
      date: 19 - 10 - 2023,
      text: "amen amen",
    },
    {
      author: "Sole Doe",
      date: 19 - 10 - 2023,
      text: "vfghfv hgbch",
    },
    {
      author: "Nick Doe",
      date: 19 - 10 - 2023,
      text: "oiujirg gydgb",
    },
  ],
  showArticles: function() {
    this.articles.forEach(show.bind(this));// this -> newspaper
  }
}

function show(currentArticle) {
    console.log(`${this.title} --- ${currentArticle.author} - ${currentArticle.text}`);
        }

// function MyForEach(array, fn) {
//     for (let i =0; i < array.length; i++) {
//         fn(array[i])
//     }
// }

/*
Передача контексту 
*/

const auto = {
    model: 'bmw',
    speed: 150
}

function sayVzh(a, b) {
    console.log(`${this.model} робить вжжж зі швидкістю ${this.speed}`);
    console.log('А тим часом a+b =', a+b)
}

sayVzh.apply(auto, [2,3]);// виклик функції з обєктом auto в якості this 

/*
apply (this, [arguments]) - метод функції який викликає функцію передає їй в якості this перший аругмент 
і другий аргумент - масив- передає парметрами функції

call (this, arg1, arg2, arg3....) - метод функції який викликає функцію передає їй в якості this перший аругмент,
всі аргументі після першого (поштучні)- передає парметрами функції
*/

const wrappedFunction = sayVzh.bind(auto);// Огортає виклик функції в контекст, повертає посилання на готову до роботи функцію, якій this=auto


// викликаємо готову до роботи функцію, контекст якої буде вже з нею
// wrappedFunction(5, 6);

/*
Створити обєкт юзера який має 
name,
lastName,
age
favouriteFilms: [{
name: 'Titanik',
date: 19-01-1990
}]

Написати функцію(function declaration) яка виводить імя юзера і назву фільма
Передати функції обєкт юзера як контекст ф викликати методом bind
Переробити функцію на метод обєкта і пройтись forEach  по масиву обєкта
*/

const user = {
    name: 'Rayan',
    lastName: 'Kio',
    favouriteFilms: [{
        name: 'film1',
    }, {
        name: 'film2',
    }, {
        name: 'film3',
    }],
    showMyFav: function () {
        this.favouriteFilms.forEach((currentFilm)=> {
            console.log(`${this.name} loves ${currentFilm.name}`)
        })
    }
}

function showFilms() {
    //this->user
    this.favouriteFilms.forEach((currentFilm)=> {
        console.log(`${this.name} loves ${currentFilm.name}`)
    })

    // this.favoriteFilms - масив, по масиву пройтись циклом чи forEach
}

const userShowfilms = showFilms.bind(user);

userShowfilms();


//arrow-fn

let globalVariable = 5;

function fnDeclare(a, b) {
    // console.log(arguments);
    // Ver1
    // пройти звичайним циклом і знайти суму всіх елементів arguments

    // let sum = 0;
    // for (let i = 0; i < arguments.length, i++ ) {
    //     sum += arguments[i];
    // }
    // return sum;

// var2 переробити arguments в звичайний array

return arrArgs = Array.from(arguments).reduce((accum, value)=>accum+value, 0);

}

const FnExp = function() {

}

const arrFn = (...args)=>args.reduce((accum, value) => accum+value, 0);
/* у стрілочних функціях не працює arguments*/

/*
оператор rest - залишкові парметри ...
*/

function restArr(...arrayOfArgs) {
    // console.log(a);
    // console.log(b);
    console.log(arrayOfArgs);
}

console.dir(fnDeclare);
console.dir(FnExp);
console.dir(arrFn);

// З функції, яка приймає 2 аргументи і повертає суму 2 аргументів переробити на функцію, що приймає довільне число аргументів і повертає
/*  
Всі аргументи, які передаються в функцію, записуються в arguments
Псевдо-масив - обєкт схожий на масив, всі елементи мають порядковий номер, обєкт має length, але не є екземпляром обєкту array. 
Не має доступу до методів і властивостей Array
*/


/*
Написати функцію, що приймає довільну кількість слів і повертає фразу що містить 
всі ці слова через пробіл
*/

function getSentence() {
    return Array.from(arguments).join(' ');
}

/*
оператор spread - розбиття масиву на штучні елементи - ...
*/

const numbs = [1, 2, 5, 3, 77, 34, 90];

// Є функція, яка очікує розрізнені поштучні елементи

fnDeclare()// <- сюди очікуються список розрізнених елементів
fnDeclare(...numbs);

/*
1. Переписати функцію попередньої таски на стрілочну, використовуючи rest
2. Дан масив [1, 2, 5, 3, 77, 34, 90] знайти найбільше число в масиві використовуючи метод Math.max();
*/

//1

const getSentence = (...args) => args.join(' ');

//2

Math.max(...numbs)