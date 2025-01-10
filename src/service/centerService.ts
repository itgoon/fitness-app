import { CenterDto, CenterPolicyDto } from 'src/api';
import api from 'src/utils/api';

// 센터 정보 조회
export const loadCenter = async () => {
  const result = await api.center.centerControllerFindOne();

  const {
    data: { data }
  } = result;

  return data as CenterDto;
};

// 센터 약관 조회
export const loadCenterPolicy = async () => {
  const result = await api.centerPolicy.centerPolicyControllerFindOne();

  const {
    data: { data }
  } = result;

  return data as CenterPolicyDto;
};
