// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function timePicker() {
  return {
    MuiMultiSectionDigitalClock: {
      styleOverrides: {
        root: {
          border: 'none !important',
          ul: {
            width: '100%',
            border: 'none !important',
            maxHeight: 256,
            paddingTop: 40,
            paddingBottom: 40,
            msOverflowStyle: 'none' /* 인터넷 익스플로러 */,
            scrollbarWidth: 'none' /* 파이어폭스 */,
            li: {
              width: '100%',
              maxHeight: 44,
              margin: 0,
              padding: 0,
              justifyContent: 'center'
            }
          }
        }
      }
    }
  };
}
