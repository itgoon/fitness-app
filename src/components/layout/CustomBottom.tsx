import Store from "@/store";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "..";
import { Bottom } from "../styled";
import { IconifyProps } from "../icon/Icon";
import { TrainerMemberList } from "@/utils/constants/dummyData";
import styled from "styled-components";

const TrainerMenuList: { icon: IconifyProps; path?: string }[] = [
  { icon: "solar:home-smile-angle-linear", path: "/trainer/main" },
  { icon: "fluent:person-16-regular", path: "/trainer/member" },
  { icon: "material-symbols-light:qr-code-2" },
  { icon: "solar:calendar-line-duotone", path: "/trainer/schedule" },
  { icon: "clarity:contract-line", path: "/trainer/contract" }
];
const MemberMenuList: { icon: IconifyProps; path?: string }[] = [
  { icon: "solar:home-smile-angle-linear", path: "/member/main" },
  { icon: "solar:card-2-broken" },
  { icon: "solar:calendar-line-duotone", path: "/member/schedule" }
];
const CustomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  const [user, setUser] = useRecoilState(Store.Auth.userState);
  const [isQRCode, setIsQRCode] = useState(false);
  const [isMemberCard, setIsMemberCard] = useState(false);
  const [QRPrograss, setQRPrograss] = useState(false);

  if (!user) return;

  return (
    <>
      <Bottom>
        <CP.Styled.Flex width="100%" justify="space-between" items="center">
          {user?.isTrainer
            ? TrainerMenuList.map((item) => {
                return (
                  <CP.Icon
                    size={item?.path !== undefined ? 27 : 40}
                    name={item.icon}
                    color={
                      item.path && location?.pathname?.indexOf(item.path) !== -1
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
                    size={item?.path !== undefined ? 27 : 40}
                    name={item.icon}
                    color={
                      item.path && location?.pathname?.indexOf(item.path) !== -1
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
      {/* <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50px",
          position: "absolute",
          left: "50%",
          bottom: "0px",
          transform: "translate(-50%, 0%)",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            borderRadius: "50px",
            boxShadow: "0px -2px 6px #0000000f",
            background: "#ffffff 0% 0% no-repeat padding-box"
          }}
        ></div>
      </div> */}
      <CP.Modal open={isQRCode} onClose={() => setIsQRCode(false)}>
        <CP.ModalPrograss timeType="잔여 시간" timeUnit="초"></CP.ModalPrograss> 
      </CP.Modal>

      
      <CP.Modal open={isMemberCard}
        onClose={() => {
          setIsMemberCard(false);

          if(QRPrograss){
            setTimeout(()=>{
              setQRPrograss(false) 
            }, 500)
          }
        }}
        padding="0px">

        {QRPrograss ? <CP.ModalPrograss onClick={() => setQRPrograss(false)} timeType="잔여 시간" timeUnit="초"></CP.ModalPrograss> : (
          <>
            <CardImageDiv
              style={{
                backgroundImage: "url(/images/dummy/gym_img.jpeg)",
                backgroundSize: "cover"
              }}
              height="230px"
              padding={"20px 15px 20px 15px"}
            >
              <CP.Styled.Div style={{ display: "flex" }} padding={"0 0 15px 0"}>
                <CP.Styled.Flex
                  direction="column"
                  gap={8}
                  flex={3}
                  padding={"10px 0 0 0"}
                >
                  <CP.Typography variant="h3" wrap="wrap">
                    {store?.name}
                  </CP.Typography>
                  <CP.Typography
                    variant="b1"
                    color="--white-color-999"
                    wrap="wrap"
                  >
                    {store?.place}
                  </CP.Typography>
                  <CP.Typography
                    variant="b1"
                    color="--white-color-999"
                    wrap="wrap"
                  >
                    {store?.phone}
                  </CP.Typography>
                </CP.Styled.Flex>

                <CP.Styled.Div flex={1}>
                  <CP.Styled.EmptyButton onClick={() => setQRPrograss(true)}>
                    <CP.Icon
                      name="material-symbols-light:qr-code-2"
                      color="--dark-color"
                      style={{
                        width: "100%",
                        height: "100%",
                        aspectRatio: "1/1",
                        backgroundColor: "#fff",
                        borderRadius: "4px"
                      }}
                    />
                  </CP.Styled.EmptyButton>
                </CP.Styled.Div>
              </CP.Styled.Div>
            </CardImageDiv>

            <CP.Styled.Div padding={"16px"}>
              <CP.Styled.Div
                style={{ display: "flex", justifyContent: "space-between" }}
                padding="0 0 20px 0"
              >
                <CP.Typography variant="h4">{user?.name}</CP.Typography>

                <CP.Styled.EmptyButton
                  style={{ width: "auto" }}
                  onClick={() => {
                    setIsMemberCard(false);
                    navigate(`/member/contract/detail?name=${user?.name}`);
                  }}
                >
                  {/* padding 값 변경하기  */}
                  <CP.Typography
                    variant="b1"
                    color={"--primary-color"}
                    align={"end"}
                  >
                    계약
                    <CP.Icon
                      name="icon-park-outline:right"
                      color={"--primary-color"}
                    />
                  </CP.Typography>
                </CP.Styled.EmptyButton>
              </CP.Styled.Div>

              <CP.Typography variant="h6" weight="normal">
                {user?.start_date} ~ {user?.end_date}
              </CP.Typography>
              <CP.Typography variant="h6" weight="normal">
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

const CardImageDiv = styled(CP.Styled.Div)`
  background-size: cover;
  // background-repeat: no-repeat;
  position: relative;
  isolation: isolate;

  & ::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: -1;
    height: 100%;
    inset: 0;
    background: #fff;
    opacity: 0.1;
  }
`;
