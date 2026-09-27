import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 antialiased">
      <AppRoutes />
    </div>
  );
}
