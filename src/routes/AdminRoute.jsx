import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function AdminRoute() { const { isAdminAuthenticated } = useAuth(); const location = useLocation(); return isAdminAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace state={{ from: location.pathname }} />; }
