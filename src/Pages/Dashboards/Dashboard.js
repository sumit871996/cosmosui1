import { Box, ResponsiveContext } from 'grommet';
import { React, useContext, useEffect, useState } from 'react';
import LeftSideBar from '../../Components/SideBar/LeftSideBar';
import BreadCrums from '../../Components/BreadCrumb/BreadCrumb';
import { Button, Layer } from 'grommet';
import { getURL } from '../../Utils/commonUtils';
import { useLocation } from 'react-router-dom';
import DashboardWindow from '../../Components/DashboardWindows/Data/DataMigrationWindow';
import { dept } from '../../Config/dataMigrationOptions';
import ToolBar from '../../Components/ToolBar/ToolBar';

const Dashboard = (props) => {
  // const renderChildren = () => {
  //   return React.cloneElement(props.children, {
  //     selected: selected,
  //   });
  // };
  const location = useLocation();

  const size = useContext(ResponsiveContext);
  return (
    <Box>
      <ToolBar
        selectedDashboard={props.selectedDashboard}
        setSelectedDashboard={props.setSelectedDashboard}
      />
      <Box height='100%' border='top' flex direction='row-responsive'>
        {props.children}
      </Box>
    </Box>
  );
};

export default Dashboard;
