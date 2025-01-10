import { atom } from 'recoil';
import { CodeGroupDto } from 'src/api';

export const initialCodeState: CodeGroupDto[] = [];

export const codeState = atom<typeof initialCodeState>({
  key: `code`,
  default: initialCodeState
});
