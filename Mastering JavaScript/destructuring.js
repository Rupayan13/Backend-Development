//Destructuring in arrays

const nums=[1, 2, 3];

const [a, b, c]=[1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

const [p, q, r]=[1, 2, [4, 5, 6]];
console.log(p);
console.log(q);
console.log(r);

//Destructuring in an object

const per={
    age: 99,
    name: "Rupayan",
    city: "Kolkata",
    address:{
        state:"West Bengal",
        country:"India"
    }
}

const {name, age, city, address:{state, country}} = per;
console.log(name);
console.log(age);
console.log(city);
console.log(state);
console.log(country);