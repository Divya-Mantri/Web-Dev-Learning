const grandParent=document.getElementById('grandParent')
const parent=document.getElementById('parent');
const child=document.getElementById('child');

//Event Bubbling & Event Capturing

child.addEventListener('click',(event)=>
{
    // console.log(event.target);
    console.log('child clicked');
    // event.stopPropagation();
},false);

parent.addEventListener('click',(event)=>
{
    // console.log(event.target);
    // console.log(event.currentTarget)
    console.log('parent clicked');
    event.stopPropagation();
},false);

grandParent.addEventListener('click',(event)=>
{
    // console.log(event.target);
    console.log("grandparent clicked");
},false);


// addEventListener(first_eventtype,callback,capture);