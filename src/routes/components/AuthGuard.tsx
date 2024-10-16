import { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from 'src/hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

export default function AuthGuard({ children }: PropsWithChildren) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log({ location });
    // TODO: 로그인 기능 구현 후 주석해제
    // if (!auth?.isLoggedIn) {
    //   navigate("login", {
    //     state: {
    //       from: location.pathname,
    //     },
    //     replace: true,
    //   });
    // }

    if (location?.pathname === '/') return navigate('/dashboard');
  }, [auth, navigate, location]);

  return children;
}
