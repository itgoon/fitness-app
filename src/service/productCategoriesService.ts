import { RawAxiosRequestConfig } from 'axios';
import {
  ProductCategoriesApiProductCategoriesControllerFindAllRequest,
  ProductCategoriesDto
} from 'src/api';
import api from 'src/utils/api';

// 상품 카테고리 목록 조회
export const loadProductCategories = async (
  requestParameters: ProductCategoriesApiProductCategoriesControllerFindAllRequest,
  options?: RawAxiosRequestConfig | undefined
) => {
  const result = await api.productCategories.productCategoriesControllerFindAll(
    requestParameters,
    options
  );

  const {
    data: { data }
  } = result;

  return data as ProductCategoriesDto;
};
