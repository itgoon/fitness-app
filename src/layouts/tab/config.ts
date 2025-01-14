export type Menu = {
  title: string;
  url: string;
  hasHeader: boolean;
  hasBottom: boolean;
  hasFooter: boolean;
  hasSpacing: boolean;
};

export const menus: Menu[] = [
  {
    title: '홈',
    url: '/home',
    hasHeader: true,
    hasBottom: true,
    hasFooter: true,
    hasSpacing: true
  },
  {
    title: '일정',
    url: '/schedule',
    hasHeader: false,
    hasBottom: true,
    hasFooter: false,
    hasSpacing: false
  },
  {
    title: '기록',
    url: '/record',
    hasHeader: false,
    hasBottom: true,
    hasFooter: false,
    hasSpacing: true
  },
  {
    title: '더보기',
    url: '/more',
    hasHeader: true,
    hasBottom: true,
    hasFooter: false,
    hasSpacing: true
  }
];
