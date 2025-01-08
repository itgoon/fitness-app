import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { localStorageEffect } from 'src/utils/localStorage';

import { ResAuthInfo } from 'src/types/auth';

const { persistAtom } = recoilPersist();

export const initialAuthState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

/**
 * 인증 정보 저장소
 */
export const authState = atom<typeof initialAuthState>({
  key: `auth`,
  default: undefined,
  effects_UNSTABLE: [persistAtom]
});

/**
 * 계정 정보 저장소
 */
export const authInfoState = atom<ResAuthInfo | undefined>({
  key: `authInfo`,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect('authInfo')]
});

export const authBrandState = atom<any>({
  key: `brand`,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect('brand')]
});
