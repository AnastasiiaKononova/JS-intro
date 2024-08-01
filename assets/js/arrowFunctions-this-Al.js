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
    this.articles.forEach((currentArticle) => {
console.log(`${this.title} --- ${currentArticle.author} - ${currentArticle.text}`);
    })
  }
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
wrappedFunction(5, 6);