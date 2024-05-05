import { localStorageEffect } from "@/utils/localStorage";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();


//선택된 지점
export const storeState = atom<{name : string , id:string}|undefined>({
    key: `storeState`,
    default: undefined,
    effects: [localStorageEffect("storeState")]
  });

  