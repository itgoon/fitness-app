import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useTheme } from '@mui/material';
import { useNavData } from './configNavigation';
import QrModal from '../../components/custom/QrModal';
import { QRCenterData, QRCustomerData } from '../../utils/dummy';

export default function NavBottom() {
  const theme = useTheme();
  const grey500 =
    theme.palette.mode === 'light' ? theme.palette.grey[500] : 'white';
  const navData = useNavData();
  const navigate = useNavigate();
  const location = useLocation();
  const [list, setList] = useState<any[]>([]);

  // modal
  const [isOpen, setIsOpen] = useState(false);

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

  const openModal = (newValue) => {
    if (newValue === '/member') {
      setIsOpen((prev) => !prev);
    }
  };
  return (
    <>
      <BottomNavigation
        sx={{ maxHeight: 64, gap: 1.5, px: 2 }}
        showLabels
        value={location?.pathname}
        onChange={(event, newValue) => {
          if (newValue === '/member') {
            openModal(newValue);
          } else {
            navigate(newValue);
          }
        }}
        onClick={(newValue) => openModal(newValue)}
      >
        {list?.map((item, key) => (
          <BottomNavigationAction
            key={key}
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
        ))}
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
      <QrModal
        centerData={QRCenterData}
        customerData={QRCustomerData}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
