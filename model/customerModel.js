const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: "modifiedAt",
    },
  };

  const customerSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    Mobile:{
        type:String,
        require:true
    },
    Invoice:{
      type:String,
      require:true
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
        require:true
      },
      DoPurchase:{
        type:String,
        require:true
    },
    DOExpiry:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:false
    },
    Message:{
        type:String,
        require:false
    }

  },options)

  const CustomerModel=mongoose.model("customer",customerSchema)

  module.exports={
    CustomerModel
  }