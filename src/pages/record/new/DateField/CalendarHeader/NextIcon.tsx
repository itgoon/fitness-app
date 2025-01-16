import Icon from 'src/components/Icon';

interface NextIconProps {
  onClick: any;
}

export default function NextIcon({ onClick }: NextIconProps) {
  return <Icon name="NextSvg" size={20} onClick={onClick} />;
}
