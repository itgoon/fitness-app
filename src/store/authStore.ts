import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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
