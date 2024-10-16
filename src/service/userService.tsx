import _ from "lodash";
import moment from "moment";

import { ResponseUser } from "src/_mock/map/users";

const getMembershipInfo = (membershipInfos, playerId = 44350) => {
  let findData = membershipInfos.filter((item) => item.playerID === playerId);
  findData = _.sortBy(findData, ["state"]);
  return findData.length > 0 ? findData[0] : undefined;
};

/**
 * 회원 목록 조회
 * @param params
 * @returns
 */
export const loadUsers = async (params: any): Promise<any> => {
  const items = await { ...ResponseUser };

  if (params.searchText && params.searchText.length > 0) {
    items.infos = items.infos.filter(
      (item) =>
        item.name.includes(params.searchText) ||
        item.phone.includes(params.searchText)
    );
  }
  items.infos = items.infos
    .filter((item) => {
      const findItem = getMembershipInfo(items.membershipInfos, item.playerID);
      if (params.type === "ALL") return true;

      if (!findItem) return false;

      if (params.type === "ACTIVE") {
        if (
          moment().isBetween(
            moment(1e3 * findItem.startTime).format("YYYY-MM-DD"),
            moment(1e3 * findItem.endTime).format("YYYY-MM-DD")
          )
        ) {
          return true;
        }
        return false;
      }
      if (params.type === "INACTIVE") {
        if (
          moment().isBetween(
            moment(1e3 * findItem.startTime).format("YYYY-MM-DD"),
            moment(1e3 * findItem.endTime).format("YYYY-MM-DD")
          )
        ) {
          return false;
        }

        return true;
      }
      if (params.type === "PAUSE") {
        if (
          moment().isBetween(
            moment(1e3 * findItem.startTime).format("YYYY-MM-DD"),
            moment(1e3 * findItem.endTime).format("YYYY-MM-DD")
          )
        ) {
          return false;
        }

        return true;
      }

      return true;
    })
    ?.slice();

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
