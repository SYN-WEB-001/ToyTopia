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
import { useTheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ColorModeContext } from "../../App";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { cartCount } = useCart();

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor:
          theme.palette.mode === "light" ? "#ffffff" : "#020617",
        color: theme.palette.mode === "light" ? "#111827" : "#e5e7eb",
        boxShadow:
          theme.palette.mode === "light"
            ? "0 2px 8px rgba(15,23,42,0.08)"
            : "0 2px 10px rgba(0,0,0,0.6)",
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
              Home
            </Button>
            <Button
              component={Link}
              to="/products"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              Products
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              Contact
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
              onClick={colorMode.toggleColorMode}
              color="inherit"
              sx={{ ml: 1 }}
              aria-label="Toggle dark mode"
            >
              {theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
