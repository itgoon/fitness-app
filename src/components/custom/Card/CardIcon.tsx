import Icon from 'src/components/Icon';
import { IconsType } from 'src/components/Icon/types';

interface CardIconProps {
  iconName: IconsType;
}

export default function CardIcon({ iconName }: CardIconProps) {
  return <Icon name={iconName} size={60} />;
}
