import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { CodeService } from 'src/service';
import Store from 'src/store';

export default function useCode() {
  const [code, setCode] = useRecoilState(Store.Code.codeState);

  console.log(code);

  useEffect(() => {
    if (code) return;

    loadCode();
  }, []);

  const loadCode = async () => {
    const res = await CodeService.loadCode({});

    setCode(res.data);
  };

  return code;
}
