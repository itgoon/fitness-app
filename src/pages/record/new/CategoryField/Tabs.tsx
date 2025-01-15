import {
  alpha,
  Tab,
  Tabs as MTabs,
  TabsProps as MTabsProps,
  useTheme
} from '@mui/material';

type TabsProps = MTabsProps & {
  list: { value: any; label: React.ReactNode }[];
};

export default function Tabs({ list, sx, ...props }: TabsProps) {
  const theme = useTheme();

  const { grey } = theme.palette;

  return (
    <MTabs
      scrollButtons={false}
      variant="fullWidth"
      sx={{
        '& .MuiTabs-indicator': {
          display: 'none'
        },
        ...sx
      }}
      {...props}
    >
      {list.map((tab, idx) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          disableRipple={false}
          sx={{
            fontSize: '16px',
            minHeight: 44,
            color: 'text.primary',
            border: `1px solid ${alpha(grey[500], 0.24)}`,
            marginRight: idx === list.length - 1 ? 0 : '16px',
            borderRadius: '6px',
            '&[aria-selected="true"]': {
              borderColor: 'primary.main',
              color: 'primary.main'
            }
          }}
        />
      ))}
    </MTabs>
  );
}
