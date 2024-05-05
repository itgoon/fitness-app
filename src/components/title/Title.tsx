import * as Styled from "../styled";
import {
  ButtonProps as ButtonCompProps,
  Button as MuiButton
} from "@mui/material";
import { ReactNode } from "react";
import Typography from "../typography";
import { TypoVariantType } from "../typography/Typography";
import { Div, Flex } from "../styled";

export interface TitleProps {
  children: string;
  sub?: ReactNode;
}

const Title = ({ children, sub }: TitleProps) => {
  return (
    <Flex gap={12} direction="column">
      <Typography variant="h4">{children}</Typography>
      {sub && (
        <Typography wrap="wrap" variant="b3" color="--dark-color" opacity="0.6">
          {sub}
        </Typography>
      )}
    </Flex>
  );
};

export default Title;
