//Defining an Array
const arr=[2,34.3,true,"six",false];
console.log(arr)

//Length of an Array
console.log(arr.length)

let arr2=[1,1.34,true,false,"string",null];
console.log(arr2)
console.log(typeof(arr2))
console.log(arr2.length)

//Accessing an Array
console.log(arr2[2])
//Another latest way which also takes negative index 
console.log(arr2.at(-1)) 

const arr3=arr2;
console.log(arr3==arr2)

//Instead of referencing to the copied array's addressn if we acutally want to  create a clone of it then we can use this structuredClone function
const arr4=structuredClone(arr2)
console.log(arr4==arr2)

//To add an element at the end of an array
let arr5=[1,2,3,4,5]
arr5.push(6)
console.log(arr5)

//To delete an element from the end of the array
arr5.pop()
console.log(arr5)

//To add an element at the starting of the array
arr5.unshift(0)
console.log(arr5)

//To delete an element from the start of the array
arr5.shift()
console.log(arr5)

//To delete a particular element from an array
delete arr5[4]
console.log(arr5)

//To know the first index of a particular element
console.log(arr5.indexOf(3))

//To know the last index of a particular element
console.log(arr5.lastIndexOf(1))

//To know if particular elment is included in the array or not
console.log(arr5.includes(5))

//Slice Operation-To extract some specific part from the array and doesnt' make changes in original array
console.log(arr5.slice(1,3))        //last index is not included

//Splice Operation - Takes out the specified part from the original array, that is Makes changes in original array
console.log(arr5.splice(1,3,"two",3))       //Argument specifies from where do you want to extract and total elements you want to extract abd and third argument can be elements you want to add 

console.log(arr5)
//If you just want to add some elements and don't want to delete any
arr5.splice(2,0,"four",5)
console.log(arr5)

//To convert an array into String
console.log(typeof arr5.toString())

//Join Operation    -To convert into string with joining by any specific character
console.log(arr5.join("-"))

//Concatenate   - To join two or multiple arrays into a single array
let arr6=[11,12,13,14,15]
let arr7=[16,17,18,19,20]
let arr8=[21,22,23,24,25]
let arr9=arr6.concat(arr7,arr8)
console.log(arr9)

//Creating 2D Array
let arr2d=[[1,2,3],[4,5,6],[7,8,9]]
console.log(arr2d[0][2])

//To create 2D Array into 1D Array 
let arr1d=arr2d.flat();
console.log(arr1d)

//To create 3D array
let arr3d=[[1,2,3],[4,5,[6,7]],[8,9,1]]
console.log(arr3d)
let arr3to1d=arr3d.flat(Infinity )
console.log(arr3to1d)

//To know if the coming thing from backend is array or not?
console.log(Array.isArray(arr2))


//Another way of creating array - Not Recommended
let newarr=new Array(1,2,3,4,5);
console.log(newarr)
//Disadvantage of this way is if we create an array of a single element then it will consider it as a size of an array instead of treating it as an element 
let disarr=new Array(6)
console.log(disarr)
console.log(disarr.length)
