import { useContext, useEffect } from 'react';
import { Container } from '@mui/material';
import HeroSection from '../components/HomePageComponents/sections/HeroSection';
import CategoryCards from '../components/HomePageComponents/sections/CategoryCardsSection';
import TestimonialsSection from '../components/HomePageComponents/TestimonialsSection';
import { ThemeContext } from '../context/ThemeContext';

const Homepage = () => {
  const { darkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    console.log('Homepage darkMode:', darkMode);
    console.log('HTML has dark class:', document.documentElement.classList.contains('dark'));
  }, [darkMode]);
  
  return (
    <div style={{ backgroundColor: darkMode ? '#111827' : '#ffffff', minHeight: '100vh' }}>
      <HeroSection />
      <Container maxWidth="lg">
        <CategoryCards useNavigation={true} />
      </Container>
      <TestimonialsSection />
    </div>
  );
};

export default Homepage;
