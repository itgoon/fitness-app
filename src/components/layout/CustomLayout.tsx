import Store from "@/store";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "@/components";
import { useEffect, useLayoutEffect, useState } from "react";
import CustomHeader from "./CustomHeader";
import CustomBottom from "./CustomBottom";
import { Response } from "@/global";
import { ResultCode } from "@/utils/constants/enums";

const CustomLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [layout, setLayout] = useRecoilState(Store.Layout.layoutState);
  return (
    <CP.Styled.Layout isHeader={layout?.header ? layout.header : true} isBottom={layout?.bottom ? layout.bottom : true}>
      {layout.header &&  <CustomHeader/>}
      <Outlet />
      {layout.bottom &&  <CustomBottom/>}
    </CP.Styled.Layout>
  );
};

export default CustomLayout;
