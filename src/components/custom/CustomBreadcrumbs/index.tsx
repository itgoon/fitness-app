import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItemType, menus } from '../../../data/menus';
import { useCardContext } from '../../../hooks/useCard';
import BasicHeader from './BasicHeader';

interface BreadcrumbsProps {
  onBack?: () => void;
}

const findBreadcrumbs = (menu: NavItemType[], path: string): NavItemType[] => {
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

export default function CustomBreadcrumbs({ onBack }: BreadcrumbsProps) {
  // theme style

  // state
  const location = useLocation();
  const currentLocation = location.pathname;
  const [breadcrumbs, setBreadcrumbs] = useState<NavItemType[] | undefined>([]);

  //   context
  const { selectedCard } = useCardContext();

  useEffect(() => {
    const foundBreadcrumbs = findBreadcrumbs(menus, currentLocation);
    setBreadcrumbs(foundBreadcrumbs);
  }, [currentLocation]);

  if (breadcrumbs?.length === 0) return;

  return (
    <Box role="presentation" height={56} py={1.88} px={2}>
      {breadcrumbs?.map((item, key) => (
        <BasicHeader
          key={key}
          isStart={item.isStart}
          isEnd={item.isEnd}
          title={item.title}
        />
      ))}
      {selectedCard ? <Typography>{selectedCard.date}</Typography> : ''}
    </Box>
  );
}
