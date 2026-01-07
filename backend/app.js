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



