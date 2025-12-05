import { useContext } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LanguageIcon from "@mui/icons-material/Language";

import ContactForm from "../components/ContactPageComponents/ContactForm";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export default function ContactUs() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language].contactPage;

  return (
    <Box
      className={darkMode ? "dark" : ""}
      sx={{
        minHeight: "calc(100vh - 90px)", // desconta navbar
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,

        // 🌈 gradiente claro/escuro dependendo do tema
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #ffe6e9 0%, #fff6e9 20%, #fff7d9 50%, #e3ffe4 80%, #e8e5ff 100%)"
            : "linear-gradient(135deg, #0a0a0c 0%, #0f0f14 30%, #1a1a21 70%, #000000 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, sm: 5, md: 6 },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "center",
          }}
        >
          {/* --- LEFT (text) --- */}
          <Box
            sx={{
              flex: 1,
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 1, sm: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
              Kontaktiere uns
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.8,
                mb: 2,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                maxWidth: { xs: 360, sm: 420, md: "none" },
              }}
            >
              {t.subtitle}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                opacity: 0.7,
                mb: 3,
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                maxWidth: { xs: 360, sm: 420, md: "none" },
              }}
            >
              {t.description}
            </Typography>

            <Stack
              spacing={2}
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
                width: "100%",
              }}
            >
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <MailOutlineIcon fontSize="small" />
                <MuiLink
                  href="mailto:support@toytopia.de"
                  underline="hover"
                  sx={{
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    wordBreak: "break-all",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  support@toytopia.de
                </MuiLink>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <PhoneInTalkIcon fontSize="small" />
                <MuiLink
                  href="tel:+492111234567"
                  underline="hover"
                  sx={{
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  +49 211 123 4567
                </MuiLink>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <LanguageIcon fontSize="small" />
                <MuiLink
                  href="https://www.toytopia.de"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  sx={{
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    wordBreak: "break-all",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  www.toytopia.de
                </MuiLink>
              </Stack>
            </Stack>
          </Box>

          {/* CENTRAL LINE */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "1px",
              alignSelf: "stretch",
              background: darkMode
                  ? "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0))"
                  : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25), rgba(0,0,0,0))",
            }}
          />

          {/* --- RIGHT (Form) --- */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              px: { xs: 1, sm: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: 420, sm: 480, md: 520 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
