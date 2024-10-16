/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useRecoilState } from "recoil";

import Store from "src/store";
import { ModalType } from "src/store/layoutStore";

interface Props {
  openModal: ({
    type,
    data,
    onClose
  }: {
    type: ModalType;
    data: any;
    onClose?: () => void;
  }) => void;
  openAlert: ({
    title,
    subtitle,
    onClose
  }: {
    title: string;
    subtitle?: string;
    onClose?: () => void;
  }) => void;
  openConfirm: ({
    title,
    content,
    onClick,
    onClose
  }: {
    title: string;
    content?: any;
    onClick?: () => void;
    onClose?: () => void;
  }) => void;
}
/**
 * 인증 Hooks
 * @returns
 */
export const useModal = (): Props => {
  const [modalState, setModalState] = useRecoilState(Store.Layout.modalState);
  const [alertState, setAlertState] = useRecoilState(Store.Layout.alertState);
  const [confirmState, setConfirmState] = useRecoilState(
    Store.Layout.confirmState
  );

  const openModal = useCallback(
    ({
      type,
      data,
      onClose
    }: {
      type: ModalType;
      data: any;
      onClose?: () => void;
    }) => {
      setModalState({
        ...modalState,
        open: true,
        type,
        data,
        onClose: onClose || modalState.onClose
      });
    },
    [modalState]
  );

  const openAlert = useCallback(
    ({
      title,
      subtitle,
      onClose
    }: {
      title: string;
      subtitle?: string;
      onClose?: () => void;
    }) => {
      setAlertState({
        ...alertState,
        open: true,
        title,
        subtitle,
        onClose: onClose || alertState.onClose
      });
    },
    [alertState]
  );

  const openConfirm = useCallback(
    ({
      title,
      content,
      onClick,
      onClose
    }: {
      title: string;
      content?: any;
      onClick?: () => void;
      onClose?: () => void;
    }) => {
      setConfirmState({
        ...confirmState,
        open: true,
        title,
        content,
        onClick: onClick || confirmState.onClick,
        onClose: onClose || confirmState.onClose
      });
    },
    [confirmState]
  );

  return { openModal, openAlert, openConfirm };
};
