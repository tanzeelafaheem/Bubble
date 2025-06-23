import messageModel from '../models/messageModel.js'; 

let onlineUsers = new Map();

export const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('🟢 User connected:', socket.id);

    socket.on('add-user', (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on('send-msg', async (data) => {
      const { sender, receiver, content } = data;

      //save
      try {
        const newMsg = new messageModel({ sender, receiver, content });
        await newMsg.save();
      } catch (err) {
        console.error('❌ Error saving message to DB:', err.message);
      }

     //send
      const sendToSocketId = onlineUsers.get(receiver);
      if (sendToSocketId) {
        io.to(sendToSocketId).emit('msg-receive', {
          sender,
          content
        });
      }
    });

    socket.on('disconnect', () => {
      console.log('🔴 User disconnected:', socket.id);
    });
  });
};
