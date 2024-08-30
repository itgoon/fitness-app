import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { localStorageEffect } from 'src/utils/localStorage';

import { ResTranslate } from 'src/types/translate';
import { ResAuthInfo, ResAuthenticate } from 'src/types/auth';

const { persistAtom } = recoilPersist();

/**
 * translate
 */
export const translateState = atom<ResTranslate | undefined>({
  key: `translate`,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect('translate')],
});
