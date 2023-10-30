const express=require("express")
const broucherRouter=express.Router()
const broucherController=require("../controller/broucherController")
broucherRouter.post("/broucher/add",broucherController.addData)
broucherRouter.get("/broucher",broucherController.getData)
broucherRouter.post("/broucher/edit/:id",broucherController.editData)
broucherRouter.get("/broucher/:id",broucherController.getDetail)
broucherRouter.get("/broucher/search/:name",broucherController.searchBroucher)
broucherRouter.delete("/broucher/delete/:id",broucherController.deleteData)

module.exports={broucherRouter}