import { ReactNode } from "react";
import styled from "styled-components";
import CP from "..";

export interface ContentProps {
  title: string | ReactNode;
  sub?: string | ReactNode;
  right?: string | ReactNode;
  left?: string | ReactNode;
  onClick?: () => void;
}

export interface DataCardProps {
  content: (ContentProps | undefined)[];
  height?: number;
  wrapStyle?: any;
}

const DataCard = ({ content, height = 80, wrapStyle }: DataCardProps) => {
  return (
    <CP.CardWrap padding="12px var(--layout-padding)" style={wrapStyle}>
      {content &&
        content?.length > 0 &&
        content.map((item) => {
          if (!item) return;
          return (
            <CP.Card
              height={height + "px"}
              onClick={item?.onClick ? item.onClick : () => {}}
            >
              <CP.Styled.Flex
                gap={8}
                height="100%"
                justify="center"
                items="center"
                padding={"16px"}
              >
                {item?.left && (
                  <>
                    {typeof item?.left === "string" ? (
                      <CP.Typography variant="b4">{item.left}</CP.Typography>
                    ) : (
                      item.left
                    )}
                  </>
                )}

                <CP.Styled.Div>
                  {typeof item.title === "string" ? (
                    <CP.Typography variant="h6" align="start">
                      {item.title}
                    </CP.Typography>
                  ) : (
                    item.title
                  )}

                  {item?.sub && (
                    <>
                      {typeof item.sub === "string" ? (
                        <CP.Typography
                          variant="b3"
                          align="start"
                          color="--light-color"
                        >
                          {item.sub}
                        </CP.Typography>
                      ) : (
                        item.sub
                      )}
                    </>
                  )}
                </CP.Styled.Div>
                {item?.right && (
                  <>
                    {typeof item?.right === "string" ? (
                      <CP.Typography variant="b4">{item.right}</CP.Typography>
                    ) : (
                      item.right
                    )}
                  </>
                )}
              </CP.Styled.Flex>
            </CP.Card>
          );
        })}
    </CP.CardWrap>
  );
};

export default DataCard;

const StyleTable = styled.table`
  width: 100%;
  border: 1px solid var(--light-color);
  border-spacing: 0px;
  border-radius: 4px;

  & > tr > td {
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid var(--light-color);
  }

  & > tr:last-child > td {
    border-bottom: 0px;
  }
`;
