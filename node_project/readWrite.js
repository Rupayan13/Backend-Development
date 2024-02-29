//Read from external file

const fs = require('fs');

// console.log(typeof fs);

/*
//Read the sync way
console.log("Before starting to read");

//const content=fs.readFileSync("./input.txt");//synchronously reading
// console.log("Output content is :-"+content);

//Asynchronously reading
fs.readFile("./input.txt", (err, content)=>{
    if(err){
        return console.log(err);
    }
    console.log("Content of the file is :-"+content);
})

console.log("Last line");
*/


//Write the code to write to an external file

/*
//Synchronously
console.log("Before");
fs.writeFileSync("output1.txt", "Hello Students !");
console.log("After");
*/

//Asynchronously
console.log("Before");
fs.writeFile("output2.txt", "Hello Students again !", err=>{
    if(err){
        return console.log(err);
    }
    console.log("Written successfully !");
});
console.log("After");