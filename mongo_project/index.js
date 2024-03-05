const mongoose = require("mongoose");
const studentModel = require("./models/student.model1");

//write the code to connect with mongodb

mongoose.connect("mongodb://localhost/be_demodb");

const db=mongoose.connection; //Start the connection with mongodb

db.on("error", ()=>{
    console.log("Error while connecting to db");
});

db.once("open", ()=>{
    console.log("Connected to MongoDB");
    //Logic to insert data into the db
    // init();

    //Running the quries on MongoDB
    dbQuries();
});
async function init(){
    //Logic to inset data in the db
    const student={
        name : "Rupayan",
        age : 21,
        email: "send2rupayan2002@gmail.com",
        subjects:["Maths", "English"]
    };
    const student_obj=await studentModel.create(student);
    console.log(student_obj);
};

async function dbQuries(){
    /*
    //read the student data
    console.log("Inside the Database:-")
    //read the student data based on the quries
    try{
        const student = await studentModel.findById("65e6c07ca4c2309b63103dc0");
        console.log(student);
    }catch(err){
        console.log(err);
    };

    //If I want to search based on the name
    try{
        // const student = await studentModel.find({name: "Rupayan"}).limit(1);
        // const student = await studentModel.findOne({name: "Rupayan"});
        const student = await studentModel.find({});
        console.log(student);
    }catch(err){
        console.log(err);
    };
    */

    //Deal with multiple conditions
    const stds = await studentModel.where("age").gt("10").where("name").equals("Rupayan").limit(2);
    console.log(stds);

    //Delete a document where name:"Rupayan"
    const student = await studentModel.deleteOne({name:"Rupayan"});
    console.log(student);
}