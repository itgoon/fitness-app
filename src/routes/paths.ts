// ----------------------------------------------------------------------

const ROOTS = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOTPASSWORD: '/forgot',

  HOME: '/home',
  SCHEDULE: '/schedule',
  RECORD: '/record',
  MEMEBER: '/member',
  MORE: '/more',
  RESERVATION: '/reservation',
  CONTRACT: '/contract',
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
  home: {
    root: `${ROOTS.HOME}`
  },
  schedule: {
    root: `${ROOTS.SCHEDULE}`,
    workout: (id: string) => `${ROOTS.SCHEDULE}/workout/${id}`,
    reservation: (id: string) => `${ROOTS.SCHEDULE}/reservation/${id}`
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
  },
  contract: {
    root: `${ROOTS.CONTRACT}`,
    new: `${ROOTS.CONTRACT}/new`,
    terms: `${ROOTS.CONTRACT}/terms`,
    view: `${ROOTS.CONTRACT}/view`
  }
};
