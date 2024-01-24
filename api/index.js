import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { error } from 'console';
dotenv.config();

const app = express();


mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("Connected to mongoDB");
}).catch((error) => {
    console.log(error);
})

app.listen(3000, () => {
    console.log("Server is runnning on port 3000");
})