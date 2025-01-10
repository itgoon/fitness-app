import Icon from 'src/components/Icon';
import { IconsType } from 'src/components/Icon/types';

interface DetailCardIconProps {
  iconName: IconsType;
}

export default function DetailCardIcon({ iconName }: DetailCardIconProps) {
  return <Icon name={iconName} size={60} />;
}
