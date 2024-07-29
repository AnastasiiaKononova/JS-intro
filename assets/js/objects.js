// // const firstName = 'Test';
// // const lastName = 'Testovych';
// // const age = 25;

// // // Об'єкти

// // const obj1 = {}; // синтаксичний цукор
// // const obj2 = Object();
// // const obj3 = new Object();

// // console.log(obj1);
// // // alert(obj1); // не підтримує виседення об'єктів

// // // Ініціалізація

// // // властивості - рядки, symbol()
// // const user = {
// //   // key: value
// //   firstName: 'Test',
// //   lastName: 'Testovych',
// //   age: 25,
// //   password: 'qwerty',
// // };

// // console.log('user :>> ', user);

// // // Доступ до властивостей - операція .

// // // // Читання властивості
// // // const userName = user.firstName;
// // // console.log('userName :>> ', userName);

// // // // Додавання властивості
// // // user.age = 26;
// // // console.log('user :>> ', user);

// // // // Додавання властивостей
// // // user.email = 'test@mail.com';
// // // console.log('user :>> ', user);

// // // // Видалення властивостей
// // // delete user.password;
// // // console.log('user :>> ', user);

// // // Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// // // Переглянути об'єкт
// // // змінити колір
// // // видалити властивість рік випуску
// // // додати властивість ім'я/прізвище власника
// // // Переглянути об'єкт

// // const car = {
// //   brand: 'Skoda',
// //   model: 'Karoq',
// //   year: 2018,
// //   number: '3975',
// //   color: 'white',
// // };

// // // console.log('car :>> ', car);
// // // car.color = 'green';
// // // delete car.year;
// // // car.owner = 'Olya';
// // // console.log('car :>> ', car);

// // // Зробити копії для car:
// // let car2 = Object.assign({}, car);
// // car2.color = 'red';
// // console.log(car2);
// // console.log(car2 === car);

// // let car3 = { ...car };
// // car3.model = 'RX7';
// // console.log(car3);
// // console.log(car3 === car);

// // // // Типи-значення (примітиви) і посилальні типи (об'єкти)
// // // const numberValue1 = 5;
// // // const numberValue2 = 5;
// // // console.log(numberValue1 === numberValue2);

// // // const objValue1 = {};
// // // const objValue2 = {};
// // // console.log(objValue1 === objValue2);

// // // const user1 = user;

// // // user1.firstName = 'AnotherName';
// // // console.log('user1 :>> ', user1);
// // // console.log('user :>> ', user);
// // // // console.log(user === user1);

// // // // Копіювання об'єктів
// // // // 1
// // const user2 = Object.assign({}, user);
// // console.log('user2 :>> ', user2);
// // console.log(user2 === user);
// // // // 2
// // const user3 = { ...user };
// // console.log('user3 :>> ', user3);
// // console.log(user3 === user);


// / Методи об'єкту
// const user = {
//   // властивості (поля)
//   firstName: 'Test',
//   lastName: 'Testovych',
//   age: 25,
//   password: 'qwerty',
//   // методи
//   // this - контекст (посилання на об'єкт, для якого викликано метод,
//   //                  він перед крапкою при виклику)
//   // Повна форма
//   // getFullName: function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
//   // changePassword: function (newPassw) {
//   //   this.password = newPassw;
//   // },
//   // Скорочена форма
//   // ім'яМетоду(параметри){тіло}
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changePassword(newPassw) {
//     this.password = newPassw;
//   },
// };

// // Виклик методу
// // const userFullName = user.getFullName();
// // console.log(userFullName);

// // user.changePassword('123456');
// // console.log('user :>> ', user);

// // Task: Написати метод для зміни кольору машини
// // const car = {
// //   brand: 'Skoda',
// //   model: 'Karoq',
// //   year: 2018,
// //   number: '3975',
// //   color: 'white',
// //   changeColor(newColor) {
// //     this.color = newColor;
// //   },
// // };

// // car.changeColor('orange');
// // console.log('car :>> ', car);

// // Перебрати car за допомогою for..in
// // Результат за допомогою шаблонного літералу вивести у вигляді
// // car.властивість = значення
// // for (key in car) {
// //   console.log(`car : ${key} = ${car[key]}`);
// // }

// // Синтаксис обчислювальних властивостей

// // const property = 'firstName';
// // console.log(user[property]); // user.firstName

// // const userProp = prompt('Input property:');
// // console.log(user[userProp]);

// // Перебір об'єкту for..in
// // for (const key in user) {
// //   console.log(key, user[key]);
// // }

// // Перегляд об'єкту в консолі
// console.dir(user);

// // Функція - об'єкт
// console.dir(function f(q, w) {});

// // Вкладені об'єкти

// const human = {
//   name: 'Ivo',
//   physParams: {
//     height: 1.8,
//     weight: 75,
//   },
// };

// console.log('human :>> ', human);
// console.log(human.physParams.height);