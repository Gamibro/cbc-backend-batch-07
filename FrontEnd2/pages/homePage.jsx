import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./productPage";

export default function HomePage(){
    
    return(
        <div className="w-full h-full bg-primary">
            <Header/>
            <Routes path = "/">
                <Route path="/*" element={<h1>Home</h1>}></Route>
                <Route path="/product" element={<ProductPage/>}></Route>
                <Route path="/about-Us" element={<h1>About Us</h1>}></Route>
                <Route path="/contact" element={<h1>Contact</h1>}></Route>
            </Routes>

        </div>
    )
}