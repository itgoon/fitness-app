import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import FormProvider from 'src/components/hookForm';
import Sizer from 'src/components/common/Sizer';
import ButtonWrapper from 'src/components/ButtonWrapper';
import useModals from 'src/hooks/useModals';
import ConfirmModal from 'src/components/modals/ConfirmModal';
import { paths } from 'src/routes/paths';
import Button from '../../../components/Button';
import { recordSchema } from './_schema';
import CategoryField from './CategoryField';
import ImageUploader from './ImageUploader';
import { DateReqFormat } from '../../../utils/formatTime';
import DateField from './DateField';

/**
 * ******************************************************
 * 기록 등록 화면
 * ******************************************************
 */
export default function Post() {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(recordSchema),
    defaultValues: {
      type: 'workout',
      images: [],
      rctDate: dayjs().format(DateReqFormat),
      content: ''
    }
  });

  const { handleSubmit, getValues } = methods;

  const { modals, addModal, removeModal } = useModals();

  const onSubmit = handleSubmit(async (data) => {
    // 등록 API

    navigate(paths.record.list);
  });

  const handleConformModal = () => {
    const type = getValues('type') === 'workout' ? '운동' : '식단';

    addModal(
      <ConfirmModal
        title={`${type} 기록을 등록하시겠습니까?`}
        onClose={removeModal}
        onConfirm={onSubmit}
      />
    );
  };

  return (
    <>
      <FormProvider methods={methods}>
        <ImageUploader />

        <Sizer>
          <Stack gap={4}>
            <CategoryField />
            <DateField />
          </Stack>
        </Sizer>
      </FormProvider>

      <ButtonWrapper>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleConformModal}
        >
          등록하기
        </Button>
      </ButtonWrapper>

      {modals}
    </>
  );
}
