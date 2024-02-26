/*
var:-
1. It's used to define a variable
2. It has the function scope but not block scope
3. It is hoisted
*/

/*
function f1(){
    var i=5;
    console.log(i);
}
f1();
console.log(i); // It has the function scope
*/

/*
{
    var i=5;
}
console.log(i);
*/

/*
console.log(i); // In the next line we wrote or initialized the i, so it is defined in the top as a variable i. It is called hoisting.
var i=23;// so that it can't throw a error
*/

/*
let:-
1. No hoisting
2. It has block scope
*/

/*
console.log(i);
let i=23;
*/

/*
{
    let name="Rupayan";
}
console.log(name);
*/

/*
const:-
1. scope is exactly same as let
2. const variables are final, can't be re-assigned a value
*/

/*
const country="India";
country="USA";
console.log(country);
*/
