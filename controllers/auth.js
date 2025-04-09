const jwt=require('jsonwebtoken');
const User=require('../models/userSchema');

exports.signup=async(req,res)=>{
    console.log(req.body)
    const {username,password}=req.body;
    try {
        const user=await User.findOne({username});
        if(user){
            return res.status(400).json({msg:"User already exists"});
        }
        const newUser=new User({username,password});
        await newUser.save();
        const payload={
            user:{
                id:newUser.id
            }
        }
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:360000},(err,token)=>{
            if(err) throw err;
            res.status(201).json({token});
        })
    } catch (error) {
        console.log(error.message);
    }
}

exports.login=async(req,res)=>{
    const {username,password}=req.body;
    try {
        const user=await User.findOne({username});
        if(!user){
            return res.status(400).json({msg:"User does not exist"});
        }
        const isMatch=await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({msg:"Incorrect password"});
        }
        const payload={
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:360000},(err,token)=>{
            if(err) throw err;
            res.status(200).json({token});
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
}
