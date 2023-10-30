
const fileHandler=async(req,res)=>{
    console.log(req.body);
    console.log(req.files);
try {
    res.send(req.body)
} catch (error) {
    res.send({
        msg:error.message,
        error
    })
}
}
module.exports={fileHandler}