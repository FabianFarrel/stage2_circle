import express, { Request, Response } from "express";
import authController from "../controllers/auth-controller";
import postController from "../controllers/post-controller";
import replyController from "../controllers/reply-controller";
import userController from "../controllers/user-controller";
import { authentication } from "../middlewares/authentication";
import { catchAsync } from "../utils/catch";
import upload from "../middlewares/uploadImage";
import LikeController from "../controllers/like-controller";
import FollowController from "../controllers/follow-controller";
import { searchController } from "../controllers/search-controller";

export const routerV1 = express.Router();

routerV1.get("/", (req: Request, res: Response) => {
    res.send("Hello");
});

routerV1.post("/logout", (req: Request, res: Response) => {
    res.clearCookie('token');
    return res.status(200).json({ message: "Logout successful" });
});

/** Authentication Routes **/
routerV1.post("/auth/register", catchAsync(authController.register));

routerV1.post("/auth/login", catchAsync(authController.login));

routerV1.get("/auth/check", catchAsync(authentication), catchAsync(authController.check));


// Mengupdate data pengguna
routerV1.put("/user", catchAsync(authentication), upload.fields([{ name: 'image', maxCount: 1 }, { name: 'background', maxCount: 1 }]), catchAsync(userController.update));


// Mendapatkan semua data 
routerV1.get("/getUser", catchAsync(authentication), catchAsync(userController.getUser));

routerV1.get("/getUserById/:userId", catchAsync(userController.getUserById.bind(userController)));

routerV1.get("/getAllUser", catchAsync(authentication), catchAsync(userController.getAllUser));


// Membuat postingan dan reply baru
routerV1.get("/getAllPost", catchAsync(postController.getAllPost));

routerV1.post("/post", catchAsync(authentication), upload.single('image'), catchAsync(postController.createPost));

routerV1.post("/post/:postId/reply", catchAsync(authentication), upload.single('image'), catchAsync(replyController.createReply));


// Mendapatkan status post berdasarkan ID
routerV1.get("/post/status/:postId", catchAsync(postController.getPostById.bind(postController)));


// Mendapatkan balasan (reply) dari sebuah post
routerV1.get("/post/:postId/reply", catchAsync(authentication), catchAsync(replyController.getReplyByPost));


// Mendapatkan semua post berdasarkan ID
routerV1.get("/post/:authorId", catchAsync(postController.getPostByAuthor));

routerV1.get("/profile/post/:userId", catchAsync(postController.getPostByUserId));


// Menyukai sebuah postingan
routerV1.post("/post/:postId/like", catchAsync(authentication), catchAsync(LikeController.likePost));


// Mendapatkan semua like dari sebuah post
routerV1.get("/post/:postId/like", catchAsync(authentication), catchAsync(LikeController.getLikes));


// routerV1.get("/follow", catchAsync(authentication), catchAsync(FollowController.getFollows));
routerV1.get("/follow/:userId", catchAsync(authentication), catchAsync(FollowController.checkFollowStatus));

routerV1.patch('/follow/:userId', catchAsync(authentication), catchAsync(FollowController.toggleFollow));


// Rute untuk pencarian post
routerV1.get('/search', catchAsync(authentication), catchAsync(searchController));
