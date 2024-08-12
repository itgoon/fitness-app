import { Drawer, Button as MuiButton, TypographyProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Switch from "@mui/material/Switch";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import styled, { css } from "styled-components";
import { CardProps } from "./card/Card";
import { InputProps } from "./input/Input";
import { RadioProps } from "./radio/Radio";

type DivProps = {
  width?: string;
  height?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
  bg?: string;
  overflow?: string;
  direction?: "row" | "column";
  justify?: "center" | "space-between" | "flex-end" | "flex-start";
  items?: "center" | "space-between" | "flex-end" | "flex-start";
  gap?: number;
  flex?: number;
  position?: "absolute" | "relative" | "inherit" | "fixed" | "sticky";
  border?: string;
  radius?: string;
  textAlign?: string;
};

export const headerHeight = 56;
export const bottomHeight = 72;
export const Div = styled.div<DivProps>`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : "100%")};
  background: ${({ bg }) => (bg ? `var(${bg})` : "var(--transparent-color)")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};

  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  overflow: ${({ overflow }) => (overflow ? overflow : "hidden")};
  position: ${({ position }) => position && position};
  flex: ${({ flex }) => flex && flex};
  border: ${({ border }) => border && border};
  border-radius: ${({ radius }) => radius && radius};
  text-align: ${({ textAlign }) => textAlign && textAlign};
`;
export const Layout = styled(Div)<{ isHeader: boolean; isBottom: boolean }>`
  width: inherit;
  height: inherit;
  padding-top: ${({ isHeader }) => (isHeader ? headerHeight : 0)}px;
  padding-bottom: ${({ isBottom }) => (isBottom ? bottomHeight : 0)}px;
`;
export const Wrapper = styled(Div)<{ isTab?: boolean }>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  overflow: ${({ overflow }) => (overflow ? overflow : "hidden")};
  color: var(--black-color);
  padding: ${({ padding }) => (padding ? padding : "0px")};
`;

export const Flex = styled(Div)<{ wrap?: string }>`
  display: flex;
  flex: ${({ flex }) => flex && flex};
  flex-wrap: ${({ wrap }) => wrap && wrap};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  gap: ${({ gap }) => gap && `${gap}px`};
  align-items: ${({ items }) => (items ? items : "flex-start")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
`;
export const Top = styled(Flex)<{ isBorder?: boolean }>`
  position: absolute;
  background: var(--background-color);
  border-bottom: ${({ isBorder }) =>
    isBorder
      ? "1px solid var(--white-color-300)"
      : "1px solid var(--transparent-color)"};
  top: 0;
  left: 0;
  padding: ${({ padding }) => (padding ? padding : "10px")};
  height: ${headerHeight}px;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
`;

export const Bottom = styled(Flex)`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: ${({ padding }) => (padding ? padding : "16px")};

  height: ${bottomHeight}px;
  display: flex;
  // background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px -2px 6px #0000000f;

  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
`;

export const InputWrapper = styled.div<{
  size: InputProps["size"];
  style: any;
}>`
  width: 100%;

  & .MuiInputBase-root {
    width: inherit;
    height: ${({ size }) => (size === "lg" ? 48 : size === "md" ? 40 : 24)}px;
    background: var(--white-color);

    & .MuiInputBase-input {
      & :-internal-autofill-selected {
        background-color: #ffa !important;
      }

      width: inherit;
      height: inherit;
      padding: ${({ size }) => (size === "lg" ? 16 : size === "md" ? 12 : 4)}px;
      box-sizing: border-box;
      background: var(--white-color) !important;
      color-schema: var(--white-color) !important;
      & ::focus {
        background: transparent;
      }

      fieldset {
        border-color: var(--border-color);
      }
    }
  }
`;

export const Button = styled(MuiButton)<any>`
  height: ${({ size }) => (size === "lg" ? 40 : size === "md" ? 36 : 28)}px;
  background-color: ${({ defaultColor, disabled }) =>
    disabled
      ? "var(--disabled-color)"
      : defaultColor && `var(${defaultColor})`} !important;
  padding: ${({ size }) => (size === "lg" ? 12 : size === "md" ? 10 : 7)}px;
  width: ${({ width }) => width && width} !important;
  min-width: ${({ width }) => width && width} !important;
  border-radius: ${({ type }) => (type === "round" ? 50 : 4)}px !important;

  color: var(--white-color) !important;
  ${(props) =>
    props.type === "round" &&
    css`
      box-shadow: 0px 1px 10px #0000000f;
    `}
  ${(props) =>
    props.type === "text" &&
    css`
      color: ${props.color
        ? `var(${props.color})`
        : "var(--primary-color)"} !important;
      background-color: var(--transparent-color) !important;
      padding: 0px !important;
      width: auto !important;

      svg {
        fill: ${props.color ? `var(${props.color})` : "var(--primary-color)"};
      }
    `}
  ${(props) =>
    props.type === "outlined" &&
    css`
      h1 {
        color: ${props.defaultColor
          ? `var(${props.defaultColor})`
          : "var(--primary-color)"} !important;
      }

      padding: 7px 10px !important;
      border-width: 1px;
      background-color: var(--transparent-color) !important;
      border-color: ${() =>
        props?.disabled
          ? "var(--disabled-color)"
          : props?.defaultColor && `var(${props.defaultColor})`} !important;

      svg {
        fill: ${props.color ? `var(${props.color})` : "var(--primary-color)"};
      }
    `};
`;

export const EmptyButton = styled.button`
  width: 100%;
  background: var(--transparent-color);
  padding: 0px;

  &:hover,
  :active {
    border-color: var(--transparent-color);
  }
  &:focus {
    outline: 0px;
  }
`;

export const RadioWrapper = styled.div`
  width: 100%;
  & .MuiFormGroup-root {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & label {
      display: flex;
    }
  }
`;
export const RadioButtonWrapper = styled.div<{
  wrap: "wrap" | "nowrap";
  color: RadioProps["color"];
}>`
  display: inline-flex;
  gap: 4px;
  flex-wrap: ${({ wrap }) => wrap && wrap};
  width: 100%;
  & button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--light-color);
    opacity: 0.6;
    padding: 6px 15px;
    box-sizing: border-box;
    min-width: 64px;
    width: auto;
    background-color: var(--white-color);
    border-radius: 50px;
    white-space: nowrap;

    height: 24px;

    & h1 {
      color: var(--light-color);
    }
  }
  & .radio-checked {
    opacity: 1;
    border-color: ${({ color }) => color && `var(${color})`} !important;
    background-color: ${({ color }) => color && `var(${color})`} !important;
    padding: 6px 10px 6px 15px;

    & h1 {
      color: var(--white-color);
    }
  }

  .radio-disabled {
    background: var(--disabled-color);
  }
  svg {
    padding-left: 7px;
  }
