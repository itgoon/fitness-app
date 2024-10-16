/* eslint-disable consistent-return */
import { useRecoilState } from 'recoil';

import AlertModal from 'src/containers/modal/AlertModal';
import ConfirmModal from 'src/containers/modal/ConfirmModal';
import Store from 'src/store';

/**
 * Modal Provider
 * @returns
 */
const ModalProvider = ({ children }: { children: any }) => {
  const [modalState, setModalState] = useRecoilState(Store.Layout.modalState);

  console.log({ modalState });
  const s = () => {
    if (modalState.onClose) modalState.onClose();
    setModalState({
      ...modalState,
      open: false,
      data: undefined,
      type: undefined
    });
  };
  const render = () => {
    // if (!modalState.open) return;
    // if (!modalState.type) return;
  };

  return (
    <>
      {children}
      {render()}
      <ConfirmModal />
      <AlertModal />
    </>
  );
};

export default ModalProvider;
