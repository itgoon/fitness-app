import { IconsType } from '../components/Icon/types';

interface chipResult {
  chipLabel: string;
  iconName: IconsType;
  largeIconName: IconsType;
}
export const chipChange = (chipState: string | undefined): chipResult => {
  const chipLabel =
    chipState === 'warning'
      ? '예약'
      : chipState === 'error'
        ? '예약취소'
        : chipState === 'primary'
          ? '출석'
          : '';

  const iconName =
    chipState === 'warning'
      ? 'Orange'
      : chipState === 'error'
        ? 'Red'
        : chipState === 'primary'
          ? 'Blue'
          : 'DumbelSvg';
  const largeIconName =
    chipState === 'warning'
      ? 'OrangeLargeSvg'
      : chipState === 'error'
        ? 'Red'
        : chipState === 'primary'
          ? 'BlueLargeSvg'
          : 'DumbelLargeSvg';

  return { chipLabel, iconName, largeIconName };
};
