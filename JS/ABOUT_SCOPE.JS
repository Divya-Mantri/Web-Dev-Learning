//ABOUT SCOPE WHY DON'T WE USE VAR ANYMORE

console.log("About Global Scope- Anyone can access them");

let a=10;
var b=20;
const c=30;

console.log("Value of a is:",a);
console.log("Value of b is:",b);
console.log("Value of c is:",c);  

console.log("Example of Global Scope in function-");

function Value()
{
    console.log("Accessing Global variable that is b inside function:",b);
}

Value(); 

//FUNCTIONAL SCOPE/LOCAL SCOPE (Object and function scope are called local scope otherwise all are block scope)

function local()
{
    let d=10;
    var e=20;
    const f=30;
    console.log("Function ended!")
    console.log("Accessing d,e,f inside function:",d,e,f);
}

local();

//CANNOT ACCESS VARIABLES OUTSIDE THE FUNCTION WHICH ARE  DEFINED INSIDE A FUNCTION LIKE THESE
// console.log("Accessing d outside function :",d);
// console.log("Accessing e outside function :",e);
// console.log("Accessing f outside function :", f);


//BLOCK SCOPE
var amount=500;

if(true)
{
    let g=40;
    var amount=50;      //able to change the global variable using var which is dangerous
    const i=60;
}

//NOT ABLE TO ACCESS LET,CONST OUTSIDE THE BLOCK
// console.log("Accessing g outside the block:",g);
// console.log("Accessing i outside the block:",i);

//ABLE TO ACCESS VAR OUTSIDE THE BLOCK
console.log("Accessing amount outside the block:",amount);



//SAME NAME VARIABLE WITH DIFFERENT SCOPE- THAT IS WE CAN HAVE TWO VARIABLES WITH SAME NAME IN DIFFERENT SCOPES BUT NOT IN ONE SCOPE

let balance=20;

if(true)
{
    let balance=30;
    console.log(balance);
}

//ACCESSING VARIABLES BEFORE INITIALISING

//CAN'T ACCESS LET AND CONST BEFORE INITIALISATION
// console.log("Accessing j before initialising :",j);
// console.log("Accessing l before initialising :",l);

//CAN ACCESS VAR BEFORE INITIALISATION - THAT'S ALSO ONE OF THE DRAWBACK OF VAR
console.log("Accessing k before initialising :",k);
let j=100;
var k=200;
const l=500;


//WE CAN ACCESS NORMAL FUNCTION BEFORE DEFINING OR INITIALISING IT JUST LIKE THIS

greet();

function greet()
{
    // console.log("Hello there....");
}


//WE CAN'T ACCESS FUNCTION WHICH ARE CREATED USING VARIABLE BEFORE INITIALISING OR DEFINING IT JUST LIKE THIS

meet();

let meet= function()
{
    console.log("Hello Meet......");
}