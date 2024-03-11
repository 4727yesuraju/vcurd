import express from "express";
import {config} from 'dotenv';
import { connectToDB } from "./db/connectToDB.js";
config();
import userRoute from './routers/user.routes.js'


const app = express();

app.use(express.json());

app.use("/api/user",userRoute);



const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    connectToDB();
    console.log("Server is running on PORT : ",PORT)
})