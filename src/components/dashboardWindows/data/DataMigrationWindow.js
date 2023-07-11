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
import { dataMigrationOptions } from '../../../config/dataMigrationOptions';
import JointPage from '../../../pages/JointPage';
import LeftSideBar from '../../sideBar/LeftSideBar';
import RightSideBar from '../../sideBar/RightSideBar';
import { useContext, useState } from 'react';
import DashboardContext from '../../../pages/dashboards/DashboardContext';
import { Close, FormClose } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
const DataMigrationWindow = () => {
  const navigate = useNavigate();

  const ctx = useContext(DashboardContext);
  const size = useContext(ResponsiveContext);
  const [toolbarProjects, setToolbarProjects] = useState([]);
  const addToolbarElement = () => {
    setToolbarProjects((project) => [...project, 'Project 1']);
  };
  const removeToolbarElement = () => {
    setToolbarProjects((project) => {
      let a = [];
      for (let i = 0; i < project.length - 1; i++) {
        a.push(project[i]);
      }
      return a;
    });
    console.log(toolbarProjects.splice(-1, 1));
  };
  const [show, setShow] = useState();

  const changeShow = () => {
    setShow((status) => {
      return !status;
    });
  };

  const navi = () => {
    navigate('/Data/Data Transformation');
  };
  return (
    <Box direction='row-responsive' fill='horizontal' flex height='70vh'>
      {/* <LeftSideBar
        addToolbarElement={addToolbarElement}
        sidebaroptions={dataMigrationOptions}
        title='Data Migration'
      /> */}

      <Box direction='column' justify='center' align='center' flex>
        {/* <Box
          background='#00739D'
          fill='horizontal'
          border='bottom'
          justify='start'
          align='start'
          direction='row-responsive'
          height='24px'
        >
          {toolbarProjects.map((el) => {
            return (
              <Box
                direction='row-responsive'
                background='white'
                align='center'
                pad={{ horizontal: 'small' }}
                gap='small'
                border={{ color: 'black', side: 'right' }}
              >
                {el}
                <Box onClick={removeToolbarElement}>
                  <FormClose />
                </Box>
              </Box>
            );
          })}
        </Box> */}
        {/* <Box width='100%' direction='row' fill='vertical'>
          <Box background='#F7F7F7' align='center' flex border='right'>
            <Text>Source</Text>
            <JointPage title='Source 1' />
          </Box>
          <Box background='#F7F7F7' align='center' flex>
            <Text>Destination</Text>
            <JointPage title='Destination 1' />
          </Box>
        </Box> */}
        <Box height='100vh' className='chatbot'>
          <Chatbot />
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

      <RightSideBar />
    </Box>
  );
};

export default DataMigrationWindow;
