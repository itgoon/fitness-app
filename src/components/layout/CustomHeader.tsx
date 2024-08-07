import Store from "@/store";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "..";

const CustomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [store, setStore] = useRecoilState(Store.Auth.storeState);

  return (
    <>
      <Toolbar>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
        >
          <Box display={"flex"} justifyContent={"space-between"} width={"24px"}>
            {location?.pathname.indexOf("/main") === -1 && (
              <CP.Icon
                name="humbleicons:arrow-go-back"
                color="--dark-color"
                onClick={() => navigate(-1)}
              />
            )}
          </Box>
          <CP.Typography variant="h4">
            {store?.name ? store.name : ""}
          </CP.Typography>
          <Box width={"24px"}>
            <CP.Icon
              name="icon-park-outline:setting-two"
              color={
                location?.pathname === "/trainer/setting"
                  ? "--primary-color"
                  : "--dark-color"
              }
              onClick={() => navigate("/trainer/setting")}
            />
          </Box>
        </Box>
      </Toolbar>
    </>
  );
};

export default CustomHeader;
