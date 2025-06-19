import express from 'express'
import {sendMessage,getMessages} from '../controllers/messageController.js'

const messageRouter = express.Router();

messageRouter.post('/send-message', sendMessage);
messageRouter.get('/get-messages/:user1/:user2', getMessages);

export default messageRouter;