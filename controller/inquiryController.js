const { EMAIL, PASSWORD } = require("../config/pass");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { ContactModel } = require("../model/contactModel");


exports.contact = async (req,res) => {
  let config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter =await nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Flourish Creations Private Limited",
      link: "https://www.teamflourish.co/home",
    },
  });
  let response = {
    body: {
      name: "SR Enterprise",
      intro: "Your Message Arrived!",
      table: {
        data: [
          {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            Details: req.body.message,
          },
        ],
      },
    },
  };
  let mail = MailGenerator.generate(response);
  // siddhivinayakgranules@gmail.com 
    let message = {
      from: EMAIL,
      to: "srwater031987@gmail.com",
      subject: "Contact form",
      html: mail,
    };
    try {
       await transporter.sendMail(message)
       let length=await ContactModel.countDocuments()
       let data= ContactModel({...req.body,inquiry_number: length+1})
        await data.save()
            res.send({
                msg:"Message Sent Successfully",
                data,
                status:res.statusCode,
            })
    } catch (error) {
        res.send({
            msg:error.message,
            error
        })
    }
};


exports.getInquiry=async(req,res)=>{
  let {page}=req.query
  try {
    if(page){
      let data=  await ContactModel.find().sort({ createdAt: -1 }).skip((page-1)*12).limit(12)
      res.send({
        msg:"Data Archieved Successfully",
        data,
        status:res.statusCode
      })
    }else{

      let data=await ContactModel.find()
      res.send({
        msg:"Data Archieved Successfully",
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


exports.deleteInquiry = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await ContactModel.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).send({
        msg: "Inquiry not found",
        status: res.statusCode
      });
    }
    res.send({
      msg: "Inquiry deleted successfully",
      data,
      status: res.statusCode
    });
  } catch (error) {
    res.send({
      msg: error.message,
      error
    });
  }
};

exports.getInquiryDetail=async(req,res)=>{
  let  {id}=req.params
  try {
    let data=await ContactModel.findById(id)
    res.send({
      msg:"Data Archieved Successfully",
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

exports.searchInquiry=async(req,res)=>{
  let  {name}=req.params
  try {
    let data=await ContactModel.find({ "inquiry_number":name })
    res.send({
      msg:"Data Archieved Successfully",
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