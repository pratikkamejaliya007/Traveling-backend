import { Router } from "express";
import { Add_user , login , Change , Delete_user } from "../controller/user.controller.js";

const userRoute = Router()

userRoute.post("/login",login)
userRoute.post("/register",Add_user)
userRoute.put("/change",Change)
userRoute.delete("/delete_user",Delete_user)

export default userRoute