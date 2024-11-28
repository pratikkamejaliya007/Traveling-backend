import mongoose from "mongoose";

const db = mongoose.connect("mongodb://localhost:27017/traveling") 
.then(()=> console.log("MongoDb Connected"))
.catch((err)=> console.error(err))

export default db;