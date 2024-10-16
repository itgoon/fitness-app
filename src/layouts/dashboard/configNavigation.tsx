import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import SvgColor from 'src/components/svgColor';

import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  dashboard: <Iconify icon="mage:dashboard" />,
  user: <Iconify icon="mdi:user-outline" />,
  contract: <Iconify icon="clarity:contract-line" />,
  visitor_record: <Iconify icon="clarity:sign-in-line" />,
  schedule: <Iconify icon="ph:calendar-blank-bold" />,
  product: <Iconify icon="carbon:product" />,
  store: <Iconify icon="iconamoon:store-thin" />,
  instructor: <Iconify icon="mdi:teacher" />,
  statistics: <Iconify icon="akar-icons:statistic-up" />,
  list: <Iconify icon="ic:baseline-list" />,
  new: <Iconify icon="mdi:add-circle" />,
  naver: <Iconify icon="simple-icons:naver" />
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      {
        subheader: t('오비서'),
        items: [
          {
            title: t('대시보드'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard
          },
          {
            title: '예약하기',
            path: paths.reservation.root,
            icon: ICONS.user
          },
          {
            title: '마이페이지',
            path: paths.myPage.root,
            icon: ICONS.user
          }
        ]
      }
    ],
    [t]
  );

  return data;
}
