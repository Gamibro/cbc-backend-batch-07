import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,   //Gives not null
        unique:true  //Gives unique email
    },
    firstName:{
        type: String,
        required: true
        
    },
    lastName : {
        type : String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    isBlocked : {
        type: Boolean,
        default: false
    },
    isEmailVerified:{
        type: Boolean,
        default: false
    },
    image : {
        type: String,
        default: "https://www.providers.com"
    }
})
const User = mongoose.model("User",userSchema);
export default User;