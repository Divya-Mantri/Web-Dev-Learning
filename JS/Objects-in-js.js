//How to Create Object
const obj=
{
    "insta id":"Lost",
    Password:430,
    gender:"female",
    age:10,
    20:20,
    undefined:45,
    null:"NA"
}
console.log(obj)
console.log(obj.gender);
console.log(obj["insta id"])
console.log(obj[20])
console.log(obj.undefined)
console.log(obj["null"])

//Second method to Create Object 
const person=new Object();
//Properties can be added, Modified, deleted later
person.name="Mail"
person.age=54;
person.gender="Male"
person.age=32;
console.log(person)


//Third Method to create Object
class People 
{
    constructor(name, age, gender)
    {
        this.name=name,
        this.age=age,
        this.gender=gender;
    }
}

let person1=new People("Rohit",20,"Male");
let person2=new People("Rohini",20,"Female");
console.log(person1,person2)

//To access all the keys together at a time 
let obj1=
{
    name:"Mohini",
    age:33,
    account_balance:340,
    gender:"Male"
}

console.log(Object.keys(obj1));

//To access all the values together in an array form
console.log(Object.values(obj1))

//In Keys-Value Pair
console.log(Object.entries(obj1))

//Assign Use Case - Use to Combine multiple Objects (Note- Also we can use it to make a deep copy of an object but if the object is nested then the nested part will be created using reference that is shallow copy of nested part will be created)
const obj2=
{
    a:1,
    b:2
}

const obj3=
{
    c:3,
    d:4
}

const obj5=
{
    e:5,
    f:6
}

const obj4=Object.assign({},obj2,obj3);
obj4.a=345;
console.log(obj4,obj2,obj3)


//Spread Operator-To Combine multiple Objects
const obj6={...obj2,...obj3,...obj5};
console.log(obj6)

//Shallow Copy  -Copy by Reference(that is there will be only one copy and both are pointing to the that same)
let C1=
{
    a:1,
    b:2
}

let C2=C1;
C1.b=34;
console.log(C1,C2)

//Deep Copy- Actual Copy is created individually    (Here both have their own copy and changes to one doesn't affect the other one)
let C3=structuredClone(C1);
C3.a=0;
console.log(C3,C1)