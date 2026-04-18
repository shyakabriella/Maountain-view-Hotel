import { Link } from "react-router-dom";

const img1 = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80";
const img2 = "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80";
const img3 = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80";
const img4 = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80";

const SpaSection = () => {
  return (
    <section id="spa" className="py-20 bg-hotel-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image Gallery */}
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img1}
                  alt="Massage therapy"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img3}
                  alt="Spa ambiance"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img4}
                  alt="Facial treatment"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img2}
                  alt="Hot stone massage"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Wellness &amp; Relaxation
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Massage &amp; Spa
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Escape the everyday and surrender to pure tranquillity at the Mountain View
              Hotel Spa. Our expert therapists offer a full menu of restorative treatments —
              from hot stone therapy and aromatherapy to deep-tissue massage and rejuvenating
              facials — all tailored personally to you.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Swedish, deep-tissue &amp; hot stone massages
              </li>
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Aromatherapy &amp; facial treatments
              </li>
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Couples &amp; prenatal massage packages
              </li>
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Daily appointments — book in advance
              </li>
            </ul>
            <Link
              to="/spa"
              className="inline-flex rounded-md items-center gap-2 bg-primary text-white px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Explore Spa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpaSection;
