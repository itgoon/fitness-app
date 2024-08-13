// material-ui
import { CheckboxProps } from "@mui/material/Checkbox";

// ==============================|| RADIO - COLORS ||============================== //

// ==============================|| CHECKBOX - SIZE STYLE ||============================== //

interface RadioSizeProps {
  size: number;
  dotSize: number;
  position: number;
}

function getSizeStyle(size?: CheckboxProps["size"]): RadioSizeProps {
  switch (size) {
    case "small":
      return { size: 16, dotSize: 8, position: 3 };
    case "large":
      return { size: 24, dotSize: 12, position: 5 };
    case "medium":
    default:
      return { size: 20, dotSize: 10, position: 4 };
  }
}

// ==============================|| CHECKBOX - STYLE ||============================== //

function radioStyle(size?: CheckboxProps["size"]) {
  const sizes: RadioSizeProps = getSizeStyle(size);

  return {
    "& .icon": {
      width: sizes.size,
      height: sizes.size,
      "& .dot": {
        width: sizes.dotSize,
        height: sizes.dotSize,
        top: sizes.position,
        left: sizes.position
      }
    }
  };
}

// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Radio() {
  return {
    MuiRadio: {
      defaultProps: {
        className: "size-small"
      },
      styleOverrides: {
        root: {
          "&.size-small": {
            ...radioStyle("small")
          },
          "&.size-medium": {
            ...radioStyle("medium")
          },
          "&.size-large": {
            ...radioStyle("large")
          }
        }
      }
    }
  };
}
