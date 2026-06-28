//IF-ELSE

let age=3;

if(age>=18)
{
    console.log("Eligible for Voting");
}
else
{
    console.log("Not Eligible");
}

//IF-ELSE-IF-ELSE

let Given_age=19;

if(age<18)
{
    console.log("KID");
}
else if(Given_age>45)
{
    console.log("OLD");
}
else
{
    console.log("YOUNG");
}


//MULTIPLE CONDITION: SWITCH

switch(new Date().getDay())
{
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    default:
        console.log("NOT A VALID DAY");
}


//LOOPS

//FOR-LOOP
for (let i=1;i<=5;i++)
{
    console.log("Life is totally Unpredictable");
}


//sum of first n number:10 number
let sum=0;
for (let i=1;i<=10;i++)
{
   sum= sum+i;
}
console.log(sum);

// NOTE: JS IS SLOWER THAN C++ BECOZ HERE EVERYTIME VALUE OF I CHANGES FOR THAT NEW MEMORY SPACE WILL BE ALLOCATED DUE TO THIS IT BECOMES SLOWER.


//NESTED FOR LOOP

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        process.stdout.write(String(j));
    }
    process.stdout.write("\n")
}


// WHILE LOOP
let i=1;
while(i<=5)
{
    console.log("While loop Running:",i)
    i++;
}

//DO-WHILE LOOP-DIY

//FOR LOOP ON ARRAY
let arr=[10,20,30,40,50]

for(let i=0;i<5;i++)
{
    console.log("Array elements prinitng:",arr[i]);
}

//ON OBJECT
const obj=
{
    name:"Derek",
    age:15,
    amount:4430,
    city:"Kotdwar"
}

//One Way
const key=Object.keys(obj);
for(let k=0;k<key.length;k++) 
{
    console.log(obj[key[k]]);
}

//FOR IN LOOP -Iterate over keys in an object 

let object =
{
    name:"Robin",
    age:23,
    gender:"Female",
    city:"Kotdwar"
};

for(let key in object)
{
    console.log(key , ":" , object[key]);
}

//Object.keys(obj)

let obj2=Object.create(object);

obj2.money=420;
obj2.id="Roh";
obj2.id="Roh";
console.log(obj2);
console.log(obj2.name);

console.log(Object.keys(obj2));

for (let key in obj2)
{
    console.log(key); 
}