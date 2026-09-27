import { Link } from "react-router-dom";
import {
  MessageSquareText,
  Users,
  Clock3,
  ArrowRight,
  Sparkles,
  Building2,
  CircleCheck,
  TrendingUp,
} from "lucide-react";

import { useAppData } from "../../context/AppDataContext";
import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {
  const { enquiries, vendors } = useAppData();
  const { users } = useAuth();

  const newCount = enquiries.filter(
    (item) => item.status === "New"
  ).length;

  const contacted = enquiries.filter(
    (item) => item.status === "Contacted"
  ).length;

  return (
    <div className="w-full min-w-0 overflow-hidden">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="w-full rounded-3xl border border-white/70 bg-gradient-to-r from-orange-50 via-pink-50 via-purple-50 to-sky-50 p-5 shadow-sm sm:p-6">

        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-orange-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Eventara Operations
            </div>

            <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Manage customer enquiries, companies and platform activity
              from one place.
            </p>
          </div>

          <Link
            to="/"
            className="
              inline-flex w-fit items-center gap-2
              rounded-xl
              border border-white
              bg-white/90
              px-4 py-2.5
              text-sm font-bold text-slate-700
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-orange-600
              hover:shadow-md
            "
          >
            View Website
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </section>


      {/* =====================================================
          STATISTICS
      ====================================================== */}
      <section className="mt-5 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">

        <Stat
          title="Total Enquiries"
          value={enquiries.length}
          icon={MessageSquareText}
          gradient="from-orange-400 to-pink-500"
          bg="from-orange-50 to-pink-50"
        />

        <Stat
          title="New Enquiries"
          value={newCount}
          icon={Clock3}
          gradient="from-yellow-400 to-orange-500"
          bg="from-yellow-50 to-orange-50"
        />

        <Stat
          title="Contacted"
          value={contacted}
          icon={CircleCheck}
          gradient="from-emerald-400 to-teal-500"
          bg="from-emerald-50 to-teal-50"
        />

        <Stat
          title="Customers"
          value={users.length}
          icon={Users}
          gradient="from-blue-400 to-cyan-500"
          bg="from-blue-50 to-cyan-50"
        />

        <Stat
          title="Companies"
          value={vendors.length}
          icon={Building2}
          gradient="from-violet-400 to-fuchsia-500"
          bg="from-violet-50 to-fuchsia-50"
        />

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="mt-5 grid w-full gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">

        {/* =================================================
            LATEST ENQUIRIES
        ================================================== */}
        <section className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Header */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-orange-50 via-white to-pink-50 p-5">

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-sm">
                    <MessageSquareText className="h-4 w-4" />
                  </div>

                  <div>
                    <h2 className="font-black text-slate-900">
                      Latest Enquiries
                    </h2>

                    <p className="text-xs text-slate-500">
                      Recent customer requirements
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/admin/enquiries"
                className="
                  inline-flex w-fit items-center gap-1
                  rounded-xl
                  bg-orange-50
                  px-3 py-2
                  text-xs font-bold text-orange-600
                  transition-all duration-300
                  hover:bg-orange-100
                  hover:text-orange-700
                "
              >
                View All
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

            </div>
          </div>


          {/* Enquiry List */}
          <div className="p-4 sm:p-5">

            <div className="space-y-3">

              {enquiries.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="
                    group
                    flex flex-col justify-between gap-3
                    rounded-2xl
                    border border-slate-100
                    bg-gradient-to-r
                    from-slate-50
                    via-white
                    to-orange-50/40
                    p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-orange-200
                    hover:shadow-sm
                    sm:flex-row sm:items-center
                  "
                >

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 text-white">
                        <Users className="h-4 w-4" />
                      </div>

                      <p className="truncate text-sm font-black text-slate-800">
                        {item.customerName}
                      </p>

                    </div>

                    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">

                      <span className="font-semibold text-violet-600">
                        {item.eventType}
                      </span>

                      <span>•</span>

                      <span>{item.eventDate}</span>

                      <span>•</span>

                      <span>{item.location}</span>

                      <span>•</span>

                      <span>{item.guests} guests</span>

                    </div>

                  </div>


                  {/* Status */}
                  <span
                    className={`
                      w-fit shrink-0 rounded-full
                      px-3 py-1.5
                      text-xs font-black
                      ${
                        item.status === "New"
                          ? "bg-orange-100 text-orange-700"
                          : item.status === "Contacted"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      }
                    `}
                  >
                    {item.status}
                  </span>

                </div>
              ))}


              {!enquiries.length && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-violet-100 text-orange-500">
                    <MessageSquareText className="h-5 w-5" />
                  </div>

                  <p className="mt-3 text-sm font-bold text-slate-600">
                    No enquiries yet.
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Customer enquiries will appear here.
                  </p>

                </div>
              )}

            </div>
          </div>
        </section>


        {/* =================================================
            FLOW / QUICK ACTION
        ================================================== */}
        <section
          className="
            relative
            min-w-0
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-violet-600
            via-fuchsia-600
            to-orange-500
            p-6
            text-white
            shadow-lg
          "
        >

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-yellow-300/20 blur-3xl" />


          <div className="relative">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Sparkles className="h-6 w-6 text-yellow-200" />
            </div>

            <h2 className="mt-4 text-xl font-black sm:text-2xl">
              How Eventara Works
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Manage the complete event enquiry flow from customer selection
              to admin follow-up.
            </p>


            {/* Steps */}
            <ol className="mt-5 space-y-3">

              <FlowStep number="1" text="Customer creates an account." />

              <FlowStep
                number="2"
                text="Customer chooses a function and services."
              />

              <FlowStep
                number="3"
                text="Selected services are added to the cart."
              />

              <FlowStep
                number="4"
                text="Customer submits one enquiry."
              />

              <FlowStep
                number="5"
                text="Admin reviews the enquiry and contacts the customer."
              />

            </ol>


            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row xl:flex-col">

              <Link
                to="/admin/vendors"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  border border-white/25
                  bg-white/10
                  px-4 py-3
                  text-sm font-bold text-white
                  backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/20
                "
              >
                <Building2 className="h-4 w-4" />
                Manage Companies
                <ArrowRight className="h-4 w-4" />
              </Link>


              <Link
                to="/admin/enquiries"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-white
                  px-4 py-3
                  text-sm font-bold text-violet-700
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-50
                "
              >
                <MessageSquareText className="h-4 w-4" />
                Open Enquiries
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>
        </section>

      </section>


      {/* =====================================================
          BOTTOM SUMMARY
      ====================================================== */}
      <section className="mt-5 grid gap-4 sm:grid-cols-3">

        <SummaryCard
          icon={TrendingUp}
          title="Active Enquiries"
          value={newCount + contacted}
          gradient="from-orange-400 to-pink-500"
        />

        <SummaryCard
          icon={Users}
          title="Registered Customers"
          value={users.length}
          gradient="from-blue-400 to-violet-500"
        />

        <SummaryCard
          icon={Building2}
          title="Service Companies"
          value={vendors.length}
          gradient="from-emerald-400 to-cyan-500"
        />

      </section>

    </div>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

