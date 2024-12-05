import mongoose from 'mongoose'
import dotenv from 'dotenv'
 
dotenv.config();

const dbConnection =()=>{
    mongoose.connect(process.env.DB!)
    .then(()=>{
        console.log("connected to db")
    }).catch((err)=>{
        console.log("err")
    })
}

export default dbConnection;