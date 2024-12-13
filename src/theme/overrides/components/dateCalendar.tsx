import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// components/custom/dateCalendar + badge
// ----------------------------------------------------------------------

export function dateCalendar(theme: Theme) {
  const light = theme.palette.mode === 'light'; // 수정: '='를 '==='로 변경
  const { palette } = theme;
  // const sm = theme.breakpoints.down

  const grey800 = palette.grey[800];
  const primaryLight = palette.primary.light; // 변수 이름 수정
  const errorDark = palette.error.dark;

  const headerColor = light ? grey800 : grey800; // 중복 제거

  return {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          '&.main-calendar': {
            width: '100%',

            // Calendar body styling
            '.MuiPickersFadeTransitionGroup-root': {
              maxHeight: 248,
              paddingLeft: 12,
              paddingRight: 12,

              // Month & Year calendar styling
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
                  justifyContent: 'space-between',
                  marginTop: 6,
                  marginBottom: 6,

                  span: {
                    height: 30,
                    fontSize: 13,
                    lineHeight: '25px',
                    fontWeight: 400,
                    color: headerColor
                  }
                },

                '.MuiPickersSlideTransition-root': {
                  minHeight: 210,

                  '.MuiDayCalendar-monthContainer': {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 7,

                    '> div': {
                      gap: 20,
                      justifyContent: 'space-between',
                      margin: 0,

                      button: {
                        span: {
                          lineHeight: '25px'
                        },
                        width: 30,
                        height: 30,

                        '.MuiBadge-badge': {
                          top: '11px',
                          right: '6px'
                        }
                      },

                      // Today's day and selected day styling
                      '.MuiPickersDay-today, [aria-selected="true"]': {
                        paddingLeft: 8,
                        paddingRight: 8,

                        '.MuiBadge-badge': {
                          top: '9px',
                          right: '6px'
                        }
                      },

                      // Selected day styling
                      '[aria-selected="true"]': {
                        backgroundColor: primaryLight,
                        color: 'white !important'
                      },

                      // Error and primary color days
                      '[aria-colindex="1"]': {
                        color: errorDark
                      },
                      '[aria-colindex="7"]': {
                        color: primaryLight
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
