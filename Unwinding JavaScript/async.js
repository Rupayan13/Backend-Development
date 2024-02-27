console.log("Hello from first line !");

setTimeout(()=>{//call back function:- function as argument
    console.log("Hello from the call back function !");//Asynchronous Function
}, 3000);

console.log("Hello from the last line !");