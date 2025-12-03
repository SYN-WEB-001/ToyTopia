import HeroSection from '../components/HomePageComponents/sections/HeroSection';
import CategoryCards from '../components/HomePageComponents/sections/CategoryCardsSection';
import TestimonialsSection from '../components/HomePageComponents/TestimonialsSection';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <CategoryCards useNavigation={true} />
      <TestimonialsSection />
    </>
  );
};

export default Homepage;
