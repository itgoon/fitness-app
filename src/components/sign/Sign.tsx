import { useWindowSize } from "@/hooks/useWindowSize";
import { RefObject } from "react";
import {
  default as ReactSignatureCanvas,
  default as SignatureCanvas
} from "react-signature-canvas";
import styled from "styled-components";

export interface SignProps {
  signRef: RefObject<ReactSignatureCanvas>;
  width?: string;
  height?: string;
  isSigned: boolean;
  setIsSigned: (e: boolean) => void;
  placeholder?: string;
  style?: any;
  defaultValue?: string;
}

const Sign = ({
  signRef,
  height = "500px",
  isSigned,
  setIsSigned,
  placeholder,
  style,
  defaultValue
}: SignProps) => {
  const windowSize = useWindowSize();
  const getSignWidth = () =>
    windowSize[0] - 32 > 500 ? 500 : windowSize[0] - 32;

  return (
    <div
      style={{
        position: "relative",
        ...style
      }}
    >
      <div style={style}></div>
      {!isSigned && <CanvasPlaceholder>{placeholder}</CanvasPlaceholder>}
      <SignatureCanvas
        ref={signRef}
        penColor="black"
        canvasProps={{
          defaultValue: defaultValue,
          className: "signature-canvas",
          height: height,
          // width: width, //windowSize?.width,
          width: getSignWidth(),
          style: {
            background: "transparent"
          }
        }}
        clearOnResize={false}
        onBegin={() => setIsSigned(true)}
      />
    </div>
  );
};

export default Sign;

const CanvasPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #666;
`;
