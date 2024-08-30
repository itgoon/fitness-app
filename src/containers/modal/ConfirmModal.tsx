import { useRecoilState } from 'recoil';

import Store from 'src/store';

import { ConfirmDialog } from 'src/components/customDialog';

/**
 * ******************************************************
 * Confirm Modal
 * ******************************************************
 */

const ConfirmModal = () => {
  const [confirmState, setConfirmState] = useRecoilState(Store.Layout.confirmState);

  return (
    <ConfirmDialog
      open={confirmState.open}
      onClose={() => {
        confirmState.onClose();
        setConfirmState({ ...confirmState, open: false });
      }}
      title={confirmState.title}
      content={confirmState.content}
      onClick={() => {
        confirmState.onClick();
        setConfirmState({ ...confirmState, open: false });
      }}
    />
  );
};

export default ConfirmModal;
