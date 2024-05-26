//~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

const min = 10;

function getTime(min) {
  if (min <= 15) {
    return "перша четверть";
  } else if (min <= 30) {
    return "друга четверть";
  } else if (min <= 45) {
    return "третя четверть";
  } else if (min <= 59) {
    return "четверта четверть";
  } else {
    return "введіть правильне значення";
  }
}

console.log(getTime(20));
