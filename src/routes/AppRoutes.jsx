import { Navigate, Route, Routes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import Home from "../pages/public/Home";
import Celebrations from "../pages/public/Celebrations";
import Cart from "../pages/public/Cart";
import AIPlanner from "../pages/public/AIPlanner";
import Contact from "../pages/public/Contact";
import MyRequests from "../pages/public/MyRequests";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Enquiries from "../pages/admin/Enquiries";
import Customers from "../pages/admin/Customers";
import Vendors from "../pages/admin/Vendors";
export default function AppRoutes() { return <Routes><Route element={<CustomerLayout />}><Route path="/" element={<Home />} /><Route path="/celebrations" element={<Celebrations />} /><Route path="/cart" element={<Cart />} /><Route path="/ai-planner" element={<AIPlanner />} /><Route path="/contact" element={<Contact />} /><Route element={<ProtectedRoute />}><Route path="/my-requests" element={<MyRequests />} /></Route></Route><Route path="/login" element={<Login />} /><Route path="/register" element={<Register />} /><Route path="/admin/login" element={<AdminLogin />} /><Route element={<AdminRoute />}><Route element={<AdminLayout />}><Route path="/admin" element={<AdminDashboard />} /><Route path="/admin/enquiries" element={<Enquiries />} /><Route path="/admin/customers" element={<Customers />} /><Route path="/admin/vendors" element={<Vendors />} /></Route></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes>; }
