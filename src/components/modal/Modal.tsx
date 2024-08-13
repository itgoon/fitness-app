import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Box, Typography } from "@mui/material";
import { ModalProps } from "./types";

// ----------------------------------------------------------------------

export default function Modal({
  maxWidth = "xs",
  clickMsg,
  closeMsg,
  titIcon,
  btnIcon,
  ...props
}: ModalProps) {
  const { open, onClick, title, content, onClose } = { ...props };
  return (
    <>
      <Dialog fullWidth maxWidth={maxWidth} onClose={onClose} open={open}>
        <Box sx={{ padding: "32px 32px 24px 32px" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {titIcon && titIcon}
            <Box>
              <DialogTitle sx={{ pb: 2 }}>
                <Typography variant="body1" children={title} />
              </DialogTitle>
              {content && (
                <DialogContent sx={{ padding: 0, pb: 2 }}>
                  {" "}
                  {content}{" "}
                </DialogContent>
              )}
            </Box>
          </Box>
          <DialogActions sx={{ pt: 1, pr: 0 }}>
            <Button
              onClick={onClose}
              variant="outlined"
              children={closeMsg}
              size={"small"}
            />
            {clickMsg && (
              <Button
                onClick={onClick}
                variant="contained"
                children={clickMsg}
                size={"small"}
                startIcon={btnIcon && btnIcon}
              />
            )}
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
