import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="w-full h-[100px] bg-white/100 shadow-lg relative flex items-center justify-center text-sm gap-[20px] text-secondary font-semibold">
            <img src="/logo.jpg" alt="CBC Logo" className="max-h-full w-[100px]  object-contain absolute top-[0px] left-[20px]" />
            <Link to='/' className="hover:text-accent hover:underline">Home</Link>
            <Link to='/product' className="hover:text-accent hover:underline">Product</Link>
            <Link to='/about-Us' className="hover:text-accent hover:underline">AboutUs</Link>
            <Link to='/contact' className="hover:text-accent hover:underline">Contact</Link>
        </div>
    )
}