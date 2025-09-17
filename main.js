"use strict";
// alert ("salom dunyo")
// let ism = ("ezoza");
// console.log(ism);
// let age =23;
// console.log(age);
// let number = 12.2;
// console.log(number);
// let firstName ="ezoza";
// console.log(firstName);
// let isUser = true;
// console.log(isUser);
// let student;
// console.log(student);
// let school = null;
// console.log(school);
// let age = Symbol("age");
// console.log(typeof age);
//  yosh =23;
// console.log(yosh);
// yosh=24;
// console.log(yosh);
// let a=5, b=10, c=15;
// console.log(a);
// a=b
// console.log(a);
// a+=b
// console.log(a);
// a-=b
// console.log(a);
// c*=b
// console.log(c);
// let ism = "ezoza"
// let message = `salom ${ism}`;
// console.log (message);
// const yosh = 18;
// const a = yosh>18;
// const b = yosh<20;
// console.log(a||b);
// function meningFunksiyam (son1, son2){
// return son1*son2;
// }
// console.log(meningFunksiyam (10, 20));

// const kvadrat =function(son){
//     return son*son;
// }
// console.log(kvadrat(10));


// const salomBer = () => {
//   console.log("Salom, dunyo!");
// };
// salomBer();
// function juftSon (number){
//     if (number%2===0){
//         console.log(`${number} juft son`);
//     }else{
//         console.log(`${number}toq son`);
//     }
// }
// juftSon(3);
// function katta (number1, number2){
//     if(number1>=number2){
//         return ;
//     }return number2;
// }
// console.log(katta(2,3));

// const languages = ["js", "java", "go"]
// console.log(languages);

// alert ("salom js")
// confirm ("siz 18damisz?")
// prompt("Ismingizni kiriting")
// let age = prompt("tugilgan yilingizni kiriting");
// console.log(2025-age); 


// let calculate = function (a, b, c){
//     console.log(a);
//     console.log(b);
// }
// calculate ();


// let counterFunc("salom"){
    
// }
// let result;
// result = 4 + true;
// console.log(result);

// for(let i =1; i<10; i++){
// console.log("Olim")
// }
// for(let i =10; true; i--){
// console.log(i)}




// 1-masala: Eng katta va eng kichik sonni topish
function findMaxMin(sonlar) {
  let max = sonlar[0];
  let min = sonlar[0];
  for (let i = 1; i < sonlar.length; i++) {
    if (sonlar[i] > max) max = sonlar[i];
    if (sonlar[i] < min) min = sonlar[i];
  }
  return { max, min };
}
console.log(findMaxMin([5, 12, -3, 7, 20]));



// 2-masala: Tub sonni tekshirish
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17)); 
console.log(isPrime(18)); 




// 3-masala: Sonlarni teskari chiqarish (n dan 1 gacha)
function reverseNumbers(n) {
  let res = "";
  for (let i = n; i >= 1; i--) {
    res += i + " ";
  }
  return res;
}
console.log(reverseNumbers(10));



// 4-masala: Sonning raqamlari yig‘indisi
function digitSum(n) {
  let sum = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}
console.log(digitSum(1234)); // 10



// 5-masala: Sonni teskari yozish
function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}
console.log(reverseNumber(123)); // 321



// 6-masala: Fibonachchi sonlari
function fibonacci(n) {
  let a = 0, b = 1;
  let result = [a, b];
  for (let i = 2; i < n; i++) {
    let c = a + b;
    result.push(c);
    a = b;
    b = c;
  }
  return result;
}
console.log(fibonacci(10));



// 7-masala: Sonning bo‘luvchilari
function divisors(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      res.push(i);
    }
  }
  return res;
}
console.log(divisors(28)); 

