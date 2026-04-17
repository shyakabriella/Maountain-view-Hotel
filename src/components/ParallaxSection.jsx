import parallaxBg from "@/assets/hero-bg.jpg";

const ParallaxSection = () => {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${parallaxBg})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight max-w-3xl" style={{ color: "white" }}>
          We're Most Recommended Hotel
        </h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
