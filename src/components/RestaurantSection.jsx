const food1 = "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=600&fit=crop";
const food2 = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=600&fit=crop";
const food3 = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuData = {
  "Signature Appetizers": [
    {
      name: "TRUFFLE MUSHROOM CROSTINI",
      description:
        "Sautéed wild mushrooms with truffle oil on toasted artisan bread, garnished with microgreens and parmesan shavings.",
    },
    {
      name: "TUNA TARTARE TOWER",
      description:
        "Fresh ahi tuna layered with avocado mousse, sesame seeds, and wasabi aioli on a crispy wonton base.",
    },
    {
      name: "LOBSTER BISQUE SHOTS",
      description:
        "Velvety lobster bisque served in elegant shooters with chive crème fraîche and lobster claw garnish.",
    },
    {
      name: "WAGYU BEEF SLIDERS",
      description:
        "Premium wagyu beef patties with caramelized onions, aged cheddar, and truffle aioli on brioche buns.",
    },
    {
      name: "SEARED SCALLOPS",
      description:
        "Pan-seared diver scallops with cauliflower purée, crispy pancetta, and brown butter sage sauce.",
    },
    {
      name: "CHARCUTERIE SELECTION",
      description:
        "Curated assortment of imported meats, artisan cheeses, cornichons, dried fruits, and house-made preserves.",
    },
    {
      name: "CRAB CAKE BITES",
      description:
        "Lump crab cakes with remoulade sauce, micro celery, and Old Bay seasoning on mixed greens.",
    },
    {
      name: "BURRATA & HEIRLOOM TOMATO",
      description:
        "Creamy burrata with heirloom tomatoes, basil oil, aged balsamic reduction, and sea salt flakes.",
    },
    {
      name: "DUCK CONFIT SPRING ROLLS",
      description:
        "Crispy spring rolls filled with shredded duck confit, hoisin glaze, and pickled vegetables.",
    },
  ],
  "Chef's Salads": [
    {
      name: "CLASSIC CAESAR ROYALE",
      description:
        "Baby romaine hearts, shaved parmesan reggiano, garlic croutons, and house-made Caesar dressing with white anchovies.",
    },
    {
      name: "MEDITERRANEAN QUINOA",
      description:
        "Fluffy quinoa with cucumber, cherry tomatoes, kalamata olives, feta, and lemon-herb vinaigrette.",
    },
    {
      name: "ROASTED BEET & GOAT CHEESE",
      description:
        "Golden and red beets with whipped goat cheese, candied walnuts, arugula, and champagne vinaigrette.",
    },
  ],
  "Premium Entrées": [
    {
      name: "FILET MIGNON",
      description:
        "8oz center-cut filet with red wine reduction, roasted garlic butter, and choice of premium sides.",
    },
    {
      name: "PAN-ROASTED CHILEAN SEA BASS",
      description:
        "Miso-glazed sea bass with bok choy, ginger-soy broth, and jasmine rice.",
    },
    {
      name: "HERB-CRUSTED RACK OF LAMB",
      description:
        "New Zealand lamb with rosemary jus, roasted root vegetables, and mint gremolata.",
    },
    {
      name: "WILD MUSHROOM RISOTTO",
      description:
        "Arborio rice with porcini, shiitake, and oyster mushrooms, finished with truffle oil and parmesan.",
    },
  ],
  "Artisan Starches": [
    {
      name: "TRUFFLE MASHED POTATOES",
      description:
        "Yukon gold potatoes with black truffle, butter, and cream, garnished with chives.",
    },
    {
      name: "SAFFRON RICE PILAF",
      description:
        "Aromatic basmati rice with saffron threads, toasted almonds, and fresh herbs.",
    },
    {
      name: "GRATIN DAUPHINOIS",
      description:
        "Thinly sliced potatoes baked in cream, Gruyère cheese, and garlic with a golden crust.",
    },
  ],
  "Seasonal Vegetables": [
    {
      name: "GRILLED ASPARAGUS",
      description:
        "Fresh asparagus spears with lemon zest, toasted pine nuts, and shaved parmesan.",
    },
    {
      name: "HONEY-GLAZED ROOT VEGETABLES",
      description:
        "Roasted heirloom carrots, parsnips, and turnips with thyme honey glaze.",
    },
    {
      name: "SAUTÉED GREEN BEANS",
      description:
        "French green beans with shallots, garlic, almonds, and brown butter.",
    },
  ],
};

const MenuItem = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h4
          className="text-[20px] font-medium text-[#183247] transition-colors group-hover:text-[#2E7D32]"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          {item.name}
        </h4>
        <p
          className="mt-2 text-[15px] leading-[1.6] text-[#6b6b6b]"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          {item.description}
        </p>
      </div>
    </div>
    <div className="mt-3 h-[1px] w-full bg-gradient-to-r from-[#d4d4d4] via-[#e8e8e8] to-transparent" />
  </motion.div>
);

const RestaurantSection = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(menuData)[0]);

  const currentItems = menuData[activeTab];
  const midpoint = Math.ceil(currentItems.length / 2);
  const leftColumn = currentItems.slice(0, midpoint);
  const rightColumn = currentItems.slice(midpoint);

  return (
    <section className="bg-[#f3f2ed] py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-[48px] font-normal leading-[1] text-[#183247] sm:text-[60px] md:text-[72px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Menu
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative text-[18px] transition md:text-[20px] ${
                activeTab === tab
                  ? "text-[#111111]"
                  : "text-[#8a8a8a] hover:text-[#183247]"
              }`}
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#2E7D32]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mt-14"
          >
            <h3
              className="text-[42px] font-normal leading-[1] text-[#183247] sm:text-[54px] md:text-[64px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {activeTab}
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-8">
                {leftColumn.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>

              <div className="space-y-8">
                {rightColumn.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RestaurantSection;
