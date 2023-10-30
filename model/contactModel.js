const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    inquiry_number:{
        type:Number,
        require:true
    },
    sales_person:{
        type:String
    }
},options)

const ContactModel=mongoose.model("Contact",contactSchema)

module.exports={ContactModel}