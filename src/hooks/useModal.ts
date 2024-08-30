/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useRecoilState } from "recoil";

import Store from "src/store";
import { ModalType } from "src/store/layoutStore";

interface Props {
  openModal: ({
    type,
    data,
    onClose,
  }: {
    type: ModalType;
    data: any;
    onClose?: VoidFunction;
  }) => void;
  openAlert: ({
    title,
    subtitle,
    onClose,
  }: {
    title: string;
    subtitle?: string;
    onClose?: VoidFunction;
  }) => void;
  openConfirm: ({
    title,
    content,
    onClick,
    onClose,
  }: {
    title: string;
    content?: any;
    onClick?: VoidFunction;
    onClose?: VoidFunction;
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
      onClose,
    }: {
      type: ModalType;
      data: any;
      onClose?: VoidFunction;
    }) => {
      setModalState({
        ...modalState,
        open: true,
        type,
        data,
        onClose: onClose || modalState.onClose,
      });
    },
    [modalState]
  );

  const openAlert = useCallback(
    ({
      title,
      subtitle,
      onClose,
    }: {
      title: string;
      subtitle?: string;
      onClose?: VoidFunction;
    }) => {
      setAlertState({
        ...alertState,
        open: true,
        title,
        subtitle,
        onClose: onClose || alertState.onClose,
      });
    },
    [alertState]
  );

  const openConfirm = useCallback(
    ({
      title,
      content,
      onClick,
      onClose,
    }: {
      title: string;
      content?: any;
      onClick?: VoidFunction;
      onClose?: VoidFunction;
    }) => {
      setConfirmState({
        ...confirmState,
        open: true,
        title,
        content,
        onClick: onClick || confirmState.onClick,
        onClose: onClose || confirmState.onClose,
      });
    },
    [confirmState]
  );

  return { openModal, openAlert, openConfirm };
};
