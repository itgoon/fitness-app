import { MemberDto } from 'src/api';
import api from 'src/utils/api';
import { saveTokenToStorage } from 'src/utils/token';

// 로그인
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
    saveTokenToStorage('serviceToken-app', accessToken);
    saveTokenToStorage('refreshToken-app', refreshToken);
    saveTokenToStorage('centerToken-app', center);
    saveTokenToStorage('roleToken-app', role);

    return data;
  }
};

// 사용자 정보 조회
export const me = async () => {
  const res = await api.auth.authControllerGetLoginInfo();

  const {
    data: { data }
  } = res;

  return data as MemberDto;
};
