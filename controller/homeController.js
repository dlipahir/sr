const { HomeModel } = require("../model/homeModel")

exports.addHome=async(req,res)=>{
    try{
        let exist=await HomeModel.countDocuments()
        if(exist==1){
            res.send({
                msg:"Another Home Page Can't Be Added",
                status:res.statusCode
            })
        }else{
            let data=await HomeModel(req.body)
            await data.save()
            res.send({
                msg:"Home Page Added Successfully",
                data,
                status:res.statusCode
            })
        }
    }catch(error){
        res.send({
            msg:error.message,
            error,
            status:res.statusCode
        })
    }
}
exports.getHome=async(req,res)=>{
    try {
        let data=await HomeModel.find()
        res.send({
            msg:"Home found Successfully",
            data,
            status:res.statusCode
        })
    } catch (error) {
        res.send({
            msg:error.message,
            error,
            status:res.statusCode
        })
    }
}


exports.editHome=async(req,res)=>{
    const {id}=req.params
    try {
        let data=await HomeModel.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
            msg:"Home updated successfully",
            data,
            status:res.statusCode
        })
    } catch (error) {
        res.send({
            msg:error.message,
            error,
            status:res.statusCode
        })
    }
}