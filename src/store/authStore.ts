import { localStorageEffect } from "@/utils/localStorage";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

//선택된 지점
export const storeState = atom<{ name: string; id: string } | undefined>({
  key: `storeState`,
  default: undefined,
  effects: [localStorageEffect("storeState")]
});

//로그인한 계정
export const userState = atom<
  { name: string; id: string; isTrainer: boolean } | undefined
>({
  key: `userState`,
  default: undefined,
  effects: [localStorageEffect("userState")]
});
