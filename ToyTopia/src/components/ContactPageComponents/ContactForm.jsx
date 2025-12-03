import { useState } from "react";
import {
  Box,
  Paper,
  Stack,
  TextField,
  MenuItem,
  Button,
  Typography,
  Divider,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SUBJECT_OPTIONS = [
  "Frage zur Bestellung",
  "Frage zu einem Produkt",
  "Retoure / Reklamation",
  "Technische Probleme",
  "Sonstiges",
];

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phonePrefix: "+49",
  phone: "",
  orderNumber: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form data:", formData);

    // aqui você conectaria com backend / EmailJS etc.
    setIsSubmitted(true);
    setFormData(initialFormData);

    // se quiser desaparecer depois de alguns segundos:
    // setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: "left" }}>
        Schreib uns eine Nachricht
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "rgba(0,0,0,0.6)", mb: 2, textAlign: "left" }}
      >
        Fülle das Formular aus und unser Team meldet sich so schnell wie möglich
        bei dir zurück.
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* mensagem de agradecimento */}
      {isSubmitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Danke! Deine Nachricht wurde erfolgreich gesendet.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2.5}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Vorname *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              size="small"
            />
            <TextField
              fullWidth
              label="Nachname *"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              size="small"
            />
          </Stack>

          <TextField
            fullWidth
            label="E-Mail-Adresse *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            size="small"
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              select
              label="Land"
              name="phonePrefix"
              value={formData.phonePrefix}
              onChange={handleChange}
              size="small"
              sx={{ width: { xs: "100%", sm: "35%" } }}
            >
              <MenuItem value="+49">🇩🇪 +49</MenuItem>
              <MenuItem value="+43">🇦🇹 +43</MenuItem>
              <MenuItem value="+41">🇨🇭 +41</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Telefonnummer (optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              size="small"
            />
          </Stack>

          <TextField
            fullWidth
            label="Bestellnummer (optional)"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            size="small"
          />

          <TextField
            select
            fullWidth
            label="Betreff"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            size="small"
          >
            {SUBJECT_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Bitte beschreibe dein Anliegen *"
            name="message"
            multiline
            minRows={4}
            value={formData.message}
            onChange={handleChange}
            size="small"
          />

          <Box sx={{ textAlign: "right", mt: 1 }}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                borderRadius: 25,
                px: 4,
                py: 1,
                fontWeight: "bold",
                bgcolor: "#000000",
                color: "#ffffff",
                "&:hover": {
                  bgcolor: "#333333",
                },
              }}
            >
              ABSENDEN
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}
