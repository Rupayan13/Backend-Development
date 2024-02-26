// function with no argument and no returns

var hello =()=>{
    console.log("Hello World !");
}
hello();

// Functions with parameters and return 
var sum =(a, b)=>{
    return a+b;
}
console.log(sum(5, 6));

//Functions with parameters, multiple linesof function body

var process = (a, b)=>{
    console.log("need to process");
    return a*b;
}
console.log(process(5, 6));
//Inside arrow functions , we couldn't print the argument just writing argument

//IIFE - Immediately Invoked function expression / Annonymous function
(function(){
    console.log("Hello Students !");
})();