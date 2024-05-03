import { ReactNode } from "react";
import * as Styled from "../styled";
import Typography from "../typography";
import { TypoVariantType } from "../typography/Typography";

import { Tabs as MuiTabs, Tab as MuiTab } from "@mui/material";
import { TabWrapper } from "../styled";

export interface TabsProps {
  list: { label: string; value: any }[];
  height?: string;
  active?: any;
  onChange?: (idx: any) => void;
  textVariant?: TypoVariantType;
  style?: any;
}

const Tabs = ({ list, textVariant, onChange, active }: TabsProps) => {
  return (
    <TabWrapper>
      <MuiTabs
        value={active ? list?.findIndex((item) => item.value === active) : ""}
        // value={isActive}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {list?.map((item) => (
          <MuiTab
            onClick={() => (onChange ? onChange(item.value) : {})}
            label={
              <Typography variant={textVariant ? textVariant : "h6"}>
                {item.label}
              </Typography>
            }
          />
        ))}
      </MuiTabs>
    </TabWrapper>
  );
};

export default Tabs;
