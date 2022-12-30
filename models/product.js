const mongoose= require ("mongoose")

const productShema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    }
})

const Products=mongoose.model("Products",productShema)
module.exports=Products