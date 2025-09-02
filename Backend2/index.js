import express from "express";
import mongoose  from "mongoose";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"
import productRouter from "./routes/productRouter.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(cors());

//Connection string of mongoose
const connectionString = process.env.MONGOOSE_URI;
mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected successfully");

    }
    
).catch(
    ()=>{
        console.log("Database connection failed");
    }
)


app.use(
    (req, res, next)=>{
        let token = req.header("Authorization");
        if(token !=null){
            token = token.replace("Bearer ", "");
            console.log(token);
            jwt.verify(token,process.env.JWT_SECRET, (err,decoded)=>{
                if(decoded == null){
                    res.json({
                        message:"Token is invalid.Login again"
                    })
                    return;
                }else{
                    console.log(decoded);
                    req.user = decoded;
                }
            })
        }
        next();
    }
)


//Create a collection and determine the form of the collection

//This connects the backend with the collection.




//To connect the backend and the database

app.use(express.json()); // This organizes the requests and send them to the relevant endpoint. Act as the middleman.
//The backend connects to the internet and handles requests and give responses in json
//It uses serveral endpoints Get, Post, Put, Delete



//Connect routes to the main route

app.use("/api/user",userRouter);
app.use("/api/product",productRouter);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})



