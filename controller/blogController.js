const { BlogModel } = require("../model/blogModel")

exports.addBlog=async(req,res)=>{
    const {title}=req.body
    try {
        const exist=await BlogModel.findOne({title})
        if(exist){
            res.send({
                msg:"This Blog already exists Try Something New...",
                data:req.body,
                status:res.statusCode
            })
        }
        else{
            let data=await BlogModel(req.body)
            await data.save()
            res.send({
                msg:"Blog Added Successfully",
                data,
                status:res.statusCode
            })
        }
        
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
}

exports.getBlog=async(req,res)=>{
    let {page}=req.query
    try {
        if(page){
            let data=  await BlogModel.find().skip((page-1)*12).limit(12)
            res.send({
                msg:"Blogs Archieved Successfully",
                data,
                status:res.statusCode
            })
        }else{
            let  data=await BlogModel.find()
            res.send({
                msg:"Blogs Archieved Successfully",
                data,
                status:res.statusCode
            })
        }
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
}

exports.getBlogDetail=async(req,res)=>{
    const {id}=req.params
    try {
        let data=await BlogModel.findById(id)
        res.send({
            msg:"Blogs Archieved Successfully",
            data,
            status:res.statusCode
        })
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
}

exports.deleteBlog=async(req,res)=>{
    const {id}=req.params
    try {
        let data=await BlogModel.findByIdAndDelete(id)
        res.send({
            msg:"Blog deleted Successfully",
            data,
            status:res.statusCode
        })
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
}

exports.editBlog=async(req,res)=>{
    const {id}=req.params
    try {
        let data=await BlogModel.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
            msg:"Blog Edited Successfully",
            data,
            status:res.statusCode,
        })
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
}

exports.searchBlog=async(req,res)=>{

    let {name}=req.params
    try {
        let data=await BlogModel.find({ title: { $regex: `^${name}`, $options: 'i' } })
        res.send({
            msg:"Users Archived Successfully",
            data,
            status:res.statusCode       
        })
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
}