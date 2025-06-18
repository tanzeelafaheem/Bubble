import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt'

const addUser = async (req, res) => {
try{
    const {username,email,password}=req.body;
    const exists=await userModel.findOne({email})
    if(exists){
        return res.status(400).json({success:false,message:"User already exists"});
    }
    const taken=await userModel.findOne({username})
    if(taken){
        return res.status(400).json({success:false,message:"username already taken"});
    }
     if(password.length<8){
        return res.status(400).json({success:false,message:"Please enter a strong password with at least 8 characters"});
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    //create user
    const newUser=new userModel({
        username,
        email,
        password:hashedPassword
    });
    const user=await newUser.save();
     return res.status(201).json({success:true,user});
}
catch(error){
   console.log(error);
   res.json({success:false,msg:error.message});
}
}
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const searchUser = async (req, res) => {
  const keyword = req.query.username;

  try {
    const users = await userModel.find({
      username: { $regex: keyword, $options: "i" }
    }).select("-password");

    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export {addUser,loginUser,searchUser};