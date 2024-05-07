import { InputAdornment } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ReactNode, useMemo, useState } from "react";
import styled from "styled-components";
import * as Styled from "../styled";
import Button from "../button";
import Popover from "../popover";
import Icon from "../icon";
import { EmptyButton } from "../styled";
import Typography from "../typography";

export interface SelectProps {
  list: { label?: string; value: any }[];
  onSelect?: (value: any) => void;
  selected?: any;
  title?: string;
  children?: ReactNode;
  size?: "sm" | "md";
  placeholder?: string;
  isAll?: boolean;
}

const Select = ({
  list,
  onSelect,
  selected,
  title,
  children,
  size = "md",
  placeholder,
  isAll = false
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  const settingValue = useMemo(() => {
    return String(selected)
      ? list?.find((item) => item.value === selected)?.label
      : "";
  }, [selected, list]);

  const settingList = useMemo(() => {
    return (
      <>
        <>
          {title && (
            <Styled.Div padding={"10px 20px"}>
              <Styled.Typography variant="h5">{title}</Styled.Typography>
            </Styled.Div>
          )}

          <Styled.Div overflow="auto" maxHeight={"70vw"} height="100%">
            <Styled.Flex direction="column" overflow="auto">
              {isAll && (
                <button
                  className={!selected ? " select-selected" : ""}
                  onClick={() => {
                    onSelect ? onSelect("") : console.log("isAll");
                    setOpen(false);
                  }}
                >
                  전체
                </button>
              )}
              {list?.map((item) => {
                return (
                  <button
                    className={
                      item.value === selected ? " select-selected" : ""
                    }
                    onClick={() => {
                      onSelect ? onSelect(item.value) : console.log({ item });
                      setOpen(false);
                    }}
                  >
                    {item?.label}
                  </button>
                );
              })}
            </Styled.Flex>
          </Styled.Div>
        </>
      </>
    );
  }, [selected, list]);

  return (
    <>
      {children ? (
        <EmptyButton onClick={() => setOpen(!open)}>{children}</EmptyButton>
      ) : (
        <>
          {size === "md" ? (
            <StyleOutlinedInput
              readOnly
              fullWidth
              placeholder={placeholder}
              value={settingValue}
              endAdornment={
                <InputAdornment position="end">
                  <Icon name={open ? "ArrowDropUp" : "ArrowDropDown"} />
                </InputAdornment>
              }
              onClick={() => setOpen(!open)}
            />
          ) : (
            <Styled.Flex
              width="auto"
              height="24px"
              gap={4}
              items="center"
              radius={"15px"}
              padding="0px 10px 0px 12px"
              bg={!settingValue ? "--transparent-color" : "--black-color"}
              onClick={() => setOpen(!open)}
              border={!settingValue ? "1px solid var(--border-color)" : "none"}
            >
              <Typography
                variant="c2"
                color={!settingValue ? "--light-color" : "--white-color"}
              >
                {settingValue ? settingValue : placeholder ? placeholder : ""}
              </Typography>
              <Icon
                name={open ? "ArrowDropUp" : "ArrowDropDown"}
                color={!settingValue ? "--light-color" : "--white-color"}
                size={14}
              />
            </Styled.Flex>
          )}
        </>
      )}

      <Popover open={open} onClose={() => setOpen(false)} direction="bottom">
        <Styled.SelectWrapper>{settingList}</Styled.SelectWrapper>
      </Popover>
    </>
  );
};

export default Select;

const StyleOutlinedInput = styled(OutlinedInput)`
  background: var(--white-color);
  height: 40px;
  border: 0px !important;

  & .focus {
    border-width: var(--transparent-color) !important;
  }
  & .MuiInputBase-input {
    height: 100%;
    box-sizing: border-box;
  }
`;
