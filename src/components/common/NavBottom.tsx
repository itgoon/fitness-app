import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { SyntheticEvent } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useTheme } from '@mui/material';
import { useNavData } from 'src/layouts/configNavigation';
import useModals from 'src/hooks/useModals';
import QrModal from '../custom/QrModal';

export default function NavBottom() {
  const theme = useTheme();

  const navigate = useNavigate();

  const location = useLocation();

  const navData = useNavData();

  const { modals, addModal, removeModal } = useModals();

  const handleQrModal = () => {
    addModal(<QrModal onClose={removeModal} />);
  };

  const onChange = (event: SyntheticEvent<Element, Event>, newValue: any) => {
    if (newValue === '/membership') {
      handleQrModal();
    } else {
      navigate(newValue);
    }
  };

  return (
    <>
      <BottomNavigation
        sx={{ maxHeight: 64, gap: 1.5, px: 2 }}
        showLabels
        value={location?.pathname}
        onChange={onChange}
      >
        {navData?.map((item) => (
          <BottomNavigationAction
            key={item.path}
            sx={{
              minWidth: 64,
              padding: 0,
              span: {
                fontSize: 11,
                fontWeight: 500,
                color:
                  item.path !== location.pathname
                    ? theme.palette.mode === 'light'
                      ? 'grey.500'
                      : 'white'
                    : 'currentColor'
              }
            }}
            label={item.title}
            icon={item?.icon}
            value={item.path}
          />
        ))}
      </BottomNavigation>

      {modals}
    </>
  );
}
