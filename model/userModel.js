const mongoose=require("mongoose")
const options = {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: "modifiedAt",
    },
  };
const userSchema= new mongoose.Schema({
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    name:{
      type:String,
      default:"unKnown"
    },
    image:{
      type:String,
    },
    isChecked:{
      type:Boolean,
      default:false
    }
},options)

const User =mongoose.model("User",userSchema)
module.exports= User
