const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    order:{
        type:Number,
        require:true,
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category",
        require:true
    },
    image:{
        type:Array
    },
    slug:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    specification:{
        type:Object
    },
    price:{
        type:String
    }
},options)


const ProductModel=mongoose.model("Product",productSchema)

module.exports=ProductModel
