import {
  Box,
  Card,
  Text,
  TextArea,
  Grid,
  Button,
  Layer,
  ResponsiveContext,
} from 'grommet';
import Chatbot from 'src/components/Chatbot/Chatbot';

import { dataTransformationOptions } from '../../../config/dataTransformationOptions';
import LeftSideBar from '../../sideBar/LeftSideBar';
import RightSideBar from '../../sideBar/RightSideBar';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardContext from '../../../pages/dashboards/DashboardContext';
const DataTransformationWindow = () => {
  const [show, setShow] = useState();
  const navigate = useNavigate();

  const changeShow = () => {
    setShow((status) => {
      return !status;
    });
  };
  const ctx = useContext(DashboardContext);
  const size = useContext(ResponsiveContext);
  return (
    <Box direction='row-responsive' fill='horizontal' flex height='70vh'>
      <Box direction='column' justify='center' align='center' flex>
        <Box height='100vh' className='chatbot'>
          <Chatbot window='Data Transformation' />
        </Box>
        <Button
          label='Proceed'
          primary
          onClick={() => {
            setShow(true);
            // navi();
          }}
        />
        {show && (
          <Layer
            position='center'
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <Box height='100%'>
              <Card
                // onClick={() =>
                //   navigate(`/${props.dashboardType}/${props.title}`)
                // }
                height='300px'
                title='Edit Details'
                background='light'
                width='100%'
                footer={<Button label='Update' secondary />}
              >
                <Box
                  height='100%'
                  direction='column'
                  pad={{ horizontal: 'medium', vertical: 'medium' }}
                  // align='center'
                  justify='between'
                >
                  <Box>
                    <Text>Migration Details</Text>
                  </Box>
                  <Box>
                    <Box direction='row' gap='medium'>
                      <Text weight='bold'>Source 1</Text> <Text>Target 1</Text>
                    </Box>
                    <Box direction='row' gap='medium'>
                      <Text weight='bold'>Source 2</Text> <Text>Target 2</Text>
                    </Box>
                  </Box>
                  <Box
                    background='#17EBA03D'
                    style={{ borderRadius: '10px' }}
                    direction='row'
                    gap='small'
                    pad='xsmall'
                    fill='horizontal'
                  >
                    <Box
                      width='15px'
                      height='15px'
                      margin={{ left: 'small', top: 'small' }}
                      style={{
                        backgroundColor: '#17EBA0',
                        borderRadius: '7.5px',
                      }}
                    ></Box>

                    <Box flex>
                      <Text>Migrated</Text>
                      <Text size='xsmall'>
                        Data Migration successfully completed
                      </Text>
                    </Box>
                  </Box>
                  <Box direction='row' gap='xsmall'>
                    <Text>Do you want to proceed for</Text>
                    <Text weight='bold' color='black'>
                      Data Transformation?
                    </Text>
                  </Box>
                  <Box direction='row' gap='small'>
                    <Button
                      label='Proceed'
                      primary
                      onClick={() => {
                        setShow(false);
                        navigate('/Data/Data Transformation');
                      }}
                    />
                    <Button label='Close' onClick={() => setShow(false)} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Layer>
        )}
      </Box>
      <RightSideBar />{' '}
    </Box>
  );
};

export default DataTransformationWindow;
