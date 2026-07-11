// Created an Element 
/* function attach(content)
 {

    const element = document.createElement('li');
    element.innerHTML=content;
    
    const element2 = document.createElement('li');
    element2.innerHTML=content+" Version 2.0";
    
    const parent=document.getElementById('root')
    parent.appendChild(element);
    parent.append(element,element2);
}

attach("TS");
attach("React")
attach("Node")
*/

// How to create text node - text wihtout any tag
/* const element3=document.createTextNode("Life  is meant to suffer!");
 const parent2=document.getElementById('root')
 parent2.append(element3); 
*/

//Attribute Node
/* const element4=document.createAttribute("id")
 element4.value="first";

//access to first list
const curr_list=document.querySelector('li');
curr_list.setAttributeNode(element4);

//Access to second element
const parent3=document.getElementById('root');
parent3.children[1].setAttributeNode(element4);

*/

//Accessing Attribute of a element
// const element5=document.getElementById("root");
// console.log(element5.getAttribute("class"));

//Setting Attribute
// element5.setAttribute("custom","20");
// element5.setAttribute("class","Loser_Ultra_max_pro")

//Removing Attribute
// element5.removeAttribute("custom"); 

//-----------------------------Add Nodes to the DOM ----------------------------

//1. Append Child
/* const parent4=document.getElementById('root');
const element6=document.createElement('li');
element6.innerHTML="GitHub";

To add as a top child
parent4.prepend(element6);

// AT last
parent4.append(element6);

//In between
const child2=parent4.children[1];
parent4.insertBefore(element6,child2);


parent4.replaceChild(element6,child2);

parent4.innerHTML='......     '
parent4.innerHTML+= '12345';
parent4.innerHTML+= '<li>12345</li>';
*/

//Insert Element before any element
/*
const element = document.createElement("div");
element.innerHTML = "Everything Lost!";

const parent=document.getElementById("root");
parent.insertAdjacentElement("beforebegin",element);
parent.insertAdjacentElement("afterend",element);
parent.insertAdjacentElement("afterbegin",element);
parent.insertAdjacentElement("afterend",element);
*/

//Removing a particular child OR Delete a node or element
document.querySelector('li').remove();

