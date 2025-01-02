import { DropzoneOptions } from "react-dropzone";

import { Theme, SxProps } from "@mui/material/styles";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export interface UploadProps extends DropzoneOptions {
  error?: boolean;
  sx?: SxProps<Theme>;
  thumbnail?: boolean;
  placeholder?: ReactNode;
  helperText?: ReactNode;
  disableMultiple?: boolean;
  //
  file?: CustomFile | string | null;
  onDelete?: () => void;
  //
  files?: (File | string)[];
  onUpload?: () => void;
  onRemove?: (file: CustomFile | string) => void;
  onRemoveAll?: () => void;
}
