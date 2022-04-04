const express = require('express')
const SaveModel = require('./saveModel')
const UserData = require('./Schema/Schema')

const router = express.Router()


//GET all data
router.get('/getData',async (req,res)=>{
    const data = await UserData.find()
   res.send(data)
})

//Post Date
router.post('/register', async (req,res)=>
{
   const { Name , email , password , agreement  } = await req.body;
try {
    if(  !Name  || !email  || !password  || !agreement)
   {
       return res.status(422).json({message:"Please Fill all Data"})
   }
   else{
       await  SaveModel({
            Name:Name,
            email:email,
            password:password,
            agreement:agreement
        })
        return res.status(201).json({message:"Signup succesful"})
   }
    
} catch (error) {
     return res.status(500).json(error)
}

})

//Get Single Data
router.get('/getData/:_id', async (req,res)=>
{
    try {
        const _id = await req.params._id
        const filterData = await UserData.findById(_id)

//Here UserData is data created using mongoose.model method


        if(!filterData)
        {
            res.status(404).send('Data not found')
        }
        else
        {
            res.send(filterData)
        }
        
    } catch (error) {
        res.status(500).send("Error :" + error)
    }
})

router.patch('/getData/:_id',async (req,res)=>{
    try {
        const _id = req.params._id
        const updatedData =await UserData.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        
        res.send(updatedData)
        
    } catch (error) {
        res.status(404).send(error)
    }
})


//This route is for login

router.post('/login', async (req,res)=>
{
    try {
        const {email,password} = req.body

   

        if(!email || !password)
        {return res.status(400).json({message:"Please Fill all data"})}

        else{
            const userLogin = await UserData.findOne({email:email,password:password})

            if(!userLogin)
            {
                res.status(400).json({error:"Invalid Credential"}) 
            }
            else{
            return res.status(200).json({name:userLogin.Name, email:userLogin.email,message:"Login succesful"})
            }
        }

    } catch (error) {
        res.status(500).send("error"+error)
    }
   
})




module.exports = router