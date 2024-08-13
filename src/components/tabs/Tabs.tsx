import { Tab, Tabs as CustomTabs, Box } from "@mui/material";
import { CustomTabPanelProps, TabsProps } from "./types";

/**
 * ******************************************************
 * Tabs 버튼 기능
 * ******************************************************
 */
function TabPanel({ value, index, children, ...props }: CustomTabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export default function Tabs({ list, ...props }: TabsProps) {
  return (
    <Box>
      <CustomTabs {...props}>
        {list?.map((tab, key) => (
          <Tab label={tab.label} value={tab.value} key={key} />
        ))}
      </CustomTabs>
    </Box>
  );
}
