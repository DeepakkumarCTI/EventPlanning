import { useMemo, useState } from "react";
import { Edit3, Plus, Search, Star, Trash2, X } from "lucide-react";
import { useAppData } from "../../context/AppDataContext";

const emptyForm = { serviceId: "venue", name: "", category: "Venue", price: "", unit: "package", location: "Coimbatore", capacity: "", rating: "4.5", image: "/images/hero_mandapam.jpg", description: "", contact: "" };
const SERVICE_OPTIONS = [
  ["venue", "Venue", "/images/hero_mandapam.jpg"], ["catering", "Catering", "/images/banana_leaf_feast.jpg"], ["decor", "Decoration", "/images/chennai_reception_stage.jpg"], ["photo", "Photography", "/images/chennai_reception_stage.jpg"], ["music", "Entertainment", "/images/nadaswaram_vidwans.jpg"], ["makeup", "Makeup & Styling", "/images/hero_mandapam.jpg"], ["invitation", "Invitations", "/images/hero.jpg"], ["gifts", "Return Gifts", "/images/banana_leaf_feast.jpg"],
];

export default function Vendors() {
  const { vendors, addVendor, updateVendor, deleteVendor } = useAppData();
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const categories = ["All", ...new Set(vendors.map((item) => item.category))];
  const filtered = useMemo(() => vendors.filter((item) => (category === "All" || item.category === category) && `${item.name} ${item.location} ${item.category}`.toLowerCase().includes(search.toLowerCase())), [vendors, category, search]);

  const startAdd = () => { setEditing(null); setForm(emptyForm); setError(""); setShowForm(true); };
  const startEdit = (vendor) => { setEditing(vendor.id); setForm({ ...emptyForm, ...vendor }); setError(""); setShowForm(true); };
  const selectService = (serviceId) => { const item = SERVICE_OPTIONS.find(([id]) => id === serviceId); setForm((prev) => ({ ...prev, serviceId, category: item?.[1] || prev.category, image: item?.[2] || prev.image })); };
  const save = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.price || !form.description.trim() || !form.contact.trim()) { setError("Company name, price, description and contact are required."); return; }
    if (editing) updateVendor(editing, form); else addVendor(form);
    setShowForm(false); setEditing(null); setForm(emptyForm); setError("");
  };
  const remove = (vendor) => { if (window.confirm(`Delete ${vendor.name}?`)) deleteVendor(vendor.id); };

  return <div>
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">Vendor catalogue</p><h1 className="mt-1 text-3xl font-black">Companies & services</h1><p className="mt-2 text-sm text-slate-500">Add, edit, delete and manage every company customers can choose from.</p></div><button onClick={startAdd} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-orange-600"><Plus className="h-4 w-4" />Add company</button></div>
    <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:flex-row"><label className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search company, location or service..." className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-orange-400" /></label><select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm">{categories.map((item) => <option key={item}>{item}</option>)}</select></div>

    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((vendor) => <article key={vendor.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="h-36 overflow-hidden"><img src={vendor.image || "/images/hero_mandapam.jpg"} alt="" className="h-full w-full object-cover" /></div><div className="p-4"><div className="flex items-start justify-between gap-3"><div><span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-orange-600">{vendor.category}</span><h2 className="mt-2 font-black">{vendor.name}</h2><p className="mt-1 text-xs text-slate-500">{vendor.location} • {vendor.capacity || "Custom"}</p></div><div className="flex items-center gap-1 text-xs font-bold"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />{vendor.rating || "New"}</div></div><p className="mt-3 text-xs leading-5 text-slate-500">{vendor.description}</p><div className="mt-3 flex items-center justify-between"><p className="font-black">₹{Number(vendor.price || 0).toLocaleString("en-IN")} <span className="text-[10px] font-semibold text-slate-400">{vendor.unit}</span></p><span className={`rounded-full px-2 py-1 text-[10px] font-bold ${vendor.active !== false ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{vendor.active !== false ? "Active" : "Hidden"}</span></div><div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => startEdit(vendor)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold hover:bg-slate-50"><Edit3 className="h-4 w-4" />Edit</button><button onClick={() => remove(vendor)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-50 px-3 py-2.5 text-xs font-bold text-red-700 hover:bg-red-100"><Trash2 className="h-4 w-4" />Delete</button></div></div></article>)}</div>
    {!filtered.length && <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-sm text-slate-500">No companies found.</div>}

    {showForm && <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"><div className="mx-auto my-4 max-w-3xl rounded-3xl bg-white shadow-2xl sm:my-10"><div className="flex items-center justify-between border-b border-slate-100 p-5"><div><p className="text-xs font-black uppercase tracking-wider text-orange-500">{editing ? "Update company" : "Add company"}</p><h2 className="text-xl font-black">Vendor details</h2></div><button onClick={() => setShowForm(false)} className="rounded-xl p-2 hover:bg-slate-100"><X /></button></div><form onSubmit={save} className="grid gap-4 p-5 sm:grid-cols-2">
      <label className="text-sm font-bold sm:col-span-2">Company / service name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold">Service category<select value={form.serviceId} onChange={(e) => selectService(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3">{SERVICE_OPTIONS.map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select></label>
      <label className="text-sm font-bold">Starting price<input required type="number" min="0" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold">Unit<input value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} placeholder="package / per guest / starting" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold">Location<input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold">Capacity / coverage<input value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} placeholder="100–500 guests" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold">Rating<input type="number" min="0" max="5" step="0.1" value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold">Contact number<input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold sm:col-span-2">Image path<input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="/images/hero_mandapam.jpg" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      <label className="text-sm font-bold sm:col-span-2">Description<textarea required rows="3" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-3" /></label>
      {editing && <label className="flex items-center gap-2 text-sm font-bold sm:col-span-2"><input type="checkbox" checked={form.active !== false} onChange={(e) => setForm({ ...form, active: e.target.checked })} />Show this company to customers</label>}
      {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:col-span-2">{error}</p>}
      <div className="flex gap-2 sm:col-span-2"><button type="button" onClick={() => setShowForm(false)} className="flex-1 rounded-xl border border-slate-200 px-4 py-3 font-bold">Cancel</button><button className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 font-bold text-white">{editing ? "Save changes" : "Add company"}</button></div>
    </form></div></div>}
  </div>;
}
