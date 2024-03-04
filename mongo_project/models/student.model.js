//Defined the schema of students collection to be stored in db
const mongoose = require("mongoose");

//schema
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number
});

//Go ahed and create corresponding collection in DB
module.exports = mongoose.model("Student", studentSchema);