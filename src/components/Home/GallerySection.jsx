import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GallerySection = () => {
  return (
    <section className="py-0">
      <div className="flex w-full">
        {images.map((img, i) => (
          <div key={i} className="flex-1 overflow-hidden group cursor-pointer">
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
