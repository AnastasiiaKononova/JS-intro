// Errors

/*
Помилка - це об'єкт
*/


/*
Типи помилок:
 TypeError - некоректна робота з типами даних
 ReferenceError - виклик неіснуючої змінної/доступ до неіснуючого об'єкту
 SyntaxError - помилка написання коду
 RangeError - вихід за діапазон значень
 URIError - помилка з URI
 InternalError - помилка всередині рушія JS. Нестандартна, може ніколи не зустрітись
 EvalError - помилка при використанні функції eval(). Не використовуйте eval
*/



/// Таска: написати функцію, яка знаходить добуток двох чисел

function multy(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        // викинути помилку
        throw new TypeError('Both arguments must be numbers');  // throw викидає об'єкт помилки і зупиняє подальшу роботу коду
    }
    return num1*num2;
}
console.log('Код працював, працював, і викликав функцію')

// Передбачення роботи з помилками - це обробка помилок


try {
    // блок коду, який може викидати помилки

    const result = multy('aa', 'aaa');
   console.log(result);  // не відпрацює
   /// цей блок виконується до першої помилки
} catch(error){
   // в цьому блоці коду, який виконається ТІЛЬКИ ЯКЩО в блоці try сталася помилка - об'єкт помилки лежить в error
   console.log(error);
}


console.log('Код працює далі')


/*
Написати функцію, яка приймає два числа - start і end, повертає масив, наповнений числами від числа start до числа end. Включно з крайніми числами
1. Якщо нам передали не числа - викинути одну помилку
2. Якщо нам передали число end, яке меньше за число start - викинути іншу помилку
3. Виклик функції огорнути в try-catch
2, 5 -> [2, 3, 4, 5]
*/

function getRange(start, end) {
   if (typeof start !== 'number' || typeof end !== 'number') {
       throw new TypeError('Both arguments must be numbers');
   } 
   if ( end < start) {
       throw new RangeError('End must be greater than start');
   }
   const arr = [];
   const size = end - start;
   for (let i = 0; i <= size; i++){
       arr[i] = start++
   }
   return arr;

}
try {
    getRange('d', 1);
} catch(er) {
    console.log(er.message) // повідомлення помилки
}

try {
    // код, який потенційно може викликати помилки
  } catch (err) {
    // блок, куди буде передане куревання, якщо виникла вбудована помилка
    // або згенерувалася вручну в throw
  }
  
  // throw генерує помилку (виняткову ситуацію/исключительную ситуацию/exception)
  // вона передається в catch:
  // throw new Error
  //          ||
  //          \/
  // catch  (error)
  
  const a = 10;
  console.log('a :>> ', a);
  
  try {
    console.log('Hello after error');
  } catch (err) {
    console.log('err :>> ', err);
  }
  
  console.log('Hello');
  
  // throw new Error('message');
  // console.log('Hello1');
  
  // написати функцію для обчислення факторіала.
  // Передбачити, щоб можна будо обчислювати ! тільки для number, причому цілі додатні значення
  
  function factorial(n) {
    if (typeof n !== 'number') {
      throw new TypeError('n must be number');
    }
    if (n < 0 || !Number.isSafeInteger(n)) {
      throw new RangeError('n must be not negative and integer value');
    }
  
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  try {
    console.log(factorial(-10));
  } catch (error) {
    console.log(error);
  }
  
  console.log('after error');
  
  // Task: написати функцію для валідації імені користувача (4-32, string)
  // якщо значення валідне, то повернути його
  // якщо ні, то згенерувати помилку
  
  // validateName(name) => validatedName || throw error
  // isValid(name) => true || false
  
  function validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be string value');
    }
  
    if (name.length < 4 || name.length > 32) {
      throw new RangeError('name must be min 4 max 32 characters length');
    }
  
    return name;
  }
  
  try {
    const validatedName = validateName('Ivo');
    console.log(validatedName);
  } catch (error) {
    if (error instanceof RangeError) {
      console.log('RangeError handling');
    } else if (error instanceof TypeError) {
      console.log('TypeError handling');
    } else {
      console.log('Error handling');
    }
  }
  
  // Task: Реалізувати функцію, яка приймає вік,
  // повертає вік, якщо параметр відповідає вимогам (???),
  // інакше генерує помилку
  function validateAge(age) {
    if (typeof age !== 'number') {
      throw new TypeError('It`s not number');
    }
    if (age < 18) {
      throw new RangeError('You so young');
    }
  
    return age;
  }
  
  try {
    console.log(validateAge(true));
  } catch (e) {
    console.log(e);
  }
  
  console.log('first');



