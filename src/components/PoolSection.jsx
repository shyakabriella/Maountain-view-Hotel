import pool1 from "@/assets/images/pool1.JPG";
import pool2 from "@/assets/images/pool2.JPG";
import pool3 from "@/assets/images/pool3.JPG";
import { Link } from "react-router-dom";

const PoolSection = () => {
  return (
    <section id="pool" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Relax & Rejuvenate
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Swimming Pool
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Experience tranquility at our stunning outdoor swimming pool, 
              nestled amidst the breathtaking mountain views. Whether you're 
              looking to take a refreshing dip, lounge under the sun, or enjoy 
              a cocktail by the water, our pool area offers the perfect retreat.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Olympic-size pool with mountain views
              </li>
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Comfortable sun loungers and umbrellas
              </li>
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Poolside bar with refreshing drinks
              </li>
              <li className="flex items-center gap-3 font-body text-muted-foreground">
                <span className="text-primary text-xl">✓</span>
                Heated pool for year-round enjoyment
              </li>
            </ul>
            <Link 
              to="/pool" 
              className="inline-flex rounded-md items-center gap-2 bg-primary text-white px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Explore Pool
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={pool1} 
                  alt="Mountain View Pool" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={pool3} 
                  alt="Pool Lounge Area" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={pool2} 
                  alt="Pool Deck" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={pool3} 
                  alt="Pool Evening" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolSection;
