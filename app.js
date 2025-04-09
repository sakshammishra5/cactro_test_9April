const express=require('express');
const path=require('path');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
app.use(express.json());
require('dotenv').config();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin:process.env.CLIENT_URL,
    // credentials:true
}))

app.use(require('./routes/auth.route'));
app.use(require('./routes/task.route'));


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Mongodb connected");
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log(err.message);
})