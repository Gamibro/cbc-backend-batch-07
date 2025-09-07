import { PiShoppingCartBold } from "react-icons/pi";
import { SiHackthebox } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineRateReview } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Link, Route, Routes } from "react-router-dom";
import AdminProductPage from "../admin/adminProductPage";
import AdminAddProductPage from "../admin/adminAddProductPage";
import AdminUpdateProductPage from "../admin/adminUpdateProductPage";

export default function AdminPage() {
  return (
    <div className="w-full h-full flex   ">
      {/* Admin Sidebar */}
      <div className="w-[300px] h-full flex flex-col p-4 gap-4 bg-gradient-to-b from-primary/70 to-white/60 backdrop-blur-md border-r border-black/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]">
        {/* Admin Panel header */}
        <div className="relative w-full overflow-hidden rounded-2xl p-3 bg-gradient-to-r from-accent to-accent/70 shadow-lg ring-1 ring-white/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/90 ring-2 ring-white/60 shadow-md">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-widest font-bold text-white/90">
                ADMIN PANEL
              </p>
              <p className="text-[11px] text-white/80">Crystal Beauty Clear</p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/20 text-white/90">
              CBC
            </span>
          </div>
          {/* soft glow */}
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl"></div>
        </div>

        {/* Nav */}
        <nav className="w-full space-y-2">
           <Link
            to="/admin/"
            className="group w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white/60 ring-1 ring-black/5 hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-[1px] shadow-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Dashboard"
          >
            <span className="shrink-0 grid place-content-center w-9 h-9 rounded-lg bg-accent/10 group-hover:bg-white/20 transition-all">
              <RxDashboard className="text-xl" />
            </span>
            <span className="flex-1 text-left">Dashboard</span>
            <span className="opacity-0 group-hover:opacity-100 text-[11px] font-medium transition-opacity">
              View
            </span>
          </Link>
          <Link
            to="/admin/products"
            className="group w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white/60 ring-1 ring-black/5 hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-[1px] shadow-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Products"
          >
            <span className="shrink-0 grid place-content-center w-9 h-9 rounded-lg bg-accent/10 group-hover:bg-white/20 transition-all">
              <PiShoppingCartBold className="text-xl" />
            </span>
            <span className="flex-1 text-left">Products</span>
            <span className="opacity-0 group-hover:opacity-100 text-[11px] font-medium transition-opacity">
              Manage
            </span>
          </Link>

          <Link
            to="/admin/orders"
            className="group w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white/60 ring-1 ring-black/5 hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-[1px] shadow-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Orders"
          >
            <span className="shrink-0 grid place-content-center w-9 h-9 rounded-lg bg-accent/10 group-hover:bg-white/20 transition-all">
              <SiHackthebox className="text-xl" />
            </span>
            <span className="flex-1 text-left">Orders</span>
            <span className="opacity-0 group-hover:opacity-100 text-[11px] font-medium transition-opacity">
              Track
            </span>
          </Link>

          <Link
            to="/admin/reviews"
            className="group w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white/60 ring-1 ring-black/5 hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-[1px] shadow-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Reviews"
          >
            <span className="shrink-0 grid place-content-center w-9 h-9 rounded-lg bg-accent/10 group-hover:bg-white/20 transition-all">
              <MdOutlineRateReview className="text-xl" />
            </span>
            <span className="flex-1 text-left">Reviews</span>
            <span className="opacity-0 group-hover:opacity-100 text-[11px] font-medium transition-opacity">
              Moderate
            </span>
          </Link>

          <Link
            to="/admin/users"
            className="group w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white/60 ring-1 ring-black/5 hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-[1px] shadow-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Users"
          >
            <span className="shrink-0 grid place-content-center w-9 h-9 rounded-lg bg-accent/10 group-hover:bg-white/20 transition-all">
              <HiOutlineUserGroup className="text-xl" />
            </span>
            <span className="flex-1 text-left">Users</span>
            <span className="opacity-0 group-hover:opacity-100 text-[11px] font-medium transition-opacity">
              Manage
            </span>
          </Link>
        </nav>

        {/* Footer mini-help / space filler */}
        <div className="mt-auto text-[11px] text-slate-900/80 px-1">
          <p>
            Tip: Use <kbd className="px-1 py-[2px] rounded bg-black/5">Tab</kbd>{" "}
            to move focus.
          </p>
        </div>
      </div>

      <div className="w-[calc(100%-300px)] border-[2px]  border-accent bg-primary rounded-[20px] overflow-hidden h-full ">
        <div className=" w-full h-full max-h-full overflow-y-scroll">
        <Routes path="/">
          <Route path="/" element={<h1>Dashboard</h1>}></Route>
          <Route path="/products" element={<AdminProductPage/>}></Route>
          <Route path="/add-product" element={<AdminAddProductPage/>}></Route>
          <Route path="/update-product" element={<AdminUpdateProductPage/>}></Route>
          <Route path="/orders" element={<h1>Orders</h1>}></Route>
          <Route path="/reviews" element={<h1>Reviews</h1>}></Route>
          <Route path="/users" element={<h1>Users</h1>}></Route>
          <Route path="/test" element={<h1>Test</h1>}></Route>
        </Routes>
        </div>
       
      </div>
    </div>
  );
}
