const mongoose = require('mongoose');
const registrationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    usertype:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('RegistrationData', registrationSchema);