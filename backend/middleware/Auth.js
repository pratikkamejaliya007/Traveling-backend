import jwt from 'jsonwebtoken'

export const Admin_Auth = async(req,res,next)=>{
    try{
        let token = req.cookies.jwt;
        if(!token){
            return res.status(404).json({message:"Token Not Found"})
        }
        let decode= jwt.verify(token,"pratik")
        req.user = decode;
        if(!req.user.role == 'Admin'){
            return res.status(300).json({message:"You Are Not Admin"})
        }        
        next();
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const User_Auth = async(req,res,next)=>{
    try{
        let token = req.cookies.jwt;
        if(!token){
            return res.status(404).json({message:"Token Not Found"})
        }
        let decode= jwt.verify(token,"pratik")
        req.user = decode;
        if(!req.user.role == 'User'){
            return res.status(300).json({message:"You Are Not User"})
        }        
        next();
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}