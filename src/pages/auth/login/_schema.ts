import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('이메일을 입력해주새요.'),
  password: Yup.string().required('비밀번호를 입력해주세요.')
});
