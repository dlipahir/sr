const CategoryModel = require("../model/categoryModel")
const mongoose=require("mongoose");
exports.addCategory=async(req,res)=>{
    let {name,order}=req.body
    try {
        let exist=await CategoryModel.findOne({name})
        let notUnique=await CategoryModel.findOne({order})
        if(exist){
            res.send({
                msg:"Already Exist",
                status:res.statusCode
            })
        }
        else{
            let data=new CategoryModel(req.body)
                await data.save()
                res.send({
                    msg:"Category Added Successfully",
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

exports.getCategory=async(req,res)=>{
    let {page}=req.query
    try {
        if(page){
            let data=  await CategoryModel.find().skip((page-1)*12).limit(12)
            res.send({
                msg:"Data Archeived Successfully",
                data,
                status:res.statusCode
            })
        }else{

            let data=await CategoryModel.aggregate([
                {
                    $lookup:{
                        from:"products",
                        localField:"_id",
                        foreignField:"category",
                        as:"products"
                    }
                }
            ])
            res.send({
                msg:"Data Archeived Successfully",
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

exports.getCategoryData=async(req,res)=>{
    let {id}=req.params
    let {page}=req.query
    const objectId=new mongoose.Types.ObjectId(id) 
    try {
        if(page){

            let data=await CategoryModel.aggregate([
                {
                    $match: {
                        _id:objectId
                    }
                },{
                    $lookup:{
                        from:"products",
                        localField:"_id",
                        foreignField:"category",
                        as:"products"
                    }
                }
            ]).skip((page-1)*12).limit(12)
            res.send({
                msg:"Data Archeived Successfully",
                data,
                status:res.statusCode
            })
        }else{
            let data=await CategoryModel.aggregate([
                {
                    $match: {
                        _id:objectId
                    }
                },{
                    $lookup:{
                        from:"products",
                        localField:"_id",
                        foreignField:"category",
                        as:"products"
                    }
                }
            ])
            res.send({
                msg:"Data Archeived Successfully",
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

exports.editCategoryData=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await CategoryModel.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
            msg:"Data Updated Successfully",
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

exports.deleteCategory=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await CategoryModel.findByIdAndDelete(id)
        res.send({
            msg:"Data Has Been Removed Successfully",
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

exports.searchCategory=async(req,res)=>{
    let {name}=req.params
    try {
        let data=await CategoryModel.find({ name: { $regex: `^${name}`, $options: 'i' } })
        res.send({
            msg:"Data Archeived Successfully",
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