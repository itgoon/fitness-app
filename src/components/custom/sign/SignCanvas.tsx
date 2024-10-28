import { Box, Typography } from '@mui/material';
import { RefObject, useEffect } from 'react';
import {
  default as ReactSignatureCanvas,
  default as SignatureCanvas
} from 'react-signature-canvas';

export interface SignProps {
  signRef: RefObject<ReactSignatureCanvas>;
  width?: string;
  height?: string;
  isSigned: boolean;
  setIsSigned: (e: boolean) => void;
  placeholder?: string;
  typoColor?: string;
  style?: any;
  defaultValue?: string;
}

export default function SignCanvas({
  signRef,
  width = '310px',
  height = '240px',
  isSigned,
  setIsSigned,
  placeholder,
  style,
  typoColor,
  defaultValue
}: SignProps) {
  useEffect(() => {
    console.log({ defaultValue }, Number(height.replace('px', '')));
    if (!defaultValue) return setIsSigned(false);

    const _height = Number(height.replace('px', ''));
    const _width = Number(width.replace('px', ''));
    const fdata = signRef?.current?.fromDataURL(defaultValue, {
      width: _width,
      height: _height
    });
    setIsSigned(true);

    console.log({ fdata });
  }, [defaultValue, signRef?.current]);

  return (
    <div
      style={{
        position: 'relative',
        ...style
      }}
    >
      <div style={style}></div>
      {!isSigned && (
        <Box sx={{ position: 'absolute', top: '45%', left: '30%' }}>
          <Typography children={placeholder} color={typoColor} />
        </Box>
      )}
      <SignatureCanvas
        ref={signRef}
        penColor="black"
        canvasProps={{
          defaultValue: defaultValue,
          className: 'signature-canvas',
          height: height,
          width: width,
          // width: width, //windowSize?.width,
          style: {
            background: 'transparent'
          }
        }}
        clearOnResize={false}
        onBegin={() => setIsSigned(true)}
      />
    </div>
  );
}
