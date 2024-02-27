function operation(operatorFn, a, b){//Any function takes a function as argument , called higher order function.

    return operatorFn(a, b);
}

function add(a, b){
    return a+b;
}

let result=operation(add, 5, 6);
console.log(result);

function getGreetMethod(){//Any function returns a function , also called higher order function.
    return function(){
        console.log("Hello Students !");
    }
}

let greetFn=getGreetMethod();
console.log(typeof greetFn);
greetFn();