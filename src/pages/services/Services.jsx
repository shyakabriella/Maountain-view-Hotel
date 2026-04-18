import heroBg from "@/assets/images/196C4897.JPG";
import { Link } from "react-router-dom";

const services = [
  {
    
    title: "Luxury Accommodation",
    desc: "Choose from our range of elegantly furnished rooms and suites, each designed to provide maximum comfort with stunning views of the surrounding landscape.",
  },
  {
    
    title: "Fine Dining Restaurant",
    desc: "Savour expertly crafted cuisine from our talented chefs, featuring both local Rwandan flavours and international dishes prepared with the freshest ingredients.",
  },
  {
    
    title: "Swimming Pool",
    desc: "Unwind in our pristine outdoor pool, perfectly maintained and surrounded by lush greenery — ideal for relaxation or a refreshing morning swim.",
  },
  {
    
    title: "Events & Conferences",
    desc: "Host your corporate meetings, weddings, or private celebrations in our fully equipped event spaces with professional planning and catering support.",
  },
  {
    
    title: "Bar & Lounge",
    desc: "Relax in our sophisticated bar and lounge with a handpicked selection of wines, cocktails, and spirits — perfect for unwinding after a long day.",
  },
  {
    
    title: "Airport Transfers",
    desc: "Start and end your journey stress-free with our private airport transfer service, available on request for all hotel guests.",
  },
  {
    
    title: "Wellness & Leisure",
    desc: "Rejuvenate body and mind with our wellness offerings, including massage services and leisure amenities tailored to refresh every guest.",
  },
  {
    
    title: "Breakfast & Room Service",
    desc: "Wake up to a rich breakfast buffet or enjoy the convenience of in-room dining — available throughout the day for your comfort.",
  },
  {
    
    title: "High-Speed Wi-Fi",
    desc: "Stay connected throughout your stay with complimentary high-speed internet access available in all rooms and public areas.",
  },
];

const Services = () => {
  return (
    <div className="overflow-x-hidden bg-background">

      {/* ── Hero ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="Mountain View Hotel services"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
          <p className="font-body text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> Services
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">Services</h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Every Detail, Thoughtfully Crafted
          </h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            At Mountain View Hotel, our services are designed to exceed expectations at
            every turn. Whether you are here for business, leisure, or a special
            celebration, we offer a comprehensive range of amenities and experiences to
            ensure your stay is truly unforgettable.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-hotel-light-gray py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
              >
                <span className="text-4xl mb-5 block">{service.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Ready to Experience It?
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
            Book your stay today and let us take care of every detail so you can focus
            on making memories.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-sm uppercase tracking-widest bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;

