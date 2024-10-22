import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import SvgColor from 'src/components/svgColor';

import Iconify from '../../components/iconify';
import Icon from '../../components/Icon';

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
  naver: <Iconify icon="simple-icons:naver" />,
  more: <Icon name="MoreSvg" />,
  calendar: <Icon name="Calendar" size={32} />,
  home: <Icon name="HomeSvg" />,
  feed: <Icon name="FeedSvg" />,
  memberShip: <Icon name="Membership" size={32} />
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
            title: t('홈'),
            path: paths.dashboard.root,
            icon: ICONS.home
          },
          {
            title: '일정',
            path: paths.reservation.root,
            icon: ICONS.calendar
          },
          {
            title: '회원권',
            path: paths.myPage.root,
            icon: ICONS.memberShip
          },
          {
            title: '기록',
            path: paths.myPage.root,
            icon: ICONS.feed
          },
          {
            title: '더보기',
            path: paths.myPage.root,
            icon: ICONS.more
          }
        ]
      }
    ],
    [t]
  );

  return data;
}
