import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { NavItemType, menus } from '../../../data/menus';
import Item from './Item';

// 불필요한 코드가 너무 많음. 안쓰는걸 안지움
// 하나의 컴포넌트, 함수에서 너무 많이 처리함
// 불필요한 useEffect

const findHeader = (menu: NavItemType[], path: string) => {
  const traverse = (menuItem: NavItemType) => {
    if (menuItem.url === path) {
      return menuItem;
    }

    return null;
  };

  for (const item of menu) {
    if (traverse(item)) {
      return traverse(item);
    }
  }
};

export default function Header() {
  const location = useLocation();

  const currentLocation = location.pathname;

  const current = findHeader(menus, currentLocation);

  if (!current?.isHeader) return null;

  return (
    <>
      <Box role="presentation" height={56} py={1.88} px={2}>
        <Item
          isStart={current?.isStart}
          isEnd={current?.isEnd}
          title={current?.title}
        />
      </Box>
    </>
  );
}
