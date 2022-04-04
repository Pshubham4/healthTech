const express = require('express')
const PatientData = require('./Schema/patientSchma')
const patientSave = require('./Schema/patientSave')
const Prouter = express.Router()


Prouter.post('/registerPatient',async (req,res)=>
{
    try {
        
        const  formData = await req.body

    
        await patientSave(formData).then(()=>{
    
            res.status(200).json({message:"Form submitted succesfully"})
        
        }) 
        .catch(err=> res.status(422).json({message:err}))
    } 

    catch (error) {
    res.status(500).json({message:error})
    }
}
)

Prouter.post('/searchUser', async (req,res)=>{

    try {
        
         const  { Name } = await req.body
         const patientData = await PatientData.find().or([{ 'firstName': { $regex: `${Name}` }}, { 'lastName': { $regex: `${Name}` }}]);
  
         
         if(!patientData[0])
         { res.status(400).send({message:"Data not found"}) }
         else{
             res.status(200).json(patientData)
         }
 
     } catch (error) {
         res.status(500).send({message:error})
     }
    
 })

module.exports = Prouter