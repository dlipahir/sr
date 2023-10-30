const express=require("express")
const userRouter=express.Router()
const userController=require("../controller/userController")







userRouter.post("/login/register",userController.registerController)
userRouter.post("/login",userController.loginController)
userRouter.get("/user/:id",userController.getUserData)
userRouter.post("/user/edit/:id",userController.editUserData)
userRouter.get("/user",userController.getAllUser)
userRouter.delete("/user/delete/:id",userController.deleteUser)
userRouter.get("/user/search/:name",userController.searchUser)
userRouter.post("/user/forgot",userController.forgotPassword)











module.exports={userRouter}