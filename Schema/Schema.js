const mongoose = require('mongoose')
const validator = require('validator')

const schema = mongoose.Schema({
   Name:{
       type:String,
       index:true,
       minLength:[3,`Must be atleast 3 characters, got {value}`],
       validate(value){
           if(!validator.isAlpha(value,"en-US",{ignore:"\s"}))
           {
               throw new Error ("Use alphabets only")
           }
       }
   },
   email:{
       type:String,
       required:true,
       unique:[true,"Email already exist"],
       validate(value){
           if(!validator.isEmail(value))
           { throw new Error ("Email is invalid")}
       }
    },
    password:{
        type:String,
        required:true,
        minLength:5
    },
    agreement:{
        type:Boolean,
        required:true
    }

})

const UserData =new mongoose.model('UserData',schema)

module.exports = UserData