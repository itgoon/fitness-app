import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useCountdownDate } from 'src/hooks/useCountdown';

import { ComingSoonIllustration } from 'src/assets/illustrations';

import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdownDate(
    new Date('07/07/2024 21:30')
  );

  const settings = useSettingsContext();

  return (
    <>
      <Container
        maxWidth={settings.themeStretch ? false : 'xl'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Coming Soon!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>

        <ComingSoonIllustration sx={{ my: 10, height: 240 }} />

        {/* <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="Days" value={days} />

        <TimeBlock label="Hours" value={hours} />

        <TimeBlock label="Minutes" value={minutes} />

        <TimeBlock label="Seconds" value={seconds} />
      </Stack>

      <TextField
        fullWidth
        placeholder="Enter your email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="large">
                Notify Me
              </Button>
            </InputAdornment>
          ),
          sx: {
            pr: 0.5,
            [`&.${outlinedInputClasses.focused}`]: {
              boxShadow: (theme) => theme.customShadows.z20,
              transition: (theme) =>
                theme.transitions.create(['box-shadow'], {
                  duration: theme.transitions.duration.shorter,
                }),
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
              },
            },
          },
        }}
        sx={{ my: 5 }}
      />

      <Stack spacing={1} alignItems="center" justifyContent="center" direction="row">
        {_socials.map((social) => (
          <IconButton
            key={social.name}
            sx={{
              color: social.color,
              '&:hover': {
                bgcolor: alpha(social.color, 0.08),
              },
            }}
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack> */}
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
