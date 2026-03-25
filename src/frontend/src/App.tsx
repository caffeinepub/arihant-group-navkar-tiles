import {
  Award,
  Bath,
  Building2,
  ChevronRight,
  Clock,
  DoorOpen,
  Layers,
  MapPin,
  Menu,
  Palette,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AnimatedSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`section-animate ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    title: "Premium Tiles",
    desc: "Ceramic, vitrified, marble & designer tiles for floors, walls and outdoor spaces.",
    icon: Layers,
    img: "/assets/generated/product-tiles.dim_600x400.jpg",
    badge: "Best Seller",
  },
  {
    title: "Modular Kitchen",
    desc: "Italian-inspired modular kitchens with smart storage and premium finishes.",
    icon: Sparkles,
    img: "/assets/generated/product-kitchen.dim_600x400.jpg",
    badge: "Trending",
  },
  {
    title: "Plywood & Boards",
    desc: "BWR & BWP grade plywood, MDF, particle boards and laminates for every need.",
    icon: Palette,
    img: "/assets/generated/product-plywood.dim_600x400.jpg",
    badge: null,
  },
  {
    title: "Doors & Windows",
    desc: "UPVC, wooden and aluminium frames with premium hardware and glass options.",
    icon: DoorOpen,
    img: "/assets/generated/product-doors.dim_600x400.jpg",
    badge: null,
  },
  {
    title: "Sanitary Ware",
    desc: "Designer bathroom fittings, wash basins, bathtubs, and accessories.",
    icon: Bath,
    img: "/assets/generated/product-sanitary.dim_600x400.jpg",
    badge: "New",
  },
  {
    title: "Interior Design",
    desc: "End-to-end interior solutions, false ceilings, wall cladding & décor.",
    icon: Building2,
    img: "/assets/generated/gallery-interior1.dim_600x400.jpg",
    badge: null,
  },
];

const FEATURES = [
  { icon: Award, label: "500+ Projects", sub: "Successfully completed" },
  { icon: Users, label: "1,000+ Clients", sub: "Across Maharashtra" },
  { icon: Shield, label: "15+ Years", sub: "Industry experience" },
  { icon: Building2, label: "6 Categories", sub: "All under one roof" },
];

const WHY_CARDS = [
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "ISI-certified, brand-certified products from India’s top manufacturers. Zero compromise.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    desc: "Trained designers and product specialists help you choose the right solution every time.",
  },
  {
    icon: Sparkles,
    title: "Complete Solutions",
    desc: "From raw materials to finished interiors — everything available in one showroom visit.",
  },
  {
    icon: Users,
    title: "After-Sale Support",
    desc: "Dedicated support for installation guidance, warranty claims, and maintenance queries.",
  },
  {
    icon: Building2,
    title: "Exclusive Designs",
    desc: "Access to exclusive collections not available elsewhere in the region.",
  },
  {
    icon: Star,
    title: "Best Pricing",
    desc: "Best price guarantee with zero hidden charges and completely transparent billing.",
  },
];

const REVIEWS = [
  {
    name: "Rajesh Sharma",
    location: "Aurangabad",
    text: "Excellent quality tiles! Arihant Group transformed our home beautifully. The staff was incredibly helpful in choosing the right designs for each room.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Priya Patel",
    location: "Pune",
    text: "Best modular kitchen experience. Professional staff and premium products at competitive prices. Our kitchen looks absolutely stunning!",
    rating: 5,
    initials: "PP",
  },
  {
    name: "Sunil Deshmukh",
    location: "Nashik",
    text: "Highly recommend for all building needs. Great service from selection to installation. They handled everything professionally.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Kavita Joshi",
    location: "Aurangabad",
    text: "Amazing collection of bathroom fittings. Top-notch quality at very reasonable prices. Will definitely come back for our next project!",
    rating: 5,
    initials: "KJ",
  },
];

const GALLERY = [
  {
    src: "/assets/generated/product-tiles.dim_600x400.jpg",
    label: "Premium Floor Tiles",
  },
  {
    src: "/assets/generated/product-kitchen.dim_600x400.jpg",
    label: "Modular Kitchen",
  },
  {
    src: "/assets/generated/gallery-interior1.dim_600x400.jpg",
    label: "Interior Design",
  },
  {
    src: "/assets/generated/gallery-showroom.dim_600x400.jpg",
    label: "Our Showroom",
  },
  {
    src: "/assets/generated/gallery-bedroom.dim_600x400.jpg",
    label: "Bedroom Design",
  },
  {
    src: "/assets/generated/product-sanitary.dim_600x400.jpg",
    label: "Luxury Bathroom",
  },
];

const PARTICLES = [0, 1, 2, 3, 4, 5];

const WA = "919423904024";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function nav(href: string) {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  function submitInquiry(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hello Arihant Group!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AProduct: ${encodeURIComponent(form.product)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
  }

  const inputStyle = {
    background: "rgba(10,22,40,0.8)",
    border: "1px solid rgba(59,130,246,0.25)",
  };

  function onFocus(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    e.target.style.borderColor = "rgba(59,130,246,0.7)";
    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
    e.target.style.outline = "none";
  }
  function onBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    e.target.style.borderColor = "rgba(59,130,246,0.25)";
    e.target.style.boxShadow = "none";
  }

  return (
    <div
      style={{ background: "#060e1e", color: "#f0f4ff", minHeight: "100vh" }}
    >
      {/* NAVBAR */}
      <header
        data-ocid="nav.section"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              type="button"
              onClick={() => nav("#home")}
              className="flex items-center gap-3"
            >
              <img
                src="/assets/generated/arihant-logo-blue-transparent.dim_400x120.png"
                alt="Arihant Group"
                className="h-12 md:h-14 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight text-left">
                <span
                  className="font-black tracking-widest brand-glow"
                  style={{
                    fontSize: "1.15rem",
                    color: "#ffffff",
                    letterSpacing: "0.12em",
                  }}
                >
                  ARIHANT GROUP
                </span>
                <span
                  className="text-blue-300 font-medium"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}
                >
                  NAVKAR TILES
                </span>
              </div>
            </button>
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => nav(link.href)}
                  className="text-sm font-medium text-blue-200 hover:text-blue-400 transition-colors tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:09423904024"
                className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                  boxShadow: "0 0 15px rgba(59,130,246,0.3)",
                }}
              >
                <Phone size={13} /> 09423904024
              </a>
            </nav>
            <button
              type="button"
              data-ocid="nav.toggle"
              className="md:hidden p-2 rounded-lg text-blue-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            data-ocid="nav.modal"
            className="md:hidden glass-nav border-t border-blue-900/40"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => nav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:09423904024"
                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-blue-300"
              >
                <Phone size={13} /> 09423904024
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-building-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,rgba(6,14,30,0.88) 0%,rgba(30,64,175,0.38) 60%,rgba(6,14,30,0.85) 100%)",
          }}
        />
        {PARTICLES.map((i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              background: "rgba(59,130,246,0.4)",
              top: `${15 + i * 12}%`,
              left: `${8 + i * 14}%`,
              animation: `float-particle ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm font-semibold tracking-widest text-blue-200 border border-blue-500/40"
            style={{ background: "rgba(59,130,246,0.1)" }}
          >
            <span style={{ color: "#60a5fa" }}>✦</span>
            <span>A Trusted Name —</span>
            <span className="font-bold brand-glow" style={{ color: "#93c5fd" }}>
              ARIHANT GROUP
            </span>
            <span style={{ color: "#60a5fa" }}>✦</span>
          </div>
          <h1 className="font-display font-bold text-white leading-tight mb-6 text-4xl sm:text-5xl lg:text-7xl">
            Complete Building
            <br />
            <span className="blue-text">Solutions</span> Under One Roof
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Tiles, Modular Kitchen, Plywood &amp; Interior Products with Premium
            Quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => nav("#products")}
              className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                boxShadow: "0 0 25px rgba(59,130,246,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 40px rgba(59,130,246,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 25px rgba(59,130,246,0.4)";
              }}
            >
              <span className="flex items-center gap-2">
                Explore Products{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() => nav("#inquiry")}
              className="px-8 py-4 rounded-full font-bold text-blue-300 border-2 border-blue-500/50 hover:bg-blue-500/10 hover:text-white hover:border-blue-400 transition-all duration-300"
              style={{ backdropFilter: "blur(10px)" }}
            >
              Send Inquiry
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-blue-400 opacity-60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-blue-400 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        data-ocid="about.section"
        className="py-24 px-4"
        style={{ background: "#060e1e" }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
                  About Us
                </p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                  Building Dreams
                  <br />
                  <span className="blue-text">Since 2009</span>
                </h2>
                <p className="text-blue-200 leading-relaxed mb-5">
                  <strong className="text-white brand-glow">
                    ARIHANT GROUP
                  </strong>{" "}
                  was established with a vision to provide complete building and
                  interior solutions under one roof. Located in the heart of
                  Chhatrapati Sambhajinagar, we are the most trusted name in
                  quality tiles, modular kitchens, plywood, doors, sanitary
                  ware, and interior design.
                </p>
                <p className="text-blue-200 leading-relaxed mb-8">
                  With over 15 years of experience and 500+ successfully
                  completed projects, our experts help you choose the best
                  materials for your dream home or commercial space. Every space
                  deserves premium quality without compromise.
                </p>
                <button
                  type="button"
                  data-ocid="about.primary_button"
                  onClick={() => nav("#contact")}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 25px rgba(59,130,246,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Visit Our Showroom <ChevronRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {FEATURES.map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="glass-card rounded-2xl p-6 flex flex-col items-center text-center blue-glow-hover"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        border: "1px solid rgba(59,130,246,0.3)",
                      }}
                    >
                      <Icon size={22} className="text-blue-400" />
                    </div>
                    <p className="font-bold text-white text-lg leading-tight">
                      {label}
                    </p>
                    <p className="text-blue-300 text-sm mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why"
        data-ocid="why.section"
        className="py-24 px-4"
        style={{
          background:
            "linear-gradient(180deg,#060e1e 0%,#0a1628 50%,#060e1e 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
                Why Choose Us
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                The <span className="blue-text">ARIHANT</span> Advantage
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CARDS.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title}>
                <div
                  data-ocid={`why.item.${i + 1}`}
                  className="glass-card rounded-2xl p-7 h-full blue-glow-hover"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(30,64,175,0.5),rgba(59,130,246,0.25))",
                      border: "1px solid rgba(59,130,246,0.3)",
                    }}
                  >
                    <Icon size={26} className="text-blue-300" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
                  <p className="text-blue-200 leading-relaxed text-sm">
                    {desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        data-ocid="products.section"
        className="py-24 px-4"
        style={{ background: "#060e1e" }}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
                Our Products
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                Premium <span className="blue-text">Collections</span>
              </h2>
              <p className="text-blue-300 mt-4 max-w-xl mx-auto">
                Curated selection of top-quality building materials for your
                dream space.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRODUCTS.map(({ title, desc, icon: Icon, img, badge }, i) => (
              <AnimatedSection key={title}>
                <div
                  data-ocid={`products.item.${i + 1}`}
                  className="glass-card rounded-2xl overflow-hidden product-card-hover cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(0deg,rgba(6,14,30,0.65) 0%,transparent 60%)",
                      }}
                    />
                    {badge && (
                      <span
                        className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{
                          background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                        }}
                      >
                        {badge}
                      </span>
                    )}
                    <div
                      className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(59,130,246,0.2)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(59,130,246,0.4)",
                      }}
                    >
                      <Icon size={18} className="text-blue-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-blue-200 text-sm leading-relaxed mb-4">
                      {desc}
                    </p>
                    <button
                      type="button"
                      data-ocid="products.primary_button"
                      onClick={() => nav("#inquiry")}
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                    >
                      Get Quote <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        data-ocid="gallery.section"
        className="py-24 px-4"
        style={{
          background: "linear-gradient(180deg,#060e1e 0%,#0a1628 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
                Our Work
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                Project <span className="blue-text">Gallery</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map(({ src, label }, i) => (
              <AnimatedSection key={label}>
                <div
                  data-ocid={`gallery.item.${i + 1}`}
                  className="gallery-item relative rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ border: "1px solid rgba(59,130,246,0.15)" }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={label}
                      className="gallery-img w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end"
                    style={{
                      background:
                        "linear-gradient(0deg,rgba(6,14,30,0.85) 0%,rgba(30,64,175,0.18) 100%)",
                    }}
                  >
                    <div className="p-4">
                      <p className="font-semibold text-white">{label}</p>
                      <p className="text-blue-300 text-xs mt-0.5">
                        Arihant Group Project
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        data-ocid="reviews.section"
        className="py-24 px-4"
        style={{ background: "#060e1e" }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
                Testimonials
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                What Clients <span className="blue-text">Say</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map(({ name, location, text, rating, initials }, i) => (
              <AnimatedSection key={name}>
                <div
                  data-ocid={`reviews.item.${i + 1}`}
                  className="glass-card rounded-2xl p-6 h-full blue-glow-hover flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    <span className="text-yellow-400 text-sm tracking-widest">
                      {"★".repeat(rating)}
                    </span>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div
                    className="flex items-center gap-3 pt-4"
                    style={{ borderTop: "1px solid rgba(59,130,246,0.2)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                      }}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{name}</p>
                      <p className="text-blue-400 text-xs">{location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section
        id="inquiry"
        data-ocid="inquiry.section"
        className="py-24 px-4"
        style={{
          background: "linear-gradient(180deg,#060e1e 0%,#0a1628 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
                Get In Touch
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                Send an <span className="blue-text">Inquiry</span>
              </h2>
              <p className="text-blue-300 mt-4">
                Fill the form and we&apos;ll reply on WhatsApp instantly.
              </p>
            </div>
            <form
              data-ocid="inquiry.panel"
              onSubmit={submitInquiry}
              className="glass-card rounded-3xl p-8 md:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="inq-name"
                    className="block text-sm font-medium text-blue-200 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="inq-name"
                    data-ocid="inquiry.input"
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-400 transition-all"
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label
                    htmlFor="inq-phone"
                    className="block text-sm font-medium text-blue-200 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="inq-phone"
                    data-ocid="inquiry.input"
                    required
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-400 transition-all"
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="inq-email"
                  className="block text-sm font-medium text-blue-200 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="inq-email"
                  data-ocid="inquiry.input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-400 transition-all"
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div>
                <label
                  htmlFor="inq-product"
                  className="block text-sm font-medium text-blue-200 mb-2"
                >
                  Product Interest
                </label>
                <select
                  id="inq-product"
                  data-ocid="inquiry.select"
                  value={form.product}
                  onChange={(e) =>
                    setForm({ ...form, product: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl text-white transition-all"
                  style={{
                    ...inputStyle,
                    color: form.product ? "white" : "#60a5fa",
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                >
                  <option value="" style={{ background: "#0a1628" }}>
                    Select a product category
                  </option>
                  <option value="Tiles" style={{ background: "#0a1628" }}>
                    Premium Tiles
                  </option>
                  <option
                    value="Modular Kitchen"
                    style={{ background: "#0a1628" }}
                  >
                    Modular Kitchen
                  </option>
                  <option value="Plywood" style={{ background: "#0a1628" }}>
                    Plywood &amp; Boards
                  </option>
                  <option
                    value="Doors & Windows"
                    style={{ background: "#0a1628" }}
                  >
                    Doors &amp; Windows
                  </option>
                  <option
                    value="Sanitary Ware"
                    style={{ background: "#0a1628" }}
                  >
                    Sanitary Ware
                  </option>
                  <option
                    value="Interior Design"
                    style={{ background: "#0a1628" }}
                  >
                    Interior Design
                  </option>
                  <option value="Other" style={{ background: "#0a1628" }}>
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="inq-message"
                  className="block text-sm font-medium text-blue-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="inq-message"
                  data-ocid="inquiry.textarea"
                  rows={4}
                  placeholder="Tell us about your project or requirements..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-blue-400 transition-all resize-none"
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <button
                data-ocid="inquiry.submit_button"
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                  boxShadow: "0 0 25px rgba(59,130,246,0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 40px rgba(59,130,246,0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 25px rgba(59,130,246,0.4)";
                }}
              >
                <SiWhatsapp size={22} /> Send via WhatsApp
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-24 px-4"
        style={{ background: "#060e1e" }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
                Find Us
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                Visit Our <span className="blue-text">Showroom</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                lines: [
                  "Beed Bypass Rd, opp. Guru Lawns,",
                  "Chhatrapati Sambhajinagar,",
                  "Maharashtra",
                ],
                action: {
                  label: "Get Directions",
                  href: "https://maps.google.com/?q=Arihant+Group+Beed+Bypass+Chhatrapati+Sambhajinagar",
                },
              },
              {
                icon: Phone,
                title: "Call / WhatsApp",
                lines: ["09423904024", "", "Mon–Sat: 9:30 AM – 8:00 PM"],
                action: { label: "Call Now", href: "tel:09423904024" },
              },
              {
                icon: Clock,
                title: "Business Hours",
                lines: [
                  "Monday – Saturday",
                  "9:30 AM – 8:00 PM",
                  "Sunday: 9:30 AM – 1:00 PM",
                ],
                action: { label: "WhatsApp Us", href: `https://wa.me/${WA}` },
              },
            ].map(({ icon: Icon, title, lines, action }, i) => (
              <AnimatedSection key={title}>
                <div
                  data-ocid={`contact.item.${i + 1}`}
                  className="glass-card rounded-2xl p-8 text-center blue-glow-hover flex flex-col h-full"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(30,64,175,0.5),rgba(59,130,246,0.25))",
                      border: "1px solid rgba(59,130,246,0.35)",
                    }}
                  >
                    <Icon size={28} className="text-blue-300" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-4">{title}</h3>
                  <div className="text-blue-200 leading-relaxed mb-6 flex-1">
                    {lines.map((line, j) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: contact lines are static ordered content
                      <p key={j}>{line || <>&nbsp;</>}</p>
                    ))}
                  </div>
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-80"
                    style={{
                      background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                    }}
                  >
                    {action.label} <ChevronRight size={14} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-ocid="cta.section"
        className="py-20 px-4 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#0a1628 0%,#1e3a8a 50%,#0a1628 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%,#3b82f6 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-5">
            Ready to Build Your <span className="blue-text">Dream Space?</span>
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Visit our showroom or contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-ocid="cta.primary_button"
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white"
              style={{
                background: "#25d366",
                boxShadow: "0 0 25px rgba(37,211,102,0.4)",
              }}
            >
              <SiWhatsapp size={20} /> Chat on WhatsApp
            </a>
            <a
              data-ocid="cta.secondary_button"
              href="tel:09423904024"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white border-2 border-blue-500/50 hover:bg-blue-500/10 transition-all"
            >
              <Phone size={18} /> Call 09423904024
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        data-ocid="footer.section"
        className="py-16 px-4"
        style={{
          background: "#040b18",
          borderTop: "1px solid rgba(59,130,246,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <img
                src="/assets/generated/arihant-logo-blue-transparent.dim_400x120.png"
                alt="Arihant Group"
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-blue-300 text-sm leading-relaxed max-w-xs">
                Complete building solutions under one roof. Premium tiles,
                modular kitchens, plywood, doors, sanitary ware, and interior
                design.
              </p>
              <div className="flex gap-4 mt-6">
                {[
                  {
                    href: "https://instagram.com",
                    icon: SiInstagram,
                    bg: "rgba(59,130,246,0.15)",
                    bd: "rgba(59,130,246,0.3)",
                    col: "#93c5fd",
                  },
                  {
                    href: "https://facebook.com",
                    icon: SiFacebook,
                    bg: "rgba(59,130,246,0.15)",
                    bd: "rgba(59,130,246,0.3)",
                    col: "#93c5fd",
                  },
                  {
                    href: `https://wa.me/${WA}`,
                    icon: SiWhatsapp,
                    bg: "rgba(37,211,102,0.15)",
                    bd: "rgba(37,211,102,0.3)",
                    col: "#25d366",
                  },
                ].map(({ href, icon: Icon, bg, bd, col }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: bg, border: `1px solid ${bd}` }}
                  >
                    <Icon size={16} style={{ color: col }} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      data-ocid="footer.link"
                      onClick={() => nav(link.href)}
                      className="text-blue-300 hover:text-blue-100 text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-blue-300">
                <li className="flex gap-2">
                  <MapPin
                    size={14}
                    className="text-blue-400 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    Beed Bypass Rd, opp. Guru Lawns, Chhatrapati Sambhajinagar
                  </span>
                </li>
                <li className="flex gap-2">
                  <Phone size={14} className="text-blue-400 mt-0.5" />
                  <a href="tel:09423904024" className="hover:text-white">
                    09423904024
                  </a>
                </li>
                <li className="flex gap-2">
                  <Clock size={14} className="text-blue-400 mt-0.5" />
                  <span>Mon–Sat: 9:30AM–8:00PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-400"
            style={{ borderTop: "1px solid rgba(59,130,246,0.12)" }}
          >
            <p>
              © {new Date().getFullYear()}{" "}
              <strong className="text-white">ARIHANT GROUP</strong>. All rights
              reserved.
            </p>
            <p className="text-xs text-blue-500">
              Navkar Tiles &amp; Building Materials • Chhatrapati Sambhajinagar
            </p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        data-ocid="whatsapp.button"
        href={`https://wa.me/${WA}?text=Hello%20Arihant%20Group!%20I%20am%20interested%20in%20your%20products.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg whatsapp-btn-pulse transition-transform hover:scale-110"
        style={{
          background: "#25d366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        }}
      >
        <SiWhatsapp size={26} color="white" />
      </a>
    </div>
  );
}
