import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ChevronRight,
  CalendarDays,
  Heart,
  Shield,
  FileText,
  RefreshCcw,
  ArrowUp,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
  Send,
} from "lucide-react";

import Brand from "../Brand";

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const currentYear = new Date().getFullYear();

  // =====================================================
  // BACK TO TOP
  // =====================================================

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // OPEN MODAL
  // =====================================================

  const openModal = (type) => {
    setActiveModal(type);
    document.body.style.overflow = "hidden";
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "";
  };

  // =====================================================
  // ESCAPE KEY
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && activeModal) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative w-full overflow-hidden border-t border-orange-100 bg-gradient-to-br from-orange-50 via-white to-violet-50">

        {/* =====================================================
            ANIMATED BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Orange Glow */}
          <div
            className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl"
            style={{
              animation: "footerGlowOne 9s ease-in-out infinite",
            }}
          />

          {/* Violet Glow */}
          <div
            className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"
            style={{
              animation: "footerGlowTwo 11s ease-in-out infinite",
            }}
          />

          {/* Pink Glow */}
          <div
            className="absolute bottom-[-100px] left-1/3 h-72 w-72 rounded-full bg-pink-200/25 blur-3xl"
            style={{
              animation: "footerGlowThree 10s ease-in-out infinite",
            }}
          />

          {/* Soft Grid */}
          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(15,23,42,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.8)_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-14">

          {/* =================================================
              CTA BANNER
          ================================================== */}

          <div className="relative -mt-1 overflow-hidden rounded-b-3xl border border-orange-100 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 p-[1px] shadow-xl shadow-orange-100/40">

            <div className="relative overflow-hidden rounded-[1.4rem] bg-white/95 px-5 py-5 backdrop-blur-xl sm:px-7 sm:py-6">

              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-orange-100 blur-3xl" />

              <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div className="flex items-start gap-3 sm:items-center">

                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-200"
                    style={{
                      animation: "footerIconFloat 4s ease-in-out infinite",
                    }}
                  >
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs">
                      Make it memorable
                    </p>

                    <h2 className="mt-1 text-lg font-black text-slate-900 sm:text-xl">
                      Ready to plan your next celebration?
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      Discover venues, catering, decoration and more in one
                      place.
                    </p>
                  </div>

                </div>

                <Link
                  to="/celebrations"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-xs font-black text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:text-sm"
                >
                  Start Planning

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>
            </div>
          </div>

          {/* =================================================
              FOOTER CONTENT
          ================================================== */}

          <div className="grid gap-8 py-9 sm:py-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

            {/* =================================================
                BRAND
            ================================================== */}

            <div>

              <Brand />

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-500 sm:text-sm">
                Eventara makes event planning easier by helping you discover
                and select services for weddings, birthdays, engagements,
                baby showers, housewarmings and corporate celebrations.
              </p>

              {/* Trust Badge */}

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-[10px] font-bold text-emerald-700 sm:text-xs">

                <ShieldCheck className="h-4 w-4" />

                Trusted Event Planning Platform

              </div>

              {/* Rating */}

              <div className="mt-4 flex items-center gap-2">

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <span className="text-xs font-bold text-slate-600">
                  4.9/5
                </span>

                <span className="text-[10px] text-slate-400">
                  Loved by event planners
                </span>

              </div>

              {/* Social */}

              <div className="mt-5">

                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                  Follow Eventara
                </p>

                <div className="flex flex-wrap gap-2">

                  <SocialButton
                    href="https://www.instagram.com/"
                    label="Instagram"
                    icon={<Instagram className="h-4 w-4" />}
                    className="hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                  />

                  <SocialButton
                    href="https://www.facebook.com/"
                    label="Facebook"
                    icon={<Facebook className="h-4 w-4" />}
                    className="hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  />

                  <SocialButton
                    href="https://www.youtube.com/"
                    label="YouTube"
                    icon={<Youtube className="h-4 w-4" />}
                    className="hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  />

                  <SocialButton
                    href="https://www.linkedin.com/"
                    label="LinkedIn"
                    icon={<Linkedin className="h-4 w-4" />}
                    className="hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
                  />

                </div>
              </div>

            </div>

            {/* =================================================
                PLAN YOUR EVENT
            ================================================== */}

            <FooterColumn
              icon={<CalendarDays className="h-4 w-4" />}
              iconClass="bg-orange-100 text-orange-600"
              title="Plan Your Event"
            >

              <FooterLink to="/celebrations">
                Celebrations
              </FooterLink>

              <FooterLink to="/ai-planner">
                AI Event Planner
              </FooterLink>

              <FooterLink to="/cart">
                My Cart
              </FooterLink>

              <FooterLink to="/my-requests">
                My Requests
              </FooterLink>

              <FooterLink to="/contact">
                Contact Us
              </FooterLink>

            </FooterColumn>

            {/* =================================================
                EVENT SERVICES
            ================================================== */}

            <FooterColumn
              icon={<Heart className="h-4 w-4" />}
              iconClass="bg-pink-100 text-pink-600"
              title="Event Services"
            >

              <FooterLink to="/celebrations">
                Venues & Mandapams
              </FooterLink>

              <FooterLink to="/celebrations">
                Catering
              </FooterLink>

              <FooterLink to="/celebrations">
                Decoration
              </FooterLink>

              <FooterLink to="/celebrations">
                Photography
              </FooterLink>

              <FooterLink to="/celebrations">
                Makeup & Styling
              </FooterLink>

              <FooterLink to="/celebrations">
                Entertainment
              </FooterLink>

            </FooterColumn>

            {/* =================================================
                SUPPORT
            ================================================== */}

            <FooterColumn
              icon={<Shield className="h-4 w-4" />}
              iconClass="bg-violet-100 text-violet-600"
              title="Support"
            >

              <FooterLink to="/contact">
                Help & Contact
              </FooterLink>

              <PolicyButton
                onClick={() => openModal("privacy")}
              >
                Privacy Policy
              </PolicyButton>

              <PolicyButton
                onClick={() => openModal("terms")}
              >
                Terms & Conditions
              </PolicyButton>

              <PolicyButton
                onClick={() => openModal("cancellation")}
              >
                Cancellation Policy
              </PolicyButton>

              <FooterLink to="/admin/login">
                Admin Login
              </FooterLink>

            </FooterColumn>

          </div>

          {/* =================================================
              CONTACT CARDS
          ================================================== */}

          <div className="grid gap-3 border-t border-slate-200/70 py-6 sm:grid-cols-3">

            <ContactCard
              icon={<Phone className="h-4 w-4" />}
              title="Call Us"
              value="+91 99999 99999"
              href="tel:+919999999999"
              iconClass="bg-orange-100 text-orange-600"
            />

            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              title="Email Us"
              value="hello@eventara.com"
              href="mailto:hello@eventara.com"
              iconClass="bg-violet-100 text-violet-600"
            />

            <ContactCard
              icon={<MapPin className="h-4 w-4" />}
              title="Our Location"
              value="Tamil Nadu, India"
              iconClass="bg-emerald-100 text-emerald-600"
            />

          </div>

          {/* =================================================
              QUICK NAVIGATION
          ================================================== */}

          <div className="border-t border-slate-200/70 py-5">

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold text-slate-500 sm:justify-start sm:text-xs">

              <Link
                to="/"
                className="transition-colors hover:text-orange-600"
              >
                Home
              </Link>

              <Link
                to="/celebrations"
                className="transition-colors hover:text-orange-600"
              >
                Celebrations
              </Link>

              <Link
                to="/ai-planner"
                className="transition-colors hover:text-orange-600"
              >
                AI Planner
              </Link>

              <Link
                to="/cart"
                className="transition-colors hover:text-orange-600"
              >
                Cart
              </Link>

              <Link
                to="/my-requests"
                className="transition-colors hover:text-orange-600"
              >
                My Requests
              </Link>

              <Link
                to="/contact"
                className="transition-colors hover:text-orange-600"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================== */}

          <div className="flex flex-col gap-4 border-t border-slate-200/70 py-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}

            <div className="text-center text-[10px] leading-5 text-slate-500 sm:text-left sm:text-xs">

              <span>
                © {currentYear}{" "}
                <span className="font-black text-slate-700">
                  Eventara
                </span>
                . All rights reserved.
              </span>

              <span className="mx-2 hidden text-slate-300 sm:inline">
                •
              </span>

              <span className="block sm:inline">
                Celebrate • Plan • Experience
              </span>

            </div>

            {/* Bottom Actions */}

            <div className="flex flex-wrap items-center justify-center gap-3">

              <button
                onClick={() => openModal("privacy")}
                className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 transition-colors hover:text-orange-600 sm:text-xs"
              >
                <FileText className="h-3.5 w-3.5" />
                Privacy
              </button>

              <span className="text-slate-300">
                •
              </span>

              <button
                onClick={() => openModal("terms")}
                className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 transition-colors hover:text-orange-600 sm:text-xs"
              >
                <Shield className="h-3.5 w-3.5" />
                Terms
              </button>

              <span className="text-slate-300">
                •
              </span>

              <button
                onClick={() => openModal("cancellation")}
                className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 transition-colors hover:text-orange-600 sm:text-xs"
              >
                <RefreshCcw className="h-3.5 w-3.5" />
                Cancellation
              </button>

              <button
                onClick={scrollTop}
                aria-label="Back to top"
                title="Back to top"
                className="ml-1 flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                <ArrowUp className="h-4 w-4" />
              </button>

            </div>

          </div>

        </div>
      </footer>

      {/* =====================================================
          PRIVACY MODAL
      ====================================================== */}

      {activeModal === "privacy" && (
        <PolicyModal
          title="Privacy Policy"
          subtitle="How Eventara handles your information"
          icon={<ShieldCheck className="h-6 w-6" />}
          iconClass="bg-emerald-100 text-emerald-600"
          accent="emerald"
          onClose={closeModal}
        >

          <p>
            At Eventara, we respect your privacy and are committed to
            protecting the information you provide while using our event
            planning platform.
          </p>

          <PolicySection title="Information We Collect">
            We may collect information such as your name, email address,
            phone number, event details, selected services and enquiry
            information when you use our platform.
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            Your information is used to process event enquiries, provide
            event planning assistance, display your submitted requests and
            help our admin team contact you regarding your requirements.
          </PolicySection>

          <PolicySection title="Local Storage">
            This project uses browser LocalStorage to maintain account,
            cart, selected services and enquiry information. Clearing
            browser storage may remove locally stored information.
          </PolicySection>

          <PolicySection title="Information Protection">
            We take reasonable steps to protect the information handled by
            the platform. This demo version stores information locally in
            the user's browser.
          </PolicySection>

          <PolicySection title="Contact">
            If you have questions about this privacy policy, contact us at
            hello@eventara.com.
          </PolicySection>

        </PolicyModal>
      )}

      {/* =====================================================
          TERMS MODAL
      ====================================================== */}

      {activeModal === "terms" && (
        <PolicyModal
          title="Terms & Conditions"
          subtitle="Rules for using the Eventara platform"
          icon={<FileText className="h-6 w-6" />}
          iconClass="bg-violet-100 text-violet-600"
          accent="violet"
          onClose={closeModal}
        >

          <p>
            By using Eventara, you agree to use the platform responsibly
            and provide accurate information when submitting event
            requirements.
          </p>

          <PolicySection title="Platform Usage">
            Eventara provides a platform for customers to explore event
            services and submit their requirements. Service availability,
            pricing and final arrangements may vary by service provider.
          </PolicySection>

          <PolicySection title="Customer Information">
            Customers are responsible for providing accurate contact
            details, event dates, guest counts and other information
            required for planning.
          </PolicySection>

          <PolicySection title="Service Providers">
            Listed companies and service providers may have their own
            pricing, availability and service conditions. Customers should
            confirm final arrangements with the respective provider.
          </PolicySection>

          <PolicySection title="Pricing">
            Prices displayed on the platform may represent starting prices
            or estimated amounts. Final pricing should be confirmed before
            booking.
          </PolicySection>

          <PolicySection title="Enquiries">
            Submitting an enquiry does not automatically guarantee a
            confirmed booking. The admin or service provider may contact
            the customer for confirmation.
          </PolicySection>

          <PolicySection title="Changes">
            Eventara may update platform features, service information and
            these terms when required.
          </PolicySection>

        </PolicyModal>
      )}

      {/* =====================================================
          CANCELLATION MODAL
      ====================================================== */}

      {activeModal === "cancellation" && (
        <PolicyModal
          title="Cancellation Policy"
          subtitle="Important information about cancellations"
          icon={<RefreshCcw className="h-6 w-6" />}
          iconClass="bg-orange-100 text-orange-600"
          accent="orange"
          onClose={closeModal}
        >

          <p>
            Cancellation terms can vary depending on the selected event
            service company and the nature of the event.
          </p>

          <PolicySection title="Before Confirmation">
            Enquiries submitted through Eventara are not automatically
            confirmed bookings. Customers can discuss changes with the
            admin or respective service provider.
          </PolicySection>

          <PolicySection title="After Confirmation">
            Once a service has been confirmed, cancellation charges or
            refund conditions may apply according to the service provider's
            policy.
          </PolicySection>

          <PolicySection title="Refunds">
            Any applicable refund should be discussed with the respective
            service provider or Eventara admin team before cancellation.
          </PolicySection>

          <PolicySection title="Contact">
            For cancellation-related questions, contact
            hello@eventara.com with your enquiry details.
          </PolicySection>

        </PolicyModal>
      )}
    </>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  icon,
  iconClass,
  title,
  children,
}) {
  return (
    <div>

      <div className="flex items-center gap-2">

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </span>

        <h3 className="text-sm font-black text-slate-900">
          {title}
        </h3>

      </div>

      <div className="mt-4 grid gap-2.5">
        {children}
      </div>

    </div>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-1 text-xs font-medium text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-orange-600 sm:text-sm"
    >
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-orange-500" />

      {children}
    </Link>
  );
}


