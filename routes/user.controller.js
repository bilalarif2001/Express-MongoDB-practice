const express= require("express");
const userSchema= require ("../models/user")
const router=express.Router();
const userAuth= require ('../middleware/userauth')

router.get('/',userAuth,async(req,res)=>{
    const users= await userSchema.find();
    res.status(200).send(users);
})

router.post ('/signup',async(req,res)=>{
    
    let user= new userSchema(req.body) // req.body is the data we send from postman to server.
    user= await user.save() // saves data in mongo Db
    res.status(200).send({user})
  })

  module.exports=router