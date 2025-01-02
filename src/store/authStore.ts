import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { localStorageEffect } from 'src/utils/localStorage';

import { ResAuthInfo, ResAuthenticate } from 'src/types/auth';

const { persistAtom } = recoilPersist();

/**
 * 인증 정보 저장소
 */
export const authState = atom<ResAuthenticate | undefined>({
  key: `auth`,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect('auth')],
});

/**
 * 계정 정보 저장소
 */
export const authInfoState = atom<ResAuthInfo | undefined>({
  key: `authInfo`,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect('authInfo')],
});

export const authBrandState = atom<any>({
  key: `brand`,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect('brand')],
});
