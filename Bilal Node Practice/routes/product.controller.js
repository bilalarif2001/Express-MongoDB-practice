/* const express= require("express");
const productSchema= require ("../models/products")
const router=express.Router();

const userAuthentication= require("../middleware/userAuthentication")


router.get('/',userAuthentication, async(req,res)=>{
    const users= await productSchema.find();
    res.status(200).send(users);
})

router.post ('/productpost',async(req,res)=>{
    
    let user= new productSchema(req.body) // req.body is the data we send from postman to server.
     // saves data in mongo Db
     user= await user.save()
    try{res.status(200).send({message:"Data has been sent successfully"})}
    catch{(error)=>{res.status().send({message:`Data already exists ${error}`})}}
    
  })

  



  module.exports=router */