import { Box, Container, Typography } from '@mui/material';

export default function ContactHeader() {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg, #ffe6e9 0%, #fff6e9 8%, #fff7d9 35%, #e3ffe4 70%, #e8e5ff 100%)',
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
        mb: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{
            fontWeight: 800,
            letterSpacing: '0.08em',
            mb: 1,
          }}
        >
          Kontaktiere uns
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: 'rgba(0,0,0,0.7)',
            maxWidth: 520,
            mx: 'auto',
          }}
        >
          Wie können wir helfen? Schreib uns einfach eine Nachricht zu deiner
          Bestellung, Lieferung oder zu unseren Spielsachen.
        </Typography>
      </Container>
    </Box>
  );
}
