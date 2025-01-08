import { Theme } from '@mui/material/styles';
import { CheckboxProps, checkboxClasses } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

export function checkbox(theme: Theme) {
  const {palette} = theme;
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: CheckboxProps }) => {
          const { color } = ownerState;

          return {
            padding: 0,

            ...(color === 'default' && {
              [`&.${checkboxClasses.checked}`]: {
                color: ''
              }
            }),
            ...(color === 'primary' && {
              color: palette.common.black,
              [`&.${checkboxClasses.checked}`]: {
                color: palette.primary.main
              }
            }),
            ...(color === 'success' && {
              backgroundColor: palette.common.white,
              [`&.${checkboxClasses.checked}`]: {
                backgroundColor: palette.common.white,
                color: palette.primary.main
              },
              svg: {
                fill: palette.primary.main
              }
            }),
            [`&.${checkboxClasses.disabled}`]: {
              color: palette.action.disabled
            }
          };
        }
      }
    }
  };
}
