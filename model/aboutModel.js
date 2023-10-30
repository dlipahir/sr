const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};
const aboutSchema= new mongoose.Schema({
    subtitle:{
        type:String,
        require:true,
    },
    content:{
        type:String,
        require:true
    },
    choose_subtitle:{
        type:String,
        require:true
    },
    tagline_1:{
        type:String,
        require:true
    },
    tagline_2:{
        type:String,
        require:true
    },
    tagline_3:{
        type:String,
        require:true
    },
    tagline_4:{
        type:String,
        require:true
    },
},options)

const AboutModel=mongoose.model("About",aboutSchema)

module.exports={AboutModel}
