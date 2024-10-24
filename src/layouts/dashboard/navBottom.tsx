import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useNavData } from './configNavigation';

export default function NavBottom() {
  const navData = useNavData();
  const navigate = useNavigate();
  const location = useLocation();

  const [list, setList] = useState<any[]>([]);

  useLayoutEffect(() => {
    console.log({ location });
    if (
      !(
        navData?.length > 0 &&
        navData[0]?.items &&
        navData[0]?.items?.length > 0
      )
    )
      return setList([]);

    setList(navData[0]?.items);
  }, [navData]);

  console.log({ list });

  return (
    <BottomNavigation
      sx={{ maxHeight: 64, gap: 1.5, px: 2 }}
      showLabels
      value={location?.pathname}
      onChange={(event, newValue) => {
        console.log({ event }, { newValue }, event?.target);
        // setValue(newValue);

        navigate(newValue);
      }}
    >
      {list?.map((item) => {
        return (
          <BottomNavigationAction
            sx={{ minWidth: 64, padding: 0 }}
            label={item.title}
            icon={item?.icon}
            value={item.path}
          />
        );
      })}
      {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  );
}
