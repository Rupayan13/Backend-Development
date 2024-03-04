//Defined the schema of students collection to be stored in db
const mongoose = require("mongoose");

//schema
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:19
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:15
    },
    subjects:[String],
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now();
        }
    }
});

//Go ahed and create corresponding collection in DB
module.exports = mongoose.model("Student", studentSchema);