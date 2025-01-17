import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// components/custom/dateCalendar + badge
// ----------------------------------------------------------------------

export function dateCalendar(theme: Theme) {
  return {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          '&.main-calendar': {
            width: '100%',
            height: 'fit-content',

            '.MuiPickersFadeTransitionGroup-root': {
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,

              '> div': {
                '.MuiDayCalendar-header': {
                  justifyContent: 'space-between',
                  marginBottom: 8,

                  span: {
                    width: 30,
                    height: 18,
                    fontSize: 13,
                    lineHeight: 18,
                    fontWeight: 400,
                    color: 'grey.800',
                    margin: 0
                  }
                },

                '.MuiPickersSlideTransition-root': {
                  '.MuiDayCalendar-monthContainer': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,

                    '> div': {
                      justifyContent: 'space-between',
                      margin: 0
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
