//---------------MAP------------------

// Stores in Key-value pair and key should be unique. 

const map1=new Map();
map1.set(3,90);
map1.set("Reem",23);
map1.set(20,"Mohan");
map1.set("Reem",20);
console.log("Map is Created:",map1);

console.log("Is the key present :",map1.has("Reem"))

map1.delete(20);

console.log("Deleteing an element from map :",map1)

console.log("Size of map is :",map1.size)

map1.clear();
console.log("Clear Function Applied :",map1)

// ANOTHER WAY TO CREATE MAP 
console.log("Another way to initialize map...........")
const map2= new Map([[4,"Reem"],["Mohini","Rohini"],[1,2],[63,78]]);
console.log(map2)

//FOR OF LOOP
for(let [key,value] of map2)
{
    console.log(key,value);
}


