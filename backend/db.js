import mongoose from "mongoose";

// mongodb+srv://pratikkamejaliya6157:<db_password>@cluster0.c12o5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const db = mongoose.connect("mongodb+srv://pratikkamejaliya6157:ovFhjjqO4l8v0ToJ@cluster0.c12o5.mongodb.net/?retryWrites=true&w=majority&appName=traveling") 
.then(()=> console.log("MongoDb Connected"))
.catch((err)=> console.error(err))

export default db;