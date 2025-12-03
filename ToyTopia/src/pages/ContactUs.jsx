import {
  Box,
  Container,
  Typography,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LanguageIcon from "@mui/icons-material/Language";

import ContactForm from "../components/ContactPageComponents/ContactForm";

export default function ContactUs() {
  const theme = useTheme();

  return (
    <Box
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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* --- ESQUERDA (texto) --- */}
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
              px: 3,
              py: 3,
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
              sx={{ opacity: 0.8, mb: 3 }}
            >
              Nicht sicher, was du brauchst? Unser Team hilft dir gerne bei
              Fragen zu Bestellung, Lieferung oder unseren Spielsachen.
            </Typography>

            <Typography
              variant="body2"
              sx={{ opacity: 0.65, mb: 4 }}
            >
              Schreib uns einfach – wir melden uns so schnell wie möglich bei dir.
            </Typography>

            <Stack spacing={2} sx={{ alignItems: "left" }}>
              <Stack direction="row" spacing={1.5} alignItems="left">
                <MailOutlineIcon />
                <MuiLink
                  href="mailto:support@toytopia.de"
                  underline="hover"
                  sx={{
                    color: "inherit",
                    fontWeight: 500,
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  support@toytopia.de
                </MuiLink>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneInTalkIcon />
                <MuiLink
                  href="tel:+492111234567"
                  underline="hover"
                  sx={{
                    color: "inherit",
                    fontWeight: 500,
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  +49 211 123 4567
                </MuiLink>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <LanguageIcon />
                <MuiLink
                  href="https://www.toytopia.de"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  sx={{
                    color: "inherit",
                    fontWeight: 500,
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  www.toytopia.de
                </MuiLink>
              </Stack>
            </Stack>
          </Box>

          {/* LINHA CENTRAL */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "1px",
              alignSelf: "stretch",
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25), rgba(0,0,0,0))"
                  : "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0))",
            }}
          />

          {/* --- DIREITA (Formulário) --- */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
