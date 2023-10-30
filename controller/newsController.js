const { NewsModel } = require("../model/newsModel")

exports.addNews=async(req,res)=>{
    try {
        let exist=await NewsModel.findOne({title:req.body.title})
        if(exist){
            res.send({
                msg:"Already Exist",
                status:res.statusCode
            })
        }else{
            let data=NewsModel(req.body)
            await data.save()
            res.send({
                msg:"News & Events Added Successfully",
                data,
                status:res.statusCode
            })
        }
    } catch (error) {
        res.send({
            msg:error.message,
            error,
            status:res.statusCode
        })
    }
}

exports.editNews=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await NewsModel.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
            msg:"News & Events Updated Successfully",
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

exports.getNews=async(req,res)=>{
    try {
        let data=await NewsModel.find()
        res.send({
            msg:"Data Archieved Successfully",
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

exports.getNewsDetail=async(req,res)=>{
    let {id} = req.params
    try {
        let data=await NewsModel.findById(id)
        res.send({
            msg:"Data Archieved Successfully",
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

exports.deleteNews=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await NewsModel.findByIdAndDelete(id)
        res.send({
            msg:"Data deleted successfully",
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