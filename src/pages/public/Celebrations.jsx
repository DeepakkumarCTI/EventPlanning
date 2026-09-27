import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ShoppingCart,
  Sparkles,
  Store,
  Heart,
  Cake,
  PartyPopper,
  Baby,
  Gift,
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";

import PageTitle from "../../components/PageTitle";
import ServiceCard from "../../components/ServiceCard";
import { EVENT_TYPES, useAppData } from "../../context/AppDataContext";

const CART_KEY = "eventara_cart_v3";

const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
};

const categoryOrder = [
  "Venue",
  "Catering",
  "Decoration",
  "Photography",
  "Entertainment",
  "Makeup & Styling",
  "Invitations",
  "Return Gifts",
];

/* --------------------------------
   Event Type → Lucide Icon
--------------------------------- */
const eventIcons = {
  marriage: Heart,
  birthday: Cake,
  engagement: Heart,
  reception: PartyPopper,
  baby_shower: Baby,
  babyshower: Baby,
  anniversary: Gift,
  corporate: BriefcaseBusiness,
  corporate_event: BriefcaseBusiness,
  graduation: GraduationCap,
  party: PartyPopper,
};

const getEventIcon = (eventId) => {
  return eventIcons[eventId] || CalendarDays;
};

export default function Celebrations() {
  const [params] = useSearchParams();

  const [type, setType] = useState(
    params.get("type") || "marriage"
  );

  const [cart, setCart] = useState(readCart);
  const [category, setCategory] = useState("All");

  const { vendors } = useAppData();

  /* --------------------------------
     Cart Sync
  --------------------------------- */
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));

    window.dispatchEvent(
      new Event("eventara-cart-updated")
    );
  }, [cart]);

  /* --------------------------------
     Selected Event
  --------------------------------- */
  const selectedEvent =
    EVENT_TYPES.find((item) => item.id === type) ||
    EVENT_TYPES[0];

  /* --------------------------------
     Active Vendors
  --------------------------------- */
  const activeVendors = vendors.filter(
    (vendor) => vendor.active !== false
  );

  /* --------------------------------
     Categories
  --------------------------------- */
  const categories = [
    "All",
    ...categoryOrder.filter((item) =>
      activeVendors.some(
        (vendor) => vendor.category === item
      )
    ),
  ];

  /* --------------------------------
     Selected Cart IDs
  --------------------------------- */
  const selectedIds = useMemo(
    () => new Set(cart.map((item) => item.id)),
    [cart]
  );

  /* --------------------------------
     Add Vendor
  --------------------------------- */
  const add = (vendor) =>
    setCart((prev) =>
      prev.some((item) => item.id === vendor.id)
        ? prev
        : [...prev, { ...vendor, quantity: 1 }]
    );

  /* --------------------------------
     Visible Vendors
  --------------------------------- */
  const visible =
    category === "All"
      ? activeVendors
      : activeVendors.filter(
          (item) => item.category === category
        );

  /* --------------------------------
     Group Vendors
  --------------------------------- */
  const grouped =
    category === "All"
      ? categoryOrder
          .map((cat) => ({
            cat,
            items: activeVendors.filter(
              (item) => item.category === cat
            ),
          }))
          .filter((group) => group.items.length)
      : [{ cat: category, items: visible }];

  const SelectedEventIcon = getEventIcon(
    selectedEvent.id
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-900">

      {/* =====================================================
          LIGHT BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Orange Glow */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl animate-pulse" />

        {/* Pink Glow */}
        <div
          className="absolute right-[-120px] top-[30%] h-96 w-96 rounded-full bg-pink-200/35 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Violet Glow */}
        <div
          className="absolute bottom-[-150px] left-[30%] h-96 w-96 rounded-full bg-violet-200/35 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Blue Glow */}
        <div
          className="absolute right-[25%] top-[-100px] h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        {/* Soft Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(15,23,42,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.5)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="relative w-full px-3 py-7 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-14">

        {/* =================================================
            PAGE TITLE
        ================================================== */}

        <div className="relative">

          {/* Decorative Line */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-[0_0_12px_rgba(249,115,22,.25)]" />

            <span className="h-1 w-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shadow-[0_0_12px_rgba(236,72,153,.20)]" />

            <span className="h-1 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.25)]" />
          </div>

          <PageTitle
            eyebrow="Plan your function"
            title="Choose companies for every service"
            text="Compare multiple venues, caterers, decorators, photographers and other service providers. Choose the companies you want and add them to your cart."
          />

          {/* Floating Decorative Icon */}
          <div className="pointer-events-none absolute right-2 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-500 shadow-lg shadow-orange-100 lg:flex animate-bounce">
            <Sparkles className="h-7 w-7" />
          </div>
        </div>

        {/* =================================================
            EVENT TYPES
        ================================================== */}

        <section className="mt-8">

          {/* Section Heading */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                <Zap className="h-4 w-4" />
                Select Event
              </div>

              <h2 className="mt-1 text-lg font-black text-slate-800 sm:text-xl">
                What are you planning?
              </h2>
            </div>

            <div className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-500 shadow-sm sm:block">
              {EVENT_TYPES.length} event types
            </div>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">

            {EVENT_TYPES.map((item, index) => {
              const EventIcon = getEventIcon(item.id);
              const active = type === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setType(item.id)}
                  className={`group relative overflow-hidden rounded-2xl border p-3 text-center transition-all duration-500 active:scale-95 sm:p-4 ${
                    active
                      ? "border-orange-300 bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 shadow-lg shadow-orange-100"
                      : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/60"
                  }`}
                  style={{
                    animation: `floatCard 5s ease-in-out infinite`,
                    animationDelay: `${index * 120}ms`,
                  }}
                >

                  {/* Soft Glow */}
                  <div
                    className={`absolute -right-5 -top-5 h-16 w-16 rounded-full blur-2xl transition-opacity ${
                      active
                        ? "bg-orange-200/60 opacity-100"
                        : "bg-violet-200/50 opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div
                    className={`relative mx-auto flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                      active
                        ? "bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg shadow-orange-200"
                        : "bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-orange-500"
                    }`}
                  >
                    <EventIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <p
                    className={`relative mt-2 text-xs font-black leading-4 sm:text-sm ${
                      active
                        ? "text-slate-900"
                        : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </p>

                  {active && (
                    <div className="relative mx-auto mt-2 h-1 w-7 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 shadow-sm" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* =================================================
            SELECTED EVENT PANEL
        ================================================== */}

        <section
          className="relative mt-7 overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 p-5 shadow-lg shadow-orange-100/50 sm:p-6 lg:p-7"
          style={{
            animation: "softGlow 5s ease-in-out infinite",
          }}
        >

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-orange-200/70 bg-orange-100/50 blur-sm" />

          <div className="pointer-events-none absolute -bottom-20 left-[35%] h-48 w-48 rounded-full bg-violet-200/30 blur-3xl" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="min-w-0">

              <div className="flex items-center gap-3">

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg shadow-orange-200">

                  <SelectedEventIcon className="h-6 w-6" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-emerald-400" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">

                    <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                      {selectedEvent.name}
                    </h2>

                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-600">
                      Selected
                    </span>

                  </div>
                </div>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                {selectedEvent.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">

              <Link
                to="/cart"
                className="group inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-200 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-200 active:scale-95 lg:flex-none"
              >
                <ShoppingCart className="h-4 w-4 transition-transform group-hover:rotate-[-8deg]" />

                Cart ({cart.length})

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/ai-planner"
                className="group inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-5 py-3 text-sm font-black text-violet-700 shadow-sm transition-all hover:border-violet-300 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-100 active:scale-95 lg:flex-none"
              >
                <Sparkles className="h-4 w-4 text-yellow-500 transition-transform group-hover:rotate-12" />

                AI Estimate
              </Link>

            </div>
          </div>
        </section>

        {/* =================================================
            CATEGORY FILTER
        ================================================== */}

        <section className="mt-7">

          <div className="mb-3 flex items-center gap-2">
            <Store className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Browse Services
            </span>
          </div>

          {/* Mobile Scroll / Desktop Wrap */}
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none lg:flex-wrap lg:overflow-visible">

            {categories.map((item, index) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`group relative shrink-0 overflow-hidden rounded-full px-4 py-2.5 text-xs font-black transition-all duration-300 active:scale-95 sm:px-5 ${
                    active
                      ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white shadow-lg shadow-orange-200"
                      : "border border-slate-200 bg-white text-slate-500 shadow-sm hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                  style={{
                    animation: `categoryFloat 4s ease-in-out infinite`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >

                  {active && (
                    <span className="absolute inset-0 bg-white/10 animate-pulse" />
                  )}

                  <span className="relative">
                    {item}
                  </span>
                </button>
              );
            })}

          </div>
        </section>

        {/* =================================================
            VENDOR GROUPS
        ================================================== */}

        <div className="mt-7 space-y-12">

          {grouped.map((group, groupIndex) => (
            <section
              key={group.cat}
              className="relative"
            >

              {/* Category Header */}
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-500">

                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-500">
                      <Store className="h-4 w-4" />
                    </span>

                    {group.cat}
                  </div>

                  <h2 className="mt-2 text-2xl font-black text-slate-800 sm:text-3xl">

                    {group.items.length}{" "}

                    {group.items.length === 1
                      ? "option"
                      : "companies"}{" "}

                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                      available
                    </span>

                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">

                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                  Compare and choose what fits your function.

                </div>

              </div>

              {/* Vendor Grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {group.items.map((vendor, vendorIndex) => (
                  <div
                    key={vendor.id}
                    className="relative"
                    style={{
                      animation: `vendorFloat 6s ease-in-out infinite`,
                      animationDelay: `${(groupIndex * 200) + (vendorIndex * 120)}ms`,
                    }}
                  >

                    {/* Soft Hover Border */}
                    <div className="pointer-events-none absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-violet-500/0 opacity-0 blur-sm transition-all duration-500 hover:from-orange-500/20 hover:via-pink-500/15 hover:to-violet-500/20 hover:opacity-100" />

                    <div className="relative">
                      <ServiceCard
                        service={vendor}
                        selected={selectedIds.has(vendor.id)}
                        onAdd={add}
                      />
                    </div>

                  </div>
                ))}

              </div>
            </section>
          ))}

          {/* Empty State */}
          {!grouped.length && (
            <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-orange-200 bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 p-12 text-center shadow-lg shadow-orange-100/40">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-violet-100 text-orange-500">
                <Store className="h-7 w-7" />
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-800">
                No companies found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                No active companies are available in this category yet.
                Ask the admin to add one.
              </p>

            </div>
          )}

        </div>
      </main>

      {/* =====================================================
          CONTINUOUS ANIMATION KEYFRAMES
      ====================================================== */}

      <style>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes categoryFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes vendorFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes softGlow {
          0%,
          100% {
            box-shadow: 0 8px 30px rgba(249, 115, 22, 0.05);
          }

          50% {
            box-shadow:
              0 12px 45px rgba(249, 115, 22, 0.10),
              0 20px 60px rgba(236, 72, 153, 0.05);
          }
        }

        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}