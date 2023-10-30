const express=require("express")
 const inquiryRouter=express.Router()
 const inquiryController=require("../controller/inquiryController")

   inquiryRouter.post("/contact",inquiryController.contact)
   inquiryRouter.get("/contact/detail",inquiryController.getInquiry)
   inquiryRouter.get("/contact/detail/:id",inquiryController.getInquiryDetail)
   inquiryRouter.get("/contact/:name",inquiryController.searchInquiry)
 module.exports={
    inquiryRouter
 }