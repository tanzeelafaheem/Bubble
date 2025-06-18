import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/mongodb.js';
import userRouter from './routes/userRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/user',userRouter)
app.get('/', (req, res) => {
  res.json({ message: '🫧 Bubble server is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at Port: ${PORT}`);
});
