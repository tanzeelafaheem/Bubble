import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import connectDb from './config/mongodb.js';
import userRouter from './routes/userRoute.js'
import messageRouter from './routes/messageRoute.js';
import {socketHandler} from './utils/socket.js'
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true, 
  },
});
socketHandler(io);

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use('/api/user',userRouter)
app.use('/api/message',messageRouter)
app.get('/api/', (req, res) => {
  res.json({ message: '🫧 Bubble server is working!' });
});

// Start server
server.listen(PORT, () => {
  console.log(`✅ Server running at Port: ${PORT}`);
});
