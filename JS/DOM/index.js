/*
DOM : Document Object Model 
The DOM is a way to represent a web page so that programs (like Javascript) can interact with it .
*/

//Accessing elements using id
document.getElementById("first").innerHTML="[About Life]";

//Accessing elements using queryselector
const id=document.querySelector('#first')
id.innerHTML="Hey...Human! How's going on"

const id2=document.querySelector('.header2');
id2.style.backgroundColor='hotpink';

//Using querySelectorAll
const id3=document.querySelectorAll('ul li');


const li=document.querySelector('li') 
// How to iterate over a nodeList
// 1. Using for Loop
// 2. Using for of Loop
// 3. Using for Each Loop
// 4. Converting nodeList into Array 
// Array.from(obj)


// Accessing tags by tagName will return HTMLCollection of all elemetns with the same tag name.
const obj=document.getElementsByTagName('h1')
console.log(obj)

let team=document.getElementsByTagName('li')

//How to iterate over it

// 1. For Loop
//2.  for of
//3. converting into array and then applying for each operation

//Accessing using Relationships

// 1. Accessing using Parent Node - Accessing the immediate parent of an element

const list=document.querySelector('li');
console.log(list.parentNode)
console.log(list.parentElement)

// 2. Accessing using Child Node - For knowing child elements
const par=document.querySelector('ul')
console.log(par)
console.log(par.childNodes)     //Nodelist also includes whitespace/blankspace or comment as text node in its list along with element node .
console.log(par.children);      //Gives html colllection of elements

// 3. Accessing first child
console.log(par.firstChild)

console.log(par.lastChild)

console.log(par.firstElementChild)

console.log(par.nextSibling)

console.log(par.nextElementSibling);

console.log(par.previousElementSibling)


//innerHTML
