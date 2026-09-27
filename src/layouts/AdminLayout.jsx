import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquareText,
  Users,
  LogOut,
  Store,
  ShieldCheck,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import Brand from "../components/Brand";

export default function AdminLayout() {
  const { admin, adminLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  const desktopNavClass = ({ isActive }) =>
    `relative rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-orange-50 via-pink-50 to-violet-50 text-orange-600 shadow-sm"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-orange-50 via-pink-50 to-violet-50 text-orange-600 shadow-sm"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          ADMIN HEADER
      ====================================================== */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">

        {/* Full width - no max-w-7xl */}
        <div className="flex min-h-16 w-full items-center gap-3 px-3 sm:px-4 lg:px-5">

          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            to="/admin"
            className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Brand />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav className="ml-auto hidden items-center gap-1 lg:flex">

            <NavLink
              to="/admin"
              end
              className={desktopNavClass}
            >
              <span className="flex items-center gap-1.5">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </span>
            </NavLink>

            <NavLink
              to="/admin/enquiries"
              className={desktopNavClass}
            >
              <span className="flex items-center gap-1.5">
                <MessageSquareText className="h-4 w-4" />
                Enquiries
              </span>
            </NavLink>

            <NavLink
              to="/admin/customers"
              className={desktopNavClass}
            >
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                Customers
              </span>
            </NavLink>

            <NavLink
              to="/admin/vendors"
              className={desktopNavClass}
            >
              <span className="flex items-center gap-1.5">
                <Store className="h-4 w-4" />
                Companies
              </span>
            </NavLink>
          </nav>

          {/* =================================================
              ADMIN EMAIL
          ================================================== */}
          <div className="hidden items-center gap-2 md:flex">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            <span className="max-w-[180px] truncate text-xs font-semibold text-slate-500 lg:max-w-none">
              {admin?.email}
            </span>
          </div>

          {/* =================================================
              LOGOUT
          ================================================== */}
          <button
            onClick={handleLogout}
            className="
              group
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              border border-slate-200
              bg-white
              text-slate-600
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-600
            "
            aria-label="Logout"
            title="Logout"
          >
            <LogOut className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* =====================================================
            MOBILE ADMIN NAVIGATION
        ====================================================== */}
        <div className="border-t border-slate-100 bg-white lg:hidden">

          {/* No max width here either */}
          <div className="flex w-full gap-1 overflow-x-auto px-2 py-2 sm:px-3">

            <NavLink
              to="/admin"
              end
              className={mobileNavClass}
            >
              <LayoutDashboard className="h-4 w-4 shrink-0" />
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/enquiries"
              className={mobileNavClass}
            >
              <MessageSquareText className="h-4 w-4 shrink-0" />
              Enquiries
            </NavLink>

            <NavLink
              to="/admin/customers"
              className={mobileNavClass}
            >
              <Users className="h-4 w-4 shrink-0" />
              Customers
            </NavLink>

            <NavLink
              to="/admin/vendors"
              className={mobileNavClass}
            >
              <Store className="h-4 w-4 shrink-0" />
              Companies
            </NavLink>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
          Full width - removed max-w-7xl
      ====================================================== */}
      <main className="w-full px-3 py-5 sm:px-4 sm:py-6 lg:px-5 lg:py-8">
        <Outlet />
      </main>

    </div>
  );
}