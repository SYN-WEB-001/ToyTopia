import { Paper, Stack, Typography } from '@mui/material';

export default function ContactInfoCard({ icon: Icon, title, children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 3,
        border: '1px solid rgba(0,0,0,0.06)',
        backgroundColor: '#ffffffcc',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        {Icon && (
          <Icon
            sx={{
              mt: 0.5,
              fontSize: 28,
              color: '#5c6bc0',
            }}
          />
        )}

        <Stack spacing={0.5}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.7)' }}>
            {children}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
