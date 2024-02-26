//String

let name="Rupayan";
let city="Kolkata";

console.log(name, city);

//Accessing characer based on index

console.log(name[0]);
console.log(name[3]);
console.log(name[11]); //undefined

name[2]="M";// strings are immutable
console.log(name);

//Length of the string
console.log(name.length);

let first_name="Rupayan";
let last_name="Dirghangi";

let full_name=first_name.concat(last_name);
console.log(full_name);

console.log(first_name+" "+last_name);

//Convert into upper case
console.log(full_name.toUpperCase());

//character at any index str[i]

console.log(name.charAt(3));

//Slicing
//R  u  p  a  y  a  n  D  i  r  g  h  a  n  g  i
//0  1  2  3  4  5   6  7  8  9  10 11 12 13 14 15
//                                    ... -3 -2 -1
console.log(full_name);
console.log(full_name.slice(2));
console.log(full_name.slice(2, 5));
console.log(full_name.slice(-5));
console.log(full_name.slice(-5, -1));

//index of
console.log(name.indexOf('u'));

//trim
let word=" rupayan ";
console.log(word);
console.log(word.trim());

//split
name = "Rupayan Dirghangi";
console.log(name.split(''));//separate in the basis of characters in a array
console.log(name.split(" "));//separate in the basis of strings in a array