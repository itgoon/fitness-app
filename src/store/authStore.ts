import { localStorageEffect } from "@/utils/localStorage";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
