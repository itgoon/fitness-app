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
        <CP.Styled.Flex width="24px" items="center"></CP.Styled.Flex>

        <CP.Typography variant="h5">
          {store?.name ? store.name : ""}
        </CP.Typography>

        <CP.Styled.Flex width="24px">
          <CP.Icon
            muiName="Notifications"
            color="--secondary-color"
            onClick={() => navigate("/trainer/alarm")}
          />
        </CP.Styled.Flex>
      </Top>
    </>
  );
};

export default CustomHeader;
