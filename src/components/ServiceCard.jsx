import { Check, MapPin, Plus, Star } from "lucide-react";

export default function ServiceCard({ service, selected, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-40 overflow-hidden sm:h-44">
        <img src={service.image} alt={service.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-extrabold text-slate-800 backdrop-blur">{service.category}</div>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-slate-950/75 px-2.5 py-1 text-[11px] font-bold text-white"><Star className="h-3 w-3 fill-yellow-300 text-yellow-300" /> {service.rating || "New"}</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0"><h3 className="font-black text-slate-900">{service.name}</h3><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3.5 w-3.5" />{service.location || "Tamil Nadu"}</p></div>
          <span className="shrink-0 text-sm font-extrabold text-slate-900">₹{Number(service.price || 0).toLocaleString("en-IN")}</span>
        </div>
        <p className="mt-3 min-h-12 text-xs leading-5 text-slate-500">{service.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold text-slate-500"><span className="rounded-full bg-slate-100 px-2 py-1">{service.unit}</span>{service.capacity && <span className="rounded-full bg-slate-100 px-2 py-1">{service.capacity}</span>}</div>
        <button onClick={() => onAdd(service)} className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition ${selected ? "bg-emerald-50 text-emerald-700" : "bg-slate-900 text-white hover:bg-orange-600"}`}>
          {selected ? <><Check className="h-4 w-4" />Selected</> : <><Plus className="h-4 w-4" />Choose this service</>}
        </button>
      </div>
    </article>
  );
}
