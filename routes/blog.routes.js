const express=require("express")
const blogRouter=express.Router()
const blogController=require("../controller/blogController")

blogRouter.post("/blog/add",blogController.addBlog)
blogRouter.get("/blog",blogController.getBlog)
blogRouter.get("/blog/:id",blogController.getBlogDetail)
blogRouter.get("/blog/search/:name",blogController.searchBlog)
blogRouter.post("/blog/edit/:id",blogController.editBlog)
blogRouter.delete("/blog/delete/:id",blogController.deleteBlog)


module.exports={blogRouter}