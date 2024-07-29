// /* Функции-констуркторы */

// // const cat = {
// //   name: 'Murz',
// //   age: 8,
// //   color: 'grey',
// //   meow: function () {
// //     console.log('meow')
// //   }
// // }

// // const cat2 = {
// //   name: 'Murka',
// //   age: 3,
// //   color: 'red',
// //   meow: function () {
// //     console.log('meow')
// //   }
// // }

// // const cat3 = {
// //   name: 'Barsik',
// //   age: 2,
// //   color: 'black',
// //   meow: function () {
// //     console.log('meow')
// //   }
// // }

// /* Функции-констуркторы - особенный режим работы функцииб при котором она создает объект по заданному шаблону и 
// возвращает его в результате работы
// */

// // function Cat(name, age, color) {
// //   /// До всего-всего ключевое слово new создает новый объект
// //   /// посилання на цей конкретний новостворений обєкт кладеться в this
// //   ///this = {}
// //   this.name = name;
// //   this.age = age;
// //   this.color = color;
// //   this.meow = function () {
// //     console.log("meoooow");
// //   };
// // }

// // const cat1 = new Cat("Murz", 8, "grey");

// // const cat2 = new Cat("Murka", 2, "red");

// // const cat3 = new Cat("Barsik", 2, "black");

// // // /* Написати функцию-конструктор для юзера
// // Властивості
// // - імя
// // -прізвище
// // -вік
// // - мейл

// // метод
// // - sayHello
// // */

// // function User(firstName, lastName, age, mail) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.age = age;
// //   this.mail = mail;
// //   this.sayHello = function () {
// //     console.log(`${this.firstName} say: 'Hello'`);
// //   };
// // }

// // const user1 = new User("John", "Doe", 18, "hhfgurhgh");
// // const user2 = new User("Jane", "Pepper", 25, "6tr7ygergfy");

// /*Створити функцію-конструктор для сутності країна
// - назва
// кількість населення 
// площа

// Метод 
// -щільність населення 
//    кількість населення подалити на площу*/

// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }

// const ukr = new Country("Ukraine", 43790000, 603628);

// /* 
//    Написати функцію-конструктор  для авто 
//    - name
//    - maxSpeed
//    - speed
   
//    Реалізувати методи 
//    - accelerate (value) прийняти в функцію величину в км за час і збільшитти поточну швидкість на вказану величину
//    -deaccelerate (value) прийняти величину і зменшити поточну швидкість
//    - stop () - зупинка машини, швидкість=0
//    */

// // function Car(name, maxSpeed) {
// //   this.name = name;
// //   this.maxSpeed = maxSpeed;
// //   this.maxSpeed = 0;

// //   this.accelerate = function (value = 0) {
// //     if (isNaN(value)) {
// //       return false; // Error
// //     }
// //     this.speed += value;
// //     if (this.speed > maxSpeed) {
// //       this.speed = maxSpeed;
// //     }
// //     return this.speed;
// //   };

// //   this.deaccelerate = function (value = 0) {
// //     this.speed -= value;
// //     if (isNaN(value)) {
// //       return false; // Error
// //     }
// //     if (this.speed < 0) {
// //       this.speed = 0;
// //     }
// //     return this.speed;
// //   };

// //   this.stop = function () {
// //     return (this.speed = 0);
// //   };
// // }

// // const car = new Car("lanos", 100); //Екземпляр

// /* Прототипи */

// function Rabbit(name, color) {
//   this.name = name;
//   this.color = color;

  
// }

// function RabbitLogic() {
//   this.jump = function () {
//     console.log(`${this.name} is jumping`);
//   };
//   this.eat = function() {
//     console.log(`${this.name} says nyam-nyam`);
//   }
// }

// const rabLogic = new RabbitLogic();

// Rabbit.prototype = rabLogic;
// console.log(rabLogic)

// const rabbit1 = new Rabbit('Lucky', 'grey');
// rabbit1.eat();

// rabLogic.bite = function() {
// console.log(`${this.name} bite you`);
// }


// /*Переписати котів та юзерів на окремо обєкт за даними - 
// окремо обєкт з методами
// і звязати їх прототипом */

//  function Cat(name, age, color) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//  }

//  function CatPrototype() {
//   this.meow = function () {
//         console.log("meoooow");
//       }
//  }

// const catProto = new CatPrototype();
// Cat.prototype = catProto;

//  const cat1 = new Cat("Murz", 8, "grey");

//   const cat2 = new Cat("Murka", 2, "red");

// const cat3 = new Cat("Barsik", 2, "black");



// //old prototype syntax

// // function User(firstName, lastName, age, mail) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.age = age;
// //   this.mail = mail;
// // }

// // function UserPrototype() {
// // this.sayHello = function () {
// //   console.log(`${this.firstName} say: 'Hello'`);
// // }
// // }

// // const userProto= new UserPrototype();
// // User.prototype = userProto;

// // const user1 = new User("John", "Doe", 18, "hhfgurhgh");
// // const user2 = new User("Jane", "Pepper", 25, "6tr7ygergfy");


// // new class syntax

// class User {
//   constructor (firstName, lastName, age, mail) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.mail = mail;
//   }

//   sayHello() {
//     console.log(`${this.firstName} say: 'Hello'`);
//   }

// }

// const user1 = new User();

// /* __proto__ - літерально заданий прототип для одного конкретного обєкта*/

// const cat = {
//   name: 'Musya',
//   age: 8
// }

// const catProtoObj = {
//   run() {
//     console.log('тигидик')
//   }
// }

// cat.__proto__ = catProtoObj;

// /* Переписати машину на клас */


// class Car (name, maxSpeed) {
//   this.name = name;
//   this.maxSpeed = maxSpeed;
//   this.maxSpeed = 0;

//  accelerate(value = 0) {
//     if (isNaN(value)) {
//       return false; // Error
//     }
//     this.speed += value;
//     if (this.speed > maxSpeed) {
//       this.speed = maxSpeed;
//     }
//     return this.speed
//   }

//   deaccelerate (value = 0) {
//     if (isNaN(value)) {
//       return false; // Error
//     }
//     this.speed -= value;
//     if (this.speed < 0) {
//       this.speed = 0;
//     }
//     return this.speed
//   }

//   stop () {
//     return (this.speed = 0);
//   };
// }

// const car = new Car("lanos", 100); //Екземпляр