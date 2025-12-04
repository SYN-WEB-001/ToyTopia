import { CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/ProductsPage";

import Navbar from "./components/MainLayoutComponents/Navbar";
import Footer from "./components/MainLayoutComponents/Footer";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function AppContent() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <>
      <CssBaseline />
      <Router>
        {/* NAVBAR FIXO EM TODAS AS PÁGINAS */}
        <Navbar />

        {/* empurra o conteúdo pra baixo do AppBar (170px) */}
        <Box 
          sx={{ pt: { xs: 22, md: 23 }, minHeight: "100vh" }} 
          className={darkMode ? 'dark bg-gray-900' : 'bg-white'}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Box>

        {/* opcional: footer global */}
        <Footer />
      </Router>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}
