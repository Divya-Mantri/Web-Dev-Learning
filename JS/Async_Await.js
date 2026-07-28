//ASYNC AWAIT


const cart=["Pizza","Coke","Sandwitch"];

function placeOrder(cart)
{
    console.log("Talking with Domino's");

    const pr=new Promise(function(resolve,reject)
    {
        setTimeout(()=>
        {
            const food_available= true;
            if(food_available)
            {
                console.log("order Placed Successfully");
                const order=
                {
                    orderId:221,
                    food:cart,
                    restaurant:"Dominos",
                    location:"Dwarka"
                }
                resolve(order);
            }
            else
            {
                reject("Items out of Stock!!");
            }
        },2000)
    })
    return pr; 
}

function preparingOrder(order)
{
    console.log("Pizza preparation started...");

    const pr=new Promise(function(resolve,reject)
    {
        setTimeout(() => {
        console.log("Pizza preparation done!") ;
        const foodDetails=
        {
            token:12,
            restaurant:order.restaurant,
            location:order.location
        };
        resolve(foodDetails); 
        }, 5000);

    })
    return pr;
};


function pickupOrder(foodDetails)
{
    console.log("Reaching restaurant for picking order..");

    const pr=new Promise(function(resolve,reject)
    {
        setTimeout(() => {
            console.log("Order picked up by Delivery Boy");
            const dropLocation=foodDetails.location;
            resolve(dropLocation);
        }, 3000);
    })
    return pr;
}

function deliverOrder(dropLocation)
{
    console.log("Delivery boy on the way..");
 
    setTimeout(()=>
    {
        console.log("Order Delivered Successfully!");
    },5000)
};

async function greet() 
{
    try
    {
    const order= await placeOrder(cart);
    const foodDetails= await preparingOrder(order);
    const dropLocation=await pickupOrder(foodDetails);
    deliverOrder(dropLocation);  
    }
    catch(error)
    {
        console.log(error);
    }
  
}

// greet(); 


// EASY EXAMPLE 

function test1()
{
    const ex1 = new Promise((resolve,reject)=>
    {
            setTimeout(() => {
                resolve("First Promise Resolved!");
            }, 5000);
    })
    
    return ex1;    
}

function test2()
{

    const ex2 = new Promise((resolve,reject)=>
     {
            setTimeout(() => {
                resolve("Second Promise Resolved!");
            }, 5000);
    })

    return ex2;
}


async function meet()
{
    // console.log("First one started!")
    const data = await test1();
    console.log(data);

    // console.log("Second one Started!")
    const data2=await test2();
    console.log(data2);
}

// meet();


// ex1.then(value=>console.log(value));
// ex2.then(value=>console.log(value));

// Note :- Whenever you make a async function it will return promise always 
async function lost()
{
    return "Hello loser!";
}

// console.log(lost());
lost().then(value=>console.log(value));

