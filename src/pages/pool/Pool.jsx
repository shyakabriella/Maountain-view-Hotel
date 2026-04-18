import heroBg from "@/assets/images/pool3.JPG";
import pool1 from "@/assets/images/pool1.JPG";
import pool2 from "@/assets/images/pool2.JPG";
import pool4 from "@/assets/images/pool4.jpg";
import pool5 from "@/assets/images/pool5.jpg";
import pool6 from "@/assets/images/pool6.jpg";
import pool7 from "@/assets/images/pool7.jpg";
import pool8 from "@/assets/images/pool8.jpg";

const Pool = () => {
  return (
    <div className="overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="Mountain View Hotel Pool"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white">
          <p className="font-body text-xs tracking-[0.24em] uppercase text-white/80 mb-3">
            Relax & Rejuvenate
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">Swimming Pool</h1>
        </div>
      </section>

      {/* Pool Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pool1} 
                alt="Mountain View Pool Area" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pool2} 
                alt="Pool Lounging Area" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pool4} 
                alt="Pool Amenities" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pool5} 
                alt="Pool Service" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pool6} 
                alt="Pool Evening View" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pool7} 
                alt="Pool Deck" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pool8} 
                alt="Pool Panorama" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pool;
