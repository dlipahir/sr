const express=require("express")
const productRouter=express.Router()
const productController=require("../controller/productController")




productRouter.post("/product/add",productController.addProduct)
productRouter.get("/product",productController.getProduct)
productRouter.get("/product/:id",productController.getproductDetail)
productRouter.post("/product/edit/:id",productController.editProductDetail)
productRouter.delete("/product/delete/:id",productController.deleteProduct)
productRouter.get("/product/search/:name",productController.searchProduct)








module.exports={
    productRouter
}