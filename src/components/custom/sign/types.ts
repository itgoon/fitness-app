export interface ISign {
  placeholder: string;
  date?: string;
  onClick: () => void;
}

export interface ISignPopover {
  open: boolean;
  onClick: () => void;
  onClose: () => void;
}
