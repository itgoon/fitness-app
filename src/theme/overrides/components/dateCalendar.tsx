import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// components/custom/dateCalendar + badge
// ----------------------------------------------------------------------

export function dateCalendar(theme: Theme) {
  const light = (theme.palette.mode = 'light');
  const { palette } = theme;
  const grey800 = palette.grey[800];
  const primarylig = palette.primary.light;
  const headerGrey = light ? grey800 : grey800;
  const errorDk = palette.error.dark;

  return {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          '&.main-calendar': {
            width: '100%',

            // calendar-body
            '.MuiPickersFadeTransitionGroup-root': {
              maxHeight: 248,
              paddingLeft: 12,
              paddingRight: 12,

              // month & year
              '&:has(.MuiMonthCalendar-root), &:has(.MuiYearCalendar-root)': {
                display: 'flex',
                justifyContent: 'center'
              },
              '.MuiYearCalendar-root::-webkit-scrollbar': { display: 'none' },

              '> div': {
                maxHeight: 'inherit',

                '.MuiDayCalendar-root': { maxHeight: 'inherit' },
                '.MuiDayCalendar-header': {
                  gap: 14,
                  marginTop: 6,
                  marginBottom: 6,

                  span: {
                    height: 30,
                    fontSize: 13,
                    fontWeight: 400,
                    color: headerGrey
                  }
                },

                '.MuiPickersSlideTransition-root': {
                  minHeight: 210,

                  '.MuiDayCalendar-monthContainer': {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',

                    gap: 7,
                    // 7*4 = 24 + weekLine(24+30*5) + dayline(42) 하면 220 pb 20 공간 딱 남음
                    '> div': {
                      gap: 20,
                      margin: 0,
                      button: {
                        width: 30,
                        height: 30,
                        '.MuiBadge-badge': {
                          top: '11px',
                          right: '6px'
                        }
                      },
                      '.MuiPickersDay-today, [aria-selected="true"]': {
                        paddingLeft: 8,
                        paddingRight: 8,
                        '.MuiBadge-badge': {
                          top: '9px',
                          right: '6px'
                        }
                      },
                      '[aria-selected="true"]': {
                        backgroundColor: primarylig,
                        color: 'white !important'
                      },
                      '[aria-colindex="1"]': {
                        color: errorDk
                      },
                      '[aria-colindex="7"]': {
                        color: primarylig
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}
