let a=10;
let b=a;
b=30;       //we update the value of b
console.log(b)      //b's value changes
console.log(a)      //a's value remain same


// Primitive DataType Vs Non Primitive DataType
//Primitive DataType => Immutable
//Non Primitive DataType => Mutable


//Object Example

let obj=
{
    id:20,
    name:"Rohit"
}

let obj2=obj;

obj2.id=34;
console.log(obj)
console.log(obj2)