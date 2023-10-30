const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};
const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }

},options)

const BlogModel=mongoose.model("Blog",blogSchema)
module.exports={BlogModel}