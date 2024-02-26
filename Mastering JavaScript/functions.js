// Define Function
function helloStudents() {
    console.log("Hello Students !");
}
helloStudents();

// I want to get the sum of two numbers
function sum(a, b=5){// default value of b, if anyone forgot to put the argument of b
    return a+b;
}
console.log(sum(10, 12));
console.log(sum(10));

function func(){
    console.log(arguments);
}
func(1, 2, 3, 4, 5, 5, 6);