var num=20;

if(num%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}

console.log("after if");

//Ternary Operator -> if-else
13%2==0 ? console.log("Even") : console.log("Odd");

/*
Nested Consitionals
*/

var a =10;
if(a>=0){
    if(a>5){
        console.log("a is greater than 0 and 5");
    }else{
        console.log("a is greater than 0 and less than 5");
    }
}else{
    console.log("a is less than 0");
}

//Using ternary
(a>=0) ? (a>5)?console.log("a is greater than 0 and 5"):console.log("a is greater than 0 and less than 5") : console.log("a is less than 0");

//Switch Case
var fruit = "Apple";
switch(fruit){
    case "Apple" :
        console.log("It's a apple");
        break;
    case "Mango" :
        console.log("It's a mango");
        break;
    default :
        console.log("Not a valid fruit");
}