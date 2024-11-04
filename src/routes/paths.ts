// ----------------------------------------------------------------------

const ROOTS = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOTPASSWORD: '/forgot',

  DASHBOARD: '/dashboard', // 대시보드
  SCHEDULE: '/schedule', // 대시보드
  RECORD: '/record', // 대시보드
  MEMEBER: '/member', // 대시보드
  MORE: '/more', // 대시보드

  PARTNER: '/partner',
  STORE: '/partner/store',
  EMPLOYEE: '/employee',
  NAVER: '/naver',
  RESERVATION: '/reservation',
  MYPAGE: '/myPage'
};

// ----------------------------------------------------------------------

export const paths = {
  page403: '/403',
  page404: '/404',
  page500: '/500',
  auth: {
    login: `${ROOTS.LOGIN}`,
    register: `${ROOTS.REGISTER}`,
    forgotPassword: `$${ROOTS.FORGOTPASSWORD}`
  },
  dashboard: {
    root: `${ROOTS.DASHBOARD}`
  },
  schedule: {
    root: `${ROOTS.SCHEDULE}`
  },
  member: {
    root: `${ROOTS.MEMEBER}`
  },
  record: {
    root: `${ROOTS.RECORD}`
  },
  more: {
    root: `${ROOTS.MORE}`
  },
  myPage: {
    root: `${ROOTS.MYPAGE}`
  },
  reservation: {
    root: `${ROOTS.RESERVATION}`
  }
};
