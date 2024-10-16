// ----------------------------------------------------------------------

const ROOTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOTPASSWORD: "/forgot",

  DASHBOARD: "/dashboard", // 대시보드
  PARTNER: "/partner",
  STORE: "/partner/store",
  EMPLOYEE: "/employee",
  NAVER: "/naver",
  RESERVATION: "/reservation",
  MYPAGE: "/myPage"
};

// ----------------------------------------------------------------------

export const paths = {
  page403: "/403",
  page404: "/404",
  page500: "/500",
  auth: {
    login: `${ROOTS.LOGIN}`,
    register: `${ROOTS.REGISTER}`,
    forgotPassword: `$${ROOTS.FORGOTPASSWORD}`
  },
  dashboard: {
    root: `${ROOTS.DASHBOARD}`
  },
  myPage: {
    root: `${ROOTS.MYPAGE}`
  },
  reservation: {
    root: `${ROOTS.RESERVATION}`
  }
};
