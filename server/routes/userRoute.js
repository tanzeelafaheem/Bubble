import express from 'express'
import {addUser,loginUser,searchUser} from '../controllers/userController.js'

const userRouter=express.Router();
userRouter.post('/add',addUser);
userRouter.post('/login',loginUser);
userRouter.get('/search',searchUser);

export default userRouter;