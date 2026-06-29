//For in Loop : Isko array ke sath nahi lete

const arr=[10,20,30,40,50];
console.log("----------For in on Array-------")
for(let key in arr)
{
    console.log(key, arr[key]);
}

arr.name="Billy";
arr.age=20;
console.log("------------How For in behaves on Array----------")
for(let key in arr)
{
    console.log(key);
}

console.log("----------Normal Array looks like ----------------")
console.log(arr);

console.log("-----Normal For loop on Array-----------")
for(let index=0; index<arr.length;index++)
{
    console.log(index,arr[index]);
}


//FOR OF LOOP on Array

const arrey=[101,201,301,401,501];
console.log("------------For of Loop Running....--------------")
for(let value of arrey)
{
    console.log(value);
}

// FOR OF LOOP ON String
console.log("-------------For of loop on String-------------")
let str="Will is a good boy";
for(let character of str)
{
    console.log(character);
}

// Note : Don't use For of loop on Object becoz object is not iterable. It is not defined for object that how to iterate.
console.log("-------------For of loop on Object-----------------")
const objects={
    name:'Chavvi',
    age:22,
    gender:'female'
};

// for(let value of objects)
// {
//     console.log(value);
// }


for(let value of Object.values(objects))
{
    console.log(value);
}


// Note : Use For-in for Object and For-of for String and Array


// Ways to Iterate over Array 

// FOR- EACH LOOP

console.log("---------------For Each LOop------------")

let arr2=[500,501,502,503,504];
// SINGLE ARGUMENT
console.log("For Each with single argument")
arr2.forEach(function(num)
{
    console.log(num);
})

//SECOND INDEX
console.log("For Each with Index :")
arr2.forEach((num,index)=>console.log(index,num));

//THIRD ARRAY AS AN ARGUMENT for modifying array
arr2.forEach((num,index,a)=>
{
    a[index]=num*2;
})

console.log("Modified Array using For Each :",arr2);

//For Each in Readable way
console.log("For EAch in Readable Way..............")

function printing(num)
{
    console.log(num);
}
arr2.forEach(printing);


// ABOUT FILTER - USES CALL BACK FUNCTION AND RETURNS IN TRUE OR FALSE AND JUST LIKE FOR EACH WE CAN GIVE THREE ARGUMENTS
console.log('----------------ABOUT FILTER-------------')
let arr3=[33,46,52,332,37];

const result= arr3.filter(num=>num%2==0);
console.log(result);

//EXAMPLE
console.log("\nExample of Filter")
const students = 
[
    {Name:"Rohini", Age:12, Marks:70},
    {Name:"Darshna", Age:53, Marks:50},
    {Name:"Reem", Age:36, Marks:45},
    {Name:"Shreen", Age:28, Marks:12}
]

const performance=students.filter(({Marks})=>Marks>50);
console.log(performance);

//ABOUT MAP - Just like filter we can give three arguments
console.log("------------ABOUT MAP--------")
const arr4=[1,2,4,5]
const results=arr4.map((num)=>
{
    return num*num;
})

console.log(results);

// IN FILTER - we can just filter the values but in MAP  we can modify the values that's the difference 
// IN FOREACH - we can't store the result and it doesn't return anything . we have to do right there whatever we want to .
// MAP always expect something as a result 
console.log("\nExample-------------")
const arr5= [1,2,3,4,5,6];
const resulted=arr.filter((num)=>num%2==0).map((num)=>num*num);
console.log(resulted);

//ABOUT REDUCE FUNCTION
console.log("----------------ABOUT REDUCE FUNCTION-------------")

