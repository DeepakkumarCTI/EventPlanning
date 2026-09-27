import { useState } from "react";
import { Mail, Phone, ChevronDown, MapPin, Store } from "lucide-react";
import { useAppData } from "../../context/AppDataContext";
import { EVENT_TYPES } from "../../context/AppDataContext";

export default function Enquiries() {
  const { enquiries, updateEnquiryStatus } = useAppData();
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? enquiries : enquiries.filter((item) => item.status === filter);

  return <div>
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">Customer enquiries</p><h1 className="mt-1 text-3xl font-black">Requirements & contact details</h1><p className="mt-2 text-sm text-slate-500">Every selected company is stored with the customer's enquiry.</p></div><select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold"><option>All</option><option>New</option><option>Contacted</option><option>Closed</option></select></div>
    <div className="mt-6 space-y-4">
      {list.map((item) => {
        const eventName = EVENT_TYPES.find((event) => event.id === item.eventType)?.name || item.eventType;
        return <article key={item.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-4 lg:flex-row"><div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-black text-orange-600">{item.id}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">{item.status}</span></div><h2 className="mt-3 text-xl font-black">{item.customerName} — {eventName}</h2><p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500"><span>{item.eventDate}</span><span>•</span><span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{item.location}</span><span>•</span><span>{item.guests} guests</span><span>•</span><span>Budget ₹{Number(item.budget || 0).toLocaleString("en-IN")}</span></p></div><div className="flex flex-wrap gap-2"><a href={`tel:${item.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700"><Phone className="h-4 w-4" />Call</a><a href={`mailto:${item.email}`} className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"><Mail className="h-4 w-4" />Email</a><label className="relative"><select value={item.status} onChange={(e) => updateEnquiryStatus(item.id, e.target.value)} className="appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs font-bold"><option>New</option><option>Contacted</option><option>Closed</option></select><ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-3.5 w-3.5 text-slate-400" /></label></div></div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4"><div className="flex items-center gap-2 text-sm font-black"><Store className="h-4 w-4 text-orange-500" />Selected companies ({item.items?.length || 0})</div><div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{(item.items || []).map((service) => <div key={service.id} className="rounded-xl border border-slate-200 bg-white p-3"><p className="text-sm font-bold">{service.name}</p><p className="mt-1 text-xs text-slate-500">{service.category} • Qty {service.quantity} • ₹{Number(service.price || 0).toLocaleString("en-IN")}</p>{service.location && <p className="mt-1 text-xs text-slate-400">{service.location}{service.contact ? ` • ${service.contact}` : ""}</p>}</div>)}</div></div>
          {item.message && <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm text-amber-900"><strong>Customer message:</strong> {item.message}</div>}
        </article>;
      })}
      {!list.length && <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-sm text-slate-400">No enquiries in this filter.</div>}
    </div>
  </div>;
}
