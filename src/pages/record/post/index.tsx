import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack } from '@mui/material';
import { DateReqFormat } from '../../../utils/formatTime';
import dayjs from 'dayjs';
import { useModal } from '../../../hooks/useModal';
import Button from '../../../components/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { recordSchema } from './_schema';
import FormProvider from 'src/components/hookForm';
import CategoryField from './CategoryField';
import ImageUploader from './ImageUploader';
import DateField from './DateField';

/**
 * ******************************************************
 * 기록 등록 화면
 * ******************************************************
 */
export default function Post() {
  const navigate = useNavigate();

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(recordSchema),
    defaultValues: {
      type: '',
      images: [],
      rctDate: dayjs().format(DateReqFormat),
      content: ''
    }
  });
  const { handleSubmit } = methods;

  const { openConfirm } = useModal();

  const handleConformModal = handleSubmit(async (data) => {
    const type = data.type === 'workout' ? '운동 기록을 ' : '식단 기록을 ';

    openConfirm({
      title: '',
      content: `${type}등록하시겠습니까?`,
      onClick: () => navigate('/record'),
      onClose: () => console.log('on Close data 저장', data),
      clickMsg: '네',
      closeMsg: '아니요'
    });
  });

  return (
    <Stack height={'100%'} justifyContent={'space-between'}>
      <FormProvider methods={methods}>
        <ImageUploader />

        <Stack px={2.5} gap={4}>
          <CategoryField />
          <DateField />
        </Stack>
      </FormProvider>

      <Box px={2.5}>
        <Button
          variant={'contained'}
          color={'primary'}
          size={'large'}
          onClick={handleConformModal}
        >
          등록하기
        </Button>
      </Box>
    </Stack>
  );
}
