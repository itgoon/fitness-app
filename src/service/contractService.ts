import { RawAxiosRequestConfig } from 'axios';
import {
  ContractApiContractControllerFindOneRequest,
  ContractApiContractControllerUpdateRequest,
  ContractDto,
  ContractsDto
} from 'src/api';
import api from 'src/utils/api';

// 계약 목록 조회
export const loadContracts = async () => {
  const result = await api.contract.contractControllerFindAll();

  const {
    data: { data }
  } = result;

  return data as ContractsDto;
};

// 계약 정보 조회
export const loadSingleContract = async (
  requestParameters: ContractApiContractControllerFindOneRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const result = await api.contract.contractControllerFindOne(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = result;

  return data as ContractDto;
};

// 계약 서명 등록
export const updateContract = async (
  requestParameters: ContractApiContractControllerUpdateRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const result = await api.contract.contractControllerUpdate(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = result;

  return data as ContractDto;
};
