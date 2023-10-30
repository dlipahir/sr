const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
    createdAt: true,
    updatedAt: "modifiedAt",
    },
};
const broucherScema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    file:{
        type:String,
        require:true
    }
},options)

const BroucherModel=mongoose.model("Broucher",broucherScema)

module.exports={BroucherModel}