import { Avatar as MuiAvatar } from "@mui/material";

export interface AvatarProps {
  src: string;
  size?: number;
  variant?: "circular" | "rounded" | "square";
  style?: any;
}

const Avatar = ({ src, size, variant = "circular" }: AvatarProps) => {
  return (
    <MuiAvatar
      src={src}
      sx={{ width: size ? size : 40, height: size ? size : 40 }}
      variant={variant}
      style={{ borderRadius: "" }}
    />
  );
};

export default Avatar;
