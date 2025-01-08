import { RefObject } from 'react';
import { default as ReactSignatureCanvas } from 'react-signature-canvas';

export interface ISign {
  placeholder: string;
  date?: string;
  onClick: () => void;
}

export interface ISignPopover {
  open: boolean;
  data: any;
  onClick: (e: any) => void;
  onClose: () => void;
  isSigned: boolean;
  setIsSigned: (e: boolean) => void;
  clear: () => void;
  signRef: RefObject<ReactSignatureCanvas>;
}
