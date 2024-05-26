// //~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// //~ Попадає це число (у першу, другу, третю або четверту).

// const min = 10;

// function getTime(min) {
//   if (min <= 15) {
//     return "перша четверть";
//   } else if (min <= 30) {
//     return "друга четверть";
//   } else if (min <= 45) {
//     return "третя четверть";
//   } else if (min <= 59) {
//     return "четверта четверть";
//   } else {
//     return "введіть правильне значення";
//   }
// }

// console.log(getTime(20));

// // Task-2

// //~ Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// //~ значення '1', то у змінну result запишемо 'зима', якщо має значення
// //~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 5;

// function getSeason(num) {
//   let result = "";
//   switch (num) {
//     case 1:
//       result = "зима";
//       break;
//     case 2:
//       result = "весна";
//       break;
//     case 3:
//       result = "літо";
//       break;
//     case 4:
//       result = "осень";
//       break;
//     default:
//       result = "введене невірне значення";
//   }
//   return result;
// }

// console.log(getSeason(num));
//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max
// const max = 50;
// const min = 23;

function logNumbers(min, max) {
  let total = 0;
  for (let i = max; i >= min; i -= 1) {
    console.log(i);
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}
// console.log(logNumbers(20, 40));

// Task4
//Якщо число ділитися на 3 повертати fizz
//якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz
//fizzBuzz(24);

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else {
    return number;
  }
}

console.log(fizzBuzz(5)); // виведе fizz
