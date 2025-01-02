// ----------------------------------------------------------------------

export function select() {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          '.MuiSelect-select': {
            padding: '13px 14px'
          }
        },
        icon: {
          right: 10,
          width: 18,
          height: 18,
          top: 'calc(50% - 9px)'
        }
      }
    },
    MuiNativeSelect: {
      styleOverrides: {
        icon: {
          right: 10,
          width: 18,
          height: 18,
          top: 'calc(50% - 9px)'
        }
      }
    }
  };
}
