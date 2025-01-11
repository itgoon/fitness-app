import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Prev } from 'src/components/Icon/HeaderIcon';
import Header from './Header';

interface HeaderProps {
  title: ReactNode;
}

export default function StackHeader({ title }: HeaderProps) {
  const navigate = useNavigate();

  return <Header left={<Prev onClick={() => navigate(-1)} />} title={title} />;
}
