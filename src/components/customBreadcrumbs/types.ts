import { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import { ReactElement, ReactNode } from "react";

// ----------------------------------------------------------------------

export type BreadcrumbsLinkProps = {
  name?: string;
  href?: string;
  icon?: ReactElement;
};

export interface CustomBreadcrumbsProps extends BreadcrumbsProps {
  heading?: string;
  moreLink?: string[];
  activeLast?: boolean;
  action?: ReactNode;
  links: BreadcrumbsLinkProps[];
}
