import heroBg from "@/assets/images/entrance.JPG";
import { Link } from "react-router-dom";

const perks = [
  {
    icon: "🌿",
    title: "Warm Team Culture",
    desc: "Work alongside a passionate, supportive team that treats every colleague like family.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    desc: "We invest in your future with training programmes, mentorship and internal promotions.",
  },
  {
    icon: "🍽️",
    title: "Staff Meals",
    desc: "Enjoy complimentary meals prepared fresh by our culinary team every shift.",
  },
  {
    icon: "🏊",
    title: "Hotel Perks",
    desc: "Access to hotel facilities including the pool, gym and select F&B discounts.",
  },
  {
    icon: "🌍",
    title: "Diverse Environment",
    desc: "Be part of an international team that celebrates culture, creativity and inclusion.",
  },
  {
    icon: "🏆",
    title: "Recognition & Rewards",
    desc: "Outstanding performance is celebrated with bonuses, awards and public recognition.",
  },
];

const positions = [
  {
    title: "Front Desk Officer",
    type: "Full-time",
    dept: "Guest Services",
    desc:
      "Be the first smile our guests see. You will manage check-ins, reservations and handle guest inquiries with grace and efficiency.",
  },
  {
    title: "Chef de Partie",
    type: "Full-time",
    dept: "Food & Beverage",
    desc:
      "Join our kitchen brigade and help craft exceptional dining experiences. Experience in a 4- or 5-star property preferred.",
  },
  {
    title: "Housekeeping Supervisor",
    type: "Full-time",
    dept: "Housekeeping",
    desc:
      "Lead a team dedicated to maintaining impeccable room standards and guest comfort throughout the hotel.",
  },
  {
    title: "Events & Banqueting Coordinator",
    type: "Full-time",
    dept: "Events",
    desc:
      "Plan and execute weddings, conferences and private events from brief to final bow, ensuring every detail exceeds expectations.",
  },
  {
    title: "Swimming Pool Attendant",
    type: "Full-time",
    dept: "Wellness",
    desc:
      "Maintain a safe, clean and welcoming pool area while delivering attentive service to our leisure guests.",
  },
];

const Career = () => {
  return (
    <div className="overflow-x-hidden bg-background">

      {/* ── Hero ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="Mountain View Hotel career"
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
            <span className="mx-1">/</span> Career
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">Career</h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Join Our Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Be Part of Something Extraordinary
          </h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            At Mountain View Hotel we believe that exceptional hospitality starts with
            exceptional people. We are always searching for warm, driven individuals who
            share our commitment to creating unforgettable guest experiences in the heart
            of Rwanda. If you are passionate about service, eager to grow and ready to
            make a difference — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="bg-hotel-light-gray py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">
              Why Mountain View
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-4xl mb-5 block">{perk.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {perk.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">
              Opportunities
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Open Positions
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="border border-border rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl text-foreground">
                      {pos.title}
                    </h3>
                    <span className="font-body text-[11px] tracking-widest uppercase bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {pos.type}
                    </span>
                    <span className="font-body text-[11px] tracking-widest uppercase bg-hotel-light-gray text-muted-foreground px-3 py-1 rounded-full">
                      {pos.dept}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {pos.desc}
                  </p>
                </div>
                <a
                  href={`mailto:careers@mountainviewhotel.rw?subject=Application – ${pos.title}`}
                  className="shrink-0 inline-block font-body text-sm uppercase tracking-widest bg-primary text-white px-7 py-3 rounded-full hover:bg-primary/90 transition-colors duration-200 text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          {/* General application */}
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Don't see the right role? We still want to hear from you.
            </p>
            <a
              href="mailto:careers@mountainviewhotel.rw?subject=General Application"
              className="inline-block font-body text-sm uppercase tracking-widest border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Send a General Application
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Career;

