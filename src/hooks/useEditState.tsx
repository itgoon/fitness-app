import { createContext, PropsWithChildren, useContext, useState } from 'react';

type edit = boolean;
interface IEditState {
  isEdit: edit;
  toggleEdit: () => void;
}
const EditContext = createContext<IEditState | undefined>(undefined);
export const EditProvider = ({ children }: PropsWithChildren) => {
  const [isEdit, setIsEdit] = useState<edit>(false);
  const toggleEdit = () => setIsEdit((prev) => !prev);

  return (
    <EditContext.Provider value={{ isEdit, toggleEdit }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEditContext = () => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
