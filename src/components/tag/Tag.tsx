import * as Styled from "../styled";
import Typography from "../typography";
import { TypoVariantType } from "../typography/Typography";

export const StateTag = {
  Available: { label: "유효", color: "--danger-color" },
  Expiration: { label: "만료", color: "--light-color" }
};

export interface TagProps {
  state: "Available" | "Expiration";
}

const Tag = ({ state }: TagProps) => {
  const content = StateTag[state];

  if (!content) return;

  return (
    <Styled.Tag color={content.color}>
      <Typography color="--white-color" weight="700">
        {content.label}
      </Typography>
    </Styled.Tag>
  );
};

export default Tag;
