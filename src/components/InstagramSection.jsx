import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";

const images = [insta1, insta2, insta3, insta4, insta5];

const InstagramSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">PHOTOS</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">Instagram</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
        {images.map((img, i) => (
          <div key={i} className="relative h-64 overflow-hidden group cursor-pointer">
            <img
              src={img}
              alt={`Instagram photo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              width={512}
              height={512}
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
