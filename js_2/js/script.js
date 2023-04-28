//minimum

//1st task

let a = 0.1;
let b = 0.2;
console.log((a + b).toFixed(1));

//2st task

let c = 1;
let d = '2';
d = Number(d);
console.log(c + d);

//3rd task

//РОЗРАХУНОК В ДЕСЯТИЧНІЙ СИСТЕМІ, ДЕ 1ГБ ДОРІВНЮЄ 1000 МБ

let flashСapacity = prompt('How much is your flash drive capacity?');
let fileAmount = (flashСapacity * 1000) / 820;
console.log('Amount of files on flesh drive = ' + Math.floor(fileAmount));

//norm

//1st task

let money = prompt('How much money do you have?');
let price = prompt('Cost of one chocolate');
let totalAmount = money / price;
let moneyBalance = totalAmount - Math.floor(totalAmount);

console.log('Amount of chocolates = ' + Math.round(totalAmount) + ' and money balance = ' + moneyBalance.toFixed(2));

/* ПЕРЕВІРКА ВАРИЗІВ
console.log(Math.floor(totalAmount));
console.log(moneyBalance.toFixed(2));
*/

//2nd task

let num = prompt('three-digit number');

function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(getReversedNum(num));
