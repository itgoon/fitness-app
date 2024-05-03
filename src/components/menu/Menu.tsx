import * as Styled from "../styled";
import {
  ButtonProps as ButtonCompProps,
  Button as MuiButton
} from "@mui/material";
import { ReactNode } from "react";
import Typography from "../typography";
import { TypoVariantType } from "../typography/Typography";
import { Div, Flex } from "../styled";
import styled from "styled-components";

export interface MenuProps {
  title?: string | ReactNode;
  subTitle?: string;
  children?: ReactNode;
  require?: boolean;
  sub?: string | ReactNode;
  right?: ReactNode;
  error?: string;
  isError?: boolean;
  isCard?: boolean;
}

const Menu = ({
  title,
  subTitle,
  children,
  sub,
  require,
  right,
  error,
  isError,
  isCard
}: MenuProps) => {
  return (
    <StyleFlex gap={isCard ? 0 : 8} direction="column">
      <Div
        className="title-div"
        padding={isCard ? "var(--layout-padding-horizontal)" : "0px"}
        style={{ minHeight: title ? "24px" : "0px" }}
      >
        <Flex justify="space-between">
          {title && (
            <Flex gap={4} items="flex-end">
              {typeof title === "string" ? (
                <Typography variant="h5">{title}</Typography>
              ) : (
                title
              )}

              <Typography
                variant="b2"
                color={require ? "--error-color" : "--primary-color"}
              >
                {require === true
                  ? "(필수)"
                  : require === false
                    ? "(선택)"
                    : ""}
              </Typography>
            </Flex>
          )}
          {right && right}
        </Flex>
        {subTitle && (
          <Div>
            <Typography
              wrap="wrap"
              variant="b3"
              color="--dark-color"
              opacity="0.6"
            >
              {subTitle}
            </Typography>
          </Div>
        )}
      </Div>

      <Div className="content-div">
        {children}
        <Div padding={isCard ? "0px var(--layout-padding)" : "0px"}>
          {sub && (
            <>
              {typeof sub === "string" ? (
                <Styled.ExtraText>{sub}</Styled.ExtraText>
              ) : (
                sub
              )}
            </>
          )}

          {isError && error && (
            <Styled.ExtraText error={true}>{error}</Styled.ExtraText>
          )}
        </Div>
      </Div>
    </StyleFlex>
  );
};

export default Menu;

const StyleFlex = styled(Flex)`
  & div:has(div:has(> .card_comp)) {
    background: #ffaefe;
  }

  // div:has(.card_wrap_comp) {
  //   background: #ffa;
  // }
`;
