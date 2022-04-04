const express = require('express')
const connectDatabase = require('./database')
const myRouter = require('./router')
const patientRouter = require('./patientRouter')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())

connectDatabase()

const port = process.env.PORT || 4040

app.use(myRouter)
app.use(patientRouter)


if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"));

    const path = require('path')
    app.get("*",(req,res)=>
    {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

app.listen(port,()=>
{
    console.log(`Server Started on port - ${port}`)
})

