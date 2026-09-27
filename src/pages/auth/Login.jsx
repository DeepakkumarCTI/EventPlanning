import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Brand from "../../components/Brand";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(location.state?.from || "/celebrations", {
      replace: true,
    });
  };

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-violet-50 px-4 py-8 sm:px-6 sm:py-10">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-pink-200/20 blur-3xl" />

      {/* Login wrapper */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        {/* Brand */}
        <div className="mb-5 flex w-full justify-center">
          <div className="rounded-2xl bg-white/90 px-5 py-3 shadow-md ring-1 ring-slate-200/70 backdrop-blur">
            <Brand />
          </div>
        </div>

        {/* Login card */}
        <div className="w-full rounded-3xl border border-white/80 bg-white/95 p-5 shadow-2xl shadow-slate-300/30 backdrop-blur sm:p-7">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h1 className="text-xl font-black text-slate-900 sm:text-2xl">
                Welcome back
              </h1>

              <p className="mt-0.5 text-xs leading-5 text-slate-500 sm:text-sm">
                Sign in to submit and track enquiries.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="mt-6 space-y-4">
            {/* Email */}
            <label className="block text-sm font-bold text-slate-800">
              Email

              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />
            </label>

            {/* Password */}
            <label className="block text-sm font-bold text-slate-800">
              Password

              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-900 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
              />
            </label>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            {/* Sign in button */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              Sign in
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          {/* Register */}
          <p className="mt-5 text-center text-sm text-slate-500">
            New customer?{" "}
            <Link
              to="/register"
              className="font-bold text-orange-600 transition hover:text-violet-600"
            >
              Create an account
            </Link>
          </p>

          {/* Demo credentials */}
          <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-center text-[11px] leading-5 text-slate-500 sm:text-xs">
              <span className="font-bold text-slate-700">
                Customer Login or Register
              </span>{" "}
              
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}