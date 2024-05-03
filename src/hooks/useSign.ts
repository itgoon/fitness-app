import { useRef, useState } from "react";
import { default as ReactSignatureCanvas } from "react-signature-canvas";

import fs from "fs";

/**
 *
 */
export interface IProps {}
export const useSign = () => {
  const signRef = useRef<ReactSignatureCanvas>(null);
  const [isSigned, setIsSigned] = useState<boolean>(false);

  // 서명 패드에 서명한 내용 지우기
  const clear = () => {
    signRef.current?.clear();
    setIsSigned(false);
  };
  // 서명 사진 데이터 url 얻는 방법
  const getFile = (): string => {
    const data = signRef.current!.toDataURL("image/png");

    return String(data);
  };

  // 서명 사진 데이터 url 얻는 방법
  const getOriginalFile = (): any => {
    const data = signRef.current!.toDataURL();

    const binaryData = atob(data.split(",")[1]);
    const array = [];

    for (var i = 0; i < binaryData.length; i++) {
      array.push(binaryData.charCodeAt(i));
    }

    const file = new File([new Uint8Array(array)], "fileName", {
      type: "image/png"
    });

    return file;
  };

  return {
    signRef,
    clear,
    getFile,
    getOriginalFile,
    isSigned,
    setIsSigned
  };
};
