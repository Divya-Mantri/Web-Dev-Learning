function test1()
{
    const p1=new Promise((resolve,reject)=>
        {
            setTimeout(()=>
                {
                    resolve("First Promise resolved!");
                },8000)
        })
        return p1;
}

function test2()
{
    const p2=new Promise ((resolve,reject)=>
    {
        setTimeout(() => {
            resolve("Second Promise resolved!");
        }, 5000);
    })
    return p2;
}


async function greet()
{
    console.log("Hello Here, I'm greeting you!");
    const [data1,data2]=await Promise.all([test1(),test2()]);
    console.log(data1);

    console.log(data2);
}

greet();

console.log("Hello Coder World!");
console.log("How r u all?");
