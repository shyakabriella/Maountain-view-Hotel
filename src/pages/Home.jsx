import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import WelcomeSection from "../components/WelcomeSection";
import RoomsSection from "../components/RoomsSection";
import ParallaxSection from "../components/ParallaxSection";
import RestaurantSection from "../components/RestaurantSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PoolSection from "../components/PoolSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <CategoriesSection />
      <WelcomeSection />
      <RoomsSection />
      <PoolSection />
      <TestimonialsSection />
      <ParallaxSection />
      <RestaurantSection />
    </div>
  );
};

export default Index;
