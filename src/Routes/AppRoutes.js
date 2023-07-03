import { Box } from 'grommet';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from '../Pages/Authentication/LoginPage';
import Dashboard from '../Pages/Dashboards/Dashboard';
import DataMigrationWindow from '../Components/DashboardWindows/Data/DataMigrationWindow';
import DataDashboard from '../Components/DashboardWindows/Data/DataDashboard';
import AimlDashboard from '../Components/DashboardWindows/AIML/AimlDashboard';
const AppRoutes = () => {
  const [selectedDashboard, setSelectedDashboard] = useState();

  return (
    <Routes>
      <Route element={<LoginPage />} path='/'></Route>
      <Route
        element={
          <Dashboard
            selectedDashboard={selectedDashboard}
            setSelectedDashboard={setSelectedDashboard}
          >
            <DataDashboard />
          </Dashboard>
        }
        path='/data/dashboard'
      />

      <Route
        element={
          <Dashboard>
            <DataMigrationWindow
              selectedDashboard={selectedDashboard}
              setSelectedDashboard={setSelectedDashboard}
            />
          </Dashboard>
        }
        path='/Data/Data Migration'
      />

      <Route
        element={
          <Dashboard
            selectedDashboard={selectedDashboard}
            setSelectedDashboard={setSelectedDashboard}
          >
            <AimlDashboard />
          </Dashboard>
        }
        path='/AI/ML/dashboard'
      />
      <Route
        element={
          <Dashboard
            selectedDashboard={selectedDashboard}
            setSelectedDashboard={setSelectedDashboard}
          >
            <AimlDashboard />
          </Dashboard>
        }
        path='/Visualization/dashboard'
      />
    </Routes>
  );
};

export default AppRoutes;
