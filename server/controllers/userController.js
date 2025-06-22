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

const getUser=async(req,res)=>{
  try {
    const user=await userModel.findById(req.params.userId);
    res.status(200).json({success:true,user:user})
  } catch (error) {
    res.status(500).json({success:false,msg:error.message})
  }
}

const sendFriendRequest = async (req, res) => {
  const { fromUserId, toUserId } = req.body;
  try {
    const toUser = await userModel.findById(toUserId);
    // Avoid duplicate requests
    if (!toUser.friendRequests.includes(fromUserId)) {
      toUser.friendRequests.push(fromUserId);
      await toUser.save();
    }
    res.status(200).json({ success: true, msg: 'Request sent' });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};


const acceptFriendRequest = async (req, res) => {
  const { fromUserId, toUserId } = req.body;
  try {
    const toUser = await userModel.findById(toUserId);
    const fromUser = await userModel.findById(fromUserId);

    toUser.friends.push(fromUserId);
    fromUser.friends.push(toUserId);

    toUser.friendRequests = toUser.friendRequests.filter(id => id.toString() !== fromUserId);
    
    await toUser.save();
    await fromUser.save();

    res.status(200).json({ success: true, msg: 'Friend added' });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

const getFriendRequests = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.params.userId)
      .populate("friendRequests", "username profilePic");
    res.status(200).json({ success: true, friendRequests: user.friendRequests });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};


const getFriends = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId).populate('friends', 'username profilePic');
    res.status(200).json({ success: true, friends: user.friends });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

const updateProfilePic = async (req, res) => {
  const { userId } = req.params;
  const { profilePic } = req.body;

  try {
    const user = await userModel.findById(userId);
    user.profilePic = profilePic;
    await user.save();
    res.status(200).json({ success: true, msg: "Profile picture updated!" });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};




export {addUser,loginUser,searchUser,sendFriendRequest,getUser,
        acceptFriendRequest,getFriendRequests,getFriends,updateProfilePic};