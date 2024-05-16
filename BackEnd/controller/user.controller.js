import User from "../modal/user.modal.js";
import bcrypt from "bcryptjs"

export const signUp = async (req,res)=>{
    try {
        const {fullname,email,password} = req.body;
        const user= await User.findOne({email})
        if (user) {
            return res.status(400).json({message:"User is all ready rigister"})
        }
        const hashPassword = await bcrypt.hash(password,10);
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword,
        })
      await createdUser.save()
    res.status(201).json({message:"User created",user:{
        _id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,
    }})
         } catch (error) {
        console.log("Error" + error.message)
        res.status(500).json({message:"internal server error"})
    }
};


