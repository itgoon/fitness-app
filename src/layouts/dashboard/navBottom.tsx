import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useNavData } from './configNavigation';
import { useTheme } from '@mui/material';

export default function NavBottom() {
  const theme = useTheme();
  const grey500 =
    theme.palette.mode === 'light' ? theme.palette.grey[500] : 'white';
  const navData = useNavData();
  const navigate = useNavigate();
  const location = useLocation();

  const [list, setList] = useState<any[]>([]);

  useLayoutEffect(() => {
    if (
      !(
        navData?.length > 0 &&
        navData[0]?.items &&
        navData[0]?.items?.length > 0
      )
    )
      return setList([]);

    setList(navData[0]?.items);
  }, [navData, location]);

  console.log({ list });

  return (
    <BottomNavigation
      sx={{ maxHeight: 64, gap: 1.5, px: 2 }}
      showLabels
      value={location?.pathname}
      onChange={(event, newValue) => {
        console.log({ event }, { newValue }, event?.target);

        navigate(newValue);
      }}
    >
      {list?.map((item) => {
        return (
          <BottomNavigationAction
            sx={{
              minWidth: 64,
              padding: 0,
              span: {
                fontSize: 11,
                fontWeight: 500,
                color:
                  item.path !== location.pathname ? grey500 : 'currentColor'
              }
            }}
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
