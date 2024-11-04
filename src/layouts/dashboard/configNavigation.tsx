import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import SvgColor from 'src/components/svgColor';

import Iconify from '../../components/iconify';
import Icon from '../../components/Icon';
import { useLocation } from 'react-router';

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
  home: <Icon name="HomeSvg" size={32} />,
  calendar: <Icon name="Calendar" size={32} />,
  memberShip: <Icon name="Membership" size={32} />,
  feed: <Icon name="FeedSvg" size={32} />,
  more: <Icon name="MoreSvg" size={32} />,
  homeColor: <Icon name="HomeColorSvg" size={32} />,
  calendarColor: <Icon name="CalendarColorSvg" size={32} />,
  memberShipColor: <Icon name="MembershipColorSvg" size={32} />,
  moreColor: <Icon name="MoreColorSvg" size={32} />
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();
  const pathname = useLocation().pathname;
  const data = useMemo(
    () => [
      {
        subheader: t('오비서'),
        items: [
          {
            title: t('홈'),
            path: paths.dashboard.root,
            icon:
              pathname === paths.dashboard.root ? ICONS.homeColor : ICONS.home
          },
          {
            title: '일정',
            path: paths.schedule.root,
            icon:
              pathname === paths.schedule.root
                ? ICONS.calendarColor
                : ICONS.calendar
          },
          {
            title: '회원권',
            path: paths.member.root,
            icon:
              pathname === paths.member.root
                ? ICONS.memberShipColor
                : ICONS.memberShip
          },
          {
            title: '기록',
            path: paths.record.root,
            icon: ICONS.feed
          },
          {
            //TODO: title 만 검정색인거 해결하기
            title: '더보기',
            path: paths.more.root,
            icon: pathname === paths.myPage.root ? ICONS.moreColor : ICONS.more
          }
        ]
      }
    ],
    [t, pathname]
  );

  return data;
}
