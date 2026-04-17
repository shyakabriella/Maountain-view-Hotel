import food1 from "@/assets/images/resto1.JPG";
import food2 from "@/assets/images/resto2.JPG";
import food3 from "@/assets/images/resto3.JPG";

const menuItems = [
  { name: "Grilled Crab with Onion", price: "$20.00", image: food1, desc: "A small river named Duden flows by their place and supplies" },
  { name: "Grilled Beef with potatoes", price: "$29.00", image: food2, desc: "A small river named Duden flows by their place and supplies" },
  { name: "Grilled Beef with potatoes", price: "$20.00", image: food3, desc: "A small river named Duden flows by their place and supplies" },
  { name: "Grilled Beef with potatoes", price: "$20.00", image: food1, desc: "A small river named Duden flows by their place and supplies" },
  { name: "Grilled Beef with potatoes", price: "$49.91", image: food2, desc: "A small river named Duden flows by their place and supplies" },
  { name: "Ultimate Overload", price: "$20.00", image: food3, desc: "A small river named Duden flows by their place and supplies" },
  { name: "Grilled Beef with potatoes", price: "$20.00", image: food1, desc: "A small river named Duden flows by their place and supplies" },
  { name: "Ham & Pineapple", price: "$20.00", image: food2, desc: "A small river named Duden flows by their place and supplies" },
];

const RestaurantSection = () => {
  return (
    <section id="restaurant" className="py-24 bg-background"> 
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Restaurant</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-16">Restaurant</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-14">
          {menuItems.map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              {i % 2 === 0 ? (
                <>
                  <div className="text-right flex-1">
                    <h3 className="font-display text-[26px] leading-tight text-foreground">{item.name}</h3>
                    <p className="text-primary font-body text-lg mt-1">{item.price}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" width={600} height={600} />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" width={600} height={600} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-display text-[26px] leading-tight text-foreground">{item.name}</h3>
                    <p className="text-primary font-body text-lg mt-1">{item.price}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
