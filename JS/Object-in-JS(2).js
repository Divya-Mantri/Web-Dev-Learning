//Nested Object

const user=
{
    name:"Dustin",
    balance:240,
    address :
    {
        pincode:246149,
        city:"Kotdwar"
    }
}
console.log(user.address.pincode)
// or
console.log(user["address"]["pincode"]);

//creating copy using assign (Recommended is to use Structureclone)
const user2=Object.assign({},user);
console.log(user2)
user2.name="Mohit"
console.log(user.name)

//Object.freeze and Object.seal()


//Destructuing of an object
let obj1=
{
    name:"Eleven",
    Money:430,
    balance:30,
    age:20
}

//const(name,balance,age)=obj1;
const {name:full_name,balance:amount,age:umar}=obj1;
console.log(full_name,amount,umar);

const{name,age,...obj2}=obj1
console.log(name,age,obj2)


const arr=[3,2,1,5,10];
const [first,second, , ,third]=arr; 
console.log(first,second,third);

const[one,two,...three]=arr;
console.log(three);

let obj3=
{ 
    FullName:"Eleven",
    age:20,
    arrey:[90,40,60,80],
    address:
    {
        pincode:246149,
        city:"Kotdwar"
    }
};

const {arrey:[,five]}=obj3;
console.log(five);
// const {address:adds}=obj3;
// console.log(adds.pincode)

const {address:{pincode,city}}=obj3
console.log(pincode,city)

//function inside an object

let user1=
{
    name:"Milly",
    amount:420,
    greet:function()
    {
        return "Hello World!"
    },
    meet: function()
    {
        console.log(20);
    }
}

console.log(user1.greet());
user1.meet();

//PROTOTYPE CHAIN

let use1=
{
    name:"Will",
    age:20
}

let use2=
{
    amount:420,
    money:50
}
use2.__proto__=use1;

console.log(use1.name)
console.log(use2.age)

let arrey=[10,20,30,40]
console.log(arr.__proto__==Array.prototype)
console.log(arr.__proto__.__proto__==Object.prototype)
console.log(arr.__proto__.__proto__.__proto__==null)

