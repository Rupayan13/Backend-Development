//Syntax related

//console.log("Hell //error

//Runtime exceptions
/*
let x=5;
console.log(x.toUpperCase());
*/

//Logical 
/*
let num=5;
for(i=-3;i<5;i++){
    console.log(num/i); //Logical error is dividing by zero
}
*/

try{
    let obj = undefined;
    // let obj={name:"Rupayan"};
    console.log(obj.name);
}catch(err){
    console.log("Exception Handled");
}finally{
    console.log("I will always execute.");
}

