//Global Scope
/*
var name="Rupayan";
console.log(name);

function func() {
    console.log(name);
}
func();
*/

//Local Scope
/*
function func(){
    var num = 55;//Function variable or local variable, it has the local scope
    console.log(num);
}
func();
console.log(num);
*/

//Block Scope
{
    // var x=20; // var does not have the block scope
    let x=20; // var has the block scope
    console.log(x);
}
console.log(x);