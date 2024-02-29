/*
async function getMessage(){
    return "Hello Students";
}
// console.log(getMessage());
getMessage().then(result => console.log(result));
*/

//Print Hello after a wait

/*
function printHelloAfterWait(){
    console.log("First line");
    setTimeout(()=>{
        console.log("Hello Students");
    }, 3000);
    console.log("Last line");
}
*/
console.log("Hello from begining");
async function printHelloAfterWait(){
    console.log("First line");
    let data=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello Students");
        }, 3000);
    })
    let result=await data;
    console.log(result);
    console.log("Last line");
}
printHelloAfterWait();
console.log("Hello from end");
