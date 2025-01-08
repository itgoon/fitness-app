import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { AuthService } from 'src/service';
import Store from 'src/store';

/**
 * 인증 Hooks
 * @returns
 */
export const useAuth = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useRecoilState(Store.Auth.authState);

  // 로그인
  const login = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      const result = await AuthService.login({ email, password });

      if (result) {
        setAuth({
          ...auth,
          isLoggedIn: true,
          isInitialized: true
        });
      }

      return result;
    },
    []
  );

  // 로그아웃
  const logout = async () => {
    // await AuthService.logout();
  };

  return { auth, login, logout };
};
