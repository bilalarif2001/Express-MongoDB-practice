const express= require("express");
const productShema= require ("../models/product")
const router=express.Router();

router.get('/',async(req,res)=>{
    const users= await productShema.find();
    res.status(200).send(users);
})

router.post ('/producttest',async(req,res)=>{
    
    let user= new productShema(req.body) // req.body is the data we send from postman to server.
    user= await user.save() // saves data in mongo Db
    res.status(200).send({user})
  })

  module.exports=router