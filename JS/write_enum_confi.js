let obj={}

console.log(obj);

obj.name="Max";
obj.age=34;
console.log(obj)

//key value writable enumberable configurable
console.log(Object.getOwnPropertyDescriptor(obj,'name'));

//writable=true, value ko  mein change kar skta hu otherwise not
obj.name="Lucas";
console.log(obj)

//configurable =true means you can change writable and enumberable
//configurable = false means you can't 
console.log("-------------------------------------------------------")

//WRITING / DEFINING OWN PROPERTY
let obj1={};

Object.defineProperty(obj1,'name',{
    value:'Dustin',
    writable:true,
    enumerable:true,
    configurable:false,
})
// Object.defineProperty(obj1,'name',{
//     writable:false
// })
obj1.name="Steven";

console.log("Defined own property:",obj1);


const obj3={
    name:"Harry",
    age:34,
    account_no:2343, 
};

Object.defineProperty(obj3,'account_no',{
    writable:false
})

obj3.account_no=234;
console.log(obj3.account_no)

// ENUMERABLE----------------

console.log("--------------ENUMERABLE-------------")

const customer={
    name:"Ron",
    age:34,
    account:101,
    balance:2000
}

let customer2=Object.create(customer)
customer2.city="Hardiwar";
customer2.place="Delhi";

Object.defineProperty(customer,'name',{
    enumerable:false,
})

//enumerable - jis be key ka enumerable true hoga un sbko print krega ya access hoga even jo inherit hoke bhi jo property or key aati hai, uska enumerable true hoga to uska bhi access hoga



Object.defineProperty(Object.prototype,'toString',{
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));

for(let key in customer2)
{
    console.log(key);
}

let user=
{
    name:'Milly Brown',
    age:39
}

console.log(Object.getOwnPropertyDescriptor(user,"name"))

//Precaution from accidental change
Object.defineProperty(user,'name',{
    writable:false
});

