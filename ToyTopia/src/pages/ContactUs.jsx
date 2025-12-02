import { Box, Container, Typography, Stack } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import ContactHeader from '../components/ContactPageComponents/ContactHeader';
import ContactInfoCard from '../components/ContactPageComponents/ContactInfoCard';
import ContactForm from '../components/ContactPageComponents/ContactForm';

const ContactUs = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f7' }}>
      {/* Header with gradient */}
      <ContactHeader />

      {/* Main content */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 8 } }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          {/* Left side - cards */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: '1rem' }}>
              <ContactInfoCard icon={ChatBubbleOutlineIcon} title="Chatte mit uns">
                <Typography variant="body2" sx={{ mb: 2, color: 'rgba(0,0,0,0.7)', lineHeight: 1.8 }}>
                  Du hast Fragen rund um deinen Einkauf, zur Lieferung oder zu
                  unseren Spielsachen? Unser Kundenservice hilft dir gerne weiter.
                  <br />
                  Unser Kundenservice steht dir zu folgenden Zeiten zur Verfügung:
                  <br />
                  <span style={{ fontWeight: 'bold', padding: '0.5rem 0', display: 'block' }}>
                    Mo. - Fr.: 9:00 bis 12:00 Uhr und 15:00 bis 17:00 Uhr.
                  </span>
                  An Feiertagen kann es zu abweichenden Servicezeiten kommen.
                </Typography>
              </ContactInfoCard>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <ContactInfoCard icon={ChatBubbleOutlineIcon} title="Live-Chat">
                <Typography variant="body2" sx={{ mb: 2, color: 'rgba(0,0,0,0.7)', lineHeight: 1.8 }}>
                  <span style={{ fontWeight: 'bold', padding: '0.5rem 0', display: 'block' }}>
                    Mo. – Fr.: 9:00–12:00 Uhr und 15:00–17:00 Uhr.
                  </span>
                  Klicke einfach auf das Chatsymbol im Shop, um mit uns zu schreiben.
                  <br />
                  Unser Team freut sich darauf, Ihnen zu helfen!
                </Typography>
              </ContactInfoCard>
            </div>
            <div>
              <ContactInfoCard icon={MailOutlineIcon} title="Schreib uns eine E-Mail">
                <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.7)', lineHeight: 1.8 }}>
                  Fülle einfach das Formular aus, und unser Team meldet sich so
                  schnell wie möglich bei dir zurück – meistens innerhalb von 1–2
                  Werktagen.
                  <br />
                  <span style={{ fontWeight: 'bold', padding: '0.5rem 0', display: 'block' }}>
                    Mo. - Fr.: 9:00 bis 19:00 Uhr.
                  </span>
                  <span style={{ fontWeight: 'bold', padding: '0.5rem 0', display: 'block' }}>
                    Sa.: 10:00 bis 14:00 Uhr.
                  </span>
                  An Feiertagen kann es zu abweichenden Servicezeiten kommen.
                </Typography>
              </ContactInfoCard>
            </div>
          </div>

          {/* Right side - form */}
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default ContactUs;
