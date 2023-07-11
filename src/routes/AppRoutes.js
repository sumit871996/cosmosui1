import { Box } from 'grommet';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from '../pages/authentication/LoginPage';
import Dashboard from '../pages/dashboards/Dashboard';

import DataTransformationWindow from '../components/dashboardWindows/data/DataTransformationWindow';
import DataMigrationWindow from '../components/dashboardWindows/data/DataMigrationWindow';
import DataDashboard from '../components/dashboardWindows/data/DataDashboard';
import AimlDashboard from '../components/dashboardWindows/aiml/AimlDashboard';
import JointPage from '../pages/JointPage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path='/'></Route>
      <Route element={<JointPage />} path='/joint'></Route>

      <Route
        element={
          <Dashboard>
            <DataDashboard />
          </Dashboard>
        }
        path='/data/dashboard'
      />
      <Route
        element={
          <Dashboard>
            <DataMigrationWindow />
          </Dashboard>
        }
        path='/Data/Data Migration'
      />
      <Route
        element={
          <Dashboard>
            <DataTransformationWindow />
          </Dashboard>
        }
        path='/Data/Data Transformation'
      />
      <Route
        element={
          <Dashboard>
            <AimlDashboard />
          </Dashboard>
        }
        path='/AI/ML/dashboard'
      />

      <Route
        element={
          <Dashboard>
            <AimlDashboard />
          </Dashboard>
        }
        path='/Visualization/dashboard'
      />
    </Routes>
  );
};

export default AppRoutes;
