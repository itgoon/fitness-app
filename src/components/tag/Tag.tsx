import { Box } from "@mui/material";
import * as Styled from "../styled";
import Typography from "../typography";

export const StateTag = {
  Available: { label: "유효", color: "--danger-color" },
  Expiration: { label: "만료", color: "--light-color" }
};

export interface TagProps {
  state: "Available" | "Expiration";
}
``;
const Tag = ({ state }: TagProps) => {
  const content = StateTag[state];

  if (!content) return;

  return (
    <Box color={content.color}>
      <Typography color="--white-color">{content.label}</Typography>
    </Box>
  );
};

export default Tag;
