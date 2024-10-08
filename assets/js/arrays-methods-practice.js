/*
name
lastName
email
age
gender

// */

const USERNAMES = ['John', 'Josh', 'Jane', 'Rick', 'Keyli', 'Li', 'Bill', 'Mark', 'Sten'];

function User (name, lastName, email, age, gender) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.gender = gender
}

function generateOneUser() {
    const name = USERNAMES[getRandom (0,USERNAMES.length)];
const user = new User(name, 'Doe', `mail${getRandom(0, 100)}@mail.com`, getRandom(10, 100), (Math.random() > 0.5) ? 'male' : 'female');
return user;
}

function getRandom(min, max) { // генерація рандомного числа в заданому діапазоні
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUsersArray(dimension = 10) {
   return new Array (dimension).fill(null).map(generateOneUser);
}

/*
Умовний тернарний оператор

if(умова) {
блок коду - якщо умова true
} else {
блок коду якщо умова false 
}

result = (умова) ? (результат, якщо умова - true) : (результат, якщо умова - false)

*/

/* 
Таски
 Нагенерувати 50 юзерів

 1. За допомогою метода forEach кожному юзеру додати поле isSubscribed = true/false
 (рандомним чином) Math.random() > 0.5

 2. Метод map: з масиву юзерів отримати масив повних імен (імя+прізвище)

 3. Метод filter: отримати всіх повнолітніх юзерів

 4. Відсортувати всіх юзерів по імені за алфавітом

 5. Отримати масив імейлів юзерів жіночої статі, підписаних на новини

*/

const users = getUsersArray(50);

//1

users.forEach(function(u) {
    u.isSubscribe = Math.random() > 0.5;
})

//2

const fullNames = users.map(function(u) {
    return `${u.name} ${u.lastName}`
});

// 3

const adultUsers = users.filter(function(u) {
    return u.age >=18
});

//4 

users.sort(function(u1, u2) {
    return u1.name > u2.name ? 1 : -1;
})

//5

//v1
const mailsOfSubscWomen = users.map(function(u) {
    if (u.gender === 'female' && u.isSubscribe) {
        return u.email
    }
}).filter(mail => mail);

//v2

const mails2 = users.filter(u => u.gender === 'female' && u.isSubscribe).map(u => u.email);




const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(2, 1));