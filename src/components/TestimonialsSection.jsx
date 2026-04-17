import { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nathan Smith",
    role: "GUESTS",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    name: "Sarah Johnson",
    role: "GUESTS",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    name: "Michael Brown",
    role: "GUESTS",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 rounded-full bg-muted flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-muted-foreground/20" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>

        <p className="font-display text-lg italic text-muted-foreground leading-relaxed mb-8">
          {testimonials[active].text}
        </p>

        <h4 className="font-display text-xl text-foreground">{testimonials[active].name}</h4>
        <p className="font-body text-xs tracking-[0.2em] text-muted-foreground mt-1 uppercase">
          {testimonials[active].role}
        </p>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
