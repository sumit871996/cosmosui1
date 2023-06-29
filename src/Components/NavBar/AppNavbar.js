import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hpe } from 'grommet-icons';

import {
  Header,
  Button,
  Text,
  Box,
  DropButton,
  ResponsiveContext,
} from 'grommet';
import { Logout, User } from 'grommet-icons';

const AppNavbar = () => {
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();
  const productName = 'FGI Dashboard';
  const productVersion = '';
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    sessionStorage.removeItem('user');
    // Perform form submission logic here, such as sending data to a server

    navigate('/'); // Navigates to the Mainpage component
  };
  return (
    <Header
      background='background'
      border
      fill='horizontal'
      height='xsmall'
      pad={{ horizontal: 'medium' }}
    >
      <Box align='left' pad='small'>
        <Button plain>
          <Box direction='row' align='start' gap='small'>
            <Hpe color='brand' />
            <Text color='text' weight='bold'>
              HPE
            </Text>
            <Text color='text' truncate>
              {productName}
            </Text>
            <Text color='text' truncate>
              {productVersion}
            </Text>
          </Box>
        </Button>
      </Box>
      <DropButton
        label={<User />}
        dropAlign={
          size !== 'small'
            ? { top: 'bottom', right: 'right' }
            : { top: 'bottom' }
        }
        dropContent={
          <Box pad='medium' gap='small' background='background'>
            <Text color='text-strong'></Text>
            <Button
              alignSelf='start'
              size='medium'
              label='Login/Logout'
              icon={<Logout />}
              onClick={handleSubmit}
            />
          </Box>
        }
      />
    </Header>
  );
};

export default AppNavbar;
