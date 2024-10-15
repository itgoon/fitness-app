/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilState } from 'recoil';
/* eslint-disable consistent-return */
import { ReactNode, useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { useBoolean } from 'src/hooks/useBoolean';
import { useResponsive } from 'src/hooks/useResponsive';

import { localStorageGetItem } from 'src/utils/storageAvailable';

import { useTranslate } from 'src/locales';
import Store from 'src/store';

import { LoadingScreen } from 'src/components/loadingScreen';
import { useSettingsContext } from 'src/components/settings';

import Main from './main';
import NavBottom from './navBottom';
import NavHorizontal from './navHorizontal';
import NavMini from './navMini';
import Footer from './footer';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  const nav = useBoolean();
  const [authInfo, setAuthInfo] = useRecoilState(Store.Auth.authInfoState);
  const [authBrandState, setAuthBrandState] = useRecoilState(
    Store.Auth.authBrandState
  );
  const [initialize, setInitialize] = useState<boolean>(false);
  const { onChangeLang } = useTranslate();
  const isHorizontal = settings.themeLayout === 'horizontal';

  const isMini = settings.themeLayout === 'mini';

  const renderNavMini = <NavMini />;

  const renderHorizontal = <NavHorizontal />;

  useEffect(() => {
    if (initialize) return () => {};

    loadAuthInfo();
  }, []);

  const loadAuthInfo = async () => {
    // let errMsg: string | undefined;
    // try {
    //   const { meta, data } = await AuthService.loadAuthInfo();
    //   if (meta.errCode !== 0) errMsg = meta.errMsg;
    //   else setAuthInfo(data);
    // } catch (err) {
    //   const { meta } = err.response.data;
    //   if (meta.errCode !== 0) errMsg = meta.errMsg;
    // }
    // if (errMsg) {
    //   alert(errMsg || '관리자에게 문의 바랍니다.');
    //   logout();
    // }

    // // 브랜드 조회
    // await loadGrand();

    const langStorage = localStorageGetItem('i18nextLng');
    // TODO: Provider로 분리
    await onChangeLang(langStorage);
    setInitialize(true);
  };

  if (!initialize) return <LoadingScreen />;

  return (
    <>
      {/* <Header onOpenNav={nav.onTrue} /> */}

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          flexDirection: { xs: 'column', lg: 'row' }
        }}
      >
        <Main>
          {children}
          <Footer />
          <NavBottom />
        </Main>
      </Box>
    </>
  );
}
