import CP from "@/components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import Store from "@/store";

import { MemberSortList } from "@/utils/constants";
import { TrainerMemberList } from "@/utils/constants/dummyData";

/**
 ****************************************
 * 트레이너 > QR코드 모달
 ****************************************
 */


 interface Props{
    isQRCode : boolean;
    onDismiss : ()=> void;
 }
const QRCodeModal = ({isQRCode, onDismiss}:Props) => {

  return (
    <CP.Modal open={isQRCode} 
    onClose={() => onDismiss()
        // setIsQRCode(false)
    }
    >
    <CP.Icon
      name="material-symbols-light:qr-code-2"
      color="--dark-color"
      style={{ width: "100%", height: "100%", aspectRatio: "1/1" }}
    />
  </CP.Modal>
  );
};

export default QRCodeModal;
