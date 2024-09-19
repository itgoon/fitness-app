import { Backdrop, AlertTitle, Alert as MAlert } from "@mui/material";

interface Props {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
}

const Alert = ({ open, title, subtitle, onClose }: Props) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 110 }}
    open={open}
  >
    <MAlert severity="success" onClose={onClose}>
      <AlertTitle>{title}</AlertTitle>
      {subtitle || ""}
    </MAlert>
  </Backdrop>
);

export default Alert;
