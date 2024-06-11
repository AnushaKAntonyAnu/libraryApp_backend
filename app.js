const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {librarymodel}=require("./models/addbook")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anusha:anusha13@cluster0.hyxpaoy.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input =req.body
    let libary=new librarymodel(input)
    libary.save()
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    res.send("search")
})

app.get("/view",(req,res)=>{
     librarymodel.find().then(
             (data)=>{
                res.json(data)
             }
     ).catch(
        (error)=>{
            res.json(error)
        }
     )
})

app.get("/delete",(req,res)=>{
    res.send("view")
})

app.listen(8081,()=>{
    console.log("server started")
})