import express from "express";
import isAuth from "../middleware/isAuth.js";
import { genCurrentUser, getAdmin } from "../controllers/user.controller.js";
import adminAuth from "../middleware/adminAuth.js";

let userRouter = express.Router();
userRouter.get("/currentuser", isAuth, genCurrentUser);
userRouter.get("/getadmin", adminAuth, getAdmin);

export default userRouter;
