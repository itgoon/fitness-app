import { useTheme } from '@mui/material';
import Icon from '.';

interface IHeaderIcon {
  color?: any;
  size?: number;
  onClick?: () => void;
}
export const Prev = ({ color, size, onClick }: IHeaderIcon) => (
  <Icon
    name="PrevSvg"
    sx={{ marginBottom: 2 }}
    size={size || 22}
    color={color}
    onClick={onClick}
    aria-label="이전"
  />
);
export const Next = ({ color, size, onClick }: IHeaderIcon) => (
  <Icon
    name="NextSvg"
    sx={{ marginBottom: 2 }}
    color={color}
    size={size || 24}
    onClick={onClick}
    aria-label="다음"
  />
);

export const More = ({ color, size, onClick }: IHeaderIcon) => {
  const { palette } = useTheme();
  return (
    <Icon
      size={18}
      sx={{ marginBottom: 2 }}
      name="ExpendMoreSvg"
      onClick={onClick}
      color={palette.grey[600]}
      aria-label="보기 전환"
    />
  );
};
