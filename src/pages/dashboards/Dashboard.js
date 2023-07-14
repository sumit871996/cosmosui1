import { Box, ResponsiveContext } from 'grommet';
import { React, useContext, useEffect, useState } from 'react';
import LeftSideBar from '../../components/sideBar/LeftSideBar';
import BreadCrums from '../../components/breadCrumb/BreadCrumb';
import { Button, Layer } from 'grommet';
import { getURL } from '../../utils/commonUtils';
import { useLocation } from 'react-router-dom';
import DashboardWindow from '../../components/dashboardWindows/data/DataMigrationWindow';
import { dept } from '../../config/dataMigrationOptions';
import ToolBar from '../../components/toolBar/ToolBar';
import DataMigrationWindow from '../../components/dashboardWindows/data/DataMigrationWindow';
import DashboardContext from './DashboardContext';
import Chatbot from 'src/components/Chatbot/Chatbot';
const Dashboard = (props) => {
  const [selectedDashboard, setSelectedDashboard] = useState();

  const location = useLocation();
  // const ctx = useContext(DashboardContext);

  const size = useContext(ResponsiveContext);
  return (
    <DashboardContext.Provider
      value={{
        selectedDashboard: selectedDashboard,
        setSelectedDashboard: setSelectedDashboard,
      }}
    >
      <Box flex>
        <ToolBar />

        <Box
          border='top'
          flex
          direction='row-responsive'
          // overflow={{ vertical: 'scroll' }}
        >
          {props.children}
        </Box>
      </Box>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
