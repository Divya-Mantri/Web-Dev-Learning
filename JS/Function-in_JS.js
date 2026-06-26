//Function


//Creating Function
function greet()
{
    console.log("Hello World there!");
}
//Function Call
greet();

//Add Function with Paramters

function sum(number1,number2)
{
    console.log(number1+number2);
}

//Function call with argument
sum(3,5);

//Multiplication Function using return statment

function mul(number1,number2)
{
    return (number1*number2);
}

console.log("Multiplication of number1 and number2  is :",mul(3,5));


//Another way to create Function using variable

const fun=function()
{
    console.log("Hello World Here!");
}

fun();
console.log(fun);


//Arrow function

const add=(num1,num2)=>
{
    console.log("Hello Outcast World!");
    return(num1+num2);
}

add(); 
console.log(add);
console.log(add(3,5));


//Another way of arrow function

const minus=(number1,number2)=>number1-number2;
console.log(minus(4,2));

//For single parameter you don't need to use brackets in arrow function
const cube=num=> num*num*num;

console.log(cube(8));

//When you don't know about number of parameters we use Rest Operator
const addition=function(...number)
{
    console.log(number);
}

addition(2,3,4);


//Through destructuring
let obj=
{
    name:"Steven",
    age:30,
    amount:420
}
// function objfun(obj)
// {
//     obj.name="hermoine";
//     console.log(obj.name,obj.amount);
// }
 
function objfun({name,amount})
{
    obj.name="Hermoine";
    console.log(name,amount);
}
objfun(obj)
obj.name="Holly";

console.log(obj);
objfun(obj);


//To Change the Prototype of an object
let obj1=
{
    a:1,
    b:2
}

let obj2=
{
    c:3,
    d:4
}
//Recommended way
obj2=Object.create(obj1);
console.log(obj2.__proto__);


