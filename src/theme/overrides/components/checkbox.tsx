import { Theme } from '@mui/material/styles';
import { CheckboxProps, checkboxClasses } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

export function checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: CheckboxProps }) => {
          const { color } = ownerState;

          return {
            padding: 0,

            ...(color === 'default' && {
              [`&.${checkboxClasses.checked}`]: {
                color: theme.palette.text.primary
              }
            }),
            ...(color === 'primary' && {
              color: theme.palette.common.black,
              [`&.${checkboxClasses.checked}`]: {
                color: theme.palette.primary.main
              }
            }),
            ...(color === 'success' && {
              backgroundColor: theme.palette.common.white,
              [`&.${checkboxClasses.checked}`]: {
                color: theme.palette.primary.main
              }
            }),
            [`&.${checkboxClasses.disabled}`]: {
              color: theme.palette.action.disabled
            }
          };
        }
      }
    }
  };
}
