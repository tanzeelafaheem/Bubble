import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: ""
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  friendRequests: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
}]

}, { timestamps: true });


const userModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default userModel;
