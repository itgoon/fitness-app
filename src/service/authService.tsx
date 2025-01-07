import api from 'src/utils/api';
import { saveTokenToStorage } from 'src/utils/token';

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const result: any = await api.auth.authControllerLogin({
    loginDto: { email, password }
  });

  const { data } = result;

  if (data.result === 'SUCCESS') {
    const {
      data: { accessToken, refreshToken, center, role }
    } = data;

    // 추후 리팩토링
    saveTokenToStorage('serviceToken1', accessToken);
    saveTokenToStorage('refreshToken1', refreshToken);
    saveTokenToStorage('centerToken', center);
    saveTokenToStorage('roleToken', role);

    return data;
  }
};
