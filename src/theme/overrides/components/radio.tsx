import { Theme } from '@mui/material/styles';
import { RadioProps, radioClasses } from '@mui/material/Radio';

// ----------------------------------------------------------------------

export function radio(theme: Theme) {
  return {
    // CHECKBOX, RADIO, SWITCH
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...theme.typography.body2
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: RadioProps }) => {
          const { color } = ownerState;

          return {
            padding: theme.spacing(1),
            backgroundColor: '#fff',
            width: 20,
            height: 20,
            border: '2px solid black',
            svg: {
              fontSize: '1.5rem'
            },
            ...(color === 'default' && {
              [`&.${radioClasses.checked}`]: {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.common.white
              }
            }),
            [`&.${radioClasses.disabled}`]: {
              color: theme.palette.action.disabled,
              backgroundColor: theme.palette.common.white
            },
            '&: hover': {
              backgroundColor: theme.palette.common.white
            }
          };
        }
      }
    }
  };
}
