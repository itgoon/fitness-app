import { useMemo } from 'react';
import { paths } from 'src/routes/paths';
import { useLocation } from 'react-router';
import { useTheme } from '@mui/material';
import Iconify from '../components/iconify';
import Icon from '../components/Icon';

// ----------------------------------------------------------------------

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
  home: 'HomeSvg',
  calendar: 'Calendar',
  membership: 'Membership',
  feed: 'FeedSvg',
  more: 'MoreHorizRounded',
  homeColor: 'HomeColorSvg',
  calendarColor: 'CalendarColorSvg',
  membershipColor: 'MembershipColorSvg'
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { pathname } = useLocation();
  const { palette } = useTheme();

  const renderIcon = (iconName: any) => {
    const color =
      iconName.includes('Color') ||
      iconName === 'FeedSvg' ||
      iconName === 'MoreHorizRounded'
        ? 'inherit'
        : palette.grey[500];
    return <Icon name={iconName} size={32} color={color} />;
  };

  const data = useMemo(
    () => [
      {
        subheader: '오비서',
        items: [
          {
            title: '홈',
            path: paths.home.root,
            icon: renderIcon(
              pathname.startsWith(paths.home.root)
                ? ICONS.homeColor
                : ICONS.home
            )
          },
          {
            title: '일정',
            path: paths.schedule.root,
            icon: renderIcon(
              pathname.startsWith(paths.schedule.root)
                ? ICONS.calendarColor
                : ICONS.calendar
            )
          },
          {
            title: '회원권',
            path: paths.member.root,
            icon: renderIcon(
              pathname.startsWith(paths.member.root)
                ? ICONS.membershipColor
                : ICONS.membership
            )
          },
          {
            title: '기록',
            path: paths.record.root,
            icon: renderIcon(ICONS.feed)
          },
          {
            title: '더보기',
            path: paths.more.root,
            icon: renderIcon(ICONS.more)
          }
        ]
      }
    ],
    [pathname]
  );

  return data;
}
