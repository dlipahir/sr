const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User = require("../model/userModel");

exports.registerController = async (req, res) => {
    const {  password, email } = req.body;
    try {
      if (email) {
        let exist = await User.findOne({ email });
        if (exist) {
          const hashedPassword = await bcrypt.hash(password, 10);
          let data=await User.findByIdAndUpdate(exist._id,{...req.body,password:hashedPassword},{new:true})
          res.send({
            msg:"Password Updated Successfully",
            data,
            status:res.statusCode
          })
        }else{
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
            ...req.body,
            password: hashedPassword,
          });
          await newUser.save();
          if (newUser) {
            return res.send({ msg: "User registered successfully" });
          } else {
            return res.send({ msg: "User registration failed" });
          }
        }
      }
    } catch (error) {
      res.send({ msg: "Try once again to sign up", error: error.message });
    }
  };

  exports.loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
      let data = await User.findOne({ email });
      if (data) {
        bcrypt.compare(password, data.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ _id: data._id }, "shoes",{
              expiresIn:"1h"
            });
            // localStorage.setItem("userId",data._id)
            res.send({
              msg: "User has been logged in successfully",
              token: token,
              userId:data._id,
              data
            });
          } else {
            res.send("Password is incorrect");
          }
        });
      } else {
        res.send("Wrong Cridentials");
      }
    } catch (error) {
      res.send({ msg: "Try again to Log in ", error: error.message });
    }
  };

  exports.getUserData=async(req,res)=>{
    let {id}=req.params
    try {
      let data=await User.findById(id)
      res.send({
        msg:"User Details got Successfully",
        data,
        status:res.statusCode
      })
    } catch (error) {
      res.send({
        msg:error.message,
        error
      })
    }
  }
  exports.editUserData=async(req,res)=>{
    let {id}=req.params
    try {
      let data=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.send({
          msg:"User Details Has Been Updated",
          data,
          status:res.statusCode
        })
    } catch (error) {
      res.send({
        msg:error.message,
        error
      })
    }
  }

  exports.getAllUser=async(req,res)=>{
    let {page}=req.query
    try {
    if(page){
      let data=  await User.find().skip((page-1)*12).limit(12)
      res.send({
        msg:"User Details Has Been Archeived",
        data,
        status:res.statusCode
      })
    }else{
      let data=await User.find()
      res.send({
        msg:"User Details Has Been Archeived",
        data,
        status:res.statusCode
      })
    }
    } catch (error) {
      res.send({
        msg:error.message,
        error
      })
    }
  }

  exports.deleteUser=async(req,res)=>{
    let {id}=req.params
    try {
      const data=await User.findByIdAndDelete(id)
      res.send({
        msg:"User deleted successfully",
        data,
        status:res.statusCode
      })
    } catch (error) {
      res.send({
        msg:error.message,
        error
      })
    }
  }

  exports.searchUser=async(req,res)=>{

    let {name}=req.params
    try {
        let data=await User.find({ name: { $regex: `^${name}`, $options: 'i' } })
        res.send({
            msg:"Users Archived Successfully",
            data,
            status:res.statusCode       
        })
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
}

exports.forgotPassword =async (req,res)=>{
  let {email,password}=req.body
  try {
    let exist=await User.findOne({email})
    
    if(exist){
      const hashedPassword = await bcrypt.hash(password, 10);
      let data=await User.findByIdAndUpdate(exist._id,{...req.body,password:hashedPassword},{new:true})
      res.send({
        msg:"Password Updated Successfully",
        data,
        status:res.statusCode
      })
    }else{
      res.send({
        msg:"User not Registered",
        
        status:res.statusCode
      })
    }
  } catch (error) {
    res.send({
      msg:error.message,
      error
  })
  }
}