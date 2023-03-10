// Напишите программу на JavaScript, чтобы найти 3-значные числа Армстронга.

// Примечание: Числом Армстронга называется такое натуральное число, которое равно сумме всех своих цифр, возведённых в степень, равную количеству цифр данного числа. Например, десятичное число 153 является числом Армстронга, т. к. 1*1*1 + 5*5*5 + 3*3*3 = 153.

// Вариант 1
// function three_digit_armstrong_number() {
//   for (var i = 1; i < 10; ++i) {
//     for (var j = 0; j < 10; ++j) {
//       for (var k = 0; k < 10; ++k) {
//         var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
//         var plus = i * 100 + j * 10 + k;
//         if (pow == plus) {
//           document.writeln(pow);
//           console.log(pow);
//         }
//       }
//     }
//   }
// }
// three_digit_armstrong_number();

// вариант 2
for (i = 100; i <= 999; i++) {
  let a, b, c, d;
  a = parseInt(i / 100);
  b = i % 100;
  c = b % 10;
  d = parseInt(b / 10);
  if (Math.pow(a, 3) + Math.pow(d, 3) + Math.pow(c, 3) == i) {
    console.log(i);
  }
}
