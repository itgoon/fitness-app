import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AuthService } from 'src/service';

// 로그인
export const useLoginMutation = () =>
  useMutation<any, AxiosError, { email: string; password: string }>({
    mutationFn: (data) => AuthService.login(data)
  });
