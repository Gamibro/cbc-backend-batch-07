import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function createProduct(req,res) {
   if(!isAdmin(req)){
    res.status(403).json({
        message: "You are not authorized to create a product"
    })
    return;
   }
    try{
        const productData = req.body;
        const product = new Product(productData);
        await product.save();

        res.json({
            message: "Product saved successfully",
            product:product
        })


    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Product is not saved"
            
        })
    }

    
}

export async function getProducts(req,res) {
    
    try{
        const products =  await Product.find();
        res.json(products);
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Products not found"
        })
    }
    
}

export async function deleteProducts(req,res) {
    if(!isAdmin(req)){ //Authorization
        res.status(403).json({
            message: "You are not authorized to delete a product"
        })
    }
    try{
        const productID = req.params.productId; //reads the request parameters from the url
        await Product.deleteOne({
        productID : productID
        })
        res.json({
        message: "Product deleted successfully"
    })

    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Something went wrong during data deletion"
        })

    }
   
    
}

export async function updateProduct(req,res) {
    if(!isAdmin(req)){
        res.status(403).json({
            message: "You are not authorized to update products"
        })
    }
    try{
        const productID = req.params.productId;
        const updatedProduct = req.body;
        await Product.updateOne({
            productID: productID
        },updatedProduct)
    res.json({
        message: "Product updated successfully"
    })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Something went wrong during product updating"
        })
    }
    
}

export async function getProductsID(req,res) {
    try{
        const productID = req.params.productId;
        const product = await Product.findOne({
            productID: productID
        })
        if(product == null){
            res.json({
                message: "Product not found"
            })
            return;
        }else{
            res.json(product);

        }
        

    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Something wrong with the server"
        })

    }
    
    
    
}

