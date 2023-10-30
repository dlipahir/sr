const express=require("express")
const homeRouter=express.Router()
const homeController=require("../controller/homeController")

homeRouter.post("/home/add",homeController.addHome)
homeRouter.get("/home",homeController.getHome)
homeRouter.post("/home/edit/:id",homeController.editHome)

module.exports={homeRouter}