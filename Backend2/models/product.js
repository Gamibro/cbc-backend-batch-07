import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId:{
        type: String,
        required: true,
        unique: true
    },
    productName:{
        type: String,
        required: true
        
    },
    altNames:{
        type:[String],
        required:true,
        default:[]
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type:[String],
        required: true,
        default: []
    },
    price:{
        type: Number,
        required: true
    },
    labelledPrice:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }

})
const Product = mongoose.model("Product",productSchema);
export default Product;