import { ReactNode } from 'react';

export type NavItemType = {
  title: ReactNode | string;
  url: string;
  isHeader: boolean;
  isBottom: boolean;
  isFooter: boolean;
  children?: NavItemType[];
};

export const menus: NavItemType[] = [
  {
    title: '홈',
    url: '/dashboard',
    isHeader: true,
    isBottom: true,
    isFooter: true
  },
  {
    title: '일정',
    url: '/schedule',
    isHeader: false,
    isBottom: true,
    isFooter: false
  },
  {
    title: '일정',
    url: '/schedule/detail',
    isHeader: true,
    isBottom: false,
    isFooter: false
  },
  {
    title: '약관 및 규정',
    url: '/contract',
    isHeader: true,
    isBottom: false,
    isFooter: false
  },
  {
    title: '센터 네임',
    url: '/viewcontract',
    isHeader: false,
    isBottom: false,
    isFooter: false
  },
  {
    title: '예약',
    url: '/reservation',
    isHeader: false,
    isBottom: false,
    isFooter: false
  },
  {
    title: '기록',
    url: '/record',
    isHeader: false,
    isBottom: true,
    isFooter: false
  },
  {
    title: '기록 등록',
    url: '/record/post',
    isHeader: true,
    isBottom: false,
    isFooter: false
  },
  {
    title: '더보기',
    url: '/more',
    isHeader: false,
    isBottom: true,
    isFooter: false
  }
];
