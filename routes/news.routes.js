const express=require("express")
const newsRouter=express.Router()
const newsController=require("../controller/newsController")


newsRouter.post("/news/add",newsController.addNews)
newsRouter.get("/news",newsController.getNews)
newsRouter.post("/news/edit/:id",newsController.editNews)
newsRouter.get("/news/:id",newsController.getNewsDetail)
newsRouter.delete("/news/delete/:id",newsController.deleteNews)


module.exports={newsRouter}
