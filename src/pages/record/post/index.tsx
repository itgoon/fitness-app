import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Input, Stack, Typography, useTheme } from '@mui/material';
import { DateReqFormat } from '../../../utils/formatTime';
import dayjs from 'dayjs';
import { useModal } from '../../../hooks/useModal';
import { useEffect, useRef, useState } from 'react';
import Icon from '../../../components/Icon';
import ImageItem from './item/ImageItem';
import PostItem from './item/PostItem';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import CalenderModal from '../../../components/custom/calendar/CalendarModal';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Overlay from '../../../components/custom/Overlay/indext';
/**
 * ******************************************************
 * 기록 등록 화면
 * ******************************************************
 */

// softBtnSx의 타입을 명시
const softBtnSx: {
  size: 'small' | 'medium' | 'large';
  variant: 'soft';
  color: 'secondary';
} = {
  size: 'large',
  variant: 'soft',
  color: 'secondary'
};
export default function Post() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey200 = palette.grey[200];
  const primarylig = palette.primary.light;
  const grey600 = light ? palette.grey[600] : 'white';

  const navigate = useNavigate();

  const schema = Yup.object().shape({
    date: Yup.string(),
    content: Yup.string(),
    type: Yup.string(),
    imageName: Yup.array().of(Yup.string()).nullable().default(null),
    imageUrls: Yup.array().of(Yup.string()).nullable().default(null),
    imageqty: Yup.number().min(0).default(0)
  });
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      date: dayjs().format(DateReqFormat),
      content: '',
      type: '',
      imageName: [],
      imageUrls: [],
      imageqty: 0
    }
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    setValue,
    getValues
  } = methods;

  const { openConfirm } = useModal();
  const [upload, setUpload] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const contentValue = watch('content');
  const typeValue = watch('type');
  const dateValue = watch('date');
  const imageUrlsValue = watch('imageUrls');
  const imageqtyValue = watch('imageqty');

  useEffect(() => {
    if (contentValue) {
      if (contentValue?.length > 4 && typeValue !== '') {
        setIsDisable(false);
      }
    }
  }, [contentValue]);

  const onChange = (e: any) => {
    setValue('date', dayjs(e).format(DateReqFormat));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);

      const currentImageNames = watch('imageName') || [];
      const currentImageUrls = watch('imageUrls') || [];

      setValue('imageName', [...currentImageNames, file.name]);
      setValue('imageUrls', [...currentImageUrls, fileUrl]),
        setValue('imageqty', currentImageNames.length + 1);
    }
  };
  const DeleteImage = (key: number) => {
    const currentImageNames = watch('imageName') || [];
    const currentImageUrls = watch('imageUrls') || [];
    const updateImgName = currentImageNames.filter((_, index) => index !== key);
    const updateImgUrls = currentImageUrls.filter((_, index) => index !== key);

    setValue('imageName', updateImgName);
    setValue('imageUrls', updateImgUrls);
    setValue('imageqty', updateImgName.length);
  };

  const uploadPost = () => {
    // TODO: 데이터 저장 실패시 코드 작성하기
    // TODO: toast or alert 알림 컴포넌트 만들기
    navigate('/record');
  };
  const onClick = handleSubmit(async (data) => {
    const type = data.type === 'workout' ? '운동 기록을 ' : '식단 기록을 ';
    openConfirm({
      title: '',
      content: `${type}등록하시겠습니까?`,
      onClick: () => uploadPost(),
      onClose: () => console.log('on Close data 저장', data),
      clickMsg: '네',
      closeMsg: '아니요'
    });
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Stack height={'100%'} justifyContent={'space-between'}>
      <Overlay isOpen={upload} />
      <Stack>
        <Stack gap={4}>
          <Box
            display={'flex'}
            gap={2}
            overflow={'scroll'}
            width={'100%'}
            pl={2.5}
            pt={3}
          >
            <Stack
              minWidth={80}
              height={80}
              border={`1px solid ${grey200}`}
              borderRadius={1}
              justifyContent={'center'}
              alignItems={'center'}
              onClick={() => setUpload((prev) => !prev)}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Icon name={'CameraSvg'} size={24} />
              <Box>
                <Typography
                  color={primarylig}
                  variant={'Body14/light'}
                  children={imageqtyValue}
                />
                <Typography
                  color={grey600}
                  variant={'Body14/light'}
                  children={'/10'}
                />
              </Box>
            </Stack>

            {imageUrlsValue &&
              imageUrlsValue?.map((image, key) => (
                <ImageItem
                  key={key}
                  image={image}
                  onClick={() => DeleteImage(key)}
                />
              ))}
          </Box>

          <Stack px={2.5} gap={4}>
            <PostItem label="어떤 기록을 남기시나요">
              <Box display={'flex'} gap={2}>
                <Button
                  variant={'outlined'}
                  color={'primary'}
                  children={'운동'}
                  onClick={() => setValue('type', 'workout')}
                />
                <Button
                  variant={'outlined'}
                  color={'primary'}
                  children={'식단'}
                  onClick={() => setValue('type', 'diet')}
                />
              </Box>
            </PostItem>
            <PostItem label="날짜">
              {/* TODO: 컴포넌트로 뺄 수 있으면 빼면 좋을 것  같음 */}
              <Input
                className="custom-datePicker"
                value={dateValue}
                onClick={() => setIsOpen((prev) => !prev)}
                endAdornment={<Icon name="PickerCalendarSvg" size={24} />}
              ></Input>
              <CalenderModal
                open={isOpen}
                onClose={() => setIsOpen((prev) => !prev)}
                onChange={onChange}
              />
            </PostItem>
            <PostItem label="한줄 메모">
              <TextField
                size={'large'}
                placeholder={'내용을 입력해주세요. (최대 20자)'}
                onChange={(e) => setValue('content', e.target.value)}
              ></TextField>
            </PostItem>
          </Stack>
        </Stack>
      </Stack>
      {!upload ? (
        <Box px={2.5}>
          <Button
            variant={'contained'}
            color={'primary'}
            size={'large'}
            children={'등록하기'}
            disabled={isDisable}
            onClick={onClick}
          />
        </Box>
      ) : (
        <Stack gap={1} px={0.81} zIndex={1}>
          <Stack gap={0.1}>
            <Button
              {...softBtnSx}
              isTopRadius={true}
              children={'사진 업로드'}
              onClick={() => fileInputRef?.current?.click()}
            />
            <Button
              {...softBtnSx}
              isBottomRadius={true}
              children={'사진 촬영'}
            />
          </Stack>
          <Button
            {...softBtnSx}
            color={'primary'}
            children={'취소'}
            onClick={() => setUpload((prev) => !prev)}
          />
        </Stack>
      )}
    </Stack>
  );
}
