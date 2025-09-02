import { createProduct,deleteProducts,getProducts, getProductsID, updateProduct } from "../controllers/productController.js";
import express from "express";

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProducts);
productRouter.delete("/:productId",deleteProducts);
productRouter.put("/:productId",updateProduct);
productRouter.get("/:productId",getProductsID);

export default productRouter;