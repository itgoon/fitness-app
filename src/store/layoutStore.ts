import { ModalProps } from "@/components/modal/Modal";
import { RouteProps } from "@/route/routes";
import { atom } from "recoil";

export type CustomRouteProps = Omit<RouteProps, "element" | "children">;

export interface HeaderProps {
  title?: string;
  prefix?: "back" | "sidebar" | "close";
  preOnClick?: () => void;
  suffix?: "download";
  sufOnClick?: () => void;
}
//모달(alert)
export const windowState = atom<ModalProps>({
  key: `modal_${new Date().getTime()}`,
  default: {
    open: false,
    onClose: () => {},
    children: ""
  }
});
//로딩
export const loadingState = atom<boolean>({
  key: `loading_${new Date().getTime()}`,
  default: false
});

//사이드바
export const sidebarState = atom<boolean>({
  key: `sidebarState`,
  default: false
});

//레이아웃 State
export const layoutState = atom<{ header: boolean; bottom: boolean }>({
  key: `layoutState`,
  default: {
    header: false,
    bottom: false
  }
});

//헤더
export const headerState = atom<HeaderProps>({
  key: `headerState`,
  default: {
    title: "",
    prefix: "sidebar",
    preOnClick: undefined,
    suffix: undefined
  }
});

//route
export const routeState = atom<CustomRouteProps[]>({
  key: `routeState`,
  default: []
});
