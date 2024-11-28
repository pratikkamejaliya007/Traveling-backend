import User from "../model/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const Add_user = async(req,res)=>{    
    try{
        const {fullName,email,password,phone,role} = req.body;
        let hashpassword = await bcrypt.hash(password,10);

        const user = await User.create({fullName,email,password:hashpassword,phone,role})
        
        let token = jwt.sign({id:user._id,email:user.email,role:user.role},"pratik",{expiresIn:"1h"})

        res.cookie("jwt",token,{
            httpOnly: false,  
            sameSite: "Strict",
            secure:false,  
            maxAge: 3600000  
        })
        return res.status(201).json({message:"User Created"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const login = async(req,res)=>{
    console.log(req.body)
    try{
        const {email,password}=req.body;
        
        const user= await User.findOne({email})

        if(!user){
            return res.status(400).json({message:"User Not Found"})
        }

        let isMatch = await bcrypt.compare(password,user.password)    

        if(!isMatch){
            return res.status(400).json({message:"Password incorrect"})
        }

        
        let token = jwt.sign({id:user._id,email:user.email,role:user.role},"pratik",{expiresIn:"1h"})

        res.cookie("jwt",token,{
            httpOnly: false,  
            sameSite: "Strict",
            secure:false,  
            maxAge: 3600000  
        })

        return res.status(200).json({message:"Login Suseffully"})

    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const Change = async(req,res)=>{
    try{
        const {email,password} = req.body;

        let user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message:"User Not Found"})
        }        
        let hashpassword = await bcrypt.hash(password,10)

        await User.findByIdAndUpdate(user._id,{password:hashpassword})

        return res.status(201).json({message:"Password Changed"})

    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const Delete_user = async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"User Deleted"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}