import CP from "@/components";
import Store from "@/store";
import { colorThemes } from "@/themes/theme";
import { ThemeMode } from "@/utils/constants/enums";
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
      <CP.CardWrap>
        <CP.Card>
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
                    onClick={() => setColor(name)}
                    style={{ width: "auto" }}
                  >
                    <CP.Styled.Div
                      width="30px"
                      height="30px"
                      radius="50px"
                      position="relative"
                      style={{ background: color, marginBottom: "5px" }}
                    >
                      {color === item && (
                        <CP.Icon
                          name="mingcute:check-fill"
                          size={20}
                          color="--white-color"
                          style={{ position: "absolute", top: 5, right: 5 }}
                        />
                      )}
                    </CP.Styled.Div>
                  </CP.Styled.EmptyButton>
                );
              })}
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </CP.Card>

        <CP.Card>
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
                    onClick={() =>
                      setMode(index === 0 ? ThemeMode.LIGHT : ThemeMode.DARK)
                    }
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
                      {color === item && (
                        <CP.Icon
                          name="mingcute:check-fill"
                          size={20}
                          color="--white-color"
                          style={{ position: "absolute", top: 5, right: 5 }}
                        />
                      )}
                    </CP.Styled.Div>
                  </CP.Styled.EmptyButton>
                )
              )}
            </CP.Styled.Flex>
          </CP.Styled.Flex>
        </CP.Card>

        <CP.Card>
          <CP.Button
            type="text"
            onClick={onLogout}
            style={{ textDecoration: "underline" }}
          >
            로그아웃
          </CP.Button>
        </CP.Card>
      </CP.CardWrap>
    </CP.Styled.Wrapper>
  );
};

export default SettingPage;
