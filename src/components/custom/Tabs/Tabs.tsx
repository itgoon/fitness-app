import { Tabs as CustomTabs, Tab } from '@mui/material';
import { ITabs } from './types';

export default function Tabs({ value, onChange, frLabel, secLabel }: ITabs) {
  return (
    <CustomTabs
      value={value}
      onChange={onChange}
      scrollButtons={false}
      variant="fullWidth"
    >
      <Tab label={frLabel} />
      <Tab label={secLabel}></Tab>
    </CustomTabs>
  );
}
