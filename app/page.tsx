"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ───────────────────────────── ICONS (inline SVG) ───────────────────────────── */

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function WrenchIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

/* Service tab icons */
function EngineIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BrakeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  );
}

function TransmissionIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path strokeLinecap="round" d="M6 8v8M12 8v4a4 4 0 004 4h0M18 8v8" />
    </svg>
  );
}

function BoltIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function OilCanIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function TireIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path strokeLinecap="round" d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function QuoteIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" opacity={0.15}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
    </svg>
  );
}

/* ───────────────────────────── CONSTANTS ───────────────────────────── */

const PHONE = "(732) 555-0187";
const PHONE_HREF = "tel:+17325550187";
const ADDRESS = "1247 River Ave, Lakewood, NJ 08701";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_TABS = [
  {
    id: "engine",
    label: "Engine",
    icon: EngineIcon,
    description: "Complete engine diagnostics and repair services to keep your vehicle running at peak performance.",
    services: [
      { name: "Engine Diagnostics", desc: "Computer-assisted troubleshooting to pinpoint issues fast" },
      { name: "Tune-Ups", desc: "Spark plugs, ignition, fuel system optimization" },
      { name: "Engine Repair", desc: "Head gaskets, timing belts, valve adjustments" },
      { name: "Check Engine Light", desc: "OBD-II scanning and complete code diagnosis" },
    ],
  },
  {
    id: "brakes",
    label: "Brakes",
    icon: BrakeIcon,
    description: "Your safety is our priority. Expert brake services to ensure reliable stopping power in any condition.",
    services: [
      { name: "Brake Pad Replacement", desc: "Premium pads for all makes and models" },
      { name: "Rotor Resurfacing", desc: "Smooth, even braking surface restoration" },
      { name: "Brake Fluid Flush", desc: "DOT-compliant fluid exchange for optimal performance" },
      { name: "ABS Diagnostics", desc: "Anti-lock brake system testing and repair" },
    ],
  },
  {
    id: "transmission",
    label: "Transmission",
    icon: TransmissionIcon,
    description: "Smooth shifting starts here. From fluid changes to complete rebuilds, we handle it all.",
    services: [
      { name: "Fluid Change", desc: "Fresh transmission fluid for smoother operation" },
      { name: "Transmission Repair", desc: "Solenoids, seals, and component replacement" },
      { name: "Complete Rebuild", desc: "Full transmission overhaul when replacement isn't needed" },
      { name: "Clutch Service", desc: "Manual transmission clutch diagnosis and replacement" },
    ],
  },
  {
    id: "electrical",
    label: "Electrical",
    icon: BoltIcon,
    description: "Modern vehicles run on complex electrical systems. Our techs diagnose and fix them all.",
    services: [
      { name: "Battery Service", desc: "Testing, charging, and replacement" },
      { name: "Alternator Repair", desc: "Charging system diagnostics and replacement" },
      { name: "Starter Motor", desc: "Diagnosis and replacement for reliable starts" },
      { name: "Wiring Repair", desc: "Electrical shorts, harness repair, and lighting" },
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: OilCanIcon,
    description: "Preventive maintenance saves you money. Stay ahead of problems with regular service.",
    services: [
      { name: "Oil Change", desc: "Conventional, synthetic blend, or full synthetic" },
      { name: "Filter Replacement", desc: "Air, cabin, fuel, and oil filters" },
      { name: "Fluid Services", desc: "Coolant, power steering, and brake fluid" },
      { name: "Multi-Point Inspection", desc: "Comprehensive vehicle health check" },
    ],
  },
  {
    id: "tires",
    label: "Tires",
    icon: TireIcon,
    description: "Keep your ride smooth and your tread safe. Full tire services for every vehicle type.",
    services: [
      { name: "Tire Rotation", desc: "Even wear for extended tire life" },
      { name: "Wheel Alignment", desc: "Precise alignment for straight, safe driving" },
      { name: "Tire Replacement", desc: "Top brands at competitive prices" },
      { name: "Balancing", desc: "Eliminate vibration for a smooth ride" },
    ],
  },
];

const STATS = [
  { value: "20+", label: "Years in Business" },
  { value: "15,000+", label: "Cars Serviced" },
  { value: "4.9", label: "Star Rating", icon: StarIcon },
  { value: "6", label: "ASE-Certified Techs" },
];

const TESTIMONIALS = [
  {
    name: "Mike R.",
    text: "Charlie's crew diagnosed my engine issue in 30 minutes when two other shops couldn't figure it out. Honest pricing, no upselling. This is the only place I trust with my car.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    text: "Same-day brake service and they even gave me a ride home while they worked on it. The price was exactly what they quoted -- no surprises. Family-owned shops like this are rare.",
    rating: 5,
  },
  {
    name: "David L.",
    text: "Been bringing my trucks here for 8 years. Charlie himself walks you through what needs fixing and what can wait. That kind of honesty keeps me coming back every time.",
    rating: 5,
  },
  {
    name: "Jennifer K.",
    text: "My transmission was slipping and I was terrified of the cost. Charlie's team rebuilt it for half what the dealer quoted. Still running perfectly two years later. Incredible work.",
    rating: 5,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Drop Off",
    description: "Drive in or call ahead. We'll get your vehicle checked in quickly with a thorough initial assessment.",
  },
  {
    step: "02",
    title: "Diagnose",
    description: "Our ASE-certified techs run a complete diagnostic. You'll get a clear explanation and honest quote before any work begins.",
  },
  {
    step: "03",
    title: "Drive Away",
    description: "We fix it right the first time. Most repairs done same day. Drive away with confidence and a warranty you can count on.",
  },
];

/* ───────────────────────────── SCROLL ANIMATION ───────────────────────────── */

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ───────────────────────────── MAIN PAGE ───────────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("engine");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeService = SERVICE_TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* ═══════════════════ TOP BAR ═══════════════════ */}
      <div className="bg-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Mon-Fri 7:30AM-6PM</span>
              <span className="sm:hidden">M-F 7:30-6</span>
              <span className="text-text-lighter mx-1">|</span>
              <span>Sat 8AM-2PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="w-4 h-4 text-primary" />
              <span className="hidden md:inline">{ADDRESS}</span>
              <span className="md:hidden">Lakewood, NJ</span>
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════ NAV (dark-solid) ═══════════════════ */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-dark/95 backdrop-blur-md shadow-xl" : "bg-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Charlie's Auto Service"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-bold transition-all hover:scale-105 animate-pulse-glow"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>{PHONE}</span>
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={PHONE_HREF}
              className="md:hidden flex items-center gap-1.5 bg-primary text-white px-3 py-2 rounded-lg font-bold text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 space-y-1 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-bold mt-2"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════ HERO SPLIT ═══════════════════ */}
      <section className="relative bg-gradient-to-br from-dark via-dark-lighter to-dark overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="text-center lg:text-left animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <ShieldCheckIcon className="w-4 h-4" />
                ASE-Certified Mechanics
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Lakewood&apos;s Most{" "}
                <span className="text-primary">Trusted</span> Auto Repair
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Family-owned since 2004. Honest diagnostics, same-day service, and pricing you can trust. Your car deserves Charlie&apos;s.
              </p>

              {/* Phone massive */}
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white text-xl sm:text-2xl font-black px-8 py-4 sm:px-10 sm:py-5 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-primary/30 animate-pulse-glow mb-6"
              >
                <PhoneIcon className="w-7 h-7" />
                {PHONE}
              </a>

              <p className="text-primary-light font-bold text-lg">
                Same-Day Service Available
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 text-gray-400 text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Free Estimates
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  All Makes &amp; Models
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  36-Month Warranty
                </span>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative animate-slide-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-mechanic.png"
                  alt="Expert mechanic working on engine"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <StarIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xs text-text-light font-medium">152+ Five-Star Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICE TABS (SIGNATURE) ═══════════════════ */}
      <section id="services" className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              What We Do Best
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-4">
              Complete Auto Repair Services
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              From routine maintenance to major repairs, our ASE-certified team handles it all under one roof.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {SERVICE_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                        : "bg-white text-text-light hover:bg-primary/5 hover:text-primary border border-border"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left: description */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <activeService.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-dark">
                      {activeService.label}
                    </h3>
                  </div>
                  <p className="text-text-light text-lg mb-6">
                    {activeService.description}
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 w-fit"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Schedule Service
                  </a>
                </div>

                {/* Right: sub-services */}
                <div className="bg-light p-8 md:p-10 lg:p-12">
                  <div className="space-y-5">
                    {activeService.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircleIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-dark">{service.name}</h4>
                          <p className="text-text-light text-sm">{service.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ STAT BAR ═══════════════════ */}
      <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
        {/* Diagonal accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/20 skew-x-[-12deg] translate-x-16" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, idx) => (
              <AnimatedSection
                key={idx}
                className="text-center"
                delay={`delay-${(idx + 1) * 100}`}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {stat.value}
                  </span>
                  {stat.icon && <stat.icon className="w-8 h-8 text-yellow-400" />}
                </div>
                <p className="text-white/80 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: image */}
            <AnimatedSection animation="animate-slide-left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-shop.png"
                  alt="Charlie's Auto Service shop exterior"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg font-black text-lg shadow-lg">
                  Est. 2004
                </div>
              </div>
            </AnimatedSection>

            {/* Right: copy */}
            <AnimatedSection animation="animate-slide-right">
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
                About Charlie&apos;s
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-dark mb-6 leading-tight">
                Family-Owned. <br />
                Community-Trusted.
              </h2>
              <div className="space-y-4 text-text-light text-lg">
                <p>
                  For over 20 years, Charlie Schmidt has been fixing cars and building trust in Lakewood. What started as a one-bay garage has grown into a full-service repair shop with six ASE-certified technicians -- but the values haven&apos;t changed.
                </p>
                <p>
                  At Charlie&apos;s, you&apos;ll never get sold a repair you don&apos;t need. We walk you through every diagnosis, explain your options, and let you decide. That&apos;s how we&apos;ve earned 152 five-star reviews and customers who&apos;ve been coming back for decades.
                </p>
              </div>

              {/* Certification badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 bg-light px-5 py-3 rounded-xl border border-border">
                  <ShieldCheckIcon className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-bold text-dark text-sm">ASE Certified</p>
                    <p className="text-text-lighter text-xs">All Technicians</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-light px-5 py-3 rounded-xl border border-border">
                  <WrenchIcon className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-bold text-dark text-sm">AAA Approved</p>
                    <p className="text-text-lighter text-xs">Repair Facility</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-light px-5 py-3 rounded-xl border border-border">
                  <StarIcon className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="font-bold text-dark text-sm">36-Month</p>
                    <p className="text-text-lighter text-xs">Parts &amp; Labor Warranty</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section id="reviews" className="py-16 md:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              Customer Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Don&apos;t Take Our Word For It
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from real customers who trust Charlie&apos;s with their vehicles.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <AnimatedSection
                key={idx}
                className="bg-dark-lighter rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
                delay={`delay-${(idx + 1) * 100}`}
              >
                <QuoteIcon className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-3 h-3 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS TIMELINE ═══════════════════ */}
      <section id="process" className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-4">
              Simple as 1-2-3
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Getting your car fixed shouldn&apos;t be complicated. Here&apos;s our straightforward process.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-primary/20" />

            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection
                key={idx}
                className="relative text-center"
                delay={`delay-${(idx + 1) * 200}`}
              >
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-primary/30">
                  {step.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-dark mb-3">{step.title}</h3>
                <p className="text-text-light leading-relaxed">{step.description}</p>

                {/* Arrow between steps on mobile */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ChevronDownIcon className="w-8 h-8 text-primary/40" />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-br from-accent-dark via-accent to-accent-dark overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <WrenchIcon className="w-12 h-12 text-white/60 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Car Trouble? <br />
              <span className="text-yellow-400">Call Charlie&apos;s Now.</span>
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-8 max-w-xl mx-auto">
              Don&apos;t wait for a small problem to become a big one. Same-day service available for most repairs.
            </p>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white text-2xl sm:text-3xl font-black px-10 py-5 sm:px-14 sm:py-6 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-black/30 animate-pulse-glow mb-6"
            >
              <PhoneIcon className="w-8 h-8" />
              {PHONE}
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/70 text-sm mt-4">
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" />
                {ADDRESS}
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                Mon-Fri 7:30AM-6PM
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="bg-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1: Brand */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Charlie's Auto Service"
                width={160}
                height={44}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Lakewood&apos;s trusted auto repair shop. Family-owned since 2004, serving the community with honest, quality service.
              </p>
            </div>

            {/* Col 2: Services */}
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {SERVICE_TABS.map((tab) => (
                  <li key={tab.id}>
                    <a
                      href="#services"
                      onClick={() => setActiveTab(tab.id)}
                      className="hover:text-primary transition-colors"
                    >
                      {tab.label} Repair
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <PhoneIcon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <a href={PHONE_HREF} className="hover:text-primary transition-colors font-medium">
                    {PHONE}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPinIcon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ClockIcon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p>Mon-Fri: 7:30AM - 6:00PM</p>
                    <p>Saturday: 8:00AM - 2:00PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Charlie&apos;s Auto Service. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Website by{" "}
              <a href="https://maivenai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">
                Maiven
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
