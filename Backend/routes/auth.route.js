import express from "express";
import { adminLogin, login, logOut, signUp } from "../controllers/auth.controller.js";

const authRoute = express.Router();
authRoute.post("/signup", signUp);
authRoute.post("/login", login);
authRoute.post("/logout", logOut);
authRoute.post("/adminlogin",adminLogin);

export default authRoute;
