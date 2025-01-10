import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AuthService } from 'src/service';
import Store from 'src/store';

export const useMe = () => {
  const [me, setMe] = useRecoilState(Store.Me.authInfoState);

  useEffect(() => {
    if (me) return;

    loadMe();
  }, []);

  const loadMe = async () => {
    const res = await AuthService.me();

    setMe(res);
  };

  return me || null;
};
