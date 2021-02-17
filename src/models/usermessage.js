const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        minLength : 3
    },
    email:{
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id")
            }
        }
    },
    Password:{
        type : String,
        required : true
        //minLength : 3
    },
    phone:{
        type : Number,
        required : true,
        min:10
    }
})

//we need to creat a Collection
const User = mongoose.model("FinalProjectAmma" , userSchema);

module.exports = User;