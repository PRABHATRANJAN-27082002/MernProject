const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const cors = require("cors")

// const jwt  = require("jsonwebtoken")

const app = express()
app.use(cors())

require('../db/conn')
const User =  require("../model/userSchema")

router.get('/',(req,res)=>{
    res.send(`Hello world from the server router js`)
})


//promises
// router.post('/register',(req,res)=>{

//     const {name,email,phone,work,password,cpassword} = req.body

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         // return res.json({error:"Pls fill all the fields"})
//         return res.status(422).json({error:"Pls fill all the fields"})
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"})
//         }

//         const user = new User({name,email,phone,work,password,cpassword})

//         // const user = new User({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword})
//         // const user = new User(req.body)  --wrong

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered sucessfully"})
//         }).catch((err)=> res.status(500).json({error:"Failed to registed ->"}))

//     }).catch(err =>{console.log(err)})

//     // console.log(name)
//     // console.log(email)

//     // console.log(req.body)
//     // res.send("Router Register Page")

//     // res.json({message:req.body})
// })

//async awai
router.post('/register', async (req,res)=>{

    const {name,email,work,password,cpassword} = req.body

    if(!name || !email   || !work || !password || !cpassword){
        // return res.json({error:"Pls fill all the fields"})
        return res.status(422).json({ error: "Pls fill all the fields" })
    }

    try{
        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"Email already exist"})
        }
        else if(password != cpassword){
            return res.status(422).json({error:"Password ans Confirm password should be same"})
        }
        else{
            const user =  new User({name,email,work,password,cpassword});

        //pre
        //here before saving password in database we have to hash the password
        //post

        const userRegistered = await user.save()

        if(!userRegistered){
            res.status(500).json({error:"Failed to registed alpha ->"})
        }
        else{
            res.status(200).json({message:"Successfully registered"})
        }
    }
    }
    catch(err){
        res.status(500).json({error: "Failed to registered" })
    }

})


router.post('/signin', async (req,res)=>{

    let token

    const {email,password} = req.body

    if(!password || !email){
        return res.status(400).json({error:"Fill all the signup feilds"})
    }

    try {
        const userFind = await User.findOne({email:email})
        const pass = userFind.password
        // const isMatch = await bcrypt.compare(Enter password, existing password in database)
        
        
        
        if(userFind){
            const isMatch = await bcrypt.compare(password,pass)

            token = await userFind.generateAuthToken()
            console.log(token)
        
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 67680000),
                httpOnly:true,
                secure: false,
            })

            if(isMatch){
                return res.status(200).json({message:"successfully login"})
            }
            else{
                return res.status(420).json({error:"email and password in incorrect"})
            }
        }
        else{
            return res.status(420).json({error:"email and password in incorrect"})
        }
    } catch (err) {
        res.status(400).json({error:`error is ${err}`})
    }
})

module.exports = router

















// {
//     "name":"priyanshu",
//     "email":"priyanshuranjan@gmail.com",
//     "phone":456764534,
//     "work":"Software Developer",
//     "password":"prabhatranjan",
//     "cpassword":"prabhatranjan"
    
//   }