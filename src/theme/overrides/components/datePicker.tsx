import { Theme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import Icon from '../../../components/Icon';
import { pxSize } from '../../../utils/style';

// ----------------------------------------------------------------------
// MuiPickersLayout  !== dateCalendar랑 다름
// ----------------------------------------------------------------------

const dateList = [
  'DatePicker',
  'DateTimePicker',
  'StaticDatePicker',
  'DesktopDatePicker',
  'DesktopDateTimePicker',
  //
  'MobileDatePicker',
  'MobileDateTimePicker'
];

const timeList = [
  'TimePicker',
  'MobileTimePicker',
  'StaticTimePicker',
  'DesktopTimePicker'
];

const switchIcon = () => <Iconify icon="eva:chevron-down-fill" width={24} />;

const leftIcon = () => <Iconify icon="eva:arrow-ios-back-fill" width={24} />;

const rightIcon = () => (
  <Iconify icon="eva:arrow-ios-forward-fill" width={24} />
);

const calendarIcon = () => <Icon name="PickerCalendarSvg" size={24} />;

const clockIcon = () => (
  <Iconify icon="solar:clock-circle-outline" width={24} />
);

const desktopTypes = dateList.reduce(
  (result: Record<string, any>, currentValue) => {
    result[`Mui${currentValue}`] = {
      defaultProps: {
        slots: {
          // openPickerIcon: calendarIcon,
          leftArrowIcon: leftIcon,
          rightArrowIcon: rightIcon,
          switchViewIcon: switchIcon
        }
      }
    };

    return result;
  },
  {}
);

const timeTypes = timeList.reduce(
  (result: Record<string, any>, currentValue) => {
    result[`Mui${currentValue}`] = {
      defaultProps: {
        slots: {
          openPickerIcon: clockIcon,
          rightArrowIcon: rightIcon,
          switchViewIcon: switchIcon
        }
      }
    };

    return result;
  },
  {}
);

export function datePicker(theme: Theme) {
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey900 = palette.grey[900];
  const grey800 = palette.grey[800];
  const blue = '#2962FF';
  const headerGrey = light ? grey800 : grey800;
  const red = '#D50000';
  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            padding: 16,
            height: pxSize.lg,
            input: {
              padding: 0,
              fontSize: 16,
              fontWeight: 400,
              color: grey900
            }
          }
        }
      }
    },
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          minWidth: 350,
          minHeight: 344,

          // gap 16 width: 310이 맞지만 적용하면 클릭시 ui가 망가짐

          ' .MuiDateCalendar-root': {
            // calendar-body
            maxHeight: '100%',
            height: '100%',
            width: 320,
            '.MuiPickersFadeTransitionGroup-root': {
              maxHeight: 288,
              height: 288,
              paddingTop: 20,
              paddingBottom: 20,
              // month & year
              '&:has(.MuiMonthCalendar-root), &:has(.MuiYearCalendar-root)': {
                display: 'flex',
                justifyContent: 'center'
              },
              '.MuiYearCalendar-root::-webkit-scrollbar': {
                display: 'none'
              },

              '> div': {
                maxHeight: 'inherit',

                '.MuiDayCalendar-root': {
                  maxHeight: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16
                },
                '.MuiDayCalendar-header': {
                  gap: 13,

                  span: {
                    height: 18,
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

                    gap: 13,
                    '> div': {
                      gap: 13,
                      margin: 0,
                      button: {
                        width: 30,
                        height: 30,
                        fontSize: 15
                      },
                      '.MuiPickersDay-today, [aria-selected="true"]': {
                        paddingLeft: 8,
                        paddingRight: 8
                      },
                      '[aria-selected="true"]': {
                        backgroundColor: blue,
                        color: 'white !important'
                      },
                      '[aria-colindex="1"]': {
                        color: red
                      },
                      '[aria-colindex="7"]': {
                        color: blue
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },

    // Date
    ...desktopTypes,

    // Time
    ...timeTypes
  };
}
