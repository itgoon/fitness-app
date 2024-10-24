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
            marginBottom: 40,
            msOverflowStyle: 'none' /* 인터넷 익스플로러 */,
            scrollbarWidth: 'none' /* 파이어폭스 */,
            li: {
              width: '100%',
              minHeight: 44,
              margin: 0,
              padding: 0,
              justifyContent: 'center',
              '&:first-of-type': {
                marginTop: 0
              },
              // 여기에 타겟 선택자 적용
              '&:not(:last-of-type)': {
                marginBottom: 0 // 예시로 margin-bottom을 적용
              }
            }
          }
        }
      }
    }
  };
}
// .css-j3fs9z-MuiList-root-MuiMultiSectionDigitalClockSection-root
