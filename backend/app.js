// console.log("pooju");
// const math = require('./math')
// console.log(math.add(3,3))

// const {add,sub,mul,div}=require('./math')
// console.log(add(3,3))

// console.log(math.func([1,2,3]))

// console.log(math.filter([1,2,3,4]))


// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end("Hbay thara")
// })
// const port=8000
// server.listen(port,()=>{
//     console.log(`my server is running on http://localhost:${port}`)
// });


// const express = require('express');
// const app = express();

// const students=[
//     {id:1,name:"a"},
//     {id:2,name:"b"}
//   ]


// app.get('/student', (req, res) => {
//   res.json(students)
// });



// app.get("/singledate/:id", (req, res) => {
//     const { id } = req.params;
//     if (id) {
//       const result = students.find((item) => item.id === Number(id));
//       if (result) {
//         res.json(result);
//       } else {
//         res.status(404).json({ message: "Student not found" });
//       }
//     } else {
//       res.json(students);
//     }
//   });
  
//   const PORT = 8000;
  
//   app.listen(PORT, () => {
//     console.log(`My server is running at http://localhost:${PORT}/singledate?id=1`);
  // });


// const operation=require('./math')
// const express=require("express");
// const app=express();
// app.use(express.json())
// const mongoose=require("mongoose")
// const {v4:uuidv4}=require("uuid");
// const PORT=8001;
//   const mongourl="mongodb://localhost:27017/p";
//   mongoose
//   .connect(mongourl)
//   .then(()=>{
//     console.log("Db Connect");
//     app.listen(PORT,()=>{
//       console.log("My server is running");
//     })
//   })


//   const expenseSchema=new mongoose.Schema({
//     id:{type:String,required:true,unique:true},
//     title:{type:String,required:true},
//     amount:{type:Number,required:true},
//   })
 
//   const expenseModel=mongoose.model("expense-tracker",expenseSchema);

//   // app.get("/student",(req,res)=>{
    
//   // })

//   app.post("/api/expenses",async (req,res)=>{
//     const {title,amount}=req.body;
//     const newExpense=new expenseModel({
//       id:uuidv4(),
//       title:title,
//       amount:amount,
//     });
//     const savedExpense=await newExpense.save();
//     res.status(200).json(savedExpense);
//   });

const express=require("express")
const app=express()
app.use(express.json())
const mongoose=require("mongoose")
const {v4:uuidv4}=require("uuid")

const port=8001

// "mongodb://localhost:27017/p"

const mongurl="mongodb+srv://poojamarudhu:pooja123@cluster0.h0m7y.mongodb.net/pooj"

mongoose
  .connect(mongurl)
  .then(()=>{
    console.log("Db connected")
    app.listen(port,()=>{
        console.log("My server is running")
    })
  })

  const expenseSchema=new mongoose.Schema({
    id:{type:String ,required:true,unique:true},
    title:{type:String,required:true},
    amount:{type:Number,required:true},
});


const expenseModel=mongoose.model("expens-tracker",expenseSchema);//collection name,schema

app.post("/api/expense",async(req,res)=>{
    const{title,amount}=req.body;
    const newExpense=new expenseModel({
        id:uuidv4(),
        title:title,
        amount:amount,
     });
     const savedExpense=await newExpense.save();
     res.status(200).json(savedExpense);
});

app.get("/api/expense",async(req,res)=>{
  const data = await expenseModel.find({});
  res.json(data)
})


app.get("/api/expense/:amount", async (req, res) => {
  const { amount } = req.params;
  const expense = await expenseModel.findOne({ amount : amount }); 
  res.json(expense)
  //  console.log(req.params)
 
});

app.put("/api/expense/:title", async (req, res) => {
  const{title}=req.params
  const expense = await expenseModel.updateOne({title:title},{ $set:{amount : 500}}); 
  res.json(expense)
  
 
});


app.delete("/api/expense/:id", async (req, res) => {
  const{id}=req.params
  const expense = await expenseModel.deleteOne({id:id}); 
  res.json(expense)
  
 
});
