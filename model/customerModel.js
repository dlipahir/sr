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
    // product:{
    //     type:mongoose.Types.ObjectId,
    //     ref:"Product",
    //     require:true
    //   },
    productID:{
        type:String,
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
    },
  complaints: [{
    complainDate: {
      type: String,
      required: true
    },
    problem: {
      type: String,
      required: true
    },
    resolveDate: {
      type: String,
      required: false
    }
  }],

  },options)

  const CustomerModel=mongoose.model("customer",customerSchema)

  module.exports={
    CustomerModel
  }