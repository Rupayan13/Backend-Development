//Promises from simran
/*
const simranPromise = new Promise((resolve, reject)=>{
    let parentDescision =true;
    if(parentDescision){
        resolve("Yayy, ab shaadi ki taiari karo !");
    }else{
        reject("Papa ne IAS dhoond liya hai !,Sorry.....");
    }
});

simranPromise.then((msg)=>{
    console.log("Simran message :", msg);
    console.log("Let's book the wedding venue.");
}).catch((msg)=>{
    console.log("Simran message :", msg);
    console.log("Tinder kaha ho yaar!");
}).finally(()=>console.log("Chalo life me clarity mili...."));
*/


/*
const f1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Friend 1:Hey I am in Goa");
        }else{
            reject("Friend 1:Sorry , mere pet me dard ho raha hai");
        }
    }, 3000);
});

const f2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Friend 2:Hey I am in Goa");
        }else{
            reject("Friend 2:Sorry , meri billi bimar hai");
        }
    }, 3000);
});

const f3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Friend 3:Hey I am in Goa");
        }else{
            reject("Friend 3:Sorry , mujhe pw skills ki live session karna hai");
        }
    }, 3000);
});

Promise.all([f1Promise, f2Promise, f3Promise]).then((msg)=>{
    console.log(msg);
    console.log("Yaay we are going to Goa");
}).catch((msg)=>{
    console.log(msg);
    console.log("Yaar band karo Goa ka plan");
})
*/

const gf1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF 1:Hey I will come for dinner.");
        }else{
            reject("GF 1:Phone is unreachable.");
        }
    }, 1000);
});

const gf2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF 2:Hey I will come for dinner.");
        }else{
            reject("GF 2:I am on diet.");
        }
    }, 1000);
});

const gf3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF 3:Hey I will come for dinner.");
        }else{
            reject("GF 3:My friends are coming.");
        }
    }, 1000);
});

Promise.any([gf1Promise, gf2Promise, gf3Promise]).then((msg)=>{
    console.log(msg);
    console.log("my valentine date is sorted.");
}).catch((msg)=>{
    console.log(msg);
    console.log("How to be the part of Bajrangdal");
});
