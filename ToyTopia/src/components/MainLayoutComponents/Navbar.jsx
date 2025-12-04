import React, { useContext, useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import categoryData from "../../data/categoryData.json";

export default function Navbar() {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    { name: t.nav.categories.lego, slug: "lego" },
    { name: t.nav.categories.books, slug: "books" },
    { name: t.nav.categories.puzzles, slug: "puzzles" },
    { name: t.nav.categories.hotWheels, slug: "hot-wheels" }
  ];

  // Language Menu Handlers
  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    handleLanguageClose();
  };

  const handleProductsMouseEnter = (event) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleProductsMouseLeave = () => {
    // Small delay to allow mouse to move to menu
    setTimeout(() => {
      setProductsAnchorEl(null);
    }, 100);
  };

  const handleMenuMouseEnter = () => {
    // Keep menu open when mouse is over it
    setProductsAnchorEl(productsAnchorEl);
  };

  const handleMenuMouseLeave = () => {
    setProductsAnchorEl(null);
  };

  const handleCategoryClick = (categorySlug) => {
    setProductsAnchorEl(null);
    navigate(`/products?category=${categorySlug}`);
  };

  // Sign In Modal Handlers
  const handleSignInOpen = () => setSignInOpen(true);
  const handleSignInClose = () => {
    setSignInOpen(false);
    setSignInData({ email: "", password: "" });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", signInData);
    // Add your sign-in logic here
    alert("Sign in functionality - Connect to your backend!");
    handleSignInClose();
  };

  // Register Modal Handlers
  const handleRegisterOpen = () => {
    setSignInOpen(false);
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
    setRegisterData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert(t.registerModal.passwordMismatch);
      return;
    }
    console.log("Register Data:", registerData);
    // Add your registration logic here
    alert(t.registerModal.successMessage);
    handleRegisterClose();
  };

  const switchToSignIn = () => {
    setRegisterOpen(false);
    setSignInOpen(true);
  };

  // Collect all products from all categories
  const allProducts = categoryData.flatMap(category => 
    category.products.map(product => ({
      ...product,
      categorySlug: category.slug,
      categoryName: category.name
    }))
  );

  // Handle search input
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5); // Limit to 5 results
      setSearchResults(filtered);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getProductImage = (product) => {
    const imageName = Array.isArray(product.image) ? product.image[0] : product.image;
    return `/src/assets/images/Category-Images/${product.categoryName}/${imageName}`;
  };

  const handleProductClick = (product) => {
    setSearchQuery("");
    setShowDropdown(false);
    navigate(`/products/${product.categorySlug}/${product.slug}`);
  };

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
            minHeight: 170,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            py: "20px",
          }}
        >
          {/* LOGO À ESQUERDA */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              alt="ToyTopia Logo"
              src="/Logo.png"
              sx={{ height: 55 }}
            />
          </Box>

          {/* SEARCH BAR NO MEIO */}
          <Box 
            ref={searchRef}
            sx={{ 
              position: "relative",
              flexGrow: 1,
              maxWidth: 500,
              mx: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "6px",
                backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                border: darkMode ? "1px solid #374151" : "1px solid #d1d5db",
                "&:hover": {
                  backgroundColor: darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                },
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 0.5,
              }}
            >
              <SearchIcon sx={{ color: darkMode ? "#9ca3af" : "#6b7280", mr: 1 }} />
              <InputBase
                placeholder={t.nav.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  flex: 1,
                  color: "inherit",
                  "& input": {
                    padding: "8px 0",
                  },
                }}
              />
            </Box>

            {/* DROPDOWN RESULTS */}
            {showDropdown && searchResults.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  mt: 1,
                  backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                  borderRadius: "6px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  zIndex: 1000,
                  maxHeight: 400,
                  overflowY: "auto",
                }}
              >
                {searchResults.map((product, index) => (
                  <Box
                    key={`${product.categorySlug}-${product.index || index}`}
                    onClick={() => handleProductClick(product)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      cursor: "pointer",
                      borderBottom: index < searchResults.length - 1 ? `1px solid ${darkMode ? "#374151" : "#e5e7eb"}` : "none",
                      "&:hover": {
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={getProductImage(product)}
                      alt={product.name}
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: "contain",
                        borderRadius: 1,
                        backgroundColor: darkMode ? "#111827" : "#f9fafb",
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box
                        sx={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: darkMode ? "#ffffff" : "#111827",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.name}
                      </Box>
                      <Box
                        sx={{
                          fontSize: "0.75rem",
                          color: darkMode ? "#9ca3af" : "#6b7280",
                          mt: 0.5,
                        }}
                      >
                        {product.categoryName}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: darkMode ? "#4ade80" : "#16a34a",
                        flexShrink: 0,
                      }}
                    >
                      €{product.price.toFixed(2)}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}

            {/* NO RESULTS MESSAGE */}
            {showDropdown && searchQuery.trim().length > 0 && searchResults.length === 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  mt: 1,
                  backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                  borderRadius: "6px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  zIndex: 1000,
                  p: 3,
                  textAlign: "center",
                  color: darkMode ? "#9ca3af" : "#6b7280",
                }}
              >
                {t.nav.noResults} "{searchQuery}"
              </Box>
            )}
          </Box>

          {/* LINKS + TOGGLE À DIREITA */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
            {/* Language Switcher - Before Home */}
            <Button
              onClick={handleLanguageClick}
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ 
                textTransform: "none", 
                fontWeight: 500, 
                fontSize: "0.875rem",
                borderRadius: "6px",
                minWidth: "auto",
                px: 1.5,
                "&:hover": {
                  backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
                }
              }}
            >
              {language === "en" ? "🇬🇧 EN" : "🇩🇪 DE"}
            </Button>
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
              sx={{
                mt: 1,
                "& .MuiPaper-root": {
                  backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                  color: darkMode ? "#e5e7eb" : "#111827",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                  minWidth: 150,
                },
              }}
            >
              <MenuItem
                onClick={() => handleLanguageChange("en")}
                sx={{
                  fontSize: "0.875rem",
                  py: 1.5,
                  backgroundColor: language === "en" ? (darkMode ? "#374151" : "#f3f4f6") : "transparent",
                  "&:hover": {
                    backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                  },
                }}
              >
                🇬🇧 EN - English
              </MenuItem>
              <MenuItem
                onClick={() => handleLanguageChange("de")}
                sx={{
                  fontSize: "0.875rem",
                  py: 1.5,
                  backgroundColor: language === "de" ? (darkMode ? "#374151" : "#f3f4f6") : "transparent",
                  "&:hover": {
                    backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                  },
                }}
              >
                🇩🇪 DE - Deutsch
              </MenuItem>
            </Menu>

            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ 
                textTransform: "none", 
                fontWeight: 500, 
                fontSize: "0.875rem",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
                }
              }}
            >
              {t.nav.home}
            </Button>
            
            {/* Products Button with Dropdown */}
            <Box 
              sx={{ position: "relative" }}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <Button
                color="inherit"
                endIcon={
                  <KeyboardArrowDownIcon 
                    sx={{
                      transform: productsAnchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease-in-out'
                    }}
                  />
                }
                sx={{ 
                  textTransform: "none", 
                  fontWeight: 500, 
                  fontSize: "0.875rem",
                  borderRadius: "6px",
                  backgroundColor: productsAnchorEl 
                    ? (darkMode ? "#1e3a8a" : "#dbeafe")
                    : "transparent",
                  "&:hover": {
                    backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
                  },
                  transition: "background-color 0.2s ease-in-out"
                }}
              >
                Products
              </Button>
              <Menu
                anchorEl={productsAnchorEl}
                open={Boolean(productsAnchorEl)}
                onClose={() => setProductsAnchorEl(null)}
                MenuListProps={{
                  onMouseEnter: handleMenuMouseEnter,
                  onMouseLeave: handleMenuMouseLeave,
                }}
                sx={{
                  mt: 1,
                  "& .MuiPaper-root": {
                    backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                    color: darkMode ? "#e5e7eb" : "#111827",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    minWidth: 180,
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  component={Link}
                  to="/products"
                  onClick={() => setProductsAnchorEl(null)}
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                    },
                  }}
                >
                  All Products
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem
                    key={category.slug}
                    onClick={() => handleCategoryClick(category.slug)}
                    sx={{
                      fontSize: "0.875rem",
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      },
                    }}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{ 
                textTransform: "none", 
                fontWeight: 500, 
                fontSize: "0.875rem",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
                }
              }}
            >
              {t.nav.about}
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              color="inherit"
              sx={{ 
                textTransform: "none", 
                fontWeight: 500, 
                fontSize: "0.875rem",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
                }
              }}
            >
              {t.nav.contact}
            </Button>

            <IconButton
              onClick={handleSignInOpen}
              color="inherit"
              sx={{ ml: 1 }}
              aria-label="Sign in"
            >
              <PersonOutlineIcon />
            </IconButton>

            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              sx={{ ml: 0.5 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Sign In Modal */}
      <Modal
        open={signInOpen}
        onClose={handleSignInClose}
        aria-labelledby="sign-in-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 450 },
            backgroundColor: darkMode ? "#1f2937" : "#ffffff",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: darkMode ? "#ffffff" : "#111827" }}>
              {t.signInModal.title}
            </Typography>
            <IconButton onClick={handleSignInClose} sx={{ color: darkMode ? "#9ca3af" : "#6b7280" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <form onSubmit={handleSignInSubmit}>
            <TextField
              fullWidth
              label={t.signInModal.email}
              type="email"
              required
              value={signInData.email}
              onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  color: darkMode ? "#e5e7eb" : "#111827",
                  "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                  "&:hover fieldset": { borderColor: darkMode ? "#6b7280" : "#9ca3af" },
                },
                "& .MuiInputLabel-root": { color: darkMode ? "#9ca3af" : "#6b7280" },
              }}
            />
            <TextField
              fullWidth
              label={t.signInModal.password}
              type="password"
              required
              value={signInData.password}
              onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  color: darkMode ? "#e5e7eb" : "#111827",
                  "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                  "&:hover fieldset": { borderColor: darkMode ? "#6b7280" : "#9ca3af" },
                },
                "& .MuiInputLabel-root": { color: darkMode ? "#9ca3af" : "#6b7280" },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { backgroundColor: "#1d4ed8" },
                mb: 2,
              }}
            >
              {t.signInModal.submitButton}
            </Button>
          </form>

          <Divider sx={{ my: 2, borderColor: darkMode ? "#374151" : "#e5e7eb" }} />

          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: darkMode ? "#9ca3af" : "#6b7280", fontSize: "0.875rem" }}>
              {t.signInModal.noAccount}{" "}
              <Button
                onClick={handleRegisterOpen}
                sx={{
                  color: "#2563eb",
                  textTransform: "none",
                  fontWeight: 600,
                  p: 0,
                  minWidth: "auto",
                  "&:hover": { backgroundColor: "transparent", textDecoration: "underline" },
                }}
              >
                {t.signInModal.registerLink}
              </Button>
            </Typography>
          </Box>
        </Box>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={registerOpen}
        onClose={handleRegisterClose}
        aria-labelledby="register-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 450 },
            backgroundColor: darkMode ? "#1f2937" : "#ffffff",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: darkMode ? "#ffffff" : "#111827" }}>
              {t.registerModal.title}
            </Typography>
            <IconButton onClick={handleRegisterClose} sx={{ color: darkMode ? "#9ca3af" : "#6b7280" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <form onSubmit={handleRegisterSubmit}>
            <TextField
              fullWidth
              label={t.registerModal.fullName}
              type="text"
              required
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  color: darkMode ? "#e5e7eb" : "#111827",
                  "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                  "&:hover fieldset": { borderColor: darkMode ? "#6b7280" : "#9ca3af" },
                },
                "& .MuiInputLabel-root": { color: darkMode ? "#9ca3af" : "#6b7280" },
              }}
            />
            <TextField
              fullWidth
              label={t.registerModal.email}
              type="email"
              required
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  color: darkMode ? "#e5e7eb" : "#111827",
                  "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                  "&:hover fieldset": { borderColor: darkMode ? "#6b7280" : "#9ca3af" },
                },
                "& .MuiInputLabel-root": { color: darkMode ? "#9ca3af" : "#6b7280" },
              }}
            />
            <TextField
              fullWidth
              label={t.registerModal.password}
              type="password"
              required
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  color: darkMode ? "#e5e7eb" : "#111827",
                  "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                  "&:hover fieldset": { borderColor: darkMode ? "#6b7280" : "#9ca3af" },
                },
                "& .MuiInputLabel-root": { color: darkMode ? "#9ca3af" : "#6b7280" },
              }}
            />
            <TextField
              fullWidth
              label={t.registerModal.confirmPassword}
              type="password"
              required
              value={registerData.confirmPassword}
              onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  color: darkMode ? "#e5e7eb" : "#111827",
                  "& fieldset": { borderColor: darkMode ? "#4b5563" : "#d1d5db" },
                  "&:hover fieldset": { borderColor: darkMode ? "#6b7280" : "#9ca3af" },
                },
                "& .MuiInputLabel-root": { color: darkMode ? "#9ca3af" : "#6b7280" },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { backgroundColor: "#1d4ed8" },
                mb: 2,
              }}
            >
              {t.registerModal.submitButton}
            </Button>
          </form>

          <Divider sx={{ my: 2, borderColor: darkMode ? "#374151" : "#e5e7eb" }} />

          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: darkMode ? "#9ca3af" : "#6b7280", fontSize: "0.875rem" }}>
              {t.registerModal.hasAccount}{" "}
              <Button
                onClick={switchToSignIn}
                sx={{
                  color: "#2563eb",
                  textTransform: "none",
                  fontWeight: 600,
                  p: 0,
                  minWidth: "auto",
                  "&:hover": { backgroundColor: "transparent", textDecoration: "underline" },
                }}
              >
                {t.registerModal.signInLink}
              </Button>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </AppBar>
  );
}
