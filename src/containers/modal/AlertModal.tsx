import { useRecoilState } from "recoil";

import Store from "src/store";

import Alert from "src/components/alert";

/**
 * ******************************************************
 * Alert Modal
 * ******************************************************
 */
const AlertModal = () => {
  const [alertState, setAlertState] = useRecoilState(Store.Layout.alertState);

  return (
    <Alert
      open={alertState.open}
      onClose={() => {
        alertState.onClose();
        setAlertState({ ...alertState, open: false });
      }}
      title={alertState.title}
      subtitle={alertState.subtitle}
    />
  );
};

export default AlertModal;
