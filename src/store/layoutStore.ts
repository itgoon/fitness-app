import { ModalProps } from "@/components/modal/Modal";
import { RouteProps } from "@/route/routes";
import { ThemeMode } from "@/utils/constants/enums";
import { localStorageEffect } from "@/utils/localStorage";
import { atom } from "recoil";

export type CustomRouteProps = Omit<RouteProps, "element" | "children">;

//dark / light
export const modeState = atom<ThemeMode>({
  key: `modeState`,
  default: ThemeMode.LIGHT,
  effects: [localStorageEffect("modeState")]
});

//primary color
export const colorState = atom<string>({
  key: `colorState`,
  default: "#f00",
  effects: [localStorageEffect("colorState")]
});

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
export const layoutState = atom<{ header: boolean; bottom: boolean }>({
  key: `layoutState`,
  default: {
    header: false,
    bottom: false
  },
  effects: [localStorageEffect("layoutState")]
});

//route
export const routeState = atom<CustomRouteProps[]>({
  key: `routeState`,
  default: [],
  effects: [localStorageEffect("routeState")]
});
