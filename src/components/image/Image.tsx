/* eslint-disable no-empty */
import * as MuiIcon from "@mui/icons-material";
import * as React from "react";
import { StyleIcon } from "../styled";
import { DetailedHTMLProps } from "react";

export interface ImageProps {}

const Image = ({
  src,
  // ref,
  // height,
  // width,
  // style,
  // alt,
  // className,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  return <img {...props} src={src} />;
};

export default Image;
