export type Menu = {
  title: string;
  url: string;
  isHeader: boolean;
};

export const menus: Menu[] = [
  {
    title: '약관 및 규정',
    url: '/contract/terms',
    isHeader: true
  },
  {
    title: '신규 계약서',
    url: '/contract/new',
    isHeader: true
  },
  {
    title: '계약서',
    url: '/contract/view',
    isHeader: false
  },
  {
    title: '기록 등록',
    url: '/record/new',
    isHeader: true
  }
];
