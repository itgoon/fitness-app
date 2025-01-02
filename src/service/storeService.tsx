import _ from "lodash";
import { ResponseStores } from "src/_mock/map/stores";

const getMembershipInfo = (membershipInfos, playerId = 44350) => {
  let findData = membershipInfos.filter((item) => item.playerID === playerId);
  findData = _.sortBy(findData, ["state"]);
  return findData.length > 0 ? findData[0] : undefined;
};

/**
 * 지점 목록 조회
 * @param params
 * @returns
 */
export const loadStores = async (params: any): Promise<any> => {
  const items = await { ...ResponseStores };

  if (params.searchText && params.searchText.length > 0) {
    items.infos = items.infos.filter(
      (item) =>
        item.name.includes(params.searchText) ||
        item.phone.includes(params.searchText)
    );
  }

  items.count = items.infos.length;

  if (params?.page !== undefined && params?.perPage) {
    items.infos = items.infos?.slice(
      params.perPage * params.page,
      params.perPage * (params.page + 1)
    );
  }

  console.log({ items }, { params });
  return Promise.resolve(items);
};
