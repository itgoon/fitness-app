export type Menu = {
  title: string;
  url: string;
};

export const menus: Menu[] = [
  {
    title: '약관 및 규정',
    url: '/contract/terms'
  },
  {
    title: '신규 계약서',
    url: '/contract/new'
  },
  {
    title: '계약서',
    url: '/contract/view'
  },
  {
    title: '기록 등록',
    url: '/record/new'
  },
  {
    title: '',
    url: '/schedule/reservation'
  },
  {
    title: '',
    url: '/schedule/workout'
  },
  {
    title: '예약하기',
    url: '/reservation'
  },
  {
    title: '레슨 예약',
    url: '/reservation/check'
  }
];
