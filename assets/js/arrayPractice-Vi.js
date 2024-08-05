// Phone: id, brand, model, makeYear, color, isNfc, price

function Phone(id, brand, model, makeYear, color, isNfc, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.makeYear = makeYear;
    this.color = color;
    this.isNfc = isNfc;
    this.price = price;
  }
  
  const phones = [];
  
  const PHONES_COUNT = 100;
  
  for (let i = 0; i < PHONES_COUNT; i++) {
    const phone = new Phone(
      i + 1,
      Math.random() > 0.5 ? 'Samsung' : 'IPhone',
      `Series ${Math.trunc(Math.random() * 20)}`,
      2015 + Math.trunc(Math.random() * 8),
      Math.random() > 0.5 ? 'white' : 'black',
      Math.random() > 0.5,
      5000 + Math.trunc(Math.random() * 7000)
    );
  
    phones.push(phone);
  }
  
  console.table(phones);
  
  // forEach виконує колбек послідовно для всіх елементів масиву
  // filter => новий масив з елеметами, які задовольняють умові в колбеку
  // map => новий масив з елементами, які повернуті з колбеку для кожного елемента вихідного масиву
  // findIndex => індекс знайденого елемента (для якого з колбека повертається true,
  //              або -1, якщо його не знайдено (для кожного повернулося false))
  // every => true (виконується всім) / false
  // some => true (виконується хоча б для одного) / false
  
  // 1 Відібрати телефони дорожче 8000
  
  // function isGreater8000(item) {
  //   return item.price > 8000;
  // }
  
  // const isGreater8000 = item => item.price > 8000;
  
  const phones8000 = phones.filter(item => item.price > 8000);
  console.table(phones8000);
  
//   // 2 Відібрати телефони 2018 року випуску (filter)
  const phonesYear2018 = phones.filter(item => item.makeYear === 2018);
  console.log(phonesYear2018);
  
//   // 3 Вивести 'brand: model year' кожного телефону (forEach)
  phones.forEach(p => console.log(`${p.brand}: ${p.model} ${p.makeYear}`));
  
//   // 4 Видалати телефон з id 10 (findIndex + splice)
  const foundIndex = phones.findIndex(p => p.id === 10);
  
  if (foundIndex !== -1) {
    phones.splice(foundIndex, 1);
  }
  
//   // 5 Отримати масив з телефонами, ціна яких нижча на 5% від вихідної
  
  const salesPhones = phones.map(p => {
    const phoneCopy = { ...p };
    phoneCopy.price = Math.round(phoneCopy.price * 0.95);
    return phoneCopy;
  });
  
  console.table(salesPhones);
  
//   // 6 Вивести бренд+модель телефонів із nfc.
  
//   const filteredPhones = phones.filter(p => p.isNfc);
  
//   filteredPhones.forEach(p =>
//     console.log(`${p.brand}: ${p.model} ${p.makeYear}`)
//   );
  
  phones
    .filter(p => p.isNfc)
    .forEach(p => console.log(`${p.brand}: ${p.model} ${p.makeYear}`));
  
//   // 7 Вивести дані про моделі apple 2016 року
//   // (+ every, some)
//   // *8 Перевірити, чи є золоті телефони
//   // *9 Перевірити, чи всі телефони пізніше 2013 випуску
//   // *10 Дізнатися, чи всі білі айфони з нфc