import { useState } from 'react';
import {
  Box,
  Paper,
  Stack,
  TextField,
  MenuItem,
  Button,
  Typography,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SUBJECT_OPTIONS = [
  'Frage zur Bestellung',
  'Frage zu einem Produkt',
  'Retoure / Reklamation',
  'Technische Probleme',
  'Sonstiges',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    phonePrefix: '+49',
    phone: '',
    orderNumber: '',
    subject: '',
    message: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Aqui depois você pode integrar com backend, EmailJS etc.
    console.log('Form data:', formData);
    alert('Danke! Deine Nachricht wurde gesendet (fake).');
  }

  return (
    <Paper
      elevation={1}
      sx={{
        p: { xs: 2.5, md: 3.5 },
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
        Schreibe uns eine Nachricht
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Stack spacing={2.5}>
          {/* Nome */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Vorname"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Nachname"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Stack>

          {/* Email */}
          <TextField
            label="E-Mail-Adresse"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="E-Mail-Adresse bestätigen"
            name="emailConfirm"
            type="email"
            value={formData.emailConfirm}
            onChange={handleChange}
            fullWidth
            required
          />

          {/* Telefone */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              select
              label="Land"
              name="phonePrefix"
              value={formData.phonePrefix}
              onChange={handleChange}
              sx={{ minWidth: 110 }}
            >
              <MenuItem value="+49">🇩🇪 +49</MenuItem>
              <MenuItem value="+41">🇨🇭 +41</MenuItem>
              <MenuItem value="+43">🇦🇹 +43</MenuItem>
            </TextField>

            <TextField
              label="Telefonnummer (optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Stack>

          {/* Número do pedido */}
          <TextField
            label="Bestellnummer (optional)"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            fullWidth
          />

          {/* Assunto */}
          <TextField
            select
            label="Betreff"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            required
          >
            {SUBJECT_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {/* Mensagem */}
          <TextField
            label="Bitte beschreibe dein Anliegen"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            minRows={4}
          />

          <Box display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 1,
                px: 4,
                py: 1.2,
                borderRadius: 999,
                textTransform: 'none',
                fontWeight: 700,
                background:
                  'linear-gradient(135deg, #00c853 0%, #00b0ff 50%, #7c4dff 100%)',
              }}
            >
              Absenden
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}
