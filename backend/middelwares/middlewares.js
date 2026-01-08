const jwt = require("jsonwebtoken")

function middleware(req,res,next){
    const token = req.headers.token;


    const decoded=jwt.verify(token,"1234kuch_bhi_karo_mere_yar")
    if(decoded.userId){
        req.userId=decoded.userId
        next()
    }
    else{
        req.status(403).json({
            message:"Invalid Credentials"
        })
    }
}

module.exports={
    middleware
}