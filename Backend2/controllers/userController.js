import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

export function createUser(req,res){
    if(req.user == null){
        res.json({
            message: "User is not logged in"
        })
        return;
    }
    if(req.user.role != "admin"){
        res.json({
            message: "The user must be an admin to create a student"
        })
        return;
    }
    const hashedPassword = bcrypt.hashSync(req.body.password,10);

    const user = new User(
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
            role: req.body.role
        }
        
    )

    user.save().then(
        ()=>{
            res.json({
                message: "User created successfully"
            })

        }
    ).catch(
        ()=>{
            res.json({
                message: "User not created"
            })
        }
    )
    
}

export function loginUser(req,res){
    User.findOne(
        {
            email: req.body.email
        }
    ).then(
        (user) =>{
            if(user == null){
                res.json({
                    message: "user is not found"
                })
            }else{
                const isPasswordMatch = bcrypt.compareSync(req.body.password,user.password);
                if(isPasswordMatch){
                    const token = jwt.sign(
                        {
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                            isEmailVerified: user.isEmailVerified
                        },
                        process.env.JWT_SECRET
                    )
                    res.json({
                        message:"User logged in successfully",
                        token: token,
                        user:{
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                            isEmailVerified: user.isEmailVerified
                        }
                    })
                }else{
                    res.json({
                        message: "Invalid email or password"
                    })
                }
            }
        }
    )
}

export function isAdmin(req,res){
    if(req.user == null){
        return false;
    }
    if(req.user.role != "admin"){
        return false;
    }
    return true;
}


