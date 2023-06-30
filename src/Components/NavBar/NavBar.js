import {
  Box,
  Button,
  Header,
  ResponsiveContext,
  Text,
  Menu,
  Avatar,
  Nav,
  Image,
} from 'grommet';

import {
  Hpe,
  Notification,
  HelpOption,
  Projects,
  Search,
  Language,
} from 'grommet-icons';

import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';

const NavBar = () => {
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();
  return (
    <Header
      fill='horizontal'
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
      style={{
        borderBottom: '0.1px solid',
        borderColor: 'gray',
      }}
    >
      <Box direction='row-responsive' align='center' justify='center' flex>
        <Box
          onClick={() => navigate('/dashboard')}
          margin='0px'
          pad='0px'
          height='100%'
          width='xsmall'
          justify='center'
        >
          <Image
            fit='contain'
            src={require('../../Assets/cosmos/cosmos-final.png')}
          />
        </Box>
        <Box
          flex
          direction='row-responsive'
          gap='xsmall'
          align='center'
          justify='end'
          // margin='auto'
        >
          <Button
            label='Home'
            color='black'
            weight='bold'
            size='small'
            pad={{ horizontal: 'small' }}
            margin='0px'
            onClick={() => navigate('/home')}
          />
          <Button
            label='Contact'
            color='black'
            weight='bold'
            size='small'
            pad={{ horizontal: 'small' }}
            margin='0px'
            onClick={() => navigate('/contact')}
          />
          <Button
            label='About'
            color='black'
            weight='bold'
            size='small'
            pad={{ horizontal: 'small' }}
            margin='0px'
            onClick={() => navigate('/about')}
          />

          <Button
            alignSelf='center'
            icon={<Notification color='black' size='medium'></Notification>}
            onClick={() => navigate('/notifications')}
          />
          <Button
            alignSelf='center'
            icon={<HelpOption color='black' size='medium'></HelpOption>}
            onClick={() => navigate('/help')}
          />

          {/* <Button onClick={() => navigate('/projects')}>
            <Projects color='black' size='medium'></Projects>
          </Button> */}
          <Avatar
            alignSelf='center'
            onClick={() => navigate('/profile')}
            style={{ backgroundColor: 'cyan' }}
            size='30px'
          >
            {/* {getInitials()} */}
          </Avatar>
        </Box>
      </Box>
    </Header>
  );
};

export default NavBar;
