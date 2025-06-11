const express=require("express")
const annualRouter=express.Router()
const annualSchemeController=require("../controller/annualSchemeController")
annualRouter.post("/annual/manager/add",annualSchemeController.addManager)
annualRouter.get("/annual/manager",annualSchemeController.getManager)
annualRouter.post("/annual/loginv2",annualSchemeController.loginv2)
annualRouter.put("/annual/updatemsg",annualSchemeController.UpdateMsg)
annualRouter.post("/annual/login",annualSchemeController.login)
annualRouter.post("/annual/manager/edit/:id",annualSchemeController.editManager)
annualRouter.delete("/annual/manager/delete/:id",annualSchemeController.deleteManager)
annualRouter.get("/annual/manager/search/:name",annualSchemeController.searchManager)
annualRouter.post("/annual/add",annualSchemeController.generateToken)
annualRouter.get("/annual/customer",annualSchemeController.getCustomer)
annualRouter.get("/annual/customer/complaint",annualSchemeController.getcomplaintCustomer)
annualRouter.post("/annual/customer/add",annualSchemeController.addCustomer)
annualRouter.put("/annual/customer/edit/:id",annualSchemeController.editCustomer)
annualRouter.delete("/annual/customer/delete/:id",annualSchemeController.deleteCustomer)
annualRouter.get("/annual/customer/:id",annualSchemeController.getCustomerById)
annualRouter.post("/annual/customer/complaint",annualSchemeController.addComplaint)
annualRouter.post("/annual/customer/resolution/:id/:complaintId",annualSchemeController.addResolutionDate)
annualRouter.get("/annual",annualSchemeController.getToken)
annualRouter.get("/annual/:token",annualSchemeController.viewByToken)
annualRouter.post("/annual/edit/:token",annualSchemeController.editByToken)
annualRouter.get("/annual/view/:id",annualSchemeController.viewToken)
annualRouter.delete("/annual/bulk/delete",annualSchemeController.deleteBulkToken)

// annualRouter.get("/annual/customer",annualSchemeController.getCustomer)
// annualRouter.post("/annual/customer/add",annualSchemeController.addCustomer)



module.exports={
    annualRouter
}