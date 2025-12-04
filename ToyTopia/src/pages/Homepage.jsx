import HeroSection from '../components/HomePageComponents/sections/HeroSection';
import CategoryCards from '../components/HomePageComponents/sections/CategoryCardsSection';
import AgeCardsSection from '../components/HomePageComponents/sections/AgeCardsSection';
import TestimonialsSection from '../components/HomePageComponents/TestimonialsSection';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <CategoryCards useNavigation={true} />
      <AgeCardsSection />
      <TestimonialsSection />
    </>
  );
};

export default Homepage;
