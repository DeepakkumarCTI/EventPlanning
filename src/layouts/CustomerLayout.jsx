import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}