//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    // console.log(`${i + 1} - ${array[i]}`);
  }
}

const arr = ["Джаз", "Блюз", "Рок-н-рол"];
// console.log(logItems(arr));

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
  let smallNumbers = numbers[0];
  // for (let i = 0; i < numbers.length; i++) {
  //   if (smallNumbers > numbers[i]) {
  //     smallNumbers = numbers[i];
  //   }
  // }
  for (const number of numbers) {
    if (smallNumbers > number) {
      smallNumbers = number;
    }
  }
  return smallNumbers;
}

const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];
// console.log(findSmallerNumber(numbers)); // Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// Додати метод getinfo в об'єкт user, який повертатиме інфу про користувача у форматі
const user = {
  name: "Piter",
  surname: "Parker",
  age: 22,
  position: "spider-man",
};

function getInfo() {
  return `name: ${this.name} surname: ${this.surname} age: ${this.age} position: ${this.position}`;
}
user.getInfo = getInfo; //нашої команди //Напишіть код для сумування всіх зарплат і //збережіть його результат у змінній sum. //Якщо об'єкт salaries порожній, то результат має бути 0

// console.log(user);
// console.log(getInfo());
// console.log(user.getInfo());
//У нас є об'єкт, у якому зберігатимуться зарплати
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

function getTotalSalaries(object) {
  let sum = 0;
  const arraySalaries = Object.values(object);
  console.log(arraySalaries);

  for (const salary of arraySalaries) {
    sum += salary;
  }
  return sum;
}

console.log(getTotalSalaries(salaries));


// Напишіть ф-цію calcTotalPrice(stones, stonesName),
  //яка приймає масив об'єктів і
  //Рядок з назвою каменю.
  //Функція вважає, що м повертає загальну вартість каменів
  //з ​​таким ім'ям, ціною та кількістю з об'єкта
const stones = [
      { name: "Смарагд", price: 1300, quantity: 4 },
      { name: "Діамант", price: 2700, quantity: 6 },
      { name: "Сапфір", price: 400, quantity: 7 },
      { name: "Щебінь", price: 150, quantity: 100 },
    ];

  function calcTotalPrice(stones, stonesName) {
    
    for (const stone of stones) {
      if (stone.name === stonesName) {
      return stone.price * stone.quantity;
       
      }
    }
    
  }
console.log(calcTotalPrice(stones, "Діамант"));
console.log(calcTotalPrice(stones, "Сапфір"));
console.log(calcTotalPrice(stones, "Смарагд"));

