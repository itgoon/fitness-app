import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// components/custom/dateCalendar + badge
// ----------------------------------------------------------------------

export function dateCalendar(theme: Theme) {
  const light = (theme.palette.mode = 'light');
  const blue = light ? '#2962FF' : '#2962FF';
  const black = light ? '#000' : '#fff';

  return {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          width: '100%',
          '.MuiPickersCalendarHeader-root': {
            '.MuiPickersCalendarHeader-labelContainer': {
              justifyContent: 'center',
              margin: 0,
              fontSize: 18,
              fontWeight: 600,
              color: black,

              '.MuiPickersFadeTransitionGroup-root': {
                paddingRight: 4,
                paddingLeft: 0,
                '.MuiPickersCalendarHeader-label': { marginRight: 0 }
              }
            },
            '.MuiPickersArrowSwitcher-root': {
              display: 'none'
            }
          },
          '.MuiPickersFadeTransitionGroup-root': {
            paddingLeft: 8,
            paddingRight: 8,
            '.MuiDayCalendar-header': {
              gap: 23.2,
              marginTop: 8,
              marginBottom: 8,
              span: { height: 30 }
            },
            '.MuiPickersSlideTransition-root': {
              '.MuiDayCalendar-monthContainer': {
                '> div': {
                  gap: 23.2,
                  marginTop: 8,
                  marginBottom: 8,
                  button: {
                    height: 30,

                    '.MuiBadge-badge': {
                      top: '11px',
                      right: '6px'
                    }
                  },
                  '.MuiPickersDay-today, [aria-selected="true"]': {
                    '.MuiBadge-badge': {
                      top: '9px',
                      right: '6px'
                    }
                  },
                  '[aria-selected="true"]': {
                    backgroundColor: blue
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
