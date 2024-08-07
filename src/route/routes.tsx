import CustomLayout from "@/components/layout/CustomLayout";
import * as Pg from "@/pages";

export interface RouteProps {
  title?: string;
  name: string;
  path: string;
  element?: any;
  menu?: boolean;
  children?: RouteProps[];
  isHeader?: boolean;
  isBottom?: boolean;
}

const routes: RouteProps[] = [
  {
    //트레이너
    name: "",
    path: "/trainer",
    element: CustomLayout,
    children: [
      {
        name: "trainer", //
        path: "/trainer/main",
        element: Pg.Trainer.MainPage
      },
      // {
      //   name: "trainer", //
      //   path: "/trainer/alarm",
      //   element: Pg.Trainer.AlarmPage
      // },
      // {
      //   name: "trainer", //
      //   path: "/trainer/member",
      //   element: Pg.Trainer.MemberPage
      // },
      // {
      //   name: "trainer", //
      //   path: "/trainer/member/detail",
      //   element: Pg.Trainer.MemberDetailPage
      // },
      // {
      //   name: "trainer", //
      //   path: "/trainer/schedule",
      //   element: Pg.Trainer.SchedulePage
      // },
      // {
      //   name: "trainer", //
      //   path: "/trainer/contract/detail",
      //   element: Pg.Trainer.ContractDetailPage
      // },

      // {
      //   name: "trainer", //
      //   path: "/trainer/contract",
      //   element: Pg.Trainer.ContractPage
      // },
      {
        name: "trainer", //
        path: "/trainer/setting",
        element: Pg.Trainer.SettingPage
      }
    ]
  },

  //회원
  {
    name: "",
    path: "/member",
    element: CustomLayout,
    children: [
      {
        name: "member", //캠퍼스명
        path: "/member/main",
        element: Pg.Member.MainPage
      }
      // {
      //   name: "member", //
      //   path: "/member/alarm",
      //   element: Pg.Trainer.AlarmPage
      // },
      // {
      //   name: "member", //
      //   path: "/member/schedule",
      //   element: Pg.Member.SchedulePage
      // },
      // {
      //   name: "member", //
      //   path: "/member/contract",
      //   element: Pg.Member.ContractPage
      // },
      // {
      //   name: "member", //
      //   path: "/member/contract/detail",
      //   element: Pg.Member.ContractDetailPage
      // }
    ]
  }
];

export default routes;
