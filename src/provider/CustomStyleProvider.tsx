import CP from "@/components";
import { routes } from "@/route";
import { RouteProps } from "@/route/routes";
import Store from "@/store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import GlobalStyles from "../styles/globalStyle";

function CustomStyleProvider() {
  const [color, setColor] = useRecoilState(Store.Layout.colorState);

  return <GlobalStyles color={color} />;
}

export default CustomStyleProvider;

const FullScreen = styled(CP.Styled.Div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background: rgb(0, 0, 0, 0.2);

  & > span {
    width: 60px !important;
    height: 60px !important;
    color: var(--primary-color);
  }
`;
