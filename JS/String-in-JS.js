//Primitive Data Type

const num=10;
// num=20;                  //const value can't be changed
console.log(num);

// Non Primitive DataType

const obj=
{
    id:10,
    balance:200
}
obj.id=12;                  //In Non-Primitive datatypes we can change the values as they are stored in heap 
console.log(obj);

let obj2=
{
    id:20, 
    money:30
}

// obj=obj2;               //Throws an error as we are assigning the address of obj2 to a const variable


// ========================================================
// String in JavaScript

let string='Hey there! World !!';
let string2="What's up!";
let string3=`Kinda Expensive,ahh lot!!`              //Modern way of initializing a string
console.log(string)
console.log(string2)
console.log(string3)

let price=100;
console.log(`Price of the Tomato is : ${price}`)


// String Concatenation

let s1="Ukw ,";
let s2="Everything Fell Apart!";
let s3=s1+s2
console.log(s1.length)
console.log(s2.length)
console.log(s3.length)

//What if want to print quotation marks too in our string then we just have to use back-tick, quotation marks, single marks in inside-out or vice-versa.

console.log(`Hello there, "What's up?"`)


//If we have a multiple para string and we want to break the line in-between then we can use ' \n' this is escape character.... ---
console.log("Idk, what's the future holds for me . But i'm damn sure that it doesn't hold anything good for me ! \n It feels like I lost everything , there's no purpose of my life from this phase....");
// What if we want to print the escape character too that is \n then we use one more (\) in front of these escape characters ...Example...
console.log("Idk, what's the future holds for me . But i'm damn sure that it doesn't hold anything good for me ! \\n It feels like I lost everything , there's no purpose of my life from this phase....");


//Accessing letters through index
let message='Nothing to write...';
console.log(message[0])
console.log(message.charAt(1))              //This is the another way of accessing letters using charAt property which is different from other languages


// Changing case to Lowercase
console.log(message.toLowerCase())
// Changing case to uppercase
console.log(message.toUpperCase())
console.log(message);                       //There will be no change in the original string all these functions will just print a new result instead of changing the existing one


//IndexOf Operation on String-----Returns the index of the substring
let hero="Hello World up there! World"
console.log(hero.indexOf("World"));
console.log(hero.indexOf("Nope!"));

console.log(hero.lastIndexOf("World"));         //Last index of the occurence of substring

console.log(hero.includes("up"));                //Returns true or false if the substring is present or not 


//Extracting Substrings  

//Slice Operation
let newstring="Umm..Idk what to write!";
console.log(newstring.slice(0,3))                   //Returns the portion of the string acc to the given arguments

let mess="Hello There!"
//Slice can take negative index also and they will start from the end just like this [ and so on ,-3,-2,-1]
console.log(mess.slice(-7,11))

// Note: Can't use negative indexing with substrings

//Extracting a substring of a specified length using substring(start,length) property
console.log(mess.substring(0,4));

//Replacing Content
let replacing_str="Old String";
console.log(replacing_str.replace("String","Messsage"))

//If we have multiple string of the same name and we want to replace all of them then we can use this property of ReplaceAll
console.log(replacing_str.replaceAll("String","Messages"));

//Splitting String      
let string5="Money, Honey, Sunny, Bunny";
console.log(string5.split(", "))

//Trimming  - For removing initial and trailing spaces
let string6="       Hello Ji    ";
console.log(string6.trim())


// New way to Create String with the help of "new" Keyword
// By creating string with the help of new keyword memeory allocation will be  in heap instead of stack
let lateststr=new String("Hello World!");
console.log(lateststr)
console.log(typeof(lateststr))