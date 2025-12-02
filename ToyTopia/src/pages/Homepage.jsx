import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import CategoryCards from '../sections/CategoryCards';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategoryCards />
        <Testimonials />
        <ContactUs />
        <Products />
        {/* Add more sections here as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
