import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { AuthService } from "src/service";
import Store from "src/store";

import { ReqLogin } from "src/types/auth";

/**
 * 인증 Hooks
 * @returns
 */
export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useRecoilState(Store.Layout.loadingState);
  const [auth, setAuth] = useRecoilState(Store.Auth.authState);

  // 로그인

  const login = useCallback(async (params: ReqLogin) => {
    const data = await AuthService.login(params);

    // console.log({ serviceToken }, { user });
    // if (!user?.id) return;

    setAuth({
      ...data,
      // user: user,
      token: data.serviceToken,
      isLoggedIn: true,
      isInitialized: true,
      // user,
    });

    navigate("/dashboard");
  }, []);

  // 로그아웃
  const logout = async () => {
    await AuthService.logout();
  };

  return { auth, login, logout };
};