/* =========================================================
   POLICY BUTTON
========================================================= */

function PolicyButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-1 text-left text-xs font-medium text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-orange-600 sm:text-sm"
    >
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-orange-500" />

      {children}
    </button>
  );
}


/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({
  href,
  label,
  icon,
  className = "",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </a>
  );
}


/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon,
  iconClass,
  title,
  value,
  href,
}) {
  const content = (
    <div className="group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/75 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md">

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <p className="mt-0.5 truncate text-xs font-bold text-slate-700 sm:text-sm">
          {value}
        </p>

      </div>

    </div>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return content;
}


/* =========================================================
   POLICY MODAL
========================================================= */

function PolicyModal({
  title,
  subtitle,
  icon,
  iconClass,
  accent,
  children,
  onClose,
}) {
  const accentStyles = {
    orange: {
      glow: "bg-orange-300/20",
      line: "from-orange-500 via-pink-500 to-violet-500",
      button: "from-orange-500 to-pink-500",
    },

    emerald: {
      glow: "bg-emerald-300/20",
      line: "from-emerald-500 via-teal-500 to-cyan-500",
      button: "from-emerald-500 to-teal-500",
    },

    violet: {
      glow: "bg-violet-300/20",
      line: "from-violet-500 via-pink-500 to-orange-500",
      button: "from-violet-500 to-pink-500",
    },
  };

  const colors =
    accentStyles[accent] || accentStyles.orange;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >

      {/* =================================================
          MODAL BACKDROP
      ================================================== */}

      <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-md" />

      {/* Animated Background Glow */}

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${colors.glow}`}
        style={{
          animation: "modalGlow 7s ease-in-out infinite",
        }}
      />

      {/* =================================================
          MODAL
      ================================================== */}

      <div
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-[0_30px_100px_rgba(15,23,42,0.20)] backdrop-blur-2xl"
        style={{
          animation: "modalEnter 0.35s ease-out both",
        }}
      >

        {/* Gradient Top Line */}

        <div
          className={`h-1 w-full bg-gradient-to-r ${colors.line}`}
        />

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/70 bg-white/80 px-4 py-4 backdrop-blur-xl sm:px-6">

          <div className="flex min-w-0 items-center gap-3">

            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}
            >
              {icon}
            </div>

            <div className="min-w-0">

              <h2
                id="policy-modal-title"
                className="truncate text-base font-black text-slate-900 sm:text-lg"
              >
                {title}
              </h2>

              <p className="mt-0.5 truncate text-[10px] text-slate-500 sm:text-xs">
                {subtitle}
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:rotate-90 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">

          {/* Intro */}

          <div className="mb-5 flex items-start gap-3 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-pink-50 p-3.5">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>

            <p className="text-xs leading-5 text-orange-800">
              Please review the following information carefully before
              continuing to use the Eventara platform.
            </p>

          </div>

          {/* Content */}

          <div className="space-y-5 text-sm leading-6 text-slate-600">
            {children}
          </div>

          {/* Acknowledgement */}

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <p className="text-xs leading-5 text-emerald-700">
              By continuing to use Eventara, you acknowledge that you have
              read and understood the information provided above.
            </p>

          </div>

        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-200/70 bg-white/80 px-4 py-3 backdrop-blur-xl sm:px-6">

          <div className="hidden items-center gap-1.5 text-[10px] font-medium text-slate-400 sm:flex">
            <ShieldCheck className="h-3.5 w-3.5" />
            Eventara Information
          </div>

          <button
            onClick={onClose}
            className={`ml-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${colors.button} px-5 py-2.5 text-xs font-black text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:text-sm`}
          >
            Got it
            <CheckCircle2 className="h-4 w-4" />
          </button>

        </div>

      </div>
    </div>
  );
}


/* =========================================================
   POLICY SECTION
========================================================= */

function PolicySection({
  title,
  children,
}) {
  return (
    <section className="group">

      <h3 className="mb-1.5 flex items-center gap-2 font-black text-slate-900">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />

        {title}
      </h3>

      <p className="text-sm leading-6 text-slate-600">
        {children}
      </p>

    </section>
  );
}


/* =========================================================
   ANIMATIONS
========================================================= */

const footerStyles = `
  @keyframes footerGlowOne {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }

    50% {
      transform: translate(40px, 25px) scale(1.15);
    }
  }

  @keyframes footerGlowTwo {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }

    50% {
      transform: translate(-35px, -25px) scale(1.12);
    }
  }

  @keyframes footerGlowThree {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }

    50% {
      transform: translate(25px, -30px) scale(1.15);
    }
  }

  @keyframes footerIconFloat {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes modalGlow {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }

    50% {
      transform: translate(-50%, -50%) scale(1.15);
      opacity: 0.8;
    }
  }

  @keyframes modalEnter {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.96);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
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
`;

if (
  typeof document !== "undefined" &&
  !document.getElementById("eventara-footer-styles")
) {
  const style = document.createElement("style");
  style.id = "eventara-footer-styles";
  style.innerHTML = footerStyles;
  document.head.appendChild(style);
}