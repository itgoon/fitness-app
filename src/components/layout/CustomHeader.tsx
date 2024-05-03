import Store from "@/store";
import { HeaderProps } from "@/store/layoutStore";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "..";
import { Top } from "../styled";

const CustomHeader = ({ preOnClick, suffix, sufOnClick }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebar, setIsSidebar] = useRecoilState(Store.Layout.sidebarState);
  const [header, setHeader] = useRecoilState(Store.Layout.headerState);

  const prefix = header?.prefix;
  const title = header?.title;

  const onClickPrefix = () => {
    if (preOnClick) return preOnClick();

    const backUrl = location.pathname?.substring(
      0,
      location.pathname?.lastIndexOf("/")
    );

    if (prefix === "close" || prefix === "back") return navigate(-1);
    // return navigate(backUrl ? backUrl : "-1");
    return setIsSidebar(true);
  };

  const settingPreIconName = useMemo(() => {
    if (prefix === "close") return "Close";
    else if (prefix === "back") return "ArrowBack";
    else return "Menu";
  }, [prefix]);

  return (
    <Top>
      <CP.Styled.Flex width="24px" items="center">
        <CP.Icon
          size={24}
          style={{ color: "#000" }}
          muiName={settingPreIconName}
          onClick={onClickPrefix}
        />
      </CP.Styled.Flex>

      <CP.Typography variant="h5">{title ? title : ""}</CP.Typography>

      <CP.Styled.Flex width="24px">
        {suffix === "download" ? (
          <CP.Icon
            muiName="VerticalAlignBottomOutlined"
            color="--dark-color"
            onClick={sufOnClick ? sufOnClick : () => {}}
          />
        ) : (
          <></>
        )}
      </CP.Styled.Flex>
    </Top>
  );
};

export default CustomHeader;
