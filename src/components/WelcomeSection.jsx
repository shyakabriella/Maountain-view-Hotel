import { Utensils, Coffee, Car, Sparkles, BedDouble } from "lucide-react";

const services = [
  { icon: Utensils, label: "Friendly Service" },
  { icon: Coffee, label: "Get Breakfast" },
  { icon: Car, label: "Transfer Services" },
  { icon: Sparkles, label: "Suits & SPA" },
  { icon: BedDouble, label: "Cozy Rooms" },
];

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
          WELCOME TO MOUNTAINVIEWHOTEL
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-16">
          A New Vision of Luxury Hotel
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {services.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-4 py-10 px-4 border border-border transition-colors group ${
                i === 1 ? "" : ""
              }`}
            >
              <s.icon className={`w-10 h-10 ${i === 1 ? "text-primary" : "text-primary group-hover:text-primary"}`} strokeWidth={1} />
              <span className={`font-display text-lg ${i === 1 ? "" : "text-foreground"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
