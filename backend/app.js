const { middleware } = require("./middelwares/middlewares");
const{UserModel,TaskModel}=require("./model/models");



const express=require('express')

const app = express()

app.use(express.json())


PORT=3000

app.get("/",(req,res)=>{
    res.send("Hello")

})

app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})





app.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
    let user =await UserModel.create({
        email,
        password
    })
    res.json({
        id:user._id,
        messsage:"You have signed up"
    })
})

app.post("/signin",async(req,res)=>{
    const{email,password}=req.body
    let user=await UserModel.findOne({
        email,
        passsword
    })
    if(!user){
        res.status(403).json({
            message: "Invalid Credentails"
        })
        return;
    }

    const token = jwt.sign({
        userId:user._id
    },"1234kuch_bhi_karo_mere_yar")

    res.json({
        token:token,
        message:"You have signed up"
    })
})


app.post("/todo",middleware,async(req,res)=>{
    const{title,description}=req.body
    const task= await TaskModel.create({
        title:title,
        description:description
    })
    req.json({
        message:"todo created"
    })
})

app.delete("/todo/:todoId",middleware,async(req,res)=>{
    const{todoId}=req.params.todoId;
    await TaskModel.delete({
        _id:todoId

    })
    res.json({
        message:"Task deleted"
    })
})

app.get("todos",middleware,async(req,res)=>{
    const todos=await TaskModel.findone({
        userId:req.userId

    })
    res.json({
        todos
    })
})

