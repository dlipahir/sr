const { AboutModel } = require("../model/aboutModel")

//                                      POST Controllers

exports.addAbout=async(req,res)=>{
    try {
        let exist=await AboutModel.countDocuments()
        if(exist==1){
            res.send({
                msg:"About Page Already Exist Can't add another",
                status:res.statusCode
            })
        }else{
            let data=AboutModel(req.body)
            await data.save()
            res.send({
                msg:"About Page Added Successfully",
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

exports.editAbout=async(req,res)=>{
    let {id}=req.params
    try{
        let data=await AboutModel.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
            msg:"About Page Updated Successfully",
            data,
            status:res.statusCode
        })
    }catch (error) {
        res.send({
            msg:error.message,
            error,
            status:res.statusCode
        })
    }
}

//                                 GET Controllers


exports.getAbout=async(req, res) => {
    try {
        let data=await AboutModel.find()
        res.send({
            msg:"About Page Archieved Successfully",
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

exports.getAboutDetail=async(req,res)=>{
    let {id}=req.params
    try {
        let data=await AboutModel.findById(id)
        res.send({
            msg:"Detalis Archieved Successfully",
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
 
