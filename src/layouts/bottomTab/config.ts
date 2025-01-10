export type Menu = {
  title: string;
  url: string;
  isHeader: boolean;
  isBottom: boolean;
  isFooter: boolean;
  isSpacing: boolean;
};

export const menus: Menu[] = [
  {
    title: '홈',
    url: '/home',
    isHeader: true,
    isBottom: true,
    isFooter: true,
    isSpacing: true
  },
  {
    title: '일정',
    url: '/schedule',
    isHeader: false,
    isBottom: true,
    isFooter: false,
    isSpacing: false
  },
  {
    title: '기록',
    url: '/record',
    isHeader: false,
    isBottom: true,
    isFooter: false,
    isSpacing: true
  },
  {
    title: '더보기',
    url: '/more',
    isHeader: true,
    isBottom: true,
    isFooter: false,
    isSpacing: true
  }
];
