import { ReactNode } from 'react';

export type NavItemType = {
  isHeader?: boolean;
  isBottom?: boolean;
  children?: NavItemType[];
  id?: string;
  title?: ReactNode | string;
  url: string;
  isStart?: boolean;
  isEnd?: boolean;
  isCard?: boolean;
  cardDate?: boolean;
  cardPlace?: boolean;
};

export const menus: NavItemType[] = [
  {
    id: 'dashboard',
    title: '홈',
    url: '/dashboard',
    isHeader: true,
    isBottom: true,
    isStart: false,
    isEnd: true
  },
  {
    id: 'schedule',
    title: '일정',
    url: '/schedule',
    isHeader: false,
    isStart: false,
    isBottom: true,
    isEnd: true
  },
  {
    id: 'schedule/detail',
    title: '일정',
    url: '/schedule/detail',
    isHeader: false,
    isBottom: false,
    isCard: true,
    cardDate: true
  },
  {
    id: 'contract',
    title: '약관 및 규정',
    url: '/contract',
    isHeader: true,
    isBottom: false
  },
  {
    id: 'viewcontract',
    // title: '센터 네임',
    url: '/viewcontract',
    isHeader: false,
    isBottom: false
  },
  {
    id: 'reservation',
    title: '예약',
    url: '/reservation',
    isHeader: false,
    isBottom: false
  },
  {
    id: 'record',
    title: '기록',
    url: '/record',
    isHeader: false,
    isBottom: true
  },
  {
    id: 'recordPost',
    title: '기록 등록',
    url: '/record/post',
    isHeader: true,
    isBottom: false,
    isStart: true
  },
  {
    id: 'more',
    title: '더보기',
    url: '/more',
    isHeader: false,
    isBottom: true
  }
];
