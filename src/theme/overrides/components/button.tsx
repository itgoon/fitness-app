import { buttonClasses, ButtonProps } from '@mui/material/Button';
import { alpha, Theme } from '@mui/material/styles';
import { pxSize } from 'src/utils/style';

// ----------------------------------------------------------------------

const COLORS = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error'
] as const;

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

// ----------------------------------------------------------------------

export function button(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  const rootStyles = (ownerState: ButtonProps) => {
    const inheritColor = ownerState.color === 'inherit';

    const containedVariant = ownerState.variant === 'contained';

    const outlinedVariant = ownerState.variant === 'outlined';

    const textVariant = ownerState.variant === 'text';

    const softVariant = ownerState.variant === 'soft';

    const smallSize = ownerState.size === 'small';

    const mediumSize = !ownerState?.size || ownerState.size === 'medium';

    const largeSize = ownerState.size === 'large';
    const startIcon =
      ownerState.startIcon !== '' || ownerState.startIcon !== undefined;

    const defaultStyle = {
      ...(inheritColor && {
        // CONTAINED
        ...(containedVariant && {
          color: lightMode
            ? theme.palette.common.white
            : theme.palette.grey[800],
          backgroundColor: lightMode
            ? theme.palette.common.black
            : theme.palette.common.white,
          '&:hover': {
            backgroundColor: lightMode
              ? theme.palette.grey[700]
              : theme.palette.grey[400]
          }
        }),
        // OUTLINED
        ...(outlinedVariant && {
          borderColor: alpha(theme.palette.grey[500], 0.32),
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }),
        // TEXT
        ...(textVariant && {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }),
        // SOFT
        ...(softVariant && {
          // disable 기능이 없는 disable color
          // color: theme.palette.text.primary,
          color: theme.palette.grey.A100,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.24)
          }
        })
      }),
      ...(outlinedVariant && {
        '&:hover': {
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor'
        }
      })
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          '&:hover': {
            boxShadow: theme.customShadows[color]
          }
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette[color][lightMode ? 'dark' : 'light'],
          backgroundColor: alpha(theme.palette[color].main, 0.16),
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].main, 0.32)
          }
        }),
        // TEXT
        ...(textVariant && {
          ...(ownerState.color === 'secondary' && {
            color: theme.palette.grey[400],
            '&:hover': {
              backgroundColor: alpha(theme.palette.secondary.main, 0.08)
            }
          })
        })
      })
    }));

    const disabledState = {
      [`&.${buttonClasses.disabled}`]: {
        // SOFT
        color: theme.palette.grey.A100,
        backgroundColor: alpha(theme.palette.primary.main, 0.45),
        ...(softVariant && {
          backgroundColor: theme.palette.action.disabledBackground
        }),
        ...(containedVariant && {
          color: lightMode
            ? theme.palette.common.white
            : theme.palette.grey[800]
        })
      }
    };

    const size = {
      ...(smallSize && {
        height: pxSize.sm,
        fontSize: 13,
        paddingLeft: 8,
        paddingRight: 8,
        ...(textVariant && {
          paddingLeft: 4,
          paddingRight: 4
        })
      }),
      ...(mediumSize && {
        paddingLeft: 12,
        height: pxSize.md,
        paddingRight: 12,
        ...(textVariant && {
          paddingLeft: 8,
          paddingRight: 8
        })
      }),
      ...(largeSize && {
        height: pxSize.lg,
        fontSize: 15,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'center',

        ...(textVariant && {
          paddingLeft: 10,
          paddingRight: 10
        })
      })
    };

    const iconButtonStyle = {
      ...(startIcon &&
        largeSize && {
          padding: '14px 24px',

          '& .MuiButton-startIcon': {
            margin: 0,
            '& svg': {
              // TODO 아이콘 크기에 접근하려면 이곳으로
            }
          }
        })
    };
    return [defaultStyle, ...colorStyle, disabledState, size, iconButtonStyle];
  };

  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) =>
          rootStyles(ownerState)
      }
    }
  };
}
