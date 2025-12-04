import { useState, useMemo, createContext } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

import Navbar from "./components/MainLayoutComponents/Navbar";
import Footer from "./components/MainLayoutComponents/Footer";
import { CartProvider } from "./context/CartContext";

// 🔥 Contexto para o dark mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "light" ? "#f5f5f7" : "#050608",
            paper: mode === "light" ? "#ffffff" : "#111827",
          },
          text: {
            primary: mode === "light" ? "#000000" : "#f9fafb",
          },
        },
        shape: {
          borderRadius: 16,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          <Router>
            {/* NAVBAR FIXO EM TODAS AS PÁGINAS */}
            <Navbar />

            {/* empurra o conteúdo pra baixo do AppBar (64–72px) */}
            <Box sx={{ pt: { xs: 8, md: 9 }, minHeight: "100vh" }}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </Box>

            {/* opcional: footer global */}
            <Footer />
          </Router>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
