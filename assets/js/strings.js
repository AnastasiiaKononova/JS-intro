// рядки - псевдомасиви

const str = 'qwerty';

console.log(str.length);
console.log(str[1]);

// Рядки не можна змінювати !!!

// str[5] = 'q';
const str1 = str.slice(0, 5) + 'q';

// 'qwerty'.startsWith('qw')
// 'qwerty'.endsWith('t5y')
// 'qwerty'.includes('wer')
// 'Qwerty'.toLowerCase()
// 'Qwerty'.toUpperCase();

// Task: Написати функцію, яка за рядком ("Ivo Smith") сформує рядок з ініціалами ("IS")

function getInitials(name) {
  // знайти пробіл
  const spaceIndex = name.indexOf(' ');
  console.log(spaceIndex);

  // return 1й символ + символ після пробіла
  return (name[0] + name.slice(spaceIndex + 1, spaceIndex + 2)).toUpperCase();
}

const initials = getInitials('victoriia shevchenko');
console.log(initials);