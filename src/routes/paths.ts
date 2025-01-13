// ----------------------------------------------------------------------

const ROOTS = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOTPASSWORD: '/forgot',

  HOME: '/home',
  SCHEDULE: '/schedule',
  RECORD: '/record',
  MEMEBERSHIP: '/membership',
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
    root: `${ROOTS.SCHEDULE}/list`,
    workout: (id: string) => `${ROOTS.SCHEDULE}/workout/${id}`,
    reservation: (id: string) => `${ROOTS.SCHEDULE}/reservation/${id}`
  },
  membership: {
    root: `${ROOTS.MEMEBERSHIP}`
  },
  record: {
    root: `${ROOTS.RECORD}`,
    new: `${ROOTS.RECORD}/new`
  },
  more: {
    root: `${ROOTS.MORE}`
  },
  myPage: {
    root: `${ROOTS.MYPAGE}`
  },
  reservation: {
    root: `${ROOTS.RESERVATION}`,
    check: `${ROOTS.RESERVATION}/check`
  },
  contract: {
    root: `${ROOTS.CONTRACT}`,
    new: `${ROOTS.CONTRACT}/new`,
    terms: `${ROOTS.CONTRACT}/terms`,
    view: `${ROOTS.CONTRACT}/view`
  }
};
