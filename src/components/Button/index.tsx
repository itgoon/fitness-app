import { Button as MuiButton } from '@mui/material';
import Typography from '@mui/material/Typography';

import { CustomButton } from './types';
import Icon from '../Icon';

export default function Button({
  startIcon,
  endIcon,
  borderColor,
  fullWidth = true,
  isShadow = false,
  children,
  typoVariant,
  typoColor,
  isTopRadius = false,
  isBottomRadius = false,
  ...props
}: CustomButton) {
  const shadowSx = isShadow === true ? '0 2px 4px rgba(0, 0, 0, 0.02)' : '';
  const iconSize =
    props.size === 'large' ? 24 : props.size === 'medium' ? 20 : 16;

  const renderChildren = () => {
    if (
      startIcon !== undefined ||
      endIcon !== undefined ||
      typoVariant !== undefined
    ) {
      return (
        <Typography
          sx={{ flex: 1 }}
          color={typoColor || 'inherit'}
          variant={typoVariant || 'Body14/regular'}
        >
          {children}
        </Typography>
      );
    }
    return children;
  };
  const topRadius = isTopRadius && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  };
  const bottomRadius = isBottomRadius && {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  };

  return (
    <MuiButton
      fullWidth={fullWidth}
      startIcon={startIcon && <Icon name={startIcon} size={iconSize} />}
      endIcon={endIcon && <Icon name={endIcon} size={iconSize} />}
      sx={{
        border: `1px solid ${borderColor}`,
        boxShadow: `${shadowSx} !important`,
        ...topRadius,
        ...bottomRadius,
        ...props.sx
      }}
      {...props}
    >
      {renderChildren()}
    </MuiButton>
  );
}
