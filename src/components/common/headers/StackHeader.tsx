import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import Icon from 'src/components/Icon';
import Header from './Header';

interface HeaderProps {
  title: ReactNode;
}

export default function StackHeader({ title }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Header
      left={<Icon name="PrevSvg" size={20} onClick={() => navigate(-1)} />}
      title={title}
    />
  );
}
