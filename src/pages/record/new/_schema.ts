import * as Yup from 'yup';

export const recordSchema = Yup.object().shape({
  rctDate: Yup.string(),
  content: Yup.string(),
  type: Yup.string(),
  images: Yup.array().of(
    Yup.object({
      file: Yup.mixed().test(
        'is-file',
        '파일이어야 합니다',
        (value) => value instanceof File
      ),
      preview: Yup.string().url('유효한 URL이어야 합니다')
    })
  )
});
