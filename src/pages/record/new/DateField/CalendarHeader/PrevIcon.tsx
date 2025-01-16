import Icon from 'src/components/Icon';

interface PrevIconProps {
  onClick: any;
}

export default function PrevIcon({ onClick }: PrevIconProps) {
  return (
    <Icon name="PrevSvg" sx={{ marginBottom: 2 }} size={20} onClick={onClick} />
  );
}
