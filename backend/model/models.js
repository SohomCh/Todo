
const mongoose = require('mongoose')
mongoose.connnect("mongodb://localhost:27017/")

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String


});

const taskSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},

})

const UserModel=mongoose.model('User',userSchema)
const TaskModel=mongoose.model('Task',taskSchema)
module.exports={
    UserModel:UserModel,
    TasKModel:TaskModel
}

