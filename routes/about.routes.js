const express=require("express")
const aboutRouter=express.Router()

const aboutController=require("../controller/aboutController")
aboutRouter.post("/about/add",aboutController.addAbout)
aboutRouter.get("/about",aboutController.getAbout)
aboutRouter.post("/about/edit/:id",aboutController.editAbout)

module.exports={aboutRouter}