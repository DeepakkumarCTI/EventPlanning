import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  UserRound,
  LogOut,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import Brand from "../Brand";
import { useAuth } from "../../context/AuthContext";

const links = [
  ["Home", "/"],
  ["Celebrations", "/celebrations"],
  ["AI Planner", "/ai-planner"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [cartCount, setCartCount] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("eventara_cart_v3") || "[]"
      ).length;
    } catch {
      return 0;
    }
  });

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // ------------------------------------------
  // CART SYNC
  // ------------------------------------------
  useEffect(() => {
    const sync = () => {
      try {
        setCartCount(
          JSON.parse(
            localStorage.getItem("eventara_cart_v3") || "[]"
          ).length
        );
      } catch {
        setCartCount(0);
      }
    };

    window.addEventListener("eventara-cart-updated", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("eventara-cart-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // ------------------------------------------
  // MOBILE NAVIGATION
  // ------------------------------------------
  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/95 shadow-sm backdrop-blur-xl">

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div className="flex h-[72px] w-full items-center gap-3 px-2">

        {/* =================================================
            BRAND
        ================================================== */}
        <div className="shrink-0">
          <Brand />
        </div>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}
        <nav className="hidden items-center gap-1 lg:flex">

          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-orange-50 text-orange-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* MY REQUESTS */}
          {user && (
            <NavLink
              to="/my-requests"
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-violet-50 text-violet-700 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              My Requests
            </NavLink>
          )}
        </nav>

        {/* =================================================
            RIGHT SIDE ACTIONS
        ================================================== */}
        <div className="ml-auto flex items-center gap-1.5">

          {/* =================================================
              CART
          ================================================== */}
          <Link
            to="/cart"
            aria-label="Cart"
            title="Cart"
            className="group relative rounded-xl p-2 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-orange-600"
          >
            <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />

            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 animate-pulse items-center justify-center rounded-full bg-orange-500 px-1 text-[9px] font-black text-white shadow-md">
                {cartCount}
              </span>
            )}
          </Link>

          {/* =================================================
              ADMIN LOGIN
          ================================================== */}
          <Link
            to="/admin/login"
            aria-label="Admin Login"
            title="Admin Login"
            className="
              group relative hidden items-center gap-2
              overflow-hidden rounded-xl
              border border-violet-200
              bg-gradient-to-r from-violet-50 to-indigo-50
              px-3 py-2
              text-sm font-semibold text-violet-700
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-violet-300
              hover:shadow-md
              sm:flex
            "
          >
            {/* Animated shine */}
            <span
              className="
                pointer-events-none absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/70
                to-transparent
                transition-transform duration-700
                group-hover:translate-x-full
              "
            />

            {/* Shield */}
            <span
              className="
                relative flex h-7 w-7
                items-center justify-center
                rounded-lg bg-violet-100
                transition-all duration-300
                group-hover:scale-110
                group-hover:rotate-3
              "
            >
              <ShieldCheck
                className="
                  h-4 w-4
                  text-violet-600
                  transition-all duration-300
                  group-hover:scale-110
                "
              />

              {/* Pulse dot */}
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-ping rounded-full bg-violet-500 opacity-60" />

              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-violet-500" />
            </span>

            {/* Admin text */}
            <span className="relative hidden xl:block">
              Admin
            </span>

            <ChevronRight
              className="
                relative h-4 w-4
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* =================================================
              CUSTOMER USER
          ================================================== */}
          {user ? (
            <div className="hidden items-center gap-2 sm:flex">

              {/* User name */}
              <Link
                to="/my-requests"
                className="
                  hidden max-w-[130px] truncate rounded-xl
                  bg-slate-50 px-3 py-2
                  text-sm font-semibold text-slate-700
                  transition-all duration-300
                  hover:bg-violet-50
                  hover:text-violet-700
                  md:block
                "
              >
                {user.name}
              </Link>

              {/* Logout */}
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="
                  rounded-xl p-2 text-slate-600
                  transition-all duration-300
                  hover:bg-red-50
                  hover:text-red-600
                  hover:rotate-6
                "
                aria-label="Logout"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="
                hidden rounded-xl
                border border-slate-200
                px-3 py-2
                text-sm font-semibold text-slate-700
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-orange-300
                hover:bg-orange-50
                hover:text-orange-600
                sm:block
              "
            >
              Sign in
            </Link>
          )}

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="
              rounded-xl p-2 text-slate-700
              transition-all duration-300
              hover:bg-slate-100
              hover:text-orange-600
              lg:hidden
            "
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {open && (
        <div
          className="
            animate-in slide-in-from-top-2
            border-t border-slate-100
            bg-white px-2 py-3
            shadow-lg duration-200
            lg:hidden
          "
        >
          <div className="grid gap-1">

            {/* =================================================
                CUSTOMER NAV LINKS
            ================================================== */}
            {links.map(([label, path]) => (
              <button
                key={path}
                onClick={() => go(path)}
                className="
                  group flex items-center gap-3
                  rounded-xl px-3 py-3
                  text-left font-semibold text-slate-700
                  transition-all duration-300
                  hover:translate-x-1
                  hover:bg-orange-50
                  hover:text-orange-600
                "
              >
                <Sparkles
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                />

                {label}
              </button>
            ))}

            {/* =================================================
                MY REQUESTS
            ================================================== */}
            {user && (
              <button
                onClick={() => go("/my-requests")}
                className="
                  group flex items-center gap-3
                  rounded-xl px-3 py-3
                  text-left font-semibold text-slate-700
                  transition-all duration-300
                  hover:translate-x-1
                  hover:bg-violet-50
                  hover:text-violet-700
                "
              >
                <UserRound
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />

                My Requests
              </button>
            )}

            {/* =================================================
                CART
            ================================================== */}
            <button
              onClick={() => go("/cart")}
              className="
                group flex items-center gap-3
                rounded-xl px-3 py-3
                text-left font-semibold text-slate-700
                transition-all duration-300
                hover:translate-x-1
                hover:bg-orange-50
                hover:text-orange-600
              "
            >
              <ShoppingCart
                className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

              My Cart

              {cartCount > 0 && (
                <span className="ml-auto rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* =================================================
                MOBILE ADMIN LOGIN
            ================================================== */}
            <button
              onClick={() => go("/admin/login")}
              className="
                group relative mt-2
                flex items-center gap-3
                overflow-hidden
                rounded-xl
                border border-violet-200
                bg-gradient-to-r
                from-violet-50
                via-indigo-50
                to-violet-50
                px-3 py-3
                text-left
                font-semibold text-violet-700
                shadow-sm
                transition-all duration-300
                hover:translate-x-1
                hover:border-violet-300
                hover:shadow-md
              "
            >
              {/* Moving shine */}
              <span
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/70
                  to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              {/* Admin icon */}
              <span
                className="
                  relative flex h-9 w-9
                  items-center justify-center
                  rounded-lg bg-violet-100
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:rotate-3
                "
              >
                <ShieldCheck className="h-5 w-5 text-violet-600" />

                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-ping rounded-full bg-violet-500 opacity-60" />

                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-violet-500" />
              </span>

              {/* Admin text */}
              <span className="relative flex-1">
                Admin Login

                <span className="block text-[11px] font-medium text-violet-500">
                  Eventara Management
                </span>
              </span>

              <ChevronRight
                className="
                  relative h-5 w-5
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* =================================================
                CUSTOMER LOGIN / LOGOUT
            ================================================== */}
            {user ? (
              <button
                onClick={() => {
                  logout();
                  go("/");
                }}
                className="
                  group flex items-center gap-3
                  rounded-xl px-3 py-3
                  text-left font-semibold text-slate-700
                  transition-all duration-300
                  hover:translate-x-1
                  hover:bg-red-50
                  hover:text-red-600
                "
              >
                <LogOut
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:rotate-6
                  "
                />

                Logout
              </button>
            ) : (
              <button
                onClick={() => go("/login")}
                className="
                  group flex items-center gap-3
                  rounded-xl px-3 py-3
                  text-left font-semibold text-orange-600
                  transition-all duration-300
                  hover:translate-x-1
                  hover:bg-orange-50
                "
              >
                <UserRound
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />

                Sign in / Create account
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}