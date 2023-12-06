const mongoose = require("mongoose")

const DB  = process.env.DATABASE
// const DB = "mongodb+srv://prabhat:priyanshuranjan@cluster0.62t4xlc.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    
}).then(()=>{
    console.log(`connection successfull`)
}).catch((err)=>{
    console.error(`no connection ${err}`)
})