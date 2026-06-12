import { createFileRoute } from "@tanstack/react-router";
import shotHimuda from "@/assets/projects/himuda.png";
import shotEvera from "@/assets/projects/evera.png";
import shotHadi from "@/assets/projects/hadi.jpg";
import shotSagor from "@/assets/projects/sagor.png";
import shotCbk from "@/assets/projects/cbk.png";
import shotTrialect from "@/assets/projects/trialect.png";
import shotTallento from "@/assets/projects/tallento.png";
import shotFitFab from "@/assets/projects/fitandfab.png";
import shotLush from "@/assets/projects/lush.png";
import shotHimfed from "@/assets/projects/himfed.png";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png.asset.json";
import bitdecentroMark from "@/assets/bitdecentro-mark.png.asset.json";
import photoSahil from "@/assets/sahil-kapoor.png.asset.json";
import photoRitesh from "@/assets/ritesh-khullar.png.asset.json";
import photoHardil from "@/assets/hardil-singh.png.asset.json";
import photoShaiyad from "@/assets/md-shaiyad.png.asset.json";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BitDecentro — Creative Portfolio | Blockchain & Web Development" },
      { name: "description", content: "BitDecentro's creative website portfolio: blockchain, fintech, healthcare, govtech and AI projects delivered worldwide." },
      { property: "og:title", content: "BitDecentro — Creative Website Portfolio" },
      { property: "og:description", content: "Explore our world-class portfolio of blockchain, AI and web development projects." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800;900&family=Inter:wght@400;500;600&family=Caveat:wght@600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});

const stats = [
  { num: "25+", label: "Successful Implementations" },
  { num: "30+", label: "Technology Specialists" },
  { num: "$10M+", label: "Worth of Projects Delivered" },
  { num: "20+", label: "Blockchain Consultants" },
  { num: "30+", label: "QnQ Client Engagements" },
  { num: "05+", label: "In-house Products" },
];

const industries = [
  "Banking & Fintech", "Digital Health", "Smart Real Estate",
  "Supply Networks", "EdTech & Learning", "GovTech & Public Infra",
  "Retail & Commerce", "Energy & Sustainability", "InsurTech & Risk",
  "Smart Logistics", "Gaming & Virtual Assets", "Connected Mobility",
];

const aiStack = [
  "ChatGPT 4o", "Llama-3", "PaLM 2", "Claude", "DALL·E", "Whisper",
  "Stable Diffusion", "Phi-2", "Gemini", "Mistral", "Vicuna", "BLOOM",
];

type Review = {
  rating: number;
  quote: string;
  author: string;
  designation: string;
};

type Project = {
  num: string;
  title: string;
  tagline: string;
  url?: string;
  description: string;
  highlights?: { title: string; body: string }[];
  stack: string[];
  accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
  screenshot: string;
  review?: Review;
};

const team: { name: string; role: string; bio: string; photo?: string; photoScale?: number }[] = [
  {
    name: "Sahil Kapoor",
    role: "Founder & CEO",
    bio: "Visionary leader steering BitDecentro's global blockchain and AI strategy with a decade of product and venture-building experience.",
    photo: photoSahil.url,
  },
  {
    name: "MD Shaiyad",
    role: "Co-Founder & Director IT",
    bio: "Drives engineering excellence and delivery across enterprise platforms, fintech rails and government-grade systems.",
    photo: photoShaiyad.url,
    photoScale: 1.35,
  },
  {
    name: "Ritesh Khullar",
    role: "Director & CFO",
    bio: "Leads finance, governance and partnerships — keeping growth disciplined, transparent and built to scale internationally.",
    photo: photoRitesh.url,
  },
  {
    name: "Hardil Singh",
    role: "CTO",
    bio: "Architect of our blockchain, AI and cloud stack — turning frontier research into production-ready, secure products.",
    photo: photoHardil.url,
  },
];

