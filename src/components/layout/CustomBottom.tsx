import Store from "@/store";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "..";
import { Bottom } from "../styled";
import { MuiIconNameType } from "../icon/Icon";

const MenuList: { icon: MuiIconNameType; path?: string }[] = [
  { icon: "Home", path: "/trainer/main" },
  { icon: "Groups", path: "/trainer/member" },
  { icon: "QrCode2" },
  { icon: "CalendarMonth", path: "/trainer/schedule" },
  { icon: "Settings", path: "/trainer/setting" }
];
const CustomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isQRCode, setIsQRCode] = useState(false);

  return (
    <>
      <Bottom>
        <CP.Styled.Flex width="100%" justify="space-between" items="center">
          {MenuList.map((item) => {
            return (
              <CP.Icon
                size={36}
                muiName={item.icon}
                color="--dark-color"
                onClick={() => {
                  item?.path !== undefined
                    ? navigate(item.path)
                    : setIsQRCode(true);
                }}
              />
            );
          })}
        </CP.Styled.Flex>
      </Bottom>
      <CP.Modal open={isQRCode} onClose={() => setIsQRCode(false)}>
        <CP.Icon
          muiName="QrCode2"
          color="--dark-color"
          style={{ width: "100%", height: "100%", aspectRatio: "1/1" }}
        />
      </CP.Modal>
    </>
  );
};

export default CustomHeader;
