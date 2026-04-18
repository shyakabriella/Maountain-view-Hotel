import { Link } from "react-router-dom";

const heroBg = "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1920&q=80";

const treatments = [
  {
    
    title: "Swedish Full-Body Massage",
    duration: "60 min / 90 min",
    desc: "A classic relaxing massage using long, flowing strokes to ease muscle tension and improve circulation. Perfect for first-time visitors.",
  },
  {
    
    title: "Hot Stone Therapy",
    duration: "75 min",
    desc: "Smooth, heated basalt stones are placed on key energy points of the body to melt away tension and restore deep relaxation.",
  },
  {
    
    title: "Aromatherapy Massage",
    duration: "60 min",
    desc: "A soothing massage enhanced with essential oils chosen to balance mind, body and spirit. Ideal for stress relief and emotional well-being.",
  },
  {
    
    title: "Deep Tissue Massage",
    duration: "60 min / 90 min",
    desc: "Targeted, firm-pressure techniques that reach deeper layers of muscle and connective tissue — ideal for chronic pain or sports recovery.",
  },
  {
    
    title: "Prenatal Massage",
    duration: "60 min",
    desc: "A gentle, supportive massage specifically designed for expectant mothers to relieve back pain, swelling and fatigue safely.",
  },
  {
    
    title: "Couples Massage",
    duration: "60 min / 90 min",
    desc: "Share a luxurious massage experience side-by-side in our private couples suite. The perfect romantic gift or anniversary treat.",
  },
  {

    title: "Facial Treatment",
    duration: "45 min",
    desc: "A personalised facial using premium skincare products to cleanse, tone and revitalise your skin, leaving it glowing and refreshed.",
  },
  {
    
    title: "Reflexology",
    duration: "45 min",
    desc: "Precision pressure applied to reflex points on the feet to stimulate organs, relieve tension and promote whole-body wellness.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    alt: "Back massage therapy",
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury spa room",
  },
  {
    src: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
    alt: "Hot stone massage",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    alt: "Spa candles and towels",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    alt: "Relaxing facial treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    alt: "Couple spa treatment",
  },
];

const Spa = () => {
  return (
    <div className="overflow-x-hidden bg-background">

      {/* ── Hero ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="Mountain View Hotel Massage & Spa"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
          <p className="font-body text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> Massage &amp; Spa
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">
            Massage &amp; Spa
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Wellness &amp; Relaxation
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Your Sanctuary of Calm
          </h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            Escape the everyday and surrender to pure tranquillity at the Mountain View
            Hotel Spa. Our skilled therapists draw on ancient techniques and modern
            wellness science to restore balance to body and mind. From targeted deep-tissue
            work to blissful aromatherapy rituals, every treatment is tailored personally
            to you.
          </p>
        </div>
      </section>

      {/* ── Treatments ── */}
      <section className="bg-hotel-light-gray py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">
              Our Menu
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Treatments &amp; Therapies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group flex flex-col"
              >
                <span className="text-4xl mb-4 block">{t.icon}</span>
                <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                  {t.title}
                </h3>
                <p className="font-body text-[11px] tracking-widest uppercase text-primary mb-3">
                  {t.duration}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">
              Atmosphere
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Spa Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl aspect-4/3 group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spa;
