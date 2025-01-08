import { useSuspenseQuery } from '@tanstack/react-query';
import { AuthService } from 'src/service';

// 쿼리키
export const authKeys = {
  base: ['me'] as const
};

// ----------------------------------------------------------------------

// 내 정보 조회
export const useMeQuery = () =>
  useSuspenseQuery({
    queryKey: authKeys.base,
    queryFn: () => AuthService.me(),
    staleTime: 1000 * 60 * 20,
    gcTime: 1000 * 60 * 15
  });
