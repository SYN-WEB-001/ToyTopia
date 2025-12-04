import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContext";
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { cartCount } = useCart();
  const t = translations[language].navbar;

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: darkMode ? "#020617" : "#ffffff",
        color: darkMode ? "#e5e7eb" : "#111827",
        boxShadow: darkMode
          ? "0 2px 10px rgba(0,0,0,0.6)"
          : "0 2px 8px rgba(15,23,42,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO ORIGINAL À ESQUERDA */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: 1.5,
            }}
          >
            <Box
              component="img"
              alt="ToyTopia Logo"
              src="/Logo.png"           sx={{ height: 48 }}       // ajusta o tamanho se quiser
            />
          </Box>

          {/* LINKS + TOGGLE À DIREITA */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              {t.home}
            </Button>
            <Button
              component={Link}
              to="/products"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              {t.products}
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              {t.about}
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              {t.contact}
            </Button>

            <IconButton
              component={Link}
              to="/cart"
              color="inherit"
              sx={{ ml: 1 }}
              aria-label="Shopping cart"
            >
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              sx={{ ml: 1 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            
            <Button
              onClick={toggleLanguage}
              variant="text"
              sx={{ ml: 1, color: 'inherit' }}
              aria-label="Toggle language"
            >
              {language === 'en' ? 'DE' : 'EN'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
