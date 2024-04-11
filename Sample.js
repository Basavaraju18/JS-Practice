//^ For loop and while loop
//* For Loop is used to repete a specific block of code a known number of times

// class Arun {

//    blockOne() {
//       for (let i = 1; i <= 10; i++)
//          console.log(i)

//    }

//    whileLoopOperation() {
//       let i = 1;
//       console.log("Hi");
//       while (i <= 20) {
//          if(i%2 == 0){
//          console.log("while loop -->:", i);
//          }
//          i++;
//       }
//    }

// }
// new Arun().whileLoopOperation();


//============================================

// function myFunction(){
//    const carName = "Volvo";
//    let price = 10000;
//    console.log(`The car name is ${carName} and the price is : ${price}`)
//    console.log("The car name is "+ carName+ " and the price is : " +price)
// }
// myFunction();

//^ ======================================

//^ Sum the digits of numbers

// function sumDigits(){
//    let num = 1234;
//    let sum = 0;

//    while(num > 0){
//       let last = num % 10;
//       sum += last;
//       num /= 10;
//    }
//    console.log(sum)
// }
// sumDigits();

//^ =======================================

// function numreverse1(){
//    let number = 12345;
//    let rev = 0;

//    while(number > 0){
//       let last = number % 10;  // % this gives the last digit modulas will give the last numberas a remainder
//       rev = (rev * 10) + last;
//       number /= 10;
//    }
//    console.log(rev)
// }
// numreverse1();


//^ =======================================
//~ Reversing the number

// console.log("")
// console.log("Reversing the number")



// function reverseNumber(num){
//    let reversed = 0;
//    while (num !== 0){
//       let digit = num % 10;
//       reversed = (reversed * 10) + digit;
//       num = Math.floor(num/10);
//    }
//    return reversed;
// }

// let number = 12345;
// let reversedNumber = reverseNumber(number);
// console.log(reversedNumber)

// reverseNumber();


//^ function in js

//! 1) Named function - normal function
//! 2) Anoneymous function in js
//! 3) Arrow function in js

//^ Named function               ===================

// console.log("Named function in js")
// function sumOfNumbers(num1, num2){
//    let sum =  num1 + num2 ;
//    return sum;
// }
// const result = sumOfNumbers(11, 18);
// console.log(result)


//^ Anonymeous funnction in js   ====================
// console.log("Anonymous function in js")
// const sum = function(num1, num2){
//    let res = num1+num2;
//    return res;
// }
// const res = sum(18, 11);
// console.log(res)

//^ Arrow function in js

console.log("Arrow function JS");

const sum = (email) => {
   return email.slice(0, email.indexOf("@"));
}
const result = sum("basava@gmail.com");
console.log(result);