function initials(name: string) {
  return name.split(/\s+/).map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-4" fill={i < Math.round(rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2.5l2.95 6.16 6.8.83-5 4.7 1.32 6.76L12 17.77l-6.07 3.18L7.25 14.2l-5-4.7 6.8-.83L12 2.5z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

const projects: Project[] = [
  {
    num: "01",
    title: "HIMUDA",
    tagline: "Himachal Pradesh Housing & Urban Development Authority",
    url: "himuda.gov.in",
    description:
      "Redesigned and modernised the official digital platform of HIMUDA — organising housing schemes, tenders, notices and citizen services into a clear, accessible, government-grade experience used by thousands of citizens.",
    highlights: [
      { title: "Modernised Identity", body: "Refreshed visual language while preserving government credibility." },
      { title: "Accessible by Design", body: "Inclusive navigation across age groups and devices." },
      { title: "Scalable System", body: "Component library built for future schemes & services." },
    ],
    stack: ["React", "Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    accent: "cyan",
    screenshot: shotHimuda,
  },
  {
    num: "02",
    title: "Evera Cabs",
    tagline: "India's All-Electric Cab Service",
    url: "everacabs.com",
    description:
      "India's largest network of all-electric cabs — built around safety, comfort and zero-emission commuting. We powered the booking platform and driver operations with a delivery-grade mobile experience.",
    highlights: [
      { title: "No Surge Charge", body: "Flat, predictable fares regardless of demand or traffic." },
      { title: "Professional Drivers", body: "Full-time, certified drivers — no ride cancellations." },
      { title: "Safety First", body: "Background-verified drivers and in-car safety tech." },
    ],
    stack: ["React Native", "Node.js", "MongoDB", "Google Maps", "AWS"],
    accent: "emerald",
    screenshot: shotEvera,
  },
  {
    num: "03",
    title: "Hadi Clinic",
    tagline: "Trusted Healthcare since 1976",
    url: "hadiclinic.com",
    description:
      "A people-centred clinic platform showcasing competent doctors, skillful nurses and decades of surgical excellence — designed to feel as warm and reassuring as the clinic itself.",
    highlights: [
      { title: "Patient-Centric UX", body: "Booking, services and care journeys tailored to patients." },
      { title: "Privacy & Trust", body: "Confidentiality reinforced through every interaction." },
      { title: "State-of-the-Art", body: "Showcasing top-notch equipment & seamless care." },
    ],
    stack: ["WordPress", "PHP", "MySQL", "Cloudflare", "Elementor"],
    accent: "rose",
    screenshot: shotHadi,
  },
  {
    num: "04",
    title: "Sagor",
    tagline: "School Bus Tracking for Parents",
    description:
      "GPS-powered school bus tracking platform giving parents peace of mind. Built after extensive surveys with parents and schools — combining live tracking, verified drivers and private group rides.",
    highlights: [
      { title: "Simplified Booking", body: "Book group trips and tours in just a few clicks." },
      { title: "Tailored Experience", body: "Personalised, private rides for closed groups." },
      { title: "Verified Drivers", body: "Optimal safety with a vetted driver network." },
    ],
    stack: ["Flutter", "Firebase", "Node.js", "GPS API", "Redis"],
    accent: "amber",
    screenshot: shotSagor,
  },
  {
    num: "05",
    title: "Central Bank of Kuwait",
    tagline: "Official CBK Digital Platform",
    url: "cbk.gov.kw",
    description:
      "Digital experience for Kuwait's Central Bank — surfacing laws, regulations, exchange rates, monetary statistics, financial stability reports and CBK publications in a single authoritative platform.",
    highlights: [
      { title: "Live Key Figures", body: "Real-time exchange rates, discount rate and repo rates." },
      { title: "Banking Oversight", body: "Supervisory tools for the State's banking system." },
      { title: "Government Banker", body: "Advisory and reporting hub for State financial affairs." },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Strapi", "Vercel"],
    accent: "cyan",
    screenshot: shotCbk,
  },
  {
    num: "06",
    title: "Trialect — SeizFire",
    tagline: "Life Science Programs Dashboard",
    description:
      "Clean, accessible dashboard connecting researchers, hosts and applicants for life-science programs. Designed around clarity, professional aesthetics and intuitive program management.",
    highlights: [
      { title: "Dual-Sided", body: "Optimised for both program hosts and applicants." },
      { title: "Task Workflow", body: "Registration, browsing and task management in one flow." },
      { title: "Sector-Appropriate", body: "Professional polish for healthcare & research." },
    ],
    stack: ["React", "Redux", "Node.js", "PostgreSQL", "AWS"],
    accent: "violet",
    screenshot: shotTrialect,
  },
  {
    num: "07",
    title: "Tallento.ai",
    tagline: "AI-Powered Education Recruitment",
    url: "tallento.ai",
    description:
      "AI-powered job platform connecting top educators with reputed institutions across IIT-JEE, NEET coaching, EdTech and schools. Personalised matches, verified employers, secure applications.",
    highlights: [
      { title: "Trusted Network", body: "Only verified, reputed education-sector organisations." },
      { title: "AI Matching", body: "Personalised recommendations & streamlined applications." },
      { title: "Safety & Security", body: "Every employer is thoroughly vetted." },
    ],
    stack: ["Next.js", "OpenAI", "Pinecone", "Supabase", "Vercel"],
    accent: "emerald",
    screenshot: shotTallento,
  },
  {
    num: "08",
    title: "Fit & Fab",
    tagline: "Personal Health & Transformation",
    description:
      "Brand and platform for Swati's transformation coaching practice — 9+ years and 4,000+ clients. A warm, motivating space for fitness, nutrition and sustainable health.",
    highlights: [
      { title: "Coach Story", body: "30 kg transformation journey told with warmth & authority." },
      { title: "Programs", body: "PCOS, hormonal health, weight & lifestyle programs." },
      { title: "Community", body: "Guided plans for sustainable, lifelong fitness." },
    ],
    stack: ["WordPress", "WooCommerce", "PHP", "Stripe", "Mailchimp"],
    accent: "rose",
    screenshot: shotFitFab,
  },
  {
    num: "09",
    title: "LUSH",
    tagline: "Fresh Handmade Cosmetics",
    description:
      "Editorial brand storytelling for LUSH — celebrating handmade products, ethical sourcing and a £50M+ giving programme that funds 3,500+ groups every year.",
    highlights: [
      { title: "Brand Voice", body: "Honest, warm copy that matches LUSH's ethics." },
      { title: "Giving Programme", body: "Telling the story of £50M raised in 5 years." },
      { title: "Product Catalogue", body: "Beautiful, browse-friendly merchandising." },
    ],
    stack: ["Shopify", "Liquid", "React", "Cloudflare", "Klaviyo"],
    accent: "amber",
    screenshot: shotLush,
  },
  {
    num: "10",
    title: "HIMFED",
    tagline: "Smart Inventory & Godown Control System",
    description:
      "End-to-end digital platform for HIMFED's fertilizer distribution — procurement, warehouse operations, GST compliance, subsidy management and audit-ready reporting in one control plane.",
    highlights: [
      { title: "Real-Time Stock", body: "Live visibility across godowns and procurement orders." },
      { title: "Automated Workflows", body: "Goods receipts, approvals and ledgers in one flow." },
      { title: "Audit Ready", body: "GST-compliant, audit-grade reporting baked in." },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    accent: "violet",
    screenshot: shotHimfed,
  },
];

function accentClass(a: Project["accent"]) {
  switch (a) {
    case "cyan": return "from-[oklch(0.82_0.16_210)] to-[oklch(0.62_0.22_285)]";
    case "violet": return "from-[oklch(0.62_0.22_285)] to-[oklch(0.5_0.22_320)]";
    case "emerald": return "from-[oklch(0.78_0.18_160)] to-[oklch(0.82_0.16_210)]";
    case "amber": return "from-[oklch(0.85_0.18_75)] to-[oklch(0.7_0.2_30)]";
    case "rose": return "from-[oklch(0.78_0.18_15)] to-[oklch(0.62_0.22_285)]";
  }
}

const projectReviews: Record<string, Review> = {
  "01": { rating: 5, quote: "BitDecentro modernised our citizen-facing platform without losing the trust and credibility a government portal demands.", author: "Project Director", designation: "HIMUDA, Govt. of Himachal Pradesh" },
  "02": { rating: 5, quote: "Our booking and driver operations have never felt this smooth. A true delivery-grade product partner.", author: "Nimish Trivedi", designation: "CEO, Evera Cabs" },
  "03": { rating: 5, quote: "The team captured the warmth of our clinic in a platform that patients genuinely enjoy using.", author: "Dr. Hadi", designation: "Founder, Hadi Clinic" },
  "04": { rating: 4.5, quote: "Parents finally have peace of mind. Reliable tracking, verified drivers — exactly what we envisioned.", author: "Operations Head", designation: "Sagor Mobility" },
  "05": { rating: 5, quote: "An authoritative digital experience worthy of a central bank — engineered with precision and care.", author: "Digital Transformation Lead", designation: "Central Bank of Kuwait" },
  "06": { rating: 5, quote: "Clean, accessible and built around our researchers. The dashboard simplified everything.", author: "Program Lead", designation: "Trialect — SeizFire" },
  "07": { rating: 5, quote: "AI matching that actually works. Our placements grew, and the platform feels effortless.", author: "Founder", designation: "Tallento.ai" },
  "08": { rating: 5, quote: "My brand finally feels like me. Warm, motivating, and built to grow with my community.", author: "Swati", designation: "Founder, Fit & Fab" },
  "09": { rating: 4.5, quote: "Editorial storytelling done right — honest, beautiful and true to our ethics.", author: "Brand Manager", designation: "LUSH" },
  "10": { rating: 5, quote: "Real-time visibility across godowns transformed how we operate. Audit-ready from day one.", author: "Managing Director", designation: "HIMFED" },
};

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* WATERMARK — single full-size instance */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-[0.06]"
      >
        <img
          src={bitdecentroMark.url}
          alt=""
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
        />
      </div>
      <div className="relative z-10">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={bitdecentroLogo.url} alt="Bitdecentro" className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#industries" className="hover:text-foreground transition">Industries</a>
            <a href="#stack" className="hover:text-foreground transition">AI Stack</a>
            <a href="#portfolio" className="hover:text-foreground transition">Portfolio</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-bold hover:opacity-90 transition">
            Let's Talk
          </a>
        </div>
      </header>

      {/* GLOBAL RATING BAR */}
      <section aria-label="Client ratings" className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Stars rating={4.9} className="text-primary" />
            <span className="font-display font-extrabold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">Global Client Rating</span>
          </div>
          <div className="hidden sm:block h-5 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-primary">50+</span>
            <span className="text-muted-foreground">Verified Reviews</span>
          </div>
          <div className="hidden sm:block h-5 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-primary">98%</span>
            <span className="text-muted-foreground">Repeat & Referral Clients</span>
          </div>
          <div className="hidden sm:block h-5 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-primary">12</span>
            <span className="text-muted-foreground">Countries Served</span>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section id="top" className="relative hero-bg">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="pill-tag">bitdecentro</span>
              <span className="font-script text-4xl text-foreground/90">Creative</span>
            </div>
            <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              WEBSITE<br />PORTFOLIO
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Exploring the world of blockchain, AI and web — and the impact our work has on everyday business.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border border-border rounded-full pl-5 pr-2 py-2 bg-card/60">
              <span className="text-sm text-muted-foreground">www.bitdecentro.com</span>
              <div className="size-9 rounded-full bg-primary grid place-items-center text-primary-foreground">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" strokeLinecap="round"/></svg>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-2 text-primary/70 text-3xl">✦</div>
          </div>

          {/* Decorative orb */}
          <div className="relative h-[420px] hidden lg:block">
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-[360px] rounded-full bg-gradient-to-br from-[oklch(0.62_0.22_285)] via-[oklch(0.5_0.22_265)] to-[oklch(0.4_0.2_245)] blur-3xl opacity-60 absolute" />
              <div className="size-[320px] rounded-full border-[14px] border-violet relative animate-spin [animation-duration:30s]"
                   style={{ borderImage: "conic-gradient(from 0deg, oklch(0.62 0.22 285), oklch(0.82 0.16 210), oklch(0.62 0.22 285)) 1" }} />
              <div className="absolute size-[260px] rounded-full bg-gradient-to-br from-violet to-[oklch(0.4_0.22_265)] glow" />
              <div className="absolute size-[140px] rounded-2xl bg-background/90 backdrop-blur grid place-items-center animate-spin [animation-duration:12s] shadow-xl">
                <img src={bitdecentroLogo.url} alt="bitdecentro" className="size-20 object-contain" />
              </div>
            </div>
            <div className="absolute top-6 right-10 size-20 dot-pattern opacity-60" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="pill-tag">About bitdecentro</span>
            <h2 className="mt-8 font-display font-extrabold text-4xl md:text-5xl leading-tight">
              The world's leading <span className="text-primary">blockchain</span> consulting & development firm.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              At <span className="text-foreground font-semibold">BitDecentro</span>, we serve as an end-to-end innovation partner — guiding businesses through every phase of their blockchain transformation. From advisory to full-scale deployment, we design and deliver custom solutions aligned with your goals.
            </p>
            <p>
              We craft personalised roadmaps that integrate with existing systems, enable rapid PoCs and pilot programs, and turn bold ideas into production-ready solutions that drive efficiency, trust and transparency.
            </p>
            <p>
              More than developers — our team includes thought leaders and educators who empower clients to make informed decisions in a collaborative, future-shaping environment.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden card-shadow">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-6 text-center">
              <div className="font-display font-black text-3xl md:text-4xl text-primary">{s.num}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="pill-tag">Industries We Support</span>
          <h2 className="mt-8 font-display font-extrabold text-4xl md:text-5xl">
            Twelve verticals. <span className="font-script text-primary text-5xl md:text-6xl">one</span> partner.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((i, idx) => (
            <div key={i} className="group relative rounded-2xl bg-card border border-border p-6 hover:border-primary/60 transition overflow-hidden">
              <div className="absolute -right-6 -top-6 size-24 stripe-pattern opacity-10 group-hover:opacity-30 transition" />
              <div className="text-xs text-muted-foreground font-mono">{String(idx + 1).padStart(2, "0")}</div>
              <div className="mt-2 font-display font-bold text-xl">{i}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI STACK */}
      <section id="stack" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="pill-tag">AI Innovation</span>
            <h2 className="mt-8 font-display font-extrabold text-4xl md:text-5xl leading-tight">
              Our tech stack <br /><span className="font-script text-primary text-5xl md:text-6xl">&</span> expertise.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              We build with frontier models and battle-tested frameworks — from LLMs and diffusion models to ML pipelines and visualisation toolkits.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {aiStack.map((m) => (
              <span key={m} className="px-5 py-3 rounded-full bg-card border border-border text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition cursor-default">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO INTRO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 pt-24 pb-8 text-center">
        <span className="pill-tag">Our Portfolio</span>
        <h2 className="mt-8 font-display font-black text-5xl md:text-7xl leading-none">
          <span className="font-script text-primary text-6xl md:text-7xl font-normal">Selected</span><br />
          PROJECTS
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          A curated showcase of platforms we've designed, engineered and shipped across blockchain, fintech, healthcare and government.
        </p>
      </section>

      {/* PROJECT CARDS */}
      <div className="mx-auto max-w-7xl px-6 pb-24 space-y-10">
        {projects.map((p, idx) => (
          <ProjectCard key={p.num} project={p} reverse={idx % 2 === 1} />
        ))}
      </div>

      {/* CORE TEAM */}
      <section id="team" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="pill-tag">Core Team</span>
          <h2 className="mt-8 font-display font-extrabold text-4xl md:text-5xl">
            The people behind <span className="font-script text-primary text-5xl md:text-6xl">bitdecentro</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A close-knit leadership team blending product vision, engineering depth and operational rigour.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <article key={m.name} className="rounded-3xl bg-card border border-border p-6 hover:border-primary/60 transition card-shadow flex flex-col items-center text-center">
              <div className="relative">
                <div className="size-28 rounded-full overflow-hidden bg-gradient-to-br from-[oklch(0.62_0.22_285)] to-[oklch(0.82_0.16_210)] grid place-items-center text-2xl font-display font-black text-primary-foreground shadow-xl ring-2 ring-primary/30">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="size-full object-cover"
                      style={m.photoScale ? { transform: `scale(${m.photoScale})` } : undefined}
                    />
                  ) : (
                    initials(m.name)
                  )}
                </div>
                <span className="absolute -bottom-1 -right-1 text-primary text-xl">✦</span>
              </div>
              <h3 className="mt-5 font-display font-extrabold text-xl">{m.name}</h3>
              <div className="mt-1 text-xs uppercase tracking-wider text-primary font-semibold">{m.role}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="relative hero-bg border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="pill-tag">Let's Explore!</span>
            <h2 className="mt-8 font-display font-black text-5xl md:text-6xl leading-none">
              Got a bold <br />
              <span className="font-script text-primary text-6xl md:text-7xl font-normal">idea?</span> <br />
              Let's build it.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              From a 30-minute discovery call to a multi-year roadmap — reach out and we'll meet you where you are.
            </p>
          </div>
          <div className="space-y-4">
            <ContactRow label="Email" value="info@bitdecentro.com" href="mailto:info@bitdecentro.com" />
            <ContactRow label="Website" value="www.bitdecentro.com" href="https://www.bitdecentro.com" />
            <ContactRow label="Phone" value="+971 54 296 9003" href="tel:+971542969003" />
            <div className="rounded-2xl bg-card border border-border p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Office — UAE</div>
              <div className="mt-2 text-foreground">
                BitDecentro FZ-LLC, Compass Building, Al Shohada Road,<br />
                Al Hamra Industrial Zone, Ras Al Khaimah
              </div>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Office — India</div>
              <div className="mt-2 text-foreground">
                F 383, 74, Sector 91 Rd, Sahibzada Ajit Singh Nagar, Punjab 140307
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={bitdecentroLogo.url} alt="Bitdecentro" className="h-6 w-auto" />
          </div>
          <div>© {new Date().getFullYear()} BitDecentro FZ-LLC. All rights reserved.</div>
        </div>
      </footer>
      </div>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center justify-between rounded-2xl bg-card border border-border p-5 hover:border-primary/60 transition group">
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 font-display font-bold text-lg">{value}</div>
      </div>
      <div className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-45 transition">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </a>
  );
}

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const grad = accentClass(project.accent);
  return (
    <article className="relative rounded-3xl bg-card border border-border overflow-hidden card-shadow">
      <div className={`grid lg:grid-cols-2 gap-0`}>
        {/* TEXT SIDE */}
        <div className={`p-8 md:p-12 ${reverse ? "lg:order-2" : ""}`}>
          <div className="flex items-center justify-between">
            <div className="font-script text-5xl text-primary leading-none">{project.num}</div>
            {project.url && (
              <a href={`https://${project.url}`} target="_blank" rel="noreferrer"
                 className="text-xs font-mono px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition">
                {project.url} ↗
              </a>
            )}
          </div>

          <h3 className="mt-6 font-display font-black text-4xl md:text-5xl tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-primary font-semibold">{project.tagline}</p>

          <div className="mt-6 inline-block">
            <span className="pill-tag">Project Description</span>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {project.highlights && (
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {project.highlights.map((h) => (
                <div key={h.title} className="rounded-xl bg-background/60 border border-border p-4">
                  <div className="font-display font-bold text-sm text-primary">{h.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{h.body}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8">
            <div className="inline-block">
              <span className="pill-tag">Our Tech Stack</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-background border border-border text-foreground/90">
                  {s}
                </li>
              ))}
            </ul>
          </div>


          {project.review && (
            <figure className="mt-8 rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center justify-between">
                <Stars rating={project.review.rating} className="text-primary" />
                <span className="text-xs font-mono text-muted-foreground">{project.review.rating.toFixed(1)} / 5</span>
              </div>
              <blockquote className="mt-3 text-sm text-foreground/90 leading-relaxed italic">
                "{project.review.quote}"
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-br from-[oklch(0.62_0.22_285)] to-[oklch(0.82_0.16_210)] grid place-items-center text-[11px] font-display font-black text-primary-foreground">
                  {initials(project.review.author)}
                </div>
                <div>
                  <div className="text-sm font-display font-bold">{project.review.author}</div>
                  <div className="text-xs text-muted-foreground">{project.review.designation}</div>
                </div>
              </figcaption>
            </figure>
          )}
        </div>


        {/* VISUAL SIDE */}
        <div className={`relative min-h-[480px] ${reverse ? "lg:order-1" : ""}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${grad} opacity-90`} />
          <div className="absolute inset-0 dot-pattern opacity-30 mix-blend-overlay" />
          {/* Mock browser */}
          <div className="absolute inset-6 md:inset-10 rounded-xl bg-background/95 border border-border shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-card">
              <span className="size-2.5 rounded-full bg-[oklch(0.62_0.22_25)]" />
              <span className="size-2.5 rounded-full bg-[oklch(0.78_0.18_75)]" />
              <span className="size-2.5 rounded-full bg-[oklch(0.72_0.18_150)]" />
              <div className="flex-1 ml-3 text-[10px] text-muted-foreground font-mono truncate">
                {project.url ?? `${project.title.toLowerCase().replace(/\s+/g, "")}.app`}
              </div>
            </div>
            <div className="flex-1 relative bg-white flex items-center justify-center p-2">
              <img
                src={project.screenshot}
                alt={`${project.title} website screenshot`}
                loading="lazy"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          </div>
          <div className="absolute top-3 right-3 text-foreground/60 text-2xl">✦</div>
        </div>
      </div>
    </article>
  );
}

