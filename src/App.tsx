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
import { useEffect, useState } from 'react';
import AuthProvider from './provider/AuthProvider';
import ModalProvider from './provider/ModalProvider';
import { CardProvider } from './hooks/useCard';
import { SignProvider } from './hooks/useSign';
import { EditProvider } from './hooks/useEditState';
import { CodeGroupsDto } from './api';
import { CodeService } from './service';

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

  const [code, setCode] = useState<CodeGroupsDto | null>(null);

  useEffect(() => {
    loadCode();
  }, []);

  const loadCode = async () => {
    const res = await CodeService.loadCode({});

    setCode(res);
  };

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
                  <SignProvider>
                    <CardProvider>
                      <EditProvider>
                        <ProgressBar />
                        <Router />
                      </EditProvider>
                    </CardProvider>
                  </SignProvider>
                </ModalProvider>
              </AuthProvider>
            </SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  );
}
