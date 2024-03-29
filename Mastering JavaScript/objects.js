/*
const user ={
    name:"Rupayan",
    age:21,
    city:"Kolkata"
}

//Accessing the data
console.log(user.name);
console.log(user["name"]);

//Adding data to the object
user.country="India";
user["continent"]="Asia";
console.log(user.country);
console.log(user.continent);

//Deleting object keys and object itself
delete user.country;
console.log(user);

delete user["continent"];
console.log(user);
*/


let person={
    name:"Rupayan",
    age:21,
    address:{
        city:"Kolkata",
        state:"West Bengal",
        country:"India"
    }
}

for(let key in person){
    console.log(key, "=>", person[key]);
}
console.log(Object.keys(person));
console.log(Object.values(person));

//Both keys and the values
console.log(Object.entries(person));


//Cloning an object using assign

const new_person = Object.assign({}, person);
console.log(new_person);

const new_person1 = Object.assign({}, person, {role: "Developer"});
console.log(new_person1);