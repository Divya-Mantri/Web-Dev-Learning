//CALL BACK FUNCTION -- Sending(only reference not calling) a function as an argument in another function 

function names(fun)
{
    console.log("Hello Guys! What'sup@  ");
    fun();
}

function greet()
{
    console.log("I'm call back function");
}

console.log("----------------ABOUT CALL BACK FUNCTION-------------------")
names(greet);       //sending reference of the function instead of calling it

// console.log("--------------ANOTHER WAY OF DOING IT------------")
//Another Way of doing it 
// names(function greet()
// {
//     console.log("We can do it in this way too!");
// })


// const greet=function()
// {
//     console.log("This is also the another way using variables !");
// }
// names(greet);

// OR USING ARROW Function

// names(()=>{
//     console.log("I am call back function :)");
// });

//REAL WORLD USE CASE  - TO FETCH DATA FROM BACKEND TO SHOW ON FRONTEND IN EVERY 5 SEC
// function fetchData()
// {
//     //lots of code here
//     console.log("I'm fetching data from backend!!");
// }

// setInterval(fetchData,5000);/




