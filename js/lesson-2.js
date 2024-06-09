//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

const arr = ["Джаз", "Блюз", "Рок-н-рол"];
console.log(logItems(arr));

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
console.log(findSmallerNumber(numbers)); // Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

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
user.getInfo = getInfo;

console.log(user);
console.log(getInfo());
console.log(user.getInfo());
