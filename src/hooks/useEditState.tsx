import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState
} from 'react';

type edit = boolean;
interface IEditState {
  isEdit: edit;
  toggleEdit: () => void;
}
const EditContext = createContext<IEditState | undefined>(undefined);
export const EditProvider = ({ children }: PropsWithChildren) => {
  const [isEdit, setIsEdit] = useState<edit>(false);
  const toggleEdit = () => setIsEdit((prev) => !prev);
  const value = useMemo(() => ({ isEdit, toggleEdit }), [isEdit]);
  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

export const useEditContext = () => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
