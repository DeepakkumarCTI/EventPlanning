import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function Brand() {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2.5">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-2 ring-orange-400">
        <div className="absolute inset-1.5 rounded-xl border-2 border-pink-500" />
        <div className="relative text-xl">🎪</div>
        <Sparkles className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-amber-400 p-0.5 text-white" />
      </div>
      <div className="min-w-0 leading-none">
        <div className="flex items-center gap-1">
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-[22px] font-black tracking-tight text-transparent">Eventara</span>
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-orange-500" />
        </div>
        <span className="mt-1 hidden text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:block">Celebrate • Plan • Experience</span>
      </div>
    </Link>
  );
}
