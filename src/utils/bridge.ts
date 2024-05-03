/**
 * Mobile Interface (웹 > 앱)
 *
 * 내 위치 정보 요청
 * 알림 On 요청
 * 토큰 정보 요청
 *
 */

import { isIOS, isMobileOnly } from "react-device-detect";

const Bridge = {
  scheme: "crew-pulse",

  log: (msg: string) =>
    console.info(
      "%c#### Bridge call : %s",
      "background-color:rgba(0,0,0,0.2); color:#ffffff;",
      msg
    ),

  //내 위치 정보 요청
  getCurrentPosition: () => {
    try {
      Bridge.log(`${Bridge.scheme}://getCurrentPosition`);
      if (isMobileOnly) {
        window.location.href = `${Bridge.scheme}://getCurrentPosition`;
      }
    } catch (err) {}
  },

  //알람 ON 요청
  setPushOn: () => {
    try {
      Bridge.log(`${Bridge.scheme}://setPushOn`);
      if (isMobileOnly) {
        window.location.href = `${Bridge.scheme}://setPushOn`;
      }
    } catch (err) {}
  },

  //토큰 정보 요청
  getDeviceToken: () => {
    try {
      // Bridge.log(`${Bridge.scheme}://getDeviceToken`);
      if (isMobileOnly) {
        window.location.href = `${Bridge.scheme}://getDeviceToken`;
      }
    } catch (err) {}
  }
};

export default Bridge;
