const express=require("express")
const categoryRouter=express.Router()
const categoryController=require("../controller/categoryController")







    categoryRouter.post("/category/add",categoryController.addCategory)
    categoryRouter.get("/category",categoryController.getCategory)
    categoryRouter.get("/category/:id",categoryController.getCategoryData)
    categoryRouter.post("/category/edit/:id",categoryController.editCategoryData)
    categoryRouter.delete("/category/delete/:id",categoryController.deleteCategory)
    categoryRouter.get("/category/search/:name",categoryController.searchCategory)







module.exports={
    categoryRouter
}