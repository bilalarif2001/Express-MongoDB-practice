const mongoose= require ("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    birthday:{
        type:String,
        required:true,
        unique:true,
    },
    CNIC:{
        type:Number,
        required:true,
        unique:true,
    },
    designation:{
        type:String,
        required:true,
        unique:true,
    },

})

const User=mongoose.model("Users",userSchema)
module.exports=User