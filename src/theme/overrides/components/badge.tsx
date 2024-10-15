import { Theme } from '@mui/material/styles';
import { BadgeProps, badgeClasses } from '@mui/material/Badge';

// ----------------------------------------------------------------------

// NEW VARIANT
declare module '@mui/material/Badge' {
  interface BadgePropsVariantOverrides {
    alway: true;
    busy: true;
    online: true;
    offline: true;
    invisible: true;
  }
}

export function badge(theme: Theme) {
  return {
    MuiBadge: {
      styleOverrides: {
        dot: {
          borderRadius: '50%',
          minWidth: 6,
          height: 6,
          minHeight: 6
        },
        root: ({ ownerState }: { ownerState: BadgeProps }) => {
          const alway = ownerState.variant === 'alway';

          const online = ownerState.variant === 'online';

          const busy = ownerState.variant === 'busy';

          const offline = ownerState.variant === 'offline';

          const invisible = ownerState.variant === 'invisible';

          const baseStyles = {
            [`&.${badgeClasses.invisible}`]: {
              transform: 'unset'
            },
            width: 6,
            zIndex: 9,
            padding: 0,
            height: 6,
            minWidth: 'auto',
            '&:before, &:after': {
              content: "''",
              borderRadius: 1,
              backgroundColor: theme.palette.common.white
            }
          };

          return {
            ...(online && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                backgroundColor: theme.palette.success.contrastText
              }
            }),
            ...(busy && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                backgroundColor: theme.palette.error.main,
                '&:before': { width: 6, height: 2 }
              }
            }),
            ...(offline && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                backgroundColor: theme.palette.text.disabled,
                '&:before': {
                  width: 6,
                  height: 6,
                  borderRadius: '50%'
                }
              }
            }),
            ...(alway && {
              [`& .${badgeClasses.badge}`]: {
                ...baseStyles,
                backgroundColor: theme.palette.warning.contrastText
              }
            }),
            ...(invisible && {
              [`& .${badgeClasses.badge}`]: {
                display: 'none'
              }
            })
          };
        }
      }
    }
  };
}
