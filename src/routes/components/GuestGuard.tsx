import { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

// ==============================|| GUEST GUARD ||============================== //

export default function GuestGuard({ children }: PropsWithChildren) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth?.isLoggedIn) {
      navigate(location?.state?.from ? location?.state?.from : 'dashboard', {
        state: {
          from: '',
        },
        replace: true,
      });
    }
  }, [auth, navigate, location]);

  return children;
}
