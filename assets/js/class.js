// function User1(name, surname, age, isMale, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
//   }
//   // в прототипі - для екземплярів
//   User1.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
  
//   // статичний метод - для функції конструктора
//   User1.isUser = function (obj) {
//     return obj instanceof User1;
//   };
  
//   const user1 = new User1(
//     "jack",
//     "wilsher",
//     23,
//     true,
//     "test@SpeechGrammarList.com",
//     true
//   );
  
//   // класовий підхід
//   // Класи - синтаксичний цукор над вбудованими в жс
//   //         функціями-конструкторами і прототипами
//   class User {
//     constructor(name, surname, age, isMale, email, isSubscribed) {
//       this._name = name;
//       this._surname = surname;
//       this.age = age;
//       this._isMale = isMale;
//       this._email = email;
//       this._isSubscribed = isSubscribed;
//     }
//     getFullName() {
//       return `${this._name} ${this._surname}`;
//     }
//     // геттери і сеттери можуть не співпадати з конкретною однією властивістю
//     //   get fullName() {
//     //     return `${this._name} ${this._surname}`;
//     //   }
//     // звертаємося як до властивості при заданні значення
//     set age(value) {
//       if (typeof value !== "number") {
//         throw new TypeError("age must be number");
//       }
//       if (!Number.isInteger(value) || value < 0 || value > 150) {
//         throw new RangeError("age must be nonnegative integer");
//       }
//       this._age = value;
//     }
//     // звертаємося як до властивості при зчитуванні значення
//     get age() {
//       return this._age;
//     }
//     // статичний метод - працює для класа, а не для його екземпляра
//     static isUser(obj) {
//       return obj instanceof User;
//     }
//   }
//   try {
//     // екземпляр / інстанс
  
//     const user2 = new User(
//       "jack",
//       "wilsher",
//       23,
//       true,
//       "test@SpeechGrammarList.com",
//       true
//     );
//     console.log(user2.getFullName());
//     console.log(User.isUser(user2));
//     console.log("user2 :>> ", user2.age); // age()
//     user2.age = 23; // age(-23)
//   } catch (err) {
//     console.log("err :>> ", err);
//   }

//   // Task:
// // - реалізувати клас для телефонів (марка, модель, колір, ціна, рік випуску)
// // - реалізувати метод для розрахунку віку телефону (*у вигляді геттеру)
// // - *прописати сеттер для кольору. колір може бути один зі списку
// // ['white', 'red', 'black', 'yellow', 'green', 'blue', 'grey']
// // - створити метод render для додавання телефону в розмітку
// // *у випадку помилки вивести повідомлення, що виникла помилка
// // - створити екземпляр класу, викликати для нього метод(и)
// class Phone {
//     constructor(brand, model, color, price, year) {
//       this._brand = brand;
//       this._model = model;
//       this.color = color;
//       this._price = price;
//       this._year = year;
//     }
  
//     getAge() {
//       return new Date().getFullYear() - this._year;
//     }
//     // або
//     get age() {
//       return new Date().getFullYear() - this._year;
//     }
  
//     render() {
//       document.write(`
//         <article>
//             <h3>${this._brand}</h3>
//             <p>${this._model} ${this._color} ${this._price} ${this._price}</p>
//         </article>
        
//         `);
//     }
  
//     set color(value) {
//       const VALID_COLORS = [
//         "white",
//         "red",
//         "black",
//         "yellow",
//         "green",
//         "blue",
//         "grey",
//       ];
//       if (!VALID_COLORS.includes(value)) {
//         throw new RangeError("Input other color");
//       }
//       this._color = value;
//     }
//     get color() {
//       return this._color;
//     }
//   }
  
//   try {
//     const myPhone = new Phone("Apple", "Iphone 12 Pro Max", "pink", 20000, 2004);
//     console.log(myPhone.age);
//     // або
//     console.log(myPhone.getAge());
//     myPhone.render();
//     myPhone.color = "blue";
//     console.log(myPhone.color);
//   } catch (error) {
//     document.write("<p>Error</p>");
//     console.error(error);
//   }


function User(firstName, lastName, age, email) {
    // create {}, this -> {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
   
}
function UserProto(){
    this.sayHello = function () {
        console.log(`${this.firstName} say Hello`)
    }
}

User.prototype = new UserProto();

class User {
    constructor(firstName, lastName, age, email){
        // створюємо об'єкт, наповнюємо за шаблоном
        this.firstName = firstName;
        this.lastName = lastName;
        if (age < 20) {
            // робимо щось, щоб не створювати екземпляр
            // return null; -- не спрацює, бо повернення примітиву ігнорується
          throw new Error('User under 18'); // якщо при спробі сконструювати юзера виникає помилка, об'єкт юзера не буде створений
        }
        this.age = age;
        this.email = email;

        // повертається this 
    }

    sayHello () {  // метод юзера у прототипі
        console.log(`${this.firstName} say Hello`)
    }


}

//const user = new User('Jane', 'Doe', 18, 'joe@gmail.com');
const user2 = new User('John', 'Doe', 20, 'joe@gmail.com');

/*
Створити клас Worker
- name
- rate
- days
Метод getSalary(), який розраховує зп за формулою: rate*days
*/

class Worker{
    constructor(name, rate, days) {
        this.name = name;
        if (rate < 0) {
            throw new RangeError('Rate must be great that 0');
        }
        this.rate = rate;
        if (days < 0) {
            this.days = 0;
        } else {
            this.days = days;
        }

    }

    getSalary() {
        return this.rate * this.days
    }
}

const wrkr = new Worker('John', 5, 20);

/*
ставка не може бути < 0, якщо передали -ставку, викинути помилку
кількість відпрацьованих днів не може бути < 0, то не викидати, замість цього this.days = 0
*/

/*
Паливо (Fuel)
- об'єм (volume)
- щільність (density)
- getFuelWeight
вага палива

Авто
- модель
- власна вага
- паливо
- getFullWeight():
Розрахувати повну вагу авта
*/

class Fuel{
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }
    getFuelWeight() {
        return this.volume * this.density;
    }
}

class Auto{
    constructor(model, weight, fuel){
        this.model = model;
        this.weight = weight;
        this.fuel = fuel;  // в якості значення передається об'єкт
    }
    getFullWeight() {
        return this.weight + this.fuel.getFuelWeight()
    }
}
const kerosin = new Fuel(50, 0.9);

const bmv = new Auto('BMV', 500, kerosin);

/*
Друг
- ім'я
- кількість грошей
- посилання на іншого друга або null, якщо друзів не має
- метод getFriendMoney
*/
class Friend {
    constructor (name, amountCash, friend = null) {
        this.name = name;
        this.amountCash = amountCash;
        this.friend = friend;
    }
    getFriendMoney() {
        if (this.friend instanceof Friend) {  // ця перевірка має бути на приналежніть до друзів
            return this.amountCash + this.friend.getFriendMoney();
        } else {
            return this.amountCash;
        }
    }
}

const me = new Friend('John', 10, null);

const fr2 = new Friend('Rick', 20, fr);