import { Box, Stack, Typography, useTheme } from '@mui/material';
import { isArray } from 'lodash';
import { CSSProperties, ReactNode } from 'react';

interface ICondition {
  title: string;
  children?: ReactNode;
  layoutSx?: CSSProperties;
}
export default function Condition({ title, children, layoutSx }: ICondition) {
  const theme = useTheme();
  const light = theme.palette.mode === 'light';
  const titleColor = light
    ? theme.palette.common.white
    : theme.palette.grey[800];

  const descColor = light
    ? theme.palette.grey[600]
    : theme.palette.common.white;

  return (
    <Stack gap={3} sx={{ ...layoutSx }}>
      <Box padding={'12px 16px'} bgcolor={theme.palette.grey[800]}>
        <Typography
          variant={'Body16/bold'}
          color={titleColor}
          children={`[${title}]`}
        />
      </Box>
      <Box>
        {isArray(children) ? (
          children.map((typo, key) => (
            <>
              <Typography
                key={key}
                color={descColor}
                variant={'Body14/regular'}
                children={typo}
              />
              <br />
            </>
          ))
        ) : (
          <Typography
            color={descColor}
            variant={'Body14/regular'}
            children={children}
          />
        )}
      </Box>
    </Stack>
  );
}
