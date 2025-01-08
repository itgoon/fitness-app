import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState
} from 'react';
import { default as ReactSignatureCanvas } from 'react-signature-canvas';

type SignType = {
  data: string;
  original: string;
};
interface SignContextType {
  sign: SignType | null;
  setSign: Dispatch<SetStateAction<SignType | null>>;
}

const SignContext = createContext<SignContextType | undefined>(undefined);

export const SignProvider = ({ children }: { children: ReactNode }) => {
  const [sign, setSign] = useState<SignType | null>({ data: '', original: '' });

  return (
    <SignContext.Provider value={{ sign, setSign }}>
      {children}
    </SignContext.Provider>
  );
};

export const useSignContext = () => {
  const context = useContext(SignContext);
  if (!context) {
    throw new Error('useSignContext must be used within a SignProvider');
  }
  return context;
};

export const useSign = () => {
  const signRef = useRef<ReactSignatureCanvas>(null);
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const { sign, setSign } = useSignContext();
  // const [sign, setSign] = useState({ data: '', original: '' });

  const clear = () => {
    signRef.current?.clear();
    setIsSigned(false);
  };

  const getFile = (): string => {
    const data = signRef.current!.toDataURL('image/png');
    return String(data);
  };

  const getOriginalFile = (): any => {
    const data = signRef.current!.toDataURL();
    const binaryData = atob(data.split(',')[1]);
    const array: number[] = [];

    for (let i = 0; i < binaryData.length; i++) {
      array.push(binaryData.charCodeAt(i));
    }

    const file = new File([new Uint8Array(array)], 'fileName', {
      type: 'image/png'
    });

    return file;
  };

  const saveSign = () => {
    if (signRef.current && signRef.current.isEmpty()) {
      //
    } else {
      setSign({ data: getFile(), original: getOriginalFile() });
      console.log('sign: useSign ', sign);
      console.log('sign ok ', sign);
    }
    // console.log('sign ok ', sign);
  };
  return {
    signRef,
    sign,
    isSigned,
    setSign,
    clear,
    getFile,
    getOriginalFile,
    setIsSigned,
    saveSign
  };
};
