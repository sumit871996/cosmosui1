import { Box } from 'grommet';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/Authentication/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path='/'></Route>
    </Routes>
  );
};

export default AppRoutes;
