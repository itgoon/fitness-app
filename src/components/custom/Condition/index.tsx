import { Box, Stack, Typography, useTheme } from '@mui/material';
import { isArray } from 'lodash';
import { CSSProperties, ReactNode } from 'react';

interface ICondition {
  title: string;
  children?: ReactNode;
  layoutSx?: CSSProperties;
}
/**
 * ******************************************************
 * 약관 및 규정 컴포넌트
 * ******************************************************
 */
export default function Condition({ title, children, layoutSx }: ICondition) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const titleColor = light ? palette.common.white : palette.grey[800];
  const bgColor = light ? palette.grey[800] : palette.common.white;
  const descColor = light ? palette.grey[600] : palette.common.white;

  return (
    <Stack gap={3} sx={{ ...layoutSx }}>
      <Box padding="12px 16px" bgcolor={bgColor}>
        <Typography
          variant="Body16/bold"
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
                variant="Body14/light"
                children={typo}
              />
              <br />
            </>
          ))
        ) : (
          <Typography
            color={descColor}
            variant="Body14/light"
            children={children}
          />
        )}
      </Box>
    </Stack>
  );
}
