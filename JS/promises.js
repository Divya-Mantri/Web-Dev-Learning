//Asynchronous Task - which don't execute immediately , that is these tasks take some time to execute.

//promise easy example

const p1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Hello Everyone..");
    },5000)
})

p1.then((response)=>console.log(response));



//weather api

const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=ca2433e0ec6345fbb3f75734260803&q=India&aqi=yes`);

obj.then((data) => {
    console.log(data);
}).catch((error) => {   //if request get rejected then we have to heandle that case
    console.log(error);
});


// There are three states of promise that are pending ,  resolve, reject.

// Note : JSON = Json stands for Javascript Object Notation. It's a object and format of representing data. Whatever raw data we receive we convert it into json.

obj.then((data)=>
{
    const promise=data.json();       
    promise.then((response)=>
    {
        console.log(response);
    })
})
 

//Some people do this way and it's called promise chaining .......

obj.then((data)=>
{
   return data.json();
}).then((response)=>
{
    console.log(response);
})

// OR 

obj
.then(data=>data.json())
.then(response=>console.log(response));

// OR 

fetch(`http://api.weatherapi.com/v1/current.json?key=ca2433e0ec6345fbb3f75734260803&q=India&aqi=yes`)
.then(data=>data.json())
.then(response=>console.log(response.current.temp_c))
.catch(error=>console.log(error));



// How to remember promise ?

//  const data= fetch("Yahan se data laake dedo");
// data.then()