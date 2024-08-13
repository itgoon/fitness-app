import CP from "@/components";
import Store from "@/store";
import { colorThemes } from "@/themes/theme";
import { ThemeMode } from "@/utils/constants/enums";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
/**
 ****************************************
 * 트레이너 > 설정 화면
 ****************************************
 */

const SettingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);
  const [color, setColor] = useRecoilState(Store.Layout.colorState);
  const [mode, setMode] = useRecoilState(Store.Layout.modeState);

  const onLogout = () => {
    setStore(undefined);
    navigate("/login");
  };
  return (
    <CP.Styled.Wrapper>
      <Box
        sx={{
          width: 100 + "%",
          height: 100 + "%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: 16
        }}
      >
        <div>
          <CP.Styled.Flex
            padding={"16px"}
            width="100%"
            items="center"
            direction="column"
            gap={8}
          >
            <CP.Styled.Flex>
              <CP.Typography variant="h6">테마 색상 선택</CP.Typography>
            </CP.Styled.Flex>
            <CP.Styled.Flex
              width="auto"
              overflow="auto"
              gap={20}
              // justify="space-between"
            >
              {colorThemes(mode).map((item) => {
                if (!item?.main) return;

                const color = item.main.color;
                const name = item.main.name;
                return (
                  <CP.Styled.EmptyButton
                    onClick={() => {
                      console.log("eccc");
                      setColor(name);
                    }}
                    style={{ width: "auto" }}
                  >
                    <CP.Styled.Div
                      width="30px"
                      height="30px"
                      radius="50px"
                      position="relative"
                      style={{ background: color, marginBottom: "5px" }}
                    >
                      {/* {color === item && (
                        <CP.Icon
                          name="Check"
                          size={20}
                          style={{ position: "absolute", top: 5, right: 5 }}
                        />
                      )} */}
                    </CP.Styled.Div>
                  </CP.Styled.EmptyButton>
                );
              })}
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </div>

        <div>
          <CP.Styled.Flex
            padding={"16px"}
            width="100%"
            items="center"
            direction="column"
            gap={8}
          >
            <CP.Styled.Flex>
              <CP.Typography variant="h6">모드 선택</CP.Typography>
            </CP.Styled.Flex>

            <CP.Styled.Flex
              width="auto"
              overflow="auto"
              gap={20}
              style={{
                padding: "6px 20px",
                borderRadius: "10px"
              }}
              // justify="space-between"
            >
              {[theme.palette.common.white, theme.palette.common.black].map(
                (item, index) => (
                  <CP.Styled.EmptyButton
                    onClick={() => {
                      console.log("e");
                      setMode(index === 0 ? ThemeMode.LIGHT : ThemeMode.DARK);
                    }}
                    style={{ width: "auto" }}
                  >
                    <CP.Styled.Div
                      width="30px"
                      height="30px"
                      radius="50px"
                      position="relative"
                      style={{
                        background: item,
                        border: `1px solid ${theme.palette.grey[300]}`,
                        marginBottom: "5px"
                      }}
                    >
                      {/* <CP.Icon
                        name="Check"
                        size={20}
                        color={theme.palette.grey[400]}
                        style={{ position: "absolute", top: 5, right: 5 }}
                      /> */}
                    </CP.Styled.Div>
                  </CP.Styled.EmptyButton>
                )
              )}
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </div>

        <CP.Button onClick={onLogout} style={{ textDecoration: "underline" }}>
          로그아웃
        </CP.Button>
      </Box>
    </CP.Styled.Wrapper>
  );
};

export default SettingPage;