`;

export const Datepicker = styled(DateCalendar)<{
  height?: number;
  month?: string;
}>`
  width: 100% !important;
  max-height: none !important;
  max-width: none !important;
  height: 100% !important;
  overflow: auto !important;

  .MuiYearCalendar-root {
    width: 100%;
    .MuiPickersYear-yearButton {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .MuiPickersSlideTransition-root {
    min-height: ${({ height }) => height && height}px;
  }

  .MuiPickersCalendarHeader-root {
    padding-left: 12px;

    .MuiPickersCalendarHeader-label {
      font-size: 17px;
    }
  }

  .MuiDayCalendar-header,
  .MuiDayCalendar-weekContainer {
    width: 100%;

    .MuiDayCalendar-weekDayLabel,
    .MuiPickersDay-root {
      font-size: 14px;
      flex: 1;
      padding: 5px;
      aspect-ratio: 1/1;
      height: auto;
      color: var(--dark-color);
      &:first-child {
        color: var(--danger-color);
      }
      &:last-child {
        color: var(--primary-color);
      }
    }
  }

  .Mui-selected {
    background-color: var(--primary-color) !important;
    color: var(--white-color) !important;
    font-weight: 700 !important;
  }
`;

export const CardWrapper = styled(MuiButton)<CardProps>`
  padding: 0px !important;
  width: ${({ width }) => (width ? width : "100%")};

  height: ${({ height, size }) =>
    height
      ? height
      : size && size === "md"
        ? "88px"
        : size === "lg"
          ? "120px"
          : size === "sm"
            ? "72px"
            : "auto"};
  min-height: ${({ height, size }) =>
    height
      ? height
      : size && size === "md"
        ? "88px"
        : size === "lg"
          ? "120px"
          : size === "sm"
            ? "72px"
            : "auto"};
  border-radius: ${({ radius, size }) =>
    radius ? radius : size && size === "lg" ? "4px" : "8px"} !important;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px;

  div > img:not(.MuiAvatar-fallback) {
    border-radius: ${({ radius, size }) =>
      radius ? radius : size && size === "lg" ? "4px" : "8px"};
  }

  & > div {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white-color);
  }
`;
export const CardWrapper2 = styled(Div)<{
  bg?: string;
  height?: string;
  width?: string;
  isActive?: boolean;
  disabled?: boolean;
  activeType?: "border" | "bg";
  rounded?: string;
}>`
  width: ${({ width }) => (width ? width : "100%")};
  // min-height: ${({ height }) => (height ? height : "47px")};
  border-radius: ${({ rounded }) => (rounded ? rounded : "4px")};

  // height: 100%;
  padding: 0px 16px 12px 16px;

  > div {
    height: ${({ height }) => (height ? height : "120px")};
    width: auto;
    border-radius: ${({ rounded }) => (rounded ? rounded : "4px")};
    padding: ${({ padding }) => padding && padding};
    background: ${({ bg }) => (bg ? `var(${bg})` : "var(--white-color)")};
    color: var(--black-color);
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    box-shadow: 0px 1px 10px #0000000f;
  }
`;
export const TagDiv = styled.div<{
  color?: string;
  bg?: string;
  size?: string;
  width?: string;
  margin?: string;
}>`
  width: ${({ width }) => (width ? width : "auto")};
  margin: ${({ margin }) => margin && margin};
  padding: 5px 14px;
  border-radius: 50px;
  background: ${({ bg }) => (bg ? bg : "var(--dark-color)")};
  color: ${({ color }) => (color ? color : "var(--white-color)")};
  font-weight: 700px;
  font-size: ${({ size }) => (size ? size : "12px")};
  text-align: center;
`;

export const CheckboxWrapper = styled.label<{
  color: string;
  opacity?: string;
}>`
  display: flex;
  align-items: center;

  & .MuiCheckbox-root {
    padding: 0px;
  }
  & .MuiSvgIcon-root {
    color: var(${({ color }) => color && `var(${color})`});
    opacity: ${({ opacity }) => (opacity ? opacity : "0.6")};
  }

  & .Mui-checked {
    color: var(--primary-color) !important;
    .MuiSvgIcon-root {
      opacity: 1;
    }
  }
  & h1 {
    margin-left: 4px;
  }
`;

export const StyleDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 100%;
    box-shadow: 0px 19px 38px #00000042;
    border-radius: 4px;
  }
  & .MuiDialogContent-root {
    & > h1 {
      padding-bottom: 16px;
    }
    & > div {
      width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.48px;
      color: var(--white-color-800);
      & > h1 {
        white-space: wrap;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.48px;
        color: var(--white-color-800);
      }
    }
  }

  & .MuiDialogActions-root {
    padding: 0px 22px 12px 22px;
    padding-top: 0px;
    display: flex;
    gap: 16px;
    & > div {
      width: auto;
      margin: 0px;
      & button {
        width: 64px;
        height: 36px;
      }
    }
  }
`;

export const Absolute = styled(Div)<{
  x?: number;
  y?: number;
  position: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
}>`
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  position: absolute;

  ${({ position, x, y }) =>
    position &&
    css`
      ${position === "topRight" &&
      css`
        top: ${y ? y : 20}px;
        right: ${x ? x : 20}px;
      `}
      ${position === "topLeft" &&
      css`
        top: ${y ? y : 20}px;
        left: ${x ? x : 20}px;
      `}
         ${position === "bottomRight" &&
      css`
        bottom: ${y ? y : 20}px;
        right: ${x ? x : 20}px;
      `}
      ${position === "bottomLeft" &&
      css`
        bottom: ${y ? y : 20}px;
        left: ${x ? x : 20}px;
      `}
    `}

  > button {
    margin: 10px;
    box-shadow: 0px 1px 10px #727171;
  }
`;

export const Division = styled.div<{
  direction?: "row" | "column";
  padding?: number;
  bg?: string;
}>`
  background: ${({ bg }) => (bg ? `var(${bg})` : "var(--white-color-50)")};
  ${({ direction, padding }) =>
    direction === "row" &&
    css`
      height: 100%;
      width: 1px;
      margin-top: ${padding && `-${padding}px`};
      padding-bottom: ${padding && `${padding * 2}px`};
    `}
  ${({ direction, padding }) =>
    direction !== "row" &&
    css`
      width: 100%;
      height: 1px;
      margin-left: ${padding && `-${padding}px`};
      padding-right: ${padding && `${padding * 2}px`};
    `}
`;

export const StyleA = styled.a.attrs({ href: "javascript:void(0)" })<
  Omit<TypographyProps, "style" | "children">
>`
  color: var(--primary-color);
  opacity: 0.8;

  ${({ variant }) =>
    variant &&
    css`
      ${typoVariant(variant)}
    `};
`;

export const StyleIcon = styled.img<{ size?: number; color?: string }>`
  color: ${({ color }) => color && `var(${color})`};

  ${({ size }) =>
    size &&
    css`
      width: ${size ? size : 15}px;
      height: ${size ? size : 15}px;
    `};
`;

export const Tag = styled(Div)<{ color: string }>`
  box-sizing: border-box;
  padding: 2px 8px 1px 8px;
  border-radius: 4px;
  background: ${({ color }) => color && `var(${color})`};
  width: auto;
`;

const typoVariant = (variant: TypographyProps["variant"]) => {
  return `
      ${
        variant === "h1" &&
        css`
          font-size: 32px;
          line-height: 42px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };

      ${
        variant === "h2" &&
        css`
          font-size: 28px;
          line-height: 40px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "h3" &&
        css`
          font-size: 24px;
          line-height: 30px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "h4" &&
        css`
          font-size: 20px;
          line-height: 28px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "h5" &&
        css`
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "h6" &&
        css`
          font-size: 16px;
          line-height: 22px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "b1" &&
        css`
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "b2" &&
        css`
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          font-family:
            Pretendard-medium,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "b3" &&
        css`
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          font-family:
            Pretendard-regular,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "b4" &&
        css`
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          font-family:
            Pretendard-regular,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "c1" &&
        css`
          font-size: 12px;
          line-height: 18px;
          font-weight: 700;
          font-family:
            Pretendard-bold,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "c2" &&
        css`
          font-size: 12px;
          line-height: 18px;
          font-weight: 500;
          font-family:
            Pretendard-medium,
            Apple SD Gothic Neo;
        `
      };
      ${
        variant === "ht" &&
        css`
          font-size: 11px;
          line-height: 16px;
          font-weight: 500;
          font-family:
            Pretendard-medium,
            Apple SD Gothic Neo;
        `
      };
    `;
};

export const TabWrapper = styled.div`
  .MuiTabs-root {
    border: 1px solid var(--salary-border-color);
    min-height: 48px;
    height: 48px;

    .MuiButtonBase-root {
      & h1 {
        color: var(--light-color);
      }
      &:last-child {
        border-right: 0px;
      }

      &:hover {
        border-color: var(--white-color-600);
      }
      &:focus {
        outline: 0px;
      }
    }

    .MuiTabs-indicator {
      background: var(--primary-color);
    }
    .Mui-selected {
      & h1 {
        color: var(--dark-color);
      }
    }
  }
`;
export const ExtraText = styled.p.attrs({
  color: "--light-color",
  opacity: "0.6"
})<{ error?: boolean }>`
  padding-top: 4px;
  // margin-left: 16px;
  padding-left: 12px;
  color: ${({ error }) => error && "var(--danger-color)"};
  opacity: ${({ error }) => error && 1};
`;

export const SelectWrapper = styled(Div)`
  padding: 15px 0px;

  button {
    background-color: var(--transparent-color);
    color: var(--dark-color);
    width: 100%;
    text-align: left;
    border-radius: 0px;
    height: 48px;
  }

  .select-selected {
    background-color: var(--dark-color);
    color: var(--white-color);
    font-weight: 700;
  }
`;

export const AntSwitch = styled(Switch)(() => ({
  width: 20,
  height: 16,
  padding: 0,
  display: "flex",

  "&.MuiSwitch-root": {
    width: 52
  },
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 10,
      height: 10
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)"
    }
  },
  "& .MuiSwitch-switchBase": {
    position: "absolute",
    top: 14.5,
    left: 12,
    width: 14,
    height: 9,

    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "var(--primary-color)"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 10,
    height: 10,
    borderRadius: 6
    // transition: theme.transitions.create(["width"], {
    //   duration: 200
    // })
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box"
  }
}));

export const CalendarMonthWrapper = styled(Div)`
  .Mui-selected {
    background-color: var(--primary-color) !important;
    font-weight: 700 !important;

    &:hover {
      background: var(--primary-color) !important;
    }
  }
  .MuiPickersDay-root:focus {
    // background: transparent !important;
  }
`;

export const QRProgressWrapper = styled(Div)`
  .MuiLinearProgress-root {
    background-color: var(--primary-bg-color) !important;
    height: 6px !important;
    border-radius: 5px !important;
  }

  .MuiLinearProgress-bar {
    background: var(--primary-color);
    height: 6px !important;
    border-radius: 5px !important;
  }
`;
export const CalendarWeekWrapper = styled(Flex)`
  height: calc(100% - 100px);

  width: 100%;
  overflow: auto;

  flex-direction: column;
  .rbc-allday-cell {
    display: none;
  }

  .rbc-time-header {
    background: var(--light-color);
    .rbc-header {
      width: 80px;
      padding: 10px;

      .rbc-button-link > span {
        color: #fff;
        font-weight: 700;
      }
    }
  }
  .rbc-today {
    background: var(--light-color);
  }

  .rbc-time-content {
    overflow: auto;
    > div {
      background: var(--white-color);

      .rbc-label {
        color: #fff;
        font-weight: 700;
      }
    }
    & > div:first-child {
      background: var(--light-color);
    }

    .rbc-timeslot-group {
      min-height: 50px;
      .rbc-time-slot {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > div:last-child {
        display: none;
      }
    }
  }

  .rbc-events-container {
    margin-right: 0px;

    .rbc-event {
      padding: 5px;
      border-radius: 0px;
      .rbc-event-label {
        display: none;
      }
      .rbc-event-content {
        font-size: 15px;
      }
    }
  }

  .rbc-current-time-indicator {
    display: none;
  }
`;

export const BubbleButton = styled(EmptyButton)<{ width?: string }>`
  width: ${({ width }) => (width ? width : "auto")};
  aspect-ratio: 1 / 1;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0px 1px 10px #0000000f;
  margin: 10px;
`;

export const TimelineWrapper = styled.div`
  .MuiTimelineDot-filledGrey {
    background-color: var(--disabled-color);
  }
  .MuiTimelineDot-filledPrimary {
    background-color: var(--primary-color);
  }
  .MuiTimelineDot-filledSecondary {
    background-color: var(--secondary-color);
  }
`;
export const CarouselWrapper = styled.div`
  padding: 0px;
  border-radius: 4px;
  height: 440px;
  overflow: hidden;

  .slick-list {
    height: auto;

    h1 {
      display: inline-block;
      padding: 15px 15px 15px 15px;
    }

    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      align-items: center; // 이미지가 정방향이 아닐 경우 가운데 위치
    }
  }
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-dots {
    > li {
      margin: 0px;
      width: 13px;
      > button {
        width: inherit;

        &::before {
          color: var(--primary-color);
        }
      }
    }
    .slick-active > button::before {
      color: var(--primary-color);
    }
  }
}
`;

export const FixCalendarMonthWrapper = styled(Div)`
  .MuiDateCalendar-root {
    width: 100%;
    margint: 0;

    .MuiYearCalendar-root {
      width: 100% !important;
      margin: 0 auto;

      .MuiPickersYear-root {
        .MuiPickersYear-yearButton {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 37px;
        }
        .Mui-selected {
          background-color: var(--primary-color) !important;
        }
      }
    }

    .MuiDayCalendar-header {
      justify-content: space-evenly !important;
      -webkit-justify-content: space-evenly !important;

      .MuiTypography-root {
        font-size: 0.85rem !important;
      }
      .MuiDayCalendar-weekDayLabel[aria-label="토요일"] {
        color: var(--blue-color) !important;
      }
      .MuiDayCalendar-weekDayLabel[aria-label="일요일"] {
        color: var(--red-color) !important;
      }
    }

    .MuiDayCalendar-weekContainer {
      justify-content: space-evenly !important;
      -webkit-justify-content: space-evenly !important;

      .MuiBadge-root {
        .MuiPickersDay-root {
          font-size: 0.85rem !important;
        }
        .Mui-selected {
          background-color: var(--primary-color) !important;
          font-weight: 700 !important;

          &:hover {
            background: var(--primary-color) !important;
          }
        }
        .MuiPickersDay-root[aria-colindex="7"] {
          color: var(--blue-color) !important;
        }
        .MuiPickersDay-root[aria-colindex="1"] {
          color: var(--red-color) !important;
        }
        .MuiPickersDay-root[aria-colindex="7"].Mui-selected,
        .MuiPickersDay-root[aria-colindex="1"].Mui-selected {
          color: #fff !important;
        }
      }
    }
  }
`;
