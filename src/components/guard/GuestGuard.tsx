import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

// ==============================|| GUEST GUARD ||============================== //

export default function GuestGuard({ children }: PropsWithChildren) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/dashboard" /> : children;
}
