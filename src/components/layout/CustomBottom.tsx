import Store from "@/store";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "..";
import { Bottom } from "../styled";
import { IconifyProps } from "../icon/Icon";

const TrainerMenuList: { icon: IconifyProps; path?: string }[] = [
  { icon: "solar:home-smile-angle-linear", path: "/trainer/main" },
  { icon: "fluent:person-16-regular", path: "/trainer/member" },
  { icon: "material-symbols-light:qr-code-2" },
  { icon: "solar:calendar-line-duotone", path: "/trainer/schedule" },
  { icon: "la:file-contract", path: "/trainer/contract" }
];
const MemberMenuList: { icon: IconifyProps; path?: string }[] = [
  { icon: "solar:home-smile-angle-linear", path: "/member/main" },
  { icon: "solar:card-2-broken" },
  { icon: "solar:calendar-line-duotone", path: "/member/schedule" }
];
const CustomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useRecoilState(Store.Auth.userState);
  const [isQRCode, setIsQRCode] = useState(false);
  const [isMemberCard, setIsMemberCard] = useState(false);

  if (!user) return;

  return (
    <>
      <Bottom>
        <CP.Styled.Flex width="100%" justify="space-between" items="center">
          {user?.isTrainer
            ? TrainerMenuList.map((item) => {
                return (
                  <CP.Icon
                    size={36}
                    name={item.icon}
                    color={
                      location?.pathname === item.path
                        ? "--primary-color"
                        : "--dark-color"
                    }
                    onClick={() => {
                      item?.path !== undefined
                        ? navigate(item.path)
                        : setIsQRCode(true);
                    }}
                  />
                );
              })
            : MemberMenuList.map((item) => {
                return (
                  <CP.Icon
                    size={36}
                    name={item.icon}
                    color={
                      location?.pathname === item.path
                        ? "--primary-color"
                        : "--dark-color"
                    }
                    onClick={() => {
                      item?.path !== undefined
                        ? navigate(item.path)
                        : setIsMemberCard(true);
                    }}
                  />
                );
              })}
        </CP.Styled.Flex>
      </Bottom>
      <CP.Modal open={isQRCode} onClose={() => setIsQRCode(false)}>
        <CP.Icon
          name="material-symbols-light:qr-code-2"
          color="--dark-color"
          style={{ width: "100%", height: "100%", aspectRatio: "1/1" }}
        />
      </CP.Modal>
      <CP.Modal open={isMemberCard} onClose={() => setIsMemberCard(false)}>
        isMemberCard
      </CP.Modal>
    </>
  );
};

export default CustomHeader;
