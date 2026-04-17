import { Link } from "react-router-dom";

import heroBg from "@/assets/images/entrance.JPG";

const contactItems = [
  {
    label: "Address:",
    value: "Musanze, Northern Province, Rwanda",
  },
  {
    label: "Phone:",
    value: "+250 788 123 456",
    href: "tel:+250788123456",
  },
  {
    label: "Email:",
    value: "info@mountainviewrwanda.com",
    href: "mailto:info@mountainviewrwanda.com",
  },
  {
    label: "Website",
    value: "mountainviewrwanda.com",
    href: "#",
  },
];

const Contact = () => {
  return (
    <div className="overflow-x-hidden bg-background">

      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="Contact MountainViewHotel"
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
            <span className="mx-1">/</span> Contact
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">Contact us</h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-[42px] md:text-[52px] text-center text-foreground mb-14">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {contactItems.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-body text-[15px] leading-7 text-foreground">
                  <span className="font-semibold text-foreground">{item.label} </span>
                  {item.href ? (
                    <a href={item.href} className="text-primary hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.value}</span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <form className="bg-hotel-light-gray p-8 md:p-10 space-y-5 min-h-[620px]">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-14 px-5 border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-14 px-5 border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full h-14 px-5 border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                rows={8}
                className="w-full px-5 py-4 border border-border bg-background text-sm outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="button"
                className="bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.15em] uppercase font-semibold hover:brightness-110 transition"
              >
                Send Message
              </button>
            </form>

            <div className="h-[620px] w-full">
              <iframe
                title="MountainViewHotel location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.55%2C-1.55%2C29.65%2C-1.45&layer=mapnik&marker=-1.50%2C29.60"
                className="w-full h-full border border-border"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
