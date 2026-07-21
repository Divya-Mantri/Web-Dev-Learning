/* 
1. input
2. change
3. focus - doesn't not bubble
4. focusin 
5. blur or focusout
6. click
7. dblclick
8. submit
9. reset
10.FormData

*/

const form = document.querySelector('form');

// form.addEventListener('input',(event)=>
// {
//     console.log(event.target.value);
// })

// form.addEventListener('change',(event)=>
// {
//     console.log(event.target.value);
// })

// form.addEventListener('focusin',(event)=>
// {
//     console.log(event.target.value);
// })

// form.addEventListener('focusout',(event)=>
// {
//     console.log(event.target.value);
// })

// form.addEventListener('click',(event)=>
// {
//     console.log('single click');
//     // console.log(event.target.value);
// })

// form.addEventListener('dbclick',(event)=>
// {
//     console.log('double clicked');
// })


// form.addEventListener('submit',(event)=>
// {
//     console.log("form submitted");
// })

// form.addEventListener('reset',(event)=>
// {
//     console.log("form reset");
//     // console.log(event.target.value);
// })

form.addEventListener('submit',(event)=>
{
    event.preventDefault();     //prevent the page from refreshing
    // const name=document.getElementById('uname');
    // console.log(name.value);

    // const lastname=document.getElementById('lname');
    // console.log(lastname.value);

    // const age=document.getElementById('age');
    // console.log(age.value);

    
    // const result=document.getElementById('result');
    // result.innerText=`UserName :  ${name.value}   LastName: ${lastname.value}   Age:${age.value}`;
    // document.body.append(result); 
    
    const data = new FormData(form);
    // for(let key of data.keys())
    //     console.log(key);

    for(let [key,value] of data.entries())
        console.log(key,value);

    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

}) 

