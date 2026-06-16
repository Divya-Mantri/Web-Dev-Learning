// Note : Javascript is not semicolon sensitive


//Printing 
console.log("Hello World!");
console.log("\n");

//Declare a variable
// let const var ....Here, var is old so we don't use it due to some of its disadvantages, const=constant 
let num=10;
console.log(num);

let ar="string";
ar="let can be changed";
console.log(ar);

const account_bal=25;
console.log(account_bal);
// account_bal=30;  values can't be changed

var x=10;
console.log(x);
var x=30; // redeclaration is possible
console.log(x);



console.log("-----------------------------")


//Data types we can store in a variable

//Number  datatype (refers to any number)
let number=40.65
console.log(number);

// To find the type of any data 
console.log(typeof number)

//string datatype    ( refers to text)
let string="name";
console.log(string);

//boolean datatype ( refers to either true or false)
let coding=true;
console.log(coding);


//undefined datatype (refers to values not yet defined in variable)
let account;
console.log(account)
// account="done"
// console.log(account)

//Null datatype 
let balance=null;
console.log(balance)
console.log(typeof balance)         //null shows itself as a object

//bigint datatype
let a=135124563235325698765412398745n
console.log(a)


//Max-Min Safe integer 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Symbol datatype will be studied later btw it's for uniqueness

console.log("------------------------------------")
//Non-primitive DataType
// It includes Arrays, Object, Function

//Array Datatype
let arr= [10,20,50,"Lost","!"];
console.log(arr);
console.log(typeof arr);

//Object Datatype
let obj=
{
    user_name:"Lost",
    account_number:35698745163,
    balance:0
}
console.log(obj)
console.log(typeof obj)

//Function Datatype
let func=function()
{
    console.log("Hello World!");
    return "Nothing is fine here!";
}
console.log(func());
console.log(typeof func)


//Type Conversion


//string to number
let acc_bal="1000";
console.log(acc_bal)
let acc_in_num=Number(acc_bal);
console.log(acc_in_num)
console.log(typeof acc_in_num)

//Boolean to number
let bool=true;
console.log(Number(bool))


//If some Errors are present in our variable
let err="100xs"
console.log(Number(err))

let bal="200s"
console.log(Number(bal))

//In case of Null
let case_null=null;
console.log(Number(case_null))

//In case of undefined
let case_undefined
console.log(Number(case_undefined))

//Number to String
let str=20;
console.log(String(str))

//Boolean to String
let bool_to_str=false;
console.log(String(bool_to_str))
console.log( typeof String(bool_to_str))

//Converting to Boolean
console.log(Boolean("string"))
console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean(6))


// Operators

// Arithmetic Operators
console.log(((6*(3+18))/6)-9)

//Precedence Rule => 
// Divide Multiply (Solve Left to Right)
// Addition Subtration (Solve Left to Right)

console.log(20%3)       //Gives Remainder

//Increment/Decrement Operator
let sum=2015
total=sum++;            //In post increment, first the original value is assigned and then increment in sum thus total value is 2015 and sum is 2016
console.log(total)
console.log(sum)
      
//same in post decrement
sum--
console.log(sum)

//In pre-incremnt acutal increment is done at the same time
console.log(--sum)
console.log(++sum)


// Assignment Operator

let assign=234;     //Here equal is assignment ooperator it assigns value to the variable
assign+=3;          //shorthand 
console.log(assign)

//Comparison Operators  compares by converting values into one form that is number

//number to number
let b=2;
let c=2;
//== Equal to 
console.log(b==c)           
//< less than
console.log(b>c)
//>greater than
console.log(b<c)
//greater than equal to 
console.log(b>=c)
//less than equal to
console.log(b<=c)

let d=30
let e="10"
console.log(d==e)       //type conversion is happening from string to number
console.log(d>e)
console.log(d<e)

// "===" it checks the type and then compare the value
console.log(d===e)          

//some rules that are
// null==undefined  => True
// null===undefined =>False
console.log("========================================")
console.log(null==undefined)
console.log(null===undefined)
console.log(null==0)
console.log(null===0)
console.log(null>0)
console.log(null<0)
console.log(null<=0)
console.log(null>=0)

console.log("----------------------------")
//undefined comparison
console.log(undefined==0);
console.log(undefined===0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);
console.log(undefined!=0);


console.log("/////////////////////////////")
console.log(NaN==NaN)

let f=123;
let g="123"
let h=123
console.log(f==g==h)


//Logical Operators
let i=18;
let j=420
//And operator (&&)
console.log(i>=18 && j>200)
//Or Operator (||)
console.log(i>10 || j>600)
//Not Operator (! )
console.log(!(i>10))


//Bitwise Operators

console.log(4&5)
console.log(11|14)
console.log(5^7)        //XOR Operator
console.log(5<<3)       //Left shift Operator(5 multiply by 2 power 3)
console.log(20>>2)      //Right Shift Operator(20 divided by 2 power 2)
