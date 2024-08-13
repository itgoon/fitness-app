import Store from "@/store";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CP from "..";
import { Bottom } from "../styled";
import { IconsType } from "../icon/Icon";
import { Box } from "@mui/material";
import Button from "../button";

const TrainerMenuList: { icon: IconsType; path?: string }[] = [
  { icon: "Home", path: "/trainer/main" },
  { icon: "Person", path: "/trainer/member" },
  { icon: "QrCode2" },
  { icon: "CalendarMonth", path: "/trainer/schedule" },
  { icon: "ContactPage", path: "/trainer/contract" }
];
const MemberMenuList: { icon: IconsType; path?: string }[] = [
  { icon: "Home", path: "/member/main" },
  { icon: "CreditCardOff" },
  { icon: "CalendarMonth", path: "/member/schedule" }
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
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
        </Box>
      </Bottom>

      <CP.Modal open={isQRCode} onClose={() => setIsQRCode(false)}>
        <CP.ModalPrograss timeType="잔여 시간" timeUnit="초"></CP.ModalPrograss>
      </CP.Modal>

      <CP.Modal
        open={isMemberCard}
        onClose={() => {
          setIsMemberCard(false);

          if (QRPrograss) {
            setTimeout(() => {
              setQRPrograss(false);
            }, 500);
          }
        }}
      >
        {QRPrograss ? (
          <CP.ModalPrograss
            onClick={() => setQRPrograss(false)}
            timeType="잔여 시간"
            timeUnit="초"
          ></CP.ModalPrograss>
        ) : (
          <>
            <Box
              sx={{
                backgroundSize: "cover",
                position: "relative",
                isolation: "isolate",
                height: "230px",
                padding: "20px 15px 20px 15px",
                "& ::before": {
                  position: "absolute",
                  content: "",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  zIndex: "-1",
                  height: "100%",
                  inset: "0",
                  background: "#fff",
                  opacity: "0.1",
                  backgroundImage: "url(/images/dummy/gym_img.jpeg)",
                  backgroundSize: "cover"
                }
              }}
            >
              <Box sx={{ display: "flex", padding: "0 0 15px 0" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    padding: "10px 0 0 0"
                  }}
                  flex={3}
                >
                  <CP.Typography>{store?.name}</CP.Typography>
                  <CP.Typography>{store?.place}</CP.Typography>
                  <CP.Typography>{store?.phone}</CP.Typography>
                </Box>
                <Box flex={1}>
                  <Button variant="text" onClick={() => setQRPrograss(true)}>
                    <CP.Icon
                      name="QrCode2"
                      style={{
                        width: "100%",
                        height: "100%",
                        aspectRatio: "1/1",
                        backgroundColor: "#fff",
                        borderRadius: "4px"
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box padding={"16px"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 0 20px 0"
                }}
              >
                <CP.Typography variant="h4">{user?.name}</CP.Typography>

                <Button
                  variant="text"
                  sx={{ width: "auto" }}
                  onClick={() => {
                    setIsMemberCard(false);
                    navigate(`/member/contract/detail?name=${user?.name}`);
                  }}
                >
                  <CP.Typography>
                    계약
                    <CP.Icon name={"East"} color={"--primary-color"} />
                  </CP.Typography>
                </Button>
              </Box>

              <CP.Typography>
                {user?.start_date} ~ {user?.end_date}
              </CP.Typography>
              <CP.Typography>{user?.production}</CP.Typography>
            </Box>
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
