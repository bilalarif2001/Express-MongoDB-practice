const userAuth = (req,res,next)=>{
    console.log("I am middleware")
    next();
}

module.exports=userAuth;