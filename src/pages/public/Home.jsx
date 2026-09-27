
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MessageSquareText,
  Sparkles,
  Star,
  ShoppingCart,
  Heart,
  Cake,
  PartyPopper,
  Baby,
  Gift,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import { useState, useEffect } from "react";

import { EVENT_TYPES } from "../../context/AppDataContext";

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

export default function Home() {
  const heroImages = ["/images/hero_mandapam.jpg", 
    "/hero/hero_2.jpg", 
    "/hero/hero_3.jpg", 
    "/hero/hero_4.jpg", 
    "/hero/hero_5.jpg", 
    "/hero/hero_6.jpg", 
    "/hero/hero_7.jpg", 
    "/hero/hero_8.jpg", 
    "/hero/hero_9.jpg", 
    "/hero/hero_10.jpg",]; 
    const [currentImage, setCurrentImage] = useState(0); 
    useEffect(() => { const interval = setInterval(() => 
      { setCurrentImage((prev) => (prev + 1) % heroImages.length); }, 5000); 
      return () => clearInterval(interval); }, 
      [heroImages.length]);
  return (
    <div className="w-full overflow-hidden">
      {/* =========================
          HERO SECTION
      ========================== */}
      <section id="hero" className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-slate-950" > {/* ===================================================== HERO BACKGROUND SLIDESHOW ====================================================== */} <div className="absolute inset-0"> {heroImages.map((image, index) => (<img key={image} src={image} alt={`Event decoration ${index + 1}`} className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1800ms] ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`} />))} </div> {/* Main Dark Overlay */} <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,20,.94)_0%,rgba(8,11,28,.78)_42%,rgba(10,10,20,.48)_100%)]" /> {/* Extra Overlay */} <div className="absolute inset-0 bg-black/20" /> {/* ===================================================== HERO CONTENT ====================================================== */} <div className="relative flex min-h-[calc(100svh-72px)] w-full items-center px-5 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-16"> <div className="w-full max-w-4xl text-white"> {/* Platform Badge */} <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-slate-900/50 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur sm:px-5 sm:text-sm"> <span className="rounded-full bg-blue-500/30 p-1.5"> <Sparkles className="h-4 w-4 text-blue-300" /> </span> <span className="truncate"> Tamil Nadu Event Planning Platform </span> </div> {/* Heading */} <h1 className="mt-7 max-w-4xl text-[clamp(2.35rem,7vw,5.5rem)] font-black leading-[0.98] tracking-[-0.04em]"> Curate Magnificent <br /> Celebrations with <br /> <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-emerald-400 bg-clip-text text-transparent"> Simple Planning </span> </h1> {/* Gradient Line */} <div className="mt-7 flex max-w-sm gap-2 sm:max-w-md"> <span className="h-2 flex-1 rounded-full bg-yellow-400" /> <span className="h-2 flex-1 rounded-full bg-orange-400" /> <span className="h-2 flex-1 rounded-full bg-emerald-400" /> <span className="h-2 flex-1 rounded-full bg-sky-400" /> </div> {/* Description */} <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl"> Choose your function, select the services you need, add them to your cart and send one enquiry. Our team can then contact you and turn the requirement into a real event plan. </p> {/* Buttons */} <div className="mt-8 flex flex-col gap-3 sm:flex-row"> <Link to="/celebrations" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-900/30 transition duration-300 hover:scale-[1.02]" > Plan My Function <ArrowRight className="h-4 w-4" /> </Link> <Link to="/ai-planner" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition duration-300 hover:bg-white/15" > <Sparkles className="h-4 w-4 text-yellow-300" /> Try AI Estimation </Link> </div> {/* Features */} <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3"> {["Verified service options", "One enquiry for your plan", "LocalStorage demo flow",].map((item) => (<div key={item} className="flex items-center gap-2 rounded-2xl border border-white/15 bg-slate-900/40 px-3 py-3 text-xs font-semibold text-white/90 backdrop-blur" > <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" /> {item} </div>))} </div> {/* ================================================= SLIDE INDICATORS ================================================== */} <div className="mt-7 flex items-center gap-2"> {heroImages.map((_, index) => (<button key={index} type="button" onClick={() => setCurrentImage(index)} aria-label={`Show hero image ${index + 1}`} className={`h-1.5 rounded-full transition-all duration-500 ${index === currentImage ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`} />))} </div> </div> </div> </section>

      {/* =========================
    EVENT TYPES
========================== */}

      <section className="w-full bg-slate-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="w-full">

          {/* Section Header */}
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-orange-500"></span>
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500">
                  Explore Experiences
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                What are you
                <span className="text-orange-500"> planning?</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                From intimate celebrations to grand occasions, find everything you
                need to make your special day memorable.
              </p>
            </div>

            <Link
              to="/celebrations"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {EVENT_TYPES.map((event, index) => (
              <Link
                key={event.id}
                to={`/celebrations?type=${event.id}`}
                className="group relative overflow-hidden rounded-3xl bg-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden sm:h-56 lg:h-64">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[11px] font-black text-slate-900 shadow-lg backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute right-3 top-3 flex h-9 w-9 translate-y-[-8px] items-center justify-center rounded-full bg-orange-500 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  {/* Event Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-extrabold leading-tight text-white sm:text-base">
                      {event.name}
                    </p>

                    <div className="mt-2 h-[2px] w-0 bg-orange-400 transition-all duration-500 group-hover:w-10" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>



      {/* =========================
          HOW IT WORKS
      ========================== */}
      <section className="w-full bg-gradient-to-br from-orange-50 via-white to-violet-50 px-3 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-16 xl:px-16">

        {/* Section Heading */}
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-9 lg:mb-10">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
            Simple & Easy
          </span>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            How Eventara Works
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            Plan your event in three simple steps. Choose the services you need,
            build your event package, and send your enquiry.
          </p>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-3 gap-2 sm:gap-4 lg:gap-5">

          {[
            [
              CalendarDays,
              "Choose",
              "Pick your event type, date, location and guest count.",
            ],
            [
              ShoppingCart,
              "Build",
              "Select only the services you need and add them to your cart.",
            ],
            [
              MessageSquareText,
              "Submit",
              "Send one clear enquiry. Admin sees it instantly in localStorage.",
            ],
          ].map(([Icon, title, text], index) => (
            <div
              key={title}
              className="group rounded-2xl border border-orange-100 bg-white/90 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-3xl sm:p-5 lg:p-6"
            >
              {/* Step Number + Icon */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-100 text-orange-600 sm:h-10 sm:w-10 sm:rounded-2xl lg:h-11 lg:w-11">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <span className="text-[10px] font-black text-orange-300 sm:text-xs">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm font-black text-slate-900 sm:mt-4 sm:text-base lg:text-lg">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
                {text}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
    CUSTOMER REVIEWS
===================================================== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-orange-50 via-white to-violet-50 px-3 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16 xl:px-16">

        {/* =================================================
      CONTINUOUS BACKGROUND ANIMATION
  ================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Orange Glow */}
          <div
            className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl"
            style={{
              animation: "reviewGlowOne 8s ease-in-out infinite",
            }}
          />

          {/* Pink Glow */}
          <div
            className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"
            style={{
              animation: "reviewGlowTwo 10s ease-in-out infinite",
            }}
          />

          {/* Violet Glow */}
          <div
            className="absolute bottom-[-100px] left-[35%] h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"
            style={{
              animation: "reviewGlowThree 9s ease-in-out infinite",
            }}
          />

          {/* Soft Grid */}
          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(15,23,42,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.7)_1px,transparent_1px)] [background-size:40px_40px]" />

        </div>

        {/* =================================================
      SECTION HEADING
  ================================================== */}

        <div className="relative z-10 mx-auto mb-8 max-w-2xl text-center sm:mb-10">

          {/* Badge */}
          <div
            className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-orange-600 shadow-sm backdrop-blur-sm sm:text-xs"
            style={{
              animation: "reviewBadge 3s ease-in-out infinite",
            }}
          >
            <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            Customer Reviews
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Event Planners
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            See what our customers say about their experience with Eventara
            and the services they selected for their special occasions.
          </p>

        </div>

        {/* =================================================
      OVERALL RATING
  ================================================== */}

        <div
          className="relative z-10 mx-auto mb-9 flex w-fit items-center gap-3 rounded-2xl border border-orange-100 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:mb-10"
          style={{
            animation: "ratingFloat 4s ease-in-out infinite",
          }}
        >

          {/* Rating */}
          <div className="text-center">
            <div className="text-xl font-black text-slate-900 sm:text-2xl">
              4.9
            </div>

            <div className="mt-0.5 text-[10px] font-semibold text-slate-500">
              Overall Rating
            </div>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-slate-200" />

          {/* Stars */}
          <div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="inline-block text-sm text-yellow-400 sm:text-base"
                  style={{
                    animation: "starPulse 2s ease-in-out infinite",
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="mt-0.5 text-[10px] font-semibold text-slate-500">
              Trusted by our customers
            </p>
          </div>

        </div>

        {/* =================================================
      REVIEW CARDS
  ================================================== */}

        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">

          {[
            {
              name: "Priya & Arun",
              event: "Wedding",
              review:
                "Eventara made our wedding planning much easier. We could compare different vendors and choose the services that matched our requirements.",
              initials: "PA",
            },
            {
              name: "Rahul Kumar",
              event: "Birthday Celebration",
              review:
                "The process was simple and convenient. I selected the decoration and catering services I needed and submitted my enquiry in just a few minutes.",
              initials: "RK",
            },
            {
              name: "Meena Sharma",
              event: "Corporate Event",
              review:
                "A very useful platform for planning events. Having different service providers in one place saved us a lot of time during our event preparation.",
              initials: "MS",
            },
          ].map((review, index) => (
            <div
              key={review.name}
              className="group relative"
              style={{
                animation: "reviewCardFloat 6s ease-in-out infinite",
                animationDelay: `${index * 500}ms`,
              }}
            >

              {/* =================================================
            ANIMATED CARD GLOW
        ================================================== */}

              <div
                className="pointer-events-none absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-r from-orange-300/0 via-pink-300/0 to-violet-300/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-orange-300/60 group-hover:via-pink-300/40 group-hover:to-violet-300/60 group-hover:opacity-100"
              />

              {/* =================================================
            CARD
        ================================================== */}

              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-orange-200 group-hover:shadow-xl group-hover:shadow-orange-100/70 sm:p-6">

                {/* Moving Glow */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-orange-100/70 blur-2xl"
                  style={{
                    animation: "cardGlow 5s ease-in-out infinite",
                    animationDelay: `${index * 700}ms`,
                  }}
                />

                {/* Small Decorative Circle */}
                <div
                  className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-violet-100/50 blur-2xl"
                  style={{
                    animation: "cardGlow 6s ease-in-out infinite reverse",
                  }}
                />

                {/* Stars */}
                <div className="relative flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className="inline-block text-sm text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        animation: "miniStar 3s ease-in-out infinite",
                        animationDelay: `${starIndex * 120}ms`,
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="relative mt-4 text-sm leading-6 text-slate-600">
                  “{review.review}”
                </p>

                {/* Customer */}
                <div className="relative mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">

                  {/* Avatar */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-xs font-black text-white shadow-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-200"
                    style={{
                      animation: "avatarFloat 4s ease-in-out infinite",
                      animationDelay: `${index * 400}ms`,
                    }}
                  >
                    {review.initials}
                  </div>

                  {/* Customer Details */}
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-black text-slate-900">
                      {review.name}
                    </h3>

                    <p className="text-xs font-medium text-slate-500">
                      {review.event}
                    </p>
                  </div>

                  {/* Verified */}
                  <div className="ml-auto shrink-0 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-emerald-600 transition-all duration-300 group-hover:bg-emerald-100">
                    Verified
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* =================================================
      ANIMATIONS
  ================================================== */}

        <style>{`
    @keyframes reviewGlowOne {
      0%,
      100% {
        transform: translate(0px, 0px) scale(1);
      }

      50% {
        transform: translate(40px, 30px) scale(1.15);
      }
    }

    @keyframes reviewGlowTwo {
      0%,
      100% {
        transform: translate(0px, 0px) scale(1);
      }

      50% {
        transform: translate(-35px, -25px) scale(1.12);
      }
    }

    @keyframes reviewGlowThree {
      0%,
      100% {
        transform: translate(0px, 0px) scale(1);
      }

      50% {
        transform: translate(25px, -35px) scale(1.15);
      }
    }

    @keyframes reviewBadge {
      0%,
      100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-3px);
      }
    }

    @keyframes ratingFloat {
      0%,
      100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes reviewCardFloat {
      0%,
      100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-6px);
      }
    }

    @keyframes cardGlow {
      0%,
      100% {
        transform: scale(1);
        opacity: 0.55;
      }

      50% {
        transform: scale(1.25);
        opacity: 0.85;
      }
    }

    @keyframes avatarFloat {
      0%,
      100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-3px);
      }
    }

    @keyframes starPulse {
      0%,
      100% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.18);
      }
    }

    @keyframes miniStar {
      0%,
      100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-2px);
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

      </section>
      {/* =========================
          AI PLANNER
      ========================== */}
      <section className="w-full px-5 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-16">
        <div className="w-full rounded-[2rem] bg-slate-950 p-6 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-yellow-300">
                <Star className="h-5 w-5 fill-current" />

                <span className="text-sm font-bold">
                  AI Event Estimation
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                Not sure what your function may cost?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                Enter event type, guests and budget. The planner gives a quick
                category-wise estimate before you submit your enquiry.
              </p>
            </div>

            <Link
              to="/ai-planner"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-slate-900 hover:bg-yellow-50"
            >
              Open AI Planner
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

