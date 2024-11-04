import { ReactNode } from 'react';

export type NavItemType = {
  isHeader?: boolean;
  children?: NavItemType[];
  id?: string;
  title?: ReactNode | string;
  url?: string | undefined;
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
    isEnd: true
  },
  {
    id: 'schedule',
    title: '일정',
    url: '/schedule',
    isHeader: false
  },
  {
    id: 'schedule/detail',
    title: '일정',
    url: '/schedule/detail',
    isHeader: false,
    isCard: true,
    cardDate: true
  },
  {
    id: 'contract',
    title: '약관 및 규정',
    url: '/contract',
    isHeader: false
  },
  {
    id: 'record',
    title: '기록',
    url: '/record',
    isHeader: false
  },
  {
    id: 'more',
    title: '더보기',
    url: '/more',
    isHeader: false
  }
];

// 1. end, start 로 아이콘 분기 처리
// url이 없이 step을 통한 url 변경없는 페이지가 대부분임 이런 경우에 처리법
//
//
