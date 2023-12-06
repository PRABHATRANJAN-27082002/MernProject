const mongoose = require('mongoose')
const dotenv = require("dotenv")
const express = require("express")
const app = express()

dotenv.config({ path : './config.env' })

require("./db/conn")

// mongod --version
// mongosh --version

// const port = 8000
// const DB = "mongodb+srv://prabhat:priyanshuranjan@cluster0.62t4xlc.mongodb.net/mernstack?retryWrites=true&w=majority"



// const DB  = process.env.DATABASE
const port = process.env.PORT

// mongoose.connect(DB,{
//     // useNewUrlParser:true,
//     // useUnifiedTopology:true
//     // useCreateIndex:true,
//     // useFindAndModify:false
// }).then(()=>{
//     console.log(`connection successfull`)
// }).catch((err)=>{
//     console.error(`no connection ${err}`)
// })


//Middleware
const middleware = (req,res,next) =>{
    console.log("my middleware check user is properly login yes or no")
    next()
}

app.get('/',(req,res)=>{
    res.send("Hello World from the server")
})

app.get('/about',middleware,(req,res)=>{
    res.send("I am Prabhat Ranjan")
})

app.get('/contact',(req,res)=>{
    res.send("Contact Page to contact me on 9958050485")
})

app.get('/login',(req,res)=>{
    res.send("Login Page")
})

app.get('/registration',(req,res)=>{
    res.send("Registration Page")
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})