//---------ABOUT REDUCE FUNCTION-----------------

const arr=[10,20,30,40,50];

// arr.reduce(callback function(accumulator,current_value),initialization)
// const result=arr.reduce((acc,curr)=>
// {
//   acc=acc+curr; 
//   return acc; 
// },0)

// TO WRITE IT IN SINGLE LINE 
const result=arr.reduce((acc,curr)=>acc+curr,0);
console.log(result);

// REAL WORLD USE CASE OF REDUCE  

let fruits_arr=["orange","apple","banana","lichi","blueberry",'strawberry',"grapes",'orange','litchi','apple','orange','apple','banana','orange','apple','grapes','litchi','blueberry'];
const count=fruits_arr.reduce((acc,curr)=>
{
    if(acc.hasOwnProperty(curr))
    {
        acc[curr]++;
    }
    else
        acc[curr]=1;
    return acc;
},{})

console.log(count);


// -----------------------------SET ------------------- 

const sets= new Set([100,200,300,400,300]);
console.log(typeof sets);


// ADDING ELEMENTS IN A SET 
const set1=new Set();
set1.add(4);
set1.add(7);
set1.add("Rohini");
set1.add(40);
console.log(set1.size)


// DELETING ELEMENTS FROM A SET 
set1.delete(7);
console.log(set1)


// INSTAGRAM ID EXAMPLE 

const user_id=new Set(["it'srohini","chavi-me","mohini_here","suman.34"]);
let newUser="chavi-me";
console.log(user_id.has('it\'sme'));

user_id.clear()         //will empty the set
console.log(user_id)

let set2=new Set([21,22,23,24,25]);

//CONVERTING ARRAY INTO SET AND SET INTO ARRAY
let arr1=[1,3,2,1,4,5];
const set3=new Set(arr1);
arr1=[...set3];
console.log(arr1);


//UNION OF TWO SETS
let set4= new Set([11,12,13,14,15]);
let set5= new Set([10,21,14,24,11]);
let set6= new Set([...set4,...set5])
console.log("The union of two sets is:",set6)


//INTERSECTION OF TWO SETS
const resultant=[...set4].filter((num)=> set5.has(num));
console.log("The intersection of two sets is :",resultant);


//ITERATE OVER SET 
//USING FOR OF LOOP (BEST WAY)
console.log("Iterating over a set using for-of loop.....")
for(let value of set4)
{
    console.log(value);
}

// USING FOR-EACH LOOP
console.log("Iterating over a set using for-each loop........")
set5.forEach((value)=>console.log(value))