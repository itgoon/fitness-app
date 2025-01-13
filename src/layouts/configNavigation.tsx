import { useMemo } from 'react';
import { paths } from 'src/routes/paths';
import { useLocation } from 'react-router';
import { useTheme } from '@mui/material';
import Icon from '../components/Icon';

// ----------------------------------------------------------------------

const ICONS = {
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
        title: '홈',
        path: paths.home.root,
        icon: renderIcon(
          pathname.startsWith(paths.home.root) ? ICONS.homeColor : ICONS.home
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
        path: paths.membership.root,
        icon: renderIcon(
          pathname.startsWith(paths.membership.root)
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
    ],
    [pathname]
  );

  return data;
}
