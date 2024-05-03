import CustomLayout from "@/components/layout/CustomLayout";
import * as Pg from "@/pages";
import { SidebarIcon } from "@/utils/constants/enums";

export interface RouteProps {
  title?: string;
  name: string;
  path: string;
  element?: any;
  menu?: boolean;
  children?: RouteProps[];
  header?: boolean;
  bottom?: boolean;
  icon?: SidebarIcon;
}

const routes: RouteProps[] = [
  {
    //트레이너
    name: "trainer",
    path: "/trainer",
    element: CustomLayout,
    children: [
      {
        name: "trainer", //
        path: "/trainer/main",
        element: Pg.Trainer.MainPage,
        bottom: false
      }
    ]
  },

  //회원
  {
    name: "member",
    path: "/member",
    element: CustomLayout,
    children: [
      {
        name: "member", //캠퍼스명
        path: "/member/main",
        element: Pg.Member.MainPage,
        bottom: false
      }
    ]
  }
];

export default routes;
