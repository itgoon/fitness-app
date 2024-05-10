import Store from "@/store";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "..";
import { Top } from "../styled";

const CustomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);

  return (
    <>
      <Top>
        <CP.Styled.Flex width="24px" items="center">
          {location?.pathname.indexOf("/main") === -1 && (
            <CP.Icon
              name="humbleicons:arrow-go-back"
              color="--dark-color"
              onClick={() => navigate(-1)}
            />
          )}
        </CP.Styled.Flex>

        <CP.Typography variant="h4">
          {store?.name ? store.name : ""}
        </CP.Typography>

        <CP.Styled.Flex width="24px">
          <CP.Icon
            name="icon-park-outline:setting-two"
            color={
              location?.pathname === "/trainer/setting"
                ? "--primary-color"
                : "--dark-color"
            }
            onClick={() => navigate("/trainer/setting")}
          />
        </CP.Styled.Flex>
      </Top>
    </>
  );
};

export default CustomHeader;
