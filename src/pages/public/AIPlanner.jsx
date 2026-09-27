import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Calculator,
  ArrowRight,
  IndianRupee,
  Users,
  CalendarDays,
  MapPin,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

import PageTitle from "../../components/PageTitle";
import { EVENT_TYPES } from "../../context/AppDataContext";

const baseRates = {
  marriage: 2500,
  engagement: 1400,
  birthday: 900,
  "baby-shower": 1100,
  housewarming: 800,
  corporate: 1600,
  anniversary: 1000,
  other: 1200,
};

const splits = {
  venue: 0.25,
  food: 0.3,
  decor: 0.18,
  media: 0.12,
  entertainment: 0.08,
  buffer: 0.07,
};

export default function AIPlanner() {
  const [eventType, setEventType] = useState("marriage");
  const [guests, setGuests] = useState(300);
  const [budget, setBudget] = useState(750000);
  const [days, setDays] = useState(1);

  const estimate = useMemo(() => {
    const calculated =
      baseRates[eventType] *
      Number(guests) *
      Math.max(1, Number(days));

    const total = Math.min(
      Math.max(calculated, 50000),
      Math.max(50000, Number(budget) || calculated)
    );

    return {
      total,
      calculated,
      rows: Object.entries(splits).map(([name, pct]) => [
        name,
        Math.round(total * pct),
        pct,
      ]),
    };
  }, [eventType, guests, budget, days]);

  const selectedEvent =
    EVENT_TYPES.find((item) => item.id === eventType)?.name || "Event";

  const budgetUsed = Math.min(
    100,
    Math.round((estimate.calculated / Math.max(Number(budget) || 1, 1)) * 100)
  );

  const getCategoryColor = (name) => {
    const colors = {
      venue: {
        bar: "bg-orange-500",
        icon: "bg-orange-100 text-orange-600",
      },
      food: {
        bar: "bg-emerald-500",
        icon: "bg-emerald-100 text-emerald-600",
      },
      decor: {
        bar: "bg-pink-500",
        icon: "bg-pink-100 text-pink-600",
      },
      media: {
        bar: "bg-violet-500",
        icon: "bg-violet-100 text-violet-600",
      },
      entertainment: {
        bar: "bg-blue-500",
        icon: "bg-blue-100 text-blue-600",
      },
      buffer: {
        bar: "bg-yellow-500",
        icon: "bg-yellow-100 text-yellow-600",
      },
    };

    return colors[name] || {
      bar: "bg-slate-500",
      icon: "bg-slate-100 text-slate-600",
    };
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-violet-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

      {/* =====================================================
          CONTINUOUS BACKGROUND ANIMATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"
          style={{
            animation: "plannerGlowOne 9s ease-in-out infinite",
          }}
        />

        <div
          className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl"
          style={{
            animation: "plannerGlowTwo 11s ease-in-out infinite",
          }}
        />

        <div
          className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-pink-200/25 blur-3xl"
          style={{
            animation: "plannerGlowThree 10s ease-in-out infinite",
          }}
        />

        {/* Soft Grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(15,23,42,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.7)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* =====================================================
          PAGE TITLE
      ====================================================== */}

      <div className="relative z-10">
        <PageTitle
          eyebrow="Eventara AI Planner"
          title="Get a quick event estimate"
          text="Tell us about your event and let Eventara create a simple planning overview for your budget."
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">

        {/* =================================================
            LEFT — INPUT PANEL
        ================================================== */}

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-lg sm:p-7">

          <div className="flex items-center gap-3">

            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-200"
              style={{
                animation: "aiIconFloat 4s ease-in-out infinite",
              }}
            >
              <Sparkles className="h-6 w-6" />
            </div>

            <div>
              <h2 className="font-black text-slate-900">
                Tell the planner
              </h2>

              <p className="text-xs text-slate-500">
                Customize your event details
              </p>
            </div>

          </div>

          {/* Inputs */}

          <div className="mt-6 grid gap-4">

            {/* Event Type */}
            <label className="text-sm font-bold text-slate-800">
              Function type

              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              >
                {EVENT_TYPES.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            {/* Guests */}
            <label className="text-sm font-bold text-slate-800">
              Guests

              <div className="relative mt-1">
                <Users className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                <input
                  type="number"
                  min="10"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </label>

            {/* Days */}
            <label className="text-sm font-bold text-slate-800">
              Event duration

              <div className="relative mt-1">
                <CalendarDays className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                <input
                  type="number"
                  min="1"
                  max="7"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </label>

            {/* Budget */}
            <label className="text-sm font-bold text-slate-800">
              Your budget ceiling

              <div className="relative mt-1">
                <IndianRupee className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

                <input
                  type="number"
                  min="50000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </label>

          </div>

          {/* Small Helper */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-4">

            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />

            <p className="text-xs leading-5 text-violet-700">
              You can change these values anytime. The planning overview
              updates automatically based on your selections.
            </p>

          </div>

        </section>

        {/* =================================================
            RIGHT — AI PLANNING RESULT
        ================================================== */}

        <section className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white/95 p-5 shadow-lg shadow-orange-100/40 backdrop-blur-sm sm:p-7">

          {/* Animated Decorative Glow */}

          <div
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-200/40 blur-3xl"
            style={{
              animation: "resultGlow 6s ease-in-out infinite",
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-violet-200/30 blur-3xl"
            style={{
              animation: "resultGlow 7s ease-in-out infinite reverse",
            }}
          />

          <div className="relative">

            {/* Result Header */}

            <div className="flex items-center justify-between gap-3">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-orange-500">
                    AI Planning Result
                  </p>

                  <h2 className="mt-0.5 text-lg font-black text-slate-900">
                    Your Event Plan
                  </h2>
                </div>

              </div>

              <div className="hidden rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-emerald-600 sm:flex sm:items-center sm:gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Ready
              </div>

            </div>

            {/* Main Event Summary */}

            <div
              className="mt-6 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 p-[1px]"
              style={{
                animation: "gradientShift 5s ease-in-out infinite",
              }}
            >
              <div className="rounded-2xl bg-white p-5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Planning for
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-slate-900">
                      {selectedEvent}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs font-semibold text-slate-500">
                      Suggested budget
                    </p>

                    <div className="mt-1 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-3xl font-black text-transparent">
                      ₹{estimate.total.toLocaleString("en-IN")}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Quick Stats */}

            <div className="mt-5 grid grid-cols-2 gap-3">

              <div className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-sm">

                <div className="flex items-center gap-2">
                  <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                    <Users className="h-4 w-4" />
                  </div>

                  <span className="text-xs font-bold text-slate-500">
                    Guests
                  </span>
                </div>

                <p className="mt-2 text-xl font-black text-slate-900">
                  {Number(guests).toLocaleString("en-IN")}
                </p>

              </div>

              <div className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50 hover:shadow-sm">

                <div className="flex items-center gap-2">
                  <div className="rounded-xl bg-violet-100 p-2 text-violet-600">
                    <CalendarDays className="h-4 w-4" />
                  </div>

                  <span className="text-xs font-bold text-slate-500">
                    Duration
                  </span>
                </div>

                <p className="mt-2 text-xl font-black text-slate-900">
                  {Number(days)}{" "}
                  <span className="text-sm font-bold text-slate-500">
                    {Number(days) === 1 ? "Day" : "Days"}
                  </span>
                </p>

              </div>

            </div>

            {/* Budget Usage */}

            <div className="mt-6">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">
                    Budget planning
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Estimated requirement vs your budget
                  </p>
                </div>

                <span className="text-sm font-black text-orange-600">
                  {budgetUsed}%
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 transition-all duration-700"
                  style={{
                    width: `${Math.min(100, Math.max(5, budgetUsed))}%`,
                  }}
                />
              </div>

              <div className="mt-2 flex justify-between text-[10px] font-semibold text-slate-400">
                <span>Estimated</span>
                <span>
                  Budget ₹{Number(budget || 0).toLocaleString("en-IN")}
                </span>
              </div>

            </div>

            {/* Category Allocation */}

            <div className="mt-7">

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900">
                    Suggested allocation
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    A simple way to organize your event budget
                  </p>
                </div>

                <Calculator className="h-5 w-5 text-slate-300" />
              </div>

              <div className="mt-4 space-y-4">

                {estimate.rows.map(([name, value, pct], index) => {
                  const theme = getCategoryColor(name);

                  return (
                    <div
                      key={name}
                      className="group"
                      style={{
                        animation: "allocationFade 0.6s ease both",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >

                      <div className="mb-1.5 flex items-center justify-between">

                        <span className="text-xs font-bold capitalize text-slate-700">
                          {name}
                        </span>

                        <span className="text-xs font-black text-slate-800">
                          ₹{value.toLocaleString("en-IN")}
                        </span>

                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                        <div
                          className={`h-full rounded-full transition-all duration-700 group-hover:brightness-110 ${theme.bar}`}
                          style={{
                            width: `${pct * 100}%`,
                            animation: "barGrow 1s ease both",
                            animationDelay: `${index * 120}ms`,
                          }}
                        />

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* AI Insight */}

            <div className="mt-6 rounded-2xl border border-yellow-100 bg-gradient-to-r from-yellow-50 to-orange-50 p-4">

              <div className="flex items-start gap-3">

                <div className="rounded-xl bg-yellow-100 p-2 text-yellow-600">
                  <Lightbulb className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-900">
                    Planning insight
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    For {Number(guests).toLocaleString("en-IN")} guests,
                    keeping enough budget for food and venue will help you
                    build a practical event package.
                  </p>
                </div>

              </div>

            </div>

            {/* CTA */}

            <Link
              to={`/celebrations?type=${eventType}`}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-200"
            >
              Start building your event

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <p className="mt-3 text-center text-[10px] leading-4 text-slate-400">
              This is a planning estimate. Final prices depend on the selected
              venue, vendors and services.
            </p>

          </div>
        </section>

      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes plannerGlowOne {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(45px, 25px) scale(1.15);
          }
        }

        @keyframes plannerGlowTwo {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-40px, -30px) scale(1.12);
          }
        }

        @keyframes plannerGlowThree {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(30px, -30px) scale(1.15);
          }
        }

        @keyframes aiIconFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-5px) rotate(3deg);
          }
        }

        @keyframes resultGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            filter: saturate(1);
          }

          50% {
            filter: saturate(1.3);
          }
        }

        @keyframes allocationFade {
          from {
            opacity: 0;
            transform: translateX(10px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes barGrow {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }

          to {
            transform: scaleX(1);
            transform-origin: left;
          }
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