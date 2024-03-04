const mongoose = require("mongoose");
const studentModel = require("./models/student.model");

//write the code to connect with mongodb

mongoose.connect("mongodb://localhost/be_demodb");

const db=mongoose.connection; //Start the connection with mongodb

db.on("error", ()=>{
    console.log("Error while connecting to db");
});

db.once("open", ()=>{
    console.log("Connected to MongoDB");
    //Logic to insert data into the db
    init();
});
async function init(){
    //Logic to inset data in the db
    const student={
        name : "Rupayan",
        age : 21
    };
    const student_obj=await studentModel.create(student);
    console.log(student_obj);
};