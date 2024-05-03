import Store from "@/store";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "@/components";
import { useEffect, useLayoutEffect, useState } from "react";
import CustomHeader from "./CustomHeader";
import { Response } from "@/global";
import { ResultCode } from "@/utils/constants/enums";

const CustomLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [layout, setLayout] = useRecoilState(Store.Layout.layoutState);
  const [header, setHeader] = useRecoilState(Store.Layout.headerState);

  return (
    <CP.Styled.Layout isHeader={true} isBottom={true}>
      {layout.header && (
        <CustomHeader
          prefix={header?.prefix}
          suffix={header?.suffix}
          preOnClick={header?.preOnClick}
          sufOnClick={header?.sufOnClick}
          title={header?.title}
        ></CustomHeader>
      )}
      <Outlet />
    </CP.Styled.Layout>
  );
};

export default CustomLayout;
