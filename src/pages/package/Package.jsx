import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import WelcomeSection from "../../components/WelcomeSection";
import ParallaxSection from "../../components/ParallaxSection";
import TestimonialsSection from "../../components/TestimonialsSection";

import heroBg from "@/assets/images/IMG-20230508-WA0033 - Copy.jpg";
import welcomeBg from "@/assets/images/pool3.JPG";

const About = () => {
  return (
    <div className="overflow-x-hidden bg-background">


      <section className="relative h-[60vh] min-h-[440px] flex items-end">
        <img
          src={heroBg}
          alt="About MountainViewHotel"
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
            <span className="mx-1">/</span> About us
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">About us</h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-[440px] overflow-hidden">
            <img
              src={welcomeBg}
              alt="Welcome to MountainViewHotel"
              className="h-full w-full object-cover"
              width={900}
              height={700}
            />
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.26em] uppercase text-primary mb-3">
              Welcome To Our Hotel
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Welcome To <span className="italic text-primary">MountainViewHotel</span> Hotel
            </h2>
            <p className="font-body text-muted-foreground leading-8">
              On her way she met a copy. The copy warned the little Blind Text, that where it came
              from it would have been rewritten a thousand times and everything that was left from
              its origin would be the word "and" and the little Blind Text should turn around and
              return to its own, safe country.
            </p>
          </div>
        </div>
      </section>

      <WelcomeSection />
      <ParallaxSection />

      <section className="pt-24 bg-background text-center">
        <div className="container mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-10">
            Our Happy Guest Says
          </h2>
        </div>
      </section>
      <TestimonialsSection />
    </div>
  );
};

export default About;
