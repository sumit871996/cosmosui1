import logo from './logo.svg';
import './App.css';
import { Box, Button, Text } from 'grommet';

import { Grommet } from 'grommet';

import { hpe } from 'grommet-theme-hpe';
import AppRoutes from './Routes/AppRoutes';
import { AppFooter } from './Components/Footer/AppFooter';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Grommet theme={hpe} full>
      <NavBar />
      <AppRoutes />
      <AppFooter />
    </Grommet>
  );
}

export default App;
