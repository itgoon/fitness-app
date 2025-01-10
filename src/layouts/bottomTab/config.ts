export type Menu = {
  title: string;
  url: string;
  isHeader: boolean;
  isBottom: boolean;
  isFooter: boolean;
};

export const menus: Menu[] = [
  {
    title: '홈',
    url: '/home',
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
    title: '기록',
    url: '/record',
    isHeader: true,
    isBottom: true,
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
