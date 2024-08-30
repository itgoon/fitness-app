import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/hmac-sha256';

const CryptoUtil = {
  pad: (number: number, length: number): string => {
    let str = `${number}`;
    while (str.length < length) {
      str = `0${str}`;
    }
    return str;
  },
  getNowDate: (): string => {
    const nowDate = new Date();
    const yyyy = nowDate.getUTCFullYear().toString();
    const MM = CryptoUtil.pad(nowDate.getUTCMonth() + 1, 2);
    const dd = CryptoUtil.pad(nowDate.getUTCDate(), 2);
    const hh = CryptoUtil.pad(nowDate.getUTCHours(), 2);
    const mm = CryptoUtil.pad(nowDate.getUTCMinutes(), 2);
    return `${yyyy}-${MM}-${dd} ${hh}:${mm}`;
  },
  getSecretKey: (): string => {
    const signBytes = sha256(CryptoUtil.getNowDate(), import.meta.env.VITE_CLP_CLIENT_SECRET_KEY);
    return CryptoJS.enc.Hex.stringify(signBytes);
  },
};
export default CryptoUtil;
