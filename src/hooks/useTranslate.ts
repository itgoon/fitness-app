/* eslint-disable prefer-destructuring */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRecoilState } from 'recoil';

import Store from 'src/store';
import { TranslateService } from 'src/service';

interface Props {
  getTranslate: (key: string) => string;
  loadTranslate: () => void;
}
/**
 * 언어 조회
 * @returns
 */
export const useDataTranslate = (): Props => {
  const [translate, setTranslate] = useRecoilState(Store.Translate.translateState);

  const getTranslate = (key: string): string => {
    if (!translate) return key;
    return translate[key] ? String(translate[key]) : key;
  };

  // 언어 데이터 조회
  const loadTranslate = async () => {
    let errMsg: string | undefined;
    if (translate) return;

    try {
      const { meta, data } = await TranslateService.loadTranslate('ko');
      if (meta.errCode !== 0) errMsg = meta.errMsg;
      else setTranslate(data);
    } catch (err) {
      const { meta } = err.response.data;
      if (meta.errCode !== 0) errMsg = meta.errMsg;
    }
    if (errMsg) {
      alert(errMsg || '관리자에게 문의 바랍니다.');
    }
  };

  return { getTranslate, loadTranslate };
};
