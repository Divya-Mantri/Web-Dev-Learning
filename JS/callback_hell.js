cart=["pizza","coke","sandwitch"];



// function placeOrder(cart,callback)
// {
//     console.log("Talking with Domino's");

//     setTimeout(()=>
//     {
//         console.log("order Placed Successfully");
//         const order=
//         {
//             orderId:221,
//             food:cart,
//             restaurant:"Dominos",
//             location:"Dwarka"
//         }
//         callback(order );
//     },2000)
// }

// function preparingOrder(order,callback)
// {
//     console.log("Pizza preparation started...");
//     setTimeout(() => {
//        console.log("Pizza preparation done!") ;
//        const foodDetails=
//        {
//         token:12,
//         restaurant:order.restaurant,
//         location:order.location
//        };
//        callback(foodDetails); 
//     }, 5000);
// };

// function pickupOrder(foodDetails,callback)
// {
//     console.log("Reaching restaurant for picking order..");
//     setTimeout(() => {
//         console.log("Order picked up by Delivery Boy");
//         const dropLocation=foodDetails.location;
//         callback(dropLocation);
//     }, 3000);
// }
// function deliverOrder(dropLocation)
// {
//     console.log("Delivery boy on the way..");

//     setTimeout(()=>
//     {
//         console.log("Order Delivered Successfully!");
//     },5000)
// };

// // placeOrder(cart,callback);

// placeOrder(cart,(order)=>
// {
//     preparingOrder(order,(foodDetails)=> 
//     {
//         pickupOrder(foodDetails,(dropLocation)=>
//         {
//             deliverOrder();
//         });
//     })
// }); 


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



//Note:- callback hell can be resolved using promise 

placeOrder(cart)
.then(order=> preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(dropLocation=>deliverOrder(dropLocation))
.catch(error => console.log(error));
