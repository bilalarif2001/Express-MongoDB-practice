const express= require('express');
const imageParser= require('../utils/cloudinary');
const imageSchema= require('../models/image');
const { response } = require('express');


const router= express.Router();

router.post('/upload',imageParser.fields([{name:'secondaryImgs',maxCount:3},{name:'displayImg'}]), async (req, res) => {
    
    const {name} = req.body;
   // const image = req.file.path;

    console.log(req)
//     const uploadImage= new imageSchema({
//         name:name,
//         image:image
//     })


//     try{
//         await uploadImage.save();
    
// } catch(err){
//     console.log(err);
//     res.status(500).json({message:`image upload failed. error: ${err}`,
//     status:"error"
// })
    
// }
});


router.get('/', async (req, res) =>{
    try{
        const images= await imageSchema.find()
        res.status(200).send(images);
}
catch(err){
    console.log(err)
    res.status(500).send(err)
}});

module.exports=router;