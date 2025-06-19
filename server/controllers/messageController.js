import messageModel from "../models/messageModel.js";

const sendMessage=async(req,res)=>{
    const {sender,receiver,content}=req.body;
    try {
        const message = new messageModel({ sender, receiver, content });
    await message.save();
    res.status(201).json({ success: true, message });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

const getMessages = async (req, res) => {
  const { user1, user2 } = req.params;
  try {
    const messages = await messageModel.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 }
      ]
    }).sort({ createdAt: 1 }); // oldest to newest

    res.status(200).json({ success: true, messages });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

export {sendMessage,getMessages}
