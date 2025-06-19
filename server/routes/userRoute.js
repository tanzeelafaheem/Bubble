import express from 'express'
import {addUser,loginUser,searchUser,sendFriendRequest,acceptFriendRequest,
        getFriendRequests,getFriends} from '../controllers/userController.js'

const userRouter=express.Router();
userRouter.post('/add',addUser);
userRouter.post('/login',loginUser);
userRouter.get('/search',searchUser);
userRouter.post('/send-request', sendFriendRequest);
userRouter.post('/accept-request', acceptFriendRequest);
userRouter.get('/get-requests/:userId', getFriendRequests);
userRouter.get('/get-friends/:userId',getFriends)


export default userRouter;