import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ——— unchanged logic ———
  const validate = () => {
    if (email == "" || password == "") {
      toast.error("Please fill all the fields");
      return false;
    }
    return true;
  };

  // ——— unchanged logic ———
  const handleLogin = async () => {
    try {
      if (validate() == false) return;

      const response = await axios.post(import.meta.env.VITE_BASE_URL + "/api/user/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.token);
      console.log(response.data.user);

      if (response.data.user.role == "admin") navigate("/admin");
      else navigate("/");
      toast.success("Login successful");
    } catch (e) {
      console.error(e);
      toast.error("Login failed");
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/login2.jpg')" }}
      />

      {/* Soft vignette + brand-tinted glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 10% 10%, rgba(255,0,102,0.15) 0%, rgba(255,0,102,0.06) 40%, transparent 70%), radial-gradient(55% 55% at 100% 100%, rgba(0,0,0,0.18) 0%, transparent 60%)",
        }}
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex min-h-screen items-center justify-end md:justify-between px-6 md:px-10">

        {/* ===== Left Title / Brand Details (new) ===== */}
        <div className="hidden md:flex flex-col max-w-[520px] gap-4 text-left select-none">
          {/* soft orb behind the title */}
          <div
            aria-hidden="true"
            className="absolute -z-10 -left-6 top-1/2 -translate-y-1/2 h-[380px] w-[380px] opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,0,102,0.35) 50%, transparent 60%)",
            }}
          />
          {/* logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="CBC logo"
              className="h-12 w-12 rounded-2xl object-contain shadow"
            />
            <span
              className="text-sm font-semibold tracking-[0.22em]"
              style={{ color: "var(--color-accent)" }}
            >
              CRYSTAL BEAUTY CLEAR
            </span>
          </div>

          {/* big headline */}
          <h2
            className="text-4xl lg:text-5xl font-extrabold drop-shadow-sm leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Beauty, but <span style={{ color: "var(--color-accent)" }}>Crystal&nbsp;Clear</span>
          </h2>

          {/* subcopy */}
          <p className="text-base lg:text-lg font-medium text-white/90 max-w-[46ch]">
            Gentle, clinically-inspired skincare. Sign in to manage routines, bookings,
            and personalized care.
          </p>

          {/* chips / badges */}
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "Dermatologist-inspired",
              "Secure Login",
              "Fast & Lightweight",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/20 text-white border border-white/30 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ===== Right Glass Panel (unchanged) ===== */}
        <div className="relative w-full max-w-[540px]">
          <div className="absolute -inset-1 rounded-[28px]" />
          <div className="relative rounded-[26px] overflow-hidden">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0.12) 100%)",
                maskImage:
                  "radial-gradient(140% 100% at 50% 0%, black 40%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.6'/></svg>\")",
              }}
            />

            <div className="relative p-7 md:p-8 ring-1 ring-white/40 shadow-2xl">
              {/* top bar with LOGO (already shown) */}
              <div className="mb-5 flex items-center gap-3">
                
                <div>
                  <p
                    className="text-xs tracking-[0.22em] font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    CRYSTAL BEAUTY CLEAR
                  </p>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900/90">
                    Welcome back ✨
                  </h1>
                </div>
              </div>

              {/* Inputs */}
              <div className="mt-3 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-gray-800/90">
                    Email
                  </span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="w-full h-11 rounded-2xl bg-white/90 text-[15px] font-medium px-4 outline-none border border-white/60 focus:border-transparent focus:ring-2"
                    style={{
                      "--tw-ring-color": "var(--color-accent)",
                      boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
                      color: "#111",
                    }}
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-gray-800/90">
                    Password
                  </span>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full h-11 rounded-2xl bg-white/90 text-[15px] font-medium px-4 outline-none border border-white/60 focus:border-transparent focus:ring-2"
                    style={{
                      "--tw-ring-color": "var(--color-accent)",
                      boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
                    }}
                    placeholder="••••••••"
                  />
                </label>

                <button
                  onClick={handleLogin}
                  className="mt-2 w-full h-11 rounded-2xl text-sm font-semibold text-white shadow-lg transition-transform active:scale-[0.99]"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-accent) 0%, #d40056 100%)",
                    boxShadow:
                      "0 10px 28px rgba(255,0,102,0.35), inset 0 1px 0 rgba(255,255,255,0.35)",
                  }}
                >
                  Login
                </button>

                <div className="flex items-center justify-between text-xs text-black font-semibold pt-1">
                  <span className="hover:underline cursor-pointer">Forgot password?</span>
                  <span>
                    New here?{" "}
                    <b style={{ color: "var(--color-accent)" }} className="cursor-pointer">
                      Create account
                    </b>
                  </span>
                </div>
              </div>

              {/* small brand cue */}
              <div className="mt-6 flex items-center gap-2">
                <div
                  className="h-6 w-6 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #fff 0%, #ffe6f0 40%, var(--color-accent) 100%)",
                  }}
                />
                <p className="text-[12px] tracking-wide text-black font-semibold">
                  Powered by <b style={{ color: "var(--color-accent)" }}>CBC</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ===== end right panel ===== */}
      </div>

      {/* gentle sparkle */}
      <div
        className="pointer-events-none absolute right-6 top-6 h-20 w-20 opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,0,102,0.35) 55%, transparent 60%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
