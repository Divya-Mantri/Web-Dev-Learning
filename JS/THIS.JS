//TOPIC -------ABOUT THIS KEYWORKD


// SUB-TOPIC: GLOBAL OBJECT - which can be accessed by anyone and from anywhere except let and const. Every function is a part of it. For keeping standards , it is called as globalThis.
// globalObject:object
// chrome browser: window 
// nodejs:global


// let obj=
// {
//     name:"Benny",
//     age:234
// }

// console.log(obj.age);

// console.log(globalThis);


//THIS KEYWORD- THIS KEYWORD IN JS is a special keyword that refers to the context in which the current code is being executed.
// Its values depend on how the function where this is used is called. 
  
// let a=10;
// const b=20;

// var c=20;
// console.log(this.c)

// console.log(this==window)

// IN Node.JS this points to an empty object: Module's exports object 
// console.log(this)

// INSIDE A FUNCTION 

// 1.NON-STRICT MODE(Bydefault): When this is used inside a regular function, it refers to the global object 
// 2.STRICT MODE : This will be undefined inside a function

"use strict"  

function greet()
{
    console.log(this);
}
greet();
window.greet();

// a=10;
// console.log(a)

// let obj=
// {
//     name:10
// }

// Object.freeze(obj)
// obj.name=30; 
// console.log(obj)

// 3. INSIDE A METHOD (Object Context)
// When this is used inside an object's method, it refers to the object that owns the method.
const obj=
{
    name:"Mahima",
    age:39,
    greet:function()
    {
        console.log(this);
    }
}
 
obj.greet();


// Arrow function don't have thier own this .
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj2=
// {
//     name:"jenny",
//     age:23,
//     meet:()=>
//     {
//         console.log(this);
//     }
// }

// obj2.meet();

let obj2=
{
    name:"jenny",
    age:23,
    meet:function()
    {
        let ab=()=>
        {
            console.log(this);
        };
        ab(); 
    }
}

obj2.meet();

// INSIDE A CONSTRUCTOR OR A class
// In constructors and classes , this refers to the instance of the object being created. 

class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

let a=new Person("Rohini",20)
console.log(a);


//This keyword in arrow function and normal function without creating any object

let greet=()=>
{
    console.log(this);
}

greet();


let meet=function()
{
    console.log(this) 
}