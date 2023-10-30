const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};

const CategorySchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    order:{
        type:Number,
        require:true,
        unique:true
    },
    slug:{
        type:String,
        require:true
    },
    isChecked:{
        type:Boolean,
        default:false
    }
},options)

const CategoryModel=mongoose.model("category",CategorySchema)
module.exports=CategoryModel
