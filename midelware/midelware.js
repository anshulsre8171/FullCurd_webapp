const jwt=require("jsonwebtoken")

 const checkuser=async(req,res,next)=>{
    const token=await req.headers.authorization?.split(" ")[1]
  // console.log(token)
    jwt.verify(token,"code",(err,decode)=>{
        if(err){
            res.json({
                code:404,
                message:"invalid code",
                error:true,
                success:false
            })
        }
        else{
            //console.log(decode)
            next()
        }
    })
}

module.exports=checkuser