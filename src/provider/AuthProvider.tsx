import { useRecoilState } from 'recoil';

import Store from 'src/store';

/**
 * 인증 여부 체크
 * @returns
 */

const AuthProvider = ({ children }: { children: any }) => {
  const [auth, setAuth] = useRecoilState(Store.Auth.authState);

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const serviceToken = window.localStorage.getItem('serviceToken');

  //       if (serviceToken && AuthService.verifyToken(serviceToken)) {
  //         AuthService.setSession(serviceToken);

  //         // 내 정보 조회 API 호출 및 Login 처리
  //         const user = await AuthService.me();
  //         setAuth({
  //           ...auth,
  //           isLoggedIn: true,
  //           isInitialized: true,
  //           user,
  //         });
  //       } else {
  //         console.log('로그아웃처리?');
  //         // logout 처리
  //         setAuth({
  //           ...initialAuthState,
  //           isInitialized: true,
  //         });
  //         AuthService.logout();
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       setAuth({
  //         ...initialAuthState,
  //         isInitialized: true,
  //       });
  //     }
  //   };

  //   init();
  // }, []);

  return children;
};

export default AuthProvider;
