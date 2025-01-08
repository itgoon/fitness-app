import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

type CardType = any;
interface CardContextType {
  selectedCard: CardType | null;
  setSelectedCard: Dispatch<SetStateAction<CardType | null>>;
}
const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: any) => {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
