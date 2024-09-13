import { filledInputClasses } from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { alpha, Theme } from "@mui/material/styles";
import { pxSize } from "src/utils/style";

// ----------------------------------------------------------------------

declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    text: true;
  }
}

export function textField(theme: Theme) {
  const color = {
    focused: theme.palette.text.primary,
    active: theme.palette.text.secondary,
    placeholder: theme.palette.text.disabled,
    border: theme.palette.primary.main
  };

  const font = {
    // label: theme.typography.textLabel,
    label: theme.typography.body1,
    value: theme.typography.body2
  };

  return {
    // HELPER
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1)
        }
      }
    },

    // LABEL
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...font.value,
          fontSize: 12,
          top: "8px !important",
          color: color.placeholder,
          [`&.${inputLabelClasses.shrink}`]: {
            ...font.label,
            fontWeight: 600,
            color: color.active,
            [`&.${inputLabelClasses.focused}`]: {
              color: color.focused
            },
            [`&.${inputLabelClasses.error}`]: {
              color: theme.palette.error.main
            },
            [`&.${inputLabelClasses.disabled}`]: {
              color: theme.palette.text.disabled
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: "translate(12px, 6px) scale(0.75)"
            }
          }
        }
      }
    },

    // BASE
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginTop: "12px !important",
          color: "#212121",
          [`&.${inputBaseClasses.disabled}`]: {
            "& svg": {
              color: theme.palette.text.disabled
            }
          }
        },
        input: {
          ...font.value,
          "&::placeholder": {
            opacity: 1,
            color: color.placeholder
          }
        }
      }
    },

    // STANDARD
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: alpha(theme.palette.grey[500], 0.32)
          },
          "&:after": {
            borderBottomColor: color.border
          }
        }
      }
    },

    // OUTLINED
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&.${outlinedInputClasses.focused}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: color.focused
            }
          },
          [`&.${outlinedInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.error.main
            }
          },
          [`&.${outlinedInputClasses.disabled}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.action.disabledBackground
            }
          }
        },
        notchedOutline: {
          borderColor: alpha(theme.palette.grey[500], 0.2),
          transition: theme.transitions.create(["border-color"], {
            duration: theme.transitions.duration.shortest
          })
        }
      }
    },

    // FILLED
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[500], 0.16)
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: alpha(theme.palette.grey[500], 0.16)
          },
          [`&.${filledInputClasses.error}`]: {
            backgroundColor: alpha(theme.palette.error.main, 0.08),
            [`&.${filledInputClasses.focused}`]: {
              backgroundColor: alpha(theme.palette.error.main, 0.16)
            }
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: theme.palette.action.disabledBackground
          }
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          [`.MuiInputBase-input`]: {
            // padding: "13px 12px 13px 10px",
            boxSizing: "border-box",
            height: pxSize.md,

            "&.MuiInputBase-inputSizeSmall": {
              height: pxSize.sm
            }
          },
          ["&.isView"]: {
            ".MuiInputBase-root": {
              fieldset: {
                border: "0px"
              }
            },

            ".Mui-disabled": {
              color: "currentColor",
              "-webkit-text-fill-color": "currentColor"
            },
            ".MuiFormLabel-root": {
              color: theme.palette.grey[600]
            },
            button: {
              display: "none"
            }
          }
        }
      }
    }
  };
}