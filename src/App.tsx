import 'src/global.css';

// i18n
import 'src/locales/i18n';

// ----------------------------------------------------------------------

import Router from 'src/routes/main';
import { LocalizationProvider } from 'src/locales';
import ThemeProvider from 'src/theme';
import { MotionLazy } from 'src/components/animate/MotionLazy';
import ProgressBar from 'src/components/progressBar';
import { SettingsProvider } from 'src/components/settings';
import SnackbarProvider from 'src/components/snackbar/SnackbarProvider';
import AuthProvider from './provider/AuthProvider';
import ModalProvider from './provider/ModalProvider';
import useCode from './hooks/useCode';
import { useMe } from './hooks/useMe';

// ----------------------------------------------------------------------

export default function App() {
  const charAt = `

  ░░░    ░░░
  ▒▒▒▒  ▒▒▒▒
  ▒▒ ▒▒▒▒ ▒▒
  ▓▓  ▓▓  ▓▓
  ██      ██

  `;

  console.info(`%c${charAt}`, 'color: #5BE49B');

  useCode();
  useMe();

  return (
    <LocalizationProvider>
      <SettingsProvider
        defaultSettings={{
          themeMode: 'light', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'default', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: false
        }}
      >
        <ThemeProvider>
          <MotionLazy>
            <SnackbarProvider>
              <AuthProvider>
                <ModalProvider>
                  <ProgressBar />
                  <Router />
                </ModalProvider>
              </AuthProvider>
            </SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  );
}
