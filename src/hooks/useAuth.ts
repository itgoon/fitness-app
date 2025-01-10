import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { AuthService } from 'src/service';
import Store from 'src/store';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(Store.Auth.authState);

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

  const logout = useCallback(async () => {}, []);

  return {
    ...auth,
    login,
    logout
  };
};
