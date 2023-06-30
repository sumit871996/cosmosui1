import { Box, Button, ResponsiveContext, Text } from 'grommet';
import { Add, Target } from 'grommet-icons';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const LeftSideBarElement = (props) => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  return (
    <Box
      direction='row-responsive'
      width={!['xsmall', 'small', 'medium'].includes(size) ? '20vw' : '150px'}
      border='bottom'
      pad='small'
      align='center'
      style={{
        backgroundColor: '#F7F7F7',
        border: props.selected == props.dataMigrationOptions && 'bottom',
      }}
      // justify='between'
    >
      <Target color='#00567A' />
      <Box
        pad={{ horizontal: 'small' }}
        flex
        onClick={() => {
          props.setSelected(props.dataMigrationOptions);
        }}
        style={{
          borderRadius: '0px',
        }}
      >
        <Text weight='bold' color='#00567A'>
          {props.dataMigrationOptions}
        </Text>
      </Box>
      <Add color='black' />
    </Box>
  );
};

export default LeftSideBarElement;
