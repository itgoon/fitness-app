import { atom } from 'recoil';
import { MemberDto } from 'src/api';

/**
 * 계정 정보 저장소
 */
export const authInfoState = atom<MemberDto | null>({
  key: `me`,
  default: null
});
