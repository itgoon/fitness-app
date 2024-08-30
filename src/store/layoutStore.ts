import { atom } from 'recoil';

// 로딩
export const loadingState = atom<boolean>({
  key: `loading_${new Date().getTime()}`,
  default: false,
});

export type ModalType =
  | undefined
  | 'reason'
  | 'point'
  | 'withdrawal'
  | 'findStore'
  | 'memberLoginHistory'
  | 'license'
  | 'memberInfo'
  | 'memberAuth';

export const modalState = atom<{
  open: boolean;
  type: ModalType;
  onClose: VoidFunction;
  data: any;
}>({
  key: `modal_${new Date().getTime()}`,
  default: {
    open: false,
    type: undefined,
    onClose: () => {},
    data: undefined,
  },
});

export const alertState = atom<{
  open: boolean;
  title: string;
  subtitle?: string | undefined;
  onClose: VoidFunction;
}>({
  key: `alert_modal_${new Date().getTime()}`,
  default: {
    open: false,
    title: '',
    subtitle: undefined,
    onClose: () => {},
  },
});

export const confirmState = atom<{
  open: boolean;
  title: string;
  content: any;
  onClose: VoidFunction;
  onClick: VoidFunction;
}>({
  key: `confirm_modal_${new Date().getTime()}`,
  default: {
    open: false,
    title: '',
    content: undefined,
    onClose: () => {},
    onClick: () => {},
  },
});
