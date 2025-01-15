export type Menu = {
  title: string;
  url: string;
  hasHeader: boolean;
  children?: Menu[];
};

export const menus: Menu[] = [
  {
    title: '약관 및 규정',
    url: '/contract/terms',
    hasHeader: true
  },
  {
    title: '신규 계약서',
    url: '/contract/new',
    hasHeader: true
  },
  {
    title: '계약서',
    url: '/contract/view',
    hasHeader: true
  },
  {
    title: '기록 등록',
    url: '/record/new',
    hasHeader: true
  },
  {
    title: '',
    url: '/schedule/reservation',
    hasHeader: false
  },
  {
    title: '',
    url: '/schedule/workout',
    hasHeader: false
  },
  {
    title: '',
    url: '/reservation',
    hasHeader: false,
    children: [
      {
        title: '레슨 예약',
        url: '/reservation/check',
        hasHeader: true
      },
      {
        title: '레슨 예약',
        url: '/reservation/success',
        hasHeader: true
      }
    ]
  }
];
