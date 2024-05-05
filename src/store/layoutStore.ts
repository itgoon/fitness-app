import { ModalProps } from "@/components/modal/Modal";
import { RouteProps } from "@/route/routes";
import { atom } from "recoil";
import { localStorageEffect } from "@/utils/localStorage";

export type CustomRouteProps = Omit<RouteProps, "element" | "children">;

//모달(alert)
export const windowState = atom<ModalProps>({
  key: `modal_${new Date().getTime()}`,
  default: {
    open: false,
    onClose: () => {},
    children: ""
  },
  effects: [localStorageEffect("modalState")]
});
//로딩
export const loadingState = atom<boolean>({
  key: `loading_${new Date().getTime()}`,
  default: false,
  effects: [localStorageEffect("loadingState")]
});


//레이아웃 State
export const layoutState = atom<{ header: boolean; bottom: boolean}>({
  key: `layoutState`,
  default: {
    header: false,
    bottom: false, 
  },
  effects: [localStorageEffect("layoutState")]
});



//route
export const routeState = atom<CustomRouteProps[]>({
  key: `routeState`,
  default: [],
  effects: [localStorageEffect("routeState")]
});
