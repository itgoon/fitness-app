import Store from "@/store";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "..";
import { Bottom } from "../styled";
import { IconifyProps } from "../icon/Icon";
import { TrainerMemberList } from "@/utils/constants/dummyData";

const TrainerMenuList: { icon: IconifyProps; path?: string }[] = [
  { icon: "solar:home-smile-angle-linear", path: "/trainer/main" },
  { icon: "fluent:person-16-regular", path: "/trainer/member" },
  { icon: "material-symbols-light:qr-code-2" },
  { icon: "solar:calendar-line-duotone", path: "/trainer/schedule" },
  { icon: "la:file-contractS", path: "/trainer/contract" }
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
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  const [isQRCode, setIsQRCode] = useState(false);
  const [isMemberCard, setIsMemberCard] = useState(false);
  const [QRPrograss, setQRPrograss] = useState(false);

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

      <CP.Modal open={isMemberCard} onClose={() => {setIsMemberCard(false)}} padding="0px">
        {QRPrograss ? <CP.ModalPrograss onClick={() => setQRPrograss(false)} timeType="잔여 시간" timeUnit="초"></CP.ModalPrograss>: ( 
          <>
            <CP.Styled.Div bg={"--social-google-color"} height="230px" padding={"20px 15px 20px 15px"} >
              <CP.Styled.Div style={{ display: "flex" }} padding={"0 0 15px 0"} >
                <CP.Styled.Div flex={3} padding={"10px 0 0 0"}>
                  <CP.Typography variant="h3" wrap="wrap">
                    {store?.name}
                  </CP.Typography>
                </CP.Styled.Div>

                <CP.Styled.Div flex={1} >
                  <CP.Styled.EmptyButton onClick={() => setQRPrograss(true)}>
                    <CP.Icon
                      name="material-symbols-light:qr-code-2"
                      color="--dark-color"
                      style={{ width: "100%", height: "100%", aspectRatio: "1/1", backgroundColor: "#fff", borderRadius:"4px"}}
                    />

                  </CP.Styled.EmptyButton>
                </CP.Styled.Div>
              </CP.Styled.Div>

              <CP.Typography variant="b2" color="--white-color-999" wrap="wrap" >
                {store?.place}
              </CP.Typography>
              <CP.Typography variant="b2" color="--white-color-999" wrap="wrap" >
                {store?.phone}
              </CP.Typography>
            </CP.Styled.Div>

            <CP.Styled.Div padding={"10px"}>

              <CP.Styled.Div style={{ display: "flex", justifyContent: "space-between" }} padding="0 0 20px 0">
                <CP.Typography variant="h4" >
                  {user?.name}
                </CP.Typography>

                <CP.Styled.EmptyButton onClick={() => navigate("/member/contract/detail")} >
                  {/* padding 값 변경하기  */}
                  <CP.Typography variant="b2" color={"--work-card-color"} align={"end"}>
                    계약 &gt;
                  </CP.Typography>
                </CP.Styled.EmptyButton>
              </CP.Styled.Div>

              <CP.Typography variant="h4" weight="normal">
                {user?.start_date} ~ {user?.end_date}
              </CP.Typography>
              <CP.Typography variant="h4" weight="normal">
                {user?.production}
              </CP.Typography>
            </CP.Styled.Div> 
          </>
        )}

      </CP.Modal>
    </>
  );
};

export default CustomHeader;
