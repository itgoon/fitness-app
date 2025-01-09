import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from 'src/hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

export default function AuthGuard({ children }: PropsWithChildren) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
}
