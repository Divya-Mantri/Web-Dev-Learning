
let num1=23;
console.log(num1)

//Another way to create number using new keyword
let num2=new Number(23);            //Memory will be created in heap and it's type is object
console.log(num2)
console.log(typeof(num2))

let num3=new Number(23);
console.log(num1==num2);         //If both are of not same type then they are converted to number and then comparison happens
console.log(num2==num3);        //Here both are of same type i.e object thus they are compared directly

// Rounding Off 
let num4=231.68;
console.log(num4.toFixed(0))
console.log(num4.toPrecision(2))
console.log(num4.toExponential(2))

//To String
console.log(num4.toString())
console.log(num4.valueOf())


//Maths

console.log(Math.E)
console.log(Math.LN10)
console.log(Math.PI)

//Generating Random Number
console.log(Math.random())              //It's value will be between 0<=value<1
console.log(Math.random()*10)


let num5=345.1;
console.log(Math.floor(num5));          //Gives lower value
console.log(Math.ceil(num5))            //Gives upper value
 
console.log(Math.floor(Math.random()*10))


//Generating number from 1-10

console.log(Math.floor(Math.random()*10)+1)

// From 11-20

console.log(Math.floor(Math.random()*10)+11)

//Min-value=40, Max-value=50 Formula
// console.log(Math.floor(Math.random()*(max-min+1)+min));

console.log(Math.floor(Math.random()*(40-30+1)+30));

