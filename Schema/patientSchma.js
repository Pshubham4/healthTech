const mongoose = require('mongoose')


const patientSchema = mongoose.Schema({
    firstName:{type:String,
                required:true,
                index:true} ,

    lastName:{type:String,
             required:true,
             index:true},
   
    birthDate: {type:String,
                required:true},

    gender:{type:String,
                required:true,},

    email:String,

    phoneNumber:{type:Number,
                 unique:true,
                 required:true,
                  minLength:10} ,

    specialist: String,

    symptom:{type:String,
             minLength:4,
            required:true   },

    medHistory:String,
   
},{timestamps:true})

const PatientData = mongoose.model('patientData',patientSchema)

module.exports =  PatientData