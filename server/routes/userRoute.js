import express from 'express'
import {addUser,loginUser,searchUser,sendFriendRequest,acceptFriendRequest,
        getFriendRequests,getFriends,getUser,updateProfilePic} from '../controllers/userController.js'

const userRouter=express.Router();
userRouter.post('/add',addUser);
userRouter.post('/login',loginUser);
userRouter.get('/search',searchUser);
userRouter.post('/send-request', sendFriendRequest);
userRouter.post('/accept-request', acceptFriendRequest);
userRouter.get('/get-requests/:userId', getFriendRequests);
userRouter.get('/get-friends/:userId',getFriends);
userRouter.get('/get-user/:userId',getUser);
userRouter.put('/update-profile-pic/:userId',updateProfilePic);


export default userRouter;