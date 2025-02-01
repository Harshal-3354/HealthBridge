const express=require("express");
const app=express();
const mongoose=require("mongoose");

const MONGO_URL='mongodb://127.0.0.1:27017/healthbridge';

main()
    .then(()=>console.log("DB connected Successfully"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.get("/",(req,res)=>{
    res.send("Hi, I am a root");
});


app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});