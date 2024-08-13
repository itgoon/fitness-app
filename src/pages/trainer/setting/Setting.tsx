import CP from "@/components";
import Button from "@/components/button";
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
    <Box>
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
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              width: "100%",
              alignItems: "center",
              flexDirection: "column",
              gap: 8
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CP.Typography variant="h6">테마 색상 선택</CP.Typography>
            </Box>
            <Box
              sx={{
                width: "auto",
                display: "flex",
                overflow: "auto",
                gap: 20
              }}

              // justify="space-between"
            >
              {colorThemes(mode).map((item) => {
                if (!item?.main) return;

                const color = item.main.color;
                const name = item.main.name;
                return (
                  <Button
                    variant="text"
                    onClick={() => {
                      console.log("eccc");
                      setColor(name);
                    }}
                    style={{ width: "auto" }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                        position: "relative",
                        backgroundColor: color,
                        marginBottom: "5px"
                      }}
                    >
                      {/* {color === item && (
                        <CP.Icon
                          name="Check"
                          size={20}
                          style={{ position: "absolute", top: 5, right: 5 }}
                        />
                      )} */}
                    </Box>
                  </Button>
                );
              })}
            </Box>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              width: "100%",
              alignItems: "center",
              flexDirection: "column",
              gap: 8
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CP.Typography variant="h6">모드 선택</CP.Typography>
            </Box>

            <Box
              sx={{
                width: "auto",
                overflow: "auto",
                gap: 20,
                padding: "6px 20px",
                borderRadius: "10px"
              }}
              // justify="space-between"
            >
              {[theme.palette.common.white, theme.palette.common.black].map(
                (item, index) => (
                  <Button
                    variant="text"
                    onClick={() => {
                      console.log("e");
                      setMode(index === 0 ? ThemeMode.LIGHT : ThemeMode.DARK);
                    }}
                    style={{ width: "auto" }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                        position: "relative",
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
                    </Box>
                  </Button>
                )
              )}
            </Box>
          </Box>
        </div>

        <CP.Button onClick={onLogout} style={{ textDecoration: "underline" }}>
          로그아웃
        </CP.Button>
      </Box>
    </Box>
  );
};

export default SettingPage;
