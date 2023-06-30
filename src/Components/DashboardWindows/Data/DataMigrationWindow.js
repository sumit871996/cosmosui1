import {
  Box,
  Card,
  Text,
  TextArea,
  Grid,
  Button,
  ResponsiveContext,
} from 'grommet';
import LeftSideBar from '../../SideBar/LeftSideBar';
import { useContext } from 'react';
const DataMigrationWindow = (props) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box direction='row-responsive' fill='horizontal'>
      <LeftSideBar />

      <Box direction='column' justify='center' align='center' flex>
        <Box fill='horizontal' border='bottom' justify='center' align='center'>
          menubar
        </Box>
        <Box width='100%' direction='row' fill='vertical'>
          <Box background='#F7F7F7' align='center' flex border='right'>
            <Text>Source</Text>
          </Box>
          <Box background='#F7F7F7' align='center' flex>
            Destination
          </Box>
        </Box>
      </Box>

      <LeftSideBar />
    </Box>
  );
};

export default DataMigrationWindow;
