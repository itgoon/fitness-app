import * as Styled from "../styled";
import { DialogActions, DialogContent } from "@mui/material";
import { ReactNode } from "react";
import Typography from "../typography";
import Button from "../button";

type ModalTypes = "alert" | "confirm";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  contentClassName?: string;
  bottom?: ReactNode;
  close?: boolean;
  style?: any;
  children?: ReactNode;
  type?: ModalTypes;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  title?: string;
  padding?: string;
  // okColor?: ButtonColor;
}

const Modal = ({
  open,
  onClose,
  bottom,
  children,
  type,
  onOk,
  onCancel,
  okText,
  cancelText,
  title,
  padding
}: ModalProps) => {
  return (
    <Styled.StyleDialog open={open} onClose={onClose}>

      <DialogContent style={{ padding : padding ? padding : '24px 22px 28px 22px'}}>
        {title && (
          <Typography variant="h6" color="--white-color-999" wrap="wrap">
            {title}
          </Typography>
        )} 
        <div>
          {typeof children === "string" ? (
            <Typography variant="b2" color="--white-color-800" wrap="wrap">
              {children}
            </Typography>
          ) : (
            children
          )}
        </div>

      </DialogContent>

      {type ? (
        <DialogActions>
          {type === "confirm" ? (
            <>
              <Button
                type="text"
                onClick={onCancel ? () => onCancel() : () => onClose()}
              >
                {cancelText ? cancelText : "취소"}
              </Button>
              <Button
                type="text"
                onClick={onOk ? () => onOk() : () => onClose()}
              >
                {okText ? okText : "확인"}
              </Button>
            </>
          ) : type === "alert" ? (
            <Button type="text" onClick={onOk ? () => onOk() : () => onClose()}>
              {okText ? okText : "확인"}
            </Button>
          ) : (
            <></>
          )}
        </DialogActions>
      ) : bottom ? (
        bottom
      ) : (
        <></>
      )}
    </Styled.StyleDialog>
  );
};

export default Modal;
