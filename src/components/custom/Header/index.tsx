import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItemType, menus } from '../../../data/menus';
import Item from './Item';
import { Iheader } from './types';

const findHeader = (menu: NavItemType[], path: string): NavItemType[] => {
  const breadcrumbs: NavItemType[] = [];

  const traverse = (menuItem: NavItemType): boolean => {
    console.log(menuItem);

    if (menuItem.url === path) {
      breadcrumbs.push(menuItem);
      return true; // Found the path
    }
    if (menuItem.isHeader === false) {
      return false;
    }

    return false;
  };

  // 각 메뉴 항목을 순회하며 탐색 시작
  for (const item of menu) {
    if (item.isHeader) {
      if (traverse(item)) {
        break; // 하나의 경로를 찾으면 탐색 종료
      }
    }
  }

  return breadcrumbs.length > 0 ? breadcrumbs : [];
};

// TODO: 함수 변경 및 menus 구조 변경
export default function Header({ stepTitle, isStart }: Iheader) {
  // state
  const location = useLocation();
  const currentLocation = location.pathname;
  const [breadcrumbs, setBreadcrumbs] = useState<NavItemType[] | undefined>([]);

  useEffect(() => {
    const foundBreadcrumbs = findHeader(menus, currentLocation);
    setBreadcrumbs(foundBreadcrumbs);
  }, [currentLocation]);

  if (stepTitle !== undefined && stepTitle !== '') {
    return (
      <Box role="presentation" height={56} py={1.88} px={2}>
        <Item isStart={isStart} title={stepTitle} />
      </Box>
    );
  }
  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Box role="presentation" height={56} py={1.88} px={2}>
          {breadcrumbs?.map((item, key) => (
            <Item
              key={key}
              isStart={item.isStart}
              isEnd={item.isEnd}
              title={item.title}
            />
          ))}
        </Box>
      )}
    </>
  );
}
