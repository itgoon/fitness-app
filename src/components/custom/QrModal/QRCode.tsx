import { QRCodeSVG } from 'qrcode.react';

interface IQRCode {
  value?: string;
  size?: number;
  margin?: number;
  onClick?: () => void;
}
export default function QRCode({ value, size, margin, onClick }: IQRCode) {
  return (
    <QRCodeSVG
      onClick={onClick && onClick}
      value={value ? value : 'https://example.com'}
      size={size ? size : 100}
      bgColor={'white'}
      marginSize={margin ? margin : 2}
    ></QRCodeSVG>
  );
}
