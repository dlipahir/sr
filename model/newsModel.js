const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};
const newsSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
    }
},options)

const NewsModel=mongoose.model("News&Event",newsSchema)

module.exports={NewsModel}