const { BroucherModel } = require("../model/broucherModel")

exports.addData=async(req,res)=>{
    let {name}=req.body
    try {
        let exist=await BroucherModel.findOne({name})
        if(exist){
            res.send({
                msg:"Already Exist",
                status:res.statusCode
            })
        }else{
            let data=await BroucherModel(req.body)
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

exports.getData=async(req,res)=>{
    let {page}=req.query
    
    try {
        if(page){
            let data=  await BroucherModel.find().skip((page-1)*12).limit(12)
            res.send({
                msg:"Data Archeived Successfully",
                data,
                status:res.statusCode
            })
        }else{

            let data=await BroucherModel.find()
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

exports.getDetail=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await BroucherModel.findById(id)
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

exports.deleteData=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await BroucherModel.findByIdAndDelete(id)
        res.send({
            msg:"Data Deleted",
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

exports.editData=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await BroucherModel.findByIdAndUpdate(id,req.body,{new:true})
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

exports.searchBroucher=async(req,res)=>{
    let  {name}=req.params
    try {
      let data=await BroucherModel.find({ name: { $regex: `^${name}`, $options: 'i' } })
      res.send({
        msg:"Data Archieved Successfully",
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