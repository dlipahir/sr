const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};
const homeSchema=new mongoose.Schema({
    top_heading:{
        type:String,
        require:true
    },
    top_content:{
        type:String,
        require:true
    },
    mission:{
        type:String,
        require:true
    },
    values:{
        type:String,
        require:true
    },
    vision:{
        type:String,
        require:true
    },
    products:{
        type:Array,
        require:true
    },
    bottom_heading:{
        type:String,
        require:true
    },
    bottom_image:{
        type:String,
        require:true
    },
    bottom_content:{
        type:String,
        require:true
    },
    contact_heading:{
        type:String,
        require:true
    },
    contact_content:{
        type:String,
        require:true
    }
},options)

const HomeModel=mongoose.model("Home",homeSchema)

module.exports={HomeModel}
