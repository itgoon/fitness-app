import Store from "@/store";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CustomBottom from "./CustomBottom";
import CustomHeader from "./CustomHeader";

const CustomLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const [color, setColor] = useRecoilState(Store.Layout.colorState);

  const [layout, setLayout] = useRecoilState(Store.Layout.layoutState);
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "auto"
      }}
    >
      {layout.header && <CustomHeader />}
      <Outlet />
      {layout.bottom && <CustomBottom />}
    </Box>
  );
};

export default CustomLayout;
