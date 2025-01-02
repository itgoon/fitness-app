export interface ITimePicker {
  setValue?: (arg: string) => void;
  onChange?: (value) => void;
  onClick?: () => void;
  open: boolean;
  onClose: (arg: boolean) => void;

  title: string;
}