function Stat({
  title,
  value,
  icon: Icon,
  gradient,
  bg,
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-white
        bg-gradient-to-br ${bg}
        p-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-md
      `}
    >

      {/* Rainbow glow */}
      <div
        className={`
          absolute -right-8 -top-8
          h-24 w-24
          rounded-full
          bg-gradient-to-br ${gradient}
          opacity-10
          blur-2xl
          transition-all duration-500
          group-hover:opacity-20
        `}
      />

      <div className="relative flex items-center justify-between gap-3">

        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-black text-slate-900">
            {value}
          </p>
        </div>

        <div
          className={`
            shrink-0
            rounded-xl
            bg-gradient-to-br ${gradient}
            p-3
            text-white
            shadow-sm
            transition-transform duration-300
            group-hover:scale-110
            group-hover:rotate-3
          `}
        >
          <Icon className="h-5 w-5" />
        </div>

      </div>
    </div>
  );
}


/* =========================================================
   FLOW STEP
========================================================= */

function FlowStep({ number, text }) {
  return (
    <li className="flex items-center gap-3">

      <span
        className="
          flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-full
          border border-white/20
          bg-white/15
          text-xs font-black
          backdrop-blur
        "
      >
        {number}
      </span>

      <span className="text-sm font-medium text-white/85">
        {text}
      </span>

    </li>
  );
}


/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
  icon: Icon,
  title,
  value,
  gradient,
}) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <div
        className={`
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl
          bg-gradient-to-br ${gradient}
          text-white
          shadow-sm
          transition-transform duration-300
          group-hover:scale-110
        `}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0">

        <p className="text-xs font-semibold text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-2xl font-black text-slate-900">
          {value}
        </p>

      </div>

    </div>
  );
}