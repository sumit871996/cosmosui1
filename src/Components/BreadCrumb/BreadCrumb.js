import {
  Box,
  Button,
  Header,
  ResponsiveContext,
  Text,
  Avatar,
  Nav,
  Layer,
} from 'grommet';
import { Menu } from 'grommet-icons';

import { getURL } from '../../Utils/commonUtils';
import { useState } from 'react';
import LeftSideBar from '../SideBar/LeftSideBar';
import { NavigationButton } from './NavigationButton';

const BreadCrumb = (props) => {
  const [show, setShow] = useState();
  const getPathElements = () => {
    const pathElements = [];
    const path = getURL();
    return pathElements;
  };

  const onExit = (status) => {
    setShow(status);
  };
  return (
    <Box
      pad={{ left: 'small' }}
      height='40px'
      direction='row'
      style={{ borderBottom: '1px solid' }}
    >
      {!props.expandStatus && (
        <Button>
          <Menu
            size='20px'
            onClick={() => {
              onExit(true);
            }}
          />
        </Button>
      )}
      {show && (
        <Layer
          style={{ borderRadius: '0px' }}
          position='top-left'
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          setSelected={props.setSelected}
        >
          <Box height='100vw'>
            <LeftSideBar
              selected={props.selected}
              setSelected={props.setSelected}
              collapsible={true}
              onExit={onExit}
            />
          </Box>
        </Layer>
      )}
      <NavigationButton
        selected={props.selected}
        setSelected={props.setSelected}
        style={{ height: '1000px' }}
        name='Solution'
      />
      <NavigationButton
        selected={props.selected}
        setSelected={props.setSelected}
        name={props.selected}
        last='true'
      />
    </Box>
  );
};

export default BreadCrumb;
