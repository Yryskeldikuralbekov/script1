// Напишите условное выражение JavaScript, чтобы найти знак произведения трех чисел (+ или -).
// Примеры чисел: 4, -8, 8
// Вывод: Знак -

// let a, b, c;
// a = prompt("Введите число");
// b = prompt("Введите число");
// c = prompt("Введите число");
// if (a < 0 && b < 0 && c < 0) {
//   console.log("-");
// } else if (a < 0 && b < 0 && c > 0) {
//   console.log("+");
// } else if (a < 0 && c < 0 && b > 0) {
//   console.log("+");
// } else if (b < 0 && c < 0 && a > 0) {
//   console.log("+");
// } else if (a > 0 && b > 0 && c < 0) {
//   console.log("-");
// } else if (a > 0 && c > 0 && b < 0) {
//   console.log("-");
// } else if (b > 0 && c > 0 && a < 0) {
//   console.log("-");
// } else if (a > 0 && b > 0 && c > 0) {
//   console.log("+");
// }

// console.log(a * b * c);

// let f, t, c;
// let arr = [];
// f = prompt("Введите число");
// t = prompt("Введите число");
// c = prompt("Введите число");
// if (f > t && t > c) {
//   arr.push(f, t, c);
//   console.log(arr);
// } else if (t > f && f > c) {
//   arr.push(t, f, c);
//   console.log(arr);
// } else if (c > f && f > t) {
//   arr.push(c, f, t);
//   console.log(arr);
// } else if (c > t && t > f) {
//   arr.push(c, t, f);
//   console.log(arr);
// } else if (f > c && c > t) {
//   arr.push(f, c, t);
//   console.log(arr);
// } else if (t > c && c > f) {
//   arr.push(t, c, f);
//   console.log(arr);
// }

// Напишите условное выражение JavaScript, чтобы найти наибольшее из пяти чисел.

// Примеры чисел: -6, -3, -6, 0, -1
// Вывод: 0
// a = -6;
// b = 876;
// c = -6;
// d = 54;
// f = -1;
// if (a > (b && c && d && f)) {
//   console.log(a);
// } else if (b > (a && c && d && f)) {
//   console.log(b);
// } else if (c > (a && b && d && f)) {
//   console.log(c);
// } else if (d > (a && c && b && f)) {
//   console.log(d);
// } else {
//   console.log(f);
// }

// console.log("Четные числа:");
// for (i = 0; i <= 150; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// console.log("Нечетные числа:");
// for (i = 0; i <= 150; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// const student = {
//   name: "Степан",
//   point: 80,
//   name: "Игнат",
//   point: 77,
//   name: "Денис",
//   point: 88,
//   name: "Иван",
//   point: 95,
//   name: "Радион",
//   point: 68,
// };
// if (student.point < 60) {
//   console.log(student.name, "Классификация: F");
// } else if (student.point < 70) {
//   console.log(student.name, "Классификация: D");
// } else if (student.point < 80) {
//   console.log(student.name, "Классификация: C");
// } else if (student.point < 90) {
//   console.log(student.name, "Классификация: B");
// } else if (student.point < 100) {
//   console.log(student.name, "Классификация: A");
// }

var student = [
  ["Степан", 80],
  ["Игнат", 77],
  ["Денис", 88],
  ["Иван", 95],
  ["Радион", 68],
];

for (var i = 0; i <= student.length; i++) {
  var k = " ";
  if (student[i][1] <= 100) {
    k = "A";
  }
  if (student[i][1] <= 90) {
    k = "B";
  }
  if (student[i][1] <= 80) {
    k = "C";
  }
  if (student[i][1] <= 70) {
    k = "D";
  }
  if (student[i][1] <= 60) {
    k = "F";
  }
  console.log(student[i][0], "Квалификация:", k);
}
