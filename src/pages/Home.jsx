import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import CategoriesSection from "../components/CategoriesSection";
import WelcomeSection from "../components/WelcomeSection";
import RoomsSection from "../components/RoomsSection";
import ParallaxSection from "../components/ParallaxSection";
import RestaurantSection from "../components/RestaurantSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <BookingSection />
      <CategoriesSection />
      <WelcomeSection />
      <RoomsSection />
      <TestimonialsSection />
      <ParallaxSection />
      <RestaurantSection />
    </div>
  );
};

export default Index;
