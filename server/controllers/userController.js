import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

const addUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    // Optional: Normalize input
    username = username.toLowerCase();
    email = email.toLowerCase();

    // Check if email exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Check if username is taken
    const taken = await userModel.findOne({ username });
    if (taken) {
      return res.status(400).json({ success: false, message: "Username already taken" });
    }

    // Validate password
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    return res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: error.message });
  }
};

export default addUser;
