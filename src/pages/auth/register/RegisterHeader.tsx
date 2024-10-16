import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import Icon from "src/components/Icon";

export default function RegisterHeader() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "15px 0"
      }}
    >
      <Icon name={"LeftArrow"} onClick={() => navigate("/login")} />
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Typography variant={"Body18/bold"} children="회원가입" />
      </Box>
    </Box>
  );
}
