import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import WelcomeSection from "../components/WelcomeSection";
import RoomsSection from "../components/RoomsSection";
import ParallaxSection from "../components/ParallaxSection";
import RestaurantSection from "../components/RestaurantSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PoolSection from "../components/PoolSection";
import SpaSection from "../components/SpaSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <CategoriesSection />
      <WelcomeSection />
      <RoomsSection />
      <PoolSection />
      <SpaSection />
      <TestimonialsSection />
      <ParallaxSection />
      <RestaurantSection />
    </div>
  );
};

export default Index;
